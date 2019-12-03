webpackHotUpdate("static\\development\\pages\\contact.js",{

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
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "./node_modules/@material-ui/icons/ViewList.js");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Whatshot */ "./node_modules/@material-ui/icons/Whatshot.js");
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Info */ "./node_modules/@material-ui/icons/Info.js");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Group */ "./node_modules/@material-ui/icons/Group.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Receipt */ "./node_modules/@material-ui/icons/Receipt.js");
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/LocationCity */ "./node_modules/@material-ui/icons/LocationCity.js");
/* harmony import */ var _material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ArtTrack */ "./node_modules/@material-ui/icons/ArtTrack.js");
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/FormatListNumbered */ "./node_modules/@material-ui/icons/FormatListNumbered.js");
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_23__["useRouter"])();
  return __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: variant,
    className: classes.drawer,
    open: open,
    onClose: function onClose() {
      return showDrawer(false);
    },
    classes: {
      paper: classes.drawerPaper
    }
  }, isMobileApp ? null : __jsx("div", {
    className: classes.toolbar
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__["default"], null, ['экспедитор', 'организация', 'менеджер'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/items/[id]",
    as: "/items/all"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B"
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B"
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null), ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/ads"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/ads' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0410\u043A\u0446\u0438\u0438"
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null)) : null, ['admin', 'организация', 'менеджер'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: '/clients'
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('client') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null)) : null, ['client', 'admin', 'организация', 'менеджер'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/orders"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/orders' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_16___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0417\u0430\u043A\u0430\u0437\u044B"
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null)) : null, ['admin', 'организация', 'менеджер', 'экспедитор'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/routes"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/routes' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_19___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B"
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null)) : null, ['экспедитор', 'организация', 'менеджер'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/organization/[id]",
    as: "/organization/".concat(profile.organization)
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/organizations"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null), ['admin', 'организация'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: '/employments'
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname.includes('employment') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null)) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/blog"
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/blog' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_18___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u0411\u043B\u043E\u0433"
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null)) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: '/contact'
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      background: router.pathname === '/contact' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: function onClick() {
      showDrawer(false);
    }
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14___default.a, {
    color: "inherit"
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], {
    primary: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_24__, dispatch)
  };
}

MyDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__["withStyles"])(_src_styleMUI_drawer__WEBPACK_IMPORTED_MODULE_3__["default"])(MyDrawer)));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Drawer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Drawer/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer */ "./node_modules/@material-ui/core/esm/Drawer/Drawer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Drawer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeArea.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SwipeableDrawer/SwipeableDrawer.js":
false,

/***/ "./node_modules/@material-ui/core/esm/SwipeableDrawer/index.js":
false

})
//# sourceMappingURL=contact.js.3da02bffc45b0ec5abb1.hot-update.js.map