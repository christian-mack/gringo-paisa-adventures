"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/events/create/page",{

/***/ "(app-pages-browser)/./components/shared/EventForm.tsx":
/*!*****************************************!*\
  !*** ./components/shared/EventForm.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EventForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aws_amplify_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify/data */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n/* harmony import */ var _hooks_state_authStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/state/authStore */ \"(app-pages-browser)/./hooks/state/authStore.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// generate your data client using the Schema from your backend\nconst client = (0,aws_amplify_data__WEBPACK_IMPORTED_MODULE_3__.generateClient)();\nfunction EventForm() {\n    _s();\n    const user = (0,_hooks_state_authStore__WEBPACK_IMPORTED_MODULE_2__.useAuthStore)((state)=>state);\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/EventForm.tsx\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, this);\n}\n_s(EventForm, \"qIl3vdazLwuZ/jLuO6cJQ4TV3Tw=\", false, function() {\n    return [\n        _hooks_state_authStore__WEBPACK_IMPORTED_MODULE_2__.useAuthStore\n    ];\n});\n_c = EventForm;\nvar _c;\n$RefreshReg$(_c, \"EventForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL0V2ZW50Rm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFNEM7QUFDTTtBQUVLO0FBRXZELCtEQUErRDtBQUMvRCxNQUFNRyxTQUFTRixnRUFBY0E7QUFFZCxTQUFTRzs7SUFDdEIsTUFBTUMsT0FBT0gsb0VBQVlBLENBQUMsQ0FBQ0ksUUFBVUE7SUFDckMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdSLCtDQUFRQSxDQUFvQixFQUFFO0lBRTFELHFCQUFPLDhEQUFDUzs7Ozs7QUFDVjtHQUx3Qkw7O1FBQ1RGLGdFQUFZQTs7O0tBREhFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2hhcmVkL0V2ZW50Rm9ybS50c3g/ZWI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVDbGllbnQgfSBmcm9tIFwiYXdzLWFtcGxpZnkvZGF0YVwiO1xuaW1wb3J0IHR5cGUgeyBTY2hlbWEgfSBmcm9tIFwiQC9hbXBsaWZ5L2RhdGEvcmVzb3VyY2VcIjtcbmltcG9ydCB7IHVzZUF1dGhTdG9yZSB9IGZyb20gXCJAL2hvb2tzL3N0YXRlL2F1dGhTdG9yZVwiO1xuXG4vLyBnZW5lcmF0ZSB5b3VyIGRhdGEgY2xpZW50IHVzaW5nIHRoZSBTY2hlbWEgZnJvbSB5b3VyIGJhY2tlbmRcbmNvbnN0IGNsaWVudCA9IGdlbmVyYXRlQ2xpZW50PFNjaGVtYT4oKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRGb3JtKCkge1xuICBjb25zdCB1c2VyID0gdXNlQXV0aFN0b3JlKChzdGF0ZSkgPT4gc3RhdGUpO1xuICBjb25zdCBbZXZlbnRzLCBzZXRFdmVudHNdID0gdXNlU3RhdGU8U2NoZW1hW1wiRXZlbnRcIl1bXT4oW10pO1xuXG4gIHJldHVybiA8ZGl2PjwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImdlbmVyYXRlQ2xpZW50IiwidXNlQXV0aFN0b3JlIiwiY2xpZW50IiwiRXZlbnRGb3JtIiwidXNlciIsInN0YXRlIiwiZXZlbnRzIiwic2V0RXZlbnRzIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/EventForm.tsx\n"));

/***/ })

});