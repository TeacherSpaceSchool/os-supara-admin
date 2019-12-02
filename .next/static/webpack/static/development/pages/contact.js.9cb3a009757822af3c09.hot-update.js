webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/dialog/Sign.js":
/*!***********************************!*\
  !*** ./components/dialog/Sign.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Sign.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















var Sign = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      loginEnter = _useState[0],
      setLoginEnter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passEnter = _useState2[0],
      setPassEnter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      errorPhone = _useState3[0],
      setErrorPhone = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      errorPass = _useState4[0],
      setErrorPass = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      errorPassRepeat = _useState5[0],
      setErrorPassRepeat = _useState5[1];

  var handlePassEnter = function handlePassEnter(event) {
    setPassEnter(event.target.value);
  };

  var handleLoginEnter = function handleLoginEnter(event) {
    setLoginEnter(event.target.value);
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      loginReg = _useState6[0],
      setLoginReg = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passReg = _useState7[0],
      setPassReg = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passRepeatReg = _useState8[0],
      setPassRepeatReg = _useState8[1];

  var handlePassReg = function handlePassReg(event) {
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

  var handlePassRepeatReg = function handlePassRepeatReg(event) {
    setPassRepeatReg(event.target.value);

    if (event.target.value !== passReg) {
      setErrorPassRepeat(true);
    } else {
      setErrorPassRepeat(false);
    }
  };

  var handleLoginReg = function handleLoginReg(event) {
    setLoginReg(event.target.value);

    if (!Object(_redux_constants_other__WEBPACK_IMPORTED_MODULE_7__["validPhone"])(event.target.value)) {
      setErrorPhone(true);
    } else {
      setErrorPhone(false);
    }
  };

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('enter'),
      type = _useState9[0],
      setType = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('password'),
      hide = _useState10[0],
      setHide = _useState10[1];

  var handleHide = function handleHide() {
    setHide(!hide);
  };

  var error = props.user.error;
  var isMobileApp = props.app.isMobileApp;
  var showMiniDialog = props.mini_dialogActions.showMiniDialog;
  var _props$userActions = props.userActions,
      signin = _props$userActions.signin,
      signup = _props$userActions.signup;
  var classes = props.classes;
  var width = isMobileApp ? window.innerWidth - 144 : 500;
  return __jsx("div", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, type === 'enter' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: width
    },
    id: "standard-search",
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: loginEnter,
    onChange: handleLoginEnter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passEnter,
    onChange: handlePassEnter,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: width
    },
    className: classes.message,
    onClick: function onClick() {
      setType('reg');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx("div", {
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "\u0415\u0441\u043B\u0438 \u0437\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0442\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438.")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
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
    __self: this
  }, "\u0412\u043E\u0439\u0442\u0438"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "standard-search",
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861",
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
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passReg,
    onChange: handlePassReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_16___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_14__["default"], {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passRepeatReg,
    onChange: handlePassRepeatReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_15__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, errorPhone ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D. \u041F\u0440\u0438\u043C\u0435\u0440: +996555780861.") : null, errorPass ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F") : null, errorPassRepeat ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442") : null, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
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
    __self: this
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
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

/***/ })

})
//# sourceMappingURL=contact.js.9cb3a009757822af3c09.hot-update.js.map