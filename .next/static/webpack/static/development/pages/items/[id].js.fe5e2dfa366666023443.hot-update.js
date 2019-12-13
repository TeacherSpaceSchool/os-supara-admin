webpackHotUpdate("static\\development\\pages\\items\\[id].js",{

/***/ "./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _internal_svg_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../internal/svg-icons/MoreHoriz */ "./node_modules/@material-ui/core/esm/internal/svg-icons/MoreHoriz.js");








var styles = function styles(theme) {
  return {
    root: {
      display: 'flex'
    },
    icon: {
      width: 24,
      height: 16,
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.grey[700],
      borderRadius: 2,
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: theme.palette.grey[200]
      },
      '&:active': {
        boxShadow: theme.shadows[0],
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__["emphasize"])(theme.palette.grey[200], 0.12)
      }
    }
  };
};
/**
 * @ignore - internal component.
 */


function BreadcrumbCollapsed(props) {
  var classes = props.classes,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.root
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_svg_icons_MoreHoriz__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.icon
  }));
}

 true ? BreadcrumbCollapsed.propTypes = {
  /**
   * @ignore
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(styles, {
  name: 'PrivateBreadcrumbCollapsed'
})(BreadcrumbCollapsed));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbSeparator.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbSeparator.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = {
  root: {
    display: 'flex',
    userSelect: 'none',
    marginLeft: 8,
    marginRight: 8
  }
};
/**
 * @ignore - internal component.
 */

function BreadcrumbSeparator(props) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    "aria-hidden": true,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className)
  }, other));
}

 true ? BreadcrumbSeparator.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'PrivateBreadcrumbSeparator'
})(BreadcrumbSeparator));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js ***!
  \***********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _BreadcrumbCollapsed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./BreadcrumbCollapsed */ "./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbCollapsed.js");
/* harmony import */ var _BreadcrumbSeparator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BreadcrumbSeparator */ "./node_modules/@material-ui/core/esm/Breadcrumbs/BreadcrumbSeparator.js");











var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the ol element. */
  ol: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    padding: 0,
    // Reset
    margin: 0 // Reset

  },

  /* Styles applied to the li element. */
  li: {
    listStyle: 'none'
  },

  /* Styles applied to the separator element. */
  separator: {}
};

function insertSeparators(items, className, separator) {
  return items.reduce(function (acc, current, index) {
    if (index < items.length - 1) {
      acc = acc.concat(current, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_BreadcrumbSeparator__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: "separator-".concat(index),
        className: className
      }, separator));
    } else {
      acc.push(current);
    }

    return acc;
  }, []);
}

var Breadcrumbs = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function Breadcrumbs(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'nav' : _props$component,
      _props$itemsAfterColl = props.itemsAfterCollapse,
      itemsAfterCollapse = _props$itemsAfterColl === void 0 ? 1 : _props$itemsAfterColl,
      _props$itemsBeforeCol = props.itemsBeforeCollapse,
      itemsBeforeCollapse = _props$itemsBeforeCol === void 0 ? 1 : _props$itemsBeforeCol,
      _props$maxItems = props.maxItems,
      maxItems = _props$maxItems === void 0 ? 8 : _props$maxItems,
      _props$separator = props.separator,
      separator = _props$separator === void 0 ? '/' : _props$separator,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "classes", "className", "component", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "separator"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      expanded = _React$useState[0],
      setExpanded = _React$useState[1];

  var renderItemsBeforeAndAfter = function renderItemsBeforeAndAfter(allItems) {
    var handleClickExpand = function handleClickExpand() {
      setExpanded(true);
    }; // This defends against someone passing weird input, to ensure that if all
    // items would be shown anyway, we just show all items without the EllipsisItem


    if (itemsBeforeCollapse + itemsAfterCollapse >= allItems.length) {
      if (true) {
        console.error(['Material-UI: you have provided an invalid combination of props to the Breadcrumbs.', "itemsAfterCollapse={".concat(itemsAfterCollapse, "} + itemsBeforeCollapse={").concat(itemsBeforeCollapse, "} >= maxItems={").concat(maxItems, "}")].join('\n'));
      }

      return allItems;
    }

    return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allItems.slice(0, itemsBeforeCollapse)), [react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_BreadcrumbCollapsed__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "ellipsis",
      onClick: handleClickExpand
    })], Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allItems.slice(allItems.length - itemsAfterCollapse, allItems.length)));
  };

  var allItems = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children).filter(function (child) {
    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isFragment"])(child)) {
        console.error(["Material-UI: the Breadcrumbs component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(child);
  }).map(function (child, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      className: classes.li,
      key: "child-".concat(index)
    }, child);
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref,
    component: Component,
    color: "textSecondary",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, className)
  }, other), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ol", {
    className: classes.ol
  }, insertSeparators(expanded || maxItems && allItems.length <= maxItems ? allItems : renderItemsBeforeAndAfter(allItems), classes.separator, separator)));
});
 true ? Breadcrumbs.propTypes = {
  /**
   * The breadcrumb children.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * If max items is exceeded, the number of items to show after the ellipsis.
   */
  itemsAfterCollapse: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * If max items is exceeded, the number of items to show before the ellipsis.
   */
  itemsBeforeCollapse: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * Specifies the maximum number of breadcrumbs to display. When there are more
   * than the maximum number, only the first `itemsBeforeCollapse` and last `itemsAfterCollapse`
   * will be shown, with an ellipsis in between.
   */
  maxItems: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * Custom separator node.
   */
  separator: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiBreadcrumbs'
})(Breadcrumbs));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Breadcrumbs/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Breadcrumbs/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/Breadcrumbs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/MoreHoriz.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/MoreHoriz.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSvgIcon */ "./node_modules/@material-ui/core/esm/internal/svg-icons/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), 'MoreHoriz'));

/***/ }),

/***/ "./pages/items/[id].js":
/*!*****************************!*\
  !*** ./pages/items/[id].js ***!
  \*****************************/
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
/* harmony import */ var _src_styleMUI_item_itemList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/styleMUI/item/itemList */ "./src/styleMUI/item/itemList.js");
/* harmony import */ var _components_items_CardItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/items/CardItem */ "./components/items/CardItem.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_gql_items__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/gql/items */ "./src/gql/items.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Add */ "./node_modules/@material-ui/icons/Add.js");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_items_CardItemPlaceholder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/items/CardItemPlaceholder */ "./components/items/CardItemPlaceholder.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Breadcrumbs */ "./node_modules/@material-ui/core/esm/Breadcrumbs/index.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\items\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;












var height = 377;




var Items = react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_item_itemList__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var data = props.data;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(data.items),
      list = _useState[0],
      setList = _useState[1];

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
              _context.t0 = setList;
              _context.next = 3;
              return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_9__["getItems"])({
                subCategory: router.query.id,
                search: search,
                sort: sort,
                filter: filter
              });

            case 3:
              _context.t1 = _context.sent.items;
              (0, _context.t0)(_context.t1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [filter, sort, search]);
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
    category: data.subCategory ? data.subCategory.category : undefined,
    filters: data.filterItem,
    sorts: data.sortItem,
    pageName: router.query.id === 'all' ? 'Все' : data.subCategory !== null ? data.subCategory.name : 'Ничего не найдено',
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
  }, router.query.id === 'all' ? 'Все' : data.subCategory !== null ? data.subCategory.name : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: router.query.id === 'all' ? 'Все' : data.subCategory !== null ? data.subCategory.name : 'Ничего не найдено',
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
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_13__["urlMain"], "/static/512x512.png"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_13__["urlMain"], "/items/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_13__["urlMain"], "/items/").concat(router.query.id),
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
  }, data.subCategory.category ? __jsx(_material_ui_core_Breadcrumbs__WEBPACK_IMPORTED_MODULE_17__["default"], {
    "aria-label": "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/subcategory/[id]",
    as: "/subcategory/".concat(data.subCategory.category._id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, data.subCategory.category.name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
    color: "textPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, data.subCategory.name)) : null, list ? list.map(function (element) {
    return __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_14___default.a, {
      scrollContainer: '.App-body',
      key: element._id,
      height: height,
      offset: [height, 0],
      debounce: 50,
      placeholder: __jsx(_components_items_CardItemPlaceholder__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx(_components_items_CardItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      setList: setList,
      key: element._id,
      element: element,
      subCategory: router.query.id === 'all' ? 'all' : data.subCategory._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }));
  }) : null), profile.role === 'admin' || profile.role === 'организация' || profile.role === 'менеджер' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "/item/[id]",
    as: "/item/new",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__["default"], {
    color: "primary",
    "aria-label": "add",
    className: classes.fab,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }))) : null);
});

Items.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_9__["getItems"])({
              subCategory: ctx.query.id,
              search: '',
              sort: '-createdAt',
              filter: ''
            });

          case 2:
            _context2.t0 = _context2.sent;
            return _context2.abrupt("return", {
              data: _context2.t0
            });

          case 4:
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
    app: state.app,
    user: state.user
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps)(Items));

/***/ })

})
//# sourceMappingURL=[id].js.fe5e2dfa366666023443.hot-update.js.map