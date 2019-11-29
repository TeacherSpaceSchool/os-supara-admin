module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\routes.js": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/app/AppBar.js":
/*!**********************************!*\
  !*** ./components/app/AppBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LocalGroceryStore */ "@material-ui/icons/LocalGroceryStore");
/* harmony import */ var _material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Star */ "@material-ui/icons/Star");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AssignmentInd */ "@material-ui/icons/AssignmentInd");
/* harmony import */ var _material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _src_styleMUI_appbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/styleMUI/appbar */ "./src/styleMUI/appbar.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "@material-ui/icons/ArrowUpward");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "@material-ui/icons/ArrowDownward");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "@material-ui/icons/Cancel");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "@material-ui/core/InputAdornment");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/icons/SearchRounded */ "@material-ui/icons/SearchRounded");
/* harmony import */ var _material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/SortRounded */ "@material-ui/icons/SortRounded");
/* harmony import */ var _material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/icons/FilterListRounded */ "@material-ui/icons/FilterListRounded");
/* harmony import */ var _material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/PermIdentity */ "@material-ui/icons/PermIdentity");
/* harmony import */ var _material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_33__);
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\AppBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


































const Sign = next_dynamic__WEBPACK_IMPORTED_MODULE_32___default()(() => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../dialog/Sign */ "./components/dialog/Sign.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../dialog/Sign */ "./components/dialog/Sign.js")],
    modules: ['../dialog/Sign']
  }
});
const Confirmation = next_dynamic__WEBPACK_IMPORTED_MODULE_32___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js")],
    modules: ['../dialog/Confirmation']
  }
});
const MyAppBar = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  //props
  const classes = Object(_src_styleMUI_appbar__WEBPACK_IMPORTED_MODULE_17__["default"])();
  const {
    filters,
    sorts,
    pageName
  } = props;
  const {
    drawer,
    search,
    filter,
    sort,
    isMobileApp,
    countBasket
  } = props.app;
  const {
    showDrawer,
    setSearch,
    setFilter,
    setSort
  } = props.appActions;
  const {
    authenticated,
    profile
  } = props.user;
  const {
    setMiniDialog,
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    logout
  } = props.userActions; //state

  const [anchorElMobileMenu, setAnchorElMobileMenu] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const openMobileMenu = Boolean(anchorElMobileMenu);

  let handleMobileMenu = event => {
    setAnchorElMobileMenu(event.currentTarget);
  };

  let handleCloseMobileMenu = () => {
    setAnchorElMobileMenu(null);
  };

  const {
    0: anchorElSort,
    1: setAnchorElSort
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const openSort = Boolean(anchorElSort);

  let handleMenuSort = event => {
    setAnchorElSort(event.currentTarget);
  };

  let handleCloseSort = () => {
    setAnchorElSort(null);
  };

  const {
    0: anchorElProfile,
    1: setAnchorElProfile
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const openProfile = Boolean(anchorElProfile);

  let handleMenuProfile = event => {
    setAnchorElProfile(event.currentTarget);
  };

  let handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const {
    0: anchorElFilter,
    1: setAnchorElFilter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const openFilter = Boolean(anchorElFilter);

  let handleMenuFilter = event => {
    setAnchorElFilter(event.currentTarget);
  };

  let handleCloseFilter = () => {
    setAnchorElFilter(null);
  };

  const {
    0: openSearch,
    1: setOpenSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  let handleSearch = event => {
    setSearch(event.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    (async () => {
      Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_18__["getCountBasket"])();
    })();
  }, []);
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    position: "fixed",
    className: classes.appBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, isMobileApp ? __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    edge: "start",
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    onClick: () => {
      showDrawer(!drawer);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  })) : __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    onClick: () => {
      showDrawer(!drawer);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default.a, {
    variant: "h6",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, pageName), isMobileApp ? openSearch ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.searchM,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_24___default.a, {
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_25___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Search",
      onClick: () => {
        setSearch('');
        setOpenSearch(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": openMobileMenu ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMobileMenu,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  })), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
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
      lineNumber: 149
    },
    __self: undefined
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      setOpenSearch(true);
      handleCloseMobileMenu();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }), "\xA0\u041F\u043E\u0438\u0441\u043A")), filters && filters.length > 0 ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: handleMenuFilter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, __jsx(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_28___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }), "\xA0\u0424\u0438\u043B\u044C\u0442\u0440")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
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
      lineNumber: 177
    },
    __self: undefined
  }, filters.map((elem, idx) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    key: idx,
    style: {
      background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setFilter(elem.value);
      handleCloseFilter();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }, elem.name)))] : null, sorts && sorts.length > 0 ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: handleMenuSort,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_27___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }), "\xA0\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430")), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
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
      lineNumber: 204
    },
    __self: undefined
  }, sorts.map((elem, idx) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    key: idx,
    onClick: () => {
      sort === `-${elem.field}` ? setSort(elem.field) : setSort(`-${elem.field}`);
      /*handleCloseSort();handleCloseMobileMenu()*/
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, sort === `-${elem.field}` ? __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }) : sort === elem.field ? __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }) : __jsx("div", {
    style: {
      width: '24px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }), elem.name)))] : null), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_33___default.a, {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
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
      lineNumber: 237
    },
    __self: undefined
  }, !authenticated || profile.role === 'client' ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_33___default.a, {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, __jsx(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  }), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/favorite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")))] : null, authenticated && profile.role !== 'admin' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: `/${profile.role === 'client' ? 'client' : 'employment'}/[id]`,
    as: `/${profile.role === 'client' ? 'client' : 'employment'}/${profile._id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: undefined
  }), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      const action = async () => {
        logout();
      };

      setMiniDialog('Вы уверенны?', __jsx(Confirmation, {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: undefined
  }), "\xA0\u0412\u044B\u0439\u0442\u0438")) : __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      setMiniDialog('Вход', __jsx(Sign, {
        isMobileApp: isMobileApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }), "\xA0\u0412\u043E\u0439\u0442\u0438")))) : openSearch ? __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_21___default.a, {
    className: classes.searchD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: undefined
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_23___default.a, {
    className: classes.textField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: undefined
  }, __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_24___default.a, {
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_25___default.a, {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323
      },
      __self: undefined
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
      "aria-label": "Search",
      onClick: () => {
        setSearch('');
        setOpenSearch(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324
      },
      __self: undefined
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 325
      },
      __self: undefined
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: undefined
  }))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, filters && filters.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u0424\u0438\u043B\u044C\u0442\u0440",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": openFilter ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuFilter,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: undefined
  }, __jsx(_material_ui_icons_FilterListRounded__WEBPACK_IMPORTED_MODULE_28___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
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
      lineNumber: 345
    },
    __self: undefined
  }, filters.map((elem, idx) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    key: idx,
    style: {
      background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setFilter(elem.value);
      handleCloseFilter();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: undefined
  }, elem.name))), "\xA0") : null, sorts && sorts.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": openSort ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuSort,
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SortRounded__WEBPACK_IMPORTED_MODULE_27___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
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
      lineNumber: 377
    },
    __self: undefined
  }, sorts.map((elem, idx) => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    key: idx,
    onClick: () => {
      sort === `-${elem.field}` ? setSort(elem.field) : setSort(`-${elem.field}`);
      handleCloseSort();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: undefined
  }, sort === `-${elem.field}` ? __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_20___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: undefined
  }) : sort === elem.field ? __jsx(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_19___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: undefined
  }) : __jsx("div", {
    style: {
      width: '24px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: undefined
  }), elem.name))), "\xA0") : null, __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u041F\u043E\u0438\u0441\u043A",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": openSearch ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: () => {
      setOpenSearch(true);
    },
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398
    },
    __self: undefined
  }, __jsx(_material_ui_icons_SearchRounded__WEBPACK_IMPORTED_MODULE_26___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_6___default.a, {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: undefined
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: undefined
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_33___default.a, {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: undefined
  }, __jsx(_material_ui_icons_PermIdentity__WEBPACK_IMPORTED_MODULE_29___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: undefined
  })))), __jsx(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_31___default.a, {
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
      lineNumber: 419
    },
    __self: undefined
  }, !authenticated || profile.role === 'client' ? [__jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: undefined
  }, __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_33___default.a, {
    badgeContent: countBasket,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/basket",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: undefined
  }, __jsx(_material_ui_icons_LocalGroceryStore__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: undefined
  }), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "/favorite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: undefined
  }), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")))] : null, authenticated && profile.role !== 'admin' ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: `/${profile.role === 'client' ? 'client' : 'employment'}/[id]`,
    as: `/${profile.role === 'client' ? 'client' : 'employment'}/${profile._id}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: undefined
  }, __jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 461
    },
    __self: undefined
  }, __jsx(_material_ui_icons_AssignmentInd__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: undefined
  }), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      showDrawer(false);

      const action = async () => {
        logout();
      };

      setMiniDialog('Вы уверенны?', __jsx(Confirmation, {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 480
    },
    __self: undefined
  }), "\xA0\u0412\u044B\u0439\u0442\u0438")) : __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_30___default.a, {
    onClick: () => {
      setMiniDialog('Вход', __jsx(Sign, {
        isMobileApp: isMobileApp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 485
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 484
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: undefined
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
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_16__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_15__, dispatch),
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_13__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_14__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(MyAppBar));

/***/ }),

/***/ "./components/app/Dialog.js":
/*!**********************************!*\
  !*** ./components/app/Dialog.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\Dialog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const MyDialog = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    title,
    child,
    show
  } = props.mini_dialog;
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_1___default.a, {
    open: show,
    onClose: () => {
      showMiniDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_3___default.a, {
    onClose: () => {
      showMiniDialog(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, title), __jsx(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, child));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_5__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, mapDispatchToProps)(MyDialog));

/***/ }),

/***/ "./components/app/Drawer.js":
/*!**********************************!*\
  !*** ./components/app/Drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_styleMUI_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/styleMUI/drawer */ "./src/styleMUI/drawer.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ViewList */ "@material-ui/icons/ViewList");
/* harmony import */ var _material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Whatshot */ "@material-ui/icons/Whatshot");
/* harmony import */ var _material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Group */ "@material-ui/icons/Group");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Receipt */ "@material-ui/icons/Receipt");
/* harmony import */ var _material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/LocationCity */ "@material-ui/icons/LocationCity");
/* harmony import */ var _material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/ArtTrack */ "@material-ui/icons/ArtTrack");
/* harmony import */ var _material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/FormatListNumbered */ "@material-ui/icons/FormatListNumbered");
/* harmony import */ var _material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\Drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

























const MyDrawer = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    classes
  } = props;
  const {
    drawer,
    isMobileApp
  } = props.app;
  const {
    profile,
    authenticated
  } = props.user;
  const {
    showDrawer
  } = props.appActions;
  let variant = isMobileApp ? 'temporary' : 'permanent';
  const open = isMobileApp ? drawer : true;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_23__["useRouter"])();
  return __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: variant,
    className: classes.drawer,
    open: open,
    onClose: () => showDrawer(false),
    classes: {
      paper: classes.drawerPaper
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, isMobileApp ? null : __jsx("div", {
    className: classes.toolbar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, ['экспедитор', 'организация', 'менеджер'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/items/[id]",
    as: "/items/all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ViewList__WEBPACK_IMPORTED_MODULE_12___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/ads",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/ads' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Whatshot__WEBPACK_IMPORTED_MODULE_13___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0410\u043A\u0446\u0438\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  })) : null, ['admin', 'организация', 'менеджер'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: '/clients',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('client') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  })) : null, ['client', 'admin', 'организация', 'менеджер'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/orders",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/orders' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Receipt__WEBPACK_IMPORTED_MODULE_16___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0417\u0430\u043A\u0430\u0437\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  })) : null, ['admin', 'организация', 'менеджер', 'экспедитор'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/routes",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/routes' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, __jsx(_material_ui_icons_FormatListNumbered__WEBPACK_IMPORTED_MODULE_19___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  })) : null, ['экспедитор', 'организация', 'менеджер'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/organization/[id]",
    as: `/organization/${profile.organization}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/organizations",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx(_material_ui_icons_LocationCity__WEBPACK_IMPORTED_MODULE_17___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }), ['admin', 'организация'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: '/employments',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname.includes('employment') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_15___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  })) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: "/blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/blog' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx(_material_ui_icons_ArtTrack__WEBPACK_IMPORTED_MODULE_18___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u0411\u043B\u043E\u0433",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: undefined
  })) : null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_22___default.a, {
    href: '/contact',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    style: {
      background: router.pathname === '/contact' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_14___default.a, {
    color: "inherit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
    primary: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: undefined
  }))), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_24__, dispatch)
  };
}

MyDrawer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_20__["withStyles"])(_src_styleMUI_drawer__WEBPACK_IMPORTED_MODULE_3__["default"])(MyDrawer)));

/***/ }),

/***/ "./components/app/SnackBar.js":
/*!************************************!*\
  !*** ./components/app/SnackBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\app\\SnackBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const MyDialog = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    title,
    show
  } = props.snackbar;
  const {
    closeSnackBar
  } = props.snackbarActions;
  return __jsx(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    open: show,
    autoHideDuration: 6000,
    onClose: closeSnackBar,
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    message: __jsx("span", {
      id: "message-id",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, title),
    action: [__jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: "undo",
      color: "secondary",
      size: "small",
      onClick: closeSnackBar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  });
});

function mapStateToProps(state) {
  return {
    snackbar: state.snackbar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_5__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(MyDialog));

/***/ }),

/***/ "./components/route/CardRoute.js":
/*!***************************************!*\
  !*** ./components/route/CardRoute.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_styleMUI_route_cardRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/styleMUI/route/cardRoute */ "./src/styleMUI/route/cardRoute.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_gql_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/gql/route */ "./src/gql/route.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\route\\CardRoute.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const Confirmation = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js")],
    modules: ['../dialog/Confirmation']
  }
});
const CardOrder = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const classes = Object(_src_styleMUI_route_cardRoute__WEBPACK_IMPORTED_MODULE_6__["default"])();
  const {
    element,
    setList
  } = props;
  const {
    setMiniDialog,
    showMiniDialog
  } = props.mini_dialogActions;
  const statusColor = {
    'создан': 'orange',
    'выполняется': 'blue',
    'выполнен': 'green'
  };
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
    href: "/route/[id]",
    as: `/route/${element !== undefined ? element._id : 'new'}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, element.employment.organization.name), __jsx("div", {
    className: classes.status,
    style: {
      background: statusColor[element.status]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, element.status)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0442\u043E\u0440:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, element.employment.name)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, "\u0414\u0430\u0442\u0430:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_14__["pdDDMMYY"])(new Date(element.dateStart)))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "\u0417\u0430\u043A\u0430\u0437\u044B:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, element.invoices.map((invoice, idx) => __jsx("div", {
    key: idx,
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, invoice.number))))))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: async () => {
      const action = async () => {
        setList((await Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_12__["deleteRoute"])([element._id])).routes);
      };

      setMiniDialog('Вы уверенны?', __jsx(Confirmation, {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: undefined
      }));
      showMiniDialog(true);
    },
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")));
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_9__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_10__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(CardOrder));

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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_gql_ads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/gql/ads */ "./src/gql/ads.js");
/* harmony import */ var _components_app_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/app/AppBar */ "./components/app/AppBar.js");
/* harmony import */ var _components_app_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/app/Dialog */ "./components/app/Dialog.js");
/* harmony import */ var _components_app_SnackBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/app/SnackBar */ "./components/app/SnackBar.js");
/* harmony import */ var _components_app_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/app/Drawer */ "./components/app/Drawer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_gql_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/gql/items */ "./src/gql/items.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../scss/app.scss */ "./scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-lazy-load-image-component */ "react-lazy-load-image-component");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\layouts\\App.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;














const mainWindow = react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
const App = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  const {
    setProfile
  } = props.userActions;
  const {
    profile,
    authenticated
  } = props.user;
  let {
    sorts,
    filters,
    getList,
    pageName
  } = props;
  let {
    0: ads,
    1: setAds
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({});
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (authenticated && (!profile || !profile.role)) setProfile();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    (async () => {
      if (authenticated) {
        if (localStorage.favorites && localStorage.favorites !== '[]') {
          let favorites = JSON.parse(localStorage.favorites);
          favorites = favorites.map(element => element._id);
          await Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_9__["addFavoriteItem"])(favorites);
          localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()([]);
          if (getList !== undefined) await getList();
        }

        if (localStorage.basket && localStorage.basket !== '[]') {
          let basket = JSON.parse(localStorage.basket);

          for (let i = 0; i < basket.length; i++) {
            await Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_10__["addBasket"])({
              item: basket[i].item._id,
              count: basket[i].count
            });
          }

          localStorage.basket = '[]';
          if (getList !== undefined) await getList();
        }
      }

      setAds((await Object(_src_gql_ads__WEBPACK_IMPORTED_MODULE_2__["getAds"])()).ads);
    })();
  }, []);
  const {
    load
  } = props.app;
  /*const { data: { data }, loading } = useSubscription(
      BASKET_SUBSCRIPTION
  );
  console.log(data, loading)*/

  return __jsx("div", {
    ref: mainWindow,
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(_components_app_AppBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageName: pageName,
    sorts: sorts,
    filters: filters,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx(_components_app_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("div", {
    className: "App-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, ads && ads.url ? __jsx("a", {
    href: ads.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_14__["LazyLoadImage"], {
    placeholderSrc: "/static/add.png",
    src: ads.image,
    alt: ads.title,
    className: "marketImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  })) : null, props.children), __jsx(_components_app_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx(_components_app_SnackBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), load ? __jsx("div", {
    className: "load",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
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
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_8__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_11__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(App));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/routes.js":
/*!*************************!*\
  !*** ./pages/routes.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/App */ "./layouts/App.js");
/* harmony import */ var _components_route_CardRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/route/CardRoute */ "./components/route/CardRoute.js");
/* harmony import */ var _src_styleMUI_route_routeList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/styleMUI/route/routeList */ "./src/styleMUI/route/routeList.js");
/* harmony import */ var _src_gql_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/gql/route */ "./src/gql/route.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\routes.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const Routes = react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(props => {
  const classes = Object(_src_styleMUI_route_routeList__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const {
    data
  } = props;
  let {
    0: list,
    1: setList
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(data.routes);
  const {
    search,
    filter,
    sort
  } = props.app;
  const {
    profile
  } = props.user;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    (async () => {
      setList((await Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_5__["getRoutes"])({
        search: search,
        sort: sort,
        filter: filter
      })).routes);
    })();
  }, [filter, sort, search]);
  if (!['admin', 'организация', 'менеджер'].includes(profile.role)) next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
    filters: data.filterRoute,
    sorts: data.sortRoute,
    pageName: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B")), __jsx("div", {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, list ? list.map(element => __jsx(_components_route_CardRoute__WEBPACK_IMPORTED_MODULE_3__["default"], {
    setList: setList,
    key: element._id,
    element: element,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })) : null), ['admin', 'организация', 'менеджер'].includes(profile.role) ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
    href: "/route/[id]",
    as: `/route/new`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_7___default.a, {
    color: "primary",
    "aria-label": "add",
    className: classes.fab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }))) : null);
});

Routes.getInitialProps = async function () {
  return {
    data: await Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_5__["getRoutes"])({
      search: '',
      sort: '-updatedAt',
      filter: ''
    })
  };
};

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps)(Routes));

/***/ }),

/***/ "./redux/actions/app.js":
/*!******************************!*\
  !*** ./redux/actions/app.js ***!
  \******************************/
/*! exports provided: showDrawer, setFilter, setCountBasket, setSort, setSearch, setIsMobileApp, showLoad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDrawer", function() { return showDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilter", function() { return setFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountBasket", function() { return setCountBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSort", function() { return setSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearch", function() { return setSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsMobileApp", function() { return setIsMobileApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoad", function() { return showLoad; });
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/app */ "./redux/constants/app.js");

function showDrawer(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SHOW_DRAWER"],
    payload: data
  };
}
function setFilter(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_FILTER"],
    payload: data
  };
}
function setCountBasket(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_COUNT_BASKET"],
    payload: data
  };
}
function setSort(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_SORT"],
    payload: data
  };
}
function setSearch(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_SEARCH"],
    payload: data
  };
}
function setIsMobileApp(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SET_IS_MOBILE_APP"],
    payload: data
  };
}
function showLoad(show) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__["SHOW_LOAD"],
    payload: show
  };
}

/***/ }),

/***/ "./redux/actions/mini_dialog.js":
/*!**************************************!*\
  !*** ./redux/actions/mini_dialog.js ***!
  \**************************************/
/*! exports provided: setMiniDialog, showMiniDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMiniDialog", function() { return setMiniDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMiniDialog", function() { return showMiniDialog; });
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");

function setMiniDialog(title, child) {
  return {
    type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__["SET_MINI_DIALOG"],
    payload: {
      title: title,
      child: child
    }
  };
}
function showMiniDialog(show) {
  return {
    type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__["SHOW_MINI_DIALOG"],
    payload: show
  };
}

/***/ }),

/***/ "./redux/actions/snackbar.js":
/*!***********************************!*\
  !*** ./redux/actions/snackbar.js ***!
  \***********************************/
/*! exports provided: showSnackBar, closeSnackBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSnackBar", function() { return showSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSnackBar", function() { return closeSnackBar; });
/* harmony import */ var _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/snackbar */ "./redux/constants/snackbar.js");

function showSnackBar(title) {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__["SHOW_SNACKBAR"],
    payload: {
      title: title
    }
  };
}
function closeSnackBar() {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__["CLOSE_SNACKBAR"]
  };
}

/***/ }),

/***/ "./redux/actions/user.js":
/*!*******************************!*\
  !*** ./redux/actions/user.js ***!
  \*******************************/
/*! exports provided: signup, signin, checkAuthenticated, setAuthenticated, logout, setProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthenticated", function() { return checkAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthenticated", function() { return setAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfile", function() { return setProfile; });
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/user */ "./redux/constants/user.js");
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/mini_dialog */ "./redux/constants/mini_dialog.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_singleton_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/singleton/client */ "./src/singleton/client.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);






function signup(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
                    mutation ($phone: String!, $password: String!) {
                        signupuser(phone: $phone, password: $password) {
                            data,
                        }
                    }`
      });
      if (result.data.signupuser.data === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });else {
        await dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATED"]
        });
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SHOW_MINI_DIALOG"],
          payload: false
        });
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
        setTimeout(() => window.location.reload(), 1);
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });
    }
  };
}
function signin(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
                    mutation ($phone: String!, $password: String!) {
                        signinuser(phone: $phone, password: $password) {
                            data,
                        }
                    }`
      });
      if (result.data.signinuser.data === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });else {
        await dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATED"]
        });
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__["SHOW_MINI_DIALOG"],
          payload: false
        });
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
        setTimeout(() => window.location.reload(), 1);
      }
    } catch (error) {
      console.log(error);
      await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["ERROR_AUTHENTICATED"],
        payload: true
      });
    }
  };
}
function checkAuthenticated() {
  return async dispatch => {
    try {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('jwt')) {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["AUTHENTICATED"]
        });
      } else {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
      });
    }
  };
}
function setAuthenticated(auth) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["SET_AUTH"],
    payload: auth
  };
}
function logout() {
  return async dispatch => {
    js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('jwt');
    dispatch({
      type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["UNAUTHENTICATED"]
    });
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    setTimeout(() => window.location.reload(), 1);
  };
}
function setProfile() {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
      let result = await client.query({
        query: apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"]`
                    query {
                        getStatus {
                           role
                           status
                           phone
                           organization
                           _id
                          }
                    }`
      });
      await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__["SET_PROFILE"],
        payload: result.data.getStatus
      });
    } catch (error) {
      console.error(error);
    }
  };
}

/***/ }),

/***/ "./redux/constants/app.js":
/*!********************************!*\
  !*** ./redux/constants/app.js ***!
  \********************************/
/*! exports provided: SHOW_DRAWER, SET_SEARCH, SET_SORT, SET_FILTER, SET_COUNT_BASKET, SET_IS_MOBILE_APP, SHOW_LOAD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_DRAWER", function() { return SHOW_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SEARCH", function() { return SET_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SORT", function() { return SET_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_FILTER", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_COUNT_BASKET", function() { return SET_COUNT_BASKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_IS_MOBILE_APP", function() { return SET_IS_MOBILE_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_LOAD", function() { return SHOW_LOAD; });
const SHOW_DRAWER = 'SHOW_DRAWER';
const SET_SEARCH = 'SET_SEARCH';
const SET_SORT = 'SET_SORT';
const SET_FILTER = 'SET_FILTER';
const SET_COUNT_BASKET = 'SET_COUNT_BASKET';
const SET_IS_MOBILE_APP = 'SET_IS_MOBILE_APP';
const SHOW_LOAD = 'SHOW_LOAD';

/***/ }),

/***/ "./redux/constants/mini_dialog.js":
/*!****************************************!*\
  !*** ./redux/constants/mini_dialog.js ***!
  \****************************************/
/*! exports provided: SET_MINI_DIALOG, SHOW_MINI_DIALOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_MINI_DIALOG", function() { return SET_MINI_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MINI_DIALOG", function() { return SHOW_MINI_DIALOG; });
const SET_MINI_DIALOG = 'SET_MINI_DIALOG';
const SHOW_MINI_DIALOG = 'SHOW_MINI_DIALOG';

/***/ }),

/***/ "./redux/constants/other.js":
/*!**********************************!*\
  !*** ./redux/constants/other.js ***!
  \**********************************/
/*! exports provided: urlGQL, urlGQLws, validMail, validPhone, checkInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGQL", function() { return urlGQL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlGQLws", function() { return urlGQLws; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validMail", function() { return validMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validPhone", function() { return validPhone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInt", function() { return checkInt; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

const urlGQL = `http://${"localhost"}:3000/graphql`;
const urlGQLws = `ws://${"localhost"}:3000/graphql`;
const validMail = mail => {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
};
const validPhone = phone => {
  return /^[+]{1}996[0-9]{9}$/.test(phone);
};
const checkInt = int => {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int);
};

/***/ }),

/***/ "./redux/constants/snackbar.js":
/*!*************************************!*\
  !*** ./redux/constants/snackbar.js ***!
  \*************************************/
/*! exports provided: CLOSE_SNACKBAR, SHOW_SNACKBAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SNACKBAR", function() { return CLOSE_SNACKBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_SNACKBAR", function() { return SHOW_SNACKBAR; });
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
const SHOW_SNACKBAR = 'SHOW_SNACKBAR';

/***/ }),

/***/ "./redux/constants/user.js":
/*!*********************************!*\
  !*** ./redux/constants/user.js ***!
  \*********************************/
/*! exports provided: AUTHENTICATED, UNAUTHENTICATED, ERROR_AUTHENTICATED, SET_PROFILE, SET_AUTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTHENTICATED", function() { return AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNAUTHENTICATED", function() { return UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_AUTHENTICATED", function() { return ERROR_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PROFILE", function() { return SET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH", function() { return SET_AUTH; });
const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const ERROR_AUTHENTICATED = 'ERROR_AUTHENTICATED';
const SET_PROFILE = 'SET_PROFILE';
const SET_AUTH = 'SET_AUTH';

/***/ }),

/***/ "./scss/app.scss":
/*!***********************!*\
  !*** ./scss/app.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/gql/ads.js":
/*!************************!*\
  !*** ./src/gql/ads.js ***!
  \************************/
/*! exports provided: getAds, getAdss, deleteAds, addAds, setAds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAds", function() { return getAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdss", function() { return getAdss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAds", function() { return deleteAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAds", function() { return addAds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAds", function() { return setAds; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");



const getAds = async () => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query {
                        ads {
                            _id
                            image
                            url
                            title
                            updatedAt
                          }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getAdss = async ({
  search: search,
  sort: sort,
  filter: filter
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        search: search,
        sort: sort,
        filter: filter
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        adss(search: $search, sort: $sort, filter: $filter) {
                            _id
                            image
                            url
                            title
                            updatedAt
                          }
                          sortAds {
                           name
                            field
                          }
                          filterAds {
                           name
                           value
                          }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const deleteAds = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: [ID]!) {
                        deleteAds(_id: $_id) {
                             data
                        }
                    }`
    });
    return await getAdss(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().getState().app);
  } catch (err) {
    console.error(err);
  }
};
const addAds = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($image: Upload!, $url: String!, $title: String!) {
                        addAds(image: $image, url: $url, title: $title) {
                             data
                        }
                    }`
    });
    let list = await getAdss(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().getState().app);
    return list;
  } catch (err) {
    console.error(err);
  }
};
const setAds = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: ID!, $image: Upload, $url: String, $title: String) {
                        setAds(_id: $_id, image: $image, url: $url, title: $title) {
                             data
                        }
                    }`
    });
    let list = await getAdss(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().getState().app);
    return list;
  } catch (err) {
    console.error(err);
  }
};

/***/ }),

/***/ "./src/gql/basket.js":
/*!***************************!*\
  !*** ./src/gql/basket.js ***!
  \***************************/
/*! exports provided: getBasket, getCountBasket, deleteBasket, addBasket, setBasket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasket", function() { return getBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCountBasket", function() { return getCountBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteBasket", function() { return deleteBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBasket", function() { return addBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBasket", function() { return setBasket; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");




const getBasket = async () => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query{
                        baskets {
                            _id
                            updatedAt
                            item 
                                {_id name stock image price}
                            count
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getCountBasket = async () => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query {
                        countBasket 
                    }`
    });
    new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().dispatch(Object(_redux_actions_app__WEBPACK_IMPORTED_MODULE_3__["setCountBasket"])(res.data.countBasket));
  } catch (err) {
    console.error(err);
  }
};
const deleteBasket = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: [ID]!) {
                        deleteBasket(_id: $_id) {
                             data
                        }
                    }`
    });
    await getCountBasket();
    return await getBasket(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().getState().app);
  } catch (err) {
    console.error(err);
  }
};
const addBasket = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($item: ID!, $count: Int!) {
                        addBasket(item: $item, count: $count) {
                             data
                        }
                    }`
    });
    await getCountBasket();
  } catch (err) {
    console.error(err);
  }
};
const setBasket = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: ID!, $count: Int!) {
                        setBasket(_id: $_id, count: $count) {
                             data
                        }
                    }`
    });
    await getCountBasket();
    return await getBasket(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__["SingletonStore"]().getStore().getState().app);
  } catch (err) {
    console.error(err);
  }
};

/***/ }),

/***/ "./src/gql/items.js":
/*!**************************!*\
  !*** ./src/gql/items.js ***!
  \**************************/
/*! exports provided: getItems, favorites, getItem, deleteItem, onoffItem, favoriteItem, addFavoriteItem, addItem, setItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favorites", function() { return favorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onoffItem", function() { return onoffItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteItem", function() { return favoriteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavoriteItem", function() { return addFavoriteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");




const getItems = async ({
  subCategory,
  search,
  sort,
  filter
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        subCategory: subCategory,
        search: search,
        sort: sort,
        filter: filter
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($subCategory: ID!,$search: String!, $sort: String!, $filter: String!) {
                        items(subCategory: $subCategory, search: $search, sort: $sort, filter: $filter) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            updatedAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                        sortItem {
                            name
                            field
                        }
                        filterItem {
                           name
                           value
                        }
                        subCategory(_id: $subCategory) {
                           _id
                           name
                          }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const favorites = async ({
  search
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        search: search
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($search: String!) {
                        favorites(search: $search) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            updatedAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getItem = async ({
  _id
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        _id: _id
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($_id: ID!) {
                        item(_id: $_id) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            updatedAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const deleteItem = async (ids, subCategory) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        deleteItem(_id: $_id) {
                             data
                        }
                    }`
    });
    return await getItems(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      subCategory: subCategory
    }, new _singleton_store__WEBPACK_IMPORTED_MODULE_3__["SingletonStore"]().getStore().getState().app));
  } catch (err) {
    console.error(err);
  }
};
const onoffItem = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        onoffItem(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const favoriteItem = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        favoriteItem(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const addFavoriteItem = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        addFavoriteItem(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const addItem = async (element, subCategory) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, element, {
        subCategory: subCategory
      }),
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($stock: Int!, $name: String!, $image: Upload, $info: String!, $price: Int!, $subCategory: ID!, $organization: ID!, $hit: Boolean!, $latest: Boolean!) {
                        addItem(stock: $stock, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const setItem = async (element, subCategory) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, element),
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: ID!, $stock: Int, $name: String, $image: Upload, $info: String, $price: Int, $subCategory: ID, $organization: ID, $hit: Boolean, $latest: Boolean) {
                        setItem(_id: $_id, stock: $stock, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};

/***/ }),

/***/ "./src/gql/route.js":
/*!**************************!*\
  !*** ./src/gql/route.js ***!
  \**************************/
/*! exports provided: getRoutes, getRoute, deleteRoute, addRoute, setRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoutes", function() { return getRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoute", function() { return getRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteRoute", function() { return deleteRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRoute", function() { return addRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRoute", function() { return setRoute; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");



const getRoutes = async ({
  search,
  sort,
  filter
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        search: search,
        sort: sort,
        filter: filter
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        routes(search: $search, sort: $sort, filter: $filter) {
                            _id
                            updatedAt
                            invoices
                                {
                                    _id
                                    updatedAt
                                    orders 
                                        { 
                                            _id
                                            updatedAt
                                            item
                                                {
                                                    image
                                                    _id
                                                    name    
                                                    organization
                                                        {_id name}
                                                }
                                            count
                                            allPrice
                                            status
                                         }
                                    client 
                                        { 
                                            _id
                                            name
                                            email
                                            user 
                                                {_id phone} 
                                        }
                                    allPrice
                                    info
                                    address
                                    paymentMethod
                                    number
                                    confirmationForwarder
                                    confirmationClient
                                }
                            employment
                                { 
                                    _id
                                    updatedAt
                                    name
                                    email
                                    user 
                                        {_id role status phone}
                                    organization 
                                        {_id name}
                                }
                            status
                            dateStart
                            dateEnd
                            number
                        }
                        sortRoute {
                            name
                            field
                        }
                        filterRoute {
                           name
                           value
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getRoute = async ({
  _id
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    let res = await client.query({
      variables: {
        _id: _id
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query ($_id: ID!) {
                        route(_id: $_id) {
                            _id
                            updatedAt
                            invoices
                                {
                                    _id
                                    updatedAt
                                    orders 
                                        { 
                                            _id
                                            updatedAt
                                            item
                                                {
                                                    image
                                                    _id
                                                    name    
                                                    organization
                                                        {_id name}
                                                }
                                            count
                                            allPrice
                                            status
                                         }
                                    client 
                                        { 
                                            _id
                                            name
                                            email
                                            user 
                                                {_id phone} 
                                        }
                                    allPrice
                                    info
                                    address
                                    paymentMethod
                                    number
                                    confirmationForwarder
                                    confirmationClient
                                }
                            employment
                                { 
                                    _id
                                    updatedAt
                                    name
                                    email
                                    user 
                                        {_id role status phone}
                                    organization 
                                        {_id name}
                                }
                            status
                            dateStart
                            dateEnd
                            number
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const deleteRoute = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: [ID]!) {
                        deleteRoute(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const addRoute = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($invoices: [ID]!, $employment: ID!, $dateStart: Date!) {
                        addRoute(invoices: $invoices, employment: $employment, dateStart: $dateStart) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const setRoute = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__["SingletonApolloClient"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: ID!, $invoices: [ID], $employment: ID, $cancelInvoices: [ID], $dateStart: Date) {
                        setRoute(_id: $_id, invoices: $invoices, employment: $employment, cancelInvoices: $cancelInvoices, dateStart: $dateStart) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};

/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/*! exports provided: checkMobile, checkAuth, getJWT, checkInt, pdDDMMYYYY, pdDDMMYY, pdDDMMYYHHMM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMobile", function() { return checkMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuth", function() { return checkAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJWT", function() { return getJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkInt", function() { return checkInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYYYY", function() { return pdDDMMYYYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYY", function() { return pdDDMMYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pdDDMMYYHHMM", function() { return pdDDMMYYHHMM; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);


const regexpUA = /(Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|iOS|Mobile)/;
const checkMobile = ua => {
  return regexpUA.exec(ua) !== null;
};
const regexpAuth = /(\s)?jwt=(\S)+(;)?/;
const checkAuth = auth => {
  return regexpAuth.exec(auth) !== null;
};
const getJWT = auth => {
  let res = regexpAuth.exec(auth);
  return res !== null ? res[0].trim().replace('jwt=', '') : undefined;
};
const checkInt = int => {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(int);
};
const pdDDMMYYYY = date => {
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '');
  return date;
};
const pdDDMMYY = date => {
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4);
  return date;
};
const pdDDMMYYHHMM = date => {
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  console.log(date);
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4) + ' ' + date[2].split('T')[1].split(':')[0] + ':' + date[2].split('T')[1].split(':')[1];
  return date;
};

/***/ }),

/***/ "./src/singleton/client.js":
/*!*********************************!*\
  !*** ./src/singleton/client.js ***!
  \*********************************/
/*! exports provided: SingletonApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonApolloClient", function() { return SingletonApolloClient; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "apollo-client");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "apollo-cache-inmemory");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib */ "./src/lib.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-context */ "apollo-link-context");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-link-error */ "apollo-link-error");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-link-ws */ "apollo-link-ws");
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apollo_link_ws__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! apollo-utilities */ "apollo-utilities");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ws */ "ws");
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");


/* eslint-disable no-extra-boolean-cast */














class SingletonApolloClient {
  constructor(req) {
    if (!!SingletonApolloClient.instance) {
      return SingletonApolloClient.instance;
    }

    SingletonApolloClient.instance = this;
    const uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__["createUploadLink"])({
      uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__["urlGQL"],
      fetch: node_fetch__WEBPACK_IMPORTED_MODULE_4___default.a,
      credentials: 'include'
    });
    const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])((_, {
      headers
    }) => {
      return {
        headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
          authorization: this.jwt ? `Bearer ${this.jwt}` : ''
        })
      };
    });
    const linkError = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__["onError"])(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.map(({
        message,
        locations,
        path
      }) => {
        new _singleton_store__WEBPACK_IMPORTED_MODULE_13__["SingletonStore"]().getStore().dispatch(Object(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_14__["showSnackBar"])('Ошибка'));
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });
    const wsLink = new apollo_link_ws__WEBPACK_IMPORTED_MODULE_10__["WebSocketLink"]({
      uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__["urlGQLws"],
      options: {
        reconnect: true
      },
      webSocketImpl:  false ? undefined : ws__WEBPACK_IMPORTED_MODULE_12__
    });
    const mainLink = Object(apollo_link__WEBPACK_IMPORTED_MODULE_8__["split"])(({
      query
    }) => {
      const definition = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_11__["getMainDefinition"])(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    }, wsLink, uploadLink);
    const link = apollo_link__WEBPACK_IMPORTED_MODULE_8__["ApolloLink"].from([linkError, authLink, mainLink]);
    this.client = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
      link: link,
      cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"](),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'ignore'
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all'
        },
        mutate: {
          errorPolicy: 'all'
        }
      }
    });
    this.jwt = Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getJWT"])(req ? req.headers.cookie : document.cookie);
    return this;
  }

  getClient() {
    return this.client;
  }

}

/***/ }),

/***/ "./src/singleton/store.js":
/*!********************************!*\
  !*** ./src/singleton/store.js ***!
  \********************************/
/*! exports provided: SingletonStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonStore", function() { return SingletonStore; });
/* eslint-disable no-extra-boolean-cast */
class SingletonStore {
  constructor(store) {
    if (!!SingletonStore.instance) {
      return SingletonStore.instance;
    }

    SingletonStore.instance = this;
    this.store = store;
    return this;
  }

  getStore() {
    return this.store;
  }

}

/***/ }),

/***/ "./src/styleMUI/appbar.js":
/*!********************************!*\
  !*** ./src/styleMUI/appbar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  appBar: {
    zIndex: 1201
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  searchD: {
    position: 'fixed',
    top: 6,
    right: 6
  },
  searchM: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '56px',
    width: '100vw'
  },
  textField: {
    width: 'calc(100% - 20px)',
    margin: 10
  }
}));

/***/ }),

/***/ "./src/styleMUI/drawer.js":
/*!********************************!*\
  !*** ./src/styleMUI/drawer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (theme => ({
  drawer: {
    width: 300,
    flexShrink: 0
  },
  drawerPaper: {
    width: 300
  },
  toolbar: theme.mixins.toolbar
}));

/***/ }),

/***/ "./src/styleMUI/route/cardRoute.js":
/*!*****************************************!*\
  !*** ./src/styleMUI/route/cardRoute.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  card: {
    width: 330,
    margin: 10,
    position: 'relative'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  number: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '1rem',
    fontFamily: 'Roboto'
  },
  date: {
    marginBottom: 10,
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    color: '#A0A0A0'
  },
  status: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 4,
    borderRadius: 10,
    fontSize: '0.815rem',
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto'
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
  }
}));

/***/ }),

/***/ "./src/styleMUI/route/routeList.js":
/*!*****************************************!*\
  !*** ./src/styleMUI/route/routeList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  page: {
    paddingTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  fab: {
    position: 'fixed',
    bottom: '20px',
    right: '20px'
  }
}));

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/routes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\azyk\azyk-admin\pages\routes.js */"./pages/routes.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/InputAdornment":
/*!***************************************************!*\
  !*** external "@material-ui/core/InputAdornment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/ArrowDownward":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDownward" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

/***/ }),

/***/ "@material-ui/icons/ArrowUpward":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowUpward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "@material-ui/icons/ArtTrack":
/*!**********************************************!*\
  !*** external "@material-ui/icons/ArtTrack" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArtTrack");

/***/ }),

/***/ "@material-ui/icons/AssignmentInd":
/*!***************************************************!*\
  !*** external "@material-ui/icons/AssignmentInd" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AssignmentInd");

/***/ }),

/***/ "@material-ui/icons/Cancel":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cancel" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cancel");

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "@material-ui/icons/Done":
/*!******************************************!*\
  !*** external "@material-ui/icons/Done" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/FilterListRounded":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/FilterListRounded" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterListRounded");

/***/ }),

/***/ "@material-ui/icons/FormatListNumbered":
/*!********************************************************!*\
  !*** external "@material-ui/icons/FormatListNumbered" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatListNumbered");

/***/ }),

/***/ "@material-ui/icons/Group":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Group" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "@material-ui/icons/LocalGroceryStore":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/LocalGroceryStore" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalGroceryStore");

/***/ }),

/***/ "@material-ui/icons/LocationCity":
/*!**************************************************!*\
  !*** external "@material-ui/icons/LocationCity" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationCity");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/PermIdentity":
/*!**************************************************!*\
  !*** external "@material-ui/icons/PermIdentity" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PermIdentity");

/***/ }),

/***/ "@material-ui/icons/Receipt":
/*!*********************************************!*\
  !*** external "@material-ui/icons/Receipt" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Receipt");

/***/ }),

/***/ "@material-ui/icons/SearchRounded":
/*!***************************************************!*\
  !*** external "@material-ui/icons/SearchRounded" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SearchRounded");

/***/ }),

/***/ "@material-ui/icons/SortRounded":
/*!*************************************************!*\
  !*** external "@material-ui/icons/SortRounded" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SortRounded");

/***/ }),

/***/ "@material-ui/icons/Star":
/*!******************************************!*\
  !*** external "@material-ui/icons/Star" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "@material-ui/icons/ViewList":
/*!**********************************************!*\
  !*** external "@material-ui/icons/ViewList" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewList");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "@material-ui/icons/Whatshot":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Whatshot" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Whatshot");

/***/ }),

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "apollo-cache-inmemory":
/*!****************************************!*\
  !*** external "apollo-cache-inmemory" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/*!********************************!*\
  !*** external "apollo-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-context":
/*!**************************************!*\
  !*** external "apollo-link-context" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "apollo-link-error":
/*!************************************!*\
  !*** external "apollo-link-error" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "apollo-link-ws":
/*!*********************************!*\
  !*** external "apollo-link-ws" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "apollo-utilities":
/*!***********************************!*\
  !*** external "apollo-utilities" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-lazy-load-image-component":
/*!**************************************************!*\
  !*** external "react-lazy-load-image-component" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ })

/******/ });
//# sourceMappingURL=routes.js.map