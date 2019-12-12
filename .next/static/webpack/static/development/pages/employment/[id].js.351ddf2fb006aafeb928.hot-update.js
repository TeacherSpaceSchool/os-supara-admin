webpackHotUpdate("static\\development\\pages\\employment\\[id].js",{

/***/ "./src/gql/employment.js":
/*!*******************************!*\
  !*** ./src/gql/employment.js ***!
  \*******************************/
/*! exports provided: getEmployments, getEmployment, getEcspeditors, onoffEmployment, deleteEmployment, setEmployments, addEmployment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployments", function() { return getEmployments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEmployment", function() { return getEmployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEcspeditors", function() { return getEcspeditors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onoffEmployment", function() { return onoffEmployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployment", function() { return deleteEmployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEmployments", function() { return setEmployments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployment", function() { return addEmployment; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");




function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($name: String!, $email: String!, $phone: [String]!, $login: String!, $password: String!, $role: String!, $organization: ID!) {\n                        addEmployment(name: $name, email: $email, phone: $phone, login: $login, password: $password, role: $role, organization: $organization) {\n                             data\n                        }\n                    }"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: ID!, $name: String, $email: String, $newPass: String, $role: String, $phone: [String], $login: String) {\n                        setEmployment(_id: $_id, name: $name, email: $email, newPass: $newPass, role: $role, phone: $phone, login: $login) {\n                             data\n                        }\n                    }"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        deleteEmployment(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        onoffEmployment(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($_id: ID) {\n                        ecspeditors(_id: $_id) {\n                            _id\n                            createdAt\n                            name\n                            email\n                            phone\n                            user \n                                {_id role status login}\n                            organization \n                                {_id name}\n                        }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($_id: ID!) {\n                        employment(_id: $_id) {\n                            _id\n                            createdAt\n                            name\n                            email\n                            phone\n                            user \n                                {_id role status login}\n                            organization \n                                {_id name}\n                        }\n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($search: String!, $sort: String!, $filter: String!) {\n                        employments(search: $search, sort: $sort, filter: $filter) {\n                            _id\n                            createdAt\n                            name\n                            email\n                            phone\n                            user \n                                {_id role status login}\n                            organization \n                                {_id name}\n                          }\n                          sortEmployment {\n                           name\n                            field\n                          }\n                          filterEmployment {\n                           name\n                           value\n                          }\n                    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getEmployments =
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

  return function getEmployments(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getEmployment =
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

  return function getEmployment(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var getEcspeditors =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref5) {
    var _id, client, res;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _id = _ref5._id;
            _context3.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context3.next = 5;
            return client.query({
              variables: {
                _id: _id
              },
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject3())
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

  return function getEcspeditors(_x3) {
    return _ref6.apply(this, arguments);
  };
}();
var onoffEmployment =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(ids) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context4.next = 4;
            return client.mutate({
              variables: {
                _id: ids
              },
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject4())
            });

          case 4:
            _context4.next = 6;
            return getEmployments(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

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

  return function onoffEmployment(_x4) {
    return _ref7.apply(this, arguments);
  };
}();
var deleteEmployment =
/*#__PURE__*/
function () {
  var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(ids) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context5.next = 4;
            return client.mutate({
              variables: {
                _id: ids
              },
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject5())
            });

          case 4:
            _context5.next = 6;
            return getEmployments(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            return _context5.abrupt("return", _context5.sent);

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

  return function deleteEmployment(_x5) {
    return _ref8.apply(this, arguments);
  };
}();
var setEmployments =
/*#__PURE__*/
function () {
  var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(element) {
    var client, list;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context6.next = 4;
            return client.mutate({
              variables: element,
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject6())
            });

          case 4:
            _context6.next = 6;
            return getEmployments(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            list = _context6.sent;
            return _context6.abrupt("return", list);

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));

  return function setEmployments(_x6) {
    return _ref9.apply(this, arguments);
  };
}();
var addEmployment =
/*#__PURE__*/
function () {
  var _ref10 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(element) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context7.next = 4;
            return client.mutate({
              variables: element,
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject7())
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

  return function addEmployment(_x7) {
    return _ref10.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=[id].js.351ddf2fb006aafeb928.hot-update.js.map