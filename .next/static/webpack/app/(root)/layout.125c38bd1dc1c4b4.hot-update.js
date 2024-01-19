"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./components/shared/Header.tsx":
/*!**************************************!*\
  !*** ./components/shared/Header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @aws-amplify/auth */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs\");\n/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @aws-amplify/auth */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/deleteUser.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst Header = ()=>{\n    async function handleSignOut() {\n        try {\n            await (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_4__.signOut)();\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    async function handleDeleteUser() {\n        try {\n            await (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_5__.deleteUser)();\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full border-b\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"w-36\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/assets/images/logo.svg\",\n                        width: 128,\n                        height: 38,\n                        alt: \"gringo paisa adventures logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-32 justify-end gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/sign-up\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            onClick: handleSignOut,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUMrQjtBQUNGO0FBQ1M7QUFDa0I7QUFFeEQsTUFBTUssU0FBUztJQUNiLGVBQWVDO1FBQ2IsSUFBSTtZQUNGLE1BQU1ILDBEQUFPQTtRQUNmLEVBQUUsT0FBT0ksT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUVBLGVBQWVHO1FBQ2IsSUFBSTtZQUNGLE1BQU1OLDZEQUFVQTtRQUNsQixFQUFFLE9BQU9HLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0k7UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDWCxrREFBSUE7b0JBQUNhLE1BQUs7b0JBQUlGLFdBQVU7OEJBQ3ZCLDRFQUFDWixtREFBS0E7d0JBQ0plLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7Ozs7Ozs7Ozs7OzhCQUlSLDhEQUFDTDtvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNWLDhDQUFNQTtzQ0FDTCw0RUFBQ0Qsa0RBQUlBO2dDQUFDYSxNQUFLOzBDQUFTOzs7Ozs7Ozs7OztzQ0FFdEIsOERBQUNaLDhDQUFNQTtzQ0FDTCw0RUFBQ0Qsa0RBQUlBO2dDQUFDYSxNQUFLOzBDQUFXOzs7Ozs7Ozs7OztzQ0FFeEIsOERBQUNaLDhDQUFNQTs0QkFBQ2lCLFNBQVNiO3NDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztLQXpDTUQ7QUEyQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvSGVhZGVyLnRzeD85MDJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBzaWduT3V0LCBkZWxldGVVc2VyIH0gZnJvbSBcIkBhd3MtYW1wbGlmeS9hdXRoXCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2lnbk91dCgpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2lnbk91dCgpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRGVsZXRlVXNlcigpIHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgZGVsZXRlVXNlcigpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXItYlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cInctMzZcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPXsxMjh9XG4gICAgICAgICAgICBoZWlnaHQ9ezM4fVxuICAgICAgICAgICAgYWx0PVwiZ3JpbmdvIHBhaXNhIGFkdmVudHVyZXMgbG9nb1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LTMyIGp1c3RpZnktZW5kIGdhcC0zXCI+XG4gICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5Mb2dpbjwvTGluaz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWduLXVwXCI+U2lnbiBVcDwvTGluaz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNpZ25PdXR9PkxvZ291dDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIkJ1dHRvbiIsInNpZ25PdXQiLCJkZWxldGVVc2VyIiwiSGVhZGVyIiwiaGFuZGxlU2lnbk91dCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZURlbGV0ZVVzZXIiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/Header.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/deleteUser.mjs":
/*!***************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/deleteUser.mjs ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteUser: function() { return /* binding */ deleteUser; }\n/* harmony export */ });\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-amplify/core */ \"(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs\");\n/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/core */ \"(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs\");\n/* harmony import */ var _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/core/internals/utils */ \"(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/singleton/Auth/utils/index.mjs\");\n/* harmony import */ var _aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-amplify/core/internals/utils */ \"(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/Platform/types.mjs\");\n/* harmony import */ var _utils_clients_CognitoIdentityProvider_utils_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/clients/CognitoIdentityProvider/utils.mjs */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/clients/CognitoIdentityProvider/utils.mjs\");\n/* harmony import */ var _utils_types_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/types.mjs */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/types.mjs\");\n/* harmony import */ var _utils_clients_CognitoIdentityProvider_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/clients/CognitoIdentityProvider/index.mjs */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/utils/clients/CognitoIdentityProvider/index.mjs\");\n/* harmony import */ var _tokenProvider_tokenProvider_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tokenProvider/tokenProvider.mjs */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/tokenProvider/tokenProvider.mjs\");\n/* harmony import */ var _signOut_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signOut.mjs */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs\");\n/* harmony import */ var _utils_getAuthUserAgentValue_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/getAuthUserAgentValue.mjs */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/utils/getAuthUserAgentValue.mjs\");\n\n\n\n\n\n\n\n\n\n\n// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\n/**\n * Deletes a user from the user pool while authenticated.\n *\n * @throws - {@link DeleteUserException}\n * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.\n */\nasync function deleteUser() {\n    const authConfig = _aws_amplify_core__WEBPACK_IMPORTED_MODULE_0__.Amplify.getConfig().Auth?.Cognito;\n    (0,_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_1__.assertTokenProviderConfig)(authConfig);\n    const { tokens } = await (0,_aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__.fetchAuthSession)();\n    (0,_utils_types_mjs__WEBPACK_IMPORTED_MODULE_3__.assertAuthTokens)(tokens);\n    await (0,_utils_clients_CognitoIdentityProvider_index_mjs__WEBPACK_IMPORTED_MODULE_4__.deleteUser)({\n        region: (0,_utils_clients_CognitoIdentityProvider_utils_mjs__WEBPACK_IMPORTED_MODULE_5__.getRegion)(authConfig.userPoolId),\n        userAgentValue: (0,_utils_getAuthUserAgentValue_mjs__WEBPACK_IMPORTED_MODULE_6__.getAuthUserAgentValue)(_aws_amplify_core_internals_utils__WEBPACK_IMPORTED_MODULE_7__.AuthAction.DeleteUser),\n    }, {\n        AccessToken: tokens.accessToken.toString(),\n    });\n    await _tokenProvider_tokenProvider_mjs__WEBPACK_IMPORTED_MODULE_8__.tokenOrchestrator.clearDeviceMetadata();\n    await (0,_signOut_mjs__WEBPACK_IMPORTED_MODULE_9__.signOut)();\n}\n\n\n//# sourceMappingURL=deleteUser.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AYXdzLWFtcGxpZnkvYXV0aC9kaXN0L2VzbS9wcm92aWRlcnMvY29nbml0by9hcGlzL2RlbGV0ZVVzZXIubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQzRCO0FBQ1g7QUFDekI7QUFDMEM7QUFDckQ7QUFDNEI7QUFDL0I7QUFDeUM7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFPO0FBQzlCLElBQUksNEZBQXlCO0FBQzdCLFlBQVksU0FBUyxRQUFRLG1FQUFnQjtBQUM3QyxJQUFJLGtFQUFnQjtBQUNwQixVQUFVLDRGQUFZO0FBQ3RCLGdCQUFnQiwyRkFBUztBQUN6Qix3QkFBd0IsdUZBQXFCLENBQUMseUVBQVU7QUFDeEQsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLFVBQVUsK0VBQWlCO0FBQzNCLFVBQVUscURBQU87QUFDakI7O0FBRXNCO0FBQ3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXdzLWFtcGxpZnkvYXV0aC9kaXN0L2VzbS9wcm92aWRlcnMvY29nbml0by9hcGlzL2RlbGV0ZVVzZXIubWpzP2Y2ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW1wbGlmeSwgZmV0Y2hBdXRoU2Vzc2lvbiB9IGZyb20gJ0Bhd3MtYW1wbGlmeS9jb3JlJztcbmltcG9ydCB7IGFzc2VydFRva2VuUHJvdmlkZXJDb25maWcsIEF1dGhBY3Rpb24gfSBmcm9tICdAYXdzLWFtcGxpZnkvY29yZS9pbnRlcm5hbHMvdXRpbHMnO1xuaW1wb3J0IHsgZ2V0UmVnaW9uIH0gZnJvbSAnLi4vdXRpbHMvY2xpZW50cy9Db2duaXRvSWRlbnRpdHlQcm92aWRlci91dGlscy5tanMnO1xuaW1wb3J0IHsgYXNzZXJ0QXV0aFRva2VucyB9IGZyb20gJy4uL3V0aWxzL3R5cGVzLm1qcyc7XG5pbXBvcnQgeyBkZWxldGVVc2VyIGFzIGRlbGV0ZVVzZXIkMSB9IGZyb20gJy4uL3V0aWxzL2NsaWVudHMvQ29nbml0b0lkZW50aXR5UHJvdmlkZXIvaW5kZXgubWpzJztcbmltcG9ydCAnLi4vdG9rZW5Qcm92aWRlci9lcnJvckhlbHBlcnMubWpzJztcbmltcG9ydCB7IHRva2VuT3JjaGVzdHJhdG9yIH0gZnJvbSAnLi4vdG9rZW5Qcm92aWRlci90b2tlblByb3ZpZGVyLm1qcyc7XG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSAnLi9zaWduT3V0Lm1qcyc7XG5pbXBvcnQgeyBnZXRBdXRoVXNlckFnZW50VmFsdWUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9nZXRBdXRoVXNlckFnZW50VmFsdWUubWpzJztcblxuLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuLyoqXG4gKiBEZWxldGVzIGEgdXNlciBmcm9tIHRoZSB1c2VyIHBvb2wgd2hpbGUgYXV0aGVudGljYXRlZC5cbiAqXG4gKiBAdGhyb3dzIC0ge0BsaW5rIERlbGV0ZVVzZXJFeGNlcHRpb259XG4gKiBAdGhyb3dzIEF1dGhUb2tlbkNvbmZpZ0V4Y2VwdGlvbiAtIFRocm93biB3aGVuIHRoZSB0b2tlbiBwcm92aWRlciBjb25maWcgaXMgaW52YWxpZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcigpIHtcbiAgICBjb25zdCBhdXRoQ29uZmlnID0gQW1wbGlmeS5nZXRDb25maWcoKS5BdXRoPy5Db2duaXRvO1xuICAgIGFzc2VydFRva2VuUHJvdmlkZXJDb25maWcoYXV0aENvbmZpZyk7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGF3YWl0IGZldGNoQXV0aFNlc3Npb24oKTtcbiAgICBhc3NlcnRBdXRoVG9rZW5zKHRva2Vucyk7XG4gICAgYXdhaXQgZGVsZXRlVXNlciQxKHtcbiAgICAgICAgcmVnaW9uOiBnZXRSZWdpb24oYXV0aENvbmZpZy51c2VyUG9vbElkKSxcbiAgICAgICAgdXNlckFnZW50VmFsdWU6IGdldEF1dGhVc2VyQWdlbnRWYWx1ZShBdXRoQWN0aW9uLkRlbGV0ZVVzZXIpLFxuICAgIH0sIHtcbiAgICAgICAgQWNjZXNzVG9rZW46IHRva2Vucy5hY2Nlc3NUb2tlbi50b1N0cmluZygpLFxuICAgIH0pO1xuICAgIGF3YWl0IHRva2VuT3JjaGVzdHJhdG9yLmNsZWFyRGV2aWNlTWV0YWRhdGEoKTtcbiAgICBhd2FpdCBzaWduT3V0KCk7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZVVzZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbGV0ZVVzZXIubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/deleteUser.mjs\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs":
/*!*************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAuthSession: function() { return /* binding */ fetchAuthSession; }\n/* harmony export */ });\n/* harmony import */ var _internal_fetchAuthSession_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal/fetchAuthSession.mjs */ \"(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/singleton/apis/internal/fetchAuthSession.mjs\");\n/* harmony import */ var _Amplify_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Amplify.mjs */ \"(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/singleton/Amplify.mjs\");\n\n\n\n// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\nconst fetchAuthSession = (options) => {\n    return (0,_internal_fetchAuthSession_mjs__WEBPACK_IMPORTED_MODULE_0__.fetchAuthSession)(_Amplify_mjs__WEBPACK_IMPORTED_MODULE_1__.Amplify, options);\n};\n\n\n//# sourceMappingURL=fetchAuthSession.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AYXdzLWFtcGxpZnkvY29yZS9kaXN0L2VzbS9zaW5nbGV0b24vYXBpcy9mZXRjaEF1dGhTZXNzaW9uLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUY7QUFDaEQ7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZ0ZBQWtCLENBQUMsaURBQU87QUFDckM7O0FBRTRCO0FBQzVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYXdzLWFtcGxpZnkvY29yZS9kaXN0L2VzbS9zaW5nbGV0b24vYXBpcy9mZXRjaEF1dGhTZXNzaW9uLm1qcz8xNmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZldGNoQXV0aFNlc3Npb24gYXMgZmV0Y2hBdXRoU2Vzc2lvbiQxIH0gZnJvbSAnLi9pbnRlcm5hbC9mZXRjaEF1dGhTZXNzaW9uLm1qcyc7XG5pbXBvcnQgeyBBbXBsaWZ5IH0gZnJvbSAnLi4vQW1wbGlmeS5tanMnO1xuXG4vLyBDb3B5cmlnaHQgQW1hem9uLmNvbSwgSW5jLiBvciBpdHMgYWZmaWxpYXRlcy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbi8vIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG5jb25zdCBmZXRjaEF1dGhTZXNzaW9uID0gKG9wdGlvbnMpID0+IHtcbiAgICByZXR1cm4gZmV0Y2hBdXRoU2Vzc2lvbiQxKEFtcGxpZnksIG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IHsgZmV0Y2hBdXRoU2Vzc2lvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmV0Y2hBdXRoU2Vzc2lvbi5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/singleton/apis/fetchAuthSession.mjs\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/singleton/apis/internal/fetchAuthSession.mjs":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@aws-amplify/core/dist/esm/singleton/apis/internal/fetchAuthSession.mjs ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAuthSession: function() { return /* binding */ fetchAuthSession; }\n/* harmony export */ });\n// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.\n// SPDX-License-Identifier: Apache-2.0\nconst fetchAuthSession = (amplify, options) => {\n    return amplify.Auth.fetchAuthSession(options);\n};\n\n\n//# sourceMappingURL=fetchAuthSession.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AYXdzLWFtcGxpZnkvY29yZS9kaXN0L2VzbS9zaW5nbGV0b24vYXBpcy9pbnRlcm5hbC9mZXRjaEF1dGhTZXNzaW9uLm1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEI7QUFDNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bhd3MtYW1wbGlmeS9jb3JlL2Rpc3QvZXNtL3NpbmdsZXRvbi9hcGlzL2ludGVybmFsL2ZldGNoQXV0aFNlc3Npb24ubWpzPzUwZjEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IEFtYXpvbi5jb20sIEluYy4gb3IgaXRzIGFmZmlsaWF0ZXMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4vLyBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuY29uc3QgZmV0Y2hBdXRoU2Vzc2lvbiA9IChhbXBsaWZ5LCBvcHRpb25zKSA9PiB7XG4gICAgcmV0dXJuIGFtcGxpZnkuQXV0aC5mZXRjaEF1dGhTZXNzaW9uKG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IHsgZmV0Y2hBdXRoU2Vzc2lvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZmV0Y2hBdXRoU2Vzc2lvbi5tanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@aws-amplify/core/dist/esm/singleton/apis/internal/fetchAuthSession.mjs\n"));

/***/ })

});