webpackHotUpdate("static\\development\\pages\\employment\\[id].js",{

/***/ "./pages/employment/[id].js":
/*!**********************************!*\
  !*** ./pages/employment/[id].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_gql_employment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/gql/employment */ "./src/gql/employment.js");
/* harmony import */ var _src_styleMUI_employment_employment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/styleMUI/employment/employment */ "./src/styleMUI/employment/employment.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _src_gql_organization__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../src/gql/organization */ "./src/gql/organization.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");



var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\employment\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



























var Client = react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(function (props) {
  var profile = props.user.profile;
  var classes = Object(_src_styleMUI_employment_employment__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var data = props.data;
  var isMobileApp = props.app.isMobileApp;
  var showSnackBar = props.snackbarActions.showSnackBar;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(data.employment !== null ? data.employment.user.status : ''),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(data.employment !== null ? data.employment.name : ''),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(data.employment !== null ? data.employment.email : ''),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(data.employment !== null ? data.employment.user.phone : ''),
      phone = _useState4[0],
      setPhone = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(data.employment !== null ? data.employment.organization : {}),
      organization = _useState5[0],
      setOrganization = _useState5[1];

  var handleOrganization = function handleOrganization(event) {
    setOrganization({
      _id: event.target.value,
      name: event.target.name
    });
  };

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(data.employment !== null ? data.employment.user.role : ''),
      role = _useState6[0],
      setRole = _useState6[1];

  var handleRole = function handleRole(event) {
    setRole(event.target.value);
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      password = _useState7[0],
      setPassword = _useState7[1];

  var handlePassword = function handlePassword(event) {
    setPassword(event.target.value);
  };

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('password'),
      hide = _useState8[0],
      setHide = _useState8[1];

  var handleHide = function handleHide() {
    setHide(!hide);
  };

  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_19__["useRouter"])();
  var logout = props.userActions.logout;
  var roles = ['организация', 'менеджер', 'экспедитор'];
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_5__["default"], {
    filters: data.filterSubCategory,
    sorts: data.sortSubCategory,
    pageName: data.employment !== null ? router.query.id === 'new' ? 'Добавить' : data.employment.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, data.employment !== null ? router.query.id === 'new' ? 'Добавить' : data.employment.name : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: data.employment !== null ? router.query.id === 'new' ? 'Добавить' : data.employment.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "http://".concat("localhost", "/static/512x512.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "http://".concat("localhost", "/employment/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "http://".concat("localhost", "/employment/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: isMobileApp ? classes.column : classes.row,
    style: isMobileApp ? {} : {
      justifyContent: 'start',
      alignItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, data.employment !== null ? profile.role === 'admin' || profile.role === 'организация' || profile._id === data.employment.user._id ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
      lineNumber: 78
    },
    __self: this
  }), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__["default"], {
    placeholder: router.query.id === 'new' ? 'Пароль' : 'Новый пароль',
    type: hide ? 'password' : 'text',
    value: password,
    onChange: handlePassword,
    className: classes.input,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_16__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__["default"], {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_18___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_27__["default"], {
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
      lineNumber: 101
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_27__["default"], {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861",
    value: phone,
    className: classes.input,
    onChange: function onChange(event) {
      setPhone(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), router.query.id === 'new' && profile.role === 'admin' ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_23__["default"], {
    value: organization._id,
    onChange: handleOrganization,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, data.organizations.map(function (element) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: element._id,
      value: element._id,
      ola: element.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, element.name);
  }))) : router.query.id !== 'new' ? __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_27__["default"], {
    label: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
    value: organization.name,
    className: classes.input,
    inputProps: {
      'aria-label': 'description',
      readOnly: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }) : null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_22__["default"], {
    className: classes.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "\u0420\u043E\u043B\u044C"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_23__["default"], {
    value: role,
    onChange: handleRole,
    inputProps: {
      'aria-label': 'description',
      readOnly: profile._id === data.employment.user._id || !['admin', 'организация'].includes(profile.role)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, roles.map(function (element) {
    //if(element!=='организация'||profile.role=='admin')
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_21__["default"], {
      key: element,
      value: element,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, element);
  }))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, router.query.id === 'new' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
              if (name.length > 0 && email.length > 0 && password.length > 0 && phone.length > 0 && role.length > 0 && organization._id !== undefined) {
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
                            return Object(_src_gql_employment__WEBPACK_IMPORTED_MODULE_7__["addEmployment"])({
                              name: name,
                              email: email,
                              phone: phone,
                              password: password,
                              role: role,
                              organization: organization._id
                            });

                          case 2:
                            next_router__WEBPACK_IMPORTED_MODULE_19___default.a.push('/employments');

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

                setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                  action: action,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
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
      lineNumber: 161
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C") : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
                _id: data.employment._id
              };
              if (name.length > 0 && name !== data.employment.name) editElement.name = name;
              if (phone.length > 0 && phone !== data.employment.phone) editElement.phone = phone;
              if (email.length > 0 && email !== data.employment.email) editElement.email = email;
              if (password.length > 0) editElement.newPass = password;
              if (role.length > 0 && role !== data.employment.role) editElement.role = role;

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
                          return Object(_src_gql_employment__WEBPACK_IMPORTED_MODULE_7__["setEmployments"])(editElement);

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

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 194
                },
                __self: this
              }));
              showMiniDialog(true);

            case 9:
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
      lineNumber: 184
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), profile._id !== data.employment.user._id && ['admin', 'организация'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
                          return Object(_src_gql_employment__WEBPACK_IMPORTED_MODULE_7__["onoffEmployment"])([data.employment._id]);

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

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 208
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
      lineNumber: 203
    },
    __self: this
  }, status === 'active' ? 'Отключить' : 'Включить'), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
                          return Object(_src_gql_employment__WEBPACK_IMPORTED_MODULE_7__["deleteEmployment"])([data.employment._id]);

                        case 2:
                          next_router__WEBPACK_IMPORTED_MODULE_19___default.a.push('/employments');

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

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 218
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
      lineNumber: 213
    },
    __self: this
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")) : null, profile._id === data.employment.user._id ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref10 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          logout(true);

                        case 1:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9);
                }));

                return function action() {
                  return _ref10.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 233
                },
                __self: this
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, "\u0412\u044B\u0439\u0442\u0438") : null)))) : 'Ничего не найдено' : 'Ничего не найдено')));
});

Client.getInitialProps =
/*#__PURE__*/
function () {
  var _ref11 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            if (!['организация', 'менеджер', 'admin', 'экспедитор'].includes(ctx.store.getState().user.profile.role)) if (ctx.res) {
              ctx.res.writeHead(302, {
                Location: '/'
              });
              ctx.res.end();
            } else next_router__WEBPACK_IMPORTED_MODULE_19___default.a.push('/');
            _context11.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"];
            _context11.t1 = {};

            if (!(ctx.query.id !== 'new')) {
              _context11.next = 9;
              break;
            }

            _context11.next = 6;
            return Object(_src_gql_employment__WEBPACK_IMPORTED_MODULE_7__["getEmployment"])({
              _id: ctx.query.id
            });

          case 6:
            _context11.t2 = _context11.sent;
            _context11.next = 10;
            break;

          case 9:
            _context11.t2 = {
              employment: {
                name: '',
                email: '',
                user: {
                  phone: '',
                  status: '',
                  role: ''
                },
                organization: {
                  _id: ''
                }
              }
            };

          case 10:
            _context11.t3 = _context11.t2;
            _context11.next = 13;
            return Object(_src_gql_organization__WEBPACK_IMPORTED_MODULE_24__["getOrganizations"])({
              search: '',
              sort: 'name',
              filter: ''
            });

          case 13:
            _context11.t4 = _context11.sent;
            _context11.t5 = (0, _context11.t0)(_context11.t1, _context11.t3, _context11.t4);
            return _context11.abrupt("return", {
              data: _context11.t5
            });

          case 16:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function (_x) {
    return _ref11.apply(this, arguments);
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_14__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_26__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_25__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Client));

/***/ }),

/***/ "./src/styleMUI/employment/employment.js":
/*!***********************************************!*\
  !*** ./src/styleMUI/employment/employment.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  page: {
    margin: '20px'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    marginBottom: 10,
    width: '100%'
  }
}));

/***/ })

})
//# sourceMappingURL=[id].js.1c328e1c3320bf8e40da.hot-update.js.map