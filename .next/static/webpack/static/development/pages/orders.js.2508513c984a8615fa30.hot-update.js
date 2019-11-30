webpackHotUpdate("static\\development\\pages\\orders.js",{

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
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _Confirmation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Confirmation */ "./components/dialog/Confirmation.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Geo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














var Geo = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var showSnackBar = props.snackbarActions.showSnackBar;
  var _props$mini_dialogAct = props.mini_dialogActions,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog;
  var classes = props.classes,
      geo = props.geo,
      name = props.name,
      idx = props.idx,
      setAddressGeo = props.setAddressGeo,
      change = props.change;

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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      load = _useState2[0],
      setLoad = _useState2[1];

  return __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_9__["YMaps"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
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
      lineNumber: 39
    },
    __self: this
  }, load ? __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }) : null, __jsx("div", {
    style: {
      display: load ? 'none' : 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(react_yandex_maps__WEBPACK_IMPORTED_MODULE_9__["Map"], {
    onLoad: function onLoad() {
      setLoad(false);
    },
    height: window.innerHeight - 128,
    width: window.innerWidth - 48,
    defaultState: {
      center: [42.8700000, 74.5900000],
      zoom: 12
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 45
    },
    __self: this
  })))), __jsx("center", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, change ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "contained",
    color: "primary",
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return setAddressGeo(newGeo, idx);

                        case 2:
                          showMiniDialog(false);

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

              setMiniDialog('Вы уверенны?', __jsx(_Confirmation__WEBPACK_IMPORTED_MODULE_15__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                },
                __self: this
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })),
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C") : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))), change ? __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "primary",
    "aria-label": "\u041D\u0430\u0439\u0442\u0438 \u0433\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u044E",
    className: classes.fabGeo,
    onClick: getGeo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_material_ui_icons_GpsFixed__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })) : null);
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

/***/ "./components/dialog/Order.js":
/*!************************************!*\
  !*** ./components/dialog/Order.js ***!
  \************************************/
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
/* harmony import */ var _src_gql_order__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/gql/order */ "./src/gql/order.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _Confirmation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _components_dialog_Geo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/dialog/Geo */ "./components/dialog/Geo.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Order.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














var Order = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var isMobileApp = props.app.isMobileApp;
  var profile = props.user.profile;
  var _props$mini_dialogAct = props.mini_dialogActions,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog;
  var classes = props.classes,
      element = props.element,
      setList = props.setList,
      route = props.route,
      getInvoices = props.getInvoices;
  var width = isMobileApp ? window.innerWidth - 126 : 500;
  return __jsx("div", {
    className: classes.column,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u0417\u0430\u043A\u0430\u0437 \u2116:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, element.number)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "\u0421\u0442\u0430\u0442\u0443\u0441:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, element.orders[0].status === 'принят' && (element.confirmationForwarder || element.confirmationClient) ? element.confirmationClient ? 'подтвержден клиентом' : element.confirmationForwarder ? 'доставлен поставщиком' : element.orders[0].status : element.orders[0].status)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u0410\u0434\u0440\u0435\u0441: \xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, element.address[0])), __jsx("div", {
    className: classes.geo,
    style: {
      color: element.address[1] ? '#ffb300' : 'red'
    },
    onClick: function onClick() {
      setMiniDialog('Геолокация', __jsx(_components_dialog_Geo__WEBPACK_IMPORTED_MODULE_15__["default"], {
        geo: element.address[1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), true);
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, element[1] ? 'Посмотреть геолокацию' : 'Геолокация не задана'), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u043A\u0430\u0437\u0430: \xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_13__["pdDDMMYYHHMM"])(new Date(element.updatedAt)))), __jsx("a", {
    href: "/client/".concat(element.client.user._id),
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, element.client.name))), __jsx("a", {
    href: "/organization/".concat(element.orders[0].item.organization._id),
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, element.orders[0].item.organization.name))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "\u0421\u0443\u043C\u043C\u0430:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, element.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, element.paymentMethod)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, element.info)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "\u0422\u043E\u0432\u0430\u0440\u044B:"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), element.orders.map(function (order, idx) {
    return __jsx("div", {
      key: idx,
      className: classes.column,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("a", {
      href: "/item/".concat(order.item._id),
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, "\u0422\u043E\u0432\u0430\u0440:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, order.item.name))), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, order.count, "\xA0\u0448\u0442")), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, order.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, profile.role === 'client' && 'принят' === element.orders[0].status && !element.confirmationClient || ['менеджер', 'организация'].includes(profile.role) && 'принят' === element.orders[0].status && !element.confirmationForwarder || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      var action =
      /*#__PURE__*/
      function () {
        var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var invoices;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_7__["approveOrders"])({
                    route: route,
                    invoices: [element._id]
                  });

                case 2:
                  invoices = _context.sent.invoices;
                  if (setList) setList(invoices);
                  if (getInvoices) getInvoices();

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function action() {
          return _ref.apply(this, arguments);
        };
      }();

      setMiniDialog('Вы уверенны?', __jsx(_Confirmation__WEBPACK_IMPORTED_MODULE_14__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "\u0417\u0430\u043A\u0430\u0437 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D") : null, profile.role === 'client' && element.orders[0].status === 'обработка' || ['менеджер', 'организация'].includes(profile.role) && ['обработка', 'принят'].includes(element.orders[0].status) && !element.confirmationForwarder || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      var _id = element.orders.map(function (order) {
        return order._id;
      });

      var action =
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
          var invoices;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_7__["cancelOrders"])({
                    _id: _id
                  });

                case 2:
                  invoices = _context2.sent.invoices;
                  if (setList) setList(invoices);
                  if (getInvoices) getInvoices();

                case 5:
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

      setMiniDialog('Вы уверенны?', __jsx(_Confirmation__WEBPACK_IMPORTED_MODULE_14__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437") : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_8__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_10__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_9__, dispatch)
  };
}

Order.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_12__["default"])(Order)));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fab/Fab.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/Fab.js ***!
  \*******************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./node_modules/@material-ui/core/esm/utils/helpers.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minHeight: 36,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      },
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: 'none'
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minHeight: 'auto',
      minWidth: 48,
      height: 48,
      '&$sizeSmall': {
        width: 'auto',
        padding: '0 8px',
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      },
      '&$sizeMedium': {
        width: 'auto',
        padding: '0 16px',
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
      width: 48,
      height: 48
    }
  };
};
var Fab = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Fab(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$size = props.size,
      size = _props$size === void 0 ? 'large' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'round' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, variant !== "round" && classes.extended, size !== 'large' && classes["size".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["capitalize"])(size))], disabled && classes.disabled, {
      primary: classes.primary,
      secondary: classes.secondary,
      inherit: classes.colorInherit
    }[color]),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.focusVisible, focusVisibleClassName),
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.label
  }, children));
});
 true ? Fab.propTypes = {
  /**
   * The content of the button.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * If `true`, the button will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium', 'large']),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['round', 'extended'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiFab'
})(Fab));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Fab/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Fab/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fab */ "./node_modules/@material-ui/core/esm/Fab/Fab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Fab__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/icons/GpsFixed.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/GpsFixed.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
}), 'GpsFixed');

exports.default = _default;

/***/ }),

/***/ "./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/react-yandex-maps/dist/production/react-yandex-maps.esm.js ***!
  \*********************************************************************************/
/*! exports provided: withYMaps, YMaps, Map, Panorama, Button, FullscreenControl, GeolocationControl, ListBox, ListBoxItem, RouteButton, RouteEditor, RoutePanel, RulerControl, SearchControl, TrafficControl, TypeSelector, ZoomControl, Clusterer, ObjectManager, GeoObject, Circle, Placemark, Polygon, Polyline, Rectangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withYMaps", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YMaps", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Panorama", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenControl", function() { return z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationControl", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBox", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBoxItem", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteButton", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteEditor", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePanel", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulerControl", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchControl", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficControl", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeSelector", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomControl", function() { return tt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clusterer", function() { return et; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectManager", function() { return nt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoObject", function() { return st; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return it; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Placemark", function() { return at; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return ct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return ut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return pt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function o(t,e){return t(e={exports:{}},e.exports),e.exports}var r=o(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,s=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,l=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116;function y(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case o:switch(t=t.type){case p:case f:case s:case a:case i:case d:return t;default:switch(t=t&&t.$$typeof){case u:case l:case c:return t;default:return e}}case h:case m:case r:return e}}}function v(t){return y(t)===f}e.typeOf=y,e.AsyncMode=p,e.ConcurrentMode=f,e.ContextConsumer=u,e.ContextProvider=c,e.Element=o,e.ForwardRef=l,e.Fragment=s,e.Lazy=h,e.Memo=m,e.Portal=r,e.Profiler=a,e.StrictMode=i,e.Suspense=d,e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===f||t===a||t===i||t===d||"object"==typeof t&&null!==t&&(t.$$typeof===h||t.$$typeof===m||t.$$typeof===c||t.$$typeof===u||t.$$typeof===l)},e.isAsyncMode=function(t){return v(t)||y(t)===p},e.isConcurrentMode=v,e.isContextConsumer=function(t){return y(t)===u},e.isContextProvider=function(t){return y(t)===c},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},e.isForwardRef=function(t){return y(t)===l},e.isFragment=function(t){return y(t)===s},e.isLazy=function(t){return y(t)===h},e.isMemo=function(t){return y(t)===m},e.isPortal=function(t){return y(t)===r},e.isProfiler=function(t){return y(t)===a},e.isStrictMode=function(t){return y(t)===i},e.isSuspense=function(t){return y(t)===d}});n(r),n(o(function(t,e){})),o(function(t){t.exports=r}),Object,Object,Object,function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(t){o[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()&&Object;var s="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function i(){}function a(){}Function.call.bind(Object.prototype.hasOwnProperty),a.resetWarningCache=i;var c=o(function(t){t.exports=function(){function t(t,e,n,o,r,i){if(i!==s){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}()}),u=n(o(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return t.displayName||t.name||("string"==typeof t&&t.length>0?t:"Unknown")}})),p=function(t,e){var n={};for(var o in t)-1===e.indexOf(o)&&(n[o]=t[o]);return n},f="__global_unique_id__",l=function(){return e[f]=(e[f]||0)+1};function d(t){return function(){return t}}var m=function(){};m.thatReturns=d,m.thatReturnsFalse=d(!1),m.thatReturnsTrue=d(!0),m.thatReturnsNull=d(null),m.thatReturnsThis=function(){return this},m.thatReturnsArgument=function(t){return t};var h=m,y=o(function(e,n){n.__esModule=!0;var o=s(c),r=s(l);function s(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}s(h),n.default=function(e,n){var s,c,p="__create-react-context-"+(0,r.default)()+"__",f=function(t){function e(){var n,o,r,s;i(this,e);for(var c=arguments.length,u=Array(c),p=0;p<c;p++)u[p]=arguments[p];return n=o=a(this,t.call.apply(t,[this].concat(u))),o.emitter=(r=o.props.value,s=[],{on:function(t){s.push(t)},off:function(t){s=s.filter(function(e){return e!==t})},get:function(){return r},set:function(t,e){r=t,s.forEach(function(t){return t(r,e)})}}),a(o,n)}return u(e,t),e.prototype.getChildContext=function(){var t;return(t={})[p]=this.emitter,t},e.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e=this.props.value,o=t.value,r=void 0;((s=e)===(i=o)?0!==s||1/s==1/i:s!=s&&i!=i)?r=0:(r="function"==typeof n?n(e,o):1073741823,0!=(r|=0)&&this.emitter.set(t.value,r))}var s,i},e.prototype.render=function(){return this.props.children},e}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);f.childContextTypes=((s={})[p]=o.default.object.isRequired,s);var l=function(t){function n(){var e,o;i(this,n);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return e=o=a(this,t.call.apply(t,[this].concat(s))),o.state={value:o.getValue()},o.onUpdate=function(t,e){0!=((0|o.observedBits)&e)&&o.setState({value:o.getValue()})},a(o,e)}return u(n,t),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);return l.contextTypes=((c={})[p]=o.default.object,c),{Provider:f,Consumer:l}},e.exports=n.default});n(y);var v=n(o(function(e,n){n.__esModule=!0;var o=s(react__WEBPACK_IMPORTED_MODULE_0___default.a),r=s(y);function s(t){return t&&t.__esModule?t:{default:t}}n.default=o.default.createContext||r.default,e.exports=n.default})),b=v(null),j=function(e){var n=u(e);return function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b.Consumer,null,function(r){if(null===r)throw new Error("Couldn't find Yandex.Maps API in the context. Make sure that <"+n+" /> is inside <YMaps /> provider");return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(e,Object.assign({},{ymaps:r},o))})}},O=v(null),_=function(e){return function(n){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(O.Consumer,null,function(o){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(e,Object.assign({},{parent:o},n))})}};function g(e,n,o){void 0===n&&(n=!1),void 0===o&&(o=[]);var r=function(r){function s(){r.call(this),this.state={loading:!0},this._isMounted=!1}return r&&(s.__proto__=r),(s.prototype=Object.create(r&&r.prototype)).constructor=s,s.prototype.componentDidMount=function(){var t=this;this._isMounted=!0,this.props.ymaps.load().then(function(e){return Promise.all(o.concat(t.props.modules).map(e.loadModule)).then(function(){!0===t._isMounted&&t.setState({loading:!1},function(){t.props.onLoad(e)})})}).catch(function(e){!0===t._isMounted&&t.props.onError(e)})},s.prototype.componentWillUnmount=function(){this._isMounted=!1},s.prototype.render=function(){var o=this.props.ymaps,r=!1===n||!1===this.state.loading,s=p(this.props,["onLoad","onError","modules","ymaps"]);return r&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(e,Object.assign({},{ymaps:o.getApi()},s))},s}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);return r.defaultProps={onLoad:Function.prototype,onError:Function.prototype,modules:[]},j(r)}var E={lang:"ru_RU",load:"",ns:"",mode:"release"},C={},w=function(t){var e=Date.now().toString(32);this.options=t,this.namespace=t.query.ns||E.ns,this.onload="__yandex-maps-api-onload__$$"+e,this.onerror="__yandex-maps-api-onerror__$$"+e};w.prototype.getApi=function(){return"undefined"!=typeof window&&this.namespace?window[this.namespace]:this.api},w.prototype.setApi=function(t){return this.api=t},w.prototype.getPromise=function(){return this.namespace?C[this.namespace]:this.promise},w.prototype.setPromise=function(t){return this.namespace?C[this.namespace]=this.promise=t:this.promise=t},w.prototype.load=function(){var t=this;if(this.getApi())return Promise.resolve(this.setApi(this.getApi()));if(this.getPromise())return this.setPromise(this.getPromise());var e=Object.assign({onload:this.onload,onerror:this.onerror},E,this.options.query),n=Object.keys(e).map(function(t){return t+"="+e[t]}).join("&"),o=["https://"+(this.options.enterprise?"enterprise.":"")+"api-maps.yandex.ru",this.options.version,"?"+n].join("/"),r=new Promise(function(e,n){window[t.onload]=function(n){delete window[t.onload],n.loadModule=t.loadModule.bind(t),n.ready(function(){return e(t.setApi(n))})},window[t.onerror]=function(e){delete window[t.onerror],n(e)},t.fetchScript(o).catch(window[t.onerror])});return this.setPromise(r)},w.prototype.fetchScript=function(t){var e=this;return new Promise(function(n,o){e.script=document.createElement("script"),e.script.type="text/javascript",e.script.onload=n,e.script.onerror=o,e.script.src=t,e.script.async="async",document.head.appendChild(e.script)})},w.prototype.loadModule=function(t){var e=this;return new Promise(function(n,o){e.getApi().modules.require(t,function(o){!function(t,e,n,o){void 0===o&&(o=!1),e="string"==typeof e?e.split("."):e.slice();for(var r,s=t;e.length>1;)s[r=e.shift()]||(s[r]={}),s=s[r];s[e[0]]=!0===o&&s[e[0]]||n}(e.api,t,o,!0),n(o)},o,e.getApi())})},w._name="__react-yandex-maps__";var R=function(e){function n(t){e.call(this,t),this.ymaps=new w(t)}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){!0===this.props.preload&&this.ymaps.load()},n.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(b.Provider,{value:this.ymaps},this.props.children)},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);R.defaultProps={version:"2.1",enterprise:!1,query:{lang:"ru_RU",load:"",ns:""},preload:!1};var P=/^on(?=[A-Z])/;function M(t){return Object.keys(t).reduce(function(e,n){if(P.test(n)){var o=n.replace(P,"").toLowerCase();e._events[o]=t[n]}else e[n]=t[n];return e},{_events:{}})}function S(t,e,n){"function"==typeof n&&t.events.add(e,n)}function x(t,e,n){"function"==typeof n&&t.events.remove(e,n)}function T(t,e,n){Object.keys(Object.assign({},e,n)).forEach(function(o){e[o]!==n[o]&&(x(t,o,e[o]),S(t,o,n[o]))})}var k=function(t){return"default"+t.charAt(0).toUpperCase()+t.slice(1)};function A(t,e){return void 0!==t[e]||void 0===t[k(e)]}function U(t,e,n){return(A(t,e)?t[e]:t[k(e)])||n}function $(t,e,n){void 0===n&&(n=null),t&&t!==e&&(t.hasOwnProperty("current")?t.current=null:"function"==typeof t&&t(null)),e&&(e.hasOwnProperty("current")?e.current=n:"function"==typeof e&&e(n))}function B(t){var e=t.width,n=t.height,o=t.style,r=t.className;return void 0!==o||void 0!==r?Object.assign({},o&&{style:o},r&&{className:r}):{style:{width:e,height:n}}}var D=function(e){function n(){var t=this;e.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(e){t._parentElement=e}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=n.mountObject(this._parentElement,this.props.ymaps.Map,this.props);this.setState({instance:t})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateObject(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){n.unmountObject(this.state.instance,this.props)},n.prototype.render=function(){var e=B(this.props),n=M(this.props),o=p(n,["_events","state","defaultState","options","defaultOptions","instanceRef","ymaps","children","width","height","style","className"]);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(O.Provider,{value:this.state.instance},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",Object.assign({},{ref:this._getRef},e,o),this.props.children))},n.mountObject=function(t,e,n){var o=M(n),r=o.instanceRef,s=o._events,i=new e(t,U(n,"state"),U(n,"options"));return Object.keys(s).forEach(function(t){return S(i,t,s[t])}),$(null,r,i),i},n.updateObject=function(t,e,n){var o=M(n),r=o._events,s=o.instanceRef,i=M(e),a=i._events,c=i.instanceRef;if(A(n,"state")){var u=U(e,"state",{}),p=U(n,"state",{});u.type!==p.type&&t.setType(p.type),u.behaviors!==p.behaviors&&(u.behaviors&&t.behaviors.disable(u.behaviors),p.behaviors&&t.behaviors.enable(p.behaviors)),u.zoom!==p.zoom&&t.setZoom(p.zoom),u.center!==p.center&&t.setCenter(p.center),p.bounds&&u.bounds!==p.bounds&&t.setBounds(p.bounds)}if(A(n,"options")){var f=U(e,"options"),l=U(n,"options",{});f!==l&&t.options.set(l)}U(e,"width")===U(n,"width")&&U(e,"height")===U(n,"height")||t.container.fitToViewport(),T(t,a,r),$(c,s,t)},n.unmountObject=function(t,e){var n=M(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach(function(e){return x(t,e,r[e])}),t.destroy(),$(o))},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);D.defaultProps={width:320,height:240};var L=g(D,!0,["Map"]),F=function(e){function n(){var t=this;e.call(this),this.state={instance:null},this._parentElement=null,this._getRef=function(e){t._parentElement=e}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=this;this._mounted=!0,this.props.ymaps.panorama.isSupported()&&n.mountObject(this._parentElement,this.props.ymaps.panorama,this.props).then(function(e){return t._mounted&&t.setState({instance:e})})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateObject(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){this._mounted=!1,n.unmountObject(this.state.instance,this.props)},n.prototype.render=function(){var e=B(this.props);return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",Object.assign({},{ref:this._getRef},e))},n.mountObject=function(t,e,n){var o=M(n),r=o.instanceRef,s=o._events,i=U(n,"point"),a=U(n,"locateOptions"),c=U(n,"options");return new Promise(function(n,o){e.locate(i,a).done(function(o){if(o.length>0){var i=new e.Player(t,o[0],c);$(null,r,i),Object.keys(s).forEach(function(t){return S(i,t,s[t])}),n(i)}},o)})},n.updateObject=function(t,e,n){var o=M(n),r=o._events,s=o.instanceRef,i=M(e),a=i._events,c=i.instanceRef;if(A(n,"options")){var u=U(e,"options"),p=U(n,"options");u!==p&&t.options.set(p)}if(A(n,"point")){var f=U(n,"point"),l=U(e,"point"),d=U(n,"locateOptions");f!==l&&t.moveTo(f,d)}T(t,a,r),$(c,s,t)},n.unmountObject=function(t,e){var n=M(e),o=n.instanceRef,r=n._events;null!==t&&(Object.keys(r).forEach(function(e){return x(t,e,r[e])}),$(o))},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);F.defaultProps={width:320,height:240};var W=g(F,!0,["panorama.isSupported","panorama.locate","panorama.createPlayer","panorama.Player"]),N=function(e){function n(){e.call(this),this.state={instance:null}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=n.mountControl(this.props.ymaps.control[this.props.name],this.props);this.setState({instance:t})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateControl(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){n.unmountControl(this.state.instance,this.props)},n.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(O.Provider,{value:this.state.instance},this.props.children)},n.mountControl=function(t,e){var n=M(e),o=n.instanceRef,r=n.parent,s=n.lazy,i=n._events,a=new t({data:U(e,"data"),options:U(e,"options"),state:U(e,"state"),mapTypes:U(e,"mapTypes"),lazy:s});if(Object.keys(i).forEach(function(t){return S(a,t,i[t])}),r&&r.controls&&"function"==typeof r.controls.add)r.controls.add(a);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(a)}return $(null,o,a),a},n.updateControl=function(t,e,n){var o=M(n),r=o._events,s=o.instanceRef,i=M(e),a=i._events,c=i.instanceRef;if(A(n,"options")){var u=U(e,"options"),p=U(n,"options");u!==p&&t.options.set(p)}if(A(n,"data")){var f=U(e,"data"),l=U(n,"data");f!==l&&t.data.set(l)}if(A(n,"state")){var d=U(e,"state"),m=U(n,"state");d!==m&&t.state.set(m)}if(A(n,"mapTypes")){var h=U(e,"mapTypes"),y=U(n,"mapTypes");h!==y&&(t.removeAllMapTypes(),y.forEach(function(e){return t.addMapType(e)}))}T(t,a,r),$(c,s,t)},n.unmountControl=function(t,e){var n=M(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return x(t,e,s[e])}),r.controls&&"function"==typeof r.controls.remove?r.controls.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),$(o))},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),q=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"Button"}))},!0,["control.Button"])),z=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"FullscreenControl"}))},!0,["control.FullscreenControl"])),I=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"GeolocationControl"}))},!0,["control.GeolocationControl"])),Z=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"ListBox"}))},!0,["control.ListBox"])),G=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"ListBoxItem"}))},!0,["control.ListBoxItem"])),V=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"RouteButton"}))},!0,["control.RouteButton"])),Y=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"RouteEditor"}))},!0,["control.RouteEditor"])),H=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"RoutePanel"}))},!0,["control.RoutePanel"])),J=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"RulerControl"}))},!0,["control.RulerControl"])),K=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"SearchControl"}))},!0,["control.SearchControl"])),Q=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"TrafficControl"}))},!0,["control.TrafficControl"])),X=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"TypeSelector"}))},!0,["control.TypeSelector"])),tt=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(N,Object.assign({},e,{name:"ZoomControl"}))},!0,["control.ZoomControl"])),et=_(g(function(e){function n(){e.call(this),this.state={instance:null}}return e&&(n.__proto__=e),(n.prototype=Object.create(e&&e.prototype)).constructor=n,n.prototype.componentDidMount=function(){var t=n.mountObject(this.props.ymaps.Clusterer,this.props);this.setState({instance:t})},n.prototype.componentDidUpdate=function(t){null!==this.state.instance&&n.updateObject(this.state.instance,t,this.props)},n.prototype.componentWillUnmount=function(){n.unmountObject(this.state.instance,this.props)},n.prototype.render=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(O.Provider,{value:this.state.instance},this.props.children)},n.mountObject=function(t,e){var n=M(e),o=n.instanceRef,r=n.parent,s=n._events,i=new t(U(e,"options"));if(Object.keys(s).forEach(function(t){return S(i,t,s[t])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(i);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount Clusterer");r.add(i)}return $(null,o,i),i},n.updateObject=function(t,e,n){var o=M(n),r=o._events,s=o.instanceRef,i=M(e),a=i._events,c=i.instanceRef;if(A(n,"options")){var u=U(e,"options"),p=U(n,"options");u!==p&&t.options.set(p)}T(t,a,r),$(c,s,t)},n.unmountObject=function(t,e){var n=M(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return x(t,e,s[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),$(o))},n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),!0,["Clusterer"])),nt=_(g(function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=e.mountObject(this.props.ymaps.ObjectManager,this.props);this.setState({instance:t})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=M(e),o=n.instanceRef,r=n.parent,s=n._events,i=U(e,"options"),a=U(e,"features"),c=U(e,"filter"),u=U(e,"objects"),p=U(e,"clusters"),f=new t(i);if(f.add(a||[]),f.setFilter(c),f.objects.options.set(u),f.clusters.options.set(p),Object.keys(s).forEach(function(t){return S(f,t,s[t])}),r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(f);else{if(!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount ObjectManager");r.add(f)}return $(null,o,f),f},e.updateObject=function(t,e,n){var o=M(n),r=o._events,s=o.instanceRef,i=M(e),a=i._events,c=i.instanceRef;if(A(n,"options")){var u=U(e,"options"),p=U(n,"options");u!==p&&t.options.set(p)}if(A(n,"objects")){var f=U(e,"objects"),l=U(n,"objects");f!==l&&t.objects.options.set(l)}if(A(n,"clusters")){var d=U(e,"clusters"),m=U(n,"clusters");d!==m&&t.clusters.options.set(m)}if(A(n,"filter")){var h=U(e,"filter"),y=U(n,"filter");h!==y&&t.options.set(y)}if(A(n,"features")){var v=U(e,"features"),b=U(n,"features");v!==b&&(t.remove(v),t.add(b))}T(t,a,r),$(c,s,t)},e.unmountObject=function(t,e){var n=M(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return x(t,e,s[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),$(o))},e}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),!0,["ObjectManager"])),ot=function(t){function e(){t.call(this),this.state={instance:null}}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){var t=this.props,n=t.name,o=t.ymaps,r=t.dangerZone,s=e.mountObject(r&&"function"==typeof r.modifyConstructor?r.modifyConstructor(o[n]):o[n],this.props);this.setState({instance:s})},e.prototype.componentDidUpdate=function(t){null!==this.state.instance&&e.updateObject(this.state.instance,t,this.props)},e.prototype.componentWillUnmount=function(){e.unmountObject(this.state.instance,this.props)},e.prototype.render=function(){return null},e.mountObject=function(t,e){var n=M(e),o=n.instanceRef,r=n.parent,s=n._events,i=new t(U(e,"geometry"),U(e,"properties"),U(e,"options"));if(Object.keys(s).forEach(function(t){return S(i,t,s[t])}),r&&r.geoObjects&&"function"==typeof r.geoObjects.add)r.geoObjects.add(i);else{if(!r||!r.add||"function"!=typeof r.add)throw new Error("No parent found to mount "+e.name);r.add(i)}return $(null,o,i),i},e.updateObject=function(t,e,n){var o=M(n),r=o._events,s=o.instanceRef,i=M(e),a=i._events,c=i.instanceRef;if(A(n,"geometry")){var u=U(e,"geometry",{}),p=U(n,"geometry",{});Array.isArray(p)&&p!==u?Array.isArray(p[0])&&"number"==typeof p[1]?(t.geometry.setCoordinates(p[0]),t.geometry.setRadius(p[1])):t.geometry.setCoordinates(p):"object"==typeof p&&(p.coordinates!==u.coordinates&&t.geometry.setCoordinates(p.coordinates),p.radius!==u.radius&&t.geometry.setRadius(p.radius))}if(A(n,"properties")){var f=U(e,"properties"),l=U(n,"properties");f!==l&&t.properties.set(l)}if(A(n,"options")){var d=U(e,"options"),m=U(n,"options");d!==m&&t.options.set(m)}T(t,a,r),$(c,s,t)},e.unmountObject=function(t,e){var n=M(e),o=n.instanceRef,r=n.parent,s=n._events;null!==t&&(Object.keys(s).forEach(function(e){return x(t,e,s[e])}),r.geoObjects&&"function"==typeof r.geoObjects.remove?r.geoObjects.remove(t):r.remove&&"function"==typeof r.remove&&r.remove(t),$(o))},e}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component),rt={modifyConstructor:function(t){function e(e,n,o){t.call(this,{geometry:e,properties:n},o)}return e.prototype=t.prototype,e}},st=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ot,Object.assign({},e,{name:"GeoObject",dangerZone:rt}))},!0,["GeoObject"])),it=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ot,Object.assign({},e,{name:"Circle"}))},!0,["Circle"])),at=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ot,Object.assign({},e,{name:"Placemark"}))},!0,["Placemark"])),ct=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ot,Object.assign({},e,{name:"Polygon"}))},!0,["Polygon"])),ut=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ot,Object.assign({},e,{name:"Polyline"}))},!0,["Polyline"])),pt=_(g(function(e){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ot,Object.assign({},e,{name:"Rectangle"}))},!0,["Rectangle"]));
//# sourceMappingURL=react-yandex-maps.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=orders.js.2508513c984a8615fa30.hot-update.js.map