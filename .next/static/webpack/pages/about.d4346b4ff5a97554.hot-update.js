/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./src/components/Footer/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.jsx ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/layouts/main.jsx":
/*!******************************!*\
  !*** ./src/layouts/main.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"./src/components/Navbar/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer/index.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Footer__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-css-tags */ \n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar MainLayout = function(param) {\n    var children = param.children, logoClassText = param.logoClassText;\n    _s();\n    var navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        var navbar = navbarRef.current, logo = logoRef.current;\n        if (window.pageYOffset > 300) {\n            navbar.classList.add(\"nav-scroll\");\n        } else {\n            navbar.classList.remove(\"nav-scroll\");\n        }\n        window.addEventListener(\"scroll\", function() {\n            if (window.pageYOffset > 300) {\n                navbar.classList.add(\"nav-scroll\");\n                logo.setAttribute(\"src\", \"/assets/img/Architectures/alogo.png\");\n            } else {\n                navbar.classList.remove(\"nav-scroll\");\n                logo.setAttribute(\"src\", \"/assets/img/Architectures/alogo.png\");\n            }\n        });\n    }, [\n        navbarRef\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                __source: {\n                    fileName: \"D:\\\\next 36\\\\src\\\\layouts\\\\main.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"/assets/css/style.css\",\n                    __source: {\n                        fileName: \"D:\\\\next 36\\\\src\\\\layouts\\\\main.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    },\n                    __self: _this\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                navbarRef: navbarRef,\n                logoRef: logoRef,\n                logoClass: logoClassText,\n                __source: {\n                    fileName: \"D:\\\\next 36\\\\src\\\\layouts\\\\main.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            children,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((_components_Footer__WEBPACK_IMPORTED_MODULE_3___default()), {\n                __source: {\n                    fileName: \"D:\\\\next 36\\\\src\\\\layouts\\\\main.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s(MainLayout, \"NJv/rvX5fPwWhnPtkwq0tuwt7xI=\");\n_c = MainLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainLayout);\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9tYWluLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxFQUEyQywwQ0FDbEI7QUFDZ0I7QUFDQTtBQUNiOzs7QUFFNUIsR0FBSyxDQUFDSSxVQUFVLEdBQUcsUUFBUSxRQUF5QixDQUFDO1FBQS9CQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsYUFBYSxTQUFiQSxhQUFhOztJQUMzQyxHQUFLLENBQUNDLFNBQVMsR0FBR1AsbURBQVksQ0FBQyxJQUFJO0lBQ25DLEdBQUssQ0FBQ1MsT0FBTyxHQUFHVCxtREFBWSxDQUFDLElBQUk7SUFFakNBLHNEQUFlLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDckIsR0FBRyxDQUFDVyxNQUFNLEdBQUdKLFNBQVMsQ0FBQ0ssT0FBTyxFQUM1QkMsSUFBSSxHQUFHSixPQUFPLENBQUNHLE9BQU87UUFDeEIsRUFBRSxFQUFFRSxNQUFNLENBQUNDLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUM3QkosTUFBTSxDQUFDSyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFZO1FBQ25DLENBQUMsTUFBTSxDQUFDO1lBQ05OLE1BQU0sQ0FBQ0ssU0FBUyxDQUFDRSxNQUFNLENBQUMsQ0FBWTtRQUN0QyxDQUFDO1FBQ0RKLE1BQU0sQ0FBQ0ssZ0JBQWdCLENBQUMsQ0FBUSxTQUFFLFFBQVEsR0FBRixDQUFDO1lBQ3ZDLEVBQUUsRUFBRUwsTUFBTSxDQUFDQyxXQUFXLEdBQUcsR0FBRyxFQUFFLENBQUM7Z0JBQzdCSixNQUFNLENBQUNLLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLENBQVk7Z0JBQ2pDSixJQUFJLENBQUNPLFlBQVksQ0FBQyxDQUFLLE1BQUUsQ0FBcUM7WUFDaEUsQ0FBQyxNQUFNLENBQUM7Z0JBQ05ULE1BQU0sQ0FBQ0ssU0FBUyxDQUFDRSxNQUFNLENBQUMsQ0FBWTtnQkFDcENMLElBQUksQ0FBQ08sWUFBWSxDQUFDLENBQUssTUFBRSxDQUFxQztZQUNoRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDYjtRQUFBQSxTQUFTO0lBQUEsQ0FBQztJQUNkLE1BQU07O2lGQUVESixrREFBSTs7Ozs7OzsrRkFDRmtCLENBQUk7b0JBQUNDLEdBQUcsRUFBQyxDQUFZO29CQUFDQyxJQUFJLEVBQUMsQ0FBdUI7Ozs7Ozs7OztpRkFFcER0QiwwREFBTTtnQkFDTE0sU0FBUyxFQUFFQSxTQUFTO2dCQUNwQkUsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQmUsU0FBUyxFQUFFbEIsYUFBYTs7Ozs7Ozs7WUFFekJELFFBQVE7aUZBQ1JILDJEQUFNOzs7Ozs7Ozs7O0FBR2IsQ0FBQztHQXBDS0UsVUFBVTtLQUFWQSxVQUFVO0FBc0NoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL21haW4uanN4PzRjYTgiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgQG5leHQvbmV4dC9uby1jc3MtdGFncyAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IE1haW5MYXlvdXQgPSAoeyBjaGlsZHJlbiwgbG9nb0NsYXNzVGV4dCB9KSA9PiB7XHJcbiAgY29uc3QgbmF2YmFyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQsXHJcbiAgICAgIGxvZ28gPSBsb2dvUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgICBsb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9hc3NldHMvaW1nL0FyY2hpdGVjdHVyZXMvYWxvZ28ucG5nXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwibmF2LXNjcm9sbFwiKTtcclxuICAgICAgICBsb2dvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi9hc3NldHMvaW1nL0FyY2hpdGVjdHVyZXMvYWxvZ28ucG5nXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbbmF2YmFyUmVmXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TmF2YmFyXHJcbiAgICAgICAgbmF2YmFyUmVmPXtuYXZiYXJSZWZ9XHJcbiAgICAgICAgbG9nb1JlZj17bG9nb1JlZn1cclxuICAgICAgICBsb2dvQ2xhc3M9e2xvZ29DbGFzc1RleHR9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIkZvb3RlciIsIkhlYWQiLCJNYWluTGF5b3V0IiwiY2hpbGRyZW4iLCJsb2dvQ2xhc3NUZXh0IiwibmF2YmFyUmVmIiwidXNlUmVmIiwibG9nb1JlZiIsInVzZUVmZmVjdCIsIm5hdmJhciIsImN1cnJlbnQiLCJsb2dvIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0QXR0cmlidXRlIiwibGluayIsInJlbCIsImhyZWYiLCJsb2dvQ2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/main.jsx\n");

/***/ })

});