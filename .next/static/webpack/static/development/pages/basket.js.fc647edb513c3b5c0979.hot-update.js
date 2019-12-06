webpackHotUpdate("static\\development\\pages\\basket.js",{

/***/ "./src/gql/ads.js":
/*!************************!*\
  !*** ./src/gql/ads.js ***!
  \************************/
/*! exports provided: getAds, getAdss, deleteAds, addAds, setAds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAds", function() { return getAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdss", function() { return getAdss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAds", function() { return deleteAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAds", function() { return addAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAds", function() { return setAds; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");




function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: ID!, $image: Upload, $url: String, $title: String) {\n                        setAds(_id: $_id, image: $image, url: $url, title: $title) {\n                             data\n                        }\n                    }"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($image: Upload!, $url: String!, $title: String!) {\n                        addAds(image: $image, url: $url, title: $title) {\n                             data\n                        }\n                    }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        deleteAds(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($search: String!, $sort: String!, $filter: String!) {\n                        adss(search: $search, sort: $sort, filter: $filter) {\n                            _id\n                            image\n                            url\n                            title\n                            createdAt\n                          }\n                          sortAds {\n                           name\n                            field\n                          }\n                          filterAds {\n                           name\n                           value\n                          }\n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query {\n                        ads {\n                            _id\n                            image\n                            url\n                            title\n                            createdAt\n                          }\n                    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getAds =
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

  return function getAds() {
    return _ref.apply(this, arguments);
  };
}();
var getAdss =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref2) {
    var search, sort, filter, client, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            search = _ref2.search, sort = _ref2.sort, filter = _ref2.filter;
            _context2.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context2.next = 5;
            return client.query({
              variables: {
                search: search,
                sort: sort,
                filter: filter
              },
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject2())
            });

          case 5:
            res = _context2.sent;
            return _context2.abrupt("return", res.data);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function getAdss(_x) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteAds =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
            return getAdss(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            return _context3.abrupt("return", _context3.sent);

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function deleteAds(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var addAds =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(element) {
    var client, list;
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
            return getAdss(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            list = _context4.sent;
            return _context4.abrupt("return", list);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function addAds(_x3) {
    return _ref5.apply(this, arguments);
  };
}();
var setAds =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(element) {
    var client, list;
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
            return getAdss(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            list = _context5.sent;
            return _context5.abrupt("return", list);

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function setAds(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query{\n                        baskets {\n                            _id\n                            createdAt\n                            item \n                                {_id name stock image price}\n                            count\n                        }\n                    }"]);

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

/***/ }),

/***/ "./src/gql/client.js":
/*!***************************!*\
  !*** ./src/gql/client.js ***!
  \***************************/
/*! exports provided: getClients, getClient, onoffClient, setClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClients", function() { return getClients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClient", function() { return getClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onoffClient", function() { return onoffClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClient", function() { return setClient; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");




function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: ID!, $phone: String, $city: String, $type: String, $image: Upload, $birthday: Date, $name: String, $email: String, $address: [[String]], $info: String, $newPass: String) {\n                        setClient(_id: $_id, phone: $phone, city: $city, image: $image, type: $type, birthday: $birthday, name: $name, email: $email, address: $address, info: $info, newPass: $newPass) {\n                             data\n                        }\n                    }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        onoffClient(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($_id: ID!) {\n                        client(_id: $_id) {\n                            _id\n                            image\n                            createdAt\n                            name\n                            email\n                            address\n                            info\n                            reiting\n                            birthday\n                            city\n                            type\n                            user \n                                {_id role status phone}\n                        }\n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($search: String!, $sort: String!, $filter: String!) {\n                        clients(search: $search, sort: $sort, filter: $filter) {\n                            _id\n                            image\n                            createdAt\n                            name\n                            email\n                            address\n                            info\n                            reiting\n                            birthday\n                            type\n                            city\n                            user \n                                {_id role status phone}\n                          }\n                          sortClient {\n                           name\n                            field\n                          }\n                          filterClient {\n                           name\n                           value\n                          }\n                    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getClients =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var search, sort, filter, client, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            search = _ref.search, sort = _ref.sort, filter = _ref.filter;
            _context.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context.next = 5;
            return client.query({
              variables: {
                search: search,
                sort: sort,
                filter: filter
              },
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject())
            });

          case 5:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function getClients(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getClient =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
    var _id, client, res;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _id = _ref3._id;
            _context2.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context2.next = 5;
            return client.query({
              variables: {
                _id: _id
              },
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject2())
            });

          case 5:
            res = _context2.sent;
            return _context2.abrupt("return", res.data);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function getClient(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var onoffClient =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
            return getClients(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            return _context3.abrupt("return", _context3.sent);

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function onoffClient(_x3) {
    return _ref5.apply(this, arguments);
  };
}();
var setClient =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(element) {
    var client, list;
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
            return getClients(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            list = _context4.sent;
            return _context4.abrupt("return", list);

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function setClient(_x4) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/gql/items.js":
/*!**************************!*\
  !*** ./src/gql/items.js ***!
  \**************************/
/*! exports provided: getItems, favorites, getItem, deleteItem, onoffItem, favoriteItem, addFavoriteItem, addItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favorites", function() { return favorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onoffItem", function() { return onoffItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteItem", function() { return favoriteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavoriteItem", function() { return addFavoriteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");





function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n                    mutation ($_id: ID!, $stock: Int, $name: String, $image: Upload, $info: String, $price: Int, $subCategory: ID, $organization: ID, $hit: Boolean, $latest: Boolean) {\n                        setItem(_id: $_id, stock: $stock, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {\n                             data\n                        }\n                    }"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n                    mutation ($stock: Int!, $name: String!, $image: Upload, $info: String!, $price: Int!, $subCategory: ID!, $organization: ID!, $hit: Boolean!, $latest: Boolean!) {\n                        addItem(stock: $stock, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {\n                             data\n                        }\n                    }"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        addFavoriteItem(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        favoriteItem(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        onoffItem(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        deleteItem(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n                    query ($_id: ID!) {\n                        item(_id: $_id) {\n                            _id\n                            subCategory\n                                {_id name}\n                            name\n                            status\n                            createdAt                  \n                            stock\n                            image\n                            info\n                            price\n                            reiting\n                            organization\n                                {_id name}\n                            hit\n                            latest\n                            favorite\n                            basket\n                        }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n                    query ($search: String!) {\n                        favorites(search: $search) {\n                            _id\n                            subCategory\n                                {_id name}\n                            name\n                            status\n                            createdAt                  \n                            stock\n                            image\n                            info\n                            price\n                            reiting\n                            organization\n                                {_id name}\n                            hit\n                            latest\n                            favorite\n                            basket\n                        }\n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n                    query ($subCategory: ID!,$search: String!, $sort: String!, $filter: String!) {\n                        items(subCategory: $subCategory, search: $search, sort: $sort, filter: $filter) {\n                            _id\n                            subCategory\n                                {_id name}\n                            name\n                            status\n                            createdAt                  \n                            stock\n                            image\n                            info\n                            price\n                            reiting\n                            organization\n                                {_id name}\n                            hit\n                            latest\n                            favorite\n                            basket\n                        }\n                        sortItem {\n                            name\n                            field\n                        }\n                        filterItem {\n                           name\n                           value\n                        }\n                        subCategory(_id: $subCategory) {\n                           _id\n                           name\n                          }\n                    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getItems =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var subCategory, search, sort, filter, client, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            subCategory = _ref.subCategory, search = _ref.search, sort = _ref.sort, filter = _ref.filter;
            _context.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
            _context.next = 5;
            return client.query({
              variables: {
                subCategory: subCategory,
                search: search,
                sort: sort,
                filter: filter
              },
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject())
            });

          case 5:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function getItems(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var favorites =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(_ref3) {
    var search, client, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            search = _ref3.search;
            _context2.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
            _context2.next = 5;
            return client.query({
              variables: {
                search: search
              },
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject2())
            });

          case 5:
            res = _context2.sent;
            return _context2.abrupt("return", res.data);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function favorites(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var getItem =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref5) {
    var _id, client, res;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _id = _ref5._id;
            _context3.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
            _context3.next = 5;
            return client.query({
              variables: {
                _id: _id
              },
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject3())
            });

          case 5:
            res = _context3.sent;
            return _context3.abrupt("return", res.data);

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.error(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));

  return function getItem(_x3) {
    return _ref6.apply(this, arguments);
  };
}();
var deleteItem =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(ids, subCategory) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
            _context4.next = 4;
            return client.mutate({
              variables: {
                _id: ids
              },
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject4())
            });

          case 4:
            _context4.next = 6;
            return getItems(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
              subCategory: subCategory
            }, new _singleton_store__WEBPACK_IMPORTED_MODULE_6__["SingletonStore"]().getStore().getState().app));

          case 6:
            return _context4.abrupt("return", _context4.sent);

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function deleteItem(_x4, _x5) {
    return _ref7.apply(this, arguments);
  };
}();
var onoffItem =
/*#__PURE__*/
function () {
  var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(ids) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
            _context5.next = 4;
            return client.mutate({
              variables: {
                _id: ids
              },
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject5())
            });

          case 4:
            _context5.next = 9;
            break;

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 6]]);
  }));

  return function onoffItem(_x6) {
    return _ref8.apply(this, arguments);
  };
}();
var favoriteItem =
/*#__PURE__*/
function () {
  var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(ids) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
            _context6.next = 4;
            return client.mutate({
              variables: {
                _id: ids
              },
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject6())
            });

          case 4:
            _context6.next = 9;
            break;

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 6]]);
  }));

  return function favoriteItem(_x7) {
    return _ref9.apply(this, arguments);
  };
}();
var addFavoriteItem =
/*#__PURE__*/
function () {
  var _ref10 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(ids) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
            _context7.next = 4;
            return client.mutate({
              variables: {
                _id: ids
              },
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject7())
            });

          case 4:
            _context7.next = 9;
            break;

          case 6:
            _context7.prev = 6;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0);

          case 9:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 6]]);
  }));

  return function addFavoriteItem(_x8) {
    return _ref10.apply(this, arguments);
  };
}();
var addItem =
/*#__PURE__*/
function () {
  var _ref11 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(element, subCategory) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
            _context8.next = 4;
            return client.mutate({
              variables: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, element, {
                subCategory: subCategory
              }),
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject8())
            });

          case 4:
            _context8.next = 9;
            break;

          case 6:
            _context8.prev = 6;
            _context8.t0 = _context8["catch"](0);
            console.error(_context8.t0);

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[0, 6]]);
  }));

  return function addItem(_x9, _x10) {
    return _ref11.apply(this, arguments);
  };
}();
var setItem =
/*#__PURE__*/
function () {
  var _ref12 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(element, subCategory) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_5__["SingletonApolloClient"]().getClient();
            _context9.next = 4;
            return client.mutate({
              variables: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, element),
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"])(_templateObject9())
            });

          case 4:
            _context9.next = 9;
            break;

          case 6:
            _context9.prev = 6;
            _context9.t0 = _context9["catch"](0);
            console.error(_context9.t0);

          case 9:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 6]]);
  }));

  return function setItem(_x11, _x12) {
    return _ref12.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=basket.js.fc647edb513c3b5c0979.hot-update.js.map