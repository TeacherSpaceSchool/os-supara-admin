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

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

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

/***/ "//vS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSnackBar", function() { return showSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSnackBar", function() { return closeSnackBar; });
/* harmony import */ var _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LFFW");

function showSnackBar(title) {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_SNACKBAR */ "b"],
    payload: {
      title: title
    }
  };
}
function closeSnackBar() {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__[/* CLOSE_SNACKBAR */ "a"]
  };
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "@material-ui/styles"
var styles_ = __webpack_require__("Bjmp");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: ./src/theme.js
var theme = __webpack_require__("zDcZ");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./redux/constants/app.js
var constants_app = __webpack_require__("grec");

// CONCATENATED MODULE: ./redux/reducers/app.js


const app_initialState = {
  drawer: false,
  search: '',
  filter: '',
  sort: '-updatedAt',
  isMobileApp: undefined,
  load: false,
  countBasket: 0
};
function mini_dialog(state = app_initialState, action) {
  switch (action.type) {
    case constants_app["f" /* SHOW_DRAWER */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        drawer: action.payload
      });

    case constants_app["e" /* SET_SORT */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        sort: action.payload
      });

    case constants_app["b" /* SET_FILTER */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        filter: action.payload
      });

    case constants_app["d" /* SET_SEARCH */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        search: action.payload
      });

    case constants_app["c" /* SET_IS_MOBILE_APP */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        isMobileApp: action.payload
      });

    case constants_app["g" /* SHOW_LOAD */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        load: action.payload
      });

    case constants_app["a" /* SET_COUNT_BASKET */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        countBasket: action.payload
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./redux/constants/user.js
var user = __webpack_require__("U/ye");

// CONCATENATED MODULE: ./redux/reducers/user.js


const user_initialState = {
  authenticated: undefined,
  profile: {},
  error: false
};
function user_user(state = user_initialState, action) {
  switch (action.type) {
    case user["a" /* AUTHENTICATED */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        authenticated: true,
        error: false
      });

    case user["e" /* UNAUTHENTICATED */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        authenticated: false,
        error: false,
        profile: {}
      });

    case user["b" /* ERROR_AUTHENTICATED */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        authenticated: false,
        error: true
      });

    case user["d" /* SET_PROFILE */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        profile: action.payload
      });

    case user["c" /* SET_AUTH */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        authenticated: action.payload
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./redux/constants/mini_dialog.js
var constants_mini_dialog = __webpack_require__("8UEt");

// CONCATENATED MODULE: ./redux/reducers/mini_dialog.js


const mini_dialog_initialState = {
  title: '',
  child: null,
  show: false
};
function mini_dialog_mini_dialog(state = mini_dialog_initialState, action) {
  switch (action.type) {
    case constants_mini_dialog["b" /* SHOW_MINI_DIALOG */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        show: action.payload
      });

    case constants_mini_dialog["a" /* SET_MINI_DIALOG */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        title: action.payload.title,
        child: action.payload.child
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./redux/constants/snackbar.js
var snackbar = __webpack_require__("LFFW");

// CONCATENATED MODULE: ./redux/reducers/snackbar.js


const snackbar_initialState = {
  title: '',
  show: false
};
function snackbar_mini_dialog(state = snackbar_initialState, action) {
  switch (action.type) {
    case snackbar["a" /* CLOSE_SNACKBAR */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        show: false
      });

    case snackbar["b" /* SHOW_SNACKBAR */]:
      return Object(objectSpread["a" /* default */])({}, state, {
        title: action.payload.title,
        show: true
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./redux/reducers/index.js





/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  app: mini_dialog,
  user: user_user,
  mini_dialog: mini_dialog_mini_dialog,
  snackbar: snackbar_mini_dialog
}));
// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./redux/configureStore.js



function configureStore(initialState) {
  const store = Object(external_redux_["createStore"])(reducers, initialState, // applyMiddleware(logger),
  Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a));

  if (false) {}

  return store;
}
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./src/singleton/client.js
var client = __webpack_require__("gIpB");

// EXTERNAL MODULE: ./src/singleton/store.js
var singleton_store = __webpack_require__("gs4i");

// EXTERNAL MODULE: ./redux/actions/user.js
var actions_user = __webpack_require__("j6IE");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./src/lib.js
var lib = __webpack_require__("NOnC");

// CONCATENATED MODULE: ./pages/_app.js

var __jsx = external_react_default.a.createElement;












external_moment_default.a.locale('ru');

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_redux_wrapper_default()(configureStore, {
  debug: true
})(class MyApp extends app_default.a {
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
    new client["a" /* SingletonApolloClient */](ctx.req);

    if (ctx.req) {
      ctx.store.getState().app.isMobileApp = Object(lib["c" /* checkMobile */])(ctx.req.headers['user-agent']);
      ctx.store.getState().user.authenticated = Object(lib["a" /* checkAuth */])(ctx.req.headers.cookie);
      ctx.store.dispatch(Object(actions_user["setProfile"])());
    }

    ctx.store.getState().app.search = '';
    ctx.store.getState().app.sort = '-updatedAt';
    ctx.store.getState().app.filter = '';
    return {
      pageProps: Object(objectSpread["a" /* default */])({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    new singleton_store["a" /* SingletonStore */](store);
    return __jsx(external_react_default.a.Fragment, null, __jsx(styles_["ThemeProvider"], {
      theme: theme["a" /* default */]
    }, __jsx(CssBaseline_default.a, null), __jsx(external_react_redux_["Provider"], {
      store: store
    }, __jsx(Component, pageProps))));
  }

}));

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8UEt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_MINI_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_MINI_DIALOG; });
const SET_MINI_DIALOG = 'SET_MINI_DIALOG';
const SHOW_MINI_DIALOG = 'SHOW_MINI_DIALOG';

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9a0h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return urlGQLws; });
/* unused harmony export validMail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return validPhone; });
/* unused harmony export checkInt */
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

const urlGQL = `http://${"localhost"}/graphql`;
const urlGQLws = `ws://${"localhost"}/graphql`;
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

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _utils = __webpack_require__("p8BD");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__("nOHt");
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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BPlj":
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "EN0U":
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LFFW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_SNACKBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_SNACKBAR; });
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
const SHOW_SNACKBAR = 'SHOW_SNACKBAR';

/***/ }),

/***/ "LvlT":
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "NOnC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkInt; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

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
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int);
};

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "P3Wl":
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U/ye":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ERROR_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_AUTH; });
const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const ERROR_AUTHENTICATED = 'ERROR_AUTHENTICATED';
const SET_PROFILE = 'SET_PROFILE';
const SET_AUTH = 'SET_AUTH';

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fflE":
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "gIpB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingletonApolloClient; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9a0h");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NOnC");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LvlT");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("P3Wl");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vuC2");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("BPlj");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("EN0U");
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apollo_link_ws__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("fflE");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("kEOu");
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("gs4i");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("//vS");


/* eslint-disable no-extra-boolean-cast */














class SingletonApolloClient {
  constructor(req) {
    if (!!SingletonApolloClient.instance) {
      return SingletonApolloClient.instance;
    }

    SingletonApolloClient.instance = this;
    const uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__["createUploadLink"])({
      uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__[/* urlGQL */ "a"],
      fetch: node_fetch__WEBPACK_IMPORTED_MODULE_4___default.a,
      credentials: 'include'
    });
    const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])((_, {
      headers
    }) => {
      return {
        headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, headers, {
          authorization: this.jwt ? `Bearer ${this.jwt}` : ''
        })
      };
    });
    const linkError = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__["onError"])(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.map(({
        message,
        locations,
        path
      }) => {
        new _singleton_store__WEBPACK_IMPORTED_MODULE_13__[/* SingletonStore */ "a"]().getStore().dispatch(Object(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_14__["showSnackBar"])('Ошибка'));
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });
    const wsLink = new apollo_link_ws__WEBPACK_IMPORTED_MODULE_10__["WebSocketLink"]({
      uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__[/* urlGQLws */ "b"],
      options: {
        reconnect: true
      },
      webSocketImpl:  false ? undefined : ws__WEBPACK_IMPORTED_MODULE_12__
    });
    const mainLink = Object(apollo_link__WEBPACK_IMPORTED_MODULE_8__["split"])(({
      query
    }) => {
      const definition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_11__["getMainDefinition"])(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    }, wsLink, uploadLink);
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
    this.jwt = Object(_lib__WEBPACK_IMPORTED_MODULE_5__[/* getJWT */ "d"])(req ? req.headers.cookie : document.cookie);
    return this;
  }

  getClient() {
    return this.client;
  }

}

/***/ }),

/***/ "grec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SHOW_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_COUNT_BASKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_IS_MOBILE_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SHOW_LOAD; });
const SHOW_DRAWER = 'SHOW_DRAWER';
const SET_SEARCH = 'SET_SEARCH';
const SET_SORT = 'SET_SORT';
const SET_FILTER = 'SET_FILTER';
const SET_COUNT_BASKET = 'SET_COUNT_BASKET';
const SET_IS_MOBILE_APP = 'SET_IS_MOBILE_APP';
const SHOW_LOAD = 'SHOW_LOAD';

/***/ }),

/***/ "gs4i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingletonStore; });
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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "j6IE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthenticated", function() { return checkAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthenticated", function() { return setAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfile", function() { return setProfile; });
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U/ye");
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8UEt");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_singleton_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("gIpB");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






function signup(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_4__[/* SingletonApolloClient */ "a"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
                    mutation ($phone: String!, $password: String!) {
                        signupuser(phone: $phone, password: $password) {
                            data,
                        }
                    }`
      });
      if (result.data.signupuser.data === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* ERROR_AUTHENTICATED */ "b"],
        payload: true
      });else {
        await dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* AUTHENTICATED */ "a"]
        });
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__[/* SHOW_MINI_DIALOG */ "b"],
          payload: false
        });
        window.location.reload();
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* ERROR_AUTHENTICATED */ "b"],
        payload: true
      });
    }
  };
}
function signin(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_4__[/* SingletonApolloClient */ "a"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
                    mutation ($phone: String!, $password: String!) {
                        signinuser(phone: $phone, password: $password) {
                            data,
                        }
                    }`
      });
      if (result.data.signinuser.data === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* ERROR_AUTHENTICATED */ "b"],
        payload: true
      });else {
        await dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* AUTHENTICATED */ "a"]
        });
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__[/* SHOW_MINI_DIALOG */ "b"],
          payload: false
        });
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* ERROR_AUTHENTICATED */ "b"],
        payload: true
      });
    }
  };
}
function checkAuthenticated() {
  return async dispatch => {
    try {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('jwt')) {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* AUTHENTICATED */ "a"]
        });
      } else {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* UNAUTHENTICATED */ "e"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* UNAUTHENTICATED */ "e"]
      });
    }
  };
}
function setAuthenticated(auth) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* SET_AUTH */ "c"],
    payload: auth
  };
}
function logout() {
  return async dispatch => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('jwt');
    dispatch({
      type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* UNAUTHENTICATED */ "e"]
    });
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    window.location.reload();
  };
}
function setProfile() {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_4__[/* SingletonApolloClient */ "a"]().getClient();
      let result = await client.query({
        query: apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
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
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* SET_PROFILE */ "d"],
        payload: result.data.getStatus
      });
    } catch (error) {
      console.error(error);
    }
  };
}

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kEOu":
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vuC2":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "zDcZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+FwM");
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
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });