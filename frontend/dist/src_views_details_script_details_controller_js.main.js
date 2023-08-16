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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DetailsController: () => (/* binding */ DetailsController)\n/* harmony export */ });\n/* harmony import */ var _service_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/data/data */ \"./src/service/data/data.js\");\n/* harmony import */ var _detials_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detials-view */ \"./src/views/details/script/detials-view.js\");\n\r\n\r\n\r\nclass DetailsController {\r\n    constructor() {\r\n        this.apiDetails = new _service_data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost/post\");\r\n    }\r\n\r\n    async loadDetails(){\r\n        const urlParams = new URLSearchParams(window.location.search);\r\n        const postId = urlParams.get('id');\r\n        const details = await this.apiDetails.getData(postId);\r\n        (0,_detials_view__WEBPACK_IMPORTED_MODULE_1__.createDetails)(details);\r\n    }\r\n\r\n    init(callback) {\r\n        this.loadDetails();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/views/details/script/details_controller.js?");

/***/ }),

/***/ "./src/views/details/script/detials-view.js":
/*!**************************************************!*\
  !*** ./src/views/details/script/detials-view.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDetails: () => (/* binding */ createDetails)\n/* harmony export */ });\nfunction createDetails(details) {\r\n    const detailsContainer = document.getElementById('detailsContainer');\r\n    detailsContainer.appendChild(createTemplate(details));\r\n}\r\n\r\n\r\nfunction createTemplate(details) {\r\n    console.log(`${details.title}`)\r\n    const template = document.createElement('template');\r\n    template.innerHTML = `\r\n        <div class=\"container\">\r\n            <div class=\"img-background\">\r\n                <img src=\"http://localhost/post/${details.id}/image\" alt=\"Guitarra\" crossorigin=\"anonymous\">\r\n            </div>\r\n            <div class=\"info-wrapper\">\r\n                <div class=\"info\">\r\n                    <h2>${details.title}</h2>\r\n                    <p id=\"address\">${details.address == null ? 'Endereço não especificado' : details.address.city}</p>\r\n                    <p id=\"announcer-name\"><span>Anunciante:</span> ${details.authorId}</p>\r\n                </div>\r\n                <div class=\"info2\">\r\n                    <h2>R$${details.price}</h2>\r\n                    <button onclick=\"handlePayment()\" class=\"buy\">Comprar</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"description-container\">\r\n                <p class=\"description-title\">Descrição:</p>\r\n                <p class=\"description\">${details.description}</p>\r\n            </div>\r\n            \r\n        </div>`\r\n\r\n    return template.content;\r\n}\n\n//# sourceURL=webpack://frontend/./src/views/details/script/detials-view.js?");

/***/ })

}]);