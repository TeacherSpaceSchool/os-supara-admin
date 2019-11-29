webpackHotUpdate(4,{

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
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_14__);


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Order.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













var Confirmation = next_dynamic__WEBPACK_IMPORTED_MODULE_14___default()(function () {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Confirmation */ "./components/dialog/Confirmation.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Confirmation */ "./components/dialog/Confirmation.js")];
    },
    modules: ['./Confirmation']
  }
});
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
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "\u0417\u0430\u043A\u0430\u0437 \u2116:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, element.number)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\u0421\u0442\u0430\u0442\u0443\u0441:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, element.orders[0].status === 'принят' && (element.confirmationForwarder || element.confirmationClient) ? route ? element.confirmationForwarder ? 'выполнен ' : element.orders[0].status : element.confirmationClient ? 'выполнен' : element.confirmationForwarder ? 'доставлен' : element.orders[0].status : element.orders[0].status)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u043A\u0430\u0437\u0430: \xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_13__["pdDDMMYYHHMM"])(new Date(element.updatedAt)))), __jsx("a", {
    href: "/client/".concat(element.client.user._id),
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, element.client.name))), __jsx("a", {
    href: "/organization/".concat(element.orders[0].item.organization._id),
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
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, element.orders[0].item.organization.name))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\u0421\u0443\u043C\u043C\u0430:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, element.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, element.paymentMethod)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, element.info)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "\u0422\u043E\u0432\u0430\u0440\u044B:"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), element.orders.map(function (order, idx) {
    return __jsx("div", {
      key: idx,
      className: classes.column,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("a", {
      href: "/item/".concat(order.item._id),
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
    }, "\u0422\u043E\u0432\u0430\u0440:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, order.item.name))), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, order.count, "\xA0\u0448\u0442")), __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:\xA0"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, order.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }));
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
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

      setMiniDialog('Вы уверенны?', __jsx(Confirmation, {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
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

      setMiniDialog('Вы уверенны?', __jsx(Confirmation, {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
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
      lineNumber: 152
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

/***/ })

})
//# sourceMappingURL=4.b73f78f5c1e702c554e2.hot-update.js.map