/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ourworks",{

/***/ "./src/components/Skills-circle/index.jsx":
/*!************************************************!*\
  !*** ./src/components/Skills-circle/index.jsx ***!
  \************************************************/
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

/***/ "./src/pages/ourworks/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/ourworks/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_About_Us1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/About-Us1 */ \"./src/components/About-Us1/index.jsx\");\n/* harmony import */ var _components_Services1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Services1 */ \"./src/components/Services1/index.jsx\");\n/* harmony import */ var _components_Intro_with_horizontal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Intro-with-horizontal */ \"./src/components/Intro-with-horizontal/index.jsx\");\n/* harmony import */ var _layouts_light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/light */ \"./src/layouts/light.jsx\");\n/* harmony import */ var _components_Portfolio1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Portfolio1 */ \"./src/components/Portfolio1/index.jsx\");\n/* harmony import */ var _components_Skills_circle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Skills-circle */ \"./src/components/Skills-circle/index.jsx\");\n/* harmony import */ var _components_Skills_circle__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_Skills_circle__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Testimonials1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Testimonials1 */ \"./src/components/Testimonials1/index.jsx\");\n/* harmony import */ var _components_Team1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Team1 */ \"./src/components/Team1/index.jsx\");\n/* harmony import */ var _components_Blogs1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Blogs1 */ \"./src/components/Blogs1/index.jsx\");\n/* harmony import */ var _components_Contact__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Contact */ \"./src/components/Contact/index.jsx\");\n/* harmony import */ var _components_Brands__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Brands */ \"./src/components/Brands/index.jsx\");\n/* harmony import */ var _components_About_Us2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/About-Us2 */ \"./src/components/About-Us2/index.jsx\");\n/* harmony import */ var _components_Work_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Work-header */ \"./src/components/Work-header/index.jsx\");\n/* harmony import */ var _components_Work_Four_Column__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/Work-Four-Column */ \"./src/components/Work-Four-Column/index.jsx\");\n/* harmony import */ var _components_Page_header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/Page-header */ \"./src/components/Page-header/index.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n/* eslint-disable @next/next/no-img-element */ \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar ourworks = function() {\n    // React.useEffect(() => {\n    //   document.querySelector(\"body\").classList.add(\"homepage\");\n    // }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_light__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        footerClass: \"mt-30\",\n        __source: {\n            fileName: \"D:\\\\next 36\\\\src\\\\pages\\\\ourworks\\\\index.jsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Page_header__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {\n                title: \"Our Works\",\n                fullPath: [],\n                image: \"/assets/img/Architectures/ourworks.jpg\",\n                __source: {\n                    fileName: \"D:\\\\next 36\\\\src\\\\pages\\\\ourworks\\\\index.jsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Blogs1__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                __source: {\n                    fileName: \"D:\\\\next 36\\\\src\\\\pages\\\\ourworks\\\\index.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ourworks);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvb3Vyd29ya3MvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsRUFBOEMsNkNBQ3JCO0FBQ3dCO0FBQ0M7QUFDc0I7QUFDM0I7QUFDTztBQUNLO0FBQ0E7QUFDZjtBQUNFO0FBQ0U7QUFDRjtBQUNLO0FBQ0k7QUFDUztBQUNUOztBQUVyRCxHQUFLLENBQUNnQixRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7SUFDdEIsRUFBMEI7SUFDMUIsRUFBOEQ7SUFDOUQsRUFBVTtJQUNWLE1BQU0sdUVBQ0haLHNEQUFXO1FBQUNhLFdBQVcsRUFBRSxDQUFPOzs7Ozs7OztpRkFDOUJGLGdFQUFVO2dCQUNURyxLQUFLLEVBQUMsQ0FBVztnQkFDakJDLFFBQVEsRUFBRSxDQUFDLENBRVY7Z0JBQ0RDLEtBQUssRUFBQyxDQUF3Qzs7Ozs7Ozs7aUZBTS9DWCwyREFBTTs7Ozs7Ozs7OztBQVdiLENBQUM7QUFFRCwrREFBZU8sUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9vdXJ3b3Jrcy9pbmRleC5qc3g/YjhmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAbmV4dC9uZXh0L25vLWltZy1lbGVtZW50ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFib3V0VXMxIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Fib3V0LVVzMVwiO1xyXG5pbXBvcnQgU2VydmljZXMxIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlcnZpY2VzMVwiO1xyXG5pbXBvcnQgSW50cm9XaXRoSG9yaXpvbnRhbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9JbnRyby13aXRoLWhvcml6b250YWxcIjtcclxuaW1wb3J0IExpZ2h0TGF5b3V0IGZyb20gXCIuLi8uLi9sYXlvdXRzL2xpZ2h0XCI7XHJcbmltcG9ydCBQb3J0Zm9saW8xIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BvcnRmb2xpbzFcIjtcclxuaW1wb3J0IFNraWxsc0NpcmNsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Ta2lsbHMtY2lyY2xlXCI7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVzdGltb25pYWxzMVwiO1xyXG5pbXBvcnQgVGVhbTEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGVhbTFcIjtcclxuaW1wb3J0IEJsb2dzMSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CbG9nczFcIjtcclxuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFjdFwiO1xyXG5pbXBvcnQgQnJhbmRzIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0JyYW5kc1wiO1xyXG5pbXBvcnQgQWJvdXRVczIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWJvdXQtVXMyXCI7XHJcbmltcG9ydCBXb3JrSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1dvcmstaGVhZGVyXCI7XHJcbmltcG9ydCBXb3JrRm91ckNvbHVtbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Xb3JrLUZvdXItQ29sdW1uXCI7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2UtaGVhZGVyXCI7XHJcblxyXG5jb25zdCBvdXJ3b3JrcyA9ICgpID0+IHtcclxuICAvLyBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LmFkZChcImhvbWVwYWdlXCIpO1xyXG4gIC8vIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPExpZ2h0TGF5b3V0IGZvb3RlckNsYXNzPXtcIm10LTMwXCJ9PlxyXG4gICAgICA8UGFnZUhlYWRlclxyXG4gICAgICAgIHRpdGxlPVwiT3VyIFdvcmtzXCJcclxuICAgICAgICBmdWxsUGF0aD17W1xyXG4gICAgICAgICBcclxuICAgICAgICBdfVxyXG4gICAgICAgIGltYWdlPVwiL2Fzc2V0cy9pbWcvQXJjaGl0ZWN0dXJlcy9vdXJ3b3Jrcy5qcGdcIlxyXG4gICAgICAvPlxyXG4gICAgICB7LyogPEludHJvV2l0aEhvcml6b250YWwgLz4gKi99XHJcbiAgICAgIFxyXG4gICAgICB7LyogPEFib3V0VXMxIC8+ICovfVxyXG4gICAgICB7LyogPEFib3V0VXMyLz4gKi99XHJcbiAgICAgIDxCbG9nczEgLz5cclxuICAgICAgey8qIDxTZXJ2aWNlczEgLz4gKi99XHJcbiAgICAgIHsvKiA8UG9ydGZvbGlvMSAvPiAqL31cclxuICAgICAgey8qIDxTa2lsbHNDaXJjbGUgLz4gKi99XHJcbiAgICAgIHsvKiA8QnJhbmRzLz4gKi99XHJcbiAgICAgIHsvKiA8VGVzdGltb25pYWxzIC8+ICovfVxyXG4gICAgICB7LyogPFRlYW0xIC8+ICovfVxyXG57LyogPFdvcmtGb3VyQ29sdW1uLz4gKi99XHJcbiAgICAgIHsvKiA8Q29udGFjdCAvPiAqL31cclxuICAgIDwvTGlnaHRMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG91cndvcmtzO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBYm91dFVzMSIsIlNlcnZpY2VzMSIsIkludHJvV2l0aEhvcml6b250YWwiLCJMaWdodExheW91dCIsIlBvcnRmb2xpbzEiLCJTa2lsbHNDaXJjbGUiLCJUZXN0aW1vbmlhbHMiLCJUZWFtMSIsIkJsb2dzMSIsIkNvbnRhY3QiLCJCcmFuZHMiLCJBYm91dFVzMiIsIldvcmtIZWFkZXIiLCJXb3JrRm91ckNvbHVtbiIsIlBhZ2VIZWFkZXIiLCJvdXJ3b3JrcyIsImZvb3RlckNsYXNzIiwidGl0bGUiLCJmdWxsUGF0aCIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/ourworks/index.jsx\n");

/***/ })

});