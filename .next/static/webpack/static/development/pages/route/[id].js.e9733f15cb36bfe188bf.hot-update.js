webpackHotUpdate("static\\development\\pages\\route\\[id].js",{

/***/ "./components/order/CardOrder.js":
/*!***************************************!*\
  !*** ./components/order/CardOrder.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _src_styleMUI_orders_cardOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/styleMUI/orders/cardOrder */ "./src/styleMUI/orders/cardOrder.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _dialog_Order__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dialog/Order */ "./components/dialog/Order.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var CardOrder = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_orders_cardOrder__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var element = props.element,
      setList = props.setList,
      route = props.route,
      getInvoices = props.getInvoices;
  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var statusColor = {
    'обработка': 'orange',
    'принят': 'blue',
    'выполнен': 'green',
    'отмена': 'red'
  };
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.card,
    onClick: function onClick() {
      setMiniDialog('Заказ', __jsx(_dialog_Order__WEBPACK_IMPORTED_MODULE_10__["default"], {
        getInvoices: getInvoices,
        route: route,
        element: element,
        setList: setList
      }));
      showMiniDialog(true);
    }
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.column
  }, __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.number
  }, element.number), "\xA0", __jsx("div", {
    className: classes.status,
    style: {
      background: statusColor[element.orders[0].status]
    }
  }, element.orders[0].status === 'принят' && (element.confirmationForwarder || element.confirmationClient) ? element.confirmationClient ? 'подтвержден клиентом' : element.confirmationForwarder ? 'доставлен поставщиком' : element.orders[0].status : element.orders[0].status)), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0414\u0430\u0442\u0430:\xA0"), __jsx("div", {
    className: classes.value
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_9__["pdDDMMYYHHMM"])(new Date(element.updatedAt)))), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0410\u0434\u0440\u0435\u0441:\xA0"), __jsx("div", {
    className: classes.value
  }, element.address[0])), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u041F\u043E\u043B\u0443\u0447\u0430\u0442\u0435\u043B\u044C:\xA0"), __jsx("div", {
    className: classes.value
  }, element.client.name)), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u041F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A:\xA0"), __jsx("div", {
    className: classes.value
  }, element.orders[0].item.organization.name)), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0421\u0443\u043C\u043C\u0430:\xA0"), __jsx("div", {
    className: classes.value
  }, element.allPrice, "\xA0\u0441\u043E\u043C")))));
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_7__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_8__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(CardOrder));

/***/ })

})
//# sourceMappingURL=[id].js.e9733f15cb36bfe188bf.hot-update.js.map