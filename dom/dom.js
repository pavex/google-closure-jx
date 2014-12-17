/**
 * @fileoverview DOM helper
 * @author pavex
 */

goog.provide('jx.dom');

goog.require('goog.dom');





/**
 * @return {Element}
 */
jx.dom.createHiddenInputElement = function() {
	var el = goog.dom.createElement(goog.dom.TagName.INPUT);
	el.type = 'hidden';
	return el;
};





/**
 * @param {Element}
 * @param {string}
 * @param {string=}
 * @return {string}
 */
jx.dom.getAttribute = function(el, name, opt_default_value) {
	if (el.hasAttribute(name)) {
		return el.getAttribute(name);
	}
	return opt_default_value || null;
};
