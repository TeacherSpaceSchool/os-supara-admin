webpackHotUpdate("static\\development\\pages\\subcategory\\[id].js",{

/***/ "./pages/subcategory/[id].js":
/*!***********************************!*\
  !*** ./pages/subcategory/[id].js ***!
  \***********************************/
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
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_gql_subcategory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/gql/subcategory */ "./src/gql/subcategory.js");
/* harmony import */ var _src_gql_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/gql/category */ "./src/gql/category.js");
/* harmony import */ var _src_styleMUI_subcategory_subcategoryList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/styleMUI/subcategory/subcategoryList */ "./src/styleMUI/subcategory/subcategoryList.js");
/* harmony import */ var _components_subcategory_SubCardCategory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/subcategory/SubCardCategory */ "./components/subcategory/SubCardCategory.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_subcategory_SubCardCategoryPlaceholder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/subcategory/SubCardCategoryPlaceholder */ "./components/subcategory/SubCardCategoryPlaceholder.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/index.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\subcategory\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;















var Subcategory = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_subcategory_subcategoryList__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var data = props.data;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.subCategorys),
      list = _useState[0],
      setList = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      categorys = _useState2[0],
      setCategorys = _useState2[1];

  var _props$app = props.app,
      search = _props$app.search,
      filter = _props$app.filter,
      sort = _props$app.sort;
  var profile = props.user.profile;
  var height = profile.role === 'admin' ? 189 : 38;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(profile.role === 'admin')) {
                _context.next = 6;
                break;
              }

              _context.t0 = setCategorys;
              _context.next = 4;
              return Object(_src_gql_category__WEBPACK_IMPORTED_MODULE_7__["getCategorys"])({
                search: '',
                sort: 'name',
                filter: ''
              });

            case 4:
              _context.t1 = _context.sent.categorys;
              (0, _context.t0)(_context.t1);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [profile]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = setList;
              _context2.next = 3;
              return Object(_src_gql_subcategory__WEBPACK_IMPORTED_MODULE_6__["getSubCategorys"])({
                category: router.query.id,
                search: search,
                sort: sort,
                filter: filter
              });

            case 3:
              _context2.t1 = _context2.sent.subCategorys;
              (0, _context2.t0)(_context2.t1);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, [filter, sort, search]);
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    filters: data.filterSubCategory,
    sorts: data.sortSubCategory,
    pageName: router.query.id === 'all' ? 'Все' : data.category ? data.category.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, router.query.id === 'all' ? 'Все' : data.category ? data.category.name : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: router.query.id === 'all' ? 'Все' : data.category !== null ? data.category.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_11__["urlMain"], "/static/512x512.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_11__["urlMain"], "/subcategory/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_11__["urlMain"], "/subcategory/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_16__["default"], {
    style: {
      margin: 20
    },
    "aria-label": "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_14___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "\u0422\u043E\u0432\u0430\u0440\u044B"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_15__["default"], {
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, router.query.id === 'all' ? 'Все' : data.category ? data.category.name : 'Ничего не найдено')), __jsx("div", {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, profile.role === 'admin' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_components_subcategory_SubCardCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
    categorys: categorys,
    category: router.query.id,
    setList: setList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })) : null, __jsx(_components_subcategory_SubCardCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
    element: {
      _id: 'all',
      name: 'Все товары'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), data.subCategorys.length > 0 || router.query.id === 'all' ? list ? list.map(function (element) {
    return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_12___default.a, {
      scrollContainer: '.App-body',
      key: element._id,
      height: height,
      offset: [height, 0],
      debounce: 50,
      placeholder: __jsx(_components_subcategory_SubCardCategoryPlaceholder__WEBPACK_IMPORTED_MODULE_13__["default"], {
        height: height,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx(_components_subcategory_SubCardCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
      category: router.query.id,
      categorys: categorys,
      setList: setList,
      element: element,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }));
  }) : null : null));
});

Subcategory.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Object(_src_gql_subcategory__WEBPACK_IMPORTED_MODULE_6__["getSubCategorys"])({
              category: ctx.query.id,
              search: '',
              sort: '-createdAt',
              filter: ''
            });

          case 2:
            _context3.t0 = _context3.sent;
            return _context3.abrupt("return", {
              data: _context3.t0
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Subcategory));

/***/ })

})
//# sourceMappingURL=[id].js.9a53a424ab5c23ce36fb.hot-update.js.map