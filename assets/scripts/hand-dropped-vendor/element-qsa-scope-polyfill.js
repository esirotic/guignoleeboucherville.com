/**
 * @link https://github.com/jonathantneal/element-qsa-scope/blob/master/index.js
 */
try{document.querySelector(":scope *")}catch(t){!function(t){var e=/:scope(?![\w-])/gi,r=u(t.querySelector);t.querySelector=function(t){return r.apply(this,arguments)};var c=u(t.querySelectorAll);if(t.querySelectorAll=function(t){return c.apply(this,arguments)},t.matches){var n=u(t.matches);t.matches=function(t){return n.apply(this,arguments)}}if(t.closest){var o=u(t.closest);t.closest=function(t){return o.apply(this,arguments)}}function u(t){return function(r){if(r&&e.test(r)){var c="q"+Math.floor(9e6*Math.random())+1e6;arguments[0]=r.replace(e,"["+c+"]"),this.setAttribute(c,"");var n=t.apply(this,arguments);return this.removeAttribute(c),n}return t.apply(this,arguments)}}}(Element.prototype)}