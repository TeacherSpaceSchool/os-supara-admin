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
    pageName: router.query.id === 'all' ? 'Все' : data.category !== null ? data.category.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, router.query.id === 'all' ? 'Все' : data.category !== null ? data.category.name : 'Ничего не найдено')), __jsx("div", {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, profile.role === 'admin' ? __jsx(_components_subcategory_SubCardCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
    categorys: categorys,
    category: router.query.id,
    setList: setList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }) : null, __jsx(_components_subcategory_SubCardCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
    element: {
      _id: 'all',
      name: 'Все товары'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), data.subCategorys.length > 0 || router.query.id === 'all' ? list ? list.map(function (element) {
    return __jsx(_components_subcategory_SubCardCategory__WEBPACK_IMPORTED_MODULE_9__["default"], {
      category: router.query.id,
      categorys: categorys,
      key: element._id,
      setList: setList,
      element: element,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    });
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
              sort: '-updatedAt',
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
//# sourceMappingURL=[id].js.de78270129d4af1bd367.hot-update.js.map