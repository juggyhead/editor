utils = {};

// Returns an object with properties:
// 'node', 'value' and 'offset'.
utils.getNodeValueOffsetAtCursor = function(field) {
  var node=field, value="", offset=0;
  if (1) {
    var win = window;
    var sel = win.getSelection();
    offset = sel.focusOffset;
    parentnode = sel.focusNode;
    if ("data" in parentnode) {  // inside a text node
        value = parentnode.data;
        node = parentnode;
        // offset stays the same.
    } else  {
        // cursor is after the ith node in the dom tree
        // create a new node for this text.
        var doc = win.document;
        value = "";
        node = doc.createTextNode(value);

        var clen = parentnode.childNodes.length;
        if (offset >= clen) {
            // append node at the end.
            parentnode.appendChild(node);
        } else {
            // insert before the i+1th child.
            parentnode.insertBefore(node, parentnode.childNodes[offset]);
        }
    }
  } else {
    var win = field.editableDomHelper.getWindow();
    var range = goog.dom.Range.createFromWindow(win);
    if (!range) { return null; }
    if (!range.isCollapsed()) {
      range.collapse();
    }

    node = range.getStartNode();
    offset = range.getStartOffset();
    value = '';
    if (utils.IsTextNode(node)) {
      value = node.nodeValue;
    } else {
      value = node.innerHTML;
    }
  }
  var obj = {};
  obj.node = node;
  obj.value = value;
  obj.offset = offset;
  return obj;
}

utils.IsTextNode = function(node) {
  if (node['nodeType'] == 3) {
    return true;
  }
  return false;
}

utils.placeCursorAfterStringInNode = function(win, node, str) {
  if (!utils.IsTextNode(node)) {
    var oldnode = node;
    node = goog.dom.findNode(oldnode, utils.IsTextNode);
    if (!node) {
      logger.info("not found: " + oldnode.outerHTML);
    }
  }
  var newrange = goog.dom.Range.createCaret(node,
                 str.length);
  newrange.select();
}

/* ==============================================
 * Memory functions
 */

memory = {};
memory.lasttyped = '';
memory.draftName = 'draft';

memory.getMemory = function() {
  return memory.lasttyped;
}

memory.setMemory = function(inputch, cursorstr) {
  if (!inputch) {
    return;
  }
  if (!!memory.lasttyped) {
    var len = memory.lasttyped.length;
    if (len > 3) {
      memory.lasttyped = memory.lasttyped.substr(
        memory.lasttyped.length - 3
      );
    }
    memory.lasttyped += inputch;
  } else {
    memory.lasttyped = inputch;
  }
}

memory.clearMemory = function() {
  memory.lasttyped = '';
}

memory.setMemoryAndTimer = function(inputch, cursorstr) {
  clearTimeout(memory.timer);
  memory.setMemory(inputch, cursorstr);
  memory.timer = setTimeout(memory.clearMemoryAndTimer, 2000);
  console.log("setting memory: ", memory);
}

memory.clearMemoryAndTimer = function() {
  console.log("clearing memory: ", memory);
  clearTimeout(memory.timer);
  memory.clearMemory();
}

////////////////////////////////

memory.hasName = function(name) {
	return (name in localStorage);
}

memory.saveAs = function(contents, name) {
	if (contents && contents.length > 4) { // to ignore "<br>"
	  localStorage[name] = contents;
	  // if (console) console.log("saved: " + contents);
	  return true;
	}
	return false;
}

memory.saveContents = function(contents, name) {
	if (memory.hasName(name)) {
		var str = "A file by name '" + name + "' already exists.\n Do you want to overwrite it?"
		var yes = confirm(str);
		if (!yes) {
			return;
		}
	}
	return memory.saveAs(contents, name);
}

memory.getHour = function(date_obj) {
	var h = date_obj.getHours();
	if (h <= 12) {
		return h + "am";
	}
	return (h-12) + "pm";
}

// Returns null if draft is not saved (either because no content, or some error).
memory.saveDraft = function(contents) {
	var d = new Date();
	var base_name = memory.draftName + " on " + d.toDateString() + " at " + memory.getHour(d);
	var draft_name = base_name;
	// check if a draft with this name already exists, and if so, do not overwrite that
	// content if it is substantially different than the current one.
	for (var i = 1; i < 100; ++i) {
		draft_name = base_name + " (version " + i + ")";
		var tmp_content = memory.getSavedContent(draft_name);
		if (tmp_content == null) {
			break; // can save in this name
		} else {
			// check for content size.
			var s1 = tmp_content.length;
			var s2 = contents.length;
			if ((s2 > s1) || (s1-s2 < 15)) {
				// can overwrite this draft
				break;
			}
			// create a new name
		}
	}
	if (memory.saveAs(contents, draft_name)) {
		var date_str = d.toString();
		var gmt = date_str.indexOf("GMT");
		date_str = date_str.substr(0, gmt);
		return date_str;
	}
	return null;
}

// Returns null if content not found.
memory.getSavedContent = function(name) {
	if (!memory.hasName(name)) {
		return null;
	}
	return localStorage[name];
}

memory.getSavedNames = function() {
	var names = [];
	for (name in localStorage) {
		names.push(name);
	}
	return names;
}

memory.deleteContent = function(name) {
	if (name in localStorage) {
		localStorage.removeItem(name);
	}
}
