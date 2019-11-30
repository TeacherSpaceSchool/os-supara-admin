webpackHotUpdate("static\\development\\pages\\route\\[id].js",{

/***/ "./components/dialog/GeoRoute.js":
/*!***************************************!*\
  !*** ./components/dialog/GeoRoute.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
/* harmony import */ var react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-yandex-maps */ "./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/GpsFixed */ "./node_modules/@material-ui/icons/GpsFixed.js");
/* harmony import */ var _material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _Confirmation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Confirmation */ "./components/dialog/Confirmation.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\GeoRoute.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














var Geo = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var _props$mini_dialogAct = props.mini_dialogActions,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog;
  var classes = props.classes,
      invoices = props.invoices;
  /*let getGeo = () => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position)=>{
              setNewGeo(position.coords.latitude+', '+position.coords.longitude)
          });
      } else {
          showSnackBar('Геолокация не поддерживается')
      }
  }*/

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      load = _useState[0],
      setLoad = _useState[1];

  return __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__["YMaps"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    style: {
      height: window.innerHeight - 128,
      width: window.innerWidth - 48,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, load ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }) : null, __jsx("div", {
    style: {
      display: load ? 'none' : 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__["Map"], {
    onLoad: function onLoad() {
      setLoad(false);
    },
    height: window.innerHeight - 128,
    width: window.innerWidth - 48,
    defaultState: {
      center: ['42.8700000', '74.5900000'],
      zoom: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, invoices.map(function (invoice, idx) {
    return __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__["Placemark"], {
      key: idx,
      options: {
        draggable: false,
        iconColor: !invoice.confirmationForwarder ? 'red' : '#ffb300'
      },
      properties: {
        iconCaption: invoice.number
      },
      geometry: invoice.address[1].split(', '),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    });
  })))), __jsx("center", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_10__, dispatch),
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__, dispatch)
  };
}

Geo.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_6__["default"])(Geo)));

/***/ })

})
//# sourceMappingURL=[id].js.300df4862b6439c864e5.hot-update.js.map