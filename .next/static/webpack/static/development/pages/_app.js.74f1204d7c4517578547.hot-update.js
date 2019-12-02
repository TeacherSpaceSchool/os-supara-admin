webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/constants/other.js":
/*!**********************************!*\
  !*** ./redux/constants/other.js ***!
  \**********************************/
/*! exports provided: urlGQL, urlGQLws, validMail, validPhone, checkInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGQL", function() { return urlGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGQLws", function() { return urlGQLws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMail", function() { return validMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPhone", function() { return validPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInt", function() { return checkInt; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

var urlGQL = "https://".concat("localhost", ":3000/graphql");
var urlGQLws = "ws://".concat("localhost", ":3000/graphql");
var validMail = function validMail(mail) {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
};
var validPhone = function validPhone(phone) {
  return /^[+]{1}996[0-9]{9}$/.test(phone);
};
var checkInt = function checkInt(_int) {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(_int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(_int);
};

/***/ })

})
//# sourceMappingURL=_app.js.74f1204d7c4517578547.hot-update.js.map