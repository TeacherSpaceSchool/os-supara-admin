webpackHotUpdate("static\\development\\pages\\items\\[id].js",{

/***/ "./components/app/Drawer.js":
/*!**********************************!*\
  !*** ./components/app/Drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _src_styleMUI_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/styleMUI/drawer */ "./src/styleMUI/drawer.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/SwipeableDrawer */ "./node_modules/@material-ui/core/esm/SwipeableDrawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "./node_modules/@material-ui/icons/ViewList.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Whatshot */ "./node_modules/@material-ui/icons/Whatshot.js");
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Loyalty */ "./node_modules/@material-ui/icons/Loyalty.js");
/* harmony import */ var _material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Group */ "./node_modules/@material-ui/icons/Group.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Receipt */ "./node_modules/@material-ui/icons/Receipt.js");
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/LocationCity */ "./node_modules/@material-ui/icons/LocationCity.js");
/* harmony import */ var _material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ArtTrack */ "./node_modules/@material-ui/icons/ArtTrack.js");
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Money */ "./node_modules/@material-ui/icons/Money.js");
/* harmony import */ var _material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/FormatListNumbered */ "./node_modules/@material-ui/icons/FormatListNumbered.js");
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/UnfoldMore */ "./node_modules/@material-ui/icons/UnfoldMore.js");
/* harmony import */ var _material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_UnfoldLess__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/UnfoldLess */ "./node_modules/@material-ui/icons/UnfoldLess.js");
/* harmony import */ var _material_ui_icons_UnfoldLess__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_UnfoldLess__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\Drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





























var MyDrawer = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var classes = props.classes;
  var _props$app = props.app,
      drawer = _props$app.drawer,
      isMobileApp = _props$app.isMobileApp;
  var _props$user = props.user,
      profile = _props$user.profile,
      authenticated = _props$user.authenticated;
  var showDrawer = props.appActions.showDrawer;
  var variant = isMobileApp ? 'temporary' : 'permanent';
  var open = isMobileApp ? drawer : true;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_27__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      uncoverBonus = _useState[0],
      setUncoverBonus = _useState[1];

  return __jsx(_material_ui_core_SwipeableDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onOpen: function onOpen() {
      return showDrawer(true);
    },
    disableDiscovery: true,
    variant: variant,
    className: classes.drawer,
    open: open,
    onClose: function onClose() {
      return showDrawer(false);
    },
    classes: {
      paper: classes.drawerPaper
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, isMobileApp ? null : __jsx("div", {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, ['экспедитор', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/items/[id]",
    as: "/items/all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), ['admin', 'client', 'организация', 'менеджер', 'агент'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('bonus') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_20___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0411\u043E\u043D\u0443\u0441\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, uncoverBonus ? __jsx(_material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_22___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }) : __jsx(_material_ui_icons_UnfoldLess__WEBPACK_IMPORTED_MODULE_23___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), uncoverBonus ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/bonus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginLeft: 16,
      background: router.pathname === '/bonus' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: ['организация', 'менеджер', 'агент'].includes(profile.role) ? 'Бонусы компании' : 'Бонусы компаний',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), ['admin', 'client', 'организация', 'менеджер'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/bonusclient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginLeft: 16,
      background: router.pathname === '/bonusclient' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: ['admin', 'организация', 'менеджер', 'агент'].includes(profile.role) ? 'Бонусы клиентов' : 'Мои бонусы',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })) : null) : null) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/ads",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/ads' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0410\u043A\u0446\u0438\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })) : null, ['admin', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: '/clients',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('client') && router.pathname !== '/bonusclient' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })) : null, ['client', 'admin', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/orders' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0417\u0430\u043A\u0430\u0437\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  })) : null, ['admin', 'организация', 'менеджер', 'экспедитор'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/routes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/routes' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_21___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  })) : null, ['экспедитор', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/organization/[id]",
    as: "/organization/".concat(profile.organization),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/organizations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }), ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/brands",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('brand') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, __jsx(_material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_14___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0411\u0440\u0435\u043D\u0434\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })) : null, ['admin', 'организация'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: '/employments',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('employment') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  })) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/blog' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_19___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0411\u043B\u043E\u0433",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: '/contact',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/contact' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  })));
});

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_4__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_28__, dispatch)
  };
}

MyDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_25___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_24__["withStyles"])(_src_styleMUI_drawer__WEBPACK_IMPORTED_MODULE_3__["default"])(MyDrawer)));

/***/ }),

/***/ "./layouts/App.js":
/*!************************!*\
  !*** ./layouts/App.js ***!
  \************************/
/*! exports provided: mainWindow, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainWindow", function() { return mainWindow; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_app_AppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app/AppBar */ "./components/app/AppBar.js");
/* harmony import */ var _components_app_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/app/Dialog */ "./components/app/Dialog.js");
/* harmony import */ var _components_app_SnackBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/app/SnackBar */ "./components/app/SnackBar.js");
/* harmony import */ var _components_app_Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/app/Drawer */ "./components/app/Drawer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _src_gql_items__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/gql/items */ "./src/gql/items.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _redux_actions_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/actions/pagination */ "./redux/actions/pagination.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../scss/app.scss */ "./scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-bottom-scroll-listener */ "./node_modules/react-bottom-scroll-listener/dist/index.es.js");



var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\layouts\\App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

















var mainWindow = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
var App = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var _props$userActions = props.userActions,
      setProfile = _props$userActions.setProfile,
      logout = _props$userActions.logout;
  var _props$paginationActi = props.paginationActions,
      next = _props$paginationActi.next,
      disable = _props$paginationActi.disable;
  var showLoad = props.appActions.showLoad;
  var _props$user = props.user,
      profile = _props$user.profile,
      authenticated = _props$user.authenticated;
  var _props$pagination = props.pagination,
      work = _props$pagination.work,
      count = _props$pagination.count;
  var sorts = props.sorts,
      filters = props.filters,
      getList = props.getList,
      pageName = props.pageName,
      dates = props.dates;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_17__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (authenticated) setProfile();else if (!authenticated && profile.role) logout(false);
  }, [authenticated]);
  next_router__WEBPACK_IMPORTED_MODULE_17___default.a.events.on('routeChangeStart', function (err, url) {
    if (!router.pathname.includes(url)) showLoad(true);

    if (err.cancelled) {
      showLoad(false);
    }
  });
  var containerRef = Object(react_bottom_scroll_listener__WEBPACK_IMPORTED_MODULE_18__["useBottomScrollListener"])(function () {
    if (work) next();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var favorites, basket, i;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(authenticated && profile.role === 'client')) {
                _context.next = 23;
                break;
              }

              if (!(localStorage.favorites && localStorage.favorites !== '[]')) {
                _context.next = 10;
                break;
              }

              favorites = JSON.parse(localStorage.favorites);
              favorites = favorites.map(function (element) {
                return element._id;
              });
              _context.next = 6;
              return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_10__["addFavoriteItem"])(favorites);

            case 6:
              localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()([]);

              if (!(getList !== undefined)) {
                _context.next = 10;
                break;
              }

              _context.next = 10;
              return getList();

            case 10:
              if (!(localStorage.basket && localStorage.basket !== '[]')) {
                _context.next = 23;
                break;
              }

              basket = JSON.parse(localStorage.basket);
              i = 0;

            case 13:
              if (!(i < basket.length)) {
                _context.next = 19;
                break;
              }

              _context.next = 16;
              return Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_11__["addBasket"])({
                item: basket[i].item._id,
                count: basket[i].count
              });

            case 16:
              i++;
              _context.next = 13;
              break;

            case 19:
              localStorage.basket = '[]';

              if (!(getList !== undefined)) {
                _context.next = 23;
                break;
              }

              _context.next = 23;
              return getList();

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  var load = props.app.load;
  return __jsx("div", {
    ref: mainWindow,
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_components_app_Drawer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_components_app_AppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dates: dates,
    pageName: pageName,
    sorts: sorts,
    filters: filters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("div", {
    ref: containerRef,
    className: "App-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, props.children), __jsx(_components_app_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_components_app_SnackBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), load ? __jsx("div", {
    className: "load",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })) : null);
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app,
    pagination: state.pagination
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_13__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_14__, dispatch),
    paginationActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_pagination__WEBPACK_IMPORTED_MODULE_12__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./pages/items/[id].js":
/*!*****************************!*\
  !*** ./pages/items/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_styleMUI_item_itemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/styleMUI/item/itemList */ "./src/styleMUI/item/itemList.js");
/* harmony import */ var _components_items_CardItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/items/CardItem */ "./components/items/CardItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_gql_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/gql/items */ "./src/gql/items.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_items_CardItemPlaceholder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/items/CardItemPlaceholder */ "./components/items/CardItemPlaceholder.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/index.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\items\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;











var height = 377;





var Items = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_item_itemList__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var data = props.data;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.items),
      list = _useState[0],
      setList = _useState[1];

  var _props$app = props.app,
      search = _props$app.search,
      filter = _props$app.filter,
      sort = _props$app.sort;
  var profile = props.user.profile;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = setList;
              _context.next = 3;
              return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_9__["getItems"])({
                subCategory: router.query.id,
                search: search,
                sort: sort,
                filter: filter
              });

            case 3:
              _context.t1 = _context.sent.items;
              (0, _context.t0)(_context.t1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [filter, sort, search]);
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    filters: data.filterItem,
    sorts: data.sortItem,
    pageName: router.query.id === 'all' ? 'Все' : data.subCategory !== null ? data.subCategory.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, router.query.id === 'all' ? 'Все' : data.subCategory !== null ? data.subCategory.name : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: router.query.id === 'all' ? 'Все' : data.subCategory !== null ? data.subCategory.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_12__["urlMain"], "/static/512x512.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_12__["urlMain"], "/items/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_12__["urlMain"], "/items/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__["default"], {
    style: {
      margin: 20
    },
    "aria-label": "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\u0422\u043E\u0432\u0430\u0440\u044B"), data.subCategory ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/subcategory/[id]",
    as: "/subcategory/".concat(data.subCategory.category._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, data.subCategory.category.name) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/subcategory/[id]",
    as: "/subcategory/all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "\u0412\u0441\u0435 \u043F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), data.subCategory ? __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, data.subCategory.name) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\u0412\u0441\u0435 \u0442\u043E\u0432\u0430\u0440\u044B")), __jsx("div", {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, list ? list.map(function (element) {
    return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_13___default.a, {
      scrollContainer: '.App-body',
      key: element._id,
      height: height,
      offset: [height, 0],
      debounce: 50,
      placeholder: __jsx(_components_items_CardItemPlaceholder__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx(_components_items_CardItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setList: setList,
      key: element._id,
      element: element,
      subCategory: router.query.id === 'all' ? 'all' : data.subCategory._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }));
  }) : null), profile.role === 'admin' || profile.role === 'организация' || profile.role === 'менеджер' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/item/[id]",
    as: "/item/new",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "primary",
    "aria-label": "add",
    className: classes.fab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }))) : null);
});

Items.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_9__["getItems"])({
              subCategory: ctx.query.id,
              search: '',
              sort: '-createdAt',
              filter: ''
            });

          case 2:
            _context2.t0 = _context2.sent;
            return _context2.abrupt("return", {
              data: _context2.t0
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Items));

/***/ })

})
//# sourceMappingURL=[id].js.c669a503918846d3c7b9.hot-update.js.map