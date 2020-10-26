keyslayout = {};

keyslayout.inversemap = {};

keyslayout.fillInverseMap = function() {
  if ('filled' in keyslayout) {
    return;
  }
  
  keyslayout.orderedkeys = [];
  var endindex = 200;
  
  for (var key in languagemappings) {
    if (!key) continue;
    var value = languagemappings[key];
    if (value in keyslayout.inversemap) {
      keyslayout.inversemap[value] += ", ";
      keyslayout.inversemap[value] += key;
    } else {
      keyslayout.inversemap[value] = key;
      if (value.length == 1) {
        keyslayout.orderedkeys[
          value.charCodeAt(0) - language.startoffset] = value;
      } else {
        // combo letters. append at end.
        keyslayout.orderedkeys[endindex++] = value;
      }
    }
  }
  
  keyslayout.filled = 1;
}

keyslayout.displayMappings = function(pid, opt_deletemappings) {
  keyslayout.pane = goog.dom.getElement(pid);
  keyslayout.pane.innerHTML = '';
  
  var node = goog.dom.createElement('div');
  node.innerHTML = 
    '<br/>&nbsp;<b><a href=# onclick="keyslayout.addNewMapping()">' +
    'Add custom mapping' +
    '</a></b><br/><br/>';
  goog.dom.appendChild(keyslayout.pane, node);
  
  keyslayout.fillInverseMap();
  
  var len = keyslayout.orderedkeys.length;
  var divnode;
  var added = 0;
  for (var i = 0; i < len; i++) {
    if (added%27 == 0) {
      divnode = goog.dom.createElement('div');
      divnode.className = 'mappingkey';
      goog.dom.appendChild(keyslayout.pane, divnode);
    }
    var value = keyslayout.orderedkeys[i];
    if (!!value) {
      var key = keyslayout.inversemap[value];
      var node = goog.dom.createElement('div');
      node.innerHTML = keyslayout.htmlForKeyValue(key, value);
      goog.dom.appendChild(divnode, node);
      added++;
    }
  }
  
  if (opt_deletemappings) {
    keyslayout.deleteMappings();
  }
}

keyslayout.htmlForKeyValue = function(key, value) {
  return value + ' -- ' + key;
}

keyslayout.latinLetterHandler = function(key) {
    languagemappings[key] = keyslayout.newvalue;
    language.useradded[keyslayout.newvalue] = 1;
    keyslayout.displayMappings('mappings', true);
    keyslayout.newvalue = null;
}

keyslayout.languageLetterHandler = function(value) {
  if (!value) return;
  keyslayout.newvalue = value;
  var prompt = new goog.ui.Prompt(
       'Corresponding Lating alphabets',
       'Enter the Latin alphabets to map "' + value + '"',
       keyslayout.latinLetterHandler);
  prompt.setVisible(true);
}

keyslayout.addNewMapping = function() {
   var prompt = new goog.ui.Prompt(
     'New ' + language.name + ' key',
     'Enter the ' + language.name + ' letter:',
      keyslayout.languageLetterHandler);
   prompt.setVisible(true);
}

keyslayout.deleteMappings = function() {
    delete keyslayout.orderedkeys;
    delete keyslayout.inversemap;
    delete keyslayout.filled;
    keyslayout.inversemap = {};
}
