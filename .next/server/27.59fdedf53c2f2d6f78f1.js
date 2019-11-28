exports.ids = [27];
exports.modules = {

/***/ "y4xb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pngM");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("DzNn");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("//vS");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2UeD");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hrAA");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("o0q0");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Confirmation = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    showSnackBar
  } = props.snackbarActions;
  const {
    showLoad
  } = props.appActions;
  const {
    classes,
    action
  } = props;
  return __jsx("div", {
    className: classes.line
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClick: async () => {
      try {
        await showMiniDialog(false);
        await showLoad(true);
        await action();
        await showLoad(false);
      } catch (err) {
        showSnackBar('Ошибка');
      }
    },
    "aria-label": "Delete"
  }, __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.button
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClick: async () => {
      showMiniDialog(false);
    },
    "aria-label": "Cancel"
  }, __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.button
  })));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_4__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Confirmation)));

/***/ })

};;