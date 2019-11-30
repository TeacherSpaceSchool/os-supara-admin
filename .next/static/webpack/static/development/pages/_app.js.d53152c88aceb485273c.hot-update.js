webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/reducers/mini_dialog.js":
/*!***************************************!*\
  !*** ./redux/reducers/mini_dialog.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mini_dialog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");


var initialState = {
  title: '',
  child: null,
  show: false,
  fullScreen: false
};
function mini_dialog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SHOW_MINI_DIALOG"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        show: action.payload
      });

    case _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SET_MINI_DIALOG"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        title: action.payload.title,
        child: action.payload.child,
        fullScreen: action.payload.fullScreen
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.d53152c88aceb485273c.hot-update.js.map