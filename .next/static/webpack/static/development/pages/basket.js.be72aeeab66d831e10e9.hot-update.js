webpackHotUpdate("static\\development\\pages\\basket.js",{

/***/ "./pages/basket.js":
/*!*************************!*\
  !*** ./pages/basket.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_styleMUI_basket_basket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/styleMUI/basket/basket */ "./src/styleMUI/basket/basket.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "./node_modules/@material-ui/icons/Cancel.js");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _src_gql_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/gql/client */ "./src/gql/client.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_dialog_BuyBasket__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/dialog/BuyBasket */ "./components/dialog/BuyBasket.js");
/* harmony import */ var _components_dialog_Sign__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/dialog/Sign */ "./components/dialog/Sign.js");
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");






var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\basket.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;























var Basket = react__WEBPACK_IMPORTED_MODULE_7___default.a.memo(function (props) {
  var authenticated = props.user.authenticated;
  var classes = Object(_src_styleMUI_basket_basket__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var showSnackBar = props.snackbarActions.showSnackBar;
  var data = props.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.baskets),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      allPrice = _useState2[0],
      setAllPrice = _useState2[1];

  var isMobileApp = props.app.isMobileApp;

  var increment = function increment(idx) {
    list[idx].count += 1;
    setBasketChange(idx, list[idx].count);
    setList(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(list));
  };

  var decrement = function decrement(idx) {
    if (list[idx].count > 0) {
      list[idx].count -= 1;
      setBasketChange(idx, list[idx].count);
      setList(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(list));
    }
  };

  var setBasketChange = function setBasketChange(idx, count) {
    if (authenticated) Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_23__["setBasket"])({
      _id: list[idx]._id,
      count: count
    });else {
      var _list = JSON.parse(localStorage.basket);

      _list[idx].count = count;
      localStorage.basket = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(_list);
    }
  };

  var removeBasketChange =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(idx) {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
                  var _list2;

                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          if (!authenticated) {
                            _context.next = 9;
                            break;
                          }

                          Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_23__["deleteBasket"])([list[idx]._id]);
                          _context.t0 = setList;
                          _context.next = 5;
                          return Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_23__["getBasket"])();

                        case 5:
                          _context.t1 = _context.sent.baskets;
                          (0, _context.t0)(_context.t1);
                          _context.next = 13;
                          break;

                        case 9:
                          _list2 = JSON.parse(localStorage.basket);

                          _list2.splice(idx, 1);

                          localStorage.basket = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()(_list2);
                          setList(_list2);

                        case 13:
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

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 67
                },
                __self: this
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    return function removeBasketChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!authenticated) {
                if (localStorage.basket == undefined) {
                  localStorage.basket = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()([]);
                }

                setList(JSON.parse(localStorage.basket));
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    calculateAllPrice();
  }, [list]);

  var getList =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.t0 = setList;
              _context4.next = 3;
              return Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_23__["getBasket"])();

            case 3:
              _context4.t1 = _context4.sent.baskets;
              (0, _context4.t0)(_context4.t1);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getList() {
      return _ref4.apply(this, arguments);
    };
  }();

  var calculateAllPrice =
  /*#__PURE__*/
  function () {
    var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
      var allPrice, i;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              allPrice = 0;

              for (i = 0; i < list.length; i++) {
                allPrice += (list[i].item.stock === 0 || list[i].item.stock === undefined ? list[i].item.price : list[i].item.stock) * list[i].count;
              }

              setAllPrice(allPrice);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function calculateAllPrice() {
      return _ref5.apply(this, arguments);
    };
  }();

  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_8__["default"], {
    getList: getList,
    pageName: "\u041A\u043E\u0440\u0437\u0438\u043D\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "\u041A\u043E\u0440\u0437\u0438\u043D\u0430")), isMobileApp ? __jsx("div", {
    className: classes.column,
    style: {
      width: 'calc(100% - 16px)',
      margin: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, list.map(function (row, idx) {
    return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.page,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.column,
      style: isMobileApp ? {} : {
        justifyContent: 'start',
        alignItems: 'flex-start'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("div", {
      className: classes.itemM,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: classes.divImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("img", {
      className: classes.mediaM,
      src: row.item.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      onClick: function onClick() {
        removeBasketChange(idx);
      },
      color: "primary",
      className: classes.cancelM,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14___default.a, {
      style: {
        height: 40,
        width: 40
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }))), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }), __jsx("div", {
      className: classes.nameM,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, row.item.name), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), __jsx("div", {
      className: classes.counter,
      style: isMobileApp ? {
        marginBottom: 20
      } : {
        marginRight: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("div", {
      className: classes.counterbtn,
      onClick: function onClick() {
        decrement(idx);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, "\u2013"), __jsx("input", {
      type: "text",
      className: classes.counternmbr,
      value: row.count,
      onChange: function onChange(event) {
        list[idx].count = isNaN(event.target.value) || event.target.value.length === 0 ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(event.target.value);
        setBasketChange(idx, list[idx].count);
        setList(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(list));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }), __jsx("div", {
      className: classes.counterbtn,
      onClick: function onClick() {
        increment(idx);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "+")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("div", {
      className: classes.nameField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, "\u0426\u0435\u043D\u0430"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "".concat(row.item.stock === 0 || row.item.stock === undefined ? row.item.price : row.item.stock, " \u0441\u043E\u043C"))), __jsx("div", {
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
    }, "\u0418\u0442\u043E\u0433\u043E"), __jsx("div", {
      className: classes.value,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: this
    }, "".concat((row.item.stock === 0 || row.item.stock === undefined ? row.item.price : row.item.stock) * row.count, " \u0441\u043E\u043C")))))));
  }), __jsx("div", {
    style: {
      height: 70
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.column,
    style: isMobileApp ? {} : {
      justifyContent: 'start',
      alignItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_15__["default"], {
    "aria-label": "simple table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "\u0426\u0435\u043D\u0430"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "\u0418\u0442\u043E\u0433\u043E"), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, list.map(function (row, idx) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
      component: "th",
      scope: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("div", {
      className: classes.row,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx("img", {
      className: classes.mediaD,
      src: row.item.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }), __jsx("div", {
      className: classes.nameD,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, row.item.name))), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("div", {
      className: classes.counterD,
      style: isMobileApp ? {
        marginBottom: 20
      } : {
        marginRight: 20
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("div", {
      className: classes.counterbtnD,
      onClick: function onClick() {
        decrement(idx);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, "\u2013"), __jsx("input", {
      type: "text",
      className: classes.counternmbrD,
      value: row.count,
      onChange: function onChange(event) {
        list[idx].count = isNaN(event.target.value) || event.target.value.length === 0 ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(event.target.value);
        setBasketChange(idx, list[idx].count);
        setList(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_5__["default"])(list));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), __jsx("div", {
      className: classes.counterbtnD,
      onClick: function onClick() {
        increment(idx);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "+"))), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, "".concat(row.item.stock === 0 || row.item.stock === undefined ? row.item.price : row.item.stock * row.count, " \u0441\u043E\u043C")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
      align: "left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "".concat((row.item.stock === 0 || row.item.stock === undefined ? row.item.price : row.item.stock * row.count) * row.count, " \u0441\u043E\u043C")), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
      onClick: function onClick() {
        removeBasketChange(idx);
      },
      color: "primary",
      className: classes.button,
      "aria-label": "add to shopping cart",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, __jsx(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_14___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }))));
  }))))), __jsx("div", {
    style: {
      height: 70
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), __jsx("div", {
    className: isMobileApp ? classes.bottomBasketM : classes.bottomBasketD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, __jsx("div", {
    className: isMobileApp ? classes.allPriceM : classes.allPriceD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx("div", {
    className: isMobileApp ? classes.value : classes.priceAllText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "\u041E\u0431\u0449\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"), __jsx("div", {
    className: isMobileApp ? classes.nameM : classes.priceAll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, "".concat(allPrice, " \u0441\u043E\u043C"))), __jsx("div", {
    className: isMobileApp ? classes.buyM : classes.buyD,
    onClick: function onClick() {
      if (allPrice > 0) {
        if (authenticated) setMiniDialog('Купить', __jsx(_components_dialog_BuyBasket__WEBPACK_IMPORTED_MODULE_26__["default"], {
          client: data.client,
          allPrice: allPrice,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          },
          __self: this
        }));else setMiniDialog('Купить', __jsx(_components_dialog_Sign__WEBPACK_IMPORTED_MODULE_27__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          },
          __self: this
        }));
        showMiniDialog(true);
      } else showSnackBar('Добавьте товар в корзину');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, "\u041A\u0423\u041F\u0418\u0422\u042C")));
});

Basket.getInitialProps =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            console.log();
            if ('client' === ctx.store.getState().user.profile.role || !ctx.store.getState().user.authenticated) if (ctx.res) {
              ctx.res.writeHead(302, {
                Location: '/'
              });
              ctx.res.end();
            } else next_router__WEBPACK_IMPORTED_MODULE_25___default.a.push('/');
            _context6.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"];
            _context6.t1 = {};
            _context6.next = 6;
            return Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_23__["getBasket"])();

          case 6:
            _context6.t2 = _context6.sent;

            if (!ctx.store.getState().user.profile._id) {
              _context6.next = 13;
              break;
            }

            _context6.next = 10;
            return Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_24__["getClient"])({
              _id: ctx.store.getState().user.profile._id
            });

          case 10:
            _context6.t3 = _context6.sent;
            _context6.next = 14;
            break;

          case 13:
            _context6.t3 = [];

          case 14:
            _context6.t4 = _context6.t3;
            _context6.t5 = (0, _context6.t0)(_context6.t1, _context6.t2, _context6.t4);
            return _context6.abrupt("return", {
              data: _context6.t5
            });

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x2) {
    return _ref6.apply(this, arguments);
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_20__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_21__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_20__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_22__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Basket));

/***/ })

})
//# sourceMappingURL=basket.js.be72aeeab66d831e10e9.hot-update.js.map