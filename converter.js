// To change language, do <languagename>.setAsTypingLanguage();
language = {};
languagemappings = {};

om = {};  // language independent.
om.ProcessKeypressEvent = function(e, field) {
  console.log("current memory: ", memory);
  var haskey = 'key' in e;
  var ch = haskey ? e.key : '';
  var control_pressed = e['ctrlKey'] || e['metaKey'];
  if ((ch.length != 1) || control_pressed) {
    return true;
  }
  if (e.keyCode == 13) {  // ENTER
    memory.clearMemoryAndTimer();
    return true;
  }

  var MapClear = om.getMappingFromEnglish(ch);

  if (!MapClear) {
    // no mapping for this char. display it as is.
    // also add it to memory.
    memory.setMemoryAndTimer(ch, strbeforecursor);
    return true;
  }

  MapClear.inputchar = ch;

  var strbeforecursor =
      om.insertMappedString(MapClear, field);

  if (!!strbeforecursor) {
    e.preventDefault();
    // to prevent a bug when typing "jai" converts to "ऐ", we do not store in
    // memory when we remove virama ('a' after 'j')
    if (MapClear.backspaceonlyvirama) {
      memory.setMemoryAndTimer(ch, strbeforecursor);
    } else {
      memory.setMemoryAndTimer(ch, strbeforecursor);
    }
  } else {
    // no chars added. maybe a backspace. or some neutralizer.
    memory.clearMemoryAndTimer();
  }
}

om.getMappingFromEnglish = function(inputch) {
  if (!inputch) {
    return null;
  }
  var obj = {};
  obj.str = '';
  obj.backspace = false;
  obj.backspaceonlyvirama = false;

  if (!!memory.getMemory()) {
    var str = memory.getMemory() + inputch;
    if (str in languagemappings) {
      // Note: this function only removes virama this way:
      // sV+h becomes shV.
      var mapping = languagemappings[str];
      console.log("found in lang mapping: ", str, mapping);
      mapping = om.addOrRemoveViramaToMapping(
                mapping, str);
      obj.str = mapping;
      matra_is_to_be_inserted = mapping in language.matra;
      if (matra_is_to_be_inserted) {
        // to fix the bug while typing "jai", where "a" was stored in memory,
        // and "ai" got rid of "j".
        obj.backspaceonlyvirama = true;
      } else {
        obj.backspace = true;
      }
      return obj;
    }
  }

  // either no prev memories, or
  // str is not in mappings. anyways clear memory.
  memory.clearMemoryAndTimer();

  if (inputch in languagemappings) {
    var mapping = languagemappings[inputch];
    mapping = om.addOrRemoveViramaToMapping(
                mapping,
                inputch);
    obj.str = mapping;
    // if the input char is a vowel and prev sanskrit char
    // was a virama, then remove the latter.
    if (mapping in language.matra) {
      obj.backspaceonlyvirama = true;
    }
    return obj;
  }
  return null;
}

om.insertMappedString = function(MapClear, field) {
  var mappedstr = MapClear.str;
  var inputchar = MapClear.inputchar;

  var NVO = utils.getNodeValueOffsetAtCursor(field);
  if (!NVO) {
    return false;
  }
  var node = NVO.node;
  var oldvalue = NVO.value;
  var offset = NVO.offset;
  var newstringbeforecursor = mappedstr;
  var newvalue = newstringbeforecursor;
  if (!!oldvalue) {
    // slice in str into oldvalue.
    var oldstringbeforecursor = oldvalue.substr(0, offset);
    if (oldstringbeforecursor.length > 0) {
      // for cases like sV + h to make it shV (replace
      // sV with shV.)
      if (MapClear.backspace) {
        oldstringbeforecursor = om.backspaceAndRemoveVirama(oldstringbeforecursor);
      } else if (MapClear.backspaceonlyvirama) {
        var oldlen = oldstringbeforecursor.length;
        oldstringbeforecursor = om.backspaceOnlyVirama(oldstringbeforecursor);
        var newlen = oldstringbeforecursor.length;
        if (newlen == oldlen-1) {
          // virama was removed.
          // if the input was 'a', mission accomplished.
          // nothing more to append.
          // Note: we used mappedstr as inputchar is not available.
          //if (mappedstr == language.a) {
          if (inputchar == 'a') {
            mappedstr = '';
          }
        }
      }
    }

    // If at the start of a line or word, convert matras
    // to their corresponding vowel forms.
    // Typical sequence of events that happen when one types
    // "o" followed by "o" as a new word:
    // 1) the first "o" is converted to matra.o above, which is then
    //  converted to vowel.o here.
    // 2) the second "o" is attached to the first and mapped to
    //  matra.oo, which triggers a backspace. This backspace removes
    //  vowel.o and makes it matra.oo above. The below code then
    //  converts matra.oo to vowel.oo.
    // 3) only for the input char 'a', this sequence is disrupted
    //  because of the above code to handle removal of virama.
    // 4) Hence only for letter 'a', we allow an exception.
    var isWordStart = !oldstringbeforecursor ||
      (oldstringbeforecursor.charAt(
        oldstringbeforecursor.length-1) == ' ') ||
      (oldstringbeforecursor.charAt(
        oldstringbeforecursor.length-1).charCodeAt(0) == 160);
    if (isWordStart) {
        // Convert matras to vowels.
        if (mappedstr in language.matra_to_vowel) {
          mappedstr = language.matra_to_vowel[mappedstr];
        }
    }
    // Exception handling for case when we have language.A before
    // cursor and the input is 'a'.
    if (!!oldstringbeforecursor &&
        (oldstringbeforecursor.charAt(
          oldstringbeforecursor.length-1) == language.A) &&
        (inputchar == 'a')) {
      // remove language.A and insert language.AA
      oldstringbeforecursor = om.backspaceAndRemoveVirama(oldstringbeforecursor);
      mappedstr = language.AA;
    }

    newstringbeforecursor = oldstringbeforecursor + mappedstr;
    newvalue = newstringbeforecursor + oldvalue.substr(offset);
  }

  // update the field.
  if (utils.IsTextNode(node)) {
    node.textContent = newvalue;
  } else {
    node.innerHTML = newvalue;
  }

  // to handle cases where sometimes the caret goes missing.
  utils.placeCursorAfterStringInNode(window, node, newstringbeforecursor);

  var ret = om.getSuffix(newstringbeforecursor);
  return ret;
}


om.getSuffix = function(str) {
  if (!str) return '';
  return str.substr(str.length - 1);
}

// F("ॐ", "om")
om.addOrRemoveViramaToMapping =
function(mapstr, orgstr) {
  if ((mapstr in language.matra) ||
      (mapstr in language.vowel) ||
      (mapstr in language.digits) ||
      (mapstr in language.punctuations) ||
      (mapstr in language.useradded)) {
    return mapstr;
  }
  return mapstr + language.virama;
}

om.backspaceAndRemoveVirama = function(str) {
  if (!str) return str;
  var len = str.length;
  if (len == 1) return '';
  if (str[len - 1] == language.virama) {
    str = str.substr(0, len - 1);
  }
  return om.backspace(str);
}
om.backspaceOnlyVirama = function(str) {
  if (!str) return str;
  var len = str.length;
  if (len > 0) {
    is_virama = str[len - 1] == language.virama;
    is_matra = str[len - 1] in language.matra;
    if (is_virama || is_matra) {
      //console.log("backspaceOnlyVirama: ", str[len - 1], is_virama, is_matra)
      str = str.substr(0, len - 1);
    }
  }
  return str;
}
om.backspace = function(str) {
  if (!str) return str;
  var len = str.length;
  if (len == 1) return '';
  return str.substr(0, len - 1);
}
om.removeViramaFromEnd = function(str) {
  if (!str) return str;
  var len = str.length;
  if (str[len - 1] == language.virama) {
    str = str.substr(0, len - 1);
  }
  return str;
}
