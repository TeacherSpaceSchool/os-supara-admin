webpackHotUpdate("static\\development\\pages\\client\\[id].js",{

/***/ "./pages/client/[id].js":
/*!******************************!*\
  !*** ./pages/client/[id].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/App */ "./layouts/App.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_gql_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/gql/client */ "./src/gql/client.js");
/* harmony import */ var _src_styleMUI_client_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/styleMUI/client/client */ "./src/styleMUI/client/client.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/user */ "./redux/actions/user.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/InputAdornment */ "./node_modules/@material-ui/core/esm/InputAdornment/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "./node_modules/@material-ui/icons/VisibilityOff.js");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../components/dialog/Confirmation */ "./components/dialog/Confirmation.js");
/* harmony import */ var _components_dialog_Geo__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../components/dialog/Geo */ "./components/dialog/Geo.js");




var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\pages\\client\\[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



























var Client = react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(function (props) {
  var profile = props.user.profile;
  var classes = Object(_src_styleMUI_client_client__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var data = props.data;
  var isMobileApp = props.app.isMobileApp;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client !== null ? data.client.user.status : ''),
      status = _useState[0],
      setStatus = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client !== null ? data.client.name : ''),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client !== null ? data.client.email : ''),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client !== null ? data.client.user.phone : ''),
      phone = _useState4[0],
      setPhone = _useState4[1]; //привести к геолокации


  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_3___default()(data.client.address[0])) data.client.address.map(function (addres) {
    return [addres];
  });

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client !== null ? data.client.address : []),
      address = _useState5[0],
      setAddress = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newAddress = _useState6[0],
      setNewAddress = _useState6[1];

  var addAddress = function addAddress() {
    address = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(address), [[newAddress]]);
    setAddress(address);
    setNewAddress('');
  };

  var editAddress = function editAddress(event, idx) {
    address[idx][0] = event.target.value;
    setAddress(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(address));
  };

  var deleteAddress = function deleteAddress(idx) {
    address.splice(idx, 1);
    setAddress(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(address));
  };

  var setAddressGeo = function setAddressGeo(geo, idx) {
    address[idx][1] = geo;
    console.log(address[idx]);
    setAddress(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(address));
  };

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client !== null ? data.client.info : ''),
      info = _useState7[0],
      setInfo = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(data.client !== null ? data.client.image : ''),
      preview = _useState8[0],
      setPreview = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(undefined),
      image = _useState9[0],
      setImage = _useState9[1];

  var handleChangeImage = function handleChangeImage(event) {
    setImage(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var logout = props.userActions.logout;

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      newPass = _useState10[0],
      setNewPass = _useState10[1];

  var handleNewPass = function handleNewPass(event) {
    setNewPass(event.target.value);
  };

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])('password'),
      hide = _useState11[0],
      setHide = _useState11[1];

  var handleHide = function handleHide() {
    setHide(!hide);
  };

  return __jsx(_layouts_App__WEBPACK_IMPORTED_MODULE_6__["default"], {
    filters: data.filterSubCategory,
    sorts: data.sortSubCategory,
    pageName: data.client !== null ? data.client.name : 'Ничего не найдено',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, data.client !== null ? data.client.name : 'Ничего не найдено')), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.page,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: isMobileApp ? classes.column : classes.row,
    style: isMobileApp ? {} : {
      justifyContent: 'start',
      alignItems: 'flex-start'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, data.client !== null ? profile.role === 'admin' || profile._id === data.client.user._id ? __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("label", {
    htmlFor: "contained-button-file",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_26__["LazyLoadImage"], {
    placeholderSrc: "/static/add.png",
    effect: "blur",
    className: classes.media,
    src: preview,
    alt: 'Добавить',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
      lineNumber: 100
    },
    __self: this
  }), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
    placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C",
    type: hide ? 'password' : 'text',
    value: newPass,
    onChange: handleNewPass,
    className: isMobileApp ? classes.inputM : classes.inputD,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
      "aria-label": "Toggle password visibility",
      onClick: handleHide,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_22___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_21___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_24__["default"], {
    className: isMobileApp ? classes.inputM : classes.inputD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_25__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
    value: newAddress,
    onChange: function onChange(event) {
      setNewAddress(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__["default"], {
      position: "end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
      onClick: function onClick() {
        addAddress();
      },
      "aria-label": "toggle password visibility",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_17___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })), address ? address.map(function (element, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_24__["default"], {
      key: idx,
      className: isMobileApp ? classes.inputM : classes.inputD,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_25__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: this
    }, "\u0410\u0434\u0440\u0435\u0441"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_12__["default"], {
      placeholder: "\u0410\u0434\u0440\u0435\u0441",
      value: element[0],
      className: isMobileApp ? classes.inputM : classes.inputD,
      onChange: function onChange(event) {
        editAddress(event, idx);
      },
      inputProps: {
        'aria-label': 'description'
      },
      endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_20__["default"], {
        position: "end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
        onClick: function onClick() {
          deleteAddress(idx);
        },
        "aria-label": "toggle password visibility",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }))),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    })), __jsx("div", {
      className: classes.geo,
      onClick: function onClick() {
        setMiniDialog('Геолокация', __jsx(_components_dialog_Geo__WEBPACK_IMPORTED_MODULE_29__["default"], {
          geo: element[1],
          setAddressGeo: setAddressGeo,
          idx: idx,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }), true);
        showMiniDialog(true);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, element[1] ? 'Изменить геолокацию' : 'Задайте геолокацию'));
  }) : null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__["default"], {
    label: "email",
    value: email,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: function onChange(event) {
      setEmail(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__["default"], {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    value: phone,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: function onChange(event) {
      setPhone(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__["default"], {
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
      lineNumber: 204
    },
    __self: this
  }), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var editElement, action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              editElement = {
                _id: data.client.user._id
              };
              if (image !== undefined) editElement.image = image;
              if (name.length > 0 && name !== data.client.name) editElement.name = name;
              if (address.length > 0 && address !== data.client.address) editElement.address = address;
              if (email.length > 0 && email !== data.client.email) editElement.email = email;
              if (phone.length > 0 && phone !== data.client.phone) editElement.phone = phone;
              if (info.length > 0 && info !== data.client.info) editElement.info = info;
              if (newPass.length > 0) editElement.newPass = newPass;
              if (phone.length > 0) editElement.phone = phone;

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
                          _context.next = 2;
                          return Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_8__["setClient"])(editElement);

                        case 2:
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
                  lineNumber: 228
                },
                __self: this
              }));
              showMiniDialog(true);

            case 12:
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
      lineNumber: 215
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), profile.role === 'admin' ? __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              action =
              /*#__PURE__*/
              function () {
                var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_8__["onoffClient"])([data.client._id]);

                        case 2:
                          setStatus(status === 'active' ? 'deactive' : 'active');

                        case 3:
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

              setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 239
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
      lineNumber: 234
    },
    __self: this
  }, status === 'active' ? 'Отключить' : 'Включить') : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: function onClick() {
      var action =
      /*#__PURE__*/
      function () {
        var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  logout();

                case 1:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function action() {
          return _ref5.apply(this, arguments);
        };
      }();

      setMiniDialog('Вы уверенны?', __jsx(_components_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_28__["default"], {
        action: action,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }));
      showMiniDialog(true);
    },
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "\u0412\u044B\u0439\u0442\u0438")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_26__["LazyLoadImage"], {
    placeholderSrc: "/static/add.png",
    effect: "blur",
    className: classes.media,
    src: preview,
    alt: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, __jsx("div", {
    className: classes.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, name), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "\u0410\u0434\u0440\u0435\u0441:\xA0"), __jsx("div", {
    className: classes.column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, address ? address.map(function (element, idx) {
    return __jsx("div", {
      className: classes.value,
      key: idx,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277
      },
      __self: this
    }, element);
  }) : null)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "E-mail:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, email)), __jsx("div", {
    className: classes.row,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, __jsx("div", {
    className: classes.nameField,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:\xA0"), __jsx("div", {
    className: classes.value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, phone)), __jsx("div", {
    className: classes.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, info))) : 'Ничего не найдено')), __jsx("input", {
    accept: "image/*",
    style: {
      display: 'none'
    },
    id: "contained-button-file",
    type: "file",
    onChange: handleChangeImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }));
});

Client.getInitialProps =
/*#__PURE__*/
function () {
  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(ctx) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!['организация', 'менеджер', 'admin', 'экспедитор', 'client'].includes(ctx.store.getState().user.profile.role)) if (ctx.res) {
              ctx.res.writeHead(302, {
                Location: '/'
              });
              ctx.res.end();
            } else next_router__WEBPACK_IMPORTED_MODULE_27___default.a.push('/');
            _context6.next = 3;
            return Object(_src_gql_client__WEBPACK_IMPORTED_MODULE_8__["getClient"])({
              _id: ctx.query.id
            });

          case 3:
            _context6.t0 = _context6.sent;
            return _context6.abrupt("return", {
              data: _context6.t0
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function (_x) {
    return _ref6.apply(this, arguments);
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
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_15__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_16__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Client));

/***/ })

})
//# sourceMappingURL=[id].js.3b40a06caa810f56e587.hot-update.js.map