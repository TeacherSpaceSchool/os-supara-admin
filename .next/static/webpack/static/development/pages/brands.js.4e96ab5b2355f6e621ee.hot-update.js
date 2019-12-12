webpackHotUpdate("static\\development\\pages\\brands.js",{

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
/* harmony import */ var _redux_actions_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/pagination */ "./redux/actions/pagination.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../scss/app.scss */ "./scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bottom-scroll-listener */ "./node_modules/react-bottom-scroll-listener/dist/index.es.js");



var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\layouts\\App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

















var mainWindow = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
var App = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var _props$userActions = props.userActions,
      setProfile = _props$userActions.setProfile,
      logout = _props$userActions.logout;
  var _props$paginationActi = props.paginationActions,
      next = _props$paginationActi.next,
      disable = _props$paginationActi.disable;
  var showLoad = props.appActions.showLoad;
  var _props$user = props.user,
      profile = _props$user.profile,
      authenticated = _props$user.authenticated;
  var _props$pagination = props.pagination,
      work = _props$pagination.work,
      count = _props$pagination.count;
  var sorts = props.sorts,
      filters = props.filters,
      getList = props.getList,
      pageName = props.pageName,
      dates = props.dates,
      subcategory = props.subcategory,
      category = props.category;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_17__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (authenticated) setProfile();else if (!authenticated && profile.role) logout(false);
  }, [authenticated]);
  next_router__WEBPACK_IMPORTED_MODULE_17___default.a.events.on('routeChangeStart', function (err, url) {
    if (!router.pathname.includes(url)) showLoad(true);

    if (err.cancelled) {
      showLoad(false);
    }
  });
  var containerRef = Object(react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_18__["useBottomScrollListener"])(function () {
    if (work) next();
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
    ref: mainWindow,
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_components_app_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    subcategory: subcategory,
    category: category,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_components_app_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dates: dates,
    pageName: pageName,
    sorts: sorts,
    filters: filters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("div", {
    ref: containerRef,
    className: "App-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, props.children), __jsx(_components_app_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_components_app_SnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), load ? __jsx("div", {
    className: "load",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })) : null);
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app,
    pagination: state.pagination
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_13__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_14__, dispatch),
    paginationActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_pagination__WEBPACK_IMPORTED_MODULE_12__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./redux/actions/pagination.js":
/*!*************************************!*\
  !*** ./redux/actions/pagination.js ***!
  \*************************************/
/*! exports provided: next, disable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "next", function() { return next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
/* harmony import */ var _constants_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/pagination */ "./redux/constants/pagination.js");

function next(data) {
  return {
    type: _constants_pagination__WEBPACK_IMPORTED_MODULE_0__["NEXT"]
  };
}
function disable(data) {
  return {
    type: _constants_pagination__WEBPACK_IMPORTED_MODULE_0__["DISABLE"]
  };
}

/***/ }),

/***/ "./redux/constants/pagination.js":
/*!***************************************!*\
  !*** ./redux/constants/pagination.js ***!
  \***************************************/
/*! exports provided: DISABLE, NEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISABLE", function() { return DISABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT", function() { return NEXT; });
var DISABLE = 'DISABLE';
var NEXT = 'NEXT';

/***/ })

})
//# sourceMappingURL=brands.js.4e96ab5b2355f6e621ee.hot-update.js.map