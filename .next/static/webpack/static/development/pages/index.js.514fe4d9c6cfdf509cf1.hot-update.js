webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/category/CardCategoryPlaceholder.js":
/*!********************************************************!*\
  !*** ./components/category/CardCategoryPlaceholder.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_styleMUI_category_cardcategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/styleMUI/category/cardcategory */ "./src/styleMUI/category/cardcategory.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\category\\CardCategoryPlaceholder.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var CardCategoryPlaceholder = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_category_cardcategory__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var height = props.height;
  var isMobileApp = props.app.isMobileApp;
  return __jsx("div", {
    className: isMobileApp ? classes.cardM : classes.cardD,
    style: {
      height: height
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "rect",
    height: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(CardCategoryPlaceholder));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _src_gql_category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/gql/category */ "./src/gql/category.js");
/* harmony import */ var _src_styleMUI_category_categoryList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/styleMUI/category/categoryList */ "./src/styleMUI/category/categoryList.js");
/* harmony import */ var _components_category_CardCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/category/CardCategory */ "./components/category/CardCategory.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_category_CardCategoryPlaceholder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/category/CardCategoryPlaceholder */ "./components/category/CardCategoryPlaceholder.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













var Index = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_category_categoryList__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var data = props.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.categorys),
      list = _useState[0],
      setList = _useState[1];

  var _props$app = props.app,
      search = _props$app.search,
      filter = _props$app.filter,
      sort = _props$app.sort;
  var _props$user = props.user,
      profile = _props$user.profile,
      authenticated = _props$user.authenticated;
  var height = profile.role === 'admin' ? 161 : 83;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = setList;
              _context.next = 3;
              return Object(_src_gql_category__WEBPACK_IMPORTED_MODULE_8__["getCategorys"])({
                search: search,
                sort: sort,
                filter: filter
              });

            case 3:
              _context.t1 = _context.sent.categorys;
              (0, _context.t0)(_context.t1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [filter, sort, search]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!(!authenticated || ['admin', 'client'].includes(profile.role) || !profile.role)) next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/items/all');
  }, [profile, authenticated]);
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    filters: data.filterCategory,
    sorts: data.sortCategory,
    pageName: "\u0422\u043E\u0432\u0430\u0440\u044B",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\u0410\u0437\u044B\u043A - \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0441\u043A\u043B\u0430\u0434 \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0441 \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u0442\u043E\u0447\u043A\u043E\u0439"), __jsx("meta", {
    name: "description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: "\u0410\u0437\u044B\u043A - \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0441\u043A\u043B\u0430\u0434 \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0441 \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u0442\u043E\u0447\u043A\u043E\u0439",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_11__["urlMain"], "/static/512x512.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_11__["urlMain"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_11__["urlMain"]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("div", {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, profile.role === 'admin' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_category_CardCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
    setList: setList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })) : null, __jsx(_components_category_CardCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
    element: {
      image: '/static/add.png',
      name: 'Все подкатегории',
      _id: 'all'
    },
    setList: "all",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), list ? list.map(function (element) {
    return element.name !== 'Не задано' ? __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_13___default.a, {
      scrollContainer: '.App-body',
      key: element._id,
      height: height,
      offset: [height, 0],
      debounce: 100,
      placeholder: __jsx(_components_category_CardCategoryPlaceholder__WEBPACK_IMPORTED_MODULE_14__["default"], {
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(_components_category_CardCategory__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: element._id,
      setList: setList,
      element: element,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })) : null;
  }) : null));
});

Index.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    var role, authenticated;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            role = ctx.store.getState().user.profile.role;
            authenticated = ctx.store.getState().user.authenticated;
            if (!(!authenticated || ['admin', 'client'].includes(role) || !role)) if (ctx.res) {
              ctx.res.writeHead(302, {
                Location: '/items/all'
              });
              ctx.res.end();
            } else next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push('/items/all');
            _context2.next = 5;
            return Object(_src_gql_category__WEBPACK_IMPORTED_MODULE_8__["getCategorys"])({
              search: '',
              sort: '-createdAt',
              filter: ''
            });

          case 5:
            _context2.t0 = _context2.sent;
            return _context2.abrupt("return", {
              data: _context2.t0
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_6__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_7__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ "./src/styleMUI/category/cardcategory.js":
/*!***********************************************!*\
  !*** ./src/styleMUI/category/cardcategory.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])({
  cardM: {
    width: 'calc(100vw - 40px)',
    marginBottom: 20
  },
  cardD: {
    width: 400,
    margin: 10
  },
  media: {
    objectFit: 'cover',
    height: '60px',
    width: '60px',
    marginRight: 10
  },
  avatar: {
    borderRadius: '50px',
    objectFit: 'cover',
    height: '100px',
    width: '100px',
    margin: 10
  },
  text: {
    fontWeight: 'bold',
    fontSize: '16px',
    fontFamily: 'Roboto'
  },
  inputM: {
    marginBottom: 5,
    width: 'calc(100vw - 82px)',
    fontSize: '16px',
    fontFamily: 'Roboto'
  },
  inputD: {
    marginBottom: 5,
    width: 400 - 82,
    fontSize: '16px',
    fontFamily: 'Roboto'
  },
  line: {
    margin: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
}));

/***/ })

})
//# sourceMappingURL=index.js.514fe4d9c6cfdf509cf1.hot-update.js.map