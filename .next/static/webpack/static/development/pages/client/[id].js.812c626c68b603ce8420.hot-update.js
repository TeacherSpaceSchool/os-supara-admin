webpackHotUpdate("static\\development\\pages\\client\\[id].js",{

/***/ "./pages/client/[id].js":
/*!******************************!*\
  !*** ./pages/client/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_gql_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/gql/client */ "./src/gql/client.js");
/* harmony import */ var _src_styleMUI_client_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/styleMUI/client/client */ "./src/styleMUI/client/client.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _components_dialog_Geo__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../components/dialog/Geo */ "./components/dialog/Geo.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");




var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\client\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;






























var Client = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(function (props) {
  var profile = props.user.profile;
  var classes = Object(_src_styleMUI_client_client__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var data = props.data;
  var isMobileApp = props.app.isMobileApp;
  var showSnackBar = props.snackbarActions.showSnackBar;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.user.status : ''),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.name : ''),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.email : ''),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.phone : []),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var addPhone = function addPhone() {
    phone = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(phone), ['']);
    setPhone(phone);
  };

  var editPhone = function editPhone(event, idx) {
    phone[idx] = event.target.value;
    setPhone(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(phone));
  };

  var deletePhone = function deletePhone(idx) {
    phone.splice(idx, 1);
    setPhone(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(phone));
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.user.login : ''),
      login = _useState5[0],
      setLogin = _useState5[1]; //привести к геолокации


  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(data.client.address[0])) data.client.address.map(function (addres) {
    return [addres];
  });

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.address : []),
      address = _useState6[0],
      setAddress = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? Object(_src_lib__WEBPACK_IMPORTED_MODULE_29__["pdDatePicker"])(new Date(data.client.birthday)) : null),
      birthday = _useState7[0],
      setBirthday = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.city : ''),
      city = _useState8[0],
      setCity = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.type : ''),
      type = _useState9[0],
      setType = _useState9[1];

  var handleType = function handleType(event) {
    setType(event.target.value);
  };

  var types = ['частное лицо', 'торговая точка'];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newAddress = _useState10[0],
      setNewAddress = _useState10[1];

  var addAddress = function addAddress() {
    address = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(address), [[newAddress]]);
    setAddress(address);
    setNewAddress('');
  };

  var editAddress = function editAddress(event, idx) {
    address[idx][0] = event.target.value;
    setAddress(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(address));
  };

  var editAddressName = function editAddressName(event, idx) {
    address[idx][2] = event.target.value;
    setAddress(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(address));
  };

  var deleteAddress = function deleteAddress(idx) {
    address.splice(idx, 1);
    setAddress(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(address));
  };

  var setAddressGeo = function setAddressGeo(geo, idx) {
    address[idx][1] = geo;
    setAddress(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(address));
  };

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.info : ''),
      info = _useState11[0],
      setInfo = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client ? data.client.image : ''),
      preview = _useState12[0],
      setPreview = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(undefined),
      image = _useState13[0],
      setImage = _useState13[1];

  var handleChangeImage = function handleChangeImage(event) {
    if (event.target.files[0].size / 1024 / 1024 < 20) {
      setImage(event.target.files[0]);
      setPreview(URL.createObjectURL(event.target.files[0]));
    } else {
      showSnackBar('Файл слишком большой');
    }
  };

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(undefined),
      patent = _useState14[0],
      setPatent = _useState14[1];

  var handleChangePatent = function handleChangePatent(event) {
    if (event.target.files[0].size / 1024 / 1024 < 20) {
      setPatent(event.target.files[0]);
    } else {
      showSnackBar('Файл слишком большой');
    }
  };

  var patentUrl = data.client ? data.client.patent : '';
  var patentRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(undefined),
      passport = _useState15[0],
      setPassport = _useState15[1];

  var handleChangePassport = function handleChangePassport(event) {
    if (event.target.files[0].size / 1024 / 1024 < 20) {
      setPassport(event.target.files[0]);
    } else {
      showSnackBar('Файл слишком большой');
    }
  };

  var passportUrl = data.client ? data.client.passport : '';
  var passportRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);

  var _useState16 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(undefined),
      certificate = _useState16[0],
      setCertificate = _useState16[1];

  var handleChangeCertificate = function handleChangeCertificate(event) {
    if (event.target.files[0].size / 1024 / 1024 < 20) {
      setCertificate(event.target.files[0]);
    } else {
      showSnackBar('Файл слишком большой');
    }
  };

  var certificateUrl = data.client ? data.client.certificate : '';
  var certificateRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(null);
  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var logout = props.userActions.logout;

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newPass = _useState17[0],
      setNewPass = _useState17[1];

  var handleNewPass = function handleNewPass(event) {
    setNewPass(event.target.value);
  };

  var _useState18 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('password'),
      hide = _useState18[0],
      setHide = _useState18[1];

  var handleHide = function handleHide() {
    setHide(!hide);
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_28__["useRouter"])();
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
    filters: data.filterSubCategory,
    sorts: data.sortSubCategory,
    pageName: data.client ? data.client.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, data.client ? data.client.name : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: data.client ? data.client.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: preview,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_25__["urlMain"], "/client/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_25__["urlMain"], "/client/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: isMobileApp ? classes.column : classes.row,
    style: isMobileApp ? {} : {
      justifyContent: 'start',
      alignItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, data.client ? profile.role === 'admin' || profile._id === data.client.user._id ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "contained-button-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("img", {
    className: classes.media,
    src: preview,
    alt: 'Добавить',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })), type === 'торговая точка' ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
    className: classes.line,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("div", {
    className: classes.doc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "C\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E:\xA0"), certificateUrl && certificateUrl.length > 0 ? __jsx("a", {
    href: certificateUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C")) : null, "\xA0", __jsx("div", {
    className: classes.docUrl,
    style: {
      color: certificate || certificateUrl && certificateUrl.length > 0 ? '#ffb300' : 'red'
    },
    onClick: function onClick() {
      certificateRef.current.click();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, certificate || certificateUrl && certificateUrl.length > 0 ? 'Изменить' : 'Добавить')), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("div", {
    className: classes.doc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "\u041F\u0430\u0441\u043F\u043E\u0440\u0442:\xA0"), passportUrl && passportUrl.length > 0 ? __jsx("a", {
    href: passportUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C")) : null, "\xA0", __jsx("div", {
    className: classes.docUrl,
    style: {
      color: passport || passportUrl && passportUrl.length > 0 ? '#ffb300' : 'red'
    },
    onClick: function onClick() {
      passportRef.current.click();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, passport || passportUrl && passportUrl.length > 0 ? 'Изменить' : 'Добавить')), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("div", {
    className: classes.doc,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "\u041F\u0430\u0442\u0435\u043D\u0442:\xA0"), patentUrl && patentUrl.length > 0 ? __jsx("a", {
    href: patentUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C")) : null, "\xA0", __jsx("div", {
    className: classes.docUrl,
    style: {
      color: patent || patentUrl && patentUrl.length > 0 ? '#ffb300' : 'red'
    },
    onClick: function onClick() {
      patentRef.current.click();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, patent || patentUrl && patentUrl.length > 0 ? 'Изменить' : 'Добавить'))) : null), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    label: "\u0418\u043C\u044F",
    value: name,
    className: classes.input,
    onChange: function onChange(event) {
      setName(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    label: "\u041B\u043E\u0433\u0438\u043D",
    value: login,
    className: classes.input,
    onChange: function onChange(event) {
      setLogin(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
    placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    type: hide ? 'password' : 'text',
    value: newPass,
    onChange: handleNewPass,
    className: classes.input,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_19__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__["default"], {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_20___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23__["default"], {
    className: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, "\u0422\u0438\u043F \u043A\u043B\u0438\u0435\u043D\u0442\u0430"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_31__["default"], {
    value: type,
    onChange: handleType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, types.map(function (element) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30__["default"], {
      key: element,
      value: element,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268
      },
      __self: this
    }, element);
  }))), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.input,
    label: "\u0414\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    value: birthday,
    inputProps: {
      'aria-label': 'description'
    },
    onChange: function onChange(event) {
      return setBirthday(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.input,
    label: "\u0413\u043E\u0440\u043E\u0434",
    type: "text",
    InputLabelProps: {
      shrink: true
    },
    value: city,
    inputProps: {
      'aria-label': 'description'
    },
    onChange: function onChange(event) {
      return setCity(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), phone ? phone.map(function (element, idx) {
    return __jsx("div", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23__["default"], {
      className: classes.input,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
      placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861",
      value: element,
      className: classes.input,
      onChange: function onChange(event) {
        editPhone(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_19__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__["default"], {
        onClick: function onClick() {
          deletePhone(idx);
        },
        "aria-label": "toggle password visibility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    })));
  }) : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              addPhone();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }), address ? address.map(function (element, idx) {
    return __jsx("div", {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, type === 'торговая точка' ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23__["default"], {
      className: classes.input,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340
      },
      __self: this
    }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
      placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430",
      value: element[2],
      className: classes.input,
      onChange: function onChange(event) {
        editAddressName(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_19__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_18__["default"], {
        onClick: function onClick() {
          deleteAddress(idx);
        },
        "aria-label": "toggle password visibility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_17___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341
      },
      __self: this
    })) : null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23__["default"], {
      className: classes.input,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_24__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367
      },
      __self: this
    }, "\u0410\u0434\u0440\u0435\u0441", type === 'торговая точка' ? ' магазина' : ''), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
      placeholder: "\u0410\u0434\u0440\u0435\u0441",
      value: element[0],
      className: classes.input,
      onChange: function onChange(event) {
        editAddress(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368
      },
      __self: this
    })), __jsx("div", {
      className: classes.geo,
      style: {
        color: element[1] ? '#ffb300' : 'red'
      },
      onClick: function onClick() {
        setMiniDialog('Геолокация', __jsx(_components_dialog_Geo__WEBPACK_IMPORTED_MODULE_27__["default"], {
          change: true,
          geo: element[1],
          setAddressGeo: setAddressGeo,
          idx: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          },
          __self: this
        }), true);
        showMiniDialog(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378
      },
      __self: this
    }, element[1] ? 'Изменить геолокацию' : 'Задайте геолокацию'));
  }) : __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              addAddress();

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    label: "email",
    value: email,
    className: classes.input,
    onChange: function onChange(event) {
      setEmail(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_22__["default"], {
    multiline: true,
    label: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    value: info,
    className: classes.input,
    onChange: function onChange(event) {
      setInfo(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var editElement, action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              editElement = {
                _id: data.client.user._id
              };
              if (image !== undefined) editElement.image = image;
              if (passport !== undefined) editElement.passport = passport;
              if (patent !== undefined) editElement.patent = patent;
              if (certificate !== undefined) editElement.certificate = certificate;
              if (name.length > 0 && name !== data.client.name) editElement.name = name;
              editElement.address = address;
              if (email.length > 0 && email !== data.client.email) editElement.email = email;
              if (login.length > 0 && data.client.user.login !== login) editElement.login = login;
              editElement.phone = phone;
              if (info.length > 0 && info !== data.client.info) editElement.info = info;
              if (city.length > 0 && city !== data.client.city) editElement.city = city;
              if (type && type.length > 0 && type !== data.client.type) editElement.type = type;
              if (birthday && birthday !== data.client.birthday) editElement.birthday = birthday;
              if (newPass.length > 0) editElement.newPass = newPass;

              action =
              /*#__PURE__*/
              function () {
                var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_8__["setClient"])(editElement);

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
                  lineNumber: 439
                },
                __self: this
              }));
              showMiniDialog(true);

            case 18:
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
      lineNumber: 420
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_8__["onoffClient"])([data.client._id]);

                        case 2:
                          setStatus(status === 'active' ? 'deactive' : 'active');

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
                  lineNumber: 450
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
      lineNumber: 445
    },
    __self: this
  }, status === 'active' ? 'Отключить' : 'Включить') : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: function onClick() {
      var action =
      /*#__PURE__*/
      function () {
        var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  logout(true);

                case 1:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function action() {
          return _ref7.apply(this, arguments);
        };
      }();

      setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_26__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 460
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456
    },
    __self: this
  }, "\u0412\u044B\u0439\u0442\u0438")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, __jsx("img", {
    className: classes.media,
    src: preview,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }), ['admin', 'организация', 'менеджер'].includes(profile.role) && certificateUrl && certificateUrl.length > 0 ? __jsx("a", {
    href: certificateUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: this
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442")) : null, ['admin', 'организация', 'менеджер'].includes(profile.role) && passportUrl && passportUrl.length > 0 ? __jsx("a", {
    href: passportUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0430\u0441\u043F\u043E\u0440\u0442")) : null, ['admin', 'организация', 'менеджер'].includes(profile.role) && patentUrl && patentUrl.length > 0 ? __jsx("a", {
    href: patentUrl,
    download: true,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498
    },
    __self: this
  }, __jsx("div", {
    className: classes.docUrl,
    style: {
      color: 'indigo'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499
    },
    __self: this
  }, "\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0430\u0442\u0435\u043D\u0442")) : null), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506
    },
    __self: this
  }, __jsx("div", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507
    },
    __self: this
  }, name), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 510
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }, "\u0410\u0434\u0440\u0435\u0441:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  }, address ? address.map(function (element, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classes.value,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517
      },
      __self: this
    }, element[1]), __jsx("div", {
      className: classes.value,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520
      },
      __self: this
    }, element[0]), __jsx("div", {
      className: classes.geo,
      style: {
        color: element[1] ? '#ffb300' : 'red'
      },
      onClick: function onClick() {
        setMiniDialog('Геолокация', __jsx(_components_dialog_Geo__WEBPACK_IMPORTED_MODULE_27__["default"], {
          geo: element[1],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 524
          },
          __self: this
        }), true);
        showMiniDialog(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523
      },
      __self: this
    }, element[1] ? 'Посмотреть геолокацию' : 'Геолокация не задана'));
  }) : null)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, "E-mail:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542
    },
    __self: this
  }, email)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 547
    },
    __self: this
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550
    },
    __self: this
  }, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, phone ? phone.map(function (element, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
      className: classes.value,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554
      },
      __self: this
    }, element));
  }) : null))), __jsx("div", {
    className: classes.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 562
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
      lineNumber: 572
    },
    __self: this
  }), __jsx("input", {
    ref: passportRef,
    style: {
      display: 'none'
    },
    id: "input-passport",
    type: "file",
    onChange: handleChangePassport,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }), __jsx("input", {
    ref: certificateRef,
    style: {
      display: 'none'
    },
    id: "input-certificate",
    type: "file",
    onChange: handleChangeCertificate,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }), __jsx("input", {
    ref: patentRef,
    style: {
      display: 'none'
    },
    id: "input-patent",
    type: "file",
    onChange: handleChangePatent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593
    },
    __self: this
  }));
});

Client.getInitialProps =
/*#__PURE__*/
function () {
  var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_8__["getClient"])({
              _id: ctx.query.id
            });

          case 2:
            _context8.t0 = _context8.sent;
            return _context8.abrupt("return", {
              data: _context8.t0
            });

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function (_x) {
    return _ref8.apply(this, arguments);
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_15__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_16__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_32__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Client));

/***/ })

})
//# sourceMappingURL=[id].js.812c626c68b603ce8420.hot-update.js.map