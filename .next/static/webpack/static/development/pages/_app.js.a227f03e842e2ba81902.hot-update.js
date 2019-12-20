webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../redux/configureStore */ "./redux/configureStore.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_singleton_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _src_singleton_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/singleton/store */ "./src/singleton/store.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/lib */ "./src/lib.js");
/* harmony import */ var _src_getClientGQL__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../src/getClientGQL */ "./src/getClientGQL.js");









var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;













/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_14__["default"])(_redux_configureStore__WEBPACK_IMPORTED_MODULE_15__["default"], {
  debug: false
})(
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      new _src_singleton_store__WEBPACK_IMPORTED_MODULE_18__["SingletonStore"](store);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(_material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"], {
        theme: _src_theme__WEBPACK_IMPORTED_MODULE_13__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), __jsx(react_redux__WEBPACK_IMPORTED_MODULE_16__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })))));
    }
  }], [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Remove the server-side injected CSS.
      var jssStyles = document.querySelector('#jss-server-side');

      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                new _src_singleton_client__WEBPACK_IMPORTED_MODULE_17__["SingletonApolloClient"](ctx.req);

                if (!ctx.req) {
                  _context.next = 14;
                  break;
                }

                ctx.store.getState().app.isMobileApp = Object(_src_lib__WEBPACK_IMPORTED_MODULE_20__["checkMobile"])(ctx.req.headers['user-agent']);
                ctx.store.getState().user.authenticated = Object(_src_lib__WEBPACK_IMPORTED_MODULE_20__["checkAuth"])(ctx.req.headers.cookie);
                console.log(ctx.req.headers.cookie);

                if (!ctx.store.getState().user.authenticated) {
                  _context.next = 14;
                  break;
                }

                _context.t0 = _redux_actions_user__WEBPACK_IMPORTED_MODULE_19__["getProfile"];
                _context.next = 10;
                return Object(_src_getClientGQL__WEBPACK_IMPORTED_MODULE_21__["getClientGQL"])();

              case 10:
                _context.t1 = _context.sent;
                _context.next = 13;
                return (0, _context.t0)(_context.t1);

              case 13:
                ctx.store.getState().user.profile = _context.sent;

              case 14:
                ctx.store.getState().app.search = '';
                ctx.store.getState().app.sort = '-createdAt';
                ctx.store.getState().app.filter = '';
                ctx.store.getState().app.date = '';
                ctx.store.getState().app.load = false;
                ctx.store.getState().mini_dialog.show = false;
                ctx.store.getState().pagination.work = false;
                _context.t2 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"];
                _context.t3 = {};

                if (!Component.getInitialProps) {
                  _context.next = 29;
                  break;
                }

                _context.next = 26;
                return Component.getInitialProps(ctx);

              case 26:
                _context.t4 = _context.sent;
                _context.next = 30;
                break;

              case 29:
                _context.t4 = {};

              case 30:
                _context.t5 = _context.t4;
                _context.t6 = (0, _context.t2)(_context.t3, _context.t5);
                return _context.abrupt("return", {
                  pageProps: _context.t6
                });

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_10___default.a)));

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/user */ "./redux/constants/user.js");
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/app */ "./redux/constants/app.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/singleton/client */ "./src/singleton/client.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);




function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                   query {\n                       getStatus {\n                          role\n                          status\n                          login\n                          organization\n                          _id\n                         }\n                   }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query {\n                        getStatus {\n                           role\n                           status\n                           login\n                           organization\n                           _id\n                          }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($login: String!, $password: String!) {\n                        signinuser(login: $login, password: $password) {\n                           role\n                           status\n                           login\n                           organization\n                           _id\n                        }\n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($login: String!, $password: String!) {\n                        signupuser(login: $login, password: $password) {\n                           role\n                           status\n                           login\n                           organization\n                           _id\n                        }\n                    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








function signup(payload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var client, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__["SingletonApolloClient"]().getClient();
                _context.next = 4;
                return client.mutate({
                  variables: payload,
                  mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject())
                });

              case 4:
                result = _context.sent;

                if (!(result.data.signupuser.role === 'Проверьте данные')) {
                  _context.next = 10;
                  break;
                }

                _context.next = 8;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.next = 12;
                return dispatch({
                  type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_4__["SHOW_MINI_DIALOG"],
                  payload: false
                });

              case 12:
                //await Router.push('/')

                /*
                await dispatch({type: AUTHENTICATED});
                await dispatch({
                    type: SET_PROFILE,
                    payload: result.data.signupuser
                })*/
                window.location.reload();

              case 13:
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 15]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}
function signin(payload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var client, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__["SingletonApolloClient"]().getClient();
                _context2.next = 4;
                return client.mutate({
                  variables: payload,
                  mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject2())
                });

              case 4:
                result = _context2.sent;

                if (!(result.data.signinuser.role === 'Проверьте данные')) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 8:
                _context2.next = 13;
                break;

              case 10:
                _context2.next = 12;
                return dispatch({
                  type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_4__["SHOW_MINI_DIALOG"],
                  payload: false
                });

              case 12:
                //await Router.push('/')
                window.location.reload();
                /*await dispatch({type: AUTHENTICATED});
                await dispatch({
                    type: SET_PROFILE,
                    payload: result.data.signinuser
                })*/

              case 13:
                _context2.next = 20;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                _context2.next = 20;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 15]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}
function checkAuthenticated() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                try {
                  if (js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('jwt')) {
                    dispatch({
                      type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATED"]
                    });
                  } else {
                    dispatch({
                      type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["UNAUTHENTICATED"]
                    });
                  }
                } catch (error) {
                  dispatch({
                    type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["UNAUTHENTICATED"]
                  });
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}
function setAuthenticated(auth) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["SET_AUTH"],
    payload: auth
  };
}
function logout(reload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["UNAUTHENTICATED"]
                });

              case 2:
                if (!reload) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 5;
                return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');

              case 5:
                _context4.next = 7;
                return js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('jwt');

              case 7:
                _context4.next = 9;
                return dispatch({
                  type: _constants_app__WEBPACK_IMPORTED_MODULE_5__["SET_COUNT_BASKET"],
                  payload: 0
                });

              case 9:
                _context4.next = 11;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["SET_PROFILE"],
                  payload: {}
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}
function setProfile() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
        var client, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__["SingletonApolloClient"]().getClient();
                _context5.next = 4;
                return client.query({
                  query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject3())
                });

              case 4:
                result = _context5.sent;
                _context5.next = 7;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["SET_PROFILE"],
                  payload: result.data.getStatus
                });

              case 7:
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}
function getProfile(_x6) {
  return _getProfile.apply(this, arguments);
}

function _getProfile() {
  _getProfile = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(client) {
    var result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            client = client ? client : new _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__["SingletonApolloClient"]().getClient();
            _context6.next = 4;
            return client.query({
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject4())
            });

          case 4:
            result = _context6.sent;
            console.log(result.data.getStatus);
            return _context6.abrupt("return", result.data.getStatus);

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 9]]);
  }));
  return _getProfile.apply(this, arguments);
}

/***/ }),

/***/ "./src/getClientGQL.js":
/*!*****************************!*\
  !*** ./src/getClientGQL.js ***!
  \*****************************/
/*! exports provided: getClientGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientGQL", function() { return getClientGQL; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib */ "./src/lib.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-upload-client */ "./node_modules/apollo-upload-client/lib/index.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_8__);


/* eslint-disable no-extra-boolean-cast */








var getClientGQL = function getClientGQL(req) {
  var uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_8__["createUploadLink"])({
    uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__["urlGQL"],
    fetch: node_fetch__WEBPACK_IMPORTED_MODULE_4___default.a,
    credentials: 'include'
  });
  var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])(function (_, _ref) {
    var headers = _ref.headers;
    return {
      headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
        authorization: Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getJWT"])(req ? req.headers.cookie : document.cookie) ? "Bearer ".concat(Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getJWT"])(req ? req.headers.cookie : document.cookie)) : ''
      })
    };
  });
  var link = apollo_link__WEBPACK_IMPORTED_MODULE_7__["ApolloLink"].from([authLink, uploadLink]);
  var client = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    ssrMode: true,
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
  return client;
};

/***/ })

})
//# sourceMappingURL=_app.js.a227f03e842e2ba81902.hot-update.js.map