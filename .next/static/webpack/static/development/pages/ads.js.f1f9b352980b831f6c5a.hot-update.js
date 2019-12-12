webpackHotUpdate("static\\development\\pages\\ads.js",{

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
  var classes = props.classes,
      category = props.category,
      subcategory = props.subcategory;
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
      lineNumber: 54
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, ['экспедитор', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/items/[id]",
    as: "/items/all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
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
      lineNumber: 61
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
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
  }))), category ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/subcategory/[id]",
    as: "/subcategory/".concat(category._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginLeft: 16,
      background: '#f5f5f5'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: category.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }))), subcategory ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/items/[id]",
    as: "/items/".concat(subcategory._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginLeft: 32,
      background: '#f5f5f5'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: subcategory.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })))) : null) : null), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
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
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_material_ui_icons_Money__WEBPACK_IMPORTED_MODULE_20___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0411\u043E\u043D\u0443\u0441\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, uncoverBonus ? __jsx(_material_ui_icons_UnfoldMore__WEBPACK_IMPORTED_MODULE_22___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }) : __jsx(_material_ui_icons_UnfoldLess__WEBPACK_IMPORTED_MODULE_23___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), uncoverBonus ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/bonus",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginLeft: 16,
      background: router.pathname === '/bonus' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: ['организация', 'менеджер', 'агент'].includes(profile.role) ? 'Бонусы компании' : 'Бонусы компаний',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), ['admin', 'client', 'организация', 'менеджер'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/bonusclient",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      marginLeft: 16,
      background: router.pathname === '/bonusclient' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      setUncoverBonus(!uncoverBonus);
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: ['admin', 'организация', 'менеджер', 'агент'].includes(profile.role) ? 'Бонусы клиентов' : 'Мои бонусы',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })) : null) : null) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/ads",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/ads' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0410\u043A\u0446\u0438\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  })) : null, ['admin', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: '/clients',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('client') && router.pathname !== '/bonusclient' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  })) : null, ['client', 'admin', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/orders' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0417\u0430\u043A\u0430\u0437\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })) : null, ['admin', 'организация', 'менеджер', 'экспедитор'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/routes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/routes' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_21___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })) : null, ['экспедитор', 'организация', 'менеджер', 'агент'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/organization/[id]",
    as: "/organization/".concat(profile.organization),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/organizations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_18___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/brands",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('brand') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(_material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_14___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0411\u0440\u0435\u043D\u0434\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  })) : null, ['admin', 'организация'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: '/employments',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('employment') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_16___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  })) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/blog' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }, __jsx(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_19___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0411\u043B\u043E\u0433",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_26___default.a, {
    href: '/contact',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/contact' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
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

/***/ })

})
//# sourceMappingURL=ads.js.f1f9b352980b831f6c5a.hot-update.js.map