"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/zustand";
exports.ids = ["vendor-chunks/zustand"];
exports.modules = {

/***/ "(ssr)/./node_modules/zustand/esm/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/zustand/esm/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   create: () => (/* binding */ create),\n/* harmony export */   createStore: () => (/* reexport safe */ zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore),\n/* harmony export */   \"default\": () => (/* binding */ react),\n/* harmony export */   useStore: () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/vanilla */ \"(ssr)/./node_modules/zustand/esm/vanilla.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-sync-external-store/shim/with-selector.js */ \"(ssr)/./node_modules/use-sync-external-store/shim/with-selector.js\");\n\n\n\n\nconst { useDebugValue } = react__WEBPACK_IMPORTED_MODULE_1__;\nconst { useSyncExternalStoreWithSelector } = use_sync_external_store_shim_with_selector_js__WEBPACK_IMPORTED_MODULE_2__;\nlet didWarnAboutEqualityFn = false;\nfunction useStore(api, selector = api.getState, equalityFn) {\n    if (( false ? 0 : void 0) !== \"production\" && equalityFn && !didWarnAboutEqualityFn) {\n        console.warn(\"[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937\");\n        didWarnAboutEqualityFn = true;\n    }\n    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getState, selector, equalityFn);\n    useDebugValue(slice);\n    return slice;\n}\nconst createImpl = (createState)=>{\n    if (( false ? 0 : void 0) !== \"production\" && typeof createState !== \"function\") {\n        console.warn(\"[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.\");\n    }\n    const api = typeof createState === \"function\" ? (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__.createStore)(createState) : createState;\n    const useBoundStore = (selector, equalityFn)=>useStore(api, selector, equalityFn);\n    Object.assign(useBoundStore, api);\n    return useBoundStore;\n};\nconst create = (createState)=>createState ? createImpl(createState) : createImpl;\nvar react = (createState)=>{\n    if (( false ? 0 : void 0) !== \"production\") {\n        console.warn(\"[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`.\");\n    }\n    return create(createState);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFDZDtBQUNDO0FBQ3VEO0FBRXhGLE1BQU0sRUFBRUcsYUFBYSxFQUFFLEdBQUdGLGtDQUFZQTtBQUN0QyxNQUFNLEVBQUVHLGdDQUFnQyxFQUFFLEdBQUdGLDBFQUEyQkE7QUFDeEUsSUFBSUcseUJBQXlCO0FBQzdCLFNBQVNDLFNBQVNDLEdBQUcsRUFBRUMsV0FBV0QsSUFBSUUsUUFBUSxFQUFFQyxVQUFVO0lBQ3hELElBQUksQ0FBQyxNQUFlLEdBQUcsQ0FBb0IsR0FBRyxLQUFLLE9BQU8sZ0JBQWdCQSxjQUFjLENBQUNMLHdCQUF3QjtRQUMvR1EsUUFBUUMsSUFBSSxDQUNWO1FBRUZULHlCQUF5QjtJQUMzQjtJQUNBLE1BQU1VLFFBQVFYLGlDQUNaRyxJQUFJUyxTQUFTLEVBQ2JULElBQUlFLFFBQVEsRUFDWkYsSUFBSVUsY0FBYyxJQUFJVixJQUFJRSxRQUFRLEVBQ2xDRCxVQUNBRTtJQUVGUCxjQUFjWTtJQUNkLE9BQU9BO0FBQ1Q7QUFDQSxNQUFNRyxhQUFhLENBQUNDO0lBQ2xCLElBQUksQ0FBQyxNQUFlLEdBQUcsQ0FBb0IsR0FBRyxLQUFLLE9BQU8sZ0JBQWdCLE9BQU9BLGdCQUFnQixZQUFZO1FBQzNHTixRQUFRQyxJQUFJLENBQ1Y7SUFFSjtJQUNBLE1BQU1QLE1BQU0sT0FBT1ksZ0JBQWdCLGFBQWFuQiw0REFBV0EsQ0FBQ21CLGVBQWVBO0lBQzNFLE1BQU1DLGdCQUFnQixDQUFDWixVQUFVRSxhQUFlSixTQUFTQyxLQUFLQyxVQUFVRTtJQUN4RVcsT0FBT0MsTUFBTSxDQUFDRixlQUFlYjtJQUM3QixPQUFPYTtBQUNUO0FBQ0EsTUFBTUcsU0FBUyxDQUFDSixjQUFnQkEsY0FBY0QsV0FBV0MsZUFBZUQ7QUFDeEUsSUFBSU0sUUFBUSxDQUFDTDtJQUNYLElBQUksQ0FBQyxNQUFlLEdBQUcsQ0FBb0IsR0FBRyxLQUFLLE9BQU8sY0FBYztRQUN0RU4sUUFBUUMsSUFBSSxDQUNWO0lBRUo7SUFDQSxPQUFPUyxPQUFPSjtBQUNoQjtBQUU4QyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyaW5nby1wYWlzYS1hZHZlbnR1cmVzLy4vbm9kZV9tb2R1bGVzL3p1c3RhbmQvZXNtL2luZGV4Lm1qcz8yZTRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnenVzdGFuZC92YW5pbGxhJztcbmV4cG9ydCAqIGZyb20gJ3p1c3RhbmQvdmFuaWxsYSc7XG5pbXBvcnQgUmVhY3RFeHBvcnRzIGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTeW5jRXh0ZXJuYWxTdG9yZUV4cG9ydHMgZnJvbSAndXNlLXN5bmMtZXh0ZXJuYWwtc3RvcmUvc2hpbS93aXRoLXNlbGVjdG9yLmpzJztcblxuY29uc3QgeyB1c2VEZWJ1Z1ZhbHVlIH0gPSBSZWFjdEV4cG9ydHM7XG5jb25zdCB7IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yIH0gPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZUV4cG9ydHM7XG5sZXQgZGlkV2FybkFib3V0RXF1YWxpdHlGbiA9IGZhbHNlO1xuZnVuY3Rpb24gdXNlU3RvcmUoYXBpLCBzZWxlY3RvciA9IGFwaS5nZXRTdGF0ZSwgZXF1YWxpdHlGbikge1xuICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgZXF1YWxpdHlGbiAmJiAhZGlkV2FybkFib3V0RXF1YWxpdHlGbikge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW0RFUFJFQ0FURURdIFVzZSBgY3JlYXRlV2l0aEVxdWFsaXR5Rm5gIGluc3RlYWQgb2YgYGNyZWF0ZWAgb3IgdXNlIGB1c2VTdG9yZVdpdGhFcXVhbGl0eUZuYCBpbnN0ZWFkIG9mIGB1c2VTdG9yZWAuIFRoZXkgY2FuIGJlIGltcG9ydGVkIGZyb20gJ3p1c3RhbmQvdHJhZGl0aW9uYWwnLiBodHRwczovL2dpdGh1Yi5jb20vcG1uZHJzL3p1c3RhbmQvZGlzY3Vzc2lvbnMvMTkzN1wiXG4gICAgKTtcbiAgICBkaWRXYXJuQWJvdXRFcXVhbGl0eUZuID0gdHJ1ZTtcbiAgfVxuICBjb25zdCBzbGljZSA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlV2l0aFNlbGVjdG9yKFxuICAgIGFwaS5zdWJzY3JpYmUsXG4gICAgYXBpLmdldFN0YXRlLFxuICAgIGFwaS5nZXRTZXJ2ZXJTdGF0ZSB8fCBhcGkuZ2V0U3RhdGUsXG4gICAgc2VsZWN0b3IsXG4gICAgZXF1YWxpdHlGblxuICApO1xuICB1c2VEZWJ1Z1ZhbHVlKHNsaWNlKTtcbiAgcmV0dXJuIHNsaWNlO1xufVxuY29uc3QgY3JlYXRlSW1wbCA9IChjcmVhdGVTdGF0ZSkgPT4ge1xuICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIgJiYgdHlwZW9mIGNyZWF0ZVN0YXRlICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIltERVBSRUNBVEVEXSBQYXNzaW5nIGEgdmFuaWxsYSBzdG9yZSB3aWxsIGJlIHVuc3VwcG9ydGVkIGluIGEgZnV0dXJlIHZlcnNpb24uIEluc3RlYWQgdXNlIGBpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ3p1c3RhbmQnYC5cIlxuICAgICk7XG4gIH1cbiAgY29uc3QgYXBpID0gdHlwZW9mIGNyZWF0ZVN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyBjcmVhdGVTdG9yZShjcmVhdGVTdGF0ZSkgOiBjcmVhdGVTdGF0ZTtcbiAgY29uc3QgdXNlQm91bmRTdG9yZSA9IChzZWxlY3RvciwgZXF1YWxpdHlGbikgPT4gdXNlU3RvcmUoYXBpLCBzZWxlY3RvciwgZXF1YWxpdHlGbik7XG4gIE9iamVjdC5hc3NpZ24odXNlQm91bmRTdG9yZSwgYXBpKTtcbiAgcmV0dXJuIHVzZUJvdW5kU3RvcmU7XG59O1xuY29uc3QgY3JlYXRlID0gKGNyZWF0ZVN0YXRlKSA9PiBjcmVhdGVTdGF0ZSA/IGNyZWF0ZUltcGwoY3JlYXRlU3RhdGUpIDogY3JlYXRlSW1wbDtcbnZhciByZWFjdCA9IChjcmVhdGVTdGF0ZSkgPT4ge1xuICBpZiAoKGltcG9ydC5tZXRhLmVudiA/IGltcG9ydC5tZXRhLmVudi5NT0RFIDogdm9pZCAwKSAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBcIltERVBSRUNBVEVEXSBEZWZhdWx0IGV4cG9ydCBpcyBkZXByZWNhdGVkLiBJbnN0ZWFkIHVzZSBgaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCdgLlwiXG4gICAgKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlKGNyZWF0ZVN0YXRlKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZSwgcmVhY3QgYXMgZGVmYXVsdCwgdXNlU3RvcmUgfTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsIlJlYWN0RXhwb3J0cyIsInVzZVN5bmNFeHRlcm5hbFN0b3JlRXhwb3J0cyIsInVzZURlYnVnVmFsdWUiLCJ1c2VTeW5jRXh0ZXJuYWxTdG9yZVdpdGhTZWxlY3RvciIsImRpZFdhcm5BYm91dEVxdWFsaXR5Rm4iLCJ1c2VTdG9yZSIsImFwaSIsInNlbGVjdG9yIiwiZ2V0U3RhdGUiLCJlcXVhbGl0eUZuIiwiZW52IiwiTU9ERSIsImNvbnNvbGUiLCJ3YXJuIiwic2xpY2UiLCJzdWJzY3JpYmUiLCJnZXRTZXJ2ZXJTdGF0ZSIsImNyZWF0ZUltcGwiLCJjcmVhdGVTdGF0ZSIsInVzZUJvdW5kU3RvcmUiLCJPYmplY3QiLCJhc3NpZ24iLCJjcmVhdGUiLCJyZWFjdCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/zustand/esm/vanilla.mjs":
/*!**********************************************!*\
  !*** ./node_modules/zustand/esm/vanilla.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStore: () => (/* binding */ createStore),\n/* harmony export */   \"default\": () => (/* binding */ vanilla)\n/* harmony export */ });\nconst createStoreImpl = (createState)=>{\n    let state;\n    const listeners = /* @__PURE__ */ new Set();\n    const setState = (partial, replace)=>{\n        const nextState = typeof partial === \"function\" ? partial(state) : partial;\n        if (!Object.is(nextState, state)) {\n            const previousState = state;\n            state = (replace != null ? replace : typeof nextState !== \"object\" || nextState === null) ? nextState : Object.assign({}, state, nextState);\n            listeners.forEach((listener)=>listener(state, previousState));\n        }\n    };\n    const getState = ()=>state;\n    const subscribe = (listener)=>{\n        listeners.add(listener);\n        return ()=>listeners.delete(listener);\n    };\n    const destroy = ()=>{\n        if (( false ? 0 : void 0) !== \"production\") {\n            console.warn(\"[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.\");\n        }\n        listeners.clear();\n    };\n    const api = {\n        setState,\n        getState,\n        subscribe,\n        destroy\n    };\n    state = createState(setState, getState, api);\n    return api;\n};\nconst createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;\nvar vanilla = (createState)=>{\n    if (( false ? 0 : void 0) !== \"production\") {\n        console.warn(\"[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.\");\n    }\n    return createStore(createState);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vdmFuaWxsYS5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxrQkFBa0IsQ0FBQ0M7SUFDdkIsSUFBSUM7SUFDSixNQUFNQyxZQUFZLGFBQWEsR0FBRyxJQUFJQztJQUN0QyxNQUFNQyxXQUFXLENBQUNDLFNBQVNDO1FBQ3pCLE1BQU1DLFlBQVksT0FBT0YsWUFBWSxhQUFhQSxRQUFRSixTQUFTSTtRQUNuRSxJQUFJLENBQUNHLE9BQU9DLEVBQUUsQ0FBQ0YsV0FBV04sUUFBUTtZQUNoQyxNQUFNUyxnQkFBZ0JUO1lBQ3RCQSxRQUFRLENBQUNLLFdBQVcsT0FBT0EsVUFBVSxPQUFPQyxjQUFjLFlBQVlBLGNBQWMsSUFBRyxJQUFLQSxZQUFZQyxPQUFPRyxNQUFNLENBQUMsQ0FBQyxHQUFHVixPQUFPTTtZQUNqSUwsVUFBVVUsT0FBTyxDQUFDLENBQUNDLFdBQWFBLFNBQVNaLE9BQU9TO1FBQ2xEO0lBQ0Y7SUFDQSxNQUFNSSxXQUFXLElBQU1iO0lBQ3ZCLE1BQU1jLFlBQVksQ0FBQ0Y7UUFDakJYLFVBQVVjLEdBQUcsQ0FBQ0g7UUFDZCxPQUFPLElBQU1YLFVBQVVlLE1BQU0sQ0FBQ0o7SUFDaEM7SUFDQSxNQUFNSyxVQUFVO1FBQ2QsSUFBSSxDQUFDLE1BQWUsR0FBRyxDQUFvQixHQUFHLEtBQUssT0FBTyxjQUFjO1lBQ3RFRyxRQUFRQyxJQUFJLENBQ1Y7UUFFSjtRQUNBcEIsVUFBVXFCLEtBQUs7SUFDakI7SUFDQSxNQUFNQyxNQUFNO1FBQUVwQjtRQUFVVTtRQUFVQztRQUFXRztJQUFRO0lBQ3JEakIsUUFBUUQsWUFBWUksVUFBVVUsVUFBVVU7SUFDeEMsT0FBT0E7QUFDVDtBQUNBLE1BQU1DLGNBQWMsQ0FBQ3pCLGNBQWdCQSxjQUFjRCxnQkFBZ0JDLGVBQWVEO0FBQ2xGLElBQUkyQixVQUFVLENBQUMxQjtJQUNiLElBQUksQ0FBQyxNQUFlLEdBQUcsQ0FBb0IsR0FBRyxLQUFLLE9BQU8sY0FBYztRQUN0RXFCLFFBQVFDLElBQUksQ0FDVjtJQUVKO0lBQ0EsT0FBT0csWUFBWXpCO0FBQ3JCO0FBRTJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JpbmdvLXBhaXNhLWFkdmVudHVyZXMvLi9ub2RlX21vZHVsZXMvenVzdGFuZC9lc20vdmFuaWxsYS5tanM/OWQ5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVTdG9yZUltcGwgPSAoY3JlYXRlU3RhdGUpID0+IHtcbiAgbGV0IHN0YXRlO1xuICBjb25zdCBsaXN0ZW5lcnMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICBjb25zdCBzZXRTdGF0ZSA9IChwYXJ0aWFsLCByZXBsYWNlKSA9PiB7XG4gICAgY29uc3QgbmV4dFN0YXRlID0gdHlwZW9mIHBhcnRpYWwgPT09IFwiZnVuY3Rpb25cIiA/IHBhcnRpYWwoc3RhdGUpIDogcGFydGlhbDtcbiAgICBpZiAoIU9iamVjdC5pcyhuZXh0U3RhdGUsIHN0YXRlKSkge1xuICAgICAgY29uc3QgcHJldmlvdXNTdGF0ZSA9IHN0YXRlO1xuICAgICAgc3RhdGUgPSAocmVwbGFjZSAhPSBudWxsID8gcmVwbGFjZSA6IHR5cGVvZiBuZXh0U3RhdGUgIT09IFwib2JqZWN0XCIgfHwgbmV4dFN0YXRlID09PSBudWxsKSA/IG5leHRTdGF0ZSA6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXh0U3RhdGUpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihzdGF0ZSwgcHJldmlvdXNTdGF0ZSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZTtcbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICB9O1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4ge1xuICAgIGlmICgoaW1wb3J0Lm1ldGEuZW52ID8gaW1wb3J0Lm1ldGEuZW52Lk1PREUgOiB2b2lkIDApICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBcIltERVBSRUNBVEVEXSBUaGUgYGRlc3Ryb3lgIG1ldGhvZCB3aWxsIGJlIHVuc3VwcG9ydGVkIGluIGEgZnV0dXJlIHZlcnNpb24uIEluc3RlYWQgdXNlIHVuc3Vic2NyaWJlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IHN1YnNjcmliZS4gRXZlcnl0aGluZyB3aWxsIGJlIGdhcmJhZ2UtY29sbGVjdGVkIGlmIHN0b3JlIGlzIGdhcmJhZ2UtY29sbGVjdGVkLlwiXG4gICAgICApO1xuICAgIH1cbiAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgfTtcbiAgY29uc3QgYXBpID0geyBzZXRTdGF0ZSwgZ2V0U3RhdGUsIHN1YnNjcmliZSwgZGVzdHJveSB9O1xuICBzdGF0ZSA9IGNyZWF0ZVN0YXRlKHNldFN0YXRlLCBnZXRTdGF0ZSwgYXBpKTtcbiAgcmV0dXJuIGFwaTtcbn07XG5jb25zdCBjcmVhdGVTdG9yZSA9IChjcmVhdGVTdGF0ZSkgPT4gY3JlYXRlU3RhdGUgPyBjcmVhdGVTdG9yZUltcGwoY3JlYXRlU3RhdGUpIDogY3JlYXRlU3RvcmVJbXBsO1xudmFyIHZhbmlsbGEgPSAoY3JlYXRlU3RhdGUpID0+IHtcbiAgaWYgKChpbXBvcnQubWV0YS5lbnYgPyBpbXBvcnQubWV0YS5lbnYuTU9ERSA6IHZvaWQgMCkgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgXCJbREVQUkVDQVRFRF0gRGVmYXVsdCBleHBvcnQgaXMgZGVwcmVjYXRlZC4gSW5zdGVhZCB1c2UgaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd6dXN0YW5kL3ZhbmlsbGEnLlwiXG4gICAgKTtcbiAgfVxuICByZXR1cm4gY3JlYXRlU3RvcmUoY3JlYXRlU3RhdGUpO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIHZhbmlsbGEgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlSW1wbCIsImNyZWF0ZVN0YXRlIiwic3RhdGUiLCJsaXN0ZW5lcnMiLCJTZXQiLCJzZXRTdGF0ZSIsInBhcnRpYWwiLCJyZXBsYWNlIiwibmV4dFN0YXRlIiwiT2JqZWN0IiwiaXMiLCJwcmV2aW91c1N0YXRlIiwiYXNzaWduIiwiZm9yRWFjaCIsImxpc3RlbmVyIiwiZ2V0U3RhdGUiLCJzdWJzY3JpYmUiLCJhZGQiLCJkZWxldGUiLCJkZXN0cm95IiwiZW52IiwiTU9ERSIsImNvbnNvbGUiLCJ3YXJuIiwiY2xlYXIiLCJhcGkiLCJjcmVhdGVTdG9yZSIsInZhbmlsbGEiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/zustand/esm/vanilla.mjs\n");

/***/ })

};
;