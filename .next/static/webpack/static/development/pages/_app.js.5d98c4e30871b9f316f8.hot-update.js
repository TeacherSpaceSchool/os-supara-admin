webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/getClientGQL.js":
/*!*****************************!*\
  !*** ./src/getClientGQL.js ***!
  \*****************************/
/*! exports provided: getClientGqlSsr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClientGqlSsr", function() { return getClientGqlSsr; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/constants/other */ "./redux/constants/other.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib */ "./src/lib.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-upload-client */ "./node_modules/apollo-upload-client/lib/index.js");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_8__);


/* eslint-disable no-extra-boolean-cast */








var getClientGqlSsr = function getClientGqlSsr(req) {
  var uploadLink = Object(apollo_upload_client__WEBPACK_IMPORTED_MODULE_8__["createUploadLink"])({
    uri: _redux_constants_other__WEBPACK_IMPORTED_MODULE_1__["urlGQL"],
    fetch: node_fetch__WEBPACK_IMPORTED_MODULE_4___default.a,
    credentials: 'include'
  });
  var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_6__["setContext"])(function (_, _ref) {
    var headers = _ref.headers;
    return {
      headers: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, headers, {
        authorization: Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getJWT"])(req.headers.cookie) ? "Bearer ".concat(Object(_lib__WEBPACK_IMPORTED_MODULE_5__["getJWT"])(req.headers.cookie)) : ''
      })
    };
  });
  var link = apollo_link__WEBPACK_IMPORTED_MODULE_7__["ApolloLink"].from([authLink, uploadLink]);
  return new apollo_client__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    ssrMode: true,
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
};

/***/ })

})
//# sourceMappingURL=_app.js.5d98c4e30871b9f316f8.hot-update.js.map