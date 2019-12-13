webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/gql/basket.js":
/*!***************************!*\
  !*** ./src/gql/basket.js ***!
  \***************************/
/*! exports provided: getBasket, getCountBasket, deleteBasket, addBasket, setBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasket", function() { return getBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountBasket", function() { return getCountBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBasket", function() { return deleteBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBasket", function() { return addBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBasket", function() { return setBasket; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");




function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: ID!, $count: Int!) {\n                        setBasket(_id: $_id, count: $count) {\n                             data\n                        }\n                    }"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($item: ID!, $count: Int!) {\n                        addBasket(item: $item, count: $count) {\n                             data\n                        }\n                    }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        deleteBasket(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query {\n                        countBasket \n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query{\n                        baskets {\n                            _id\n                            createdAt\n                            item \n                                {\n                                    _id \n                                    name \n                                    stock \n                                    image \n                                    price\n                                    organization\n                                        {_id name minimumOrder}\n                                }\n                            count\n                        }\n                    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var getBasket =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var client, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context.next = 4;
            return client.query({
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject())
            });

          case 4:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getBasket() {
    return _ref.apply(this, arguments);
  };
}();
var getCountBasket =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var client, res, basket;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();

            if (!new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().user.authenticated) {
              _context2.next = 8;
              break;
            }

            _context2.next = 5;
            return client.query({
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject2())
            });

          case 5:
            res = _context2.sent;
            _context2.next = 9;
            break;

          case 8:
            if (localStorage.basket) {
              basket = JSON.parse(localStorage.basket);
              res = {
                data: {
                  countBasket: basket.length
                }
              };
            }

          case 9:
            new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().dispatch(Object(_redux_actions_app__WEBPACK_IMPORTED_MODULE_6__["setCountBasket"])(res.data.countBasket));
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function getCountBasket() {
    return _ref2.apply(this, arguments);
  };
}();
var deleteBasket =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(ids) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context3.next = 4;
            return client.mutate({
              variables: {
                _id: ids
              },
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject3())
            });

          case 4:
            _context3.next = 6;
            return getCountBasket();

          case 6:
            _context3.next = 8;
            return getBasket(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 8:
            return _context3.abrupt("return", _context3.sent);

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function deleteBasket(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var addBasket =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(element) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context4.next = 4;
            return client.mutate({
              variables: element,
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject4())
            });

          case 4:
            _context4.next = 6;
            return getCountBasket();

          case 6:
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function addBasket(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var setBasket =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(element) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context5.next = 4;
            return client.mutate({
              variables: element,
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject5())
            });

          case 4:
            _context5.next = 6;
            return getCountBasket();

          case 6:
            _context5.next = 8;
            return getBasket(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 8:
            return _context5.abrupt("return", _context5.sent);

          case 11:
            _context5.prev = 11;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 11]]);
  }));

  return function setBasket(_x3) {
    return _ref5.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=index.js.fdbb6da3c2cb52cbdc09.hot-update.js.map