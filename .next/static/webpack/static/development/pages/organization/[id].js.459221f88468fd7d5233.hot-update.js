webpackHotUpdate("static\\development\\pages\\organization\\[id].js",{

/***/ "./pages/organization/[id].js":
/*!************************************!*\
  !*** ./pages/organization/[id].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_gql_organization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/gql/organization */ "./src/gql/organization.js");
/* harmony import */ var _src_styleMUI_organization_organization__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/styleMUI/organization/organization */ "./src/styleMUI/organization/organization.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _src_gql_employment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../src/gql/employment */ "./src/gql/employment.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");




var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\organization\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


























var Organization = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_organization_organization__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var data = props.data;
  var isMobileApp = props.app.isMobileApp;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();
  var showSnackBar = props.snackbarActions.showSnackBar;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.organization !== null ? data.organization.status : ''),
      statusO = _useState[0],
      setStatusO = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.organization !== null ? data.organization.name : ''),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.organization !== null ? data.organization.address : []),
      address = _useState3[0],
      setAddress = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newAddress = _useState4[0],
      setNewAddress = _useState4[1];

  var addAddress = function addAddress() {
    address = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(address), [newAddress]);
    setAddress(address);
    setNewAddress('');
  };

  var editAddress = function editAddress(event, idx) {
    address[idx] = event.target.value;
    setAddress(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(address));
  };

  var deleteAddress = function deleteAddress(idx) {
    address.splice(idx, 1);
    setAddress(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(address));
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.organization !== null ? data.organization.email : []),
      email = _useState5[0],
      setEmail = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newEmail = _useState6[0],
      setNewEmail = _useState6[1];

  var addEmail = function addEmail() {
    email = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(email), [newEmail]);
    setEmail(email);
    setNewEmail('');
  };

  var editEmail = function editEmail(event, idx) {
    email[idx] = event.target.value;
    setEmail(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(email));
  };

  var deleteEmail = function deleteEmail(idx) {
    email.splice(idx, 1);
    setEmail(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(email));
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.organization !== null ? data.organization.phone : []),
      phone = _useState7[0],
      setPhone = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newPhone = _useState8[0],
      setNewPhone = _useState8[1];

  var addPhone = function addPhone() {
    phone = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(phone), [newPhone]);
    setPhone(phone);
    setNewPhone('');
  };

  var editPhone = function editPhone(event, idx) {
    phone[idx] = event.target.value;
    setPhone(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(phone));
  };

  var deletePhone = function deletePhone(idx) {
    phone.splice(idx, 1);
    setPhone(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(phone));
  };

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.organization !== null ? data.organization.info : ''),
      info = _useState9[0],
      setInfo = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.organization !== null ? data.organization.image : ''),
      preview = _useState10[0],
      setPreview = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(undefined),
      image = _useState11[0],
      setImage = _useState11[1];

  var handleChangeImage = function handleChangeImage(event) {
    setImage(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  var profile = props.user.profile;
  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
    filters: data.filterSubCategory,
    sorts: data.sortSubCategory,
    pageName: data.organization !== null ? router.query.id === 'new' ? 'Добавить' : data.organization.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, data.organization !== null ? router.query.id === 'new' ? 'Добавить' : data.organization.name : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: data.organization !== null ? router.query.id === 'new' ? 'Добавить' : data.organization.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: preview,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_27__["urlMain"], "/organization/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_27__["urlMain"], "/organization/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: isMobileApp ? classes.column : classes.row,
    style: isMobileApp ? {} : {
      justifyContent: 'start',
      alignItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, data.organization !== null ? profile.role === 'admin' || profile.role === 'организация' && data.employment.organization._id === data.organization._id ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("label", {
    htmlFor: "contained-button-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("img", {
    className: classes.media1,
    src: preview,
    alt: 'Добавить',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: "\u0418\u043C\u044F",
    value: name,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: function onChange(event) {
      setName(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__["default"], {
    placeholder: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441",
    value: newAddress,
    onChange: function onChange(event) {
      setNewAddress(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23__["default"], {
      onClick: function onClick() {
        addAddress();
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })), address.map(function (element, idx) {
    return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: idx,
      className: isMobileApp ? classes.inputM : classes.inputD,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, "\u0410\u0434\u0440\u0435\u0441", idx + 1), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__["default"], {
      placeholder: "\u0410\u0434\u0440\u0435\u0441",
      value: element,
      onChange: function onChange(event) {
        editAddress(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23__["default"], {
        onClick: function onClick() {
          deleteAddress(idx);
        },
        "aria-label": "toggle password visibility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }));
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C email"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__["default"], {
    placeholder: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C email",
    value: newEmail,
    onChange: function onChange(event) {
      setNewEmail(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23__["default"], {
      onClick: function onClick() {
        addEmail();
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  })), email.map(function (element, idx) {
    return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: idx,
      className: isMobileApp ? classes.inputM : classes.inputD,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, "Email", idx + 1), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: element,
      onChange: function onChange(event) {
        editEmail(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23__["default"], {
        onClick: function onClick() {
          deleteEmail(idx);
        },
        "aria-label": "toggle password visibility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }));
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__["default"], {
    placeholder: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861",
    value: newPhone,
    onChange: function onChange(event) {
      setNewPhone(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23__["default"], {
      onClick: function onClick() {
        addPhone();
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  })), phone.map(function (element, idx) {
    return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: idx,
      className: isMobileApp ? classes.inputM : classes.inputD,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", idx + 1), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_15__["default"], {
      value: element,
      onChange: function onChange(event) {
        editPhone(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_24__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_23__["default"], {
        onClick: function onClick() {
          deletePhone(idx);
        },
        "aria-label": "toggle password visibility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_22___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }));
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__["default"], {
    multiline: true,
    label: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    value: info,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: function onChange(event) {
      setInfo(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, router.query.id === 'new' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (image !== undefined && name.length > 0 && email.length > 0 && address.length > 0 && phone.length > 0 && info.length > 0) {
                action =
                /*#__PURE__*/
                function () {
                  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return Object(_src_gql_organization__WEBPACK_IMPORTED_MODULE_8__["addOrganization"])({
                              image: image,
                              name: name,
                              address: address,
                              email: email,
                              phone: phone,
                              info: info
                            });

                          case 2:
                            next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/organizations');

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function action() {
                    return _ref2.apply(this, arguments);
                  };
                }();

                setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_26__["default"], {
                  action: action,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 286
                  },
                  __self: this
                }));
                showMiniDialog(true);
              } else {
                showSnackBar('Заполните все поля');
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C") : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var editElement, action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              editElement = {
                _id: data.organization._id
              };
              if (image !== undefined) editElement.image = image;
              if (name.length > 0 && name !== data.organization.name) editElement.name = name;
              if (address.length > 0 && address !== data.organization.address) editElement.address = address;
              if (email.length > 0 && email !== data.organization.email) editElement.email = email;
              if (phone.length > 0 && phone !== data.organization.phone) editElement.phone = phone;
              if (info.length > 0 && info !== data.organization.info) editElement.info = info;

              action =
              /*#__PURE__*/
              function () {
                var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return Object(_src_gql_organization__WEBPACK_IMPORTED_MODULE_8__["setOrganization"])(editElement);

                        case 2:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function action() {
                  return _ref4.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_26__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 307
                },
                __self: this
              }));
              showMiniDialog(true);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), profile.role === 'admin' ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return Object(_src_gql_organization__WEBPACK_IMPORTED_MODULE_8__["onoffOrganization"])([data.organization._id]);

                        case 2:
                          setStatusO(statusO === 'active' ? 'deactive' : 'active');

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function action() {
                  return _ref6.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_26__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 319
                },
                __self: this
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, statusO === 'active' ? 'Отключить' : 'Включить'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.next = 2;
                          return Object(_src_gql_organization__WEBPACK_IMPORTED_MODULE_8__["deleteOrganization"])([data.organization._id]);

                        case 2:
                          next_router__WEBPACK_IMPORTED_MODULE_14___default.a.push('/organizations');

                        case 3:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7);
                }));

                return function action() {
                  return _ref8.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_26__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 329
                },
                __self: this
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")) : null)))) : router.query.id === 'new' ? 'Ничего не найдено' : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("img", {
    className: classes.media1,
    src: preview,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, __jsx("div", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, name), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "\u0410\u0434\u0440\u0435\u0441:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, address.map(function (element, idx) {
    return __jsx("div", {
      key: idx,
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }, element);
  }))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, phone.map(function (element, idx) {
    return __jsx("a", {
      href: "tel:".concat(element),
      key: idx,
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, element);
  }))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, "E-mail:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, email.map(function (element, idx) {
    return __jsx("a", {
      href: "mailto:".concat(element),
      key: idx,
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388
      },
      __self: this
    }, element);
  }))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }), __jsx("div", {
    className: classes.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, info))) : 'Ничего не найдено')), __jsx("input", {
    accept: "image/*",
    style: {
      display: 'none'
    },
    id: "contained-button-file",
    type: "file",
    onChange: handleChangeImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }));
});

Organization.getInitialProps =
/*#__PURE__*/
function () {
  var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"];
            _context9.t1 = {};

            if (!(ctx.store.getState().user.authenticated && ['организация', 'менеджер'].includes(ctx.store.getState().user.profile.role))) {
              _context9.next = 8;
              break;
            }

            _context9.next = 5;
            return Object(_src_gql_employment__WEBPACK_IMPORTED_MODULE_20__["getEmployment"])({
              _id: ctx.store.getState().user.profile._id
            });

          case 5:
            _context9.t2 = _context9.sent;
            _context9.next = 9;
            break;

          case 8:
            _context9.t2 = {};

          case 9:
            _context9.t3 = _context9.t2;

            if (!(ctx.query.id !== 'new')) {
              _context9.next = 16;
              break;
            }

            _context9.next = 13;
            return Object(_src_gql_organization__WEBPACK_IMPORTED_MODULE_8__["getOrganization"])({
              _id: ctx.query.id
            });

          case 13:
            _context9.t4 = _context9.sent;
            _context9.next = 17;
            break;

          case 16:
            _context9.t4 = {
              organization: {
                name: '',
                image: '/static/add.png',
                address: [],
                email: [],
                phone: [],
                info: ''
              }
            };

          case 17:
            _context9.t5 = _context9.t4;
            _context9.t6 = (0, _context9.t0)(_context9.t1, _context9.t3, _context9.t5);
            return _context9.abrupt("return", {
              data: _context9.t6
            });

          case 20:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function (_x) {
    return _ref9.apply(this, arguments);
  };
}();

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_18__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_19__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_18__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_25__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Organization));

/***/ })

})
//# sourceMappingURL=[id].js.459221f88468fd7d5233.hot-update.js.map