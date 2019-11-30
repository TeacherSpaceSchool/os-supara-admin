webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./components/blog/CardBlog.js":
/*!*************************************!*\
  !*** ./components/blog/CardBlog.js ***!
  \*************************************/
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
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "./node_modules/@material-ui/core/esm/CardHeader/index.js");
/* harmony import */ var _src_styleMUI_blog_cardBlog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/styleMUI/blog/cardBlog */ "./src/styleMUI/blog/cardBlog.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _src_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/lib */ "./src/lib.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _src_gql_blog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/gql/blog */ "./src/gql/blog.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/mini_dialog */ "./redux/actions/mini_dialog.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _dialog_Confirmation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../dialog/Confirmation */ "./components/dialog/Confirmation.js");


var _jsxFileName = "C:\\projects\\azyk\\azyk-admin\\components\\blog\\CardBlog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

















var CardBlog = react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(function (props) {
  var classes = Object(_src_styleMUI_blog_cardBlog__WEBPACK_IMPORTED_MODULE_7__["default"])();
  var element = props.element,
      setList = props.setList;
  var profile = props.user.profile;
  var isMobileApp = props.app.isMobileApp; //addCard

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(element ? element.image : '/static/add.png'),
      preview = _useState[0],
      setPreview = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      image = _useState2[0],
      setImage = _useState2[1];

  var handleChangeImage = function handleChangeImage(event) {
    setImage(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(element ? element.title : ''),
      title = _useState3[0],
      setTitle = _useState3[1];

  var handleTitle = function handleTitle(event) {
    setTitle(event.target.value);
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(element ? element.text : ''),
      text = _useState4[0],
      setText = _useState4[1];

  var handleText = function handleText(event) {
    setText(event.target.value);
  };

  var date = Object(_src_lib__WEBPACK_IMPORTED_MODULE_9__["pdDDMMYYYY"])(element ? new Date(element.updatedAt) : new Date());
  var _props$mini_dialogAct = props.mini_dialogActions,
      setMiniDialog = _props$mini_dialogAct.setMiniDialog,
      showMiniDialog = _props$mini_dialogAct.showMiniDialog;
  var showSnackBar = props.snackbarActions.showSnackBar;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      all = _useState5[0],
      setAll = _useState5[1];

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: isMobileApp ? classes.cardM : classes.cardD,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, profile.role === 'admin' ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    subheader: date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("label", {
    htmlFor: element ? element._id : 'add',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_17__["LazyLoadImage"], {
    placeholderSrc: "/static/add.png",
    effect: "blur",
    className: isMobileApp ? classes.mediaM : classes.mediaD,
    src: preview,
    alt: 'Изменить',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "\u0418\u043C\u044F",
    value: title,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: handleTitle,
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: "\u0422\u0435\u043A\u0441\u0442",
    value: text,
    className: isMobileApp ? classes.inputM : classes.inputD,
    onChange: handleText,
    inputProps: {
      'aria-label': 'description'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, element !== undefined ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                _id: element._id
              };
              if (title.length > 0 && title !== element.title) editElement.title = title;
              if (text.length > 0 && text !== element.text) editElement.text = text;
              if (image !== undefined) editElement.image = image;

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
                          return Object(_src_gql_blog__WEBPACK_IMPORTED_MODULE_12__["setBlog"])(editElement);

                        case 3:
                          _context.t1 = _context.sent.blogs;
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

              setMiniDialog('Вы уверенны?', __jsx(_dialog_Confirmation__WEBPACK_IMPORTED_MODULE_18__["default"], {
                action: action,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 96
                },
                __self: this
              }));
              showMiniDialog(true);

            case 7:
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
      lineNumber: 88
    },
    __self: this
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                          _context3.t0 = setList;
                          _context3.next = 3;
                          return Object(_src_gql_blog__WEBPACK_IMPORTED_MODULE_12__["deleteBlog"])([element._id]);

                        case 3:
                          _context3.t1 = _context3.sent.blogs;
                          (0, _context3.t0)(_context3.t1);

                        case 5:
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
                  lineNumber: 105
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
      lineNumber: 101
    },
    __self: this
  }, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C")) : __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      var action;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (image !== undefined && text.length > 0 && title.length > 0) {
                setImage(undefined);
                setPreview('/static/add.png');
                setTitle('');
                setText('');

                action =
                /*#__PURE__*/
                function () {
                  var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
                  /*#__PURE__*/
                  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.t0 = setList;
                            _context5.next = 3;
                            return Object(_src_gql_blog__WEBPACK_IMPORTED_MODULE_12__["addBlog"])({
                              image: image,
                              text: text,
                              title: title
                            });

                          case 3:
                            _context5.t1 = _context5.sent.blogs;
                            (0, _context5.t0)(_context5.t1);

                          case 5:
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
                    lineNumber: 121
                  },
                  __self: this
                }));
                showMiniDialog(true);
              } else {
                showSnackBar('Заполните все поля');
              }

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C")), __jsx("input", {
    accept: "image/*",
    style: {
      display: 'none'
    },
    id: element ? element._id : 'add',
    type: "file",
    onChange: handleChangeImage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  })) : element !== undefined ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_17__["LazyLoadImage"], {
    placeholderSrc: "/static/add.png",
    effect: "blur",
    className: isMobileApp ? classes.mediaM : classes.mediaD,
    src: element.image,
    alt: element.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), __jsx("div", {
    className: classes.shapka,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, element.title), __jsx("div", {
    className: classes.date,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, date)), all ? __jsx("div", {
    style: {
      fontSize: '1rem',
      margin: 20,
      whiteSpace: 'pre-wrap'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, element.text) : null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onClick:
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              setAll(!all);

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })),
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, all ? 'Свернуть' : 'Посмотреть полностью'))) : null);
});

function mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_15__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_14__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_16__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(CardBlog));

/***/ })

})
//# sourceMappingURL=blog.js.8f80dcd712130c9f8001.hot-update.js.map