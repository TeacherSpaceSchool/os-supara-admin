webpackHotUpdate("static\\development\\pages\\orders.js",{

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
    if (element.orders[0].status === 'обработка' && (profile.role === 'client' || ['менеджер', 'организация'].includes(profile.role) || profile.role === 'admin')) return __jsx("div", {
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
    disabled: !['client', 'admin'].includes(profile.role) || 'принят' !== element.orders[0].status,
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_19__["default"], {
      checked: confirmationClient,
      onChange: function onChange() {
        setConfirmationClient(!confirmationClient);
      },
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
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
      lineNumber: 268
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    disabled: !['client', 'организация', 'менеджер', 'admin'].includes(profile.role) || !['отмена', 'обработка'].includes(element.orders[0].status),
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
        lineNumber: 274
      },
      __self: this
    }),
    label: !element.cancelClient && !element.cancelForwarder ? 'Заказ отменен' : "\u0412\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437 \u0434\u043E ".concat(element.cancelClient ? Object(_src_lib__WEBPACK_IMPORTED_MODULE_14__["pdDDMMYYHHMMCancel"])(new Date(element.cancelClient)) : Object(_src_lib__WEBPACK_IMPORTED_MODULE_14__["pdDDMMYYHHMMCancel"])(new Date(element.cancelForwarder))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, profile.role === 'client' || ['менеджер', 'организация'].includes(profile.role) || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
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
          lineNumber: 378
        },
        __self: this
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
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
      lineNumber: 385
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

/***/ "./components/dialog/SetDate.js":
/*!**************************************!*\
  !*** ./components/dialog/SetDate.js ***!
  \**************************************/
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
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/app */ "./redux/actions/app.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\SetDate.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











var SetDate = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var classes = props.classes;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_src_lib__WEBPACK_IMPORTED_MODULE_12__["pdDatePicker"])(new Date())),
      dateChange = _useState[0],
      setDateChange = _useState[1];

  var isMobileApp = props.app.isMobileApp;
  var showMiniDialog = props.mini_dialogActions.showMiniDialog;
  var setDate = props.appActions.setDate;
  var width = isMobileApp ? window.innerWidth - 112 : 500;
  return __jsx("div", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: {
      width: width
    },
    className: classes.textField,
    label: "\u0414\u0430\u0442\u0430",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    value: dateChange,
    inputProps: {
      'aria-label': 'description'
    },
    onChange: function onChange(event) {
      return setDateChange(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
              _context.next = 2;
              return setDate(new Date(dateChange));

            case 2:
              showMiniDialog(false);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })),
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_7__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_8__, dispatch)
  };
}

SetDate.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_11__["default"])(SetDate)));

/***/ }),

/***/ "./components/dialog/Sign.js":
/*!***********************************!*\
  !*** ./components/dialog/Sign.js ***!
  \***********************************/
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
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Sign.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















var Sign = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      loginEnter = _useState[0],
      setLoginEnter = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passEnter = _useState2[0],
      setPassEnter = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      errorPass = _useState3[0],
      setErrorPass = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      errorPassRepeat = _useState4[0],
      setErrorPassRepeat = _useState4[1];

  var handlePassEnter = function handlePassEnter(event) {
    setPassEnter(event.target.value);
  };

  var handleLoginEnter = function handleLoginEnter(event) {
    setLoginEnter(event.target.value);
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      loginReg = _useState5[0],
      setLoginReg = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passReg = _useState6[0],
      setPassReg = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      passRepeatReg = _useState7[0],
      setPassRepeatReg = _useState7[1];

  var handlePassReg = function handlePassReg(event) {
    setPassReg(event.target.value);

    if (event.target.value !== passRepeatReg) {
      setErrorPassRepeat(true);
    } else {
      setErrorPassRepeat(false);
    }

    if (event.target.value.length < 8) {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }
  };

  var handlePassRepeatReg = function handlePassRepeatReg(event) {
    setPassRepeatReg(event.target.value);

    if (event.target.value !== passReg) {
      setErrorPassRepeat(true);
    } else {
      setErrorPassRepeat(false);
    }
  };

  var handleLoginReg = function handleLoginReg(event) {
    setLoginReg(event.target.value);
  };

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('enter'),
      type = _useState8[0],
      setType = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('password'),
      hide = _useState9[0],
      setHide = _useState9[1];

  var handleHide = function handleHide() {
    setHide(!hide);
  };

  var error = props.user.error;
  var isMobileApp = props.app.isMobileApp;
  var showMiniDialog = props.mini_dialogActions.showMiniDialog;
  var _props$userActions = props.userActions,
      signin = _props$userActions.signin,
      signup = _props$userActions.signup;
  var classes = props.classes;
  var width = isMobileApp ? window.innerWidth - 112 : 500;
  return __jsx("div", {
    className: classes.main,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, type === 'enter' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      width: width
    },
    id: "standard-search",
    label: "\u041B\u043E\u0433\u0438\u043D",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: loginEnter,
    onChange: handleLoginEnter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passEnter,
    onChange: handlePassEnter,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    style: {
      width: width
    },
    className: classes.message,
    onClick: function onClick() {
      setType('reg');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx("div", {
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "\u0415\u0441\u043B\u0438 \u0437\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0442\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438.")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      if (loginEnter.length > 0 && passEnter.length > 0) signin({
        login: loginEnter,
        password: passEnter
      });
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "\u0412\u043E\u0439\u0442\u0438"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "standard-search",
    label: "\u041B\u043E\u0433\u0438\u043D",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: loginReg,
    onChange: handleLoginReg,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passReg,
    onChange: handlePassReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_15___default()(classes.margin, classes.textField),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    htmlFor: "adornment-password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passRepeatReg,
    onChange: handlePassRepeatReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_14__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, errorPass ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F") : null, errorPassRepeat ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442") : null, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      if (!errorPass && !errorPassRepeat) signup({
        login: loginReg,
        password: passReg
      });
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

Sign.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_17__["default"])(Sign)));

/***/ })

})
//# sourceMappingURL=orders.js.db7c510b78da5c701c67.hot-update.js.map