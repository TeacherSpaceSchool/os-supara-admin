webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/constants/pagination.js":
/*!***************************************!*\
  !*** ./redux/constants/pagination.js ***!
  \***************************************/
/*! exports provided: DISABLE, NEXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISABLE", function() { return DISABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEXT", function() { return NEXT; });
var DISABLE = 'DISABLE';
var NEXT = 'NEXT';

/***/ }),

/***/ "./redux/reducers/pagination.js":
/*!**************************************!*\
  !*** ./redux/reducers/pagination.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mini_dialog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _constants_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/pagination */ "./redux/constants/pagination.js");


var initialState = {
  count: 0,
  work: false
};
function mini_dialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_pagination__WEBPACK_IMPORTED_MODULE_1__["NEXT"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        count: state.count += 1
      });

    case _constants_pagination__WEBPACK_IMPORTED_MODULE_1__["DISABLE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        work: false
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.4e96ab5b2355f6e621ee.hot-update.js.map