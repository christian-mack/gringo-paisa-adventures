"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/events/page",{

/***/ "(app-pages-browser)/./components/shared/EventList.tsx":
/*!*****************************************!*\
  !*** ./components/shared/EventList.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EventList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aws_amplify_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify/data */ \"(app-pages-browser)/./node_modules/@aws-amplify/api/dist/esm/API.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n// generate your data client using the Schema from your backend\nconst client = (0,aws_amplify_data__WEBPACK_IMPORTED_MODULE_2__.generateClient)();\nfunction EventList() {\n    _s();\n    const [events, setEvents] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    const fetchEvents = async ()=>{\n        try {\n            const { data: events, errors } = await client.models.Event.list();\n            setEvents(events);\n        } catch (error) {\n            console.log(\"Error finding events. ERROR :: \".concat(error));\n        }\n    };\n    console.log(events);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Events\"\n            }, void 0, false, {\n                fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/EventList.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n                fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/EventList.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/christianmack/Documents/dev/projects/gringo-paisa-adventures/components/shared/EventList.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(EventList, \"j18ueuia/psAZ/XawE3UyqzOWsE=\");\n_c = EventList;\nvar _c;\n$RefreshReg$(_c, \"EventList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc2hhcmVkL0V2ZW50TGlzdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNNO0FBSWxELCtEQUErRDtBQUMvRCxNQUFNRyxTQUFTRCxnRUFBY0E7QUFFZCxTQUFTRTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFNLEVBQUU7SUFFNUNDLGdEQUFTQSxDQUFDLEtBQU87SUFFakIsTUFBTU0sY0FBYztRQUNsQixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxNQUFNSCxNQUFNLEVBQUVJLE1BQU0sRUFBRSxHQUFHLE1BQU1OLE9BQU9PLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJO1lBQy9ETixVQUFVRDtRQUNaLEVBQUUsT0FBT1EsT0FBTztZQUNkQyxRQUFRQyxHQUFHLENBQUMsa0NBQXdDLE9BQU5GO1FBQ2hEO0lBQ0Y7SUFFQUMsUUFBUUMsR0FBRyxDQUFDVjtJQUVaLHFCQUNFLDhEQUFDVzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBRUosOERBQUNDOzs7Ozs7Ozs7OztBQUdQO0dBdkJ3QmQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaGFyZWQvRXZlbnRMaXN0LnRzeD81ODJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdlbmVyYXRlQ2xpZW50IH0gZnJvbSBcImF3cy1hbXBsaWZ5L2RhdGFcIjtcbmltcG9ydCB0eXBlIHsgU2NoZW1hIH0gZnJvbSBcIkAvYW1wbGlmeS9kYXRhL3Jlc291cmNlXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RvcmUgfSBmcm9tIFwiQC9ob29rcy9zdGF0ZS9hdXRoU3RvcmVcIjtcblxuLy8gZ2VuZXJhdGUgeW91ciBkYXRhIGNsaWVudCB1c2luZyB0aGUgU2NoZW1hIGZyb20geW91ciBiYWNrZW5kXG5jb25zdCBjbGllbnQgPSBnZW5lcmF0ZUNsaWVudDxTY2hlbWE+KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50TGlzdCgpIHtcbiAgY29uc3QgW2V2ZW50cywgc2V0RXZlbnRzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7fSk7XG5cbiAgY29uc3QgZmV0Y2hFdmVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YTogZXZlbnRzLCBlcnJvcnMgfSA9IGF3YWl0IGNsaWVudC5tb2RlbHMuRXZlbnQubGlzdCgpO1xuICAgICAgc2V0RXZlbnRzKGV2ZW50cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBmaW5kaW5nIGV2ZW50cy4gRVJST1IgOjogJHtlcnJvcn1gKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc29sZS5sb2coZXZlbnRzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+RXZlbnRzPC9oMT5cblxuICAgICAgPHVsPjwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZW5lcmF0ZUNsaWVudCIsImNsaWVudCIsIkV2ZW50TGlzdCIsImV2ZW50cyIsInNldEV2ZW50cyIsImZldGNoRXZlbnRzIiwiZGF0YSIsImVycm9ycyIsIm1vZGVscyIsIkV2ZW50IiwibGlzdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/shared/EventList.tsx\n"));

/***/ })

});