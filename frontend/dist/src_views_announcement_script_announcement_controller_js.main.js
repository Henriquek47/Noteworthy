"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_views_announcement_script_announcement_controller_js"],{

/***/ "./src/views/announcement/script/announcement_controller.js":
/*!******************************************************************!*\
  !*** ./src/views/announcement/script/announcement_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AnnouncementController: () => (/* binding */ AnnouncementController)\n/* harmony export */ });\n/* harmony import */ var _service_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/data/data */ \"./src/service/data/data.js\");\n\r\n\r\nclass AnnouncementController {\r\n    constructor() {\r\n        this.apiPost = new _service_data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost/post\");\r\n        this.apiToken= new _service_data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost/verify-token\");\r\n    }\r\n\r\n    async sendAnnouncement() {\r\n        const self = this;\r\n        document.getElementById('announcement-form').addEventListener('submit', async function (event) {\r\n            event.preventDefault();\r\n            console.log('teste');\r\n            const user = await self.apiToken.getData();\r\n            const produtoElement = document.getElementById('produto').value;\r\n            const descricaoElement = document.getElementById('descricao').value;\r\n            const instrumentoElement = document.getElementById('instrumento').value;\r\n            const precoElement = document.getElementById('preco').value;\r\n            const tipoEnvioElement = document.getElementById('tipo-envio').value;\r\n            await self.apiPost.post({\r\n                'title': produtoElement,\r\n                'pictures': null,\r\n                'description': descricaoElement,\r\n                'authorId': 1,\r\n                'authorName': user['user']['username'],\r\n                'instrument': instrumentoElement,\r\n                'price': precoElement,\r\n                'shipping': tipoEnvioElement,\r\n                'status': true,\r\n            }).then((value) => {\r\n                if(value['message'] === \"Post created successfully!\"){\r\n                    window.location.href = 'http://127.0.0.1:5501/frontend/src/views/home/html/index.html';\r\n                }\r\n            })\r\n            event.preventDefault();\r\n        });\r\n    }\r\n\r\n    async init() {\r\n        await this.sendAnnouncement();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/views/announcement/script/announcement_controller.js?");

/***/ })

}]);