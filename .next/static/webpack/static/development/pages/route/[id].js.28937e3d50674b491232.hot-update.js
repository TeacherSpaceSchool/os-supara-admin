webpackHotUpdate("static\\development\\pages\\route\\[id].js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _src_gql_order__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/gql/order */ "./src/gql/order.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _Confirmation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _components_dialog_Geo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/dialog/Geo */ "./components/dialog/Geo.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");



var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Order.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;


















var Order = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(element.orders),
      orders = _useState[0],
      setOrders = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(element.allPrice),
      allPrice = _useState2[0],
      setAllPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(element.taken),
      taken = _useState3[0],
      setTaken = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(element.confirmationForwarder),
      confirmationForwarder = _useState4[0],
      setConfirmationForwarder = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(element.confirmationClient),
      confirmationClient = _useState5[0],
      setConfirmationClient = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(element.cancelForwarder != undefined && element.cancelForwarder),
      cancelForwarder = _useState6[0],
      setCancelForwarder = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(element.cancelClient != undefined && element.cancelClient),
      cancelClient = _useState7[0],
      setCancelClient = _useState7[1];

  var width = isMobileApp ? window.innerWidth - 112 : 500;
  var showSnackBar = props.snackbarActions.showSnackBar;

  var canculateAllPrice = function canculateAllPrice() {
    allPrice = 0;

    for (var i = 0; i < orders.length; i++) {
      allPrice += orders[i].allPrice;
    }

    if (element.usedBonus && element.usedBonus > 0) allPrice -= element.usedBonus;
    setAllPrice(allPrice);
  };

  var increment = function increment(idx) {
    orders[idx].count += 1;
    orders[idx].allPrice = orders[idx].count * (orders[idx].item.stock === 0 || orders[idx].item.stock === undefined ? orders[idx].item.price : orders[idx].item.stock);
    setOrders(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(orders));
    canculateAllPrice();
  };

  var decrement = function decrement(idx) {
    if (orders[idx].count > 1) {
      orders[idx].count -= 1;
      orders[idx].allPrice = orders[idx].count * (orders[idx].item.stock === 0 || orders[idx].item.stock === undefined ? orders[idx].item.price : orders[idx].item.stock);
      setOrders(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(orders));
      canculateAllPrice();
    }
  };

  var remove = function remove(idx) {
    if (orders.length > 1) {
      orders.splice(idx, 1);
      setOrders(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(orders));
      canculateAllPrice();
    } else showSnackBar('Товары не могут отсутствовать в заказе');
  };

  return __jsx("div", {
    className: classes.column,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u0417\u0430\u043A\u0430\u0437 \u2116:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, element.number)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\u0421\u0442\u0430\u0442\u0443\u0441:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, element.orders[0].status === 'принят' && (element.confirmationForwarder || element.confirmationClient) ? element.confirmationClient ? 'подтвержден клиентом' : element.confirmationForwarder ? 'доставлен поставщиком' : element.orders[0].status : element.orders[0].status)), element.agent && element.agent.name ? __jsx("a", {
    href: "/employment/".concat(element.agent._id),
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "\u0410\u0433\u0435\u043D\u0442: \xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, element.agent.name))) : null, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "\u0410\u0434\u0440\u0435\u0441: \xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, element.address[0])), __jsx("div", {
    className: classes.geo,
    style: {
      color: element.address[1] ? '#ffb300' : 'red'
    },
    onClick: function onClick() {
      if (element.address[1]) {
        setMiniDialog('Геолокация', __jsx(_components_dialog_Geo__WEBPACK_IMPORTED_MODULE_16__["default"], {
          geo: element.address[1],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }), true);
        showMiniDialog(true);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, element.address[1] ? 'Посмотреть геолокацию' : 'Геолокация не задана'), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u043A\u0430\u0437\u0430: \xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_14__["pdDDMMYYHHMM"])(new Date(element.createdAt)))), element.dateDelivery ? __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "\u0412\u0440\u0435\u043C\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_14__["pdDDMMYYHHMM"])(new Date(element.dateDelivery)))) : null, __jsx("a", {
    href: "/client/".concat(element.client._id),
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, element.client.name))), __jsx("a", {
    href: "/organization/".concat(element.orders[0].item.organization._id),
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, element.orders[0].item.organization.name))), element.usedBonus && element.usedBonus > 0 ? __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0431\u043E\u043D\u0443\u0441:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, element.usedBonus, "\xA0\u0441\u043E\u043C")) : null, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "\u0421\u0443\u043C\u043C\u0430:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, allPrice, "\xA0\u0441\u043E\u043C")), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, element.paymentMethod)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, element.info)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "\u0422\u043E\u0432\u0430\u0440\u044B:"), orders.map(function (order, idx) {
    if (element.orders[0].status === 'обработка' && (profile.role === 'client' || ['менеджер', 'организация', 'агент'].includes(profile.role) || profile.role === 'admin')) return __jsx("div", {
      key: idx,
      className: classes.column,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, "\u0422\u043E\u0432\u0430\u0440:\xA0"), __jsx("a", {
      href: "/item/".concat(order.item._id),
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, order.item.name)), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
      onClick: function onClick() {
        remove(idx);
      },
      color: "primary",
      className: classes.button,
      "aria-label": "\u0443\u0434\u0430\u043B\u0438\u0442\u044C",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_18___default.a, {
      style: {
        height: 20,
        width: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }))), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:\xA0"), __jsx("div", {
      className: classes.counterbtn,
      onClick: function onClick() {
        decrement(idx);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "-"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, order.count, "\xA0\u0448\u0442"), __jsx("div", {
      className: classes.counterbtn,
      onClick: function onClick() {
        increment(idx);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, "+")), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, order.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }));else return __jsx("div", {
      key: idx,
      className: classes.column,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, __jsx("a", {
      href: "/item/".concat(order.item._id),
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, "\u0422\u043E\u0432\u0430\u0440:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, order.item.name))), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, order.count, "\xA0\u0448\u0442")), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, order.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    disabled: !['менеджер', 'организация', 'admin'].includes(profile.role) || !['обработка', 'принят'].includes(element.orders[0].status),
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
      checked: taken,
      onChange: function onChange() {
        setTaken(!taken);
      },
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }),
    label: "\u0417\u0430\u043A\u0430\u0437 \u043F\u0440\u0438\u043D\u044F\u0442",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    disabled: !['менеджер', 'организация', 'admin', 'экспедитор'].includes(profile.role) || 'принят' !== element.orders[0].status,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
      checked: confirmationForwarder,
      onChange: function onChange() {
        setConfirmationForwarder(!confirmationForwarder);
      },
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }),
    label: "\u0417\u0430\u043A\u0430\u0437 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    disabled: !['client', 'admin'].includes(profile.role) || 'принят' !== element.orders[0].status || 'экспедитор' === profile.role && !element.client.user,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
      checked: confirmationClient,
      onChange: function onChange() {
        setConfirmationClient(!confirmationClient);
      },
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260
      },
      __self: this
    }),
    label: "\u0417\u0430\u043A\u0430\u0437 \u043F\u043E\u043B\u0443\u0447\u0435\u043D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    disabled: !['client', 'организация', 'менеджер', 'admin', 'агент'].includes(profile.role) || !['отмена', 'обработка'].includes(element.orders[0].status),
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
      checked: element.cancelClient != undefined || element.cancelForwarder != undefined ? element.cancelClient != undefined ? cancelClient : cancelForwarder : 'client' === profile.role ? cancelClient : cancelForwarder,
      onChange: function onChange() {
        if ('client' === profile.role) setCancelClient(!cancelClient);else if ('admin' === profile.role) {
          if (element.cancelClient != undefined) setCancelClient(!cancelClient);else setCancelForwarder(!cancelForwarder);
        } else setCancelForwarder(!cancelForwarder);
      },
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }),
    label: !element.cancelClient && !element.cancelForwarder ? 'Заказ отменен' : "\u0417\u0430\u043A\u0430\u0437 \u043E\u0442\u043C\u0435\u043D\u0435\u043D. \u0412\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0434\u043E ".concat(element.cancelClient ? Object(_src_lib__WEBPACK_IMPORTED_MODULE_14__["pdDDMMYYHHMMCancel"])(new Date(element.cancelClient)) : Object(_src_lib__WEBPACK_IMPORTED_MODULE_14__["pdDDMMYYHHMMCancel"])(new Date(element.cancelForwarder))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, profile.role === 'client' || ['менеджер', 'организация', 'агент', 'экспедитор'].includes(profile.role) || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      var action =
      /*#__PURE__*/
      function () {
        var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var invoice, sendOrders, invoices;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  invoice = {
                    invoice: element._id
                  };
                  if (element.taken !== taken) invoice.taken = taken;
                  if (element.confirmationClient !== confirmationClient) invoice.confirmationClient = confirmationClient;
                  if (element.confirmationForwarder !== confirmationForwarder) invoice.confirmationForwarder = confirmationForwarder;
                  if (element.cancelClient !== cancelClient) invoice.cancelClient = cancelClient;
                  if (element.cancelForwarder !== cancelForwarder) invoice.cancelForwarder = cancelForwarder;
                  _context.next = 8;
                  return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_8__["setInvoice"])(invoice);

                case 8:
                  if (element.orders[0].status !== 'обработка') sendOrders = [];else sendOrders = orders.map(function (order) {
                    return {
                      _id: order._id,
                      count: order.count,
                      allPrice: order.allPrice,
                      status: order.status
                    };
                  });
                  _context.next = 11;
                  return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_8__["setOrder"])({
                    orders: sendOrders,
                    invoice: element._id
                  });

                case 11:
                  invoices = _context.sent.invoices;
                  if (setList) setList(invoices);
                  if (getInvoices) getInvoices();
                  showMiniDialog(false);

                case 15:
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

      setMiniDialog('Вы уверенны?', __jsx(_Confirmation__WEBPACK_IMPORTED_MODULE_15__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C") : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_9__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_11__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_10__, dispatch)
  };
}

Order.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_13__["default"])(Order)));

/***/ }),

/***/ "./pages/route/[id].js":
/*!*****************************!*\
  !*** ./pages/route/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_gql_organization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/gql/organization */ "./src/gql/organization.js");
/* harmony import */ var _src_gql_order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/gql/order */ "./src/gql/order.js");
/* harmony import */ var _src_gql_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/gql/route */ "./src/gql/route.js");
/* harmony import */ var _src_gql_employment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/gql/employment */ "./src/gql/employment.js");
/* harmony import */ var _src_styleMUI_route_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/styleMUI/route/route */ "./src/styleMUI/route/route.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _components_order_CardOrder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/order/CardOrder */ "./components/order/CardOrder.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _components_dialog_GeoRoute__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../components/dialog/GeoRoute */ "./components/dialog/GeoRoute.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");




var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\route\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




























var Route = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(function (props) {
  var profile = props.user.profile;
  var classes = Object(_src_styleMUI_route_route__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var data = props.data;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  var isMobileApp = props.app.isMobileApp;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.route ? Object(_src_lib__WEBPACK_IMPORTED_MODULE_27__["pdDatePicker"])(new Date(data.route.dateStart)) : null),
      dateStart = _useState[0],
      setDateStart = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.route ? data.route.employment : {}),
      employment = _useState2[0],
      setEmployment = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.route.status),
      status = _useState3[0],
      setStatus = _useState3[1];

  var handleEmployment = function handleEmployment(event) {
    setEmployment({
      _id: event.target.value,
      name: event.target.name
    });
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(router.query.id === 'new' || !data.route ? {} : data.route.employment.organization),
      organization = _useState4[0],
      setOrganization = _useState4[1];

  var handleOrganization = function handleOrganization(event) {
    setOrganization({
      _id: event.target.value,
      name: event.target.name
    });
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.route ? data.route.invoices : []),
      invoices = _useState5[0],
      setInvoices = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      cancelInvoices = _useState6[0],
      setCancelInvoices = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      allInvoices = _useState7[0],
      setAllInvoices = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      unselectedInvoices = _useState8[0],
      setUnselectedInvoices = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('Все'),
      selectType = _useState9[0],
      setSelectType = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      employments = _useState10[0],
      setEmployments = _useState10[1];

  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var showSnackBar = props.snackbarActions.showSnackBar;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var _organization;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (data.route) {
                if (['организация', 'менеджер'].includes(profile.role) && router.query.id === 'new') {
                  _organization = data.organizations.filter(function (element) {
                    return element._id === profile.organization;
                  });
                  setOrganization(_organization[0]);
                }
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [profile]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(data.route && ['организация', 'менеджер', 'admin'].includes(profile.role))) {
                _context2.next = 6;
                break;
              }

              _context2.t0 = setUnselectedInvoices;
              _context2.next = 4;
              return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_9__["getOrdersForRouting"])();

            case 4:
              _context2.t1 = _context2.sent.invoicesForRouting;
              (0, _context2.t0)(_context2.t1);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!data.route) {
                _context3.next = 7;
                break;
              }

              if (router.query.id === 'new') setEmployment({});
              _context3.t0 = setEmployments;
              _context3.next = 5;
              return Object(_src_gql_employment__WEBPACK_IMPORTED_MODULE_11__["getEcspeditors"])({
                _id: organization._id
              });

            case 5:
              _context3.t1 = _context3.sent.ecspeditors;
              (0, _context3.t0)(_context3.t1);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }, [organization]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      var _allInvoices;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (data.route) {
                if (selectType == 'Все') _allInvoices = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(invoices), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(unselectedInvoices));else if (selectType == 'Свободные') _allInvoices = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(unselectedInvoices);else if (selectType == 'Выбраные') _allInvoices = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(invoices);

                _allInvoices.sort(function (a, b) {
                  a.createdAt = new Date(a.createdAt);
                  b.createdAt = new Date(b.createdAt);
                  if (a.createdAt > b.createdAt) return -1;
                  if (a.createdAt < b.createdAt) return 1;
                  return 0;
                });

                setAllInvoices(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_allInvoices));
              }

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }, [selectType, unselectedInvoices, invoices]);
  var statusColor = {
    'создан': 'orange',
    'выполняется': 'blue',
    'выполнен': 'green'
  };

  var getInvoices =
  /*#__PURE__*/
  function () {
    var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!data.route) {
                _context5.next = 19;
                break;
              }

              _context5.t0 = setUnselectedInvoices;
              _context5.next = 4;
              return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_9__["getOrdersForRouting"])();

            case 4:
              _context5.t1 = _context5.sent.invoicesForRouting;
              (0, _context5.t0)(_context5.t1);
              setCancelInvoices([]);

              if (!data.route._id) {
                _context5.next = 19;
                break;
              }

              _context5.t2 = setInvoices;
              _context5.next = 11;
              return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["getRoute"])({
                _id: data.route._id
              });

            case 11:
              _context5.t3 = _context5.sent.route.invoices;
              _context5.next = 14;
              return (0, _context5.t2)(_context5.t3);

            case 14:
              _context5.t4 = setStatus;
              _context5.next = 17;
              return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["getRoute"])({
                _id: data.route.id
              });

            case 17:
              _context5.t5 = _context5.sent.route.status;
              (0, _context5.t4)(_context5.t5);

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getInvoices() {
      return _ref5.apply(this, arguments);
    };
  }();

  var breakGeoRoute = invoices.filter(function (element) {
    return !element.address[1];
  }).length > 0;
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pageName: data.route ? router.query.id === 'new' ? 'Добавить' : data.route.number : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, data.route ? router.query.id === 'new' ? 'Добавить' : data.route.number : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: data.route ? router.query.id === 'new' ? 'Добавить' : data.route.number : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_30__["urlMain"], "/static/512x512.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_30__["urlMain"], "/route/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_30__["urlMain"], "/route/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: isMobileApp ? classes.pageM : classes.pageD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, data.route ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, router.query.id === 'new' ? null : __jsx("div", {
    className: classes.status,
    style: {
      background: statusColor[status]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, status), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, data.route ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, router.query.id === 'new' ? null : __jsx("div", {
    className: classes.number,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, data.route.number), (router.query.id === 'new' || status === 'создан') && profile.role === 'admin' ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputDF,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: organization._id,
    onChange: handleOrganization,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, data.organizations.map(function (element) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: element._id,
      value: element._id,
      ola: element.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, element.name);
  }))) : __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
    label: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
    value: organization.name,
    className: isMobileApp ? classes.inputM : classes.inputDF,
    inputProps: {
      'aria-label': 'description',
      readOnly: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), (router.query.id === 'new' || status === 'создан') && ['admin', 'организация', 'менеджер'].includes(profile.role) ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputDF,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0442\u043E\u0440"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: employment._id,
    onChange: handleEmployment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, employments.map(function (element) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: element._id,
      value: element._id,
      ola: element.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, element.name);
  }))) : __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
    label: "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0442\u043E\u0440",
    value: employment.name,
    className: isMobileApp ? classes.inputM : classes.inputDF,
    inputProps: {
      'aria-label': 'description',
      readOnly: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputDF,
    label: "\u0414\u0430\u0442\u0430",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    value: dateStart,
    inputProps: {
      'aria-label': 'description',
      readOnly: !(router.query.id === 'new' || status === 'создан')
    },
    onChange: function onChange(event) {
      return setDateStart(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), __jsx("div", {
    style: {
      color: breakGeoRoute ? 'red' : '#ffb300'
    },
    onClick: function onClick() {
      setMiniDialog('Маршрут', __jsx(_components_dialog_GeoRoute__WEBPACK_IMPORTED_MODULE_29__["default"], {
        invoices: invoices,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }), true);
      showMiniDialog(true);
    },
    className: classes.geo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, breakGeoRoute ? 'Маршрут неполный' : 'Просмотреть маршрут'), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), __jsx("div", {
    style: {
      justifyContent: 'center'
    },
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx("div", {
    style: {
      background: selectType === 'Все' ? '#ffb300' : '#ffffff'
    },
    onClick: function onClick() {
      setSelectType('Все');
    },
    className: classes.selectType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "\u0412\u0441\u0435"), __jsx("div", {
    style: {
      background: selectType === 'Свободные' ? '#ffb300' : '#ffffff'
    },
    onClick: function onClick() {
      setSelectType('Свободные');
    },
    className: classes.selectType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0435"), __jsx("div", {
    style: {
      background: selectType === 'Выбраные' ? '#ffb300' : '#ffffff'
    },
    onClick: function onClick() {
      setSelectType('Выбраные');
    },
    className: classes.selectType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "\u0412\u044B\u0431\u0440\u0430\u043D\u044B\u0435")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), __jsx("div", {
    className: classes.listInvoices,
    style: {
      zoom: isMobileApp ? 0.83 : 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, allInvoices ? allInvoices.map(function (element, idx) {
    return __jsx("div", {
      key: idx,
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, ['обработка', 'принят'].includes(element.orders[0].status)
    /*&&!element.confirmationForwarder*/
    ? __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
      checked: invoices.includes(element),
      onChange: function onChange() {
        if (!invoices.includes(element)) {
          invoices.push(element);
          unselectedInvoices.splice(unselectedInvoices.indexOf(element), 1);
          cancelInvoices.splice(cancelInvoices.indexOf(element), 1);
        } else {
          invoices.splice(invoices.indexOf(element), 1);
          unselectedInvoices.push(element);
          cancelInvoices.push(element);
        }

        setInvoices(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(invoices));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218
      },
      __self: this
    }) : null, __jsx(_components_order_CardOrder__WEBPACK_IMPORTED_MODULE_17__["default"], {
      getInvoices: getInvoices,
      route: data.route._id,
      element: element,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }));
  }) : null), __jsx("div", {
    className: isMobileApp ? classes.bottomRouteM : classes.bottomRouteD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, router.query.id === 'new' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (dateStart && employment._id && organization._id) {
                action =
                /*#__PURE__*/
                function () {
                  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6() {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            if (!(employment._id !== undefined && dateStart)) {
                              _context6.next = 5;
                              break;
                            }

                            invoices = invoices.map(function (element) {
                              return element._id;
                            });
                            _context6.next = 4;
                            return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["addRoute"])({
                              invoices: invoices,
                              employment: employment._id,
                              dateStart: new Date(dateStart)
                            });

                          case 4:
                            next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/routes');

                          case 5:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6);
                  }));

                  return function action() {
                    return _ref7.apply(this, arguments);
                  };
                }();

                setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                  action: action,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                  },
                  __self: this
                }));
                showMiniDialog(true);
              } else {
                showSnackBar('Заполните все поля');
              }

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C") : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8() {
                  var editElement;
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          editElement = {
                            _id: data.route._id
                          };
                          if (employment._id !== data.route.employment._id && status === 'создан') editElement.employment = employment._id;
                          if (dateStart && status === 'создан') editElement.dateStart = new Date(dateStart);
                          editElement.invoices = invoices.map(function (element) {
                            return element._id;
                          });
                          if (cancelInvoices.length > 0) editElement.cancelInvoices = cancelInvoices.map(function (element) {
                            return element._id;
                          });
                          _context8.next = 7;
                          return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["setRoute"])(editElement);

                        case 7:
                          getInvoices();

                        case 8:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function action() {
                  return _ref9.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 273
                },
                __self: this
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), ['организация', 'менеджер', 'admin'].includes(profile.role) && status === 'создан' ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref11 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["deleteRoute"])([data.route._id]);

                        case 2:
                          next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/routes');

                        case 3:
                        case "end":
                          return _context10.stop();
                      }
                    }
                  }, _callee10);
                }));

                return function action() {
                  return _ref11.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 285
                },
                __self: this
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")) : null))) : 'Ничего не найдено', __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }))) : __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E")));
});

Route.getInitialProps =
/*#__PURE__*/
function () {
  var _ref12 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!['организация', 'менеджер', 'admin', 'экспедитор'].includes(ctx.store.getState().user.profile.role)) if (ctx.res) {
              ctx.res.writeHead(302, {
                Location: '/'
              });
              ctx.res.end();
            } else next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/');
            _context12.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"];
            _context12.t1 = {};

            if (!(ctx.query.id !== 'new')) {
              _context12.next = 9;
              break;
            }

            _context12.next = 6;
            return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["getRoute"])({
              _id: ctx.query.id
            });

          case 6:
            _context12.t2 = _context12.sent;
            _context12.next = 10;
            break;

          case 9:
            _context12.t2 = {
              route: {
                invoices: [],
                employment: {},
                status: '',
                dateStart: null,
                dateEnd: null,
                number: ''
              }
            };

          case 10:
            _context12.t3 = _context12.t2;
            _context12.next = 13;
            return Object(_src_gql_organization__WEBPACK_IMPORTED_MODULE_8__["getOrganizations"])({
              search: '',
              sort: 'name',
              filter: ''
            });

          case 13:
            _context12.t4 = _context12.sent;
            _context12.t5 = (0, _context12.t0)(_context12.t1, _context12.t3, _context12.t4);
            return _context12.abrupt("return", {
              data: _context12.t5
            });

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x) {
    return _ref12.apply(this, arguments);
  };
}();

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_22__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_23__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_22__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_24__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Route));

/***/ })

})
//# sourceMappingURL=[id].js.28937e3d50674b491232.hot-update.js.map