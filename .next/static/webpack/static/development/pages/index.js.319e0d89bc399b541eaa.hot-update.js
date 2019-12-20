webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/singleton/client.js":
/*!*********************************!*\
  !*** ./src/singleton/client.js ***!
  \*********************************/
/*! exports provided: SingletonApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingletonApolloClient", function() { return SingletonApolloClient; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib */ "./src/lib.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! apollo-upload-client */ "./node_modules/apollo-upload-client/lib/index.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _singleton_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../singleton/store */ "./src/singleton/store.js");
/* harmony import */ var _redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/actions/snackbar */ "./redux/actions/snackbar.js");




/* eslint-disable no-extra-boolean-cast */








 //import { WebSocketLink } from 'apollo-link-ws';
//import { getMainDefinition } from 'apollo-utilities';
//import * as ws from 'ws';



var SingletonApolloClient =
/*#__PURE__*/
function () {
  function SingletonApolloClient(req) {
    var _this = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SingletonApolloClient);

    if (!!SingletonApolloClient.instance) {
      return SingletonApolloClient.instance;
    }

    SingletonApolloClient.instance = this;
    var uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_11__["createUploadLink"])({
      uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_3__["urlGQL"],
      fetch: node_fetch__WEBPACK_IMPORTED_MODULE_6___default.a,
      credentials: 'include'
    });
    var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_8__["setContext"])(function (_, _ref) {
      var headers = _ref.headers;
      return {
        headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
          authorization: _this.jwt ? "Bearer ".concat(_this.jwt) : ''
        })
      };
    });
    var linkError = Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_9__["onError"])(function (ctx) {
      if (ctx.graphQLErrors) ctx.graphQLErrors.map(function (_ref2) {
        var message = _ref2.message,
            locations = _ref2.locations,
            path = _ref2.path;
        new _singleton_store__WEBPACK_IMPORTED_MODULE_12__["SingletonStore"]().getStore().dispatch(Object(_redux_actions_snackbar__WEBPACK_IMPORTED_MODULE_13__["showSnackBar"])('Ошибка'));
        console.log("[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
      });
      if (ctx.networkError) console.log("[Network error]: ".concat(ctx.networkError));
    });
    /*const wsLink = new WebSocketLink({
        uri: urlGQLws,
        options: {
            reconnect: true
        },
        webSocketImpl: process.browser?WebSocket:ws
    });*/

    var mainLink =
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

    var link = apollo_link__WEBPACK_IMPORTED_MODULE_10__["ApolloLink"].from([linkError, authLink, mainLink]);
    this.client = new apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloClient"]({
      link: link,
      cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_5__["InMemoryCache"](),
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
    this.jwt = Object(_lib__WEBPACK_IMPORTED_MODULE_7__["getJWT"])(req ? req.headers.cookie : document.cookie);
    return this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SingletonApolloClient, [{
    key: "getClient",
    value: function getClient() {
      return this.client;
    }
  }]);

  return SingletonApolloClient;
}();

/***/ })

})
//# sourceMappingURL=index.js.319e0d89bc399b541eaa.hot-update.js.map