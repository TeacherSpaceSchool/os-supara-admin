exports.ids = [0];
exports.modules = {

/***/ "./components/dialog/Confirmation.js":
/*!*******************************************!*\
  !*** ./components/dialog/Confirmation.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Done */ "@material-ui/icons/Done");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Confirmation.js";
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
    className: classes.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
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
    "aria-label": "Delete",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: async () => {
      showMiniDialog(false);
    },
    "aria-label": "Cancel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_6__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_7__, dispatch)
  };
}

Confirmation.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_11__["default"])(Confirmation)));

/***/ }),

/***/ "./src/styleMUI/dialogContent.js":
/*!***************************************!*\
  !*** ./src/styleMUI/dialogContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  mainLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  message: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'center',
    color: 'indigo',
    fontWeight: 'bold',
    cursor: 'pointer',
    overflowWrap: 'break-word',
    fontSize: '1rem'
  },
  itogo: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: 500
  },
  error_message: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'red',
    fontWeight: 'bold'
  },
  nameField: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    color: '#A0A0A0'
  },
  value: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: '0.875rem',
    fontFamily: 'Roboto'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline'
  }
}));

/***/ })

};;
//# sourceMappingURL=0.js.map