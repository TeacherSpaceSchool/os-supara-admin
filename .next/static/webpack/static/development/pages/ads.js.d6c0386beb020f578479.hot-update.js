webpackHotUpdate("static\\development\\pages\\ads.js",{

/***/ "./layouts/App.js":
/*!************************!*\
  !*** ./layouts/App.js ***!
  \************************/
/*! exports provided: mainWindow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainWindow", function() { return mainWindow; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_app_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app/AppBar */ "./components/app/AppBar.js");
/* harmony import */ var _components_app_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/app/Dialog */ "./components/app/Dialog.js");
/* harmony import */ var _components_app_SnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/app/SnackBar */ "./components/app/SnackBar.js");
/* harmony import */ var _components_app_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/app/Drawer */ "./components/app/Drawer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _src_gql_items__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/gql/items */ "./src/gql/items.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../scss/app.scss */ "./scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bottom-scroll-listener */ "./node_modules/react-bottom-scroll-listener/dist/index.es.js");



var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\layouts\\App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
















var mainWindow = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
var App = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var _props$userActions = props.userActions,
      setProfile = _props$userActions.setProfile,
      logout = _props$userActions.logout;
  var showLoad = props.appActions.showLoad;
  var _props$user = props.user,
      profile = _props$user.profile,
      authenticated = _props$user.authenticated;
  var sorts = props.sorts,
      filters = props.filters,
      getList = props.getList,
      pageName = props.pageName,
      dates = props.dates,
      subcategory = props.subcategory,
      category = props.category;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (authenticated) setProfile();else if (!authenticated && profile.role) logout(false);
  }, [authenticated]);
  next_router__WEBPACK_IMPORTED_MODULE_16___default.a.events.on('routeChangeStart', function (err, url) {
    if (!router.pathname.includes(url)) showLoad(true);

    if (err.cancelled) {
      showLoad(false);
    }
  });
  Object(react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_17__["useBottomScrollListener"])(function () {
    console.log('down');
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var favorites, basket, i;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(authenticated && profile.role === 'client')) {
                _context.next = 23;
                break;
              }

              if (!(localStorage.favorites && localStorage.favorites !== '[]')) {
                _context.next = 10;
                break;
              }

              favorites = JSON.parse(localStorage.favorites);
              favorites = favorites.map(function (element) {
                return element._id;
              });
              _context.next = 6;
              return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_10__["addFavoriteItem"])(favorites);

            case 6:
              localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()([]);

              if (!(getList !== undefined)) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return getList();

            case 10:
              if (!(localStorage.basket && localStorage.basket !== '[]')) {
                _context.next = 23;
                break;
              }

              basket = JSON.parse(localStorage.basket);
              i = 0;

            case 13:
              if (!(i < basket.length)) {
                _context.next = 19;
                break;
              }

              _context.next = 16;
              return Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_11__["addBasket"])({
                item: basket[i].item._id,
                count: basket[i].count
              });

            case 16:
              i++;
              _context.next = 13;
              break;

            case 19:
              localStorage.basket = '[]';

              if (!(getList !== undefined)) {
                _context.next = 23;
                break;
              }

              _context.next = 23;
              return getList();

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  var load = props.app.load;
  return __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_components_app_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    subcategory: subcategory,
    category: category,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_components_app_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dates: dates,
    pageName: pageName,
    sorts: sorts,
    filters: filters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("div", {
    ref: mainWindow,
    className: "App-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, props.children), __jsx(_components_app_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_components_app_SnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), load ? __jsx("div", {
    className: "load",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })) : null);
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_12__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_13__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./node_modules/react-bottom-scroll-listener/dist/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-bottom-scroll-listener/dist/index.es.js ***!
  \********************************************************************/
/*! exports provided: default, useBottomScrollListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBottomScrollListener", function() { return useBottomScrollListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var lodash_debounce = debounce;

/**
 * @class BottomScrollListener
 *
 * A simple React component that lets you listen for when you have scrolled to the bottom.
 *
 */
var BottomScrollListener = /** @class */ (function (_super) {
    __extends(BottomScrollListener, _super);
    function BottomScrollListener(props) {
        var _this = _super.call(this, props) || this;
        _this.optionalScrollContainerRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
        if (props.debounce) {
            _this.handleOnScroll = lodash_debounce(_this.handleOnScroll.bind(_this), props.debounce, { trailing: true });
        }
        else {
            _this.handleOnScroll = _this.handleOnScroll.bind(_this);
        }
        return _this;
    }
    BottomScrollListener.prototype.componentDidMount = function () {
        if (this.props.children instanceof Function) {
            if (this.optionalScrollContainerRef.current) {
                this.optionalScrollContainerRef.current.addEventListener('scroll', this.handleOnScroll);
            }
            else {
                throw Error('Unable to use scroll container: Ref to child not available, did you pass the ref prop to an element?');
            }
        }
        else {
            document.addEventListener('scroll', this.handleOnScroll);
        }
    };
    BottomScrollListener.prototype.componentWillUnmount = function () {
        if (this.props.children instanceof Function) {
            if (this.optionalScrollContainerRef.current) {
                this.optionalScrollContainerRef.current.removeEventListener('scroll', this.handleOnScroll);
            }
            else {
                throw Error('Unable to clean up scroll container: Ref has been unmounted prematurely.');
            }
        }
        else {
            document.removeEventListener('scroll', this.handleOnScroll);
        }
    };
    BottomScrollListener.prototype.handleOnScroll = function () {
        if (this.props.children instanceof Function) {
            var scrollNode = this.optionalScrollContainerRef.current;
            if (scrollNode != null) {
                var scrollContainerBottomPosition = Math.round(scrollNode.scrollTop + scrollNode.clientHeight);
                var scrollPosition = Math.round(scrollNode.scrollHeight - this.props.offset);
                if (scrollPosition <= scrollContainerBottomPosition) {
                    this.props.onBottom();
                }
            }
        }
        else {
            var scrollNode = document.scrollingElement || document.documentElement;
            var scrollContainerBottomPosition = Math.round(scrollNode.scrollTop + window.innerHeight);
            var scrollPosition = Math.round(scrollNode.scrollHeight - this.props.offset);
            if (scrollPosition <= scrollContainerBottomPosition) {
                this.props.onBottom();
            }
        }
    };
    BottomScrollListener.prototype.render = function () {
        if (!this.props.children)
            return null;
        if (this.props.children instanceof Function) {
            return this.props.children(this.optionalScrollContainerRef);
        }
        else {
            return this.props.children;
        }
    };
    BottomScrollListener.defaultProps = {
        debounce: 200,
        offset: 0,
    };
    return BottomScrollListener;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));

var createCallback = function (debounce, handleOnScroll) {
    if (debounce) {
        return lodash_debounce(handleOnScroll, debounce, { trailing: true });
    }
    else {
        return handleOnScroll;
    }
};
/**
 *  A react hook that invokes a callback when user scrolls to the bottom
 *
 * @param onBottom Required callback that will be invoked when scrolled to bottom
 * @param offset Offset from bottom of page in pixels. E.g. 300 will trigger onBottom 300px from the bottom of the page
 * @param debounce Optional debounce in milliseconds, defaults to 200ms
 * @return React.MutableRefObject Optionally you can use this to pass to a element to use that as the scroll container
 */
function useBottomScrollListener(onBottom, offset, debounce) {
    if (offset === void 0) { offset = 0; }
    if (debounce === void 0) { debounce = 200; }
    var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    var handleOnScroll = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        if (containerRef.current != null) {
            var scrollNode = containerRef.current;
            var scrollContainerBottomPosition = Math.round(scrollNode.scrollTop + scrollNode.clientHeight);
            var scrollPosition = Math.round(scrollNode.scrollHeight - offset);
            if (scrollPosition <= scrollContainerBottomPosition) {
                onBottom();
            }
        }
        else {
            var scrollNode = document.scrollingElement || document.documentElement;
            var scrollContainerBottomPosition = Math.round(scrollNode.scrollTop + window.innerHeight);
            var scrollPosition = Math.round(scrollNode.scrollHeight - offset);
            if (scrollPosition <= scrollContainerBottomPosition) {
                onBottom();
            }
        }
        // ref dependency needed for the tests, doesn't matter for normal execution
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset, onBottom, containerRef.current]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var callback = createCallback(debounce, handleOnScroll);
        var ref = containerRef.current;
        if (ref != null) {
            ref.addEventListener('scroll', callback);
        }
        else {
            window.addEventListener('scroll', callback);
        }
        return function () {
            if (ref != null) {
                ref.removeEventListener('scroll', callback);
            }
            else {
                window.removeEventListener('scroll', callback);
            }
        };
    }, [handleOnScroll, debounce]);
    return containerRef;
}

/* harmony default export */ __webpack_exports__["default"] = (BottomScrollListener);

//# sourceMappingURL=index.es.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=ads.js.d6c0386beb020f578479.hot-update.js.map