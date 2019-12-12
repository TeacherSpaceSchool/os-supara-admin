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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");



var readDataGQL =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(variables, query) {
    var client, res, _res;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
            _context.prev = 1;
            _context.next = 4;
            return client.query({
              variables: variables,
              query: query
            });

          case 4:
            res = _context.sent;
            client.writeQuery({
              variables: variables,
              query: query,
              data: res
            });
            console.log('ok');
            return _context.abrupt("return", res.data);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log('error');
            _res = client.readQuery({
              variables: variables,
              query: query
            });
            console.log(_res);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function readDataGQL(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=ads.js.990e09c54c3d2deb1162.hot-update.js.map