"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_views_details_script_details_controller_js"],{

/***/ "./src/views/details/script/details_controller.js":
/*!********************************************************!*\
  !*** ./src/views/details/script/details_controller.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DetailsController: () => (/* binding */ DetailsController)\n/* harmony export */ });\nclass DetailsController {\r\n\r\n    async loadPosts(){\r\n        const posts = await this.apiPosts.getData();\r\n        posts.forEach(async post => {\r\n            createPost(post);\r\n        });\r\n    }\r\n\r\n    init(callback) {\r\n        this.handlePayment();\r\n        this.loadPosts();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/views/details/script/details_controller.js?");

/***/ })

}]);