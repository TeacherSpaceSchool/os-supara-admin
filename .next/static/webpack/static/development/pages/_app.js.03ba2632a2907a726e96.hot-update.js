webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/constants/pagination.js":
/*!***************************************!*\
  !*** ./redux/constants/pagination.js ***!
  \***************************************/
/*! exports provided: SET_COUNT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNT", function() { return SET_COUNT; });
var SET_COUNT = 'SET_COUNT';

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./redux/reducers/app.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./redux/reducers/user.js");
/* harmony import */ var _mini_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mini_dialog */ "./redux/reducers/mini_dialog.js");
/* harmony import */ var _snackbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snackbar */ "./redux/reducers/snackbar.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination */ "./redux/reducers/pagination.js");






/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  app: _app__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
  mini_dialog: _mini_dialog__WEBPACK_IMPORTED_MODULE_3__["default"],
  snackbar: _snackbar__WEBPACK_IMPORTED_MODULE_4__["default"],
  pagination: _pagination__WEBPACK_IMPORTED_MODULE_5__["default"]
}));

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
    case _constants_pagination__WEBPACK_IMPORTED_MODULE_1__["SET_COUNT"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        count: action.payload
      });

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=_app.js.03ba2632a2907a726e96.hot-update.js.map