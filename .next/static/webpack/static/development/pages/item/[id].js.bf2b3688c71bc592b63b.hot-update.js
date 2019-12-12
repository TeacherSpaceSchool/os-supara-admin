webpackHotUpdate("static\\development\\pages\\item\\[id].js",{

/***/ "./pages/item/[id].js":
/*!****************************!*\
  !*** ./pages/item/[id].js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_gql_subcategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/gql/subcategory */ "./src/gql/subcategory.js");
/* harmony import */ var _src_gql_employment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/gql/employment */ "./src/gql/employment.js");
/* harmony import */ var _src_gql_organization__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/gql/organization */ "./src/gql/organization.js");
/* harmony import */ var _src_gql_items__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../src/gql/items */ "./src/gql/items.js");
/* harmony import */ var _src_gql_basket__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/gql/basket */ "./src/gql/basket.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _src_styleMUI_item_item__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/styleMUI/item/item */ "./src/styleMUI/item/item.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/Star */ "./node_modules/@material-ui/icons/Star.js");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var _components_dialog_DeliveryDays__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../components/dialog/DeliveryDays */ "./components/dialog/DeliveryDays.js");






var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\item\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

































var Item = react__WEBPACK_IMPORTED_MODULE_7___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_item_item__WEBPACK_IMPORTED_MODULE_16__["default"])();
  var data = props.data;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_17__["useRouter"])();
  var isMobileApp = props.app.isMobileApp;
  var _props$user = props.user,
      profile = _props$user.profile,
      authenticated = _props$user.authenticated;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.stock : ''),
      stock = _useState[0],
      setStock = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.name : ''),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.info : ''),
      info = _useState3[0],
      setInfo = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.price : ''),
      price = _useState4[0],
      setPrice = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.deliveryDays : []),
      deliveryDays = _useState5[0],
      setDeliveryDays = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.subCategory : {}),
      subCategory = _useState6[0],
      setSubCategory = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.status : ''),
      status = _useState7[0],
      setStatus = _useState7[1];

  var handleSubCategory = function handleSubCategory(event) {
    setSubCategory({
      _id: event.target.value,
      name: event.target.name
    });
  };

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.organization : {}),
      organization = _useState8[0],
      setOrganization = _useState8[1];

  var handleOrganization = function handleOrganization(event) {
    setOrganization({
      _id: event.target.value,
      name: event.target.name
    });
  };

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.hit : false),
      hit = _useState9[0],
      setHit = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.latest : false),
      latest = _useState10[0],
      setLatest = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null ? data.item.image : ''),
      preview = _useState11[0],
      setPreview = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(undefined),
      image = _useState12[0],
      setImage = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    organization: ''
  }),
      employment = _useState13[0],
      setEmployment = _useState13[1];

  var handleChangeImage = function handleChangeImage(event) {
    setImage(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee() {
      var _employment;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!['организация', 'менеджер', 'экспедитор'].includes(profile.role)) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return Object(_src_gql_employment__WEBPACK_IMPORTED_MODULE_11__["getEmployment"])({
                _id: profile._id
              });

            case 3:
              _employment = _context.sent.employment;
              setOrganization(_employment.organization);
              setEmployment(_employment);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [profile]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (!authenticated) {
      if (localStorage.favorites == undefined) localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()([]);else if (data.item !== null) {
        var favorites = JSON.parse(localStorage.favorites);

        for (var i = 0; i < favorites.length; i++) {
          if (favorites[i]._id == data.item._id) setFavorite(true);
        }
      }
      if (localStorage.basket == undefined) localStorage.basket = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()([]);
    }
  }, []); //BUY

  var _useState14 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(0),
      count = _useState14[0],
      setCount = _useState14[1];

  var increment = function increment() {
    count += 1;
    setCount(count);
  };

  var decrement = function decrement() {
    if (count > 0) count -= 1;
    setCount(count);
  };

  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var showSnackBar = props.snackbarActions.showSnackBar;

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(data.item !== null && data.item.favorite !== undefined ? data.item.favorite : []),
      favorite = _useState15[0],
      setFavorite = _useState15[1];

  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_8__["default"], {
    subcategory: data.item.subCategory ? data.item.subCategory : undefined,
    category: data.item.subCategory ? data.item.subCategory.category : undefined,
    filters: data.filterItem,
    sorts: data.sortItem,
    pageName: data.item !== null ? router.query.id === 'new' ? 'Добавить' : data.item.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, data.item !== null ? router.query.id === 'new' ? 'Добавить' : data.item.name : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: data.item !== null ? data.item.info : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: data.item !== null ? router.query.id === 'new' ? 'Добавить' : data.item.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: data.item !== null ? data.item.info : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx("meta", {
    property: "og:image",
    content: preview,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_35__["urlMain"], "/item/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("link", {
    rel: "canonical",
    href: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_35__["urlMain"], "/item/").concat(router.query.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_18__["default"], {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_19__["default"], {
    className: isMobileApp ? classes.column : classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, profile.role === 'admin' || ['менеджер', 'организация'].includes(profile.role) && organization._id === employment.organization._id ? data.item !== null || router.query.id === 'new' ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("label", {
    htmlFor: "contained-button-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("img", {
    className: isMobileApp ? classes.mediaM : classes.mediaD,
    src: preview,
    alt: 'Добавить',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("h1", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_33__["default"], {
    label: "\u0418\u043C\u044F",
    value: name,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: function onChange(event) {
      setName(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), __jsx("div", {
    className: classes.price,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_33__["default"], {
    label: "\u0426\u0435\u043D\u0430",
    value: price,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: function onChange(event) {
      setPrice(Object(_src_lib__WEBPACK_IMPORTED_MODULE_15__["checkInt"])(event.target.value));
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), __jsx("div", {
    className: classes.price,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_33__["default"], {
    label: "\u0421\u043A\u0438\u0434\u043A\u0430",
    value: stock,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: function onChange(event) {
      setStock(Object(_src_lib__WEBPACK_IMPORTED_MODULE_15__["checkInt"])(event.target.value));
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  })), profile.role === 'admin' ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_27__["default"], {
    value: organization._id,
    onChange: handleOrganization,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, data.organizations.map(function (element) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: element._id,
      value: element._id,
      ola: element.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, element.name);
  }))) : __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_23__["default"], {
    value: organization.name,
    className: isMobileApp ? classes.inputM : classes.inputD,
    inputProps: {
      'aria-label': 'description',
      readOnly: true
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_22__["default"], {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      setMiniDialog('Дни поставки', __jsx(_components_dialog_DeliveryDays__WEBPACK_IMPORTED_MODULE_36__["default"], {
        deliveryDays: deliveryDays,
        setDeliveryDays: setDeliveryDays,
        edit: profile.role === 'admin' || ['менеджер', 'организация'].includes(profile.role) && data.item.organization._id === employment.organization._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "\u0414\u043D\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0434\u043B\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0445 \u0442\u043E\u0447\u0435\u043A"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_26__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_24__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_27__["default"], {
    value: subCategory._id,
    onChange: handleSubCategory,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, data.subCategorys.map(function (element) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
      key: element._id,
      value: element._id,
      ola: element.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, element.name);
  }))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), profile.role === 'admin' ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    control: __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_28__["default"], {
      checked: hit,
      onChange: function onChange() {
        setHit(!hit);
      },
      color: "primary",
      inputProps: {
        'aria-label': 'primary checkbox'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }),
    label: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E\u0435",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_20__["default"], {
    control: __jsx(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_28__["default"], {
      checked: latest,
      onChange: function onChange() {
        setLatest(!latest);
      },
      color: "primary",
      inputProps: {
        'aria-label': 'primary checkbox'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227
      },
      __self: this
    }),
    label: "\u041D\u043E\u0432\u0438\u043D\u043A\u0430",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  })) : null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_33__["default"], {
    multiline: true,
    label: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    value: info,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: function onChange(event) {
      setInfo(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }, router.query.id === 'new' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee3() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (name.length > 0 && price > 0 && subCategory._id != undefined && organization._id != undefined) {
                action =
                /*#__PURE__*/
                function () {
                  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee2() {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_13__["addItem"])({
                              name: name,
                              stock: stock,
                              image: image,
                              info: info,
                              price: price,
                              subCategory: subCategory._id,
                              hit: hit,
                              latest: latest,
                              organization: organization._id,
                              deliveryDays: deliveryDays
                            }, subCategory._id);

                          case 2:
                            next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/items/".concat(subCategory._id));

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function action() {
                    return _ref3.apply(this, arguments);
                  };
                }();

                setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_34__["default"], {
                  action: action,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 271
                  },
                  __self: this
                }));
                showMiniDialog(true);
              } else {
                showSnackBar('Заполните все поля');
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C") : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee5() {
      var editElement, action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              editElement = {
                _id: data.item._id
              };
              if (stock > 0 && stock !== data.item.stock) editElement.stock = stock;
              if (name.length > 0 && name !== data.item.name) editElement.name = name;
              if (image !== undefined) editElement.image = image;
              if (info.length > 0 && info !== data.item.info) editElement.info = info;
              if (price > 0 && price !== data.item.price) editElement.price = price;
              if (hit !== data.item.hit) editElement.hit = hit;
              if (latest !== data.item.latest) editElement.latest = latest;
              if (organization._id !== data.item.organization._id) editElement.organization = organization._id;
              if (subCategory._id !== data.item.subCategory._id) editElement.subCategory = subCategory._id;
              if (deliveryDays) editElement.deliveryDays = deliveryDays;

              action =
              /*#__PURE__*/
              function () {
                var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee4() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_13__["setItem"])(editElement, subCategory._id);

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function action() {
                  return _ref5.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_34__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 297
                },
                __self: this
              }));
              showMiniDialog(true);

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee7() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee6() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_13__["onoffItem"])([data.item._id]);

                        case 2:
                          setStatus(status === 'active' ? 'deactive' : 'active');

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function action() {
                  return _ref7.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_34__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 307
                },
                __self: this
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, status === 'active' ? 'Отключить' : 'Включить'), profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_22__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee9() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee8() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_13__["deleteItem"])([data.item._id], subCategory._id);

                        case 2:
                          next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push("/items/".concat(subCategory._id));

                        case 3:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function action() {
                  return _ref9.apply(this, arguments);
                };
              }();

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_34__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 319
                },
                __self: this
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C") : null)))) : 'Ничего не найдено' : data.item === null || router.query.id === 'new' ? 'Ничего не найдено' : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
    className: classes.divImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, __jsx("img", {
    className: isMobileApp ? classes.mediaM : classes.mediaD,
    src: data.item.image,
    alt: data.item.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }), profile.role === 'client' || !authenticated ? __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_32___default.a, {
    className: classes.buttonToggle,
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee11() {
      var index, favorites, i, action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (!(profile.role === 'client')) {
                _context11.next = 7;
                break;
              }

              _context11.next = 3;
              return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_13__["favoriteItem"])([data.item._id]);

            case 3:
              index = favorite.indexOf(profile._id);

              if (index === -1) {
                favorite.push(profile._id);
                setFavorite(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(favorite));
              }

              _context11.next = 8;
              break;

            case 7:
              if (!authenticated) {
                favorites = JSON.parse(localStorage.favorites);
                index = -1;

                for (i = 0; i < favorites.length; i++) {
                  if (favorites[i]._id == data.item._id) index = i;
                }

                if (index === -1) {
                  favorites.push(data.item);
                  setFavorite(true);
                  localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(favorites);
                }
              }

            case 8:
              if (index !== -1) {
                action =
                /*#__PURE__*/
                function () {
                  var _ref11 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee10() {
                    var _favorites;

                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee10$(_context10) {
                      while (1) {
                        switch (_context10.prev = _context10.next) {
                          case 0:
                            if (profile.role === 'client') {
                              favorite.splice(index, 1);
                              setFavorite(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(favorite));
                            } else if (!authenticated) {
                              _favorites = JSON.parse(localStorage.favorites);

                              _favorites.splice(index, 1);

                              setFavorite(false);
                              localStorage.favorites = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(_favorites);
                            }

                          case 1:
                          case "end":
                            return _context10.stop();
                        }
                      }
                    }, _callee10);
                  }));

                  return function action() {
                    return _ref11.apply(this, arguments);
                  };
                }();

                setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_34__["default"], {
                  action: action,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 386
                  },
                  __self: this
                }));
                showMiniDialog(true);
              }

            case 9:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11, this);
    })),
    style: {
      color: !authenticated && favorite === true || profile.role == 'client' && favorite.includes(profile._id) ? '#ffb300' : '#e1e1e1'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }) : null), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, isMobileApp ? __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }) : null, __jsx("h1", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, data.item.name), __jsx("div", {
    className: classes.share,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, data.item.organization.name), __jsx("div", {
    className: classes.deliveryDays,
    onClick: function onClick() {
      setMiniDialog('Дни поставки', __jsx(_components_dialog_DeliveryDays__WEBPACK_IMPORTED_MODULE_36__["default"], {
        deliveryDays: deliveryDays,
        setDeliveryDays: setDeliveryDays,
        edit: profile.role === 'admin' || ['менеджер', 'организация'].includes(profile.role) && data.item.organization._id === employment.organization._id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, "\u0414\u043D\u0438 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438 \u0434\u043B\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0445 \u0442\u043E\u0447\u0435\u043A"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, data.item.stock === 0 || data.item.stock === undefined ? __jsx("div", {
    className: classes.price,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, data.item.price, "\xA0\u0441\u043E\u043C") : __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
    className: classes.stockPrice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }, data.item.stock, "\xA0\u0441\u043E\u043C"), __jsx("div", {
    className: classes.crossedPrice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, data.item.price, "\xA0\u0441\u043E\u043C"))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }), ['агент', 'client'].includes(profile.role) || !authenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
    className: isMobileApp ? classes.column : classes.rowCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435
    },
    __self: this
  }, __jsx("div", {
    className: classes.counter,
    style: isMobileApp ? {
      marginBottom: 20
    } : {
      marginRight: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, __jsx("div", {
    className: classes.counterbtn,
    onClick: decrement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, "\u2013"), __jsx("input", {
    type: "text",
    className: classes.counternmbr,
    value: count,
    onChange: function onChange(event) {
      setCount(isNaN(event.target.value) || event.target.value.length === 0 ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(event.target.value));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }), __jsx("div", {
    className: classes.counterbtn,
    onClick: increment,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, "+")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_22__["default"], {
    variant: "contained",
    color: "primary",
    className: classes.button,
    onClick: function onClick() {
      if (['агент', 'client'].includes(profile.role)) Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_14__["addBasket"])({
        item: data.item._id,
        count: count > 0 ? count : 1
      });else if (!authenticated) {
        var basket = JSON.parse(localStorage.basket);
        var index = -1;

        for (var i = 0; i < basket.length; i++) {
          if (basket[i].item._id == data.item._id) index = i;
        }

        if (index === -1) basket.push({
          item: data.item,
          count: count
        });
        localStorage.basket = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()(basket);
      }
      showSnackBar('Товар добавлен в корзину');
      Object(_src_gql_basket__WEBPACK_IMPORTED_MODULE_14__["getCountBasket"])();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443
    },
    __self: this
  }, "\u0412 \u041A\u041E\u0420\u0417\u0418\u041D\u0423")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }), __jsx("div", {
    className: classes.share,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469
    },
    __self: this
  }, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F:"), __jsx("div", {
    className: classes.rowCenter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["FacebookShareButton"], {
    url:  true ? window.location.href.toString() : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["FacebookIcon"], {
    size: 32,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  })), "\xA0 \xA0", __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["VKShareButton"], {
    url:  true ? window.location.href : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["VKIcon"], {
    size: 32,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 483
    },
    __self: this
  })), "\xA0 \xA0", __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["OKShareButton"], {
    url:  true ? window.location.href : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["OKIcon"], {
    size: 32,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  })), "\xA0 \xA0", __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["WhatsappShareButton"], {
    url:  true ? window.location.href : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["WhatsappIcon"], {
    size: 32,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497
    },
    __self: this
  })), "\xA0 \xA0", __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["TelegramShareButton"], {
    url:  true ? window.location.href : undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, __jsx(react_share__WEBPACK_IMPORTED_MODULE_21__["TelegramIcon"], {
    size: 32,
    round: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  })))) : null)))), __jsx("input", {
    accept: "image/*",
    style: {
      display: 'none'
    },
    id: "contained-button-file",
    type: "file",
    onChange: handleChangeImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }));
});

Item.getInitialProps =
/*#__PURE__*/
function () {
  var _ref12 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.mark(function _callee12(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_4___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"];
            _context12.t1 = {};

            if (!(ctx.query.id !== 'new')) {
              _context12.next = 8;
              break;
            }

            _context12.next = 5;
            return Object(_src_gql_items__WEBPACK_IMPORTED_MODULE_13__["getItem"])({
              _id: ctx.query.id
            });

          case 5:
            _context12.t2 = _context12.sent;
            _context12.next = 9;
            break;

          case 8:
            _context12.t2 = {
              item: {
                image: '/static/add.png',
                stock: 0,
                name: '',
                info: '',
                price: 0,
                subCategory: {
                  _id: ''
                },
                organization: {
                  _id: ''
                },
                hit: false,
                latest: false,
                deliveryDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
              }
            };

          case 9:
            _context12.t3 = _context12.t2;
            _context12.next = 12;
            return Object(_src_gql_organization__WEBPACK_IMPORTED_MODULE_12__["getOrganizations"])({
              search: '',
              sort: 'name',
              filter: ''
            });

          case 12:
            _context12.t4 = _context12.sent;
            _context12.next = 15;
            return Object(_src_gql_subcategory__WEBPACK_IMPORTED_MODULE_10__["getSubCategorys"])({
              category: 'all',
              search: '',
              sort: 'name',
              filter: ''
            });

          case 15:
            _context12.t5 = _context12.sent;
            _context12.t6 = (0, _context12.t0)(_context12.t1, _context12.t3, _context12.t4, _context12.t5);
            return _context12.abrupt("return", {
              data: _context12.t6
            });

          case 18:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function (_x) {
    return _ref12.apply(this, arguments);
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_29__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_30__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_29__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_31__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Item));

/***/ })

})
//# sourceMappingURL=[id].js.bf2b3688c71bc592b63b.hot-update.js.map