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

  var width = isMobileApp ? window.innerWidth - 144 : 500;
  var showSnackBar = props.snackbarActions.showSnackBar;

  var canculateAllPrice = function canculateAllPrice() {
    allPrice = 0;

    for (var i = 0; i < orders.length; i++) {
      allPrice += orders[i].allPrice;
    }

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
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
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
  }, "\u0417\u0430\u043A\u0430\u0437 \u2116:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, element.number)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "\u0421\u0442\u0430\u0442\u0443\u0441:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, element.orders[0].status === 'принят' && (element.confirmationForwarder || element.confirmationClient) ? element.confirmationClient ? 'подтвержден клиентом' : element.confirmationForwarder ? 'доставлен поставщиком' : element.orders[0].status : element.orders[0].status)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\u0410\u0434\u0440\u0435\u0441: \xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, element.address[0])), __jsx("div", {
    className: classes.geo,
    style: {
      color: element.address[1] ? '#ffb300' : 'red'
    },
    onClick: function onClick() {
      setMiniDialog('Геолокация', __jsx(_components_dialog_Geo__WEBPACK_IMPORTED_MODULE_16__["default"], {
        geo: element.address[1],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), true);
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, element.address[1] ? 'Посмотреть геолокацию' : 'Геолокация не задана'), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u043A\u0430\u0437\u0430: \xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_14__["pdDDMMYYHHMM"])(new Date(element.createdAt)))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\u0412\u0440\u0435\u043C\u044F \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_14__["pdDDMMYYHHMM"])(new Date(element.dateDelivery)))), __jsx("a", {
    href: "/client/".concat(element.client.user._id),
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, element.client.name))), __jsx("a", {
    href: "/organization/".concat(element.orders[0].item.organization._id),
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, element.orders[0].item.organization.name))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "\u0421\u0443\u043C\u043C\u0430:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, allPrice, "\xA0\u0441\u043E\u043C")), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, element.paymentMethod)), __jsx("div", {
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
  }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, element.info)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "\u0422\u043E\u0432\u0430\u0440\u044B:"), orders.map(function (order, idx) {
    if (element.orders[0].status === 'обработка' && (profile.role === 'client' || ['менеджер', 'организация'].includes(profile.role) || profile.role === 'admin')) return __jsx("div", {
      key: idx,
      className: classes.column,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, "\u0422\u043E\u0432\u0430\u0440:\xA0"), __jsx("a", {
      href: "/item/".concat(order.item._id),
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
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
        lineNumber: 145
      },
      __self: this
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_18___default.a, {
      style: {
        height: 20,
        width: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }))), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:\xA0"), __jsx("div", {
      className: classes.counterbtn,
      onClick: function onClick() {
        decrement(idx);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, "-"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, order.count, "\xA0\u0448\u0442"), __jsx("div", {
      className: classes.counterbtn,
      onClick: function onClick() {
        increment(idx);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, "+")), __jsx("div", {
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
    }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, order.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }));else return __jsx("div", {
      key: idx,
      className: classes.column,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }, __jsx("a", {
      href: "/item/".concat(order.item._id),
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "\u0422\u043E\u0432\u0430\u0440:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, order.item.name))), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, order.count, "\xA0\u0448\u0442")), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, order.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, element.orders[0].status === 'обработка' && (profile.role === 'client' || ['менеджер', 'организация'].includes(profile.role) || profile.role === 'admin') ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      var action =
      /*#__PURE__*/
      function () {
        var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
          var sendOrders, invoices;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  sendOrders = orders.map(function (order) {
                    return {
                      _id: order._id,
                      count: order.count,
                      allPrice: order.allPrice
                    };
                  });
                  _context.next = 3;
                  return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_8__["setOrder"])({
                    orders: sendOrders,
                    invoice: element._id
                  });

                case 3:
                  invoices = _context.sent.invoices;
                  if (setList) setList(invoices);
                  if (getInvoices) getInvoices();
                  showMiniDialog(false);

                case 7:
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
          lineNumber: 200
        },
        __self: this
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C") : null, profile.role === 'client' && 'принят' === element.orders[0].status && !element.confirmationClient || ['менеджер', 'организация'].includes(profile.role) && 'принят' === element.orders[0].status && !element.confirmationForwarder || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
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
                  return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_8__["approveOrders"])({
                    route: route,
                    invoices: [element._id]
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

      setMiniDialog('Вы уверенны?', __jsx(_Confirmation__WEBPACK_IMPORTED_MODULE_15__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "\u0417\u0430\u043A\u0430\u0437 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D") : null, profile.role === 'client' && element.orders[0].status === 'обработка' || ['менеджер', 'организация'].includes(profile.role) && ['обработка', 'принят'].includes(element.orders[0].status) && !element.confirmationForwarder || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "contained",
    color: "primary",
    onClick: function onClick() {
      var _id = element.orders.map(function (order) {
        return order._id;
      });

      var action =
      /*#__PURE__*/
      function () {
        var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
          var invoices;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_8__["cancelOrders"])({
                    _id: _id
                  });

                case 2:
                  invoices = _context3.sent.invoices;
                  if (setList) setList(invoices);
                  if (getInvoices) getInvoices();

                case 5:
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

      setMiniDialog('Вы уверенны?', __jsx(_Confirmation__WEBPACK_IMPORTED_MODULE_15__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437") : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "contained",
    color: "secondary",
    onClick: function onClick() {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
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

/***/ "./src/gql/order.js":
/*!**************************!*\
  !*** ./src/gql/order.js ***!
  \**************************/
/*! exports provided: getOrders, getOrder, addOrders, cancelOrders, approveOrders, setOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrders", function() { return getOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrder", function() { return getOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrders", function() { return addOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelOrders", function() { return cancelOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveOrders", function() { return approveOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOrder", function() { return setOrder; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../singleton/client */ "./src/singleton/client.js");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");




function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($orders: [OrderInput], $invoice: ID) {\n                        setOrder(orders: $orders, invoice: $invoice) {\n                             data\n                        }\n                    }"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($invoices: [ID]!, $route: ID) {\n                        approveOrders(invoices: $invoices, route: $route) {\n                             data\n                        }\n                    }"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($_id: [ID]!) {\n                        cancelOrders(_id: $_id) {\n                             data\n                        }\n                    }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    mutation ($info: String, $paymentMethod: String, $address: [[String]]) {\n                        addOrders(info: $info, paymentMethod: $paymentMethod, address: $address) {\n                             data\n                        }\n                    }"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($_id: ID!) {\n                        invoice(_id: $_id) {\n                            _id\n                            createdAt\n                            orders \n                                { \n                                    _id\n                                    createdAt\n                                    item\n                                        {\n                                            image\n                                            _id\n                                            name    \n                                            stock \n                                            price\n                                            organization\n                                                {_id name}\n                                        }\n                                    count\n                                    allPrice\n                                    status\n                                 }\n                            client \n                                { \n                                    _id\n                                    name\n                                    email\n                                    user \n                                        {phone} \n                                }\n                            allPrice\n                            info\n                            address\n                            paymentMethod\n                            number\n                            confirmationForwarder\n                            confirmationClient\n                            dateDelivery\n                        }\n                    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n                    query ($search: String!, $sort: String!, $filter: String!) {\n                        invoices(search: $search, sort: $sort, filter: $filter) {\n                            _id\n                            createdAt\n                            orders \n                                { \n                                    _id\n                                    createdAt\n                                    item\n                                        {\n                                            image\n                                            _id\n                                            name    \n                                            stock \n                                            price\n                                            organization\n                                                {_id name}\n                                        }\n                                    count\n                                    allPrice\n                                    status\n                                 }\n                            client \n                                { \n                                    _id\n                                    name\n                                    email\n                                    user \n                                        {_id phone} \n                                }\n                            allPrice\n                            info\n                            address\n                            paymentMethod\n                            number\n                            confirmationForwarder\n                            confirmationClient\n                            dateDelivery\n                        }\n                        sortInvoice {\n                            name\n                            field\n                        }\n                        filterInvoice {\n                           name\n                           value\n                        }\n                    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var getOrders =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var search, sort, filter, client, res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            search = _ref.search, sort = _ref.sort, filter = _ref.filter;
            _context.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context.next = 5;
            return client.query({
              variables: {
                search: search,
                sort: sort,
                filter: filter
              },
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject())
            });

          case 5:
            res = _context.sent;
            return _context.abrupt("return", res.data);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.error(_context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function getOrders(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getOrder =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref3) {
    var _id, client, res;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _id = _ref3._id;
            _context2.prev = 1;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context2.next = 5;
            return client.query({
              variables: {
                _id: _id
              },
              query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject2())
            });

          case 5:
            res = _context2.sent;
            return _context2.abrupt("return", res.data);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.error(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));

  return function getOrder(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
var addOrders =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(element) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context3.next = 4;
            return client.mutate({
              variables: element,
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject3())
            });

          case 4:
            _context3.next = 9;
            break;

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function addOrders(_x3) {
    return _ref5.apply(this, arguments);
  };
}();
var cancelOrders =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(element) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context4.next = 4;
            return client.mutate({
              variables: element,
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject4())
            });

          case 4:
            _context4.next = 6;
            return getOrders(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            return _context4.abrupt("return", _context4.sent);

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function cancelOrders(_x4) {
    return _ref6.apply(this, arguments);
  };
}();
var approveOrders =
/*#__PURE__*/
function () {
  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(element) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context5.next = 4;
            return client.mutate({
              variables: element,
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject5())
            });

          case 4:
            _context5.next = 6;
            return getOrders(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            return _context5.abrupt("return", _context5.sent);

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

  return function approveOrders(_x5) {
    return _ref7.apply(this, arguments);
  };
}();
var setOrder =
/*#__PURE__*/
function () {
  var _ref8 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(element) {
    var client;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            client = new _singleton_client__WEBPACK_IMPORTED_MODULE_4__["SingletonApolloClient"]().getClient();
            _context6.next = 4;
            return client.mutate({
              variables: element,
              mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_3__["gql"])(_templateObject6())
            });

          case 4:
            _context6.next = 6;
            return getOrders(new _singleton_store__WEBPACK_IMPORTED_MODULE_5__["SingletonStore"]().getStore().getState().app);

          case 6:
            return _context6.abrupt("return", _context6.sent);

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 12:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 9]]);
  }));

  return function setOrder(_x6) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ })

})
//# sourceMappingURL=orders.js.adef3b4747e01f58f5e6.hot-update.js.map