(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("prop-types"), require("react")) : factory(root["PropTypes"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, (__WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@ux/intents/lib/feedback-expressions.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ux/intents/lib/feedback-expressions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = {
  CRITICAL: 'Critical',
  SUCCESS: 'Success',
  WARNING: 'Warning',
  INFO: 'Info',
  HIGHLIGHT: 'Highlight',
  NEUTRAL: 'Neutral',
  INTERNAL: 'Internal',
  PASSIVE: 'Passive',
  PREMIUM: 'Premium'
};
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/space/lib/classes.js":
/*!***********************************************!*\
  !*** ./node_modules/@ux/space/lib/classes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = spaceClasses;

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _options = _interopRequireDefault(__webpack_require__(/*! ./options */ "./node_modules/@ux/space/lib/options.js"));

const UX_SPACE_CLASSNAME = 'ux-space';
/**
 * Creates a collection of attributes for spacing styles
 *
 * @param {Object} props - A props configuration object
 * @param {String} props.as - Determines what kind of space to apply
 * @param {String} [props.className] - A class name to include
 * @param {Boolean} [props.inline] - Include space in the horizontal direction
 * @param {Boolean} [props.block] - Include space in the vertical direction
 * @param {Boolean} [props.gap] - Include space in between child elements
 * @returns {String} A collection of classnames
 */

function spaceClasses(props) {
  const {
    as,
    className,
    inline,
    block,
    gap
  } = props || {};
  return (0, _classnames.default)(UX_SPACE_CLASSNAME, className, {
    [`${UX_SPACE_CLASSNAME}--as-${as}`]: Object.values(_options.default).includes(as),
    [`${UX_SPACE_CLASSNAME}--inline`]: inline,
    [`${UX_SPACE_CLASSNAME}--block`]: block,
    [`${UX_SPACE_CLASSNAME}--gap`]: gap
  });
}

/***/ }),

/***/ "./node_modules/@ux/space/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@ux/space/lib/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "asOptions", ({
  enumerable: true,
  get: function () {
    return _options.default;
  }
}));
exports.space = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _classes = _interopRequireDefault(__webpack_require__(/*! ./classes */ "./node_modules/@ux/space/lib/classes.js"));

var _options = _interopRequireDefault(__webpack_require__(/*! ./options */ "./node_modules/@ux/space/lib/options.js"));

const _excluded = ["as", "className", "children", "inline", "block", "gap"];

/**
 * Creates a function which represents a dynamic React component
 *
 * @param {String} TagName - The tag name of the element to use for space
 * @returns {Function} - A function to create a component
 */
function create(TagName) {
  /**
   * Creates a React component using the given tag name
   *
   * @param {Object} props - A props configuration object
   * @param {String} props.as - Determines the density of the component and its children
   * @param {String} [props.className] - A class name to include
   * @param {Node} [props.children] - Children
   * @param {Boolean} [props.inline] - Include space in the horizontal direction
   * @param {Boolean} [props.block] - Include space in the vertical direction
   * @param {Boolean} [props.gap] - Include space in between child elements
   * @param {Object} ref - Element reference
   * @returns {React.Component} - A functional React component
   */
  const Space = /*#__PURE__*/_react.default.forwardRef(function Space(props, ref) {
    const _ref = props || {},
          {
      as,
      className,
      children,
      inline,
      block,
      gap
    } = _ref,
          rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

    return /*#__PURE__*/_react.default.createElement(TagName, (0, _extends2.default)({
      className: (0, _classes.default)({
        as,
        className,
        inline,
        block,
        gap
      }),
      ref: ref
    }, rest), children);
  });
  /**
   *
   * @enum {Object} expected types of properties.
   * @public
   */


  Space.propTypes = {
    /** Determines the density of the component and its children */
    as: _propTypes.default.oneOf(Object.values(_options.default)).isRequired,

    /** Children for the component */
    children: _propTypes.default.node,

    /** Classes to apply to component */
    className: _propTypes.default.string,

    /** Include space in the horizontal direction */
    inline: _propTypes.default.bool,

    /** Include space in the vertical direction */
    block: _propTypes.default.bool,

    /** Include space in between child elements */
    gap: _propTypes.default.bool
  };
  return Space;
}

const space = new Proxy(function () {}, {
  get: function get(target, prop) {
    // Deliberately not using hasOwnProperty to catch things like __proto__
    if (!String(prop).startsWith('_') && typeof target[prop] === 'undefined') {
      // Cache access by creating a key with value
      target[prop] = create(prop);
    } // Always return thing at that key, either undefined or thing set


    return Reflect.get(...arguments);
  }
});
exports.space = space;
var _default = space;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/space/lib/options.js":
/*!***********************************************!*\
  !*** ./node_modules/@ux/space/lib/options.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.UX_SPACE_AS = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Each key is a named level of density.
 * Each factor is a number which is multiplied against
 *  the grid unit (intents.ux.box.density) value which determines the space.
 */
const UX_SPACE_AS = {
  module: {
    paddingFactor: 8,
    gapFactor: 3
  },
  block: {
    paddingFactor: 5,
    gapFactor: 3
  },
  lockup: {
    paddingFactor: 2,
    gapFactor: 1
  }
};
exports.UX_SPACE_AS = UX_SPACE_AS;
const asOptions = Object.keys(UX_SPACE_AS).reduce((acc, key) => _objectSpread({
  [key.toUpperCase()]: key
}, acc), []);
var _default = asOptions;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/tag/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/@ux/tag/lib/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Tag;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _space = _interopRequireWildcard(__webpack_require__(/*! @ux/space */ "./node_modules/@ux/space/lib/index.js"));

var _feedbackExpressions = _interopRequireDefault(__webpack_require__(/*! @ux/intents/lib/feedback-expressions */ "./node_modules/@ux/intents/lib/feedback-expressions.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Tag(_ref) {
  let {
    children,
    type,
    className
  } = _ref;

  if (!children) {
    children = type;
  }

  return /*#__PURE__*/_react.default.createElement(_space.default.span, {
    className: (0, _classnames.default)('ux-tag', `ux-tag-${type}`, className),
    as: _space.asOptions.LOCKUP,
    block: true,
    inline: true
  }, children);
}

Tag.propTypes = {
  children: _propTypes.default.string,
  type: _propTypes.default.oneOf(['ghost', // No intent applied, should be deprecated for "default"
  'draft', // No intent applied, should be deprecated entirely
  ...Object.values(_feedbackExpressions.default).map(v => v.toLowerCase())]),
  className: _propTypes.default.string
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "prop-types":
/*!*********************************************************************************************************!*\
  !*** external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"} ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"} ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ ((module) => {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/***/ ((module) => {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/***/ ((module) => {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/***/ ((module) => {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _tag = _interopRequireDefault(__webpack_require__(/*! @ux/tag */ "./node_modules/@ux/tag/lib/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import Search from '@ux/search';
// import '@ux/search/dist/styles.css';
// import CloudUpload from '@ux/icon/cloud-upload';
// import '@ux/icon/cloud-upload/index.css';
// import '@ux/tag/dist/styles.css';
var _default = function _default() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "uxcore test"), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement(_tag["default"], {
    type: "critical"
  }, "Test tag")));
};
exports["default"] = _default;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map