webpackHotUpdate("static\\development\\pages\\items\\[id].js",{

/***/ "./components/items/CardItem.js":
/*!**************************************!*\
  !*** ./components/items/CardItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _src_styleMUI_item_cardItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/styleMUI/item/cardItem */ "./src/styleMUI/item/cardItem.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/AddShoppingCart */ "./node_modules/@material-ui/icons/AddShoppingCart.js");
/* harmony import */ var _material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Star */ "./node_modules/@material-ui/icons/Star.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_gql_items__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/gql/items */ "./src/gql/items.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _dialog_Confirmation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js");




var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\items\\CardItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;















var CardItem = react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_item_cardItem__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var element = props.element,
      setList = props.setList,
      subCategory = props.subCategory,
      getList = props.getList,
      setFavorites = props.setFavorites;
  var _props$user = props.user,
      profile = _props$user.profile,
      authenticated = _props$user.authenticated;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(element !== undefined ? element.status : ''),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(element !== undefined && element.favorite !== undefined ? element.favorite : []),
      favorite = _useState2[0],
      setFavorite = _useState2[1];

  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var showSnackBar = props.snackbarActions.showSnackBar;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      basket = _useState3[0],
      setBasket = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!authenticated) {
      if (localStorage.favorites == undefined) localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()([]);else {
        var favorites = JSON.parse(localStorage.favorites);

        for (var i = 0; i < favorites.length; i++) {
          if (favorites[i]._id == element._id) setFavorite(true);
        }
      }
      if (localStorage.basket == undefined) localStorage.basket = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()([]);else {
        var _basket = JSON.parse(localStorage.basket);

        console.log(_basket);

        for (var _i = 0; _i < _basket.length; _i++) {
          if (_basket[_i].item._id == element._id) setBasket(true);
        }
      }
    } else {
      setBasket(element.basket.includes(profile._id));
    }
  }, []);
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("div", {
    className: classes.chipList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, element.latest ? __jsx("div", {
    className: classes.chip,
    style: {
      color: 'white',
      background: 'green'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "\u041D\u043E\u0432\u0438\u043D\u043A\u0430") : null, element.hit ? __jsx("div", {
    className: classes.chip,
    style: {
      color: 'black',
      background: 'yellow'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u0425\u0438\u0442") : null), __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: "/item/[id]",
    as: "/item/".concat(element !== undefined ? element._id : 'new'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("img", {
    className: classes.media,
    src: element.image,
    alt: element.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: "/item/[id]",
    as: "/item/".concat(element !== undefined ? element._id : 'new'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, element.name)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: "/item/[id]",
    as: "/item/".concat(element !== undefined ? element._id : 'new'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, element.stock === 0 || element.stock === undefined ? __jsx("div", {
    className: classes.price,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "".concat(element.price, " \u0441\u043E\u043C")) : __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx("div", {
    className: classes.crossedPrice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "".concat(element.price)), __jsx("div", {
    className: classes.stockPrice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "".concat(element.stock, " \u0441\u043E\u043C"))))), ['admin', 'организация', 'менеджер'].includes(profile.role) ? __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_15__["onoffItem"])([element._id]);

                        case 2:
                          setStatus(status === 'active' ? 'deactive' : 'active');

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

              setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_18__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 109
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
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, status === 'active' ? 'Отключить' : 'Включить'), 'admin' === profile.role ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
                  var list;
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_15__["deleteItem"])([element._id], subCategory);

                        case 2:
                          list = _context3.sent.items;
                          setList(list);

                        case 4:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function action() {
                  return _ref4.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_18__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 121
                },
                __self: this
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C") : null) : profile.role === 'client' || !authenticated ? __jsx(_material_ui_icons_AddShoppingCart__WEBPACK_IMPORTED_MODULE_12___default.a, {
    style: {
      color: basket ? '#ffb300' : '#e1e1e1'
    },
    className: classes.button,
    onClick: function onClick() {
      if (profile.role === 'client') Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_16__["addBasket"])({
        item: element._id,
        count: 1
      });else if (!authenticated) {
        var _basket2 = JSON.parse(localStorage.basket);

        var index = -1;

        for (var i = 0; i < _basket2.length; i++) {
          if (_basket2[i].item._id == element._id) index = i;
        }

        if (index === -1) _basket2.push({
          item: element,
          count: 1
        });
        localStorage.basket = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(_basket2);
      }
      showSnackBar('Товар добавлен в корзину');
      setBasket(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }) : null, profile.role === 'client' || !authenticated ? __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_13___default.a, {
    className: classes.buttonToggle,
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
      var index, favorites, i, action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!(profile.role === 'client')) {
                _context6.next = 7;
                break;
              }

              _context6.next = 3;
              return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_15__["favoriteItem"])([element._id]);

            case 3:
              index = favorite.indexOf(profile._id);

              if (index === -1) {
                favorite.push(profile._id);
                setFavorite(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(favorite));
                if (getList !== undefined) getList();
              }

              _context6.next = 8;
              break;

            case 7:
              if (!authenticated) {
                favorites = JSON.parse(localStorage.favorites);
                index = -1;

                for (i = 0; i < favorites.length; i++) {
                  if (favorites[i]._id == element._id) index = i;
                }

                if (index === -1) {
                  favorites.push(element);
                  setFavorite(true);
                  localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(favorites);
                  if (setFavorites) setFavorites(favorites);
                }
              }

            case 8:
              if (index !== -1) {
                action =
                /*#__PURE__*/
                function () {
                  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
                    var _favorites;

                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            if (profile.role === 'client') {
                              favorite.splice(index, 1);
                              setFavorite(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(favorite));
                              if (getList !== undefined) getList();
                            } else if (!authenticated) {
                              _favorites = JSON.parse(localStorage.favorites);

                              _favorites.splice(index, 1);

                              setFavorite(false);
                              localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(_favorites);
                              if (setFavorites) setFavorites(_favorites);
                            }

                          case 1:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function action() {
                    return _ref6.apply(this, arguments);
                  };
                }();

                setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_18__["default"], {
                  action: action,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                  },
                  __self: this
                }));
                showMiniDialog(true);
              }

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    })),
    style: {
      color: !authenticated && favorite === true || profile.role == 'client' && favorite.includes(profile._id) ? '#ffb300' : '#e1e1e1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }) : null));
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_10__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_11__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(CardItem));

/***/ })

})
//# sourceMappingURL=[id].js.82a51a15e5a7158411d2.hot-update.js.map