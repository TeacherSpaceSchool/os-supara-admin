webpackHotUpdate("static\\development\\pages\\routes.js",{

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! exports provided: checkMobile, checkAuth, getJWT, checkInt, pdDDMMYYYY, pdDDMMYY, pdDatePicker, pdDDMMYYHHMM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMobile", function() { return checkMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJWT", function() { return getJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInt", function() { return checkInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYYYY", function() { return pdDDMMYYYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYY", function() { return pdDDMMYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDatePicker", function() { return pdDatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYYHHMM", function() { return pdDDMMYYHHMM; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);


var regexpUA = /(Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|iOS|Mobile)/;
var checkMobile = function checkMobile(ua) {
  return regexpUA.exec(ua) !== null;
};
var regexpAuth = /(\s)?jwt=(\S)+(;)?/;
var checkAuth = function checkAuth(auth) {
  return regexpAuth.exec(auth) !== null;
};
var getJWT = function getJWT(auth) {
  var res = regexpAuth.exec(auth);
  return res !== null ? res[0].trim().replace('jwt=', '') : undefined;
};
var checkInt = function checkInt(_int) {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(_int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(_int);
};
var pdDDMMYYYY = function pdDDMMYYYY(date) {
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '');
  return date;
};
var pdDDMMYY = function pdDDMMYY(date) {
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4);
  return date;
};
var pdDatePicker = function pdDatePicker(date) {
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[0].replace('"', '') + '-' + date[1] + '-' + date[2].split('T')[0];
  return date;
};
var pdDDMMYYHHMM = function pdDDMMYYHHMM(date) {
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  console.log(date);
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4) + ' ' + date[2].split('T')[1].split(':')[0] + ':' + date[2].split('T')[1].split(':')[1];
  return date;
};

/***/ })

})
//# sourceMappingURL=routes.js.b8a78f223e1456a9c414.hot-update.js.map