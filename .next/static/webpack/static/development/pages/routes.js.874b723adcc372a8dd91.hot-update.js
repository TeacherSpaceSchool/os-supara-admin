webpackHotUpdate("static\\development\\pages\\routes.js",{

/***/ "./components/route/CardRoute.js":
/*!***************************************!*\
  !*** ./components/route/CardRoute.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _src_styleMUI_route_cardRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/styleMUI/route/cardRoute */ "./src/styleMUI/route/cardRoute.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _src_gql_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/gql/route */ "./src/gql/route.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _dialog_Confirmation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var CardOrder = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_route_cardRoute__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var element = props.element,
      setList = props.setList;
  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var statusColor = {
    'создан': 'orange',
    'выполняется': 'blue',
    'выполнен': 'green'
  };
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.card
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: "/route/[id]",
    as: "/route/".concat(element !== undefined ? element._id : 'new')
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.column
  }, __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u041D\u043E\u043C\u0435\u0440:\xA0"), __jsx("div", {
    className: classes.value
  }, element.number), __jsx("div", {
    className: classes.status,
    style: {
      background: statusColor[element.status]
    }
  }, element.status)), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0414\u0430\u0442\u0430:\xA0"), __jsx("div", {
    className: classes.value
  }, Object(_src_lib__WEBPACK_IMPORTED_MODULE_15__["pdDDMMYY"])(new Date(element.dateStart)))), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F:\xA0"), __jsx("div", {
    className: classes.value
  }, element.employment.organization.name)), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0442\u043E\u0440:\xA0"), __jsx("div", {
    className: classes.value
  }, element.employment.name)), __jsx("div", {
    className: classes.row
  }, __jsx("div", {
    className: classes.nameField
  }, "\u0417\u0430\u043A\u0430\u0437\u044B:\xA0"), __jsx("div", {
    className: classes.column
  }, element.invoices.map(function (invoice, idx) {
    return __jsx("div", {
      key: idx,
      className: classes.value
    }, invoice.number);
  })))))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__["default"], null, element.status === 'создан' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
                          _context.t0 = setList;
                          _context.next = 3;
                          return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_13__["deleteRoute"])([element._id]);

                        case 3:
                          _context.t1 = _context.sent.routes;
                          (0, _context.t0)(_context.t1);

                        case 5:
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

              setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_16__["default"], {
                action: action
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })),
    size: "small",
    color: "primary"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C") : null));
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_11__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_10__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(CardOrder));

/***/ })

})
//# sourceMappingURL=routes.js.874b723adcc372a8dd91.hot-update.js.map