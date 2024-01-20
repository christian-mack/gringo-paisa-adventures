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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @aws-amplify/auth */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/signOut.mjs\");\n/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @aws-amplify/auth */ \"(app-pages-browser)/./node_modules/@aws-amplify/auth/dist/esm/providers/cognito/apis/deleteUser.mjs\");\n/* harmony import */ var _hooks_state_authStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/state/authStore */ \"(app-pages-browser)/./hooks/state/authStore.tsx\");\n/* harmony import */ var _ui_use_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/use-toast */ \"(app-pages-browser)/./components/ui/use-toast.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Header = ()=>{\n    _s();\n    const { toast } = (0,_ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const user = (0,_hooks_state_authStore__WEBPACK_IMPORTED_MODULE_4__.useAuthStore)((state)=>state.user);\n    async function handleSignOut() {\n        try {\n            await (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)();\n            toast({\n                title: \"You have been signed out\"\n            });\n        } catch (error) {\n            console.log(error);\n            toast({\n                title: \"There was a problem signing out\",\n                description: \"\".concat(error),\n                variant: \"destructive\"\n            });\n        }\n    }\n    async function handleDeleteUser() {\n        try {\n            await (0,_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_7__.deleteUser)();\n        } catch (error) {\n            console.log(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full border-b\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"wrapper flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    className: \"w-36\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"/assets/images/logo.svg\",\n                        width: 128,\n                        height: 38,\n                        alt: \"gringo paisa adventures logo\"\n                    }, void 0, false, {\n                        fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-32 justify-end gap-3\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/login\",\n                                children: \"Login\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/sign-up\",\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            variant: \"destructive\",\n                            onClick: handleDeleteUser,\n                            children: \"Delete User\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            onClick: handleSignOut,\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/Header.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"cczqPyx5G435fgnO11zVwtmssQk=\", false, function() {\n    return [\n        _ui_use_toast__WEBPACK_IMPORTED_MODULE_5__.useToast,\n        _hooks_state_authStore__WEBPACK_IMPORTED_MODULE_4__.useAuthStore\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNGO0FBQ1M7QUFDa0I7QUFDRDtBQUNaO0FBRTNDLE1BQU1PLFNBQVM7O0lBQ2IsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsdURBQVFBO0lBQzFCLE1BQU1HLE9BQU9KLG9FQUFZQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1ELElBQUk7SUFFL0MsZUFBZUU7UUFDYixJQUFJO1lBQ0YsTUFBTVIsMERBQU9BO1lBQ2JLLE1BQU07Z0JBQUVJLE9BQU87WUFBMkI7UUFDNUMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkwsTUFBTTtnQkFDSkksT0FBTztnQkFDUEksYUFBYSxHQUFTLE9BQU5IO2dCQUNoQkksU0FBUztZQUNYO1FBQ0Y7SUFDRjtJQUVBLGVBQWVDO1FBQ2IsSUFBSTtZQUNGLE1BQU1kLDZEQUFVQTtRQUNsQixFQUFFLE9BQU9TLE9BQU87WUFDZEMsUUFBUUMsR0FBRyxDQUFDRjtRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ007UUFBT0MsV0FBVTtrQkFDaEIsNEVBQUNDO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDbkIsa0RBQUlBO29CQUFDcUIsTUFBSztvQkFBSUYsV0FBVTs4QkFDdkIsNEVBQUNwQixtREFBS0E7d0JBQ0p1QixLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs4QkFJUiw4REFBQ0w7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDbEIsOENBQU1BO3NDQUNMLDRFQUFDRCxrREFBSUE7Z0NBQUNxQixNQUFLOzBDQUFTOzs7Ozs7Ozs7OztzQ0FFdEIsOERBQUNwQiw4Q0FBTUE7c0NBQ0wsNEVBQUNELGtEQUFJQTtnQ0FBQ3FCLE1BQUs7MENBQVc7Ozs7Ozs7Ozs7O3NDQUV4Qiw4REFBQ3BCLDhDQUFNQTs0QkFBQ2UsU0FBUTs0QkFBY1UsU0FBU1Q7c0NBQWtCOzs7Ozs7c0NBR3pELDhEQUFDaEIsOENBQU1BOzRCQUFDeUIsU0FBU2hCO3NDQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQztHQXJETUo7O1FBQ2NELG1EQUFRQTtRQUNiRCxnRUFBWUE7OztLQUZyQkU7QUF1RE4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvSGVhZGVyLnRzeD85MDJmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi4vdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBzaWduT3V0LCBkZWxldGVVc2VyIH0gZnJvbSBcIkBhd3MtYW1wbGlmeS9hdXRoXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tIFwiQC9ob29rcy9zdGF0ZS9hdXRoU3RvcmVcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIi4uL3VpL3VzZS10b2FzdFwiO1xuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KCk7XG4gIGNvbnN0IHVzZXIgPSB1c2VBdXRoU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTaWduT3V0KCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzaWduT3V0KCk7XG4gICAgICB0b2FzdCh7IHRpdGxlOiBcIllvdSBoYXZlIGJlZW4gc2lnbmVkIG91dFwiIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBcIlRoZXJlIHdhcyBhIHByb2JsZW0gc2lnbmluZyBvdXRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IGAke2Vycm9yfWAsXG4gICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZVVzZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGRlbGV0ZVVzZXIoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyLWJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlciBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJ3LTM2XCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiXG4gICAgICAgICAgICB3aWR0aD17MTI4fVxuICAgICAgICAgICAgaGVpZ2h0PXszOH1cbiAgICAgICAgICAgIGFsdD1cImdyaW5nbyBwYWlzYSBhZHZlbnR1cmVzIGxvZ29cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvTGluaz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy0zMiBqdXN0aWZ5LWVuZCBnYXAtM1wiPlxuICAgICAgICAgIDxCdXR0b24+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbi11cFwiPlNpZ24gVXA8L0xpbms+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIiBvbkNsaWNrPXtoYW5kbGVEZWxldGVVc2VyfT5cbiAgICAgICAgICAgIERlbGV0ZSBVc2VyXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaWduT3V0fT5Mb2dvdXQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJCdXR0b24iLCJzaWduT3V0IiwiZGVsZXRlVXNlciIsInVzZUF1dGhTdG9yZSIsInVzZVRvYXN0IiwiSGVhZGVyIiwidG9hc3QiLCJ1c2VyIiwic3RhdGUiLCJoYW5kbGVTaWduT3V0IiwidGl0bGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJoYW5kbGVEZWxldGVVc2VyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiZGl2IiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/Header.tsx\n"));

/***/ })

});