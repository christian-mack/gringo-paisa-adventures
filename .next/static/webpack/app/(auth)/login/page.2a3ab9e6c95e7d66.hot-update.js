"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/login/page",{

/***/ "(app-pages-browser)/./hooks/state/authStore.tsx":
/*!***********************************!*\
  !*** ./hooks/state/authStore.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuthStore: function() { return /* binding */ useAuthStore; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"(app-pages-browser)/./node_modules/zustand/esm/index.mjs\");\n\nconst useAuthStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)()((set)=>({\n        user: {\n            userId: \"\",\n            username: \"\",\n            isAuthenticated: false\n        },\n        setUserAuth: (newAuthState)=>set((state)=>({\n                    user: {\n                        isAuthenticated: newAuthState\n                    }\n                }))\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL3N0YXRlL2F1dGhTdG9yZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUM7QUFPMUIsTUFBTUMsZUFBZUQsK0NBQU1BLEdBQWMsQ0FBQ0UsTUFBUztRQUN4REMsTUFBTTtZQUNKQyxRQUFRO1lBQ1JDLFVBQVU7WUFDVkMsaUJBQWlCO1FBQ25CO1FBQ0FDLGFBQWEsQ0FBQ0MsZUFDWk4sSUFBSSxDQUFDTyxRQUFXO29CQUFFTixNQUFNO3dCQUFFRyxpQkFBaUJFO29CQUFhO2dCQUFFO0lBQzlELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3Mvc3RhdGUvYXV0aFN0b3JlLnRzeD9kZDYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XG5cbmludGVyZmFjZSBVc2VyU3RhdGUge1xuICB1c2VyOiB7IHVzZXJJZDogc3RyaW5nOyB1c2VybmFtZTogc3RyaW5nOyBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4gfTtcbiAgc2V0VXNlckF1dGg6IChuZXdBdXRoU3RhdGU6IGJvb2xlYW4pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCB1c2VBdXRoU3RvcmUgPSBjcmVhdGU8VXNlclN0YXRlPigpKChzZXQpID0+ICh7XG4gIHVzZXI6IHtcbiAgICB1c2VySWQ6IFwiXCIsXG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcbiAgfSxcbiAgc2V0VXNlckF1dGg6IChuZXdBdXRoU3RhdGUpID0+XG4gICAgc2V0KChzdGF0ZSkgPT4gKHsgdXNlcjogeyBpc0F1dGhlbnRpY2F0ZWQ6IG5ld0F1dGhTdGF0ZSB9IH0pKSxcbn0pKTtcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VBdXRoU3RvcmUiLCJzZXQiLCJ1c2VyIiwidXNlcklkIiwidXNlcm5hbWUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJzZXRVc2VyQXV0aCIsIm5ld0F1dGhTdGF0ZSIsInN0YXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/state/authStore.tsx\n"));

/***/ })

});