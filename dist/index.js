(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"), require("@ux/button")["default"], require("@ux/text")["default"], require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types", "@ux/button", "@ux/text", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("prop-types"), require("@ux/button")["default"], require("@ux/text")["default"], require("react-dom")) : factory(root["React"], root["PropTypes"], root["ux"]["Button"], root["ux"]["Text"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE__ux_button__, __WEBPACK_EXTERNAL_MODULE__ux_text__, __WEBPACK_EXTERNAL_MODULE_react_dom__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrow": () => (/* binding */ arrow),
/* harmony export */   "autoPlacement": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoPlacement),
/* harmony export */   "autoUpdate": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.autoUpdate),
/* harmony export */   "computePosition": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.detectOverflow),
/* harmony export */   "flip": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.flip),
/* harmony export */   "getOverflowAncestors": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.getOverflowAncestors),
/* harmony export */   "hide": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.hide),
/* harmony export */   "inline": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.inline),
/* harmony export */   "limitShift": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.limitShift),
/* harmony export */   "offset": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.offset),
/* harmony export */   "platform": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.platform),
/* harmony export */   "shift": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.shift),
/* harmony export */   "size": () => (/* reexport safe */ _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.size),
/* harmony export */   "useFloating": () => (/* binding */ useFloating)
/* harmony export */ });
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/dom */ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.mjs");
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @floating-ui/dom */ "./node_modules/@floating-ui/core/dist/floating-ui.core.browser.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);






var index = typeof document !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_1__.useEffect;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }

  let length, i, keys;

  if (a && b && typeof a == 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    keys = Object.keys(a);
    length = keys.length;

    if (length !== Object.keys(b).length) {
      return false;
    }

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }

    for (i = length; i-- !== 0;) {
      const key = keys[i];

      if (key === '_owner' && a.$$typeof) {
        continue;
      }

      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }

    return true;
  }

  return a !== a && b !== b;
}

function useLatestRef(value) {
  const ref = react__WEBPACK_IMPORTED_MODULE_1__.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}

function useFloating(_temp) {
  let {
    middleware,
    placement = 'bottom',
    strategy = 'absolute',
    whileElementsMounted
  } = _temp === void 0 ? {} : _temp;
  const [data, setData] = react__WEBPACK_IMPORTED_MODULE_1__.useState({
    // Setting these to `null` will allow the consumer to determine if
    // `computePosition()` has run yet
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {}
  });
  const [latestMiddleware, setLatestMiddleware] = react__WEBPACK_IMPORTED_MODULE_1__.useState(middleware);

  if (!deepEqual(latestMiddleware == null ? void 0 : latestMiddleware.map(_ref => {
    let {
      name,
      options
    } = _ref;
    return {
      name,
      options
    };
  }), middleware == null ? void 0 : middleware.map(_ref2 => {
    let {
      name,
      options
    } = _ref2;
    return {
      name,
      options
    };
  }))) {
    setLatestMiddleware(middleware);
  }

  const reference = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const floating = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const cleanupRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
  const dataRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const update = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    if (!reference.current || !floating.current) {
      return;
    }

    (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_0__.computePosition)(reference.current, floating.current, {
      middleware: latestMiddleware,
      placement,
      strategy
    }).then(data => {
      if (isMountedRef.current && !deepEqual(dataRef.current, data)) {
        dataRef.current = data;
        react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync(() => {
          setData(data);
        });
      }
    });
  }, [latestMiddleware, placement, strategy]);
  index(() => {
    // Skip first update
    if (isMountedRef.current) {
      update();
    }
  }, [update]);
  const isMountedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const runElementMountCallback = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(() => {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }

    if (reference.current && floating.current) {
      if (whileElementsMountedRef.current) {
        const cleanupFn = whileElementsMountedRef.current(reference.current, floating.current, update);
        cleanupRef.current = cleanupFn;
      } else {
        update();
      }
    }
  }, [update, whileElementsMountedRef]);
  const setReference = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(node => {
    reference.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const setFloating = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(node => {
    floating.current = node;
    runElementMountCallback();
  }, [runElementMountCallback]);
  const refs = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
    reference,
    floating
  }), []);
  return react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({ ...data,
    update,
    refs,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, setReference, setFloating]);
}

/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */

const arrow = options => {
  const {
    element,
    padding
  } = options;

  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, 'current');
  }

  return {
    name: 'arrow',
    options,

    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.arrow)({
            element: element.current,
            padding
          }).fn(args);
        }

        return {};
      } else if (element) {
        return (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.arrow)({
          element,
          padding
        }).fn(args);
      }

      return {};
    }

  };
};




/***/ }),

/***/ "./node_modules/@ux/field-frame/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@ux/field-frame/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

const _excluded = ["children", "className", "disabled", "invalid", "flyoutPlacement", "stretch"];
const UX_FIELD_FRAME_CLASSNAME = 'ux-field-frame';
/**
 * Field frame functional component
 * @param {Object} props - Information for the props can be found in the PropTypes below and in TextEntry propTypes
 * @param {React.Element} props.children - Children for component, only allowing <Button/>, <TextEntry/> and <hr/> elements
 * @param {String} [props.className] - Optional class name
 * @param {Boolean} [props.disabled] - Sets component as disabled
 * @param {Boolean} [props.invalid] - Sets component as invalid
 * @param {String} [props.flyoutPlacement] - Specifically used with flyout, identifies what side the flyout is on
 * @param {Boolean} [props.stretch] - Sets component to parent's full width
 * @param {Object} ref - Forwarded ref to TextEntry
 * @returns {React.Component} FieldFrame component
 */

const FieldFrame = /*#__PURE__*/_react.default.forwardRef(function fieldFrame(props, ref) {
  const {
    children,
    className,
    disabled,
    invalid,
    flyoutPlacement,
    stretch = true
  } = props,
        rest = (0, _objectWithoutProperties2.default)(props, _excluded);
  delete rest.style;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(UX_FIELD_FRAME_CLASSNAME, className, {
      [`${UX_FIELD_FRAME_CLASSNAME}--invalid`]: invalid,
      [`${UX_FIELD_FRAME_CLASSNAME}--stretch`]: stretch
    }),
    disabled: disabled,
    "data-flyout": flyoutPlacement,
    ref: ref
  }, rest), children);
});

FieldFrame.propTypes = {
  /** Verify children as Button, TextEntry or hr element */
  children: _propTypes.default.node,

  /** Optional classname for positioning */
  className: _propTypes.default.string,

  /** Sets as disabled */
  disabled: _propTypes.default.bool,

  /** Sets as invalid  */
  invalid: _propTypes.default.bool,

  /** Specifically used with flyout, identifies what side the flyout is on */
  flyoutPlacement: _propTypes.default.string,

  /** Stretches the width of the container */
  stretch: _propTypes.default.bool
};
var _default = FieldFrame;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/flyout/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@ux/flyout/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.UX_FLYOUT_PLACEMENTS = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _reactDom2 = __webpack_require__(/*! @floating-ui/react-dom */ "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/@ux/flyout/lib/utils.js");

const _excluded = ["middlewareData", "reference", "floating", "refs"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const UX_FLYOUT_CLASSNAME = 'ux-flyout';
const UX_FLYOUT_PLACEMENTS = ['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top'];
/**
 * Distance away from the edges that the arrow can travel.
 * This _should_ be the border-radius of the flyout however,
 * that value is themable so we assume the value wont be too big.
 */

exports.UX_FLYOUT_PLACEMENTS = UX_FLYOUT_PLACEMENTS;
const ARROW_EDGE_OFFSET_INT = 4;
/**
 * Prepares the middleware for the flyout
 *
 * @param {Object} config - Configuration object
 * @param {Element} config.arrowRef - The reference to the arrow element
 * @returns {Array} - Collection of middleware
 */

function getMiddleware(_ref) {
  let {
    arrowRef: element
  } = _ref;
  return [(0, _reactDom2.shift)(), (0, _reactDom2.flip)(), (0, _reactDom2.hide)(), (0, _reactDom2.arrow)({
    element,
    padding: ARROW_EDGE_OFFSET_INT
  })];
}
/**
 * Creates an arrow for the flyout
 *
 * @param {Object} props - Props for the component
 * @param {Object} props.arrow - Configuration for placing the arrow
 * @param {Object} ref - The reference to the component element
 * @returns {Component} - Arrow component
 */


const Arrow = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    x: left,
    y: top
  } = props.arrow || {};
  return /*#__PURE__*/_react.default.createElement("div", {
    className: `${UX_FLYOUT_CLASSNAME}-arrow`,
    ref: ref,
    style: {
      top,
      left
    }
  });
});

Arrow.propTypes = {
  /** Provides placement for the arrow */
  arrow: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })
};
/**
 * Creates a Flyout component
 *
 * @param {Object} props - Properties for the Flyout element
 * @param {Element} props.anchorRef - Reference to a DOM element where the flyout should be visually attached.
 * @param {Boolean} props.arrow - Boolean which determines if an arrow should be included on the flyout
 * @param {Node|Array<Node>} props.chilren - Children to render inside the flyout
 * @param {String} props.className - Optional classname for positioning
 * @param {String} props.id - Id to set on the flyout for accessibilty
 * @param {String} props.placement - Configuration for setting the placement of the flyout relative to the anchor.anchorRef
 * @param {String} props.strategy - Sets the strategy for @floating-ui (absolute/fixed)
 * @param {Element} props.portalElm - Optional releact element to create a react portal from
 * @param {String} props.role - Role to set on the flyout for accessibility
 * @param {Function} props.onClose - Fires when the user attempts to escape the flyout
 * @param {Function} props.onPlacement - Fires when the placement of the flyout changes
 * @param {Boolean} props.stretch - Stretches the flyout to the nearest relative ancestor
 * @returns {Component} - Flyout element
 */

function Flyout(props) {
  var _refs$reference, _refs$reference$curre;

  const {
    anchorRef,
    arrow: arrowConfig,
    children,
    className,
    id,
    placement,
    strategy,
    portalElem,
    role,
    onClose = Function.prototype,
    onPlacement = Function.prototype,
    stretch
  } = props;
  const arrowRef = (0, _react.useRef)(null);
  const arrowSize = (0, _utils.getArrowSize)(arrowConfig);

  const _useFloating = (0, _reactDom2.useFloating)({
    // https://floating-ui.com/docs/react-dom#updating
    whileElementsMounted: function () {
      try {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return (0, _reactDom2.autoUpdate)(...args, {
          animationFrame: true
        });
      } catch (err) {
        return Function.prototype;
      }
    },
    placement,
    strategy,
    middleware: getMiddleware({
      arrowRef
    })
  }),
        {
    // middlewareData contains information returned from the middleware, used for additional attributes
    middlewareData,
    // reference is a function which get the computed position of the anchorRef
    reference,
    // floating is the ref function to assign to the flyout
    floating,
    // refs of the elements in the DOM
    refs
  } = _useFloating,
        floatingData = (0, _objectWithoutProperties2.default)(_useFloating, _excluded); // Using a virtual element approach for positioning to avoid rendering a reference element inside the component
  // https://floating-ui.com/docs/react-dom#virtual-element


  (0, _react.useLayoutEffect)(() => {
    var _anchorRef$current;

    if (!(anchorRef !== null && anchorRef !== void 0 && (_anchorRef$current = anchorRef.current) !== null && _anchorRef$current !== void 0 && _anchorRef$current.getBoundingClientRect)) return;
    reference(anchorRef.current);
  }, [reference, anchorRef, children]); // Handle events that occur outside of the flyout context

  (0, _react.useEffect)(() => {
    var _anchorRef$current2;

    if (!(anchorRef !== null && anchorRef !== void 0 && (_anchorRef$current2 = anchorRef.current) !== null && _anchorRef$current2 !== void 0 && _anchorRef$current2.getBoundingClientRect) || !refs.floating.current) return;
    return (0, _utils.outsideListeners)([anchorRef.current, refs.floating.current], onClose);
  }, [anchorRef, refs.floating, onClose]); // Fire event if the placement changes

  (0, _react.useLayoutEffect)(() => {
    onPlacement(floatingData.placement);
  }, [floatingData.placement, onPlacement]); // Do not render if no anchorRef or children

  if (!anchorRef || !children) {
    return null;
  } // If stretch, set the minimum width of the flyout to the reference offset width


  const minWidth = stretch ? (_refs$reference = refs.reference) === null || _refs$reference === void 0 ? void 0 : (_refs$reference$curre = _refs$reference.current) === null || _refs$reference$curre === void 0 ? void 0 : _refs$reference$curre.offsetWidth : null;

  const flyout = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(UX_FLYOUT_CLASSNAME, className),
    id: id,
    role: role,
    ref: floating,
    style: (0, _utils.getFlyoutStyle)(_objectSpread({
      arrowSize,
      minWidth
    }, floatingData))
  }, (0, _utils.getFlyoutAttributes)(_objectSpread(_objectSpread({}, middlewareData), floatingData))), children, arrowConfig && /*#__PURE__*/_react.default.createElement(Arrow, (0, _extends2.default)({
    ref: arrowRef
  }, middlewareData)));

  return portalElem ? /*#__PURE__*/_reactDom.default.createPortal(flyout, portalElem) : flyout;
}

Flyout.propTypes = {
  /** Reference to a DOM element where the flyout should be visually attached. The flyout will not render without this */
  anchorRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.object
  })]),

  /** Determines if an arrow should be included on the flyout, if a string is provided, set the size of the arrow */
  arrow: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string]),

  /** Children to render within the flyout */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),

  /** Id for the flyout, used for accessibility */
  id: _propTypes.default.string,

  /** Placement, for more details see https://floating-ui.com/ */
  placement: _propTypes.default.oneOf(UX_FLYOUT_PLACEMENTS),

  /** Sets the strategy for @floating-ui (absolute/fixed) */
  strategy: _propTypes.default.oneOf(['absolute', 'fixed']),

  /** Role for the flyout, used for accessibility */
  role: _propTypes.default.string,

  /** Fires when the user attempts to escape from the flyout */
  onClose: _propTypes.default.func,

  /** Fires when the flyout position changes */
  onPlacement: _propTypes.default.func,

  /** Stretches the flyout to the nearest relative ancestor */
  stretch: _propTypes.default.bool,

  /** Optional class name for positioning */
  className: _propTypes.default.string,

  /** Optional releact element to create a react portal from  */
  portalElem: _propTypes.default.object
};
Flyout.displayName = 'Flyout';
var _default = Flyout;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/flyout/lib/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/@ux/flyout/lib/utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getArrowSize = getArrowSize;
exports.getFlyoutAttributes = getFlyoutAttributes;
exports.getFlyoutStyle = getFlyoutStyle;
exports.outsideListeners = outsideListeners;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

const _excluded = ["x", "y", "strategy", "arrowSize"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Determine the arrow size given the input
 *
 * @param {Mixed} arrow - Value passed in from the props
 * @returns {String} - Final value to assign to the arrow size
 */
function getArrowSize(arrow) {
  switch (typeof arrow) {
    case 'boolean':
      return arrow ? '1rem' : 0;

    case 'number':
      return `${arrow}px`;

    default:
      return arrow;
  }
}
/**
 * Determine if the event occurred outside of the targets' contexts
 *
 * @param {Object} ev - Original event object
 * @param {Array<Element>} targets - Elements to check against
 * @returns {Boolean} - Event occurred outside
 */


function isEventOutside(ev, targets) {
  const includedTargets = ev.composedPath().filter(elem => targets.includes(elem));
  return !includedTargets.length;
}
/**
 * Creates data-attributes for flyout metadata
 *
 * @param {Object} config - Configuration object
 * @param {Object} config.hide - Values returned from the hide() middleware
 * @param {String} config.placement - Value describing the placement set as a result of the @floating-ui library
 * @returns {Object} - Attributes to spread onto the flyout component
 */


function getFlyoutAttributes(_ref) {
  let {
    hide,
    placement
  } = _ref;
  const {
    escaped,
    referenceHidden
  } = hide || {};
  return {
    'data-placement': placement,
    'data-escaped': escaped,
    'data-refhidden': referenceHidden
  };
}
/**
 * Prepares the styles to apply to the flyout
 *
 * @param {Object} config - Configuration object
 * @param {Number} config.x - Horizontal position
 * @param {Number} config.y - Vertical position
 * @param {String} config.strategy - Positioning strategy
 * @param {String} config.arrowSize - Arrow size
 * @returns {Object} - Styles to apply to the flyout
 */


function getFlyoutStyle(_ref2) {
  let {
    x: left,
    y: top,
    strategy: position,
    arrowSize
  } = _ref2,
      styles = (0, _objectWithoutProperties2.default)(_ref2, _excluded);
  return _objectSpread({
    position,
    top,
    left,
    '--ux-flyout-arrow-size': arrowSize || 0
  }, styles);
}
/**
 * Setup for the useEffect for the document listeners
 *
 * @param {Array<Element>} targets - Elements to check against
 * @param {Function} callback - Function to execute when an event occurs outside
 * @returns {Function} - Teardown function
 */


function outsideListeners(targets, callback) {
  function outsideEvent(ev) {
    isEventOutside(ev, targets) && callback(ev);
  }

  function escKey(ev) {
    ev.key === 'Escape' && callback(ev);
  }

  if (typeof callback === 'function') {
    document.addEventListener('click', outsideEvent);
    document.addEventListener('focus', outsideEvent, true);
    document.addEventListener('keydown', escKey);
  }

  return () => {
    document.removeEventListener('click', outsideEvent);
    document.removeEventListener('focus', outsideEvent, true);
    document.removeEventListener('keydown', escKey);
  };
}

/***/ }),

/***/ "./node_modules/@ux/icon/base.js":
/*!***************************************!*\
  !*** ./node_modules/@ux/icon/base.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _svgosm = __webpack_require__(/*! ./svgosm.js */ "./node_modules/@ux/icon/svgosm.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

const _excluded = ["width", "height", "placeholder", "className", "title", "desc", "role"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Detect if we are running in a Node.js environment.
 *
 * @type {Boolean}
 * @private
 */
const isNode = !!(typeof process !== 'undefined' && process.versions && process.versions.node);
/**
 * Generates our dedicated Icon component.
 *
 * @param {String} displayName Name of the Icon.
 * @param {String} deprecated Indication if the icon should be deprecated
 * @returns {React.Component} The React Component.
 * @public
 */

module.exports = function create(displayName, deprecated) {
  const warned = {};
  /**
   * The base component that renders the Icon.
   *
   * @constructor
   * @param {Object} props All the props
   * @param {Number} props.width Width of the icon.
   * @param {Number} props.height Height of the icon.
   * @param {String} props.className Class name of the icon.
   * @param {String} props.title A11y title of the icon.
   * @param {String} props.desc A11y description of the icon.
   * @param {String} props.role A11y role for the icon.
   * @param {Object} props.placeholder Information used to statically render the icon.
   * @param {Object} props.props The rest of the props that are spread on the <use> tag.
   * @param {React.Ref} ref Forwarding reference
   * @private
   */

  const Fwd = /*#__PURE__*/_react.default.forwardRef(function Icon(_ref, ref) {
    let {
      width = '1.5em',
      height = '1.5em',
      placeholder,
      className,
      title,
      desc,
      role = 'presentation'
    } = _ref,
        rest = _objectWithoutProperties(_ref, _excluded);

    const [sym, setSymbol] = (0, _react.useState)(placeholder); //
    // We use the useEffect hook to bypass the SSR hydration warnings. In a SSR
    // application we do not have access to the icon information as that is
    // extracted from the CSS. Nor do we want to duplicate the content in
    // HTML as that means we're shipping the icons multiple times to our users.
    //

    (0, _react.useEffect)(function retry() {
      const res = _svgosm.svgosm.get(displayName, function extract() {
        const details = _svgosm.svgosm.extract(`uxp-icon-${displayName}`);

        if (!details) return;
        return Object.assign(details, {
          title: title,
          desc: desc
        });
      });

      if (res) return setSymbol(res); //
      // If we don't have a result from the svg manager it's most likely caused
      // by missing CSS so we're going to advice the user, only dev/test,
      // in the browser (because we don't care bout node.js env) that they need
      // to import the CSS.
      //

      if ( true && !isNode && !warned.css) {
        console.log(`Unable to render the icon, did you forget to include the required css? @ux/icon/${displayName}/index.(css|scss)?`);
        warned.css = true;
      }
    }, [displayName]); //
    // Return early with no content if there isn't any icon to render.
    //

    if (!sym) return null;
    const props = {};
    const svg = {
      className: ['uxicon-svg-container', className].join(' ').trim(),
      height: height || sym.height,
      width: width || sym.width,
      role,
      ref
    }; //
    // Extract the `aria-` prefixed props from the supplied props as they
    // need to be applied to the <svg> element, the rest of the props
    // need to be applied to the <use> element, for styling purposes.
    //

    Object.keys(rest).forEach(function propSort(key) {
      if (key.startsWith('aria-') || key.startsWith('data-')) svg[key] = rest[key];else props[key] = rest[key];
    }); //
    // When no `aria-labelledby` is provided to us, but we did receive a title
    // or a desc, we're going to generate the correct aria- role by default.
    //

    if (!svg['aria-labelledby'] && (title || desc)) {
      const unique = sym.link.slice(1);
      const labels = [];
      if (title) labels.push(`${unique}-title`);
      if (desc) labels.push(`${unique}-desc`);
      svg['aria-labelledby'] = labels.join(' ');
    }

    return /*#__PURE__*/_react.default.createElement("svg", svg, /*#__PURE__*/_react.default.createElement("use", _extends({
      fill: "currentColor"
    }, props, {
      xlinkHref: sym.link
    })));
  }); //
  // Ease debugging.
  //


  Fwd.displayName = displayName + 'Icon';
  /**
   * PropType validation.
   *
   * @type {Object}
   * @private
   */

  Fwd.propTypes = {
    width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
    placeholder: _propTypes.default.shape({
      link: _propTypes.default.string
    }),
    className: _propTypes.default.string,
    desc: _propTypes.default.string,
    title: _propTypes.default.string,
    role: _propTypes.default.string
  }; //
  // Ensure that this is not active in production environments, should be
  // auto deleted by minifiers.
  //

  if (true) {
    //
    // Please note that the icon is passed as string because of our
    // {namespace:field} template pattern. The files are processed with babel
    // which thinks it's an object pattern and reformats it as a pretty object
    // which breaks the template engine. So we're just gonna pass it as string
    // to work around that limitation.
    //
    if (deprecated === 'true' && !warned.dep) {
      console.log(`The icon "${displayName}" is deprecated and will be removed in the next major release of @ux/icon`);
      warned.dep = true;
    }
  }

  return Fwd;
};

/***/ }),

/***/ "./node_modules/@ux/icon/delete/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@ux/icon/delete/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/**
 * /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
 * /!\                                                                     /!\
 * /!\   WARNING THIS FILE IS AUTOMATICALLY GENERATED. DO NOT ALTER IT'S   /!\
 * /!\      CONTENTS MANUALLY. UPDATE THE TEMPLATE FILE INSTEAD.           /!\
 * /!\                                                                     /!\
 * /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\ /!\
 */
const create = __webpack_require__(/*! ../base.js */ "./node_modules/@ux/icon/base.js"); //
// @ux/require: './index.css';
//
// Unfortunately, WebPack decided to remove the ability to use labels as require
// indicator as that would be the only way we could make WebPack automatically
// bundle files without them actually being required serverside.
//


module.exports = create('delete', 'false');

/***/ }),

/***/ "./node_modules/@ux/icon/svgosm.js":
/*!*****************************************!*\
  !*** ./node_modules/@ux/icon/svgosm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.svgosm = exports["default"] = exports.SVGOSM = void 0;
const _excluded = ["viewBox", "title", "desc", "shapes"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Our default root element.
 *
 * @type {DOMElement|Null}
 * @private
 */
const html = typeof document !== 'undefined' ? document.body || document.documentElement : null;
/**
 * SVG Object Storage Manager (SVGOSM) attempts to reduce the SVG DOM footprint
 * by moving all SVG objects into symbols so they can be re-used without having
 * to inject the full SVG structure in multiple places.
 *
 * @class
 * @param {String} name Name, id of the container to inject.
 * @public
 */

class SVGOSM {
  constructor(name, root = html) {
    this.id = name; // Name of the container.

    this.tracker = {}; // Storage tracker to reduce DOM lookup.

    this.mounted = []; // List of all roots we need to operate in.

    this.root = root;
  }
  /**
   * Inject a new SVG element into a given root that is going to be used as
   * storage for all our new symbols so they can be referenced in our HTML.
   *
   * @param {DOMElement} root Container we need to mount in.
   * @public
   */


  mount(root) {
    const container = document.createElement('div');
    container.style = 'display:none';
    container.id = this.id;
    const svg = document.createElementNS(SVGOSM.xmlns, 'svg');
    container.appendChild(svg);
    root.appendChild(container);
    this.mounted.push({
      svg,
      root,
      container
    }); //
    // Populate with other discovered icons.
    //

    Object.keys(this.tracker).forEach(key => {
      svg.innerHTML += this.tracker[key].sym;
    });
  }
  /**
   * Extract information out the CSS of a given HTML element and extract the svg
   * content and the size of the element.
   *
   * @param {String} name Name of the CSS variable we need to extract.
   * @returns {Object|Undefined} The resulting information.
   * @public
   */


  extract(name) {
    if (!name) return;
    let match;

    if (this.root) {
      this.mount(this.root);
      this.root = null;
    }

    this.mounted.some(function search({
      container
    }) {
      const style = window.getComputedStyle(container, ':before');
      const cssvar = name.startsWith('--') ? name : `--${name}`;
      const cssvarvalue = style.getPropertyValue(cssvar);
      let content = style.getPropertyValue('content'); //
      // BLACK MAGIC WARNING: The following blocks provide the following:
      //
      // - Provide backwards compatibility to content: url(svg)
      // - Bail out of old font based content: "\char" properties
      // - Prefer cssvariable values over old content: url() as they can
      //   be overridden for white labels.
      //
      // The big problem here is that `content` can really be anything, it can
      // be `none`, it can be `''`, even `normal` when nothing is assigned to it
      // depending on the element it receives. So we need to figure out _when_
      // to bail out.
      //
      // Browsers also handle reading out the `content` property differently,
      // literally all over the place. Some encode the content, include the
      // quotes that are wrapped around the content, others just include the
      // actual string. So, we just want to normalize this to what ever we want
      // to validate against, which is a single character.
      //

      if (content.length === 3) content = content.charAt(1);

      if (content) {
        if (content.includes('svg')) {
          match = content;
        } else if (content.length === 1 && !/[a-z\d]/i.test(content)) {
          //
          // The contents of icon fonts would be a unicode wrapped in quotes. So
          // if it's 3 chars length (not binary size), and the 2nd character is
          // not alphabetical or a number, it must be unicde char and we should
          // proceed to **not** transform anything here.
          //
          return !!match;
        }
      } //
      // If a CSS variable is defined it should always be used as SVG contents.
      // When we found absolutely nothing at this point, bail out.
      //


      if (cssvarvalue && cssvarvalue.includes('svg')) match = cssvarvalue;
      return !!match;
    });
    if (!match) return;
    return this.parse(match);
  }
  /**
   * Parses the given SVG string and extracts contents.
   *
   * @param {String} str The encoded SVG string.
   * @returns {Object} Parsed SVG result.
   * @private
   */


  parse(str) {
    if (!~str.indexOf('svg')) return {};
    str = decodeURI(str).replace(/%23/g, '#').replace(/\\"/g, '"');
    const start = str.indexOf('>');
    const finish = str.indexOf('</svg>');
    const result = /viewBox=.*?([\d\s.]+)/.exec(str.substr(0, start));
    if (!result) return {};
    return {
      shapes: str.slice(start + 1, finish),
      viewBox: result[1]
    };
  }
  /**
   * Returns the correct reference to the object.
   *
   * @param {String} name The name of the object we want to use.
   * @param {Function} [fn] Sets the value if there isn't any.
   * @returns {Object|Null} The value that should be used in the `xlink:href` attr.
   * @public
   */


  get(name, fn) {
    const res = this.tracker[name];
    if (res || !fn) return res;
    this.set(name, fn(name));
    return this.tracker[name];
  }
  /**
   * Store a new Symbol in our managed SVG object.
   *
   * @param {String} name Name of the symbol.
   * @param {Object} data Detailed information about the symbol.
   * @param {String} data.viewBox The viewBox of the symbol.
   * @param {String} data.title Title of the symbol.
   * @param {String} data.desc Description of the symbol.
   * @param {String} data.shapes The actual symbol that need to be stored.
   * @returns {Boolean} Indication if the shape was inserted.
   * @public
   */


  sym(name, _ref = {}) {
    let {
      viewBox,
      title,
      desc,
      shapes
    } = _ref,
        data = _objectWithoutProperties(_ref, _excluded);

    if (!shapes) return false;
    const uid = `${this.id}-${name}`;
    const a11ytitle = title ? `<title id="${uid}-title">${title}</title>` : '';
    const a11ydesc = desc ? `<desc id="${uid}-desc">${desc}</desc>` : '';
    const sym = `<symbol id="${uid}" viewBox="${viewBox}">${a11ytitle}${a11ydesc}${shapes}</symbol>`;
    this.tracker[name] = _objectSpread(_objectSpread({}, data), {}, {
      link: `#${this.id}-${name}`,
      viewBox,
      sym
    });
    return sym;
  }
  /**
   * Store a new Symbol in our managed SVG object.
   *
   * @param {String} name Name of the symbol.
   * @param {Object} data Detailed information about the symbol.
   * @returns {Boolean} Indication if the shape was inserted.
   * @public
   */


  set(name, data) {
    const sym = this.sym(name, data);
    if (!sym) return false;

    if (this.root) {
      this.mount(this.root);
      this.root = null;
    }

    this.mounted.forEach(({
      svg
    }) => {
      svg.innerHTML += sym;
    });
    return true;
  }

}
/**
 * The XML namespace.
 *
 * @type {String}
 * @private
 */


exports.SVGOSM = exports["default"] = SVGOSM;
SVGOSM.xmlns = 'http://www.w3.org/2000/svg';
/**
 * Pre-create an instance.
 *
 * @type {SVGOSM}
 * @public
 */

const svgosm = new SVGOSM('svg-container');
exports.svgosm = svgosm;

/***/ }),

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

/***/ "./node_modules/@ux/label/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@ux/label/lib/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.ensureLabelComponent = ensureLabelComponent;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _text = _interopRequireDefault(__webpack_require__(/*! @ux/text */ "@ux/text"));

var _classes = _interopRequireDefault(__webpack_require__(/*! @ux/text/classes */ "./node_modules/@ux/text/lib/classes.js"));

const UX_LABEL_CLASSNAME = 'ux-label';
/**
 * Creates a label component
 *
 * @param {Object} props - Component configuration
 * @param {Element} props.children - Content for the label
 * @param {String} [props.className] - Optional class name
 * @param {Boolean} [props.float] - Sets the label as floating
 * @param {String} props.htmlFor - Sets the for attribute on the label
 * @param {String} props.id - Sets the id attribute on the label
 * @param {Boolean} [props.internal] - Sets the label as internal to a component
 * @param {Boolean|Object} [props.required] - Marks the label as required
 * @param {String} [props.required.emphasis] - @ux/text emphasis for required mark
 * @param {String} [props.required.text] - Content for the required mark
 * @param {Object} ref - Element reference
 * @returns {Element} - Label component
 */

const Label = /*#__PURE__*/_react.default.forwardRef(function label(props, ref) {
  const {
    children,
    className,
    float,
    htmlFor,
    id,
    internal,
    required
  } = props;
  return /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classnames.default)(UX_LABEL_CLASSNAME, className, {
      // Meant as external label, expected to appear above the input field
      [(0, _classes.default)({
        as: 'label'
      })]: !internal,
      // Inherit styles from input, potentially float
      [`${UX_LABEL_CLASSNAME}--internal`]: internal,
      [`${UX_LABEL_CLASSNAME}--floating`]: float && internal
    }),
    htmlFor: htmlFor,
    id: id,
    ref: ref
  }, children, required && /*#__PURE__*/_react.default.createElement(_text.default.span, {
    "aria-hidden": true,
    className: `${UX_LABEL_CLASSNAME}-required`,
    emphasis: typeof required === 'object' && required.emphasis || 'critical',
    text: typeof required === 'object' && required.text || '*'
  }));
});

Label.propTypes = {
  /** Children to render as siblings */
  children: _propTypes.default.node.isRequired,

  /** Class for the root component */
  className: _propTypes.default.string,

  /** Sets the label as floating */
  float: _propTypes.default.bool,

  /** Sets the for attribute on the label */
  htmlFor: _propTypes.default.string.isRequired,

  /** id for the label */
  id: _propTypes.default.string,

  /** Sets the label as internal to parent */
  internal: _propTypes.default.bool,

  /** Sets the label as required */
  required: _propTypes.default.oneOfType([
  /** Use defaults */
  _propTypes.default.bool,
  /** Customize required */
  _propTypes.default.shape({
    /** Default is 'critical' */
    emphasis: _propTypes.default.string,

    /** Default is asterisk (*) */
    text: _propTypes.default.node
  })])
};
Label.displayName = 'Label';
/**
 * Ensures a @ux/label is created
 *
 * @param {Object|String} label - Common configuration for a label
 * @param {Object} props - Additional props to construct a new label
 * @returns {Object} - Label
 */

function ensureLabelComponent(label) {
  let props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!label) return null;
  return typeof label === 'object' && label.type === Label ? label : /*#__PURE__*/_react.default.createElement(Label, props, label);
}

var _default = Label;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/listbox/lib/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@ux/listbox/lib/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _siblingSet = _interopRequireDefault(__webpack_require__(/*! @ux/sibling-set */ "./node_modules/@ux/sibling-set/lib/index.js"));

var _mergeRefs = _interopRequireDefault(__webpack_require__(/*! merge-refs */ "./node_modules/merge-refs/dist/esm/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable camelcase, id-length */
const UX_LISTBOX_CLASSNAME = 'ux-listbox';
/**
 * Given an array of item objects, a "current" id, and a "step" (1 for forward, -1 for back),
 * this function returns the subsequent id that should now gain focus
 *
 * @param {Array<Object>} items array of item objects
 * @param {String} currentId current item id to step away from
 * @param {Number} step direction (and amount) to step
 * @returns {String} the next id given the step
 */

function findSubsequentItemId(items, currentId) {
  let step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  const possibleIndex = items.findIndex(item => item.id === currentId);
  const currentIndex = possibleIndex === -1 ? 0 : possibleIndex;
  const nextIndex = Math.max(0, Math.min(items.length - 1, currentIndex + step));
  return items[nextIndex].id;
}
/**
 * Internal component for managing behaviors around list items
 *
 * @param {*} props ListboxItem Props
 * @returns {Component} ListboxItem
 */


function ListboxItem(props) {
  const {
    id,
    as,
    isSelected,
    isFocused,
    onSelect,
    children
  } = props;
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    _react.default.createElement("div", {
      id: id,
      className: "ux-button",
      tabIndex: -1,
      role: as === 'menu' ? 'menuitem' : 'option',
      "data-visually-focused": isFocused || null,
      "aria-selected": isSelected || null,
      onClick: onSelect
    }, children)
  );
}

ListboxItem.propTypes = {
  /** Unique identifier for the item */
  id: _propTypes.default.string.isRequired,

  /** Determines the correct ARIA role for the item */
  as: _propTypes.default.string.isRequired,

  /** Item is chosen by the user */
  isSelected: _propTypes.default.bool.isRequired,

  /** Item is navigated to by the user */
  isFocused: _propTypes.default.bool.isRequired,

  /** Callback when the selection occurs */
  onSelect: _propTypes.default.func.isRequired,

  /** Content of the item */
  children: _propTypes.default.node.isRequired
};
/**
 *
 * @param {Object} props - Configuration object
 * @returns {Component} - <Listbox/> component
 */

const Listbox = /*#__PURE__*/_react.default.forwardRef(function Listbox(props, ref) {
  const {
    id,
    as = 'listbox',
    stretch,
    className,
    items = [],
    tabIndex = '0',
    onConfirm = Function.prototype,
    selected,
    onActiveItemChange = Function.prototype,
    loop = false,
    anchorRef
  } = props || {};
  const combinedRef = (0, _mergeRefs.default)((0, _react.useRef)(null), ref);
  const [userActiveItemId, setActiveItemId] = (0, _react.useState)(null); // If a selected has been set and the user hasn't specified a highlight, "initialize" with the selected!

  const activeItemId = userActiveItemId != null && userActiveItemId !== 'undefined' ? userActiveItemId : selected;
  const handleActiveItemChange = (0, _react.useCallback)((itemId, meta) => {
    setActiveItemId(itemId);
    onActiveItemChange(itemId, meta);
  }, [setActiveItemId, onActiveItemChange]);
  (0, _react.useEffect)(() => {
    // If the user hasn't made a selection, no need to clear
    if (!userActiveItemId) return; // If the active item doesn't exist in items... clear the active item!
    // This usually happens when the list of items changes and the previously highlighted item
    // disappears. Most common in autocomplete scenarios

    if (![].concat(items).find(item => (item === null || item === void 0 ? void 0 : item.id) === userActiveItemId)) {
      return handleActiveItemChange(null, {
        event: null
      });
    }
  }, [userActiveItemId, items, handleActiveItemChange]);
  const generateOnConfirm = (0, _react.useCallback)(itemId => event => {
    var _combinedRef$current, _combinedRef$current$;

    onConfirm(itemId, {
      event
    });

    if ((_combinedRef$current = combinedRef.current) !== null && _combinedRef$current !== void 0 && (_combinedRef$current$ = _combinedRef$current.matches) !== null && _combinedRef$current$ !== void 0 && _combinedRef$current$.call(_combinedRef$current, ':focus-within')) {
      var _anchorRef$current, _anchorRef$current$fo;

      // If the listbox has focus, move it to anchor
      // This usually happens when the user _clicks_ a listbox item
      anchorRef === null || anchorRef === void 0 ? void 0 : (_anchorRef$current = anchorRef.current) === null || _anchorRef$current === void 0 ? void 0 : (_anchorRef$current$fo = _anchorRef$current.focus) === null || _anchorRef$current$fo === void 0 ? void 0 : _anchorRef$current$fo.call(_anchorRef$current);
    }
  }, [onConfirm, anchorRef, combinedRef]); // eslint-disable-next-line complexity

  const handleOnKeyDown = (0, _react.useCallback)(event => {
    const firstItemId = items[0].id;
    const lastItemId = items[items.length - 1].id;
    let itemId;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        event.stopPropagation();
        itemId = !activeItemId || loop && lastItemId === activeItemId ? firstItemId : findSubsequentItemId(items, activeItemId, 1);
        break;

      case 'ArrowUp':
        event.preventDefault();
        event.stopPropagation();
        itemId = !activeItemId || loop && firstItemId === activeItemId ? lastItemId : findSubsequentItemId(items, activeItemId, -1);
        break;

      case 'Home':
        event.preventDefault();
        event.stopPropagation();
        itemId = firstItemId;
        break;

      case 'End':
        event.preventDefault();
        event.stopPropagation();
        itemId = lastItemId;
        break;
      // As focus does not follow individual items (as of yet) we need to intercept enter keypresses
      // in order to simulate selecting an item

      case 'Enter':
        {
          if (activeItemId == null) return false;
          event.preventDefault();
          event.stopPropagation();
          generateOnConfirm(activeItemId)(event);
          itemId = activeItemId;
          break;
        }

      default:
        // Noop
        break;
    }

    itemId !== activeItemId && handleActiveItemChange(itemId, {
      event
    });
  }, [items, loop, activeItemId, generateOnConfirm, handleActiveItemChange]);
  (0, _react.useEffect)(() => {
    // Listens for additional keys that may occur on a given anchor
    const elem = anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current;
    elem === null || elem === void 0 ? void 0 : elem.addEventListener('keydown', handleOnKeyDown);
    return () => elem === null || elem === void 0 ? void 0 : elem.removeEventListener('keydown', handleOnKeyDown);
  }, [anchorRef, handleOnKeyDown]);
  (0, _react.useEffect)(() => {
    // Sets the aria-activedescedent if an anchor is given
    const elem = anchorRef === null || anchorRef === void 0 ? void 0 : anchorRef.current;
    activeItemId && (elem === null || elem === void 0 ? void 0 : elem.setAttribute('aria-activedescedent', activeItemId));
    return () => elem === null || elem === void 0 ? void 0 : elem.removeAttribute('aria-activedescedent');
  }, [anchorRef, activeItemId]);
  const handleOnBlur = (0, _react.useCallback)(event => {
    var _combinedRef$current2, _combinedRef$current3;

    // If any child items retain focus, ignore this blur callback
    if ((_combinedRef$current2 = combinedRef.current) !== null && _combinedRef$current2 !== void 0 && (_combinedRef$current3 = _combinedRef$current2.matches) !== null && _combinedRef$current3 !== void 0 && _combinedRef$current3.call(_combinedRef$current2, ':focus-within')) return; // Otherwise clear the active item!

    handleActiveItemChange(null, {
      event
    });
  }, [combinedRef, handleActiveItemChange]);
  if (items.length === 0) return null;
  return /*#__PURE__*/_react.default.createElement(_siblingSet.default, {
    ref: combinedRef,
    id: id,
    orientation: "vertical",
    stretch: stretch,
    className: (0, _classnames.default)(UX_LISTBOX_CLASSNAME, className),
    role: as === 'menu' ? 'menu' : 'listbox',
    tabIndex: tabIndex,
    onBlur: handleOnBlur,
    onKeyDown: handleOnKeyDown,
    "aria-activedescendant": !anchorRef ? activeItemId : null
  }, [].concat(items).map(item => /*#__PURE__*/_react.default.createElement(ListboxItem, {
    key: item.id,
    id: item.id // @TODO potentially splat ...item?
    ,
    as: as,
    isSelected: selected === item.id,
    isFocused: activeItemId === item.id,
    onSelect: generateOnConfirm(item.id)
  }, item.children)));
});

Listbox.propTypes = {
  /** Unique identifier for the component */
  id: _propTypes.default.string,

  /** Determines how the component should behave, namely aria roles used */
  as: _propTypes.default.oneOf(['listbox', 'menu']),

  /** Controls the stretch property of the underlying sibling set */
  stretch: _propTypes.default.bool,

  /** Array of values for the list. As of v2201.0.0 ONLY strings. */
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    children: _propTypes.default.node.isRequired
  })).isRequired,

  /** Override tabIndex. Defaults to 0 */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /** Callback when the item is chosen. The first argument is id of the item. */
  onConfirm: _propTypes.default.func,

  /** The selected item id */
  selected: _propTypes.default.string,

  /** Callback for when the active item (aka. the focused item is changed. The first argument is id of the item. */
  onActiveItemChange: _propTypes.default.func,

  /** Enables looping of item selection when using keyboard interaction */
  loop: _propTypes.default.bool,

  /** ref used to forward the onKeyDown handler used by Listbox */
  anchorRef: _propTypes.default.object
};
Listbox.displayName = 'Listbox';
var _default = Listbox;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/search/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@ux/search/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _fieldFrame = _interopRequireDefault(__webpack_require__(/*! @ux/field-frame */ "./node_modules/@ux/field-frame/lib/index.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! @ux/button */ "@ux/button"));

var _textEntry = _interopRequireDefault(__webpack_require__(/*! @ux/text-entry */ "./node_modules/@ux/text-entry/lib/index.js"));

var _flyout = _interopRequireDefault(__webpack_require__(/*! @ux/flyout */ "./node_modules/@ux/flyout/lib/index.js"));

var _listbox = _interopRequireDefault(__webpack_require__(/*! @ux/listbox */ "./node_modules/@ux/listbox/lib/index.js"));

var _delete = _interopRequireDefault(__webpack_require__(/*! @ux/icon/delete */ "./node_modules/@ux/icon/delete/index.js"));

var _mergeRefs = _interopRequireDefault(__webpack_require__(/*! merge-refs */ "./node_modules/merge-refs/dist/esm/index.js"));

const _excluded = ["id", "ariaLabels", "button", "className", "clearable", "children", "onConfirm", "onSelect", "open", "role", "type", "placement", "items", "onClose", "portalElem", "strategy"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const UX_SEARCH_CLASSNAME = 'ux-search';
const DEFAULT_ARIA_LABELS = {
  clear: 'Clear search field'
};
/**
 * "Sluggifies" an individual item to ensure uniqueness as an ID
 *
 * @param {String} parentId parent ID to be used in namespacing
 * @param {String} value item value
 * @returns {String} sluggified value
 */

function generateItemId(parentId, value) {
  const valueSlug = String(value).toLowerCase().replace(/[^a-z0-9-]+/g, '');
  return [parentId, 'option', valueSlug].join('--');
}
/**
 * Converts an array of string items into an array of item objects for use in Listbox
 *
 * @param {Array<String>} items Array of string items
 * @param {String} parentId The parent ID to use for namespacing
 * @returns {Array<Object>} array of item objects
 */


function generateItemsArray(items, parentId) {
  return [].concat(items).map(item => ({
    id: generateItemId(parentId, item),
    children: item,
    value: item
  }));
}
/**
 * Creates a search component
 *
 * @param {Object} props - Component properties
 *
 * Search specific params
 * @param {Object} [props.ariaLabels] - Sets aria labels for the internals
 * @param {String} [props.ariaLabels.close] - Label for the clear button
 * @param {Element} [props.button] - Sets a button within the input
 * @param {String} [props.className] - Provides an optional class name to be set on the root
 * @param {Boolean} [props.clearable] - Determines if a clear button should be included
 * @param {Node} [props.children] - Content to show within the flyout
 * @param {Boolean} [props.divider] - Adds an optional divider between the button and input
 * @param {Array<String>} [props.items] - List of possible results to show in flyout
 * @param {Boolean} [props.open] - If content is set within the list, this controls visibility
 * @param {Element} [props.portalElem] - Element for flyout attachment
 * @param {String} [props.strategy] - Flyout positioning
 *
 * @returns {Component} - Search component
 */


const Search = /*#__PURE__*/_react.default.forwardRef(function Search(props, ref) {
  const _ref = props || {},
        {
    id,
    ariaLabels,
    button,
    className,
    clearable = true,
    children,
    onConfirm,
    onSelect,
    open = true,

    /* Props above are specific for Search, textEntryProps are for TextEntry */
    role = 'searchbox',
    type = 'text',
    placement: initPlacement = 'bottom-start',
    items: _items = [],
    onClose,
    portalElem,
    strategy
  } = _ref,
        textEntryProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  const {
    invalid,
    disabled,
    onChange,
    value
  } = textEntryProps || {};

  const {
    clear
  } = _objectSpread(_objectSpread({}, DEFAULT_ARIA_LABELS), ariaLabels);

  const LISTBOX_ID = `${id}-listbox`;
  const items = (0, _react.useMemo)(() => generateItemsArray(_items, id), [_items, id]);
  const textEntryRef = (0, _mergeRefs.default)((0, _react.useRef)(null), ref);
  const anchorRef = (0, _react.useRef)(null);
  const listboxRef = (0, _react.useRef)(null);
  const [placement, setPlacement] = (0, _react.useState)(initPlacement);
  const hasItems = items.length > 0;
  const show = open && Boolean(hasItems || children);
  const handleOnClear = (0, _react.useCallback)(ev => {
    var _textEntryRef$current, _textEntryRef$current2;

    onChange('', {
      event: ev
    }); // Move focus back to the text element!

    (_textEntryRef$current = textEntryRef.current) === null || _textEntryRef$current === void 0 ? void 0 : (_textEntryRef$current2 = _textEntryRef$current.focus) === null || _textEntryRef$current2 === void 0 ? void 0 : _textEntryRef$current2.call(_textEntryRef$current);
  }, [onChange, textEntryRef]);
  const handleTextEntryConfirm = (0, _react.useCallback)(meta => {
    if (meta.key === 'Enter') {
      onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(meta.target.value, meta);
    }
  }, [onConfirm]);
  const handleListboxConfirm = (0, _react.useCallback)((itemId, meta) => {
    // Need to return what the author gave in the props
    const index = items.findIndex(item => item.id === itemId);
    const item = ~index ? _items[index] : null;
    onChange(item, meta);
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(item, meta);
    onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(item, meta);
  }, [onChange, onSelect, onConfirm, _items, items]);
  const content = hasItems ? /*#__PURE__*/_react.default.createElement(_listbox.default, {
    ref: listboxRef,
    anchorRef: textEntryRef,
    id: LISTBOX_ID,
    items: items,
    stretch: true,
    loop: true,
    onConfirm: handleListboxConfirm
  }) : children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(UX_SEARCH_CLASSNAME, className, {
      [`${UX_SEARCH_CLASSNAME}--composed`]: button
    })
  }, /*#__PURE__*/_react.default.createElement(_fieldFrame.default, {
    className,
    disabled,
    invalid,
    ref: anchorRef,
    flyoutPlacement: show ? placement : null
  }, /*#__PURE__*/_react.default.createElement(_textEntry.default, (0, _extends2.default)({
    autoComplete: "off"
  }, textEntryProps, {
    id: id,
    role: role,
    type: type,
    onKeyDown: handleTextEntryConfirm,
    ref: textEntryRef,
    "aria-multiline": false,
    "aria-autocomplete": hasItems ? 'list' : null,
    "aria-controls": hasItems ? LISTBOX_ID : null
    /* @TODO provide id for arbitrary component children? */
    ,
    "aria-expanded": show
  })), show && /*#__PURE__*/_react.default.createElement(_flyout.default, {
    anchorRef: anchorRef,
    placement: initPlacement,
    onPlacement: setPlacement,
    portalElem: portalElem,
    strategy: strategy,
    stretch: true,
    onClose: onClose
  }, content), clearable && /*#__PURE__*/_react.default.createElement(_button.default, {
    "aria-label": clear,
    design: "stateless",
    hidden: !value,
    icon: /*#__PURE__*/_react.default.createElement(_delete.default, null),
    onClick: handleOnClear,
    value: ""
  })), button);
});

Search.propTypes = _objectSpread(_objectSpread(_objectSpread({}, _fieldFrame.default.propTypes), _textEntry.default.propTypes), {}, {
  /** Sets aria labels for the internals */
  ariaLabels: _propTypes.default.shape({
    /** Label for the clear button */
    clear: _propTypes.default.string
  }),

  /** Sets a button within the input */
  button: _propTypes.default.element,

  /** Provides an optional class name to be set on the root */
  className: _propTypes.default.string,

  /** Determines if a clear button should be included */
  clearable: _propTypes.default.bool,

  /** Content to show within the flyout */
  children: _propTypes.default.node,

  /** List of possible results to show in flyout */
  items: _propTypes.default.arrayOf(_propTypes.default.string),

  /** Callback when an item is selected within the results flyout or enter key press in the search box. The first argument is the id of the item. */
  onConfirm: _propTypes.default.func,

  /** Callback when an item is selected within the results flyout. The first argument is the id of the item. */
  onSelect: _propTypes.default.func,

  /** If content is set within the list, this controls visibility */
  open: _propTypes.default.bool,

  /** Element for flyout attachment */
  portalElem: _propTypes.default.object,

  /** Flyout positioing */
  strategy: _propTypes.default.oneOf(['absolute', 'fixed'])
});
var _default = Search;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/sibling-set/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@ux/sibling-set/lib/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _label = _interopRequireDefault(__webpack_require__(/*! @ux/label */ "./node_modules/@ux/label/lib/index.js"));

var _text = _interopRequireDefault(__webpack_require__(/*! @ux/text */ "@ux/text"));

var _classes = _interopRequireDefault(__webpack_require__(/*! @ux/text/classes */ "./node_modules/@ux/text/lib/classes.js"));

const _excluded = ["children", "className", "divider", "gap", "id", "invalid", "label", "helpMessage", "errorMessage", "required", "orientation", "stretch", "wrap"];
const UX_SIBLINGSET_CLASSNAME = 'ux-sibling-set';
/**
 * Creates a SiblingSet component
 *
 * @param {Object} props - Properties to inform the component
 * @param {Elements} props.children - Given children as siblings
 * @param {String} [props.className] - Optional class name
 * @param {Boolean} [props.divider] - Optional divider
 * @param {String} [props.gap] - Optional amount of space between siblings, sm md lg
 * @param {String} [props.id] - Used to inform a11y internals
 * @param {Boolean|String} [props.invalid] - Sets invalid within the component
 * @param {Object} [props.label] - Label configuration object
 * @param {Element} [props.label.content] - Content for the label
 * @param {String} [props.label.id] - `id` for the label
 * @param {String} [props.helpMessage] - Help message
 * @param {String} [props.errorMessage] - Error message
 * @param {String} [props.orientation] - Directions for layout, horizontal or vertical
 * @param {Boolean} [props.stretch] - Determines if the siblings should stretch the full width of the container
 * @param {Boolean} [props.wrap] - Wrap children to the next line
 * @returns {Component} - The SiblingSet component
 */

const SiblingSet = /*#__PURE__*/_react.default.forwardRef(function SiblingSet(props, ref) {
  const _ref = props || {},
        {
    children,
    className,
    divider,
    gap,
    id,
    invalid,
    label,
    helpMessage,
    errorMessage,
    required,
    orientation = 'horizontal',
    stretch,
    wrap
  } = _ref,
        rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  delete rest.style;

  if (!children) {
    return null;
  }

  const ariaLabelledBy = label && id && `${id}-label`;
  const helpMessageId = helpMessage && id && `${id}-help`;
  const errorMessageId = errorMessage && id && `${id}-error`;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(UX_SIBLINGSET_CLASSNAME, className, `${UX_SIBLINGSET_CLASSNAME}-${orientation}`, {
      [`${UX_SIBLINGSET_CLASSNAME}-gap-${gap}`]: gap,
      [`${UX_SIBLINGSET_CLASSNAME}--stretch`]: stretch,
      [`${UX_SIBLINGSET_CLASSNAME}--wrap`]: wrap
    }),
    role: "group",
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": [helpMessageId, errorMessageId].filter(Boolean).join(' ')
  }, ariaLabelledBy && /*#__PURE__*/_react.default.createElement(_label.default, {
    className: `${UX_SIBLINGSET_CLASSNAME}-label`,
    id: ariaLabelledBy,
    htmlFor: id,
    required: required
  }, label), divider && /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    id: id,
    ref: ref,
    "aria-invalid": invalid,
    className: (0, _classes.default)({
      className: `${UX_SIBLINGSET_CLASSNAME}-children`,
      emphasis: invalid ? 'critical' : null
    }),
    style: {
      '--ux-siblingset-amount': children.length
    }
  }, rest), children), helpMessage && /*#__PURE__*/_react.default.createElement(_text.default.p, {
    text: helpMessage,
    as: "caption",
    id: helpMessageId,
    emphasis: "passive"
  }), errorMessage && /*#__PURE__*/_react.default.createElement(_text.default.p, {
    text: errorMessage,
    as: "caption",
    id: errorMessageId,
    emphasis: "critical",
    role: "alert"
  }));
});
/**
 * Determine if given collection of props are valid
 *
 * @param {Object} props - List of given props
 * @param {String} propName - Name of current prop
 * @param {String} componentName - Name of the component
 * @returns {PropTypeValidation} - Property configuration validity
 */


function oneOfRequiredProps(props, propName, componentName) {
  const labelNoId = props.label && !props.id;
  const helpNoId = props.helpMessage && !props.id;
  const errorNoId = props.errorMessage && !props.id;

  if (labelNoId || helpNoId || errorNoId) {
    return new Error(`When using a label, helpMessage or errorMessage, the 'id' prop is required`);
  }

  return _propTypes.default.checkPropTypes({
    [propName]: _propTypes.default.node
  }, props, propName, componentName);
}

SiblingSet.propTypes = {
  /** Children to render as siblings */
  children: _propTypes.default.node,

  /** Optional class name used to help position the component */
  className: _propTypes.default.string,

  /** Sets a divider between the label and siblings, helpful for segregating the label from the siblings */
  divider: _propTypes.default.bool,

  /** Gap between the siblings, no gap by default */
  gap: _propTypes.default.oneOf(['sm', 'md', 'lg']),

  /** Used to inform a11y internals */
  id: oneOfRequiredProps,

  /** Sets the component as invalid */
  invalid: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['grammar', 'spelling'])]),

  /** Optional label for the siblings */
  label: oneOfRequiredProps,

  /** Optional message for the siblings */
  helpMessage: oneOfRequiredProps,

  /** Optional error message for the siblings */
  errorMessage: oneOfRequiredProps,

  /** The direction of the siblings, either horizontal or vertical */
  orientation: _propTypes.default.oneOf(['horizontal', 'vertical']),

  /** Optionally shows group as required */
  required: _label.default.propTypes.required,

  /** Stretch the width of the container, helps for larger siblings */
  stretch: _propTypes.default.bool,

  /** Wrap children when appropriate */
  wrap: _propTypes.default.bool
};
SiblingSet.displayName = 'SiblingSet';
var _default = SiblingSet;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/text-entry/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@ux/text-entry/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _label = _interopRequireWildcard(__webpack_require__(/*! @ux/label */ "./node_modules/@ux/label/lib/index.js"));

var _classes = _interopRequireDefault(__webpack_require__(/*! @ux/text/classes */ "./node_modules/@ux/text/lib/classes.js"));

const _excluded = ["className", "disabled", "id", "invalid", "label", "multiline", "onBlur", "onChange", "onFocus", "placeholder", "resize", "required", "size", "suggestion", "type", "value"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const inputTypes = ['text', 'email', 'password', 'url', 'tel', 'number', 'search'];
const UX_TEXT_ENTRY_CLASSNAME = 'ux-text-entry';
const UX_TEXT_ENTRY_SIZE_CHAR = '#';
/**
 * Create props to be added to the shell of the component
 *
 * @param {Object} props - Props from the TextEntry component below
 * @param {String|React.Element} [props.label] - Label for the component
 * @param {Boolean} [props.multiline] - Renders input as textarea
 * @param {Boolean|String} [props.resize] - Allows a multiline input to be resized
 * @param {String} [props.size] - Sets the size of the input
 * @param {String|Number} [props.value] - Value for the input
 * @returns {Object} - Props to be applied to the shell
 */

function getShellProps(props) {
  const {
    multiline,
    label,
    size,
    resize
  } = props; // Newline character is expected to size vertically

  const sizingCharacter = !multiline ? UX_TEXT_ENTRY_SIZE_CHAR : `
  `; // If there's a label, it counts as the first sizing character

  const firstCharacter = !label ? UX_TEXT_ENTRY_SIZE_CHAR : ''; // This logic handles how large the input should be. .padEnd() doesn't seem to work with newline characters

  let dataSize = Array(size || 1).fill(sizingCharacter).map((v, i) => i === 0 ? firstCharacter : v).join(''); // Single line with label cannot be horizontally sized

  if (label && !multiline) {
    dataSize = null;
  } // This logic determines how the resizing should be applied


  let style;

  if (multiline) {
    style = typeof resize === 'string' ? {
      resize
    } : {
      resize: resize ? 'both' : 'none'
    };
  }

  return {
    'data-size': dataSize,
    style
  };
}
/**
 * Text entry functional component
 * @param {Object} props - Information for the props can be found in the PropTypes below and in TextEntry propTypes
 * @param {String} [props.className] - Optional classname
 * @param {Boolean} [props.disabled] - Sets component as disabled
 * @param {String} props.id - Sets the id of the input
 * @param {Boolean} [props.invalid] - Sets component as invalid
 * @param {String|React.Element} [props.label] - Label for the component
 * @param {Boolean} [props.multiline] - Renders input as textarea
 * @param {String} [props.placeholder] - Sets placeholder text
 * @param {Boolean|String} [props.resize] - Allows a multiline input to be resized
 * @param {Boolean} [props.required] - Sets component as required, only visual
 * @param {String} [props.size] - Sets the size of the input
 * @param {String} [props.suggestion] - Allows for autosuggest functionality
 * @param {String} [props.type] - Attribute for the input type, default is text
 * @param {String|Number} [props.value] - Value for the input
 * @param {Object} ref - Forwarded ref to TextEntry
 * @returns {React.Component} TextEntry component
 */


const TextEntry = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  const {
    className,
    disabled,
    id,
    invalid,
    label,
    multiline,
    onBlur,
    onChange = Function.prototype,
    onFocus,
    placeholder,
    resize,
    required,
    size,
    suggestion,
    type = 'text',
    value
  } = props,
        rest = (0, _objectWithoutProperties2.default)(props, _excluded); // style is explicitly omitted, do not override.

  delete rest.style;
  const [isFocused, setFocused] = (0, _react.useState)(false); // Determine if the label should move

  const _onFocus = (0, _react.useCallback)(ev => {
    setFocused(true);
    typeof onFocus === 'function' && onFocus(ev);
  }, [setFocused, onFocus]);

  const _onBlur = (0, _react.useCallback)(ev => {
    setFocused(false);
    typeof onBlur === 'function' && onBlur(ev);
  }, [setFocused, onBlur]);

  const _onChange = (0, _react.useCallback)(ev => {
    onChange(ev.target.value, {
      event: ev
    });
  }, [onChange]);

  const TagName = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(`${UX_TEXT_ENTRY_CLASSNAME}-shell`, className, (0, _classes.default)({
      as: 'input',
      emphasis: invalid && 'critical'
    }))
  }, getShellProps({
    multiline,
    label,
    size,
    resize
  })), suggestion && /*#__PURE__*/_react.default.createElement("span", {
    className: `${UX_TEXT_ENTRY_CLASSNAME}-suggestion`
  }, suggestion), !placeholder && (0, _label.ensureLabelComponent)(label, {
    float: Boolean(value) || isFocused,
    internal: true,
    required,
    htmlFor: id
  }), /*#__PURE__*/_react.default.createElement(TagName, (0, _extends2.default)({
    ref: ref,
    className: `${UX_TEXT_ENTRY_CLASSNAME}-field`,
    disabled: disabled,
    id: id,
    placeholder: placeholder,
    "aria-invalid": invalid,
    "aria-required": Boolean(required),
    type: type,
    value: value,
    onChange: _onChange,
    onFocus: _onFocus,
    onBlur: _onBlur,
    size: size
  }, rest)));
});

TextEntry.propTypes = {
  /** Classes applied to the shell for positioning purposes */
  className: _propTypes.default.string,

  /** Sets the disabled state of the input */
  disabled: _propTypes.default.bool,

  /** Id applied to the input, used for the for attribute on the label */
  id: _propTypes.default.string.isRequired,

  /** Set component when input is invalid */
  invalid: _propTypes.default.bool,

  /** Optional label to float above input, placeholder will not show when using this */
  label: _propTypes.default.node,

  /** Uses a <textarea/> instead */
  multiline: _propTypes.default.bool,

  /** Blur handler for a input */
  onBlur: _propTypes.default.func,

  /** Change handler for a input */
  onChange: _propTypes.default.func,

  /** Focus handler for a input */
  onFocus: _propTypes.default.func,

  /** Placeholder for the input, do not supply with a floating label */
  placeholder: _propTypes.default.string,

  /** Allows a multiline input to be resized */
  resize: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.oneOf(['horizontal', 'vertical'])]),

  /** Add asterik to supplied label, aria-required */
  required: _label.default.propTypes.required,

  /** Set the size of the input */
  size: _propTypes.default.number,

  /** Text to suggest as completion of the input */
  suggestion: _propTypes.default.string,

  /** Input type */
  type: _propTypes.default.oneOf(inputTypes),

  /** Value for the input */
  value: _propTypes.default.node
};
TextEntry.displayName = 'TextEntry';
var _default = TextEntry;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/@ux/text/lib/classes.js":
/*!**********************************************!*\
  !*** ./node_modules/@ux/text/lib/classes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.asOptions = void 0;
exports["default"] = textClasses;
exports.emphasisOptions = void 0;

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _feedbackExpressions = _interopRequireDefault(__webpack_require__(/*! @ux/intents/lib/feedback-expressions */ "./node_modules/@ux/intents/lib/feedback-expressions.js"));

// Possible options for as prop
const asOptions = ['title', 'heading', 'paragraph', 'action', 'input', 'label', 'caption'];
exports.asOptions = asOptions;
const emphasisOptions = Object.values(_feedbackExpressions.default).map(v => v.toLowerCase());
exports.emphasisOptions = emphasisOptions;
const UX_TEXT_CLASSNAME = 'ux-text';
/**
 * Creates a collection of classes for text styles
 *
 * @param {Object} props - A props configuration object
 * @param {String} [props.as] - A category of text
 * @param {String} [props.className] - A class name to include
 * @param {String} [props.emphasis] - Includes styles to represent feedback
 * @param {Number} [props.size] - A number representing the font size
 * @returns {String} A collection of class names
 */

function textClasses(props) {
  const {
    as,
    className,
    emphasis,
    size
  } = props || {};
  return (0, _classnames.default)(UX_TEXT_CLASSNAME, className, {
    [`${UX_TEXT_CLASSNAME}-size${size}`]: typeof size === 'number' && size >= -2 && size < 6,
    [`${UX_TEXT_CLASSNAME}-${as}`]: as && asOptions.includes(as),
    [`${UX_TEXT_CLASSNAME}-feedback-${emphasis}`]: emphasis && emphasisOptions.includes(emphasis)
  });
}

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

/***/ "./node_modules/merge-refs/dist/esm/index.js":
/*!***************************************************!*\
  !*** ./node_modules/merge-refs/dist/esm/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mergeRefs)
/* harmony export */ });
/**
 * A function that merges React refs into one.
 * Supports both functions and ref objects created using createRef() and useRef().
 *
 * Usage:
 * ```jsx
 * <div ref={mergeRefs(ref1, ref2, ref3)} />
 * ```
 *
 * @param {...Array<Function|object>} inputRefs Array of refs
 * @returns {Function} Merged refs
 */
function mergeRefs() {
  for (var _len = arguments.length, inputRefs = new Array(_len), _key = 0; _key < _len; _key++) {
    inputRefs[_key] = arguments[_key];
  }

  var filteredInputRefs = inputRefs.filter(Boolean);

  if (filteredInputRefs.length <= 1) {
    return filteredInputRefs[0];
  }

  return function mergedRefs(ref) {
    filteredInputRefs.forEach(function (inputRef) {
      if (typeof inputRef === 'function') {
        inputRef(ref);
      } else {
        // eslint-disable-next-line no-param-reassign
        inputRef.current = ref;
      }
    });
  };
}

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

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs":"react-dom","commonjs2":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "@ux/button":
/*!*************************************************************************************************************************************!*\
  !*** external {"root":["ux","Button"],"commonjs":["@ux/button","default"],"commonjs2":["@ux/button","default"],"amd":"@ux/button"} ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__ux_button__;

/***/ }),

/***/ "@ux/text":
/*!*****************************************************************************************************************************!*\
  !*** external {"root":["ux","Text"],"commonjs":["@ux/text","default"],"commonjs2":["@ux/text","default"],"amd":"@ux/text"} ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__ux_text__;

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

/***/ }),

/***/ "./node_modules/@floating-ui/core/dist/floating-ui.core.browser.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/@floating-ui/core/dist/floating-ui.core.browser.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrow": () => (/* binding */ arrow),
/* harmony export */   "autoPlacement": () => (/* binding */ autoPlacement),
/* harmony export */   "computePosition": () => (/* binding */ computePosition),
/* harmony export */   "detectOverflow": () => (/* binding */ detectOverflow),
/* harmony export */   "flip": () => (/* binding */ flip),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "inline": () => (/* binding */ inline),
/* harmony export */   "limitShift": () => (/* binding */ limitShift),
/* harmony export */   "offset": () => (/* binding */ offset),
/* harmony export */   "rectToClientRect": () => (/* binding */ rectToClientRect),
/* harmony export */   "shift": () => (/* binding */ shift),
/* harmony export */   "size": () => (/* binding */ size)
/* harmony export */ });
function getSide(placement) {
  return placement.split('-')[0];
}

function getAlignment(placement) {
  return placement.split('-')[1];
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
}

function getLengthFromAxis(axis) {
  return axis === 'y' ? 'height' : 'width';
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === 'x';
  let coords;

  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;

    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;

    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }

  switch (getAlignment(placement)) {
    case 'start':
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;

    case 'end':
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }

  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain positioning strategy.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */

const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));

  {
    if (platform == null) {
      console.error(['Floating UI: `platform` property was not passed to config. If you', 'want to use Floating UI on the web, install @floating-ui/dom', 'instead of the /core package. Otherwise, you can create your own', '`platform`: https://floating-ui.com/docs/platform'].join(' '));
    }

    if (middleware.filter(_ref => {
      let {
        name
      } = _ref;
      return name === 'autoPlacement' || name === 'flip';
    }).length > 1) {
      throw new Error(['Floating UI: duplicate `flip` and/or `autoPlacement`', 'middleware detected. This will lead to an infinite loop. Ensure only', 'one of either has been passed to the `middleware` array.'].join(' '));
    }
  }

  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;

  for (let i = 0; i < middleware.length; i++) {
    const {
      name,
      fn
    } = middleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = { ...middlewareData,
      [name]: { ...middlewareData[name],
        ...data
      }
    };

    {
      if (resetCount > 50) {
        console.warn(['Floating UI: The middleware lifecycle appears to be running in an', 'infinite loop. This is usually caused by a `reset` continually', 'being returned without a break condition.'].join(' '));
      }
    }

    if (reset && resetCount <= 50) {
      resetCount++;

      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }

        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }

        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }

      i = -1;
      continue;
    }
  }

  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}

function getSideObjectFromPadding(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}

function rectToClientRect(rect) {
  return { ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(middlewareArguments, options) {
  var _await$platform$isEle;

  if (options === void 0) {
    options = {};
  }

  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = middlewareArguments;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: elementContext === 'floating' ? { ...rects.floating,
      x,
      y
    } : rects.reference,
    offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
    strategy
  }) : rects[elementContext]);
  return {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
}

const min = Math.min;
const max = Math.max;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

/**
 * Positions an inner element of the floating element such that it is centered
 * to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,

  async fn(middlewareArguments) {
    // Since `element` is required, we don't Partial<> the type
    const {
      element,
      padding = 0
    } = options != null ? options : {};
    const {
      x,
      y,
      placement,
      rects,
      platform
    } = middlewareArguments;

    if (element == null) {
      {
        console.warn('Floating UI: No `element` was passed to the `arrow` middleware.');
      }

      return {};
    }

    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x,
      y
    };
    const axis = getMainAxisFromPlacement(placement);
    const alignment = getAlignment(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const minProp = axis === 'y' ? 'top' : 'left';
    const maxProp = axis === 'y' ? 'bottom' : 'right';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;

    if (clientSize === 0) {
      clientSize = rects.floating[length];
    }

    const centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds

    const min = paddingObject[minProp];
    const max = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = within(min, center, max); // Make sure that arrow points at the reference

    const alignmentPadding = alignment === 'start' ? paddingObject[minProp] : paddingObject[maxProp];
    const shouldAddOffset = alignmentPadding > 0 && center !== offset && rects.reference[length] <= rects.floating[length];
    const alignmentOffset = shouldAddOffset ? center < min ? min - center : max - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset
      }
    };
  }

});

const hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, matched => hash$1[matched]);
}

function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }

  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';

  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }

  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}

const hash = {
  start: 'end',
  end: 'start'
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, matched => hash[matched]);
}

const sides = ['top', 'right', 'bottom', 'left'];
const allPlacements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
    }

    return true;
  });
}

/**
 * Automatically chooses the `placement` which has the most space available.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'autoPlacement',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$autoP, _middlewareData$autoP2, _middlewareData$autoP3, _middlewareData$autoP4, _placementsSortedByLe;

      const {
        x,
        y,
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = middlewareArguments;
      const {
        alignment = null,
        allowedPlacements = allPlacements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = options;
      const placements = getPlacementList(alignment, autoAlignment, allowedPlacements);
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const currentIndex = (_middlewareData$autoP = (_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.index) != null ? _middlewareData$autoP : 0;
      const currentPlacement = placements[currentIndex];

      if (currentPlacement == null) {
        return {};
      }

      const {
        main,
        cross
      } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))); // Make `computeCoords` start from the right place

      if (placement !== currentPlacement) {
        return {
          x,
          y,
          reset: {
            placement: placements[0]
          }
        };
      }

      const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
      const allOverflows = [...((_middlewareData$autoP3 = (_middlewareData$autoP4 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP4.overflows) != null ? _middlewareData$autoP3 : []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements[currentIndex + 1]; // There are more placements to check

      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }

      const placementsSortedByLeastOverflow = allOverflows.slice().sort((a, b) => a.overflows[0] - b.overflows[0]);
      const placementThatFitsOnAllSides = (_placementsSortedByLe = placementsSortedByLeastOverflow.find(_ref => {
        let {
          overflows
        } = _ref;
        return overflows.every(overflow => overflow <= 0);
      })) == null ? void 0 : _placementsSortedByLe.placement;
      const resetPlacement = placementThatFitsOnAllSides != null ? placementThatFitsOnAllSides : placementsSortedByLeastOverflow[0].placement;

      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }

      return {};
    }

  };
};

function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}

/**
 * Changes the placement of the floating element to one that will fit if the
 * initially specified `placement` does not.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'flip',
    options,

    async fn(middlewareArguments) {
      var _middlewareData$flip;

      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = side === initialPlacement;
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];

      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }

      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
        overflows.push(overflow[main], overflow[cross]);
      }

      overflowsData = [...overflowsData, {
        placement,
        overflows
      }]; // One or more sides is overflowing

      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip$, _middlewareData$flip2;

        const nextIndex = ((_middlewareData$flip$ = (_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) != null ? _middlewareData$flip$ : 0) + 1;
        const nextPlacement = placements[nextIndex];

        if (nextPlacement) {
          // Try next placement and re-run the lifecycle
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        let resetPlacement = 'bottom';

        switch (fallbackStrategy) {
          case 'bestFit':
            {
              var _overflowsData$map$so;

              const placement = (_overflowsData$map$so = overflowsData.map(d => [d, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0].placement;

              if (placement) {
                resetPlacement = placement;
              }

              break;
            }

          case 'initialPlacement':
            resetPlacement = initialPlacement;
            break;
        }

        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }

      return {};
    }

  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}

function isAnySideFullyClipped(overflow) {
  return sides.some(side => overflow[side] >= 0);
}

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (_temp) {
  let {
    strategy = 'referenceHidden',
    ...detectOverflowOptions
  } = _temp === void 0 ? {} : _temp;
  return {
    name: 'hide',

    async fn(middlewareArguments) {
      const {
        rects
      } = middlewareArguments;

      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(middlewareArguments, { ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }

        case 'escaped':
          {
            const overflow = await detectOverflow(middlewareArguments, { ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }

        default:
          {
            return {};
          }
      }
    }

  };
};

async function convertValueToCoords(middlewareArguments, value) {
  const {
    placement,
    platform,
    elements
  } = middlewareArguments;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === 'x';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === 'function' ? value(middlewareArguments) : value; // eslint-disable-next-line prefer-const

  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };

  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }

  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
/**
 * Displaces the floating element from its reference element.
 * @see https://floating-ui.com/docs/offset
 */

const offset = function (value) {
  if (value === void 0) {
    value = 0;
  }

  return {
    name: 'offset',
    options: value,

    async fn(middlewareArguments) {
      const {
        x,
        y
      } = middlewareArguments;
      const diffCoords = await convertValueToCoords(middlewareArguments, value);
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: diffCoords
      };
    }

  };
};

function getCrossAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/**
 * Shifts the floating element in order to keep it in view when it will overflow
 * a clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'shift',
    options,

    async fn(middlewareArguments) {
      const {
        x,
        y,
        placement
      } = middlewareArguments;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];

      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min, mainAxisCoord, max);
      }

      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min, crossAxisCoord, max);
      }

      const limitedCoords = limiter.fn({ ...middlewareArguments,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return { ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y
        }
      };
    }

  };
};

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    options,

    fn(middlewareArguments) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = middlewareArguments;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = options;
      const coords = {
        x,
        y
      };
      const mainAxis = getMainAxisFromPlacement(placement);
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = typeof offset === 'function' ? offset(middlewareArguments) : offset;
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };

      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;

        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }

      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2, _middlewareData$offse3, _middlewareData$offse4;

        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes(getSide(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? (_middlewareData$offse = (_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) != null ? _middlewareData$offse : 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : (_middlewareData$offse3 = (_middlewareData$offse4 = middlewareData.offset) == null ? void 0 : _middlewareData$offse4[crossAxis]) != null ? _middlewareData$offse3 : 0) - (isOriginSide ? computedOffset.crossAxis : 0);

        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }

      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }

  };
};

/**
 * Provides data to change the size of the floating element. For instance,
 * prevent it from overflowing its clipping boundary or match the width of the
 * reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'size',
    options,

    async fn(middlewareArguments) {
      const {
        placement,
        rects,
        platform,
        elements
      } = middlewareArguments;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = options;
      const overflow = await detectOverflow(middlewareArguments, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      let heightSide;
      let widthSide;

      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }

      const xMin = max(overflow.left, 0);
      const xMax = max(overflow.right, 0);
      const yMin = max(overflow.top, 0);
      const yMax = max(overflow.bottom, 0);
      const dimensions = {
        availableHeight: rects.floating.height - (['left', 'right'].includes(placement) ? 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom)) : overflow[heightSide]),
        availableWidth: rects.floating.width - (['top', 'bottom'].includes(placement) ? 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right)) : overflow[widthSide])
      };
      await apply({ ...middlewareArguments,
        ...dimensions
      });
      const nextDimensions = await platform.getDimensions(elements.floating);

      if (rects.floating.width !== nextDimensions.width || rects.floating.height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }

      return {};
    }

  };
};

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    name: 'inline',
    options,

    async fn(middlewareArguments) {
      var _await$platform$getCl;

      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = middlewareArguments; // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.

      const {
        padding = 2,
        x,
        y
      } = options;
      const fallback = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        rect: rects.reference,
        offsetParent: await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating)),
        strategy
      }) : rects.reference);
      const clientRects = (_await$platform$getCl = await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) != null ? _await$platform$getCl : [];
      const paddingObject = getSideObjectFromPadding(padding);

      function getBoundingClientRect() {
        // There are two rects and they are disjoined
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          var _clientRects$find;

          // Find the first rect in which the point is fully inside
          return (_clientRects$find = clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom)) != null ? _clientRects$find : fallback;
        } // There are 2 or more connected rects


        if (clientRects.length >= 2) {
          if (getMainAxisFromPlacement(placement) === 'x') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = getSide(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }

          const isLeftSide = getSide(placement) === 'left';
          const maxRight = max(...clientRects.map(rect => rect.right));
          const minLeft = min(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }

        return fallback;
      }

      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });

      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }

      return {};
    }

  };
};




/***/ }),

/***/ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrow": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.arrow),
/* harmony export */   "autoPlacement": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.autoPlacement),
/* harmony export */   "autoUpdate": () => (/* binding */ autoUpdate),
/* harmony export */   "computePosition": () => (/* binding */ computePosition),
/* harmony export */   "detectOverflow": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.detectOverflow),
/* harmony export */   "flip": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.flip),
/* harmony export */   "getOverflowAncestors": () => (/* binding */ getOverflowAncestors),
/* harmony export */   "hide": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.hide),
/* harmony export */   "inline": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.inline),
/* harmony export */   "limitShift": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.limitShift),
/* harmony export */   "offset": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.offset),
/* harmony export */   "platform": () => (/* binding */ platform),
/* harmony export */   "shift": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.shift),
/* harmony export */   "size": () => (/* reexport safe */ _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.size)
/* harmony export */ });
/* harmony import */ var _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/core */ "./node_modules/@floating-ui/core/dist/floating-ui.core.browser.mjs");



function isWindow(value) {
  return value && value.document && value.location && value.alert && value.setInterval;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function getNodeName(node) {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : '';
}

function getUAString() {
  const uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands) {
    return uaData.brands.map(item => item.brand + "/" + item.version).join(' ');
  }

  return navigator.userAgent;
}

function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
function isShadowRoot(node) {
  // Browsers without `ShadowRoot` support
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function isOverflowElement(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isContainingBlock(element) {
  // TODO: Try and use feature detection here instead
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle(element); // This is non-exhaustive but covers the most common CSS properties that
  // create a containing block.
  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

  return css.transform !== 'none' || css.perspective !== 'none' || isFirefox && css.willChange === 'filter' || isFirefox && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective'].some(value => css.willChange.includes(value)) || ['paint', 'layout', 'strict', 'content'].some( // TS 4.1 compat
  value => {
    const contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}
function isLayoutViewport() {
  // Not Safari
  return !/^((?!chrome|android).)*safari/i.test(getUAString()); // Feature detection for this fails in various ways
  // • Always-visible scrollbar or not
  // • Width of <html>, etc.
  // const vV = win.visualViewport;
  // return vV ? Math.abs(win.innerWidth / vV.scale - vV.width) < 0.5 : true;
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}

const min = Math.min;
const max = Math.max;
const round = Math.round;

function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  var _win$visualViewport$o, _win$visualViewport, _win$visualViewport$o2, _win$visualViewport2;

  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  const clientRect = element.getBoundingClientRect();
  let scaleX = 1;
  let scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  const win = isElement(element) ? getWindow(element) : window;
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  const x = (clientRect.left + (addVisualOffsets ? (_win$visualViewport$o = (_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) != null ? _win$visualViewport$o : 0 : 0)) / scaleX;
  const y = (clientRect.top + (addVisualOffsets ? (_win$visualViewport$o2 = (_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) != null ? _win$visualViewport$o2 : 0 : 0)) / scaleY;
  const width = clientRect.width / scaleX;
  const height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}

function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}

function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}

function isScaled(element) {
  const rect = getBoundingClientRect(element);
  return round(rect.width) !== element.offsetWidth || round(rect.height) !== element.offsetHeight;
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, // @ts-ignore - checked above (TS 4.1 compat)
  isOffsetParentAnElement && isScaled(offsetParent), strategy === 'fixed');
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // @ts-ignore
    node.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    node.parentNode || ( // DOM Element detected
    isShadowRoot(node) ? node.host : null) || // ShadowRoot detected
    getDocumentElement(node) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
}

function getContainingBlock(element) {
  let currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      const parent = currentNode.parentNode;
      currentNode = isShadowRoot(parent) ? parent.host : parent;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  const window = getWindow(element);
  let offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getDimensions(element) {
  if (isHTMLElement(element)) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
  }

  const rect = getBoundingClientRect(element);
  return {
    width: rect.width,
    height: rect.height
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);

  if (offsetParent === documentElement) {
    return rect;
  }

  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } // This doesn't appear to be need to be negated.
    // else if (documentElement) {
    //   offsets.x = getWindowScrollBarX(documentElement);
    // }

  }

  return { ...rect,
    x: rect.x - scroll.scrollLeft + offsets.x,
    y: rect.y - scroll.scrollTop + offsets.y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width,
    height,
    x,
    y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  const width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  const height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width,
    height,
    x,
    y
  };
}

function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);

  if (isLastTraversableNode(parentNode)) {
    // @ts-ignore assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }

  return getNearestOverflowAncestor(parentNode);
}

function getOverflowAncestors(node, list) {
  var _node$ownerDocument;

  if (list === void 0) {
    list = [];
  }

  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  const target = isBody ? [win].concat(win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []) : scrollableAncestor;
  const updatedList = list.concat(target);
  return isBody ? updatedList : // @ts-ignore: isBody tells us target will be an HTMLElement here
  updatedList.concat(getOverflowAncestors(target));
}

function contains(parent, child) {
  const rootNode = child.getRootNode == null ? void 0 : child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    let next = child;

    do {
      // use `===` replace node.isSameNode()
      if (next && parent === next) {
        return true;
      } // @ts-ignore: need a better way to handle this...


      next = next.parentNode || next.host;
    } while (next);
  }

  return false;
}

function getNearestParentCapableOfEscapingClipping(element, clippingAncestors) {
  let currentNode = element;

  while (currentNode && !isLastTraversableNode(currentNode) && // @ts-expect-error
  !clippingAncestors.includes(currentNode)) {
    if (isElement(currentNode) && ['absolute', 'fixed'].includes(getComputedStyle(currentNode).position)) {
      break;
    }

    const parentNode = getParentNode(currentNode);
    currentNode = isShadowRoot(parentNode) ? parentNode.host : parentNode;
  }

  return currentNode;
}

function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, false, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  return {
    top,
    left,
    x: left,
    y: top,
    right: left + element.clientWidth,
    bottom: top + element.clientHeight,
    width: element.clientWidth,
    height: element.clientHeight
  };
}

function getClientRectFromClippingAncestor(element, clippingParent, strategy) {
  if (clippingParent === 'viewport') {
    return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getViewportRect(element, strategy));
  }

  if (isElement(clippingParent)) {
    return getInnerBoundingClientRect(clippingParent, strategy);
  }

  return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getDocumentRect(getDocumentElement(element)));
} // A "clipping ancestor" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingAncestors(element) {
  const clippingAncestors = getOverflowAncestors(element);
  const nearestEscapableParent = getNearestParentCapableOfEscapingClipping(element, clippingAncestors);
  let clipperElement = null;

  if (nearestEscapableParent && isHTMLElement(nearestEscapableParent)) {
    const offsetParent = getOffsetParent(nearestEscapableParent);

    if (isOverflowElement(nearestEscapableParent)) {
      clipperElement = nearestEscapableParent;
    } else if (isHTMLElement(offsetParent)) {
      clipperElement = offsetParent;
    }
  }

  if (!isElement(clipperElement)) {
    return [];
  } // @ts-ignore isElement check ensures we return Array<Element>


  return clippingAncestors.filter(clippingAncestors => clipperElement && isElement(clippingAncestors) && contains(clippingAncestors, clipperElement) && getNodeName(clippingAncestors) !== 'body');
} // Gets the maximum area that the element is visible in due to any number of
// clipping ancestors


function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const mainClippingAncestors = boundary === 'clippingAncestors' ? getClippingAncestors(element) : [].concat(boundary);
  const clippingAncestors = [...mainClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

const platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getElementRects: _ref => {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    return {
      reference: getRectRelativeToOffsetParent(reference, getOffsetParent(floating), strategy),
      floating: { ...getDimensions(floating),
        x: 0,
        y: 0
      }
    };
  },
  getClientRects: element => Array.from(element.getClientRects()),
  isRTL: element => getComputedStyle(element).direction === 'rtl'
};

/**
 * Automatically updates the position of the floating element when necessary.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }

  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...(isElement(reference) ? getOverflowAncestors(reference) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  let observer = null;

  if (elementResize) {
    let initialUpdate = true;
    observer = new ResizeObserver(() => {
      if (!initialUpdate) {
        update();
      }

      initialUpdate = false;
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    observer.observe(floating);
  }

  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;

  if (animationFrame) {
    frameLoop();
  }

  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);

    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }

    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }

  update();
  return () => {
    var _observer;

    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;

    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a reference element when it is given a certain CSS positioning
 * strategy.
 */

const computePosition = (reference, floating, options) => (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.computePosition)(reference, floating, {
  platform,
  ...options
});




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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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
var _search = _interopRequireDefault(__webpack_require__(/*! @ux/search */ "./node_modules/@ux/search/lib/index.js"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import '@ux/search/dist/styles.css';
var _default = function _default() {
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "uxcore test"), /*#__PURE__*/_react["default"].createElement(_search["default"], {
    id: "search",
    placeholder: "Enter keywords here",
    size: 20,
    value: value,
    onChange: function onChange(value) {
      return setValue(value);
    }
  }));
};
exports["default"] = _default;
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map