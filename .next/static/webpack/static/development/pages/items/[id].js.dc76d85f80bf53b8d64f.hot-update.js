webpackHotUpdate("static\\development\\pages\\items\\[id].js",{

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
/* harmony import */ var _src_singleton_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/singleton/store */ "./src/singleton/store.js");




function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                   query {\n                       getStatus {\n                          role\n                          status\n                          phone\n                          organization\n                          _id\n                         }\n                   }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query {\n                        getStatus {\n                           role\n                           status\n                           phone\n                           organization\n                           _id\n                          }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($phone: String!, $password: String!) {\n                        signinuser(phone: $phone, password: $password) {\n                           role\n                           status\n                           phone\n                           organization\n                           _id\n                        }\n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($phone: String!, $password: String!) {\n                        signupuser(phone: $phone, password: $password) {\n                           role\n                           status\n                           phone\n                           organization\n                           _id\n                        }\n                    }"]);

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
                _context.next = 19;
                break;

              case 10:
                _context.next = 12;
                return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');

              case 12:
                _context.next = 14;
                return dispatch({
                  type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_4__["SHOW_MINI_DIALOG"],
                  payload: false
                });

              case 14:
                _context.next = 16;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATED"]
                });

              case 16:
                _context.next = 18;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["SET_PROFILE"],
                  payload: result.data.signupuser
                });

              case 18:
                setTimeout(function () {
                  window.location.reload();
                }, 1000);

              case 19:
                _context.next = 24;
                break;

              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 21]]);
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
                _context2.next = 19;
                break;

              case 10:
                _context2.next = 12;
                return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');

              case 12:
                _context2.next = 14;
                return dispatch({
                  type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_4__["SHOW_MINI_DIALOG"],
                  payload: false
                });

              case 14:
                _context2.next = 16;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATED"]
                });

              case 16:
                _context2.next = 18;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["SET_PROFILE"],
                  payload: result.data.signinuser
                });

              case 18:
                setTimeout(function () {
                  window.location.reload();
                }, 1000);

              case 19:
                _context2.next = 26;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](0);
                console.log(_context2.t0);
                _context2.next = 26;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 21]]);
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
function logout() {
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
                next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');
                js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('jwt');
                dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["UNAUTHENTICATED"]
                });
                dispatch({
                  type: _constants_app__WEBPACK_IMPORTED_MODULE_5__["SET_COUNT_BASKET"],
                  payload: 0
                });
                setTimeout(function () {
                  return window.location.reload();
                }, 100);

              case 5:
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
function getProfile() {
  return _getProfile.apply(this, arguments);
}

function _getProfile() {
  _getProfile = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var client, result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__["SingletonApolloClient"]().getClient();
            _context6.next = 4;
            return client.query({
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject4())
            });

          case 4:
            result = _context6.sent;
            return _context6.abrupt("return", result.data.getStatus);

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _getProfile.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=[id].js.dc76d85f80bf53b8d64f.hot-update.js.map