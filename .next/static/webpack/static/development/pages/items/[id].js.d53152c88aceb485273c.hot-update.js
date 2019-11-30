webpackHotUpdate("static\\development\\pages\\items\\[id].js",{

/***/ "./components/app/Dialog.js":
/*!**********************************!*\
  !*** ./components/app/Dialog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "./node_modules/@material-ui/core/esm/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\Dialog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var MyDialog = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var _props$mini_dialog = props.mini_dialog,
      title = _props$mini_dialog.title,
      child = _props$mini_dialog.child,
      show = _props$mini_dialog.show,
      fullScreen = _props$mini_dialog.fullScreen;
  var showMiniDialog = props.mini_dialogActions.showMiniDialog;
  return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fullScreen: fullScreen,
    open: show,
    onClose: function onClose() {
      showMiniDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClose: function onClose() {
      showMiniDialog(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, child));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(MyDialog));

/***/ }),

/***/ "./redux/actions/mini_dialog.js":
/*!**************************************!*\
  !*** ./redux/actions/mini_dialog.js ***!
  \**************************************/
/*! exports provided: setMiniDialog, showMiniDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMiniDialog", function() { return setMiniDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMiniDialog", function() { return showMiniDialog; });
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");

function setMiniDialog(title, child, fullScreen) {
  return {
    type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__["SET_MINI_DIALOG"],
    payload: {
      title: title,
      child: child,
      fullScreen: fullScreen
    }
  };
}
function showMiniDialog(show) {
  return {
    type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__["SHOW_MINI_DIALOG"],
    payload: show
  };
}

/***/ })

})
//# sourceMappingURL=[id].js.d53152c88aceb485273c.hot-update.js.map