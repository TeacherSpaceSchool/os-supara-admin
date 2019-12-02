webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
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
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_gql_contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/gql/contact */ "./src/gql/contact.js");
/* harmony import */ var _src_styleMUI_contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/styleMUI/contact */ "./src/styleMUI/contact.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _components_dialog_AddSocial__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/dialog/AddSocial */ "./components/dialog/AddSocial.js");




var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






















var Contact = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_contact__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var data = props.data;
  var isMobileApp = props.app.isMobileApp;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.contact.name),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.contact.address),
      address = _useState2[0],
      setAddress = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newAddress = _useState3[0],
      setNewAddress = _useState3[1];

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

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.contact.email),
      email = _useState4[0],
      setEmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newEmail = _useState5[0],
      setNewEmail = _useState5[1];

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

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.contact.phone),
      phone = _useState6[0],
      setPhone = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newPhone = _useState7[0],
      setNewPhone = _useState7[1];

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

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.contact.social),
      social = _useState8[0],
      setSocial = _useState8[1];

  var addSocial = function addSocial(value, idx) {
    social[idx] = value;
    setSocial(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(social));
  };

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.contact.info),
      info = _useState9[0],
      setInfo = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.contact.image === '' ? '/static/add.png' : data.contact.image),
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
    pageName: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, name), __jsx("meta", {
    name: "description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: "\u0410\u0437\u044B\u043A - \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0441\u043A\u043B\u0430\u0434 \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0441 \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u0442\u043E\u0447\u043A\u043E\u0439",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "http://".concat("localhost", "/static/512x512.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "http://".concat("localhost", "/contact"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "http://".concat("localhost", "/contact"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, profile.role === 'admin' ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: isMobileApp ? classes.column : classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "contained-button-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("img", {
    className: classes.media,
    src: preview,
    alt: 'Добавить',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })), "\u041D\u0430\u0448\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B", __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("img", {
    src: "/static/instagram.svg",
    onClick: function onClick() {
      setMiniDialog('Instagram', __jsx(_components_dialog_AddSocial__WEBPACK_IMPORTED_MODULE_25__["default"], {
        action: addSocial,
        idx: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    className: classes.mediaSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx("img", {
    src: "/static/facebook.svg",
    onClick: function onClick() {
      setMiniDialog('Facebook', __jsx(_components_dialog_AddSocial__WEBPACK_IMPORTED_MODULE_25__["default"], {
        action: addSocial,
        idx: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    className: classes.mediaSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("img", {
    src: "/static/twitter.svg",
    onClick: function onClick() {
      setMiniDialog('Twitter', __jsx(_components_dialog_AddSocial__WEBPACK_IMPORTED_MODULE_25__["default"], {
        action: addSocial,
        idx: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    className: classes.mediaSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx("img", {
    src: "/static/telegram.svg",
    onClick: function onClick() {
      setMiniDialog('Telegram', __jsx(_components_dialog_AddSocial__WEBPACK_IMPORTED_MODULE_25__["default"], {
        action: addSocial,
        idx: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    className: classes.mediaSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
      lineNumber: 135
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: newAddress,
    onChange: function onChange(event) {
      setNewAddress(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: function onClick() {
        addAddress();
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), address.map(function (element, idx) {
    return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: idx,
      className: isMobileApp ? classes.inputM : classes.inputD,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "\u0410\u0434\u0440\u0435\u0441"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
      placeholder: "\u0410\u0434\u0440\u0435\u0441",
      value: element,
      onChange: function onChange(event) {
        editAddress(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
        onClick: function onClick() {
          deleteAddress(idx);
        },
        "aria-label": "toggle password visibility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }));
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C email"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: newEmail,
    onChange: function onChange(event) {
      setNewEmail(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: function onClick() {
        addEmail();
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  })), email.map(function (element, idx) {
    return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: idx,
      className: isMobileApp ? classes.inputM : classes.inputD,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
      value: element,
      onChange: function onChange(event) {
        editEmail(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
        onClick: function onClick() {
          deleteEmail(idx);
        },
        "aria-label": "toggle password visibility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }));
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
    value: newPhone,
    onChange: function onChange(event) {
      setNewPhone(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: function onClick() {
        addPhone();
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247
      },
      __self: this
    }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })), phone.map(function (element, idx) {
    return __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: idx,
      className: isMobileApp ? classes.inputM : classes.inputD,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_22__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261
      },
      __self: this
    }, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_13__["default"], {
      value: element,
      onChange: function onChange(event) {
        editPhone(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
        onClick: function onClick() {
          deletePhone(idx);
        },
        "aria-label": "toggle password visibility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, __jsx(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262
      },
      __self: this
    }));
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
      lineNumber: 283
    },
    __self: this
  }))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var editElement, action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              editElement = {
                name: name,
                address: address,
                email: email,
                phone: phone,
                social: social,
                info: info
              };
              if (image !== undefined) editElement.image = image;

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
                          return Object(_src_gql_contact__WEBPACK_IMPORTED_MODULE_8__["setContact"])(editElement);

                        case 2:
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

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_24__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 309
                },
                __self: this
              }));
              showMiniDialog(true);

            case 5:
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
      lineNumber: 296
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"))) : __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, __jsx("img", {
    className: classes.media,
    src: preview,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }), social[0].length > 0 || social[1].length > 0 || social[2].length > 0 || social[3].length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, "\u041D\u0430\u0448\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B", __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, social[0].length > 0 ? __jsx("a", {
    href: social[0],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, __jsx("img", {
    src: "/static/instagram.svg",
    className: classes.mediaSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  })) : null, social[1].length > 0 ? __jsx("a", {
    href: social[1],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, __jsx("img", {
    src: "/static/facebook.svg",
    className: classes.mediaSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  })) : null, social[2].length > 0 ? __jsx("a", {
    href: social[2],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, __jsx("img", {
    src: "/static/twitter.svg",
    className: classes.mediaSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  })) : null, social[3].length > 0 ? __jsx("a", {
    href: social[3],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, __jsx("img", {
    src: "/static/telegram.svg",
    className: classes.mediaSocial,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  })) : null)) : null), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, __jsx("div", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, name), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, "\u0410\u0434\u0440\u0435\u0441:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, address.map(function (element, idx) {
    return __jsx("div", {
      key: idx,
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }, element);
  }))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, phone.map(function (element, idx) {
    return __jsx("a", {
      href: "tel:".concat(element),
      key: idx,
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 391
      },
      __self: this
    }, element);
  }))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }, "E-mail:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, email.map(function (element, idx) {
    return __jsx("a", {
      href: "mailto:".concat(element),
      key: idx,
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: this
    }, element);
  }))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }), __jsx("div", {
    className: classes.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, info))))), __jsx("input", {
    accept: "image/*",
    style: {
      display: 'none'
    },
    id: "contained-button-file",
    type: "file",
    onChange: handleChangeImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 418
    },
    __self: this
  }));
});
Contact.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"];
          _context3.t1 = {};
          _context3.next = 4;
          return Object(_src_gql_contact__WEBPACK_IMPORTED_MODULE_8__["getContact"])();

        case 4:
          _context3.t2 = _context3.sent;
          _context3.t3 = (0, _context3.t0)(_context3.t1, _context3.t2);
          return _context3.abrupt("return", {
            data: _context3.t3
          });

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}));

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_15__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_16__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Contact));

/***/ })

})
//# sourceMappingURL=contact.js.49c1d739eeb9c1b65a65.hot-update.js.map