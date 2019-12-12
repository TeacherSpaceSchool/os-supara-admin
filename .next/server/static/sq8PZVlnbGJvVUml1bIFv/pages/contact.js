module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "//vS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSnackBar", function() { return showSnackBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSnackBar", function() { return closeSnackBar; });
/* harmony import */ var _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("LFFW");

function showSnackBar(title) {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_SNACKBAR */ "b"],
    payload: {
      title: title
    }
  };
}
function closeSnackBar() {
  return {
    type: _constants_snackbar__WEBPACK_IMPORTED_MODULE_0__[/* CLOSE_SNACKBAR */ "a"]
  };
}

/***/ }),

/***/ "/Wk0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdH");


/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "2BDn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Group");

/***/ }),

/***/ "2UeD":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Done");

/***/ }),

/***/ "3REV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalGroceryStore");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4CLJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArtTrack");

/***/ }),

/***/ "4D1s":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4jCe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "5ZB+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FormatListNumbered");

/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "7xJj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SearchRounded");

/***/ }),

/***/ "84Rl":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DateRange");

/***/ }),

/***/ "8UEt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_MINI_DIALOG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_MINI_DIALOG; });
const SET_MINI_DIALOG = 'SET_MINI_DIALOG';
const SHOW_MINI_DIALOG = 'SHOW_MINI_DIALOG';

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9a0h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return urlGQL; });
/* unused harmony export urlGQLws */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return urlMain; });
/* unused harmony export validMail */
/* unused harmony export validPhone */
/* unused harmony export checkInt */
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);

let urlGQL;
let urlGQLws;
let urlMain;

if ("localhost".trim() === 'azyk.store') {
  urlGQL = `https://${"localhost"}:3000/graphql`;
  urlGQLws = `ws://${"localhost"}:3000/graphql`;
  urlMain = `https://${"localhost"}`;
} else {
  urlGQL = `http://${"localhost"}:3000/graphql`;
  urlGQLws = `ws://${"localhost"}:3000/graphql`;
  urlMain = `http://${"localhost"}`;
}

const validMail = mail => {
  return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(mail);
};
const validPhone = phone => {
  return /^[+]{1}996[0-9]{9}$/.test(phone);
};
const checkInt = int => {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(int);
};

/***/ }),

/***/ "AHpn":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationCity");

/***/ }),

/***/ "ALdH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./layouts/App.js + 8 modules
var App = __webpack_require__("aSjJ");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// EXTERNAL MODULE: ./src/singleton/client.js
var singleton_client = __webpack_require__("gIpB");

// CONCATENATED MODULE: ./src/gql/contact.js


const getContact = async () => {
  try {
    const client = new singleton_client["a" /* SingletonApolloClient */]().getClient();
    let res = await client.query({
      query: external_apollo_boost_["gql"]`
                    query {
                        contact {
                            name
                            image
                            address
                            email
                            phone
                            info
                            social
                          }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const setContact = async element => {
  try {
    const client = new singleton_client["a" /* SingletonApolloClient */]().getClient();
    await client.mutate({
      variables: element,
      mutation: external_apollo_boost_["gql"]`
                    mutation ($name: String!, $image: Upload, $address: [String]!, $email: [String]!, $phone: [String]!, $info: String!, $social: [String]!) {
                        setContact(name: $name, image: $image, address: $address, email: $email, phone: $phone, info: $info, social: $social) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/styleMUI/contact.js

/* harmony default export */ var contact = (Object(styles_["makeStyles"])({
  page: {
    margin: '20px'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  column: {
    display: 'flex',
    flexDirection: 'column'
  },
  media: {
    objectFit: 'cover',
    height: 300,
    width: 300,
    marginRight: 10,
    marginBottom: 10
  },
  name: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '1.25rem',
    fontFamily: 'Roboto'
  },
  value: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '1rem',
    fontFamily: 'Roboto'
  },
  nameField: {
    width: 80,
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '1rem',
    fontFamily: 'Roboto',
    color: '#A0A0A0'
  },
  info: {
    color: '#455A64',
    marginBottom: 10,
    fontSize: '1rem',
    fontFamily: 'Roboto',
    whiteSpace: 'pre-wrap'
  },
  input: {
    marginBottom: 10,
    width: '100%'
  },
  mediaSocial: {
    objectFit: 'cover',
    height: 32,
    width: 32,
    margin: 10
  }
}));
// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__("tBFs");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./redux/actions/mini_dialog.js
var mini_dialog = __webpack_require__("pngM");

// EXTERNAL MODULE: external "@material-ui/icons/Add"
var Add_ = __webpack_require__("W/Kq");

// EXTERNAL MODULE: external "@material-ui/icons/Remove"
var Remove_ = __webpack_require__("VMnw");
var Remove_default = /*#__PURE__*/__webpack_require__.n(Remove_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__("lj8g");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "@material-ui/core/FormControl"
var FormControl_ = __webpack_require__("lWoh");
var FormControl_default = /*#__PURE__*/__webpack_require__.n(FormControl_);

// EXTERNAL MODULE: external "@material-ui/core/InputLabel"
var InputLabel_ = __webpack_require__("zOcm");
var InputLabel_default = /*#__PURE__*/__webpack_require__.n(InputLabel_);

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: ./components/dialog/Confirmation.js
var Confirmation = __webpack_require__("y4xb");

// EXTERNAL MODULE: ./redux/actions/user.js
var user = __webpack_require__("j6IE");

// EXTERNAL MODULE: ./redux/constants/other.js
var other = __webpack_require__("9a0h");

// EXTERNAL MODULE: external "@material-ui/icons/Visibility"
var Visibility_ = __webpack_require__("4jCe");

// EXTERNAL MODULE: external "@material-ui/icons/VisibilityOff"
var VisibilityOff_ = __webpack_require__("gGTQ");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");

// EXTERNAL MODULE: ./src/styleMUI/dialogContent.js
var dialogContent = __webpack_require__("o0q0");

// CONCATENATED MODULE: ./components/dialog/AddSocial.js
var __jsx = external_react_default.a.createElement;


















const AddSocial = external_react_default.a.memo(props => {
  const {
    classes,
    action,
    idx,
    social
  } = props;
  let {
    0: url,
    1: setUrl
  } = Object(external_react_["useState"])(social ? social : '');
  const {
    isMobileApp
  } = props.app;
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  const width = isMobileApp ? window.innerWidth - 144 : 500;
  return __jsx("div", {
    className: classes.main
  }, __jsx(TextField_default.a, {
    style: {
      width: width
    },
    id: "standard-search",
    label: "URL",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: url,
    onChange: event => {
      setUrl(event.target.value);
    }
  }), __jsx("br", null), __jsx("div", null, __jsx(Button_default.a, {
    variant: "contained",
    color: "primary",
    onClick: async () => {
      await action(url, idx);
      showMiniDialog(false);
    },
    className: classes.button
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), __jsx(Button_default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(external_redux_["bindActionCreators"])(mini_dialog, dispatch),
    userActions: Object(external_redux_["bindActionCreators"])(user, dispatch)
  };
}

/* harmony default export */ var dialog_AddSocial = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Object(styles_["withStyles"])(dialogContent["a" /* default */])(AddSocial)));
// CONCATENATED MODULE: ./pages/contact.js

var contact_jsx = external_react_default.a.createElement;






















const Contact = external_react_default.a.memo(props => {
  const classes = contact();
  const {
    data
  } = props;
  const {
    isMobileApp
  } = props.app;
  let {
    0: name,
    1: setName
  } = Object(external_react_["useState"])(data.contact.name);
  let {
    0: address,
    1: setAddress
  } = Object(external_react_["useState"])(data.contact.address);
  let {
    0: newAddress,
    1: setNewAddress
  } = Object(external_react_["useState"])('');

  let addAddress = () => {
    address = [...address, newAddress];
    setAddress(address);
    setNewAddress('');
  };

  let editAddress = (event, idx) => {
    address[idx] = event.target.value;
    setAddress([...address]);
  };

  let deleteAddress = idx => {
    address.splice(idx, 1);
    setAddress([...address]);
  };

  let {
    0: email,
    1: setEmail
  } = Object(external_react_["useState"])(data.contact.email);
  let {
    0: newEmail,
    1: setNewEmail
  } = Object(external_react_["useState"])('');

  let addEmail = () => {
    email = [...email, newEmail];
    setEmail(email);
    setNewEmail('');
  };

  let editEmail = (event, idx) => {
    email[idx] = event.target.value;
    setEmail([...email]);
  };

  let deleteEmail = idx => {
    email.splice(idx, 1);
    setEmail([...email]);
  };

  let {
    0: phone,
    1: setPhone
  } = Object(external_react_["useState"])(data.contact.phone);
  let {
    0: newPhone,
    1: setNewPhone
  } = Object(external_react_["useState"])('');

  let addPhone = () => {
    phone = [...phone, newPhone];
    setPhone(phone);
    setNewPhone('');
  };

  let editPhone = (event, idx) => {
    phone[idx] = event.target.value;
    setPhone([...phone]);
  };

  let deletePhone = idx => {
    phone.splice(idx, 1);
    setPhone([...phone]);
  };

  let {
    0: social,
    1: setSocial
  } = Object(external_react_["useState"])(data.contact.social);

  let addSocial = (value, idx) => {
    social[idx] = value;
    setSocial([...social]);
  };

  let {
    0: info,
    1: setInfo
  } = Object(external_react_["useState"])(data.contact.info);
  let {
    0: preview,
    1: setPreview
  } = Object(external_react_["useState"])(data.contact.image === '' ? '/static/add.png' : data.contact.image);
  let {
    0: image,
    1: setImage
  } = Object(external_react_["useState"])(undefined);

  let handleChangeImage = event => {
    setImage(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const {
    profile
  } = props.user;
  const {
    setMiniDialog,
    showMiniDialog
  } = props.mini_dialogActions;
  return contact_jsx(App["a" /* default */], {
    filters: data.filterSubCategory,
    sorts: data.sortSubCategory,
    pageName: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
  }, contact_jsx(head_default.a, null, contact_jsx("title", null, name), contact_jsx("meta", {
    name: "description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430."
  }), contact_jsx("meta", {
    property: "og:title",
    content: "\u0410\u0437\u044B\u043A - \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0441\u043A\u043B\u0430\u0434 \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F \u0441 \u0442\u043E\u0440\u0433\u043E\u0432\u043E\u0439 \u0442\u043E\u0447\u043A\u043E\u0439"
  }), contact_jsx("meta", {
    property: "og:description",
    content: "\u0410\u0437\u044B\u043A \u2013 \u044D\u0442\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0434\u043B\u044F \u0437\u0430\u043A\u0430\u0437\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043E\u043F\u0442\u043E\u043C, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u0430\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043C\u0430\u043B\u043E\u0433\u043E \u0438 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430.  \u041E\u043D\u0430 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u044F\u0435\u0442 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0438 \u0442\u043E\u0440\u0433\u043E\u0432\u044B\u0435 \u0442\u043E\u0447\u043A\u0438 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E, \u0441\u043E\u043A\u0440\u0430\u0449\u0430\u044F \u0440\u0430\u0441\u0445\u043E\u0434\u044B \u0438 \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0438. \u0410\u0437\u044B\u043A \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0432\u043E\u0438\u043C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C \u043C\u043E\u0449\u043D\u044B\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430."
  }), contact_jsx("meta", {
    property: "og:type",
    content: "website"
  }), contact_jsx("meta", {
    property: "og:image",
    content: `${other["b" /* urlMain */]}/static/512x512.png`
  }), contact_jsx("meta", {
    property: "og:url",
    content: `${other["b" /* urlMain */]}/contact`
  }), contact_jsx("link", {
    rel: "canonical",
    href: `${other["b" /* urlMain */]}/contact`
  })), contact_jsx(Card_default.a, {
    className: classes.page
  }, contact_jsx(CardContent_default.a, {
    className: isMobileApp ? classes.column : classes.row
  }, profile.role === 'admin' ? contact_jsx(external_react_default.a.Fragment, null, contact_jsx("div", {
    className: classes.column
  }, contact_jsx("label", {
    htmlFor: "contained-button-file"
  }, contact_jsx("img", {
    className: classes.media,
    src: preview,
    alt: 'Добавить'
  })), "\u041D\u0430\u0448\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B", contact_jsx("div", {
    className: classes.row
  }, contact_jsx("img", {
    src: "/static/instagram.svg",
    onClick: () => {
      setMiniDialog('Instagram', contact_jsx(dialog_AddSocial, {
        social: social[0],
        action: addSocial,
        idx: 0
      }));
      showMiniDialog(true);
    },
    className: classes.mediaSocial
  }), contact_jsx("img", {
    src: "/static/facebook.svg",
    onClick: () => {
      setMiniDialog('Facebook', contact_jsx(dialog_AddSocial, {
        social: social[1],
        action: addSocial,
        idx: 1
      }));
      showMiniDialog(true);
    },
    className: classes.mediaSocial
  }), contact_jsx("img", {
    src: "/static/twitter.svg",
    onClick: () => {
      setMiniDialog('Twitter', contact_jsx(dialog_AddSocial, {
        social: social[2],
        action: addSocial,
        idx: 2
      }));
      showMiniDialog(true);
    },
    className: classes.mediaSocial
  }), contact_jsx("img", {
    src: "/static/telegram.svg",
    onClick: () => {
      setMiniDialog('Telegram', contact_jsx(dialog_AddSocial, {
        social: social[3],
        action: addSocial,
        idx: 3
      }));
      showMiniDialog(true);
    },
    className: classes.mediaSocial
  }))), contact_jsx("div", null, contact_jsx(TextField_default.a, {
    label: "\u0418\u043C\u044F",
    value: name,
    className: classes.input,
    onChange: event => {
      setName(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    }
  }), address.map((element, idx) => contact_jsx(FormControl_default.a, {
    key: idx,
    className: classes.input
  }, contact_jsx(InputLabel_default.a, null, "\u0410\u0434\u0440\u0435\u0441"), contact_jsx(Input_default.a, {
    placeholder: "\u0410\u0434\u0440\u0435\u0441",
    value: element,
    onChange: event => {
      editAddress(event, idx);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: contact_jsx(InputAdornment_default.a, {
      position: "end"
    }, contact_jsx(IconButton_default.a, {
      onClick: () => {
        deleteAddress(idx);
      },
      "aria-label": "toggle password visibility"
    }, contact_jsx(Remove_default.a, null)))
  }))), contact_jsx(Button_default.a, {
    onClick: async () => {
      addAddress();
    },
    size: "small",
    color: "primary"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0430\u0434\u0440\u0435\u0441"), contact_jsx("br", null), contact_jsx("br", null), email.map((element, idx) => contact_jsx(FormControl_default.a, {
    key: idx,
    className: classes.input
  }, contact_jsx(InputLabel_default.a, null, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"), contact_jsx(Input_default.a, {
    value: element,
    onChange: event => {
      editEmail(event, idx);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: contact_jsx(InputAdornment_default.a, {
      position: "end"
    }, contact_jsx(IconButton_default.a, {
      onClick: () => {
        deleteEmail(idx);
      },
      "aria-label": "toggle password visibility"
    }, contact_jsx(Remove_default.a, null)))
  }))), contact_jsx(Button_default.a, {
    onClick: async () => {
      addEmail();
    },
    size: "small",
    color: "primary"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C email"), contact_jsx("br", null), contact_jsx("br", null), phone.map((element, idx) => contact_jsx(FormControl_default.a, {
    key: idx,
    className: classes.input
  }, contact_jsx(InputLabel_default.a, null, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"), contact_jsx(Input_default.a, {
    value: element,
    onChange: event => {
      editPhone(event, idx);
    },
    inputProps: {
      'aria-label': 'description'
    },
    endAdornment: contact_jsx(InputAdornment_default.a, {
      position: "end"
    }, contact_jsx(IconButton_default.a, {
      onClick: () => {
        deletePhone(idx);
      },
      "aria-label": "toggle password visibility"
    }, contact_jsx(Remove_default.a, null)))
  }))), contact_jsx(Button_default.a, {
    onClick: async () => {
      addPhone();
    },
    size: "small",
    color: "primary"
  }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D. \u0424\u043E\u0440\u043C\u0430\u0442: +996555780861"), contact_jsx("br", null), contact_jsx("br", null), contact_jsx(TextField_default.a, {
    multiline: true,
    label: "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F",
    value: info,
    className: classes.input,
    onChange: event => {
      setInfo(event.target.value);
    },
    inputProps: {
      'aria-label': 'description'
    }
  }), contact_jsx("div", {
    className: classes.row
  }, contact_jsx(Button_default.a, {
    onClick: async () => {
      let editElement = {
        name: name,
        address: address,
        email: email,
        phone: phone,
        social: social,
        info: info
      };
      if (image !== undefined) editElement.image = image;

      const action = async () => {
        await setContact(editElement);
      };

      setMiniDialog('Вы уверенны?', contact_jsx(Confirmation["a" /* default */], {
        action: action
      }));
      showMiniDialog(true);
    },
    size: "small",
    color: "primary"
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))) : contact_jsx(external_react_default.a.Fragment, null, contact_jsx("div", {
    className: classes.column
  }, contact_jsx("img", {
    className: classes.media,
    src: preview,
    alt: name
  }), social[0].length > 0 || social[1].length > 0 || social[2].length > 0 || social[3].length > 0 ? contact_jsx(external_react_default.a.Fragment, null, "\u041D\u0430\u0448\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B", contact_jsx("div", {
    className: classes.row
  }, social[0].length > 0 ? contact_jsx("a", {
    href: social[0]
  }, contact_jsx("img", {
    src: "/static/instagram.svg",
    className: classes.mediaSocial
  })) : null, social[1].length > 0 ? contact_jsx("a", {
    href: social[1]
  }, contact_jsx("img", {
    src: "/static/facebook.svg",
    className: classes.mediaSocial
  })) : null, social[2].length > 0 ? contact_jsx("a", {
    href: social[2]
  }, contact_jsx("img", {
    src: "/static/twitter.svg",
    className: classes.mediaSocial
  })) : null, social[3].length > 0 ? contact_jsx("a", {
    href: social[3]
  }, contact_jsx("img", {
    src: "/static/telegram.svg",
    className: classes.mediaSocial
  })) : null)) : null), contact_jsx("div", null, contact_jsx("div", {
    className: classes.name
  }, name), contact_jsx("br", null), contact_jsx("div", {
    className: classes.row
  }, contact_jsx("div", {
    className: classes.nameField
  }, "\u0410\u0434\u0440\u0435\u0441:\xA0"), contact_jsx("div", {
    className: classes.column
  }, address.map((element, idx) => contact_jsx("div", {
    key: idx,
    className: classes.value
  }, element)))), contact_jsx("div", {
    className: classes.row
  }, contact_jsx("div", {
    className: classes.nameField
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D:\xA0"), contact_jsx("div", {
    className: classes.column
  }, phone.map((element, idx) => contact_jsx("a", {
    href: `tel:${element}`,
    key: idx,
    className: classes.value
  }, element)))), contact_jsx("div", {
    className: classes.row
  }, contact_jsx("div", {
    className: classes.nameField
  }, "E-mail:\xA0"), contact_jsx("div", {
    className: classes.column
  }, email.map((element, idx) => contact_jsx("a", {
    href: `mailto:${element}`,
    key: idx,
    className: classes.value
  }, element)))), contact_jsx("br", null), contact_jsx("div", {
    className: classes.info
  }, info))))), contact_jsx("input", {
    accept: "image/*",
    style: {
      display: 'none'
    },
    id: "contained-button-file",
    type: "file",
    onChange: handleChangeImage
  }));
});

Contact.getInitialProps = async function () {
  return {
    data: Object(objectSpread["a" /* default */])({}, (await getContact()))
  };
};

function contact_mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app
  };
}

function contact_mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(external_redux_["bindActionCreators"])(mini_dialog, dispatch)
  };
}

/* harmony default export */ var pages_contact = __webpack_exports__["default"] = (Object(external_react_redux_["connect"])(contact_mapStateToProps, contact_mapDispatchToProps)(Contact));

/***/ }),

/***/ "BPlj":
/***/ (function(module, exports) {

module.exports = require("apollo-upload-client");

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "DzNn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDrawer", function() { return showDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFilter", function() { return setFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDate", function() { return setDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCountBasket", function() { return setCountBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSort", function() { return setSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSearch", function() { return setSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsMobileApp", function() { return setIsMobileApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showLoad", function() { return showLoad; });
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("grec");

function showDrawer(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_DRAWER */ "g"],
    payload: data
  };
}
function setFilter(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__[/* SET_FILTER */ "c"],
    payload: data
  };
}
function setDate(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__[/* SET_DATE */ "b"],
    payload: data
  };
}
function setCountBasket(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__[/* SET_COUNT_BASKET */ "a"],
    payload: data
  };
}
function setSort(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__[/* SET_SORT */ "f"],
    payload: data
  };
}
function setSearch(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__[/* SET_SEARCH */ "e"],
    payload: data
  };
}
function setIsMobileApp(data) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__[/* SET_IS_MOBILE_APP */ "d"],
    payload: data
  };
}
function showLoad(show) {
  return {
    type: _constants_app__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_LOAD */ "h"],
    payload: show
  };
}

/***/ }),

/***/ "Ek77":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "Etkh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Loyalty");

/***/ }),

/***/ "F9xJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/UnfoldLess");

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GXDu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getCountBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addBasket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setBasket; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("gIpB");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gs4i");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("DzNn");




const getBasket = async () => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__[/* SingletonApolloClient */ "a"]().getClient();
    let res = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query{
                        baskets {
                            _id
                            createdAt
                            item 
                                {
                                    _id 
                                    name 
                                    stock 
                                    image 
                                    price
                                    organization
                                        {_id name minimumOrder}
                                }
                            count
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getCountBasket = async () => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__[/* SingletonApolloClient */ "a"]().getClient();
    let res;
    if (new _singleton_store__WEBPACK_IMPORTED_MODULE_2__[/* SingletonStore */ "a"]().getStore().getState().user.authenticated) res = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    query {
                        countBasket 
                    }`
    });else if (localStorage.basket) {
      let basket = JSON.parse(localStorage.basket);
      res = {
        data: {
          countBasket: basket.length
        }
      };
    }
    new _singleton_store__WEBPACK_IMPORTED_MODULE_2__[/* SingletonStore */ "a"]().getStore().dispatch(Object(_redux_actions_app__WEBPACK_IMPORTED_MODULE_3__["setCountBasket"])(res.data.countBasket));
  } catch (err) {
    console.error(err);
  }
};
const deleteBasket = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__[/* SingletonApolloClient */ "a"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: [ID]!) {
                        deleteBasket(_id: $_id) {
                             data
                        }
                    }`
    });
    await getCountBasket();
    return await getBasket(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__[/* SingletonStore */ "a"]().getStore().getState().app);
  } catch (err) {
    console.error(err);
  }
};
const addBasket = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__[/* SingletonApolloClient */ "a"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($item: ID!, $count: Int!, $organization: ID!) {
                        addBasket(item: $item, count: $count, organization: $organization) {
                             data
                        }
                    }`
    });
    await getCountBasket();
  } catch (err) {
    console.error(err);
  }
};
const setBasket = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_1__[/* SingletonApolloClient */ "a"]().getClient();
    await client.mutate({
      variables: element,
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
                    mutation ($_id: ID!, $count: Int!) {
                        setBasket(_id: $_id, count: $count) {
                             data
                        }
                    }`
    });
    await getCountBasket();
    return await getBasket(new _singleton_store__WEBPACK_IMPORTED_MODULE_2__[/* SingletonStore */ "a"]().getStore().getState().app);
  } catch (err) {
    console.error(err);
  }
};

/***/ }),

/***/ "GYHf":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "IZOe":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "IfcR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "KkvU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Whatshot");

/***/ }),

/***/ "LFFW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CLOSE_SNACKBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SHOW_SNACKBAR; });
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
const SHOW_SNACKBAR = 'SHOW_SNACKBAR';

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "LvlT":
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "Ms0O":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "NOnC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return checkMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pdDDMMYYYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return pdDDMMYY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return pdDatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return pdDDMMYYHHMM; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Jkg");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);


const regexpUA = /(Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|iOS|Mobile)/;
const checkMobile = ua => {
  return regexpUA.exec(ua) !== null;
};
const regexpAuth = /(\s)?jwt=(\S)+(;)?/;
const checkAuth = auth => {
  return regexpAuth.exec(auth) !== null;
};
const getJWT = auth => {
  let res = regexpAuth.exec(auth);
  return res !== null ? res[0].trim().replace('jwt=', '') : undefined;
};
const checkInt = int => {
  return isNaN(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(int)) ? 0 : _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(int);
};
const pdDDMMYYYY = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '');
  return date;
};
const pdDDMMYY = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4);
  return date;
};
const pdDatePicker = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[0].replace('"', '') + '-' + date[1] + '-' + date[2].split('T')[0];
  return date;
};
const pdDDMMYYHHMM = date => {
  date.setHours(date.getHours() - date.getTimezoneOffset() / 60);
  date = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(date).split('-');
  date = date[2].split('T')[0] + '.' + date[1] + '.' + date[0].replace('"', '').substring(2, 4) + ' ' + date[2].split('T')[1].split(':')[0] + ':' + date[2].split('T')[1].split(':')[1];
  return date;
};

/***/ }),

/***/ "Oyez":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "P3Wl":
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "RiyV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "RxNr":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Receipt");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "U/ye":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ERROR_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_PROFILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_AUTH; });
const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const ERROR_AUTHENTICATED = 'ERROR_AUTHENTICATED';
const SET_PROFILE = 'SET_PROFILE';
const SET_AUTH = 'SET_AUTH';

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "VMnw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "W/Kq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "XHc+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return favorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return onoffItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return favoriteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavoriteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return setItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _singleton_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gIpB");
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("gs4i");




const getItems = async ({
  subCategory,
  search,
  sort,
  filter
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    let res = await client.query({
      variables: {
        subCategory: subCategory,
        search: search,
        sort: sort,
        filter: filter
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($subCategory: ID!,$search: String!, $sort: String!, $filter: String!) {
                        items(subCategory: $subCategory, search: $search, sort: $sort, filter: $filter) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                        sortItem {
                            name
                            field
                        }
                        filterItem {
                           name
                           value
                        }
                        subCategory(_id: $subCategory) {
                           _id
                           name
                           category
                                {_id name}
                          }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getBrands = async ({
  organization,
  search,
  sort,
  filter
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    let res = await client.query({
      variables: {
        organization: organization,
        search: search,
        sort: sort,
        filter: filter
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($organization: ID!,$search: String!, $sort: String!) {
                        brands(organization: $organization, search: $search, sort: $sort) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name info image}
                            hit
                            latest
                            favorite
                            basket
                        }
                        sortItem {
                            name
                            field
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const favorites = async ({
  search
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    let res = await client.query({
      variables: {
        search: search
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($search: String!) {
                        favorites(search: $search) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name}
                            hit
                            latest
                            favorite
                            basket
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const getItem = async ({
  _id
}) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    let res = await client.query({
      variables: {
        _id: _id
      },
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    query ($_id: ID!) {
                        item(_id: $_id) {
                            _id
                            subCategory
                                {
                                    _id 
                                    name 
                                    category
                                        {_id name}
                                }
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name minimumOrder}
                            hit
                            latest
                            favorite
                            basket
                            deliveryDays
                        }
                    }`
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};
const deleteItem = async (ids, subCategory) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        deleteItem(_id: $_id) {
                             data
                        }
                    }`
    });
    return await getItems(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      subCategory: subCategory
    }, new _singleton_store__WEBPACK_IMPORTED_MODULE_3__[/* SingletonStore */ "a"]().getStore().getState().app));
  } catch (err) {
    console.error(err);
  }
};
const onoffItem = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        onoffItem(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const favoriteItem = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        favoriteItem(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const addFavoriteItem = async ids => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    await client.mutate({
      variables: {
        _id: ids
      },
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: [ID]!) {
                        addFavoriteItem(_id: $_id) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const addItem = async (element, subCategory) => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    await client.mutate({
      variables: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, element, {
        subCategory: subCategory
      }),
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($stock: Int!, $deliveryDays: [String], $name: String!, $image: Upload, $info: String!, $price: Int!, $subCategory: ID!, $organization: ID!, $hit: Boolean!, $latest: Boolean!) {
                        addItem(stock: $stock, deliveryDays: $deliveryDays, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};
const setItem = async element => {
  try {
    const client = new _singleton_client__WEBPACK_IMPORTED_MODULE_2__[/* SingletonApolloClient */ "a"]().getClient();
    await client.mutate({
      variables: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, element),
      mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"]`
                    mutation ($_id: ID!, $stock: Int, $deliveryDays: [String], $name: String, $image: Upload, $info: String, $price: Int, $subCategory: ID, $organization: ID, $hit: Boolean, $latest: Boolean) {
                        setItem(_id: $_id, stock: $stock, deliveryDays: $deliveryDays, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`
    });
  } catch (err) {
    console.error(err);
  }
};

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "YxmQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pngM");
/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j6IE");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("IbbU");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("Wh1t");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4jCe");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("gGTQ");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("lWoh");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("tBFs");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("zOcm");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("lj8g");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("o0q0");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















const Sign = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  let {
    0: loginEnter,
    1: setLoginEnter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: passEnter,
    1: setPassEnter
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: errorPass,
    1: setErrorPass
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let {
    0: errorPassRepeat,
    1: setErrorPassRepeat
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  let handlePassEnter = event => {
    setPassEnter(event.target.value);
  };

  let handleLoginEnter = event => {
    setLoginEnter(event.target.value);
  };

  let {
    0: loginReg,
    1: setLoginReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: passReg,
    1: setPassReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let {
    0: passRepeatReg,
    1: setPassRepeatReg
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  let handlePassReg = event => {
    setPassReg(event.target.value);

    if (event.target.value !== passRepeatReg) {
      setErrorPassRepeat(true);
    } else {
      setErrorPassRepeat(false);
    }

    if (event.target.value.length < 8) {
      setErrorPass(true);
    } else {
      setErrorPass(false);
    }
  };

  let handlePassRepeatReg = event => {
    setPassRepeatReg(event.target.value);

    if (event.target.value !== passReg) {
      setErrorPassRepeat(true);
    } else {
      setErrorPassRepeat(false);
    }
  };

  let handleLoginReg = event => {
    setLoginReg(event.target.value);
  };

  let {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('enter');
  let {
    0: hide,
    1: setHide
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('password');

  let handleHide = () => {
    setHide(!hide);
  };

  const {
    error
  } = props.user;
  const {
    isMobileApp
  } = props.app;
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    signin,
    signup
  } = props.userActions;
  const {
    classes
  } = props;
  const width = isMobileApp ? window.innerWidth - 144 : 500;
  return __jsx("div", {
    className: classes.main
  }, type === 'enter' ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    style: {
      width: width
    },
    id: "standard-search",
    label: "\u041B\u043E\u0433\u0438\u043D",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: loginEnter,
    onChange: handleLoginEnter
  }), __jsx("br", null), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(classes.margin, classes.textField)
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default.a, {
    htmlFor: "adornment-password"
  }, "\u041F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passEnter,
    onChange: handlePassEnter,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_13___default.a, {
      position: "end"
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default.a, null) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default.a, null)))
  })), __jsx("br", null), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, __jsx("div", null, __jsx("div", {
    style: {
      width: width
    },
    className: classes.message,
    onClick: () => {
      setType('reg');
    }
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx("div", {
    style: {
      width: width
    }
  }, "\u0415\u0441\u043B\u0438 \u0437\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C \u0442\u043E \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u0448\u0438\u043C\u0438 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438.")), __jsx("br", null), __jsx("div", null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      if (loginEnter.length > 0 && passEnter.length > 0) signin({
        login: loginEnter,
        password: passEnter
      });
    },
    className: classes.button
  }, "\u0412\u043E\u0439\u0442\u0438"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "standard-search",
    label: "\u041B\u043E\u0433\u0438\u043D",
    type: "login",
    className: classes.textField,
    margin: "normal",
    value: loginReg,
    onChange: handleLoginReg,
    style: {
      width: width
    }
  }), __jsx("br", null), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(classes.margin, classes.textField)
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default.a, {
    htmlFor: "adornment-password"
  }, "\u041F\u0440\u0438\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passReg,
    onChange: handlePassReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_13___default.a, {
      position: "end"
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default.a, null) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default.a, null)))
  })), __jsx("br", null), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_10___default.a, {
    style: {
      width: width
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_14___default()(classes.margin, classes.textField)
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_12___default.a, {
    htmlFor: "adornment-password"
  }, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C"), __jsx(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "adornment-password",
    type: hide ? 'password' : 'text',
    value: passRepeatReg,
    onChange: handlePassRepeatReg,
    endAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_13___default.a, {
      position: "end"
    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15___default.a, {
      "aria-label": "Toggle password visibility",
      onClick: handleHide
    }, hide ? __jsx(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_9___default.a, null) : __jsx(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_8___default.a, null)))
  })), __jsx("br", null), error ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message
  }, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C") : null, errorPass ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message
  }, "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F") : null, errorPassRepeat ? __jsx("div", {
    style: {
      width: width
    },
    className: classes.error_message
  }, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442") : null, __jsx("br", null), __jsx("div", null, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    onClick: () => {
      if (!errorPass && !errorPassRepeat) signup({
        login: loginReg,
        password: passReg
      });
    },
    className: classes.button
  }, "\u0417\u0430\u0440\u0435\u0433\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    user: state.user,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_4__, dispatch),
    userActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_user__WEBPACK_IMPORTED_MODULE_5__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"])(Sign)));

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aSjJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pagination_namespaceObject = {};
__webpack_require__.r(pagination_namespaceObject);
__webpack_require__.d(pagination_namespaceObject, "next", function() { return pagination_next; });
__webpack_require__.d(pagination_namespaceObject, "disable", function() { return pagination_disable; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "@material-ui/core/Toolbar"
var Toolbar_ = __webpack_require__("Ms0O");
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: external "@material-ui/icons/Menu"
var Menu_ = __webpack_require__("4D1s");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_);

// EXTERNAL MODULE: external "@material-ui/icons/LocalGroceryStore"
var LocalGroceryStore_ = __webpack_require__("3REV");
var LocalGroceryStore_default = /*#__PURE__*/__webpack_require__.n(LocalGroceryStore_);

// EXTERNAL MODULE: external "@material-ui/icons/Star"
var Star_ = __webpack_require__("IZOe");
var Star_default = /*#__PURE__*/__webpack_require__.n(Star_);

// EXTERNAL MODULE: external "@material-ui/icons/ExitToApp"
var ExitToApp_ = __webpack_require__("RiyV");
var ExitToApp_default = /*#__PURE__*/__webpack_require__.n(ExitToApp_);

// EXTERNAL MODULE: external "@material-ui/icons/AssignmentInd"
var AssignmentInd_ = __webpack_require__("w/MP");
var AssignmentInd_default = /*#__PURE__*/__webpack_require__.n(AssignmentInd_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./redux/actions/mini_dialog.js
var mini_dialog = __webpack_require__("pngM");

// EXTERNAL MODULE: ./redux/actions/user.js
var user = __webpack_require__("j6IE");

// EXTERNAL MODULE: ./redux/actions/app.js
var app = __webpack_require__("DzNn");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/styleMUI/appbar.js

/* harmony default export */ var appbar = (Object(styles_["makeStyles"])({
  appBar: {
    zIndex: 1201
  },
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  searchD: {
    position: 'fixed',
    top: 6,
    right: 6
  },
  searchM: {
    position: 'fixed',
    top: 0,
    right: 0,
    height: '56px',
    width: '100vw'
  },
  textField: {
    width: 'calc(100% - 20px)',
    margin: 10
  },
  searchField: {
    width: 'calc(100% - 20px)',
    margin: 10
  }
}));
// EXTERNAL MODULE: ./src/gql/basket.js
var gql_basket = __webpack_require__("GXDu");

// EXTERNAL MODULE: external "@material-ui/icons/ArrowUpward"
var ArrowUpward_ = __webpack_require__("Ek77");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowDownward"
var ArrowDownward_ = __webpack_require__("cnW9");
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/icons/Cancel"
var Cancel_ = __webpack_require__("dTjI");
var Cancel_default = /*#__PURE__*/__webpack_require__.n(Cancel_);

// EXTERNAL MODULE: external "@material-ui/core/Input"
var Input_ = __webpack_require__("tBFs");
var Input_default = /*#__PURE__*/__webpack_require__.n(Input_);

// EXTERNAL MODULE: external "@material-ui/core/InputAdornment"
var InputAdornment_ = __webpack_require__("lj8g");
var InputAdornment_default = /*#__PURE__*/__webpack_require__.n(InputAdornment_);

// EXTERNAL MODULE: external "@material-ui/icons/SearchRounded"
var SearchRounded_ = __webpack_require__("7xJj");
var SearchRounded_default = /*#__PURE__*/__webpack_require__.n(SearchRounded_);

// EXTERNAL MODULE: external "@material-ui/icons/SortRounded"
var SortRounded_ = __webpack_require__("cmJa");
var SortRounded_default = /*#__PURE__*/__webpack_require__.n(SortRounded_);

// EXTERNAL MODULE: external "@material-ui/icons/FilterListRounded"
var FilterListRounded_ = __webpack_require__("u/0/");
var FilterListRounded_default = /*#__PURE__*/__webpack_require__.n(FilterListRounded_);

// EXTERNAL MODULE: external "@material-ui/icons/DateRange"
var DateRange_ = __webpack_require__("84Rl");
var DateRange_default = /*#__PURE__*/__webpack_require__.n(DateRange_);

// EXTERNAL MODULE: external "@material-ui/icons/PermIdentity"
var PermIdentity_ = __webpack_require__("kDBC");
var PermIdentity_default = /*#__PURE__*/__webpack_require__.n(PermIdentity_);

// EXTERNAL MODULE: external "@material-ui/core/MenuItem"
var MenuItem_ = __webpack_require__("x54t");
var MenuItem_default = /*#__PURE__*/__webpack_require__.n(MenuItem_);

// EXTERNAL MODULE: external "@material-ui/core/Menu"
var core_Menu_ = __webpack_require__("GYHf");
var core_Menu_default = /*#__PURE__*/__webpack_require__.n(core_Menu_);

// EXTERNAL MODULE: external "@material-ui/core/Badge"
var Badge_ = __webpack_require__("IfcR");
var Badge_default = /*#__PURE__*/__webpack_require__.n(Badge_);

// EXTERNAL MODULE: ./components/dialog/Sign.js
var Sign = __webpack_require__("YxmQ");

// EXTERNAL MODULE: ./components/dialog/Confirmation.js
var Confirmation = __webpack_require__("y4xb");

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: ./src/styleMUI/dialogContent.js
var dialogContent = __webpack_require__("o0q0");

// EXTERNAL MODULE: ./src/lib.js
var lib = __webpack_require__("NOnC");

// CONCATENATED MODULE: ./components/dialog/SetDate.js
var __jsx = external_react_default.a.createElement;










const SetDate = external_react_default.a.memo(props => {
  const {
    classes
  } = props;
  let {
    0: dateChange,
    1: setDateChange
  } = Object(external_react_["useState"])(Object(lib["h" /* pdDatePicker */])(new Date()));
  const {
    isMobileApp
  } = props.app;
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    setDate
  } = props.appActions;
  const width = isMobileApp ? window.innerWidth - 144 : 500;
  return __jsx("div", {
    className: classes.main
  }, __jsx(TextField_default.a, {
    style: {
      width: width
    },
    className: classes.textField,
    label: "\u0414\u0430\u0442\u0430",
    type: "date",
    InputLabelProps: {
      shrink: true
    },
    value: dateChange,
    inputProps: {
      'aria-label': 'description'
    },
    onChange: event => setDateChange(event.target.value)
  }), __jsx("br", null), __jsx("div", null, __jsx(Button_default.a, {
    variant: "contained",
    color: "primary",
    onClick: async () => {
      await setDate(new Date(dateChange));
      showMiniDialog(false);
    },
    className: classes.button
  }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"), __jsx(Button_default.a, {
    variant: "contained",
    color: "secondary",
    onClick: () => {
      showMiniDialog(false);
    },
    className: classes.button
  }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog,
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(external_redux_["bindActionCreators"])(mini_dialog, dispatch),
    appActions: Object(external_redux_["bindActionCreators"])(app, dispatch)
  };
}

/* harmony default export */ var dialog_SetDate = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(Object(styles_["withStyles"])(dialogContent["a" /* default */])(SetDate)));
// CONCATENATED MODULE: ./components/app/AppBar.js
var AppBar_jsx = external_react_default.a.createElement;




































const MyAppBar = external_react_default.a.memo(props => {
  //props
  const classes = appbar();
  const {
    filters,
    sorts,
    pageName,
    dates
  } = props;
  const {
    drawer,
    search,
    filter,
    sort,
    isMobileApp,
    countBasket,
    date
  } = props.app;
  const {
    showDrawer,
    setSearch,
    setFilter,
    setSort,
    setDate
  } = props.appActions;
  const {
    authenticated,
    profile
  } = props.user;
  const {
    setMiniDialog,
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    logout
  } = props.userActions; //state

  const [anchorElMobileMenu, setAnchorElMobileMenu] = external_react_default.a.useState(null);
  const openMobileMenu = Boolean(anchorElMobileMenu);

  let handleMobileMenu = event => {
    setAnchorElMobileMenu(event.currentTarget);
  };

  let handleCloseMobileMenu = () => {
    setAnchorElMobileMenu(null);
  };

  const {
    0: anchorElSort,
    1: setAnchorElSort
  } = Object(external_react_["useState"])(null);
  const openSort = Boolean(anchorElSort);

  let handleMenuSort = event => {
    setAnchorElSort(event.currentTarget);
  };

  let handleCloseSort = () => {
    setAnchorElSort(null);
  };

  const {
    0: anchorElProfile,
    1: setAnchorElProfile
  } = Object(external_react_["useState"])(null);
  const openProfile = Boolean(anchorElProfile);

  let handleMenuProfile = event => {
    setAnchorElProfile(event.currentTarget);
  };

  let handleCloseProfile = () => {
    setAnchorElProfile(null);
  };

  const {
    0: anchorElFilter,
    1: setAnchorElFilter
  } = Object(external_react_["useState"])(null);
  const openFilter = Boolean(anchorElFilter);

  let handleMenuFilter = event => {
    setAnchorElFilter(event.currentTarget);
  };

  let handleCloseFilter = () => {
    setAnchorElFilter(null);
  };

  const {
    0: anchorElDate,
    1: setAnchorElDate
  } = Object(external_react_["useState"])(null);
  const openDate = Boolean(anchorElDate);

  let handleMenuDate = event => {
    setAnchorElDate(event.currentTarget);
  };

  let handleCloseDate = () => {
    setAnchorElDate(null);
  };

  const {
    0: openSearch,
    1: setOpenSearch
  } = Object(external_react_["useState"])(false);

  let handleSearch = event => {
    setSearch(event.target.value);
  };

  Object(external_react_["useEffect"])(() => {
    (async () => {
      Object(gql_basket["d" /* getCountBasket */])();
    })();
  }, []);
  return AppBar_jsx("div", {
    className: classes.root
  }, AppBar_jsx(AppBar_default.a, {
    position: "fixed",
    className: "appBar"
  }, AppBar_jsx(Toolbar_default.a, null, AppBar_jsx(IconButton_default.a, {
    edge: "start",
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    onClick: () => {
      showDrawer(!drawer);
    },
    color: "inherit"
  }, AppBar_jsx(Menu_default.a, null)), AppBar_jsx(Typography_default.a, {
    variant: "h6",
    className: classes.title
  }, pageName), isMobileApp ? openSearch ? AppBar_jsx(Paper_default.a, {
    className: classes.searchM
  }, AppBar_jsx(Input_default.a, {
    className: classes.searchField,
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: AppBar_jsx(InputAdornment_default.a, {
      position: "end"
    }, AppBar_jsx(IconButton_default.a, {
      "aria-label": "Search",
      onClick: () => {
        setSearch('');
        setOpenSearch(false);
      }
    }, AppBar_jsx(Cancel_default.a, null)))
  })) : AppBar_jsx(external_react_default.a.Fragment, null, AppBar_jsx(IconButton_default.a, {
    "aria-owns": openMobileMenu ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMobileMenu,
    color: "inherit"
  }, AppBar_jsx(SearchRounded_default.a, null)), AppBar_jsx(core_Menu_default.a, {
    id: "menu-appbar",
    anchorEl: anchorElMobileMenu,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    open: openMobileMenu,
    onClose: handleCloseMobileMenu
  }, AppBar_jsx(MenuItem_default.a, {
    onClick: () => {
      setOpenSearch(true);
      handleCloseMobileMenu();
    }
  }, AppBar_jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(SearchRounded_default.a, null), "\xA0\u041F\u043E\u0438\u0441\u043A")), filters && filters.length > 0 ? [AppBar_jsx(MenuItem_default.a, {
    onClick: handleMenuFilter
  }, AppBar_jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(FilterListRounded_default.a, null), "\xA0\u0424\u0438\u043B\u044C\u0442\u0440")), AppBar_jsx(core_Menu_default.a, {
    key: "filter",
    id: "menu-appbar",
    anchorEl: anchorElFilter,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openFilter,
    onClose: handleCloseFilter
  }, filters.map((elem, idx) => AppBar_jsx(MenuItem_default.a, {
    key: 'filter' + idx,
    style: {
      background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setFilter(elem.value);
      handleCloseFilter();
    }
  }, elem.name)))] : null, dates ? [AppBar_jsx(MenuItem_default.a, {
    onClick: handleMenuDate
  }, AppBar_jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(DateRange_default.a, null), "\xA0\u0414\u0430\u0442\u0430")), AppBar_jsx(core_Menu_default.a, {
    key: "Date",
    id: "menu-appbar",
    anchorEl: anchorElDate,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openDate,
    onClose: handleCloseDate
  }, AppBar_jsx(MenuItem_default.a, {
    style: {
      background: date !== '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setMiniDialog('Дата', AppBar_jsx(dialog_SetDate, null));
      showMiniDialog(true);
      handleCloseDate();
      handleCloseMobileMenu();
    }
  }, "\u041F\u043E \u0434\u0430\u0442\u0435"), AppBar_jsx(MenuItem_default.a, {
    style: {
      background: date === '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setDate('');
      handleCloseDate();
    }
  }, "\u0412\u0441\u0435"))] : null, sorts && sorts.length > 0 ? [AppBar_jsx(MenuItem_default.a, {
    onClick: handleMenuSort
  }, AppBar_jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(SortRounded_default.a, null), "\xA0\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430")), AppBar_jsx(core_Menu_default.a, {
    key: "sort",
    id: "menu-appbar",
    anchorEl: anchorElSort,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'left'
    },
    open: openSort,
    onClose: handleCloseSort
  }, sorts.map((elem, idx) => AppBar_jsx(MenuItem_default.a, {
    key: 'sort' + idx,
    onClick: () => {
      sort === `-${elem.field}` ? setSort(elem.field) : setSort(`-${elem.field}`);
      /*handleCloseSort();handleCloseMobileMenu()*/
    }
  }, sort === `-${elem.field}` ? AppBar_jsx(ArrowDownward_default.a, null) : sort === elem.field ? AppBar_jsx(ArrowUpward_default.a, null) : AppBar_jsx("div", {
    style: {
      width: '24px'
    }
  }), elem.name)))] : null), AppBar_jsx(Tooltip_default.a, {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
  }, AppBar_jsx(IconButton_default.a, {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile
  }, AppBar_jsx(Badge_default.a, {
    badgeContent: countBasket,
    color: "secondary"
  }, AppBar_jsx(PermIdentity_default.a, null)))), AppBar_jsx(core_Menu_default.a, {
    id: "menu-appbar",
    anchorEl: anchorElProfile,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openProfile,
    onClose: handleCloseProfile
  }, !authenticated || profile.role === 'client' ? [AppBar_jsx(MenuItem_default.a, null, AppBar_jsx(Badge_default.a, {
    badgeContent: countBasket,
    color: "secondary"
  }, AppBar_jsx(link_default.a, {
    href: "/basket"
  }, AppBar_jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(LocalGroceryStore_default.a, null), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))), AppBar_jsx(MenuItem_default.a, null, AppBar_jsx(link_default.a, {
    href: "/favorite"
  }, AppBar_jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(Star_default.a, null), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")))] : null, authenticated && profile.role !== 'admin' ? AppBar_jsx(MenuItem_default.a, null, AppBar_jsx(link_default.a, {
    href: `/${profile.role === 'client' ? 'client' : 'employment'}/[id]`,
    as: `/${profile.role === 'client' ? 'client' : 'employment'}/${profile._id}`
  }, AppBar_jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(AssignmentInd_default.a, null), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? AppBar_jsx(MenuItem_default.a, {
    onClick: () => {
      handleCloseProfile();

      const action = async () => {
        logout(true);
      };

      setMiniDialog('Вы уверенны?', AppBar_jsx(Confirmation["a" /* default */], {
        action: action
      }));
      showMiniDialog(true);
    }
  }, AppBar_jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(ExitToApp_default.a, null), "\xA0\u0412\u044B\u0439\u0442\u0438")) : AppBar_jsx(MenuItem_default.a, {
    onClick: () => {
      handleCloseProfile();
      setMiniDialog('Вход', AppBar_jsx(Sign["a" /* default */], {
        isMobileApp: isMobileApp
      }));
      showMiniDialog(true);
    }
  }, AppBar_jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(ExitToApp_default.a, null), "\xA0\u0412\u043E\u0439\u0442\u0438")))) : openSearch ? AppBar_jsx(Paper_default.a, {
    className: classes.searchD
  }, AppBar_jsx(Input_default.a, {
    className: classes.searchField,
    id: "adornment-password",
    type: 'login',
    value: search,
    onChange: handleSearch,
    endAdornment: AppBar_jsx(InputAdornment_default.a, {
      position: "end"
    }, AppBar_jsx(IconButton_default.a, {
      "aria-label": "Search",
      onClick: () => {
        setSearch('');
        setOpenSearch(false);
      }
    }, AppBar_jsx(Cancel_default.a, null)))
  })) : AppBar_jsx(external_react_default.a.Fragment, null, dates ? AppBar_jsx(external_react_default.a.Fragment, null, AppBar_jsx(Tooltip_default.a, {
    title: "\u0414\u0430\u0442\u0430"
  }, AppBar_jsx(IconButton_default.a, {
    "aria-owns": openDate ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuDate,
    color: "inherit"
  }, AppBar_jsx(DateRange_default.a, null))), AppBar_jsx(core_Menu_default.a, {
    key: "Date",
    id: "menu-appbar",
    anchorEl: anchorElDate,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openDate,
    onClose: handleCloseDate
  }, AppBar_jsx(MenuItem_default.a, {
    style: {
      background: date !== '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setMiniDialog('Дата', AppBar_jsx(dialog_SetDate, null));
      showMiniDialog(true);
      handleCloseDate();
    }
  }, "\u041F\u043E \u0434\u0430\u0442\u0435"), AppBar_jsx(MenuItem_default.a, {
    style: {
      background: date === '' ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setDate('');
      handleCloseDate();
    }
  }, "\u0412\u0441\u0435")), "\xA0") : null, filters && filters.length > 0 ? AppBar_jsx(external_react_default.a.Fragment, null, AppBar_jsx(Tooltip_default.a, {
    title: "\u0424\u0438\u043B\u044C\u0442\u0440"
  }, AppBar_jsx(IconButton_default.a, {
    "aria-owns": openFilter ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuFilter,
    color: "inherit"
  }, AppBar_jsx(FilterListRounded_default.a, null))), AppBar_jsx(core_Menu_default.a, {
    id: "menu-appbar",
    key: "filter",
    anchorEl: anchorElFilter,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openFilter,
    onClose: handleCloseFilter
  }, filters.map((elem, idx) => AppBar_jsx(MenuItem_default.a, {
    key: 'filter' + idx,
    style: {
      background: filter === elem.value ? 'rgba(51, 143, 255, 0.29)' : '#fff'
    },
    onClick: () => {
      setFilter(elem.value);
      handleCloseFilter();
    }
  }, elem.name))), "\xA0") : null, sorts && sorts.length > 0 ? AppBar_jsx(external_react_default.a.Fragment, null, AppBar_jsx(Tooltip_default.a, {
    title: "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430"
  }, AppBar_jsx(IconButton_default.a, {
    "aria-owns": openSort ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: handleMenuSort,
    color: "inherit"
  }, AppBar_jsx(SortRounded_default.a, null))), AppBar_jsx(core_Menu_default.a, {
    id: "menu-appbar",
    anchorEl: anchorElSort,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openSort,
    onClose: handleCloseSort,
    key: "sort"
  }, sorts.map((elem, idx) => AppBar_jsx(MenuItem_default.a, {
    key: 'sort' + idx,
    onClick: () => {
      sort === `-${elem.field}` ? setSort(elem.field) : setSort(`-${elem.field}`);
      handleCloseSort();
    }
  }, sort === `-${elem.field}` ? AppBar_jsx(ArrowDownward_default.a, null) : sort === elem.field ? AppBar_jsx(ArrowUpward_default.a, null) : AppBar_jsx("div", {
    style: {
      width: '24px'
    }
  }), elem.name))), "\xA0") : null, AppBar_jsx(Tooltip_default.a, {
    title: "\u041F\u043E\u0438\u0441\u043A"
  }, AppBar_jsx(IconButton_default.a, {
    "aria-owns": openSearch ? 'menu-appbar' : undefined,
    "aria-haspopup": "true",
    onClick: () => {
      setOpenSearch(true);
    },
    color: "inherit"
  }, AppBar_jsx(SearchRounded_default.a, null))), AppBar_jsx(Tooltip_default.a, {
    title: "\u041F\u0440\u043E\u0444\u0438\u043B\u044C"
  }, AppBar_jsx(IconButton_default.a, {
    "aria-owns": "menu-appbar",
    "aria-haspopup": "true",
    color: "inherit",
    onClick: handleMenuProfile
  }, AppBar_jsx(Badge_default.a, {
    badgeContent: countBasket,
    color: "secondary"
  }, AppBar_jsx(PermIdentity_default.a, null)))), AppBar_jsx(core_Menu_default.a, {
    id: "menu-appbar",
    anchorEl: anchorElProfile,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: openProfile,
    onClose: handleCloseProfile
  }, !authenticated || profile.role === 'client' ? [AppBar_jsx(MenuItem_default.a, null, AppBar_jsx(Badge_default.a, {
    badgeContent: countBasket,
    color: "secondary"
  }, AppBar_jsx(link_default.a, {
    href: "/basket"
  }, AppBar_jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(LocalGroceryStore_default.a, null), "\xA0\u041A\u043E\u0440\u0437\u0438\u043D\u0430\xA0\xA0")))), AppBar_jsx(MenuItem_default.a, null, AppBar_jsx(link_default.a, {
    href: "/favorite"
  }, AppBar_jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(Star_default.a, null), "\xA0\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435")))] : null, authenticated && profile.role !== 'admin' ? AppBar_jsx(MenuItem_default.a, null, AppBar_jsx(link_default.a, {
    href: `/${profile.role === 'client' ? 'client' : 'employment'}/[id]`,
    as: `/${profile.role === 'client' ? 'client' : 'employment'}/${profile._id}`
  }, AppBar_jsx("a", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(AssignmentInd_default.a, null), "\xA0\u041F\u0440\u043E\u0444\u0438\u043B\u044C"))) : null, authenticated ? AppBar_jsx(MenuItem_default.a, {
    onClick: () => {
      handleCloseProfile();

      const action = async () => {
        logout(true);
      };

      setMiniDialog('Вы уверенны?', AppBar_jsx(Confirmation["a" /* default */], {
        action: action
      }));
      showMiniDialog(true);
    }
  }, AppBar_jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(ExitToApp_default.a, null), "\xA0\u0412\u044B\u0439\u0442\u0438")) : AppBar_jsx(MenuItem_default.a, {
    onClick: () => {
      handleCloseProfile();
      setMiniDialog('Вход', AppBar_jsx(Sign["a" /* default */], {
        isMobileApp: isMobileApp
      }));
      showMiniDialog(true);
    }
  }, AppBar_jsx("div", {
    style: {
      display: 'flex',
      color: '#606060'
    }
  }, AppBar_jsx(ExitToApp_default.a, null), "\xA0\u0412\u043E\u0439\u0442\u0438")))))));
});

function AppBar_mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

function AppBar_mapDispatchToProps(dispatch) {
  return {
    appActions: Object(external_redux_["bindActionCreators"])(app, dispatch),
    userActions: Object(external_redux_["bindActionCreators"])(user, dispatch),
    mini_dialogActions: Object(external_redux_["bindActionCreators"])(mini_dialog, dispatch)
  };
}

/* harmony default export */ var AppBar = (Object(external_react_redux_["connect"])(AppBar_mapStateToProps, AppBar_mapDispatchToProps)(MyAppBar));
// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// CONCATENATED MODULE: ./components/app/Dialog.js
var Dialog_jsx = external_react_default.a.createElement;







const MyDialog = external_react_default.a.memo(props => {
  const {
    title,
    child,
    show,
    fullScreen
  } = props.mini_dialog;
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  return Dialog_jsx(Dialog_default.a, {
    fullScreen: fullScreen,
    open: show,
    onClose: () => {
      showMiniDialog(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description"
  }, Dialog_jsx(DialogTitle_default.a, {
    onClose: () => {
      showMiniDialog(false);
    }
  }, title), Dialog_jsx(DialogContent_default.a, null, child));
});

function Dialog_mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog
  };
}

function Dialog_mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(external_redux_["bindActionCreators"])(mini_dialog, dispatch)
  };
}

/* harmony default export */ var Dialog = (Object(external_react_redux_["connect"])(Dialog_mapStateToProps, Dialog_mapDispatchToProps)(MyDialog));
// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: ./redux/actions/snackbar.js
var snackbar = __webpack_require__("//vS");

// CONCATENATED MODULE: ./components/app/SnackBar.js
var SnackBar_jsx = external_react_default.a.createElement;






const SnackBar_MyDialog = external_react_default.a.memo(props => {
  const {
    title,
    show
  } = props.snackbar;
  const {
    closeSnackBar
  } = props.snackbarActions;
  return SnackBar_jsx(Snackbar_default.a, {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    },
    open: show,
    autoHideDuration: 6000,
    onClose: closeSnackBar,
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    message: SnackBar_jsx("span", {
      id: "message-id"
    }, title),
    action: [SnackBar_jsx(Button_default.a, {
      key: "undo",
      color: "secondary",
      size: "small",
      onClick: closeSnackBar
    }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C")]
  });
});

function SnackBar_mapStateToProps(state) {
  return {
    snackbar: state.snackbar
  };
}

function SnackBar_mapDispatchToProps(dispatch) {
  return {
    snackbarActions: Object(external_redux_["bindActionCreators"])(snackbar, dispatch)
  };
}

/* harmony default export */ var SnackBar = (Object(external_react_redux_["connect"])(SnackBar_mapStateToProps, SnackBar_mapDispatchToProps)(SnackBar_MyDialog));
// CONCATENATED MODULE: ./src/styleMUI/drawer.js
/* harmony default export */ var styleMUI_drawer = (theme => ({
  drawer: {
    width: 300,
    flexShrink: 0
  },
  drawerPaper: {
    width: 300
  },
  toolbar: theme.mixins.toolbar
}));
// EXTERNAL MODULE: external "@material-ui/core/SwipeableDrawer"
var SwipeableDrawer_ = __webpack_require__("pN9Q");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/icons/ViewList"
var ViewList_ = __webpack_require__("dvW6");
var ViewList_default = /*#__PURE__*/__webpack_require__.n(ViewList_);

// EXTERNAL MODULE: external "@material-ui/icons/Whatshot"
var Whatshot_ = __webpack_require__("KkvU");
var Whatshot_default = /*#__PURE__*/__webpack_require__.n(Whatshot_);

// EXTERNAL MODULE: external "@material-ui/icons/Loyalty"
var Loyalty_ = __webpack_require__("Etkh");
var Loyalty_default = /*#__PURE__*/__webpack_require__.n(Loyalty_);

// EXTERNAL MODULE: external "@material-ui/icons/Info"
var Info_ = __webpack_require__("/Wk0");
var Info_default = /*#__PURE__*/__webpack_require__.n(Info_);

// EXTERNAL MODULE: external "@material-ui/icons/Group"
var Group_ = __webpack_require__("2BDn");
var Group_default = /*#__PURE__*/__webpack_require__.n(Group_);

// EXTERNAL MODULE: external "@material-ui/icons/Receipt"
var Receipt_ = __webpack_require__("RxNr");
var Receipt_default = /*#__PURE__*/__webpack_require__.n(Receipt_);

// EXTERNAL MODULE: external "@material-ui/icons/LocationCity"
var LocationCity_ = __webpack_require__("AHpn");
var LocationCity_default = /*#__PURE__*/__webpack_require__.n(LocationCity_);

// EXTERNAL MODULE: external "@material-ui/icons/ArtTrack"
var ArtTrack_ = __webpack_require__("4CLJ");
var ArtTrack_default = /*#__PURE__*/__webpack_require__.n(ArtTrack_);

// EXTERNAL MODULE: external "@material-ui/icons/Money"
var Money_ = __webpack_require__("x0VR");
var Money_default = /*#__PURE__*/__webpack_require__.n(Money_);

// EXTERNAL MODULE: external "@material-ui/icons/FormatListNumbered"
var FormatListNumbered_ = __webpack_require__("5ZB+");
var FormatListNumbered_default = /*#__PURE__*/__webpack_require__.n(FormatListNumbered_);

// EXTERNAL MODULE: external "@material-ui/icons/UnfoldMore"
var UnfoldMore_ = __webpack_require__("ixB0");
var UnfoldMore_default = /*#__PURE__*/__webpack_require__.n(UnfoldMore_);

// EXTERNAL MODULE: external "@material-ui/icons/UnfoldLess"
var UnfoldLess_ = __webpack_require__("F9xJ");
var UnfoldLess_default = /*#__PURE__*/__webpack_require__.n(UnfoldLess_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/app/Drawer.js
var Drawer_jsx = external_react_default.a.createElement;




























const MyDrawer = external_react_default.a.memo(props => {
  const {
    classes,
    category,
    subcategory
  } = props;
  const {
    drawer,
    isMobileApp
  } = props.app;
  const {
    profile,
    authenticated
  } = props.user;
  const {
    showDrawer
  } = props.appActions;
  let variant = isMobileApp ? 'temporary' : 'permanent';
  const open = isMobileApp ? drawer : true;
  const router = Object(router_["useRouter"])();
  const {
    0: uncoverBonus,
    1: setUncoverBonus
  } = Object(external_react_["useState"])(null);
  return Drawer_jsx(SwipeableDrawer_default.a, {
    disableDiscovery: true,
    variant: variant,
    className: classes.drawer,
    open: open,
    onClose: () => showDrawer(false),
    classes: {
      paper: classes.drawerPaper
    }
  }, isMobileApp ? null : Drawer_jsx("div", {
    className: classes.toolbar
  }), Drawer_jsx(Divider_default.a, null), Drawer_jsx(List_default.a, null, ['экспедитор', 'организация', 'менеджер'].includes(profile.role) ? Drawer_jsx(link_default.a, {
    href: "/items/[id]",
    as: "/items/all"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(ViewList_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B"
  }))) : Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: "/"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname === '/' || router.pathname.includes('subcategory') || router.pathname.includes('item') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(ViewList_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u0422\u043E\u0432\u0430\u0440\u044B"
  }))), category ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(Divider_default.a, null), Drawer_jsx(link_default.a, {
    href: "/subcategory/[id]",
    as: `/subcategory/${category._id}`
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      marginLeft: 16,
      background: '#f5f5f5'
    },
    button: true
  }, Drawer_jsx(ListItemText_default.a, {
    primary: category.name
  }))), subcategory ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(Divider_default.a, null), Drawer_jsx(link_default.a, {
    href: "/items/[id]",
    as: `/items/${subcategory._id}`
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      marginLeft: 32,
      background: '#f5f5f5'
    },
    button: true
  }, Drawer_jsx(ListItemText_default.a, {
    primary: subcategory.name
  })))) : null) : null), Drawer_jsx(Divider_default.a, null), ['admin', 'client', 'организация', 'менеджер'].includes(profile.role) || !authenticated ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname.includes('bonus') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(!uncoverBonus);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(Money_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u0411\u043E\u043D\u0443\u0441\u044B"
  }), Drawer_jsx(ListItemIcon_default.a, null, uncoverBonus ? Drawer_jsx(UnfoldMore_default.a, {
    color: "inherit"
  }) : Drawer_jsx(UnfoldLess_default.a, {
    color: "inherit"
  }))), Drawer_jsx(Divider_default.a, null), uncoverBonus ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: "/bonus"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      marginLeft: 16,
      background: router.pathname === '/bonus' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(!uncoverBonus);
    }
  }, Drawer_jsx(ListItemText_default.a, {
    primary: ['организация', 'менеджер'].includes(profile.role) ? 'Бонусы компании' : 'Бонусы компаний'
  }))), Drawer_jsx(Divider_default.a, null), ['admin', 'client', 'организация', 'менеджер'].includes(profile.role) ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: "/bonusclient"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      marginLeft: 16,
      background: router.pathname === '/bonusclient' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      setUncoverBonus(!uncoverBonus);
    }
  }, Drawer_jsx(ListItemText_default.a, {
    primary: ['admin', 'организация', 'менеджер'].includes(profile.role) ? 'Бонусы клиентов' : 'Мои бонусы'
  }))), Drawer_jsx(Divider_default.a, null)) : null) : null) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: "/ads"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname === '/ads' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(Whatshot_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u0410\u043A\u0446\u0438\u0438"
  }))), Drawer_jsx(Divider_default.a, null)) : null, ['admin', 'организация', 'менеджер'].includes(profile.role) ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: '/clients'
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname.includes('client') && router.pathname !== '/bonusclient' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(Group_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u041A\u043B\u0438\u0435\u043D\u0442\u044B"
  }))), Drawer_jsx(Divider_default.a, null)) : null, ['client', 'admin', 'организация', 'менеджер'].includes(profile.role) ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: "/orders"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname === '/orders' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(Receipt_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u0417\u0430\u043A\u0430\u0437\u044B"
  }))), Drawer_jsx(Divider_default.a, null)) : null, ['admin', 'организация', 'менеджер', 'экспедитор'].includes(profile.role) ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: "/routes"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname === '/routes' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(FormatListNumbered_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u043D\u044B\u0435 \u043B\u0438\u0441\u0442\u044B"
  }))), Drawer_jsx(Divider_default.a, null)) : null, ['экспедитор', 'организация', 'менеджер'].includes(profile.role) ? Drawer_jsx(link_default.a, {
    href: "/organization/[id]",
    as: `/organization/${profile.organization}`
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(LocationCity_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F"
  }))) : Drawer_jsx(link_default.a, {
    href: "/organizations"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname.includes('organization') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(LocationCity_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438"
  }))), Drawer_jsx(Divider_default.a, null), ['admin', 'client'].includes(profile.role) || !authenticated ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: "/brands"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname.includes('brand') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(Loyalty_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u0411\u0440\u0435\u043D\u0434\u044B"
  }))), Drawer_jsx(Divider_default.a, null)) : null, ['admin', 'организация'].includes(profile.role) ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: '/employments'
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname.includes('employment') ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(Group_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438"
  }))), Drawer_jsx(Divider_default.a, null)) : null, ['admin', 'client'].includes(profile.role) || !authenticated ? Drawer_jsx(external_react_default.a.Fragment, null, Drawer_jsx(link_default.a, {
    href: "/blog"
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname === '/blog' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(ArtTrack_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u0411\u043B\u043E\u0433"
  }))), Drawer_jsx(Divider_default.a, null)) : null, Drawer_jsx(link_default.a, {
    href: '/contact'
  }, Drawer_jsx(ListItem_default.a, {
    style: {
      background: router.pathname === '/contact' ? '#f5f5f5' : '#ffffff'
    },
    button: true,
    onClick: () => {
      showDrawer(false);
    }
  }, Drawer_jsx(ListItemIcon_default.a, null, Drawer_jsx(Info_default.a, {
    color: "inherit"
  })), Drawer_jsx(ListItemText_default.a, {
    primary: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
  }))), Drawer_jsx(Divider_default.a, null)));
});

function Drawer_mapStateToProps(state) {
  return {
    app: state.app,
    user: state.user
  };
}

function Drawer_mapDispatchToProps(dispatch) {
  return {
    appActions: Object(external_redux_["bindActionCreators"])(app, dispatch),
    userActions: Object(external_redux_["bindActionCreators"])(user, dispatch),
    mini_dialogActions: Object(external_redux_["bindActionCreators"])(mini_dialog, dispatch)
  };
}

/* harmony default export */ var Drawer = (Object(external_react_redux_["connect"])(Drawer_mapStateToProps, Drawer_mapDispatchToProps)(Object(styles_["withStyles"])(styleMUI_drawer)(MyDrawer)));
// EXTERNAL MODULE: ./src/gql/items.js
var items = __webpack_require__("XHc+");

// EXTERNAL MODULE: ./redux/constants/pagination.js
var pagination = __webpack_require__("im5F");

// CONCATENATED MODULE: ./redux/actions/pagination.js

function pagination_next(data) {
  return {
    type: pagination["b" /* NEXT */]
  };
}
function pagination_disable(data) {
  return {
    type: pagination["a" /* DISABLE */]
  };
}
// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__("1imS");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: ./scss/app.scss
var scss_app = __webpack_require__("gRZq");

// EXTERNAL MODULE: external "react-bottom-scroll-listener"
var external_react_bottom_scroll_listener_ = __webpack_require__("w0le");

// CONCATENATED MODULE: ./layouts/App.js
/* unused harmony export mainWindow */

var App_jsx = external_react_default.a.createElement;

















const mainWindow = external_react_default.a.createRef();
const App = external_react_default.a.memo(props => {
  const {
    setProfile,
    logout
  } = props.userActions;
  const {
    next,
    disable
  } = props.paginationActions;
  const {
    showLoad
  } = props.appActions;
  const {
    profile,
    authenticated
  } = props.user;
  const {
    work,
    count
  } = props.pagination;
  let {
    sorts,
    filters,
    getList,
    pageName,
    dates,
    subcategory,
    category
  } = props;
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (authenticated) setProfile();else if (!authenticated && profile.role) logout(false);
  }, [authenticated]);
  router_default.a.events.on('routeChangeStart', (err, url) => {
    if (!router.pathname.includes(url)) showLoad(true);

    if (err.cancelled) {
      showLoad(false);
    }
  });
  const containerRef = Object(external_react_bottom_scroll_listener_["useBottomScrollListener"])(() => {
    if (work) next();
  });
  Object(external_react_["useEffect"])(() => {
    (async () => {
      if (authenticated && profile.role === 'client') {
        if (localStorage.favorites && localStorage.favorites !== '[]') {
          let favorites = JSON.parse(localStorage.favorites);
          favorites = favorites.map(element => element._id);
          await Object(items["a" /* addFavoriteItem */])(favorites);
          localStorage.favorites = stringify_default()([]);
          if (getList !== undefined) await getList();
        }

        if (localStorage.basket && localStorage.basket !== '[]') {
          let basket = JSON.parse(localStorage.basket);

          for (let i = 0; i < basket.length; i++) {
            await Object(gql_basket["a" /* addBasket */])({
              item: basket[i].item._id,
              count: basket[i].count
            });
          }

          localStorage.basket = '[]';
          if (getList !== undefined) await getList();
        }
      }
    })();
  }, []);
  const {
    load
  } = props.app;
  return App_jsx("div", {
    ref: mainWindow,
    className: "App"
  }, App_jsx(Drawer, {
    subcategory: subcategory,
    category: category
  }), App_jsx(AppBar, {
    dates: dates,
    pageName: pageName,
    sorts: sorts,
    filters: filters
  }), App_jsx("div", {
    ref: containerRef,
    className: "App-body"
  }, props.children), App_jsx(Dialog, null), App_jsx(SnackBar, null), load ? App_jsx("div", {
    className: "load"
  }, App_jsx(CircularProgress_default.a, null)) : null);
});

function App_mapStateToProps(state) {
  return {
    user: state.user,
    app: state.app,
    pagination: state.pagination
  };
}

function App_mapDispatchToProps(dispatch) {
  return {
    userActions: Object(external_redux_["bindActionCreators"])(user, dispatch),
    appActions: Object(external_redux_["bindActionCreators"])(app, dispatch),
    paginationActions: Object(external_redux_["bindActionCreators"])(pagination_namespaceObject, dispatch)
  };
}

/* harmony default export */ var layouts_App = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(App_mapStateToProps, App_mapDispatchToProps)(App));

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cmJa":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SortRounded");

/***/ }),

/***/ "cnW9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dTjI":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Cancel");

/***/ }),

/***/ "dvW6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ViewList");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fflE":
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gGTQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "gIpB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingletonApolloClient; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zrwo");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9a0h");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Oyez");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("oz4i");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4vsW");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NOnC");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("LvlT");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("P3Wl");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("vuC2");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("BPlj");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("fflE");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("gs4i");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("//vS");


/* eslint-disable no-extra-boolean-cast */








 //import { WebSocketLink } from 'apollo-link-ws';

 //import * as ws from 'ws';



class SingletonApolloClient {
  constructor(req) {
    if (!!SingletonApolloClient.instance) {
      return SingletonApolloClient.instance;
    }

    SingletonApolloClient.instance = this;
    const uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_9__["createUploadLink"])({
      uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__[/* urlGQL */ "a"],
      fetch: node_fetch__WEBPACK_IMPORTED_MODULE_4___default.a,
      credentials: 'include'
    });
    const authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])((_, {
      headers
    }) => {
      return {
        headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, headers, {
          authorization: this.jwt ? `Bearer ${this.jwt}` : ''
        })
      };
    });
    const linkError = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_7__["onError"])(ctx => {
      if (ctx.graphQLErrors) ctx.graphQLErrors.map(({
        message,
        locations,
        path
      }) => {
        new _singleton_store__WEBPACK_IMPORTED_MODULE_11__[/* SingletonStore */ "a"]().getStore().dispatch(Object(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_12__["showSnackBar"])('Ошибка'));
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      });
      if (ctx.networkError) console.log(`[Network error]: ${ctx.networkError}`);
    });
    /*const wsLink = new WebSocketLink({
        uri: urlGQLws,
        options: {
            reconnect: true
        },
        webSocketImpl: process.browser?WebSocket:ws
    });*/

    const mainLink =
    /*split(
    ({ query }) => {
    const definition = getMainDefinition(query);
    return (
    definition.kind === 'OperationDefinition' &&
    definition.operation === 'subscription'
    );
    },
    wsLink,*/
    uploadLink;
    /*,
    );*/

    const link = apollo_link__WEBPACK_IMPORTED_MODULE_8__["ApolloLink"].from([linkError, authLink, mainLink]);
    this.client = new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
      link: link,
      cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"](),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'ignore'
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all'
        },
        mutate: {
          errorPolicy: 'all'
        }
      }
    });
    this.jwt = Object(_lib__WEBPACK_IMPORTED_MODULE_5__[/* getJWT */ "d"])(req ? req.headers.cookie : document.cookie);
    return this;
  }

  getClient() {
    return this.client;
  }

}

/***/ }),

/***/ "gRZq":
/***/ (function(module, exports) {



/***/ }),

/***/ "grec":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SHOW_DRAWER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_SORT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_COUNT_BASKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_IS_MOBILE_APP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SHOW_LOAD; });
const SHOW_DRAWER = 'SHOW_DRAWER';
const SET_SEARCH = 'SET_SEARCH';
const SET_SORT = 'SET_SORT';
const SET_FILTER = 'SET_FILTER';
const SET_DATE = 'SET_DATE';
const SET_COUNT_BASKET = 'SET_COUNT_BASKET';
const SET_IS_MOBILE_APP = 'SET_IS_MOBILE_APP';
const SHOW_LOAD = 'SHOW_LOAD';

/***/ }),

/***/ "gs4i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingletonStore; });
/* eslint-disable no-extra-boolean-cast */
class SingletonStore {
  constructor(store) {
    if (!!SingletonStore.instance) {
      return SingletonStore.instance;
    }

    SingletonStore.instance = this;
    this.store = store;
    return this;
  }

  getStore() {
    return this.store;
  }

}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hrAA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "im5F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DISABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NEXT; });
const DISABLE = 'DISABLE';
const NEXT = 'NEXT';

/***/ }),

/***/ "ixB0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/UnfoldMore");

/***/ }),

/***/ "j6IE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAuthenticated", function() { return checkAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthenticated", function() { return setAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProfile", function() { return setProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony import */ var _constants_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("U/ye");
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8UEt");
/* harmony import */ var _constants_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("grec");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("gIpB");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);







function signup(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__[/* SingletonApolloClient */ "a"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                    mutation ($login: String!, $password: String!) {
                        signupuser(login: $login, password: $password) {
                           role
                           status
                           login
                           organization
                           _id
                        }
                    }`
      });
      if (result.data.signupuser.role === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* ERROR_AUTHENTICATED */ "b"],
        payload: true
      });else {
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__[/* SHOW_MINI_DIALOG */ "b"],
          payload: false
        }); //await Router.push('/')

        /*
        await dispatch({type: AUTHENTICATED});
        await dispatch({
            type: SET_PROFILE,
            payload: result.data.signupuser
        })*/

        window.location.reload();
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* ERROR_AUTHENTICATED */ "b"],
        payload: true
      });
    }
  };
}
function signin(payload) {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__[/* SingletonApolloClient */ "a"]().getClient();
      let result = await client.mutate({
        variables: payload,
        mutation: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                    mutation ($login: String!, $password: String!) {
                        signinuser(login: $login, password: $password) {
                           role
                           status
                           login
                           organization
                           _id
                        }
                    }`
      });
      if (result.data.signinuser.role === 'Проверьте данные') await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* ERROR_AUTHENTICATED */ "b"],
        payload: true
      });else {
        await dispatch({
          type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_1__[/* SHOW_MINI_DIALOG */ "b"],
          payload: false
        }); //await Router.push('/')

        window.location.reload();
        /*await dispatch({type: AUTHENTICATED});
        await dispatch({
            type: SET_PROFILE,
            payload: result.data.signinuser
        })*/
      }
    } catch (error) {
      console.error(error);
      await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* ERROR_AUTHENTICATED */ "b"],
        payload: true
      });
    }
  };
}
function checkAuthenticated() {
  return async dispatch => {
    try {
      if (js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get('jwt')) {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* AUTHENTICATED */ "a"]
        });
      } else {
        dispatch({
          type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* UNAUTHENTICATED */ "e"]
        });
      }
    } catch (error) {
      dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* UNAUTHENTICATED */ "e"]
      });
    }
  };
}
function setAuthenticated(auth) {
  return {
    type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* SET_AUTH */ "c"],
    payload: auth
  };
}
function logout(reload) {
  return async dispatch => {
    await dispatch({
      type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* UNAUTHENTICATED */ "e"]
    });
    if (reload) await next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
    await js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('jwt');
    await dispatch({
      type: _constants_app__WEBPACK_IMPORTED_MODULE_2__[/* SET_COUNT_BASKET */ "a"],
      payload: 0
    });
    await dispatch({
      type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* SET_PROFILE */ "d"],
      payload: {}
    }); //setTimeout(()=>window.location.reload(),100)
  };
}
function setProfile() {
  return async dispatch => {
    try {
      const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__[/* SingletonApolloClient */ "a"]().getClient();
      let result = await client.query({
        query: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                    query {
                        getStatus {
                           role
                           status
                           login
                           organization
                           _id
                          }
                    }`
      });
      await dispatch({
        type: _constants_user__WEBPACK_IMPORTED_MODULE_0__[/* SET_PROFILE */ "d"],
        payload: result.data.getStatus
      });
    } catch (error) {
      console.error(error);
    }
  };
}
async function getProfile() {
  try {
    const client = new _src_singleton_client__WEBPACK_IMPORTED_MODULE_5__[/* SingletonApolloClient */ "a"]().getClient();
    let result = await client.query({
      query: apollo_boost__WEBPACK_IMPORTED_MODULE_4__["gql"]`
                   query {
                       getStatus {
                          role
                          status
                          login
                          organization
                          _id
                         }
                   }`
    });
    return result.data.getStatus;
  } catch (error) {
    console.error(error);
  }
}

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kDBC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PermIdentity");

/***/ }),

/***/ "lWoh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "o0q0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  mainLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  button: {
    margin: theme.spacing(1)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  message: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'center',
    color: 'indigo',
    fontWeight: 'bold',
    cursor: 'pointer',
    overflowWrap: 'break-word',
    fontSize: '1rem'
  },
  itogo: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textAlign: 'left',
    fontSize: '1rem',
    fontWeight: 500
  },
  error_message: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'red',
    fontWeight: 'bold'
  },
  nameField: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    color: '#A0A0A0'
  },
  value: {
    marginBottom: 10,
    fontWeight: '500',
    fontSize: '0.875rem',
    fontFamily: 'Roboto'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  fabGeo: {
    position: 'fixed',
    bottom: 70,
    right: 35
  },
  geo: {
    width: 170,
    textAlign: 'center',
    marginTop: -5,
    marginBottom: 10,
    fontSize: '0.875rem',
    fontFamily: 'Roboto',
    whiteSpace: 'pre-wrap',
    cursor: 'pointer',
    borderBottom: '1px dashed #ffb300'
  },
  counterbtn: {
    marginRight: 10,
    marginLeft: 10,
    userSelect: 'none',
    cursor: 'pointer',
    width: 16,
    height: 16,
    fontSize: '0.875rem',
    fontWeight: 700,
    background: '#e6e6e6',
    color: '#212121',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chip: {
    margin: theme.spacing(0.5),
    cursor: 'pointer'
  }
}));

/***/ }),

/***/ "oz4i":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "pN9Q":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "pngM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMiniDialog", function() { return setMiniDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMiniDialog", function() { return showMiniDialog; });
/* harmony import */ var _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8UEt");

function setMiniDialog(title, child, fullScreen) {
  return {
    type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__[/* SET_MINI_DIALOG */ "a"],
    payload: {
      title: title,
      child: child,
      fullScreen
    }
  };
}
function showMiniDialog(show) {
  return {
    type: _constants_mini_dialog__WEBPACK_IMPORTED_MODULE_0__[/* SHOW_MINI_DIALOG */ "b"],
    payload: show
  };
}

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "tBFs":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "u/0/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterListRounded");

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vuC2":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "w/MP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AssignmentInd");

/***/ }),

/***/ "w0le":
/***/ (function(module, exports) {

module.exports = require("react-bottom-scroll-listener");

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "x0VR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Money");

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y4xb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rKB8");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pngM");
/* harmony import */ var _redux_actions_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("DzNn");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("//vS");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("2UeD");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hrAA");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("o0q0");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Confirmation = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(props => {
  const {
    showMiniDialog
  } = props.mini_dialogActions;
  const {
    showSnackBar
  } = props.snackbarActions;
  const {
    showLoad
  } = props.appActions;
  const {
    classes,
    action
  } = props;
  return __jsx("div", {
    className: classes.line
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClick: async () => {
      try {
        await showMiniDialog(false);
        await showLoad(true);
        await action();
        await showLoad(false);
      } catch (err) {
        showSnackBar('Ошибка');
      }
    },
    "aria-label": "Delete"
  }, __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.button
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {
    onClick: async () => {
      showMiniDialog(false);
    },
    "aria-label": "Cancel"
  }, __jsx(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.button
  })));
});

function mapStateToProps(state) {
  return {
    mini_dialog: state.mini_dialog
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mini_dialogActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_mini_dialog__WEBPACK_IMPORTED_MODULE_4__, dispatch),
    appActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_app__WEBPACK_IMPORTED_MODULE_5__, dispatch),
    snackbarActions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_6__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(_src_styleMUI_dialogContent__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(Confirmation)));

/***/ }),

/***/ "zOcm":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });