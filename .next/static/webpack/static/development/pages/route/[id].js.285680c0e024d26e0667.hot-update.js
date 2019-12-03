webpackHotUpdate("static\\development\\pages\\route\\[id].js",{

/***/ "./pages/route/[id].js":
/*!*****************************!*\
  !*** ./pages/route/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_gql_organization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/gql/organization */ "./src/gql/organization.js");
/* harmony import */ var _src_gql_order__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/gql/order */ "./src/gql/order.js");
/* harmony import */ var _src_gql_route__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/gql/route */ "./src/gql/route.js");
/* harmony import */ var _src_gql_employment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/gql/employment */ "./src/gql/employment.js");
/* harmony import */ var _src_styleMUI_route_route__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/styleMUI/route/route */ "./src/styleMUI/route/route.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _components_order_CardOrder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/order/CardOrder */ "./components/order/CardOrder.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _components_dialog_GeoRoute__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../components/dialog/GeoRoute */ "./components/dialog/GeoRoute.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");




var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




























var Route = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(function (props) {
  var profile = props.user.profile;
  var classes = Object(_src_styleMUI_route_route__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var data = props.data;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  var isMobileApp = props.app.isMobileApp;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.route ? Object(_src_lib__WEBPACK_IMPORTED_MODULE_27__["pdDatePicker"])(new Date(data.route.dateStart)) : null),
      dateStart = _useState[0],
      setDateStart = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.route ? data.route.dateEnd : null),
      dateEnd = _useState2[0],
      setDateEnd = _useState2[1];

  console.log(data.route);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.route ? data.route.employment : {}),
      employment = _useState3[0],
      setEmployment = _useState3[1];

  var handleEmployment = function handleEmployment(event) {
    setEmployment({
      _id: event.target.value,
      name: event.target.name
    });
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(router.query.id === 'new' || !data.route ? {} : data.route.employment.organization),
      organization = _useState4[0],
      setOrganization = _useState4[1];

  var handleOrganization = function handleOrganization(event) {
    setOrganization({
      _id: event.target.value,
      name: event.target.name
    });
  };

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.route ? data.route.invoices : []),
      invoices = _useState5[0],
      setInvoices = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      cancelInvoices = _useState6[0],
      setCancelInvoices = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      allInvoices = _useState7[0],
      setAllInvoices = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      unselectedInvoices = _useState8[0],
      setUnselectedInvoices = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('Все'),
      selectType = _useState9[0],
      setSelectType = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      employments = _useState10[0],
      setEmployments = _useState10[1];

  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var showSnackBar = props.snackbarActions.showSnackBar;
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      var _organization;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (data.route) {
                if (['организация', 'менеджер'].includes(profile.role) && router.query.id === 'new') {
                  _organization = data.organizations.filter(function (element) {
                    return element._id === profile.organization;
                  });
                  setOrganization(_organization[0]);
                }
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [profile]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!data.route) {
                _context2.next = 6;
                break;
              }

              _context2.t0 = setUnselectedInvoices;
              _context2.next = 4;
              return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_9__["getOrders"])({
                search: '',
                sort: '-updatedAt',
                filter: 'обработка'
              });

            case 4:
              _context2.t1 = _context2.sent.invoices;
              (0, _context2.t0)(_context2.t1);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!data.route) {
                _context3.next = 7;
                break;
              }

              if (router.query.id === 'new') setEmployment({});
              _context3.t0 = setEmployments;
              _context3.next = 5;
              return Object(_src_gql_employment__WEBPACK_IMPORTED_MODULE_11__["getEcspeditors"])({
                _id: organization._id
              });

            case 5:
              _context3.t1 = _context3.sent.ecspeditors;
              (0, _context3.t0)(_context3.t1);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }, [organization]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (data.route) {
                if (selectType == 'Все') setAllInvoices([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(invoices), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(unselectedInvoices)));else if (selectType == 'Свободные') setAllInvoices(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(unselectedInvoices));else if (selectType == 'Выбраные') setAllInvoices(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(invoices));
              }

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  }, [selectType, unselectedInvoices, invoices]);
  var statusColor = {
    'создан': 'orange',
    'выполняется': 'blue',
    'выполнен': 'green'
  };

  var getInvoices =
  /*#__PURE__*/
  function () {
    var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!data.route) {
                _context5.next = 12;
                break;
              }

              _context5.t0 = setUnselectedInvoices;
              _context5.next = 4;
              return Object(_src_gql_order__WEBPACK_IMPORTED_MODULE_9__["getOrders"])({
                search: '',
                sort: '-updatedAt',
                filter: 'обработка'
              });

            case 4:
              _context5.t1 = _context5.sent.invoices;
              (0, _context5.t0)(_context5.t1);
              setCancelInvoices([]);
              _context5.t2 = setInvoices;
              _context5.next = 10;
              return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["getRoute"])({
                _id: data.route._id
              });

            case 10:
              _context5.t3 = _context5.sent.route.invoices;
              (0, _context5.t2)(_context5.t3);

            case 12:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getInvoices() {
      return _ref5.apply(this, arguments);
    };
  }();

  var breakGeoRoute = invoices.filter(function (element) {
    return !element.address[1];
  }).length > 0;
  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pageName: data.route ? router.query.id === 'new' ? 'Добавить' : data.route.number : 'Ничего не найдено'
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, data.route ? router.query.id === 'new' ? 'Добавить' : data.route.number : 'Ничего не найдено'), __jsx("meta", {
    name: "description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430."
  }), __jsx("meta", {
    property: "og:title",
    content: data.route ? router.query.id === 'new' ? 'Добавить' : data.route.number : 'Ничего не найдено'
  }), __jsx("meta", {
    property: "og:description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430."
  }), __jsx("meta", {
    property: "og:type",
    content: "website"
  }), __jsx("meta", {
    property: "og:image",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_30__["urlMain"], "/static/512x512.png")
  }), __jsx("meta", {
    property: "og:url",
    content: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_30__["urlMain"], "/route/").concat(router.query.id)
  }), __jsx("link", {
    rel: "canonical",
    href: "".concat(_redux_constants_other__WEBPACK_IMPORTED_MODULE_30__["urlMain"], "/route/").concat(router.query.id)
  })), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: isMobileApp ? classes.pageM : classes.pageD
  }, data.route ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, router.query.id === 'new' ? null : __jsx("div", {
    className: classes.status,
    style: {
      background: statusColor[data.route.status]
    }
  }, data.route.status), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.column
  }, data.route ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, router.query.id === 'new' ? null : __jsx("div", {
    className: classes.number
  }, data.route.number), (router.query.id === 'new' || data.route.status === 'создан') && profile.role === 'admin' ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputDF
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__["default"], null, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: organization._id,
    onChange: handleOrganization
  }, data.organizations.map(function (element) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: element._id,
      value: element._id,
      ola: element.name
    }, element.name);
  }))) : __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
    label: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F",
    value: organization.name,
    className: isMobileApp ? classes.inputM : classes.inputDF,
    inputProps: {
      'aria-label': 'description',
      readOnly: true
    }
  }), __jsx("br", null), router.query.id === 'new' || data.route.status === 'создан' ? __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_20__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputDF
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_18__["default"], null, "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0442\u043E\u0440"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_21__["default"], {
    value: employment._id,
    onChange: handleEmployment
  }, employments.map(function (element) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_19__["default"], {
      key: element._id,
      value: element._id,
      ola: element.name
    }, element.name);
  }))) : __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
    label: "\u042D\u043A\u0441\u043F\u0435\u0434\u0438\u0442\u043E\u0440",
    value: employment.name,
    className: isMobileApp ? classes.inputM : classes.inputDF,
    inputProps: {
      'aria-label': 'description',
      readOnly: true
    }
  }), __jsx("br", null), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputDF,
    label: "\u0414\u0430\u0442\u0430",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    value: dateStart,
    inputProps: {
      'aria-label': 'description',
      readOnly: !(router.query.id === 'new' || data.route.status === 'создан')
    },
    onChange: function onChange(event) {
      return setDateStart(event.target.value);
    }
  }), __jsx("br", null), __jsx("div", {
    style: {
      color: breakGeoRoute ? 'red' : '#ffb300'
    },
    onClick: function onClick() {
      setMiniDialog('Маршрут', __jsx(_components_dialog_GeoRoute__WEBPACK_IMPORTED_MODULE_29__["default"], {
        invoices: invoices
      }), true);
      showMiniDialog(true);
    },
    className: classes.geo
  }, breakGeoRoute ? 'Маршрут неполный' : 'Просмотреть маршрут'), __jsx("br", null), __jsx("div", {
    style: {
      justifyContent: 'center'
    },
    className: classes.row
  }, __jsx("div", {
    style: {
      background: selectType === 'Все' ? '#ffb300' : '#ffffff'
    },
    onClick: function onClick() {
      setSelectType('Все');
    },
    className: classes.selectType
  }, "\u0412\u0441\u0435"), __jsx("div", {
    style: {
      background: selectType === 'Свободные' ? '#ffb300' : '#ffffff'
    },
    onClick: function onClick() {
      setSelectType('Свободные');
    },
    className: classes.selectType
  }, "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0435"), __jsx("div", {
    style: {
      background: selectType === 'Выбраные' ? '#ffb300' : '#ffffff'
    },
    onClick: function onClick() {
      setSelectType('Выбраные');
    },
    className: classes.selectType
  }, "\u0412\u044B\u0431\u0440\u0430\u043D\u044B\u0435")), __jsx("br", null), __jsx("div", {
    className: classes.listInvoices,
    style: {
      zoom: isMobileApp ? 0.83 : 1
    }
  }, allInvoices ? allInvoices.map(function (element, idx) {
    return __jsx("div", {
      key: idx,
      className: classes.row
    }, ['обработка', 'принят'].includes(element.orders[0].status) && !element.confirmationForwarder ? __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_16__["default"], {
      checked: invoices.includes(element),
      onChange: function onChange() {
        if (!invoices.includes(element)) {
          invoices.push(element);
          unselectedInvoices.splice(unselectedInvoices.indexOf(element), 1);
          cancelInvoices.splice(cancelInvoices.indexOf(element), 1);
        } else {
          invoices.splice(invoices.indexOf(element), 1);
          unselectedInvoices.push(element);
          cancelInvoices.push(element);
        }

        setInvoices(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(invoices));
      }
    }) : null, __jsx(_components_order_CardOrder__WEBPACK_IMPORTED_MODULE_17__["default"], {
      getInvoices: getInvoices,
      route: data.route._id,
      element: element
    }));
  }) : null), __jsx("div", {
    className: isMobileApp ? classes.bottomRouteM : classes.bottomRouteD
  }, router.query.id === 'new' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee7() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (dateStart && employment._id && organization._id) {
                action =
                /*#__PURE__*/
                function () {
                  var _ref7 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee6() {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            if (!(employment._id !== undefined && dateStart)) {
                              _context6.next = 5;
                              break;
                            }

                            invoices = invoices.map(function (element) {
                              return element._id;
                            });
                            _context6.next = 4;
                            return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["addRoute"])({
                              invoices: invoices,
                              employment: employment._id,
                              dateStart: new Date(dateStart)
                            });

                          case 4:
                            next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/routes');

                          case 5:
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

                setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                  action: action
                }));
                showMiniDialog(true);
              } else {
                showSnackBar('Заполните все поля');
              }

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })),
    size: "small",
    color: "primary"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C") : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee9() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref9 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee8() {
                  var editElement;
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          editElement = {
                            _id: data.route._id
                          };
                          if (employment._id !== data.route.employment._id && data.route.status === 'создан') editElement.employment = employment._id;
                          if (dateStart && data.route.status === 'создан') editElement.dateStart = new Date(dateStart);
                          editElement.invoices = invoices.map(function (element) {
                            return element._id;
                          });
                          if (cancelInvoices.length > 0) editElement.cancelInvoices = cancelInvoices.map(function (element) {
                            return element._id;
                          });
                          _context8.next = 7;
                          return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["setRoute"])(editElement);

                        case 7:
                          getInvoices();

                        case 8:
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

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    })),
    size: "small",
    color: "primary"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), ['организация', 'менеджер', 'admin'].includes(profile.role) && data.route.status === 'создан' ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee11() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref11 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee10() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee10$(_context10) {
                    while (1) {
                      switch (_context10.prev = _context10.next) {
                        case 0:
                          _context10.next = 2;
                          return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["deleteRoute"])([data.route._id]);

                        case 2:
                          next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/routes');

                        case 3:
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

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action
              }));
              showMiniDialog(true);

            case 3:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    })),
    size: "small",
    color: "primary"
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")) : null))) : 'Ничего не найдено', __jsx("br", null))) : 'Ничего не найдено'));
});

Route.getInitialProps =
/*#__PURE__*/
function () {
  var _ref12 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee12(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            if (!['организация', 'менеджер', 'admin', 'экспедитор'].includes(ctx.store.getState().user.profile.role)) if (ctx.res) {
              ctx.res.writeHead(302, {
                Location: '/'
              });
              ctx.res.end();
            } else next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push('/');
            _context12.t0 = _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"];
            _context12.t1 = {};

            if (!(ctx.query.id !== 'new')) {
              _context12.next = 9;
              break;
            }

            _context12.next = 6;
            return Object(_src_gql_route__WEBPACK_IMPORTED_MODULE_10__["getRoute"])({
              _id: ctx.query.id
            });

          case 6:
            _context12.t2 = _context12.sent;
            _context12.next = 10;
            break;

          case 9:
            _context12.t2 = {
              route: {
                invoices: [],
                employment: {},
                status: '',
                dateStart: null,
                dateEnd: null,
                number: ''
              }
            };

          case 10:
            _context12.t3 = _context12.t2;
            _context12.next = 13;
            return Object(_src_gql_organization__WEBPACK_IMPORTED_MODULE_8__["getOrganizations"])({
              search: '',
              sort: 'name',
              filter: ''
            });

          case 13:
            _context12.t4 = _context12.sent;
            _context12.t5 = (0, _context12.t0)(_context12.t1, _context12.t3, _context12.t4);
            return _context12.abrupt("return", {
              data: _context12.t5
            });

          case 16:
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_22__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_23__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_22__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_24__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Route));

/***/ })

})
//# sourceMappingURL=[id].js.285680c0e024d26e0667.hot-update.js.map