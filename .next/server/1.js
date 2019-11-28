exports.ids = [1];
exports.modules = {

/***/ "./components/dialog/Sign.js":
/*!***********************************!*\
  !*** ./components/dialog/Sign.js ***!
  \***********************************/
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
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Sign.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















const Sign = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  let {
    0: loginEnter,
    1: setLoginEnter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: passEnter,
    1: setPassEnter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: errorPhone,
    1: setErrorPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: errorPass,
    1: setErrorPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: errorPassRepeat,
    1: setErrorPassRepeat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  let handlePassEnter = event => {
    setPassEnter(event.target.value);
  };

  let handleLoginEnter = event => {
    setLoginEnter(event.target.value);
  };

  let {
    0: loginReg,
    1: setLoginReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: passReg,
    1: setPassReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: passRepeatReg,
    1: setPassRepeatReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  let handlePassReg = event => {
    setPassReg(event.target.value);

    if (event.target.value !== passRepeatReg) {
      setErrorPassRepeat(true);
    } else {
      setErrorPassRepeat(false);
    }

    if (event.target.value.length < 8) {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }
  };

  let handlePassRepeatReg = event => {
    setPassRepeatReg(event.target.value);

    if (event.target.value !== passReg) {
      setErrorPassRepeat(true);
    } else {
      setErrorPassRepeat(false);
    }
  };

  let handleLoginReg = event => {
    setLoginReg(event.target.value);

    if (!Object(_redux_constants_other__WEBPACK_IMPORTED_MODULE_7__["validPhone"])(event.target.value)) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }
  };

  let {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('enter');
  let {
    0: hide,
    1: setHide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('password');

  let handleHide = () => {
    setHide(!hide);
  };

  const {
    error
  } = props.user;
  const {
    isMobileApp
  } = props.app;
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    signin,
    signup
  } = props.userActions;
  const {
    classes
  } = props;
  const width = isMobileApp ? window.innerWidth - 126 : 500;
  return __jsx("div", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, type === 'enter' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
    style: {
      width: width
    },
    id: "standard-search",
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: loginEnter,
    onChange: handleLoginEnter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13___default.a, {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passEnter,
    onChange: handlePassEnter,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      width: width
    },
    className: classes.message,
    onClick: () => {
      setType('reg');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx("div", {
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "\u0415\u0441\u043B\u0438 \u0437\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0442\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438.")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      if (loginEnter.length > 0 && passEnter.length > 0) signin({
        phone: loginEnter,
        password: passEnter
      });
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, "\u0412\u043E\u0439\u0442\u0438"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "standard-search",
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: loginReg,
    onChange: handleLoginReg,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13___default.a, {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passReg,
    onChange: handlePassReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: undefined
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13___default.a, {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passRepeatReg,
    onChange: handlePassRepeatReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: undefined
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: undefined
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: undefined
  }), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: undefined
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, errorPhone ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D. \u041F\u0440\u0438\u043C\u0435\u0440: +996555780861.") : null, errorPass ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }, "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F") : null, errorPassRepeat ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442") : null, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      if (!errorPass && !errorPassRepeat && !errorPhone) signup({
        phone: loginReg,
        password: passReg
      });
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: undefined
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

Sign.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_18__["default"])(Sign)));

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
//# sourceMappingURL=1.js.map