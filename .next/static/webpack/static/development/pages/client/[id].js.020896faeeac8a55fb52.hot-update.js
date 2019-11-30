webpackHotUpdate("static\\development\\pages\\client\\[id].js",{

/***/ "./components/dialog/Geo.js":
/*!**********************************!*\
  !*** ./components/dialog/Geo.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-yandex-maps */ "./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/GpsFixed */ "./node_modules/@material-ui/icons/GpsFixed.js");
/* harmony import */ var _material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Geo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;












var Geo = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var showSnackBar = props.snackbarActions.showSnackBar;
  var isMobileApp = props.app.isMobileApp;
  var _props$mini_dialogAct = props.mini_dialogActions,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog;
  var classes = props.classes,
      geo = props.geo,
      name = props.name;
  var width = isMobileApp ? window.innerWidth - 126 : 500;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(geo ? geo : '42.8700000, 74.5900000'),
      newGeo = _useState[0],
      setNewGeo = _useState[1];

  var getGeo = function getGeo() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setNewGeo(position.coords.latitude + ', ' + position.coords.longitude);
      });
    } else {
      showSnackBar('Геолокация не поддерживается');
    }
  };

  var dragend = function dragend(e) {
    var geo = e.get('target').geometry.getCoordinates();
    setNewGeo(geo[0] + ', ' + geo[1]);
  };

  console.log(newGeo);
  return __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_9__["YMaps"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: classes.column,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_9__["Map"], {
    height: window.innerHeight - 128,
    width: window.innerWidth - 48,
    defaultState: {
      center: [42.8700000, 74.5900000],
      zoom: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_9__["Placemark"], {
    onDragEnd: dragend,
    options: {
      draggable: true,
      iconColor: '#ffb300'
    },
    properties: {
      iconCaption: name
    },
    geometry: newGeo.split(', '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "contained",
    color: "primary",
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              showMiniDialog(false);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "primary",
    "aria-label": "\u041D\u0430\u0439\u0442\u0438 \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u044E",
    className: classes.fabGeo,
    onClick: getGeo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__, dispatch),
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_7__, dispatch)
  };
}

Geo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_8__["default"])(Geo)));

/***/ }),

/***/ "./src/styleMUI/dialogContent.js":
/*!***************************************!*\
  !*** ./src/styleMUI/dialogContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (theme) {
  return {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    },
    mainLine: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    button: {
      margin: theme.spacing(1)
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    message: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      textAlign: 'center',
      color: 'indigo',
      fontWeight: 'bold',
      cursor: 'pointer',
      overflowWrap: 'break-word',
      fontSize: '1rem'
    },
    itogo: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      textAlign: 'left',
      fontSize: '1rem',
      fontWeight: 500
    },
    error_message: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      color: 'red',
      fontWeight: 'bold'
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
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline'
    },
    fabGeo: {
      position: 'fixed',
      bottom: 70,
      right: 35
    }
  };
});

/***/ })

})
//# sourceMappingURL=[id].js.020896faeeac8a55fb52.hot-update.js.map