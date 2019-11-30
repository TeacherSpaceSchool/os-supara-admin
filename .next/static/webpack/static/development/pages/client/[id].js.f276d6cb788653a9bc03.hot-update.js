webpackHotUpdate("static\\development\\pages\\client\\[id].js",{

/***/ "./components/dialog/Geo.js":
/*!**********************************!*\
  !*** ./components/dialog/Geo.js ***!
  \**********************************/
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
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Geo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var Geo = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var showSnackBar = props.snackbarActions.showSnackBar;
  var isMobileApp = props.app.isMobileApp;
  var _props$mini_dialogAct = props.mini_dialogActions,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog;
  var classes = props.classes,
      geo = props.geo,
      name = props.name;
  var width = isMobileApp ? window.innerWidth - 126 : 500;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(geo ? geo : '42.8700000, 74.5900000'),
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
  return __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__["YMaps"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: classes.column,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__["Map"], {
    height: window.innerWidth,
    width: width,
    defaultState: {
      center: [42.8700000, 74.5900000],
      zoom: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_7__["Placemark"], {
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
      lineNumber: 39
    },
    __self: this
  }))), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    "aria-label": "\u041D\u0430\u0439\u0442\u0438 \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u044E",
    className: classes.fab,
    onClick: getGeo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
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
//# sourceMappingURL=[id].js.f276d6cb788653a9bc03.hot-update.js.map