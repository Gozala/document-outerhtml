'use strict';

import doctypeToString from "../modules/doctype-to-string/lib/index.js"

const documentOuterHTML = (document) => {
	if (!document || document.nodeType === undefined || document.nodeType !== document.DOCUMENT_NODE) {
		throw new TypeError('Expected a Document');
  }
  
	return [...document.childNodes].map(nodeToString).join('\n')
}

const nodeToString = (node) => {
	switch (node.nodeType) {
		case node.ELEMENT_NODE:
			return node.outerHTML;
		case node.TEXT_NODE:
			return node.textContent;
		case node.COMMENT_NODE:
			return '<!--' + node.textContent + '-->';
		case node.DOCUMENT_TYPE_NODE:
      return doctypeToString(node);
		default:
			throw new TypeError('Unexpected node type: ' + node.nodeType);
	}
}

export default documentOuterHTML