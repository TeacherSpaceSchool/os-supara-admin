webpackHotUpdate("static\\development\\pages\\ads.js",{

/***/ "./src/gql/index.js":
/*!**************************!*\
  !*** ./src/gql/index.js ***!
  \**************************/
/*! exports provided: readDataGQL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readDataGQL", function() { return readDataGQL; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");




var readDataGQL =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var variables, query, client, res, _res;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            variables = _ref.variables, query = _ref.query;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_3__["SingletonApolloClient"]().getClient();
            _context.prev = 2;
            console.log({
              variables: variables,
              query: query
            });
            _context.next = 6;
            return client.query({
              variables: variables,
              query: query
            });

          case 6:
            res = _context.sent;
            console.log(res.data);
            client.writeFragment({
              id: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(variables),
              fragment: query,
              data: res.data
            });
            return _context.abrupt("return", res.data);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            _res = client.readFragment({
              id: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(variables),
              fragment: query
            });
            console.log(_res);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 12]]);
  }));

  return function readDataGQL(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=ads.js.1396e0d3c6c90aa7c640.hot-update.js.map