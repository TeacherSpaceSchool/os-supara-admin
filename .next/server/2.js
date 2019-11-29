exports.ids = [2];
exports.modules = {

/***/ "./components/dialog/Order.js":
/*!************************************!*\
  !*** ./components/dialog/Order.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_gql_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/gql/order */ "./src/gql/order.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/styleMUI/dialogContent */ "./src/styleMUI/dialogContent.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\dialog\\Order.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const Confirmation = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(() => __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./Confirmation */ "./components/dialog/Confirmation.js")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Confirmation */ "./components/dialog/Confirmation.js")],
    modules: ['./Confirmation']
  }
});
const Order = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    isMobileApp
  } = props.app;
  const {
    profile
  } = props.user;
  const {
    showMiniDialog,
    setMiniDialog
  } = props.mini_dialogActions;
  const {
    classes,
    element,
    setList,
    route,
    getInvoices
  } = props;
  const width = isMobileApp ? window.innerWidth - 126 : 500;
  return __jsx("div", {
    className: classes.column,
    style: {
      width: width
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "\u0417\u0430\u043A\u0430\u0437 \u2116:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, element.number)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "\u0421\u0442\u0430\u0442\u0443\u0441:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, element.orders[0].status === 'принят' && (element.confirmationForwarder || element.confirmationClient) ? element.confirmationClient ? 'подтвержден клиентом' : element.confirmationForwarder ? 'доставлен поставщиком' : element.orders[0].status : element.orders[0].status)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u043A\u0430\u0437\u0430: \xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_11__["pdDDMMYYHHMM"])(new Date(element.updatedAt)))), __jsx("a", {
    href: `/client/${element.client.user._id}`,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, element.client.name))), __jsx("a", {
    href: `/organization/${element.orders[0].item.organization._id}`,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, element.orders[0].item.organization.name))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, "\u0421\u0443\u043C\u043C\u0430:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, element.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, element.paymentMethod)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, element.info)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "\u0422\u043E\u0432\u0430\u0440\u044B:"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), element.orders.map((order, idx) => __jsx("div", {
    key: idx,
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx("a", {
    href: `/item/${order.item._id}`,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "\u0422\u043E\u0432\u0430\u0440:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, order.item.name))), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, order.count, "\xA0\u0448\u0442")), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, order.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  })))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, profile.role === 'client' && 'принят' === element.orders[0].status && !element.confirmationClient || ['менеджер', 'организация'].includes(profile.role) && 'принят' === element.orders[0].status && !element.confirmationForwarder || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      const action = async () => {
        let invoices = (await Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_5__["approveOrders"])({
          route: route,
          invoices: [element._id]
        })).invoices;
        if (setList) setList(invoices);
        if (getInvoices) getInvoices();
      };

      setMiniDialog('Вы уверенны?', __jsx(Confirmation, {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: undefined
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "\u0417\u0430\u043A\u0430\u0437 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D") : null, profile.role === 'client' && element.orders[0].status === 'обработка' || ['менеджер', 'организация'].includes(profile.role) && ['обработка', 'принят'].includes(element.orders[0].status) && !element.confirmationForwarder || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      let _id = element.orders.map(order => order._id);

      const action = async () => {
        let invoices = (await Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_5__["cancelOrders"])({
          _id: _id
        })).invoices;
        if (setList) setList(invoices);
        if (getInvoices) getInvoices();
      };

      setMiniDialog('Вы уверенны?', __jsx(Confirmation, {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: undefined
      }));
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437") : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_6__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_8__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_7__, dispatch)
  };
}

Order.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_10__["default"])(Order)));

/***/ }),

/***/ "./src/styleMUI/dialogContent.js":
/*!***************************************!*\
  !*** ./src/styleMUI/dialogContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (theme => ({
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
  }
}));

/***/ })

};;
//# sourceMappingURL=2.js.map