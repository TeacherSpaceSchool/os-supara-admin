webpackHotUpdate("static\\development\\pages\\organizations.js",{

/***/ "./components/app/AppBar.js":
/*!**********************************!*\
  !*** ./components/app/AppBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "./node_modules/@material-ui/core/esm/Tooltip/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/LocalGroceryStore */ "./node_modules/@material-ui/icons/LocalGroceryStore.js");
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Star */ "./node_modules/@material-ui/icons/Star.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "./node_modules/@material-ui/icons/ExitToApp.js");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AssignmentInd */ "./node_modules/@material-ui/icons/AssignmentInd.js");
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _src_styleMUI_appbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../src/styleMUI/appbar */ "./src/styleMUI/appbar.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "./node_modules/@material-ui/icons/ArrowUpward.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "./node_modules/@material-ui/icons/ArrowDownward.js");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/SearchRounded */ "./node_modules/@material-ui/icons/SearchRounded.js");
/* harmony import */ var _material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/SortRounded */ "./node_modules/@material-ui/icons/SortRounded.js");
/* harmony import */ var _material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/FilterListRounded */ "./node_modules/@material-ui/icons/FilterListRounded.js");
/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/PermIdentity */ "./node_modules/@material-ui/icons/PermIdentity.js");
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @material-ui/core/Menu */ "./node_modules/@material-ui/core/esm/Menu/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _dialog_Sign__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../dialog/Sign */ "./components/dialog/Sign.js");
/* harmony import */ var _dialog_Confirmation__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js");



var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\AppBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;



































var MyAppBar = react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(function (props) {
  //props
  var classes = Object(_src_styleMUI_appbar__WEBPACK_IMPORTED_MODULE_20__["default"])();
  var filters = props.filters,
      sorts = props.sorts,
      pageName = props.pageName;
  var _props$app = props.app,
      drawer = _props$app.drawer,
      search = _props$app.search,
      filter = _props$app.filter,
      sort = _props$app.sort,
      isMobileApp = _props$app.isMobileApp,
      countBasket = _props$app.countBasket;
  var _props$appActions = props.appActions,
      showDrawer = _props$appActions.showDrawer,
      setSearch = _props$appActions.setSearch,
      setFilter = _props$appActions.setFilter,
      setSort = _props$appActions.setSort;
  var _props$user = props.user,
      authenticated = _props$user.authenticated,
      profile = _props$user.profile;
  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var logout = props.userActions.logout; //state

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      anchorElMobileMenu = _React$useState2[0],
      setAnchorElMobileMenu = _React$useState2[1];

  var openMobileMenu = Boolean(anchorElMobileMenu);

  var handleMobileMenu = function handleMobileMenu(event) {
    setAnchorElMobileMenu(event.currentTarget);
  };

  var handleCloseMobileMenu = function handleCloseMobileMenu() {
    setAnchorElMobileMenu(null);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      anchorElSort = _useState[0],
      setAnchorElSort = _useState[1];

  var openSort = Boolean(anchorElSort);

  var handleMenuSort = function handleMenuSort(event) {
    setAnchorElSort(event.currentTarget);
  };

  var handleCloseSort = function handleCloseSort() {
    setAnchorElSort(null);
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      anchorElProfile = _useState2[0],
      setAnchorElProfile = _useState2[1];

  var openProfile = Boolean(anchorElProfile);

  var handleMenuProfile = function handleMenuProfile(event) {
    setAnchorElProfile(event.currentTarget);
  };

  var handleCloseProfile = function handleCloseProfile() {
    setAnchorElProfile(null);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      anchorElFilter = _useState3[0],
      setAnchorElFilter = _useState3[1];

  var openFilter = Boolean(anchorElFilter);

  var handleMenuFilter = function handleMenuFilter(event) {
    setAnchorElFilter(event.currentTarget);
  };

  var handleCloseFilter = function handleCloseFilter() {
    setAnchorElFilter(null);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      openSearch = _useState4[0],
      setOpenSearch = _useState4[1];

  var handleSearch = function handleSearch(event) {
    setSearch(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_21__["getCountBasket"])();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "fixed",
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, isMobileApp ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    edge: "start",
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    onClick: function onClick() {
      showDrawer(!drawer);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })) : __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    onClick: function onClick() {
      showDrawer(!drawer);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, pageName), isMobileApp ? openSearch ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: classes.searchM,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_27__["default"], {
    className: classes.searchField,
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_28__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "aria-label": "Search",
      onClick: function onClick() {
        setSearch('');
        setOpenSearch(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": openMobileMenu ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMobileMenu,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
    id: "menu-appbar",
    anchorEl: anchorElMobileMenu,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    open: openMobileMenu,
    onClose: handleCloseMobileMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      setOpenSearch(true);
      handleCloseMobileMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), "\xA0\u041F\u043E\u0438\u0441\u043A")), filters && filters.length > 0 ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: handleMenuFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_31___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), "\xA0\u0424\u0438\u043B\u044C\u0442\u0440")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
    key: "filters2",
    id: "menu-appbar",
    anchorEl: anchorElFilter,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openFilter,
    onClose: handleCloseFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, filters.map(function (elem, idx) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      key: idx,
      style: {
        background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
      },
      onClick: function onClick() {
        setFilter(elem.value);
        handleCloseFilter();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, elem.name);
  }))] : null, sorts && sorts.length > 0 ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: handleMenuSort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), "\xA0\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
    key: "sort2",
    id: "menu-appbar",
    anchorEl: anchorElSort,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    open: openSort,
    onClose: handleCloseSort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, sorts.map(function (elem, idx) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      key: idx,
      onClick: function onClick() {
        sort === "-".concat(elem.field) ? setSort(elem.field) : setSort("-".concat(elem.field));
        /*handleCloseSort();handleCloseMobileMenu()*/
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, sort === "-".concat(elem.field) ? __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }) : sort === elem.field ? __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }) : __jsx("div", {
      style: {
        width: '24px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }), elem.name);
  }))] : null), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__["default"], {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  })))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
    id: "menu-appbar",
    anchorEl: anchorElProfile,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openProfile,
    onClose: handleCloseProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, !authenticated || profile.role === 'client' ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__["default"], {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/favorite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")))] : null, authenticated && profile.role !== 'admin' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/".concat(profile.role === 'client' ? 'client' : 'employment', "/[id]"),
    as: "/".concat(profile.role === 'client' ? 'client' : 'employment', "/").concat(profile._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      handleCloseProfile();

      var action =
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  logout(true);

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function action() {
          return _ref2.apply(this, arguments);
        };
      }();

      setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_37__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }), "\xA0\u0412\u044B\u0439\u0442\u0438")) : __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      handleCloseProfile();
      setMiniDialog('Вход', __jsx(_dialog_Sign__WEBPACK_IMPORTED_MODULE_36__["default"], {
        isMobileApp: isMobileApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }), "\xA0\u0412\u043E\u0439\u0442\u0438")))) : openSearch ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: classes.searchD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_27__["default"], {
    className: classes.searchField,
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_28__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "aria-label": "Search",
      onClick: function onClick() {
        setSearch('');
        setOpenSearch(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: this
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, filters && filters.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u0424\u0438\u043B\u044C\u0442\u0440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": openFilter ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuFilter,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_31___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
    id: "menu-appbar",
    anchorEl: anchorElFilter,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openFilter,
    onClose: handleCloseFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, filters.map(function (elem, idx) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      key: idx,
      style: {
        background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
      },
      onClick: function onClick() {
        setFilter(elem.value);
        handleCloseFilter();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351
      },
      __self: this
    }, elem.name);
  })), "\xA0") : null, sorts && sorts.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": openSort ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuSort,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, __jsx(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366
    },
    __self: this
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
    id: "menu-appbar",
    anchorEl: anchorElSort,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openSort,
    onClose: handleCloseSort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, sorts.map(function (elem, idx) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
      key: idx,
      onClick: function onClick() {
        sort === "-".concat(elem.field) ? setSort(elem.field) : setSort("-".concat(elem.field));
        handleCloseSort();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }, sort === "-".concat(elem.field) ? __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_23___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }) : sort === elem.field ? __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }) : __jsx("div", {
      style: {
        width: '24px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383
      },
      __self: this
    }), elem.name);
  })), "\xA0") : null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u041F\u043E\u0438\u0441\u043A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": openSearch ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: function onClick() {
      setOpenSearch(true);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }))), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__["default"], {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, __jsx(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_32___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  })))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_34__["default"], {
    id: "menu-appbar",
    anchorEl: anchorElProfile,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openProfile,
    onClose: handleCloseProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, !authenticated || profile.role === 'client' ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_35__["default"], {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, __jsx(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/favorite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: this
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")))] : null, authenticated && profile.role !== 'admin' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/".concat(profile.role === 'client' ? 'client' : 'employment', "/[id]"),
    as: "/".concat(profile.role === 'client' ? 'client' : 'employment', "/").concat(profile._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: this
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      handleCloseProfile();

      var action =
      /*#__PURE__*/
      function () {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  logout(true);

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));

        return function action() {
          return _ref3.apply(this, arguments);
        };
      }();

      setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_37__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 468
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }), "\xA0\u0412\u044B\u0439\u0442\u0438")) : __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_33__["default"], {
    onClick: function onClick() {
      handleCloseProfile();
      setMiniDialog('Вход', __jsx(_dialog_Sign__WEBPACK_IMPORTED_MODULE_36__["default"], {
        isMobileApp: isMobileApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 478
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481
    },
    __self: this
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }), "\xA0\u0412\u043E\u0439\u0442\u0438")))))));
});

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_19__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_18__, dispatch),
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_16__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_17__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["connect"])(mapStateToProps, mapDispatchToProps)(MyAppBar));

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
/* harmony import */ var _src_gql_ads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/gql/ads */ "./src/gql/ads.js");
/* harmony import */ var _components_app_AppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/app/AppBar */ "./components/app/AppBar.js");
/* harmony import */ var _components_app_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/app/Dialog */ "./components/app/Dialog.js");
/* harmony import */ var _components_app_SnackBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/app/SnackBar */ "./components/app/SnackBar.js");
/* harmony import */ var _components_app_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/app/Drawer */ "./components/app/Drawer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _src_gql_items__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/gql/items */ "./src/gql/items.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../scss/app.scss */ "./scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_15__);



var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\layouts\\App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













var mainWindow = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
var App = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var _props$userActions = props.userActions,
      setProfile = _props$userActions.setProfile,
      logout = _props$userActions.logout;
  var _props$user = props.user,
      profile = _props$user.profile,
      authenticated = _props$user.authenticated;
  var sorts = props.sorts,
      filters = props.filters,
      getList = props.getList,
      pageName = props.pageName; //let [ads, setAds] = useState({});

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (authenticated) setProfile();else if (!authenticated && profile.role) logout(false);
  }, [authenticated]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var favorites, basket, i;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!authenticated) {
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
              return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_11__["addFavoriteItem"])(favorites);

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
              return Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_12__["addBasket"])({
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
              _context.t0 = setAds;
              _context.next = 26;
              return Object(_src_gql_ads__WEBPACK_IMPORTED_MODULE_4__["getAds"])();

            case 26:
              _context.t1 = _context.sent.ads;
              (0, _context.t0)(_context.t1);

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, []);
  var load = props.app.load;
  /*const { data: { data }, loading } = useSubscription(
      BASKET_SUBSCRIPTION
  );
  console.log(data, loading)*/

  return __jsx("div", {
    ref: mainWindow,
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_components_app_AppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    pageName: pageName,
    sorts: sorts,
    filters: filters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_components_app_Drawer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("div", {
    className: "App-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, props.children), __jsx(_components_app_Dialog__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx(_components_app_SnackBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_13__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./redux/actions/user.js":
/*!*******************************!*\
  !*** ./redux/actions/user.js ***!
  \*******************************/
/*! exports provided: signup, signin, checkAuthenticated, setAuthenticated, logout, setProfile, getProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthenticated", function() { return checkAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthenticated", function() { return setAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfile", function() { return setProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/user */ "./redux/constants/user.js");
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/app */ "./redux/constants/app.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/singleton/client */ "./src/singleton/client.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_singleton_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/singleton/store */ "./src/singleton/store.js");




function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                   query {\n                       getStatus {\n                          role\n                          status\n                          phone\n                          organization\n                          _id\n                         }\n                   }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query {\n                        getStatus {\n                           role\n                           status\n                           phone\n                           organization\n                           _id\n                          }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($phone: String!, $password: String!) {\n                        signinuser(phone: $phone, password: $password) {\n                           role\n                           status\n                           phone\n                           organization\n                           _id\n                        }\n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($phone: String!, $password: String!) {\n                        signupuser(phone: $phone, password: $password) {\n                           role\n                           status\n                           phone\n                           organization\n                           _id\n                        }\n                    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









function signup(payload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var client, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__["SingletonApolloClient"]().getClient();
                _context.next = 4;
                return client.mutate({
                  variables: payload,
                  mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject())
                });

              case 4:
                result = _context.sent;

                if (!(result.data.signupuser.role === 'Проверьте данные')) {
                  _context.next = 10;
                  break;
                }

                _context.next = 8;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 8:
                _context.next = 15;
                break;

              case 10:
                _context.next = 12;
                return dispatch({
                  type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_4__["SHOW_MINI_DIALOG"],
                  payload: false
                });

              case 12:
                _context.next = 14;
                return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');

              case 14:
                /*
                await dispatch({type: AUTHENTICATED});
                await dispatch({
                    type: SET_PROFILE,
                    payload: result.data.signupuser
                })*/
                window.location.reload();

              case 15:
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](0);
                dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 17]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
}
function signin(payload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var client, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__["SingletonApolloClient"]().getClient();
                _context2.next = 4;
                return client.mutate({
                  variables: payload,
                  mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject2())
                });

              case 4:
                result = _context2.sent;

                if (!(result.data.signinuser.role === 'Проверьте данные')) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 8;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 8:
                _context2.next = 15;
                break;

              case 10:
                _context2.next = 12;
                return dispatch({
                  type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_4__["SHOW_MINI_DIALOG"],
                  payload: false
                });

              case 12:
                _context2.next = 14;
                return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');

              case 14:
                window.location.reload();
                /*
                await dispatch({type: AUTHENTICATED});
                await dispatch({
                    type: SET_PROFILE,
                    payload: result.data.signinuser
                })*/

              case 15:
                _context2.next = 22;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                _context2.next = 22;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["ERROR_AUTHENTICATED"],
                  payload: true
                });

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 17]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}
function checkAuthenticated() {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                try {
                  if (js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('jwt')) {
                    dispatch({
                      type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["AUTHENTICATED"]
                    });
                  } else {
                    dispatch({
                      type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["UNAUTHENTICATED"]
                    });
                  }
                } catch (error) {
                  dispatch({
                    type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["UNAUTHENTICATED"]
                  });
                }

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
}
function setAuthenticated(auth) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["SET_AUTH"],
    payload: auth
  };
}
function logout(reload) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["UNAUTHENTICATED"]
                });

              case 2:
                if (!reload) {
                  _context4.next = 5;
                  break;
                }

                _context4.next = 5;
                return next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push('/');

              case 5:
                _context4.next = 7;
                return js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('jwt');

              case 7:
                _context4.next = 9;
                return dispatch({
                  type: _constants_app__WEBPACK_IMPORTED_MODULE_5__["SET_COUNT_BASKET"],
                  payload: 0
                });

              case 9:
                _context4.next = 11;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["SET_PROFILE"],
                  payload: {}
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
}
function setProfile() {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(dispatch) {
        var client, result;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__["SingletonApolloClient"]().getClient();
                _context5.next = 4;
                return client.query({
                  query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject3())
                });

              case 4:
                result = _context5.sent;
                _context5.next = 7;
                return dispatch({
                  type: _constants_user__WEBPACK_IMPORTED_MODULE_3__["SET_PROFILE"],
                  payload: result.data.getStatus
                });

              case 7:
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                console.error(_context5.t0);

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 9]]);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
}
function getProfile() {
  return _getProfile.apply(this, arguments);
}

function _getProfile() {
  _getProfile = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var client, result;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_8__["SingletonApolloClient"]().getClient();
            _context6.next = 4;
            return client.query({
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_7__["gql"])(_templateObject4())
            });

          case 4:
            result = _context6.sent;
            return _context6.abrupt("return", result.data.getStatus);

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _getProfile.apply(this, arguments);
}

/***/ })

})
//# sourceMappingURL=organizations.js.0eddce6d5941b03f8d36.hot-update.js.map