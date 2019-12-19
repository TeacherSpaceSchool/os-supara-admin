webpackHotUpdate("static\\development\\pages\\routes.js",{

/***/ "./src/gql/route.js":
/*!**************************!*\
  !*** ./src/gql/route.js ***!
  \**************************/
/*! exports provided: getRoutes, getRoute, deleteRoute, addRoute, setRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutes", function() { return getRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoute", function() { return getRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRoute", function() { return deleteRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return addRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRoute", function() { return setRoute; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");




function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: ID!, $invoices: [ID], $employment: ID, $cancelInvoices: [ID], $dateStart: Date) {\n                        setRoute(_id: $_id, invoices: $invoices, employment: $employment, cancelInvoices: $cancelInvoices, dateStart: $dateStart) {\n                             data\n                        }\n                    }"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($invoices: [ID]!, $employment: ID!, $dateStart: Date!) {\n                        addRoute(invoices: $invoices, employment: $employment, dateStart: $dateStart) {\n                             data\n                        }\n                    }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        deleteRoute(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($_id: ID!) {\n                        route(_id: $_id) {\n                            _id\n                            createdAt\n                            invoices\n                                {\n                                    _id\n                                    agent \n                                        {_id name}\n                                    createdAt\n                                    orders \n                                        { \n                                            _id\n                                            createdAt\n                                            item\n                                                {\n                                                    image\n                                                    _id\n                                                    name    \n                                                    stock \n                                                    price\n                                                    organization\n                                                        {_id name}\n                                                }\n                                            count\n                                            allPrice\n                                            status\n                                         }\n                                    client \n                                        { \n                                            _id\n                                            name\n                                            email\n                                            phone \n                                            user \n                                                {_id }\n                                        }\n                                    allPrice\n                                    info\n                                    address\n                                    paymentMethod\n                                    number\n                                    confirmationForwarder\n                                    confirmationClient\n                                    cancelClient\n                                    cancelForwarder\n                                    taken\n                                    dateDelivery\n                                    usedBonus\n                                }\n                            employment\n                                { \n                                    _id\n                                    createdAt\n                                    name\n                                    email\n                                    phone\n                                    user \n                                        {_id role status }\n                                    organization \n                                        {_id name}\n                                }\n                            status\n                            dateStart\n                            dateEnd\n                            number\n                        }\n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($search: String!, $sort: String!, $filter: String!, $date: String!) {\n                        routes(search: $search, sort: $sort, filter: $filter, date: $date) {\n                            _id\n                            createdAt\n                            invoices\n                                {\n                                    _id\n                                    agent \n                                        {_id name}\n                                    createdAt\n                                    orders \n                                        { \n                                            _id\n                                            createdAt\n                                            item\n                                                {\n                                                    image\n                                                    _id\n                                                    name    \n                                                    stock \n                                                    price\n                                                    organization\n                                                        {_id name}\n                                                }\n                                            count\n                                            allPrice\n                                            status\n                                         }\n                                    client \n                                        { \n                                            _id\n                                            name\n                                            email\n                                            phone \n                                            user \n                                                {_id }\n                                        }\n                                    allPrice\n                                    info\n                                    address\n                                    paymentMethod\n                                    number\n                                    confirmationForwarder\n                                    confirmationClient\n                                    cancelClient\n                                    cancelForwarder\n                                    taken\n                                    dateDelivery\n                                    usedBonus\n                                }\n                            employment\n                                { \n                                    _id\n                                    createdAt\n                                    name\n                                    email\n                                    phone\n                                    user \n                                        {_id role status }\n                                    organization \n                                        {_id name}\n                                }\n                            status\n                            dateStart\n                            dateEnd\n                            number\n                        }\n                        sortRoute {\n                            name\n                            field\n                        }\n                        filterRoute {\n                           name\n                           value\n                        }\n                    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getRoutes =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var search, sort, filter, date, client, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            search = _ref.search, sort = _ref.sort, filter = _ref.filter, date = _ref.date;
            _context.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context.next = 5;
            return client.query({
              variables: {
                search: search,
                sort: sort,
                filter: filter,
                date: date
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

  return function getRoutes(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getRoute =
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

  return function getRoute(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteRoute =
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
            return getRoutes(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

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

  return function deleteRoute(_x3) {
    return _ref5.apply(this, arguments);
  };
}();
var addRoute =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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
            _context4.next = 9;
            break;

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function addRoute(_x4) {
    return _ref6.apply(this, arguments);
  };
}();
var setRoute =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
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

  return function setRoute(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=routes.js.a269419fa8f593ff3eb9.hot-update.js.map