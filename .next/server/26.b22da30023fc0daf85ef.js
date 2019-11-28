exports.ids = [26];
exports.modules = {

/***/ "o0q0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (theme => ({
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

/***/ }),

/***/ "r0lg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_gql_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("w8fy");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("pngM");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("//vS");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("j6IE");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("o0q0");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Confirmation = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(() => __webpack_require__.e(/* import() */ 27).then(__webpack_require__.bind(null, "y4xb")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("y4xb")],
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
    }
  }, __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0417\u0430\u043A\u0430\u0437 \u2116:\xA0"), __jsx("div", {
    className: classes.value
  }, element.number)), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0421\u0442\u0430\u0442\u0443\u0441:\xA0"), __jsx("div", {
    className: classes.value
  }, element.orders[0].status === 'принят' && (element.confirmationForwarder || element.confirmationClient) ? route ? element.confirmationForwarder ? 'выполнен' : element.orders[0].status : element.confirmationClient ? 'выполнен' : element.confirmationForwarder ? 'доставлен' : element.orders[0].status : element.orders[0].status)), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u043A\u0430\u0437\u0430: \xA0"), __jsx("div", {
    className: classes.value
  }, moment__WEBPACK_IMPORTED_MODULE_10___default()(element.updatedAt).format('DD.MM.YYYY HH:mm'))), __jsx("a", {
    href: `/client/${element.client.user._id}`,
    target: "_blank"
  }, __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C:\xA0"), __jsx("div", {
    className: classes.value
  }, element.client.name))), __jsx("a", {
    href: `/organization/${element.orders[0].item.organization._id}`,
    target: "_blank"
  }, __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A:\xA0"), __jsx("div", {
    className: classes.value
  }, element.orders[0].item.organization.name))), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0421\u0443\u043C\u043C\u0430:\xA0"), __jsx("div", {
    className: classes.value
  }, element.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B:\xA0"), __jsx("div", {
    className: classes.value
  }, element.paymentMethod)), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F:\xA0"), __jsx("div", {
    className: classes.value
  }, element.info)), __jsx("br", null), __jsx("div", {
    className: classes.column
  }, __jsx("b", null, "\u0422\u043E\u0432\u0430\u0440\u044B:"), __jsx("br", null), __jsx("br", null), element.orders.map((order, idx) => __jsx("div", {
    key: idx,
    className: classes.column
  }, __jsx("a", {
    href: `/item/${order.item._id}`,
    target: "_blank"
  }, __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0422\u043E\u0432\u0430\u0440:\xA0"), __jsx("div", {
    className: classes.value
  }, order.item.name))), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E:\xA0"), __jsx("div", {
    className: classes.value
  }, order.count, "\xA0\u0448\u0442")), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:\xA0"), __jsx("div", {
    className: classes.value
  }, order.allPrice, "\xA0\u0441\u043E\u043C")), __jsx("br", null)))), __jsx("div", null, profile.role === 'client' && 'принят' === element.orders[0].status && !element.confirmationClient || ['менеджер', 'организация'].includes(profile.role) && 'принят' === element.orders[0].status && !element.confirmationForwarder || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      const action = async () => {
        let invoices = (await Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_4__[/* approveOrders */ "b"])({
          route: route,
          invoices: [element._id]
        })).invoices;
        if (setList) setList(invoices);
        if (getInvoices) getInvoices();
      };

      setMiniDialog('Вы уверенны?', __jsx(Confirmation, {
        action: action
      }));
    },
    className: classes.button
  }, "\u0417\u0430\u043A\u0430\u0437 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D") : null, profile.role === 'client' && element.orders[0].status === 'обработка' || ['менеджер', 'организация'].includes(profile.role) && ['обработка', 'принят'].includes(element.orders[0].status) && !element.confirmationForwarder || profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      let _id = element.orders.map(order => order._id);

      const action = async () => {
        let invoices = (await Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_4__[/* cancelOrders */ "c"])({
          _id: _id
        })).invoices;
        if (setList) setList(invoices);
        if (getInvoices) getInvoices();
      };

      setMiniDialog('Вы уверенны?', __jsx(Confirmation, {
        action: action
      }));
    },
    className: classes.button
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437") : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_7__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(Order)));

/***/ })

};;