module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__(/*! ../client/router */ "./node_modules/next/dist/client/router.js");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/configureStore */ "./redux/configureStore.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_singleton_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _src_singleton_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/singleton/store */ "./src/singleton/store.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/lib */ "./src/lib.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_7___default()(_redux_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"], {
  debug: false
})(class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_3___default.a {
  static componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    new _src_singleton_client__WEBPACK_IMPORTED_MODULE_10__["SingletonApolloClient"](ctx.req);

    if (ctx.req) {
      ctx.store.getState().app.isMobileApp = Object(_src_lib__WEBPACK_IMPORTED_MODULE_13__["checkMobile"])(ctx.req.headers['user-agent']);
      ctx.store.getState().user.authenticated = Object(_src_lib__WEBPACK_IMPORTED_MODULE_13__["checkAuth"])(ctx.req.headers.cookie);
      if (ctx.store.getState().user.authenticated) ctx.store.getState().user.profile = await Object(_redux_actions_user__WEBPACK_IMPORTED_MODULE_12__["getProfile"])();
    }

    ctx.store.getState().app.search = '';
    ctx.store.getState().app.sort = '-createdAt';
    ctx.store.getState().app.filter = '';
    ctx.store.getState().app.load = false;
    ctx.store.getState().mini_dialog.show = false;
    return {
      pageProps: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    new _src_singleton_store__WEBPACK_IMPORTED_MODULE_11__["SingletonStore"](store);
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
      theme: _src_theme__WEBPACK_IMPORTED_MODULE_6__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
      store: store,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })))));
  }

}));

/***/ }),

/***/ "./redux/actions/snackbar.js":
/*!***********************************!*\
  !*** ./redux/actions/snackbar.js ***!
  \***********************************/
/*! exports provided: showSnackBar, closeSnackBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSnackBar", function() { return showSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSnackBar", function() { return closeSnackBar; });
/* harmony import */ var _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/snackbar */ "./redux/constants/snackbar.js");

function showSnackBar(title) {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__["SHOW_SNACKBAR"],
    payload: {
      title: title
    }
  };
}
function closeSnackBar() {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__["CLOSE_SNACKBAR"]
  };
}

/***/ }),

/***/ "./redux/actions/user.js":
/*!*******************************!*\
  !*** ./redux/actions/user.js ***!
  \*******************************/
/*! exports provided: signup, signin, checkAuthenticated, setAuthenticated, logout, setProfile, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthenticated", function() { return checkAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthenticated", function() { return setAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfile", function() { return setProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/user */ "./redux/constants/user.js");
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/app */ "./redux/constants/app.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/singleton/client */ "./src/singleton/client.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







function signup(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                    mutation ($phone: String!, $password: String!) {
                        signupuser(phone: $phone, password: $password) {
                           role
                           status
                           phone
                           organization
                           _id
                        }
                    }`
      });
      if (result.data.signupuser.role === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });else {
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SHOW_MINI_DIALOG"],
          payload: false
        });
        await next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
        /*
        await dispatch({type: AUTHENTICATED});
        await dispatch({
            type: SET_PROFILE,
            payload: result.data.signupuser
        })*/

        window.location.reload();
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });
    }
  };
}
function signin(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                    mutation ($phone: String!, $password: String!) {
                        signinuser(phone: $phone, password: $password) {
                           role
                           status
                           phone
                           organization
                           _id
                        }
                    }`
      });
      if (result.data.signinuser.role === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });else {
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SHOW_MINI_DIALOG"],
          payload: false
        });
        await next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
        window.location.reload();
        /*
        await dispatch({type: AUTHENTICATED});
        await dispatch({
            type: SET_PROFILE,
            payload: result.data.signinuser
        })*/
      }
    } catch (error) {
      console.error(error);
      await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });
    }
  };
}
function checkAuthenticated() {
  return async dispatch => {
    try {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('jwt')) {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATED"]
        });
      } else {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
      });
    }
  };
}
function setAuthenticated(auth) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["SET_AUTH"],
    payload: auth
  };
}
function logout(reload) {
  return async dispatch => {
    await dispatch({
      type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
    });
    if (reload) await next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
    await js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('jwt');
    await dispatch({
      type: _constants_app__WEBPACK_IMPORTED_MODULE_2__["SET_COUNT_BASKET"],
      payload: 0
    });
    await dispatch({
      type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["SET_PROFILE"],
      payload: {}
    }); //setTimeout(()=>window.location.reload(),100)
  };
}
function setProfile() {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
      let result = await client.query({
        query: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                    query {
                        getStatus {
                           role
                           status
                           phone
                           organization
                           _id
                          }
                    }`
      });
      await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["SET_PROFILE"],
        payload: result.data.getStatus
      });
    } catch (error) {
      console.error(error);
    }
  };
}
async function getProfile() {
  try {
    const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
    let result = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                   query {
                       getStatus {
                          role
                          status
                          phone
                          organization
                          _id
                         }
                   }`
    });
    return result.data.getStatus;
  } catch (error) {
    console.error(error);
  }
}

/***/ }),

/***/ "./redux/configureStore.js":
/*!*********************************!*\
  !*** ./redux/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);



function configureStore(initialState) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["default"], initialState, // applyMiddleware(logger),
  Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a));

  if (false) {}

  return store;
}

/***/ }),

/***/ "./redux/constants/app.js":
/*!********************************!*\
  !*** ./redux/constants/app.js ***!
  \********************************/
/*! exports provided: SHOW_DRAWER, SET_SEARCH, SET_SORT, SET_FILTER, SET_COUNT_BASKET, SET_IS_MOBILE_APP, SHOW_LOAD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_DRAWER", function() { return SHOW_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH", function() { return SET_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SORT", function() { return SET_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNT_BASKET", function() { return SET_COUNT_BASKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_MOBILE_APP", function() { return SET_IS_MOBILE_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_LOAD", function() { return SHOW_LOAD; });
const SHOW_DRAWER = 'SHOW_DRAWER';
const SET_SEARCH = 'SET_SEARCH';
const SET_SORT = 'SET_SORT';
const SET_FILTER = 'SET_FILTER';
const SET_COUNT_BASKET = 'SET_COUNT_BASKET';
const SET_IS_MOBILE_APP = 'SET_IS_MOBILE_APP';
const SHOW_LOAD = 'SHOW_LOAD';

/***/ }),

/***/ "./redux/constants/mini_dialog.js":
/*!****************************************!*\
  !*** ./redux/constants/mini_dialog.js ***!
  \****************************************/
/*! exports provided: SET_MINI_DIALOG, SHOW_MINI_DIALOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MINI_DIALOG", function() { return SET_MINI_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MINI_DIALOG", function() { return SHOW_MINI_DIALOG; });
const SET_MINI_DIALOG = 'SET_MINI_DIALOG';
const SHOW_MINI_DIALOG = 'SHOW_MINI_DIALOG';

/***/ }),

/***/ "./redux/constants/other.js":
/*!**********************************!*\
  !*** ./redux/constants/other.js ***!
  \**********************************/
/*! exports provided: urlGQL, urlGQLws, urlMain, validMail, validPhone, checkInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGQL", function() { return urlGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGQLws", function() { return urlGQLws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlMain", function() { return urlMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMail", function() { return validMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPhone", function() { return validPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInt", function() { return checkInt; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

let urlGQL;
let urlGQLws;
let urlMain;

if ("localhost".trim() === 'azyk.store') {
  urlGQL = `https://${"localhost"}:3000/graphql`;
  urlGQLws = `ws://${"localhost"}:3000/graphql`;
  urlMain = `https://${"localhost"}`;
} else {
  urlGQL = `http://${"localhost"}:3000/graphql`;
  urlGQLws = `ws://${"localhost"}:3000/graphql`;
  urlMain = `http://${"localhost"}`;
}

const validMail = mail => {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
};
const validPhone = phone => {
  return /^[+]{1}996[0-9]{9}$/.test(phone);
};
const checkInt = int => {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int);
};

/***/ }),

/***/ "./redux/constants/snackbar.js":
/*!*************************************!*\
  !*** ./redux/constants/snackbar.js ***!
  \*************************************/
/*! exports provided: CLOSE_SNACKBAR, SHOW_SNACKBAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SNACKBAR", function() { return CLOSE_SNACKBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_SNACKBAR", function() { return SHOW_SNACKBAR; });
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
const SHOW_SNACKBAR = 'SHOW_SNACKBAR';

/***/ }),

/***/ "./redux/constants/user.js":
/*!*********************************!*\
  !*** ./redux/constants/user.js ***!
  \*********************************/
/*! exports provided: AUTHENTICATED, UNAUTHENTICATED, ERROR_AUTHENTICATED, SET_PROFILE, SET_AUTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED", function() { return AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAUTHENTICATED", function() { return UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_AUTHENTICATED", function() { return ERROR_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROFILE", function() { return SET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH", function() { return SET_AUTH; });
const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const ERROR_AUTHENTICATED = 'ERROR_AUTHENTICATED';
const SET_PROFILE = 'SET_PROFILE';
const SET_AUTH = 'SET_AUTH';

/***/ }),

/***/ "./redux/reducers/app.js":
/*!*******************************!*\
  !*** ./redux/reducers/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mini_dialog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/app */ "./redux/constants/app.js");


const initialState = {
  drawer: false,
  search: '',
  filter: '',
  sort: '-createdAt',
  isMobileApp: undefined,
  load: false,
  countBasket: 0
};
function mini_dialog(state = initialState, action) {
  switch (action.type) {
    case _constants_app__WEBPACK_IMPORTED_MODULE_1__["SHOW_DRAWER"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        drawer: action.payload
      });

    case _constants_app__WEBPACK_IMPORTED_MODULE_1__["SET_SORT"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        sort: action.payload
      });

    case _constants_app__WEBPACK_IMPORTED_MODULE_1__["SET_FILTER"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        filter: action.payload
      });

    case _constants_app__WEBPACK_IMPORTED_MODULE_1__["SET_SEARCH"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        search: action.payload
      });

    case _constants_app__WEBPACK_IMPORTED_MODULE_1__["SET_IS_MOBILE_APP"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        isMobileApp: action.payload
      });

    case _constants_app__WEBPACK_IMPORTED_MODULE_1__["SHOW_LOAD"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        load: action.payload
      });

    case _constants_app__WEBPACK_IMPORTED_MODULE_1__["SET_COUNT_BASKET"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        countBasket: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./redux/reducers/app.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./redux/reducers/user.js");
/* harmony import */ var _mini_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mini_dialog */ "./redux/reducers/mini_dialog.js");
/* harmony import */ var _snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snackbar */ "./redux/reducers/snackbar.js");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _app__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  mini_dialog: _mini_dialog__WEBPACK_IMPORTED_MODULE_3__["default"],
  snackbar: _snackbar__WEBPACK_IMPORTED_MODULE_4__["default"]
}));

/***/ }),

/***/ "./redux/reducers/mini_dialog.js":
/*!***************************************!*\
  !*** ./redux/reducers/mini_dialog.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mini_dialog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");


const initialState = {
  title: '',
  child: null,
  show: false,
  fullScreen: false
};
function mini_dialog(state = initialState, action) {
  switch (action.type) {
    case _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SHOW_MINI_DIALOG"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        show: action.payload
      });

    case _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SET_MINI_DIALOG"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        title: action.payload.title,
        child: action.payload.child,
        fullScreen: action.payload.fullScreen
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/reducers/snackbar.js":
/*!************************************!*\
  !*** ./redux/reducers/snackbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mini_dialog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _constants_snackbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/snackbar */ "./redux/constants/snackbar.js");


const initialState = {
  title: '',
  show: false
};
function mini_dialog(state = initialState, action) {
  switch (action.type) {
    case _constants_snackbar__WEBPACK_IMPORTED_MODULE_1__["CLOSE_SNACKBAR"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        show: false
      });

    case _constants_snackbar__WEBPACK_IMPORTED_MODULE_1__["SHOW_SNACKBAR"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        title: action.payload.title,
        show: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/reducers/user.js":
/*!********************************!*\
  !*** ./redux/reducers/user.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return user; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/user */ "./redux/constants/user.js");


const initialState = {
  authenticated: undefined,
  profile: {},
  error: false
};
function user(state = initialState, action) {
  switch (action.type) {
    case _constants_user__WEBPACK_IMPORTED_MODULE_1__["AUTHENTICATED"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        authenticated: true,
        error: false
      });

    case _constants_user__WEBPACK_IMPORTED_MODULE_1__["UNAUTHENTICATED"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        authenticated: false,
        error: false,
        profile: {}
      });

    case _constants_user__WEBPACK_IMPORTED_MODULE_1__["ERROR_AUTHENTICATED"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        authenticated: false,
        error: true
      });

    case _constants_user__WEBPACK_IMPORTED_MODULE_1__["SET_PROFILE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        profile: action.payload
      });

    case _constants_user__WEBPACK_IMPORTED_MODULE_1__["SET_AUTH"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        authenticated: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! exports provided: checkMobile, checkAuth, getJWT, checkInt, pdDDMMYYYY, pdDDMMYY, pdDatePicker, pdDDMMYYHHMM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMobile", function() { return checkMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJWT", function() { return getJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInt", function() { return checkInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYYYY", function() { return pdDDMMYYYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYY", function() { return pdDDMMYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDatePicker", function() { return pdDatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYYHHMM", function() { return pdDDMMYYHHMM; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);


const regexpUA = /(Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|iOS|Mobile)/;
const checkMobile = ua => {
  return regexpUA.exec(ua) !== null;
};
const regexpAuth = /(\s)?jwt=(\S)+(;)?/;
const checkAuth = auth => {
  return regexpAuth.exec(auth) !== null;
};
const getJWT = auth => {
  let res = regexpAuth.exec(auth);
  return res !== null ? res[0].trim().replace('jwt=', '') : undefined;
};
const checkInt = int => {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(int);
};
const pdDDMMYYYY = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '');
  return date;
};
const pdDDMMYY = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4);
  return date;
};
const pdDatePicker = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[0].replace('"', '') + '-' + date[1] + '-' + date[2].split('T')[0];
  return date;
};
const pdDDMMYYHHMM = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4) + ' ' + date[2].split('T')[1].split(':')[0] + ':' + date[2].split('T')[1].split(':')[1];
  return date;
};

/***/ }),

/***/ "./src/singleton/client.js":
/*!*********************************!*\
  !*** ./src/singleton/client.js ***!
  \*********************************/
/*! exports provided: SingletonApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonApolloClient", function() { return SingletonApolloClient; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib */ "./src/lib.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-link-error */ "apollo-link-error");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-utilities */ "apollo-utilities");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");


/* eslint-disable no-extra-boolean-cast */








 //import { WebSocketLink } from 'apollo-link-ws';

 //import * as ws from 'ws';



class SingletonApolloClient {
  constructor(req) {
    if (!!SingletonApolloClient.instance) {
      return SingletonApolloClient.instance;
    }

    SingletonApolloClient.instance = this;
    const uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__["createUploadLink"])({
      uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__["urlGQL"],
      fetch: node_fetch__WEBPACK_IMPORTED_MODULE_4___default.a,
      credentials: 'include'
    });
    const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])((_, {
      headers
    }) => {
      return {
        headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
          authorization: this.jwt ? `Bearer ${this.jwt}` : ''
        })
      };
    });
    const linkError = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__["onError"])(ctx => {
      if (ctx.graphQLErrors) ctx.graphQLErrors.map(({
        message,
        locations,
        path
      }) => {
        new _singleton_store__WEBPACK_IMPORTED_MODULE_11__["SingletonStore"]().getStore().dispatch(Object(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__["showSnackBar"])('Ошибка'));
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
      if (ctx.networkError) console.log(`[Network error]: ${ctx.networkError}`);
    });
    /*const wsLink = new WebSocketLink({
        uri: urlGQLws,
        options: {
            reconnect: true
        },
        webSocketImpl: process.browser?WebSocket:ws
    });*/

    const mainLink =
    /*split(
    ({ query }) => {
    const definition = getMainDefinition(query);
    return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
    );
    },
    wsLink,*/
    uploadLink;
    /*,
    );*/

    const link = apollo_link__WEBPACK_IMPORTED_MODULE_8__["ApolloLink"].from([linkError, authLink, mainLink]);
    this.client = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
      link: link,
      cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"](),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'ignore'
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all'
        },
        mutate: {
          errorPolicy: 'all'
        }
      }
    });
    this.jwt = Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getJWT"])(req ? req.headers.cookie : document.cookie);
    return this;
  }

  getClient() {
    return this.client;
  }

}

/***/ }),

/***/ "./src/singleton/store.js":
/*!********************************!*\
  !*** ./src/singleton/store.js ***!
  \********************************/
/*! exports provided: SingletonStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonStore", function() { return SingletonStore; });
/* eslint-disable no-extra-boolean-cast */
class SingletonStore {
  constructor(store) {
    if (!!SingletonStore.instance) {
      return SingletonStore.instance;
    }

    SingletonStore.instance = this;
    this.store = store;
    return this;
  }

  getStore() {
    return this.store;
  }

}

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);

 // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#ffb300'
    },
    secondary: {
      main: '#ff0000'
    },
    disable: {
      main: '#e1e1e1'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: '#fff'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "apollo-link-error":
/*!************************************!*\
  !*** external "apollo-link-error" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "apollo-utilities":
/*!***********************************!*\
  !*** external "apollo-utilities" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map