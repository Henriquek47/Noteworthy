"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_views_login_script_login_controller_js"],{

/***/ "./src/views/login/script/login_controller.js":
/*!****************************************************!*\
  !*** ./src/views/login/script/login_controller.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoginController: () => (/* binding */ LoginController)\n/* harmony export */ });\n/* harmony import */ var _service_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/data/data */ \"./src/service/data/data.js\");\n\r\n\r\nclass LoginController {\r\n    constructor() {\r\n        this.apiLogin = new _service_data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost/login\");\r\n    }\r\n\r\n    async sendSignUp() {\r\n        const self = this;\r\n        document.getElementById('login-form').addEventListener('submit', async function (event) {\r\n            event.preventDefault();\r\n            const emailElement = document.getElementById('email').value;\r\n            const senhaElement = document.getElementById('senha').value;\r\n            await self.apiLogin.postData({\r\n                'email': emailElement,\r\n                'password': senhaElement,\r\n            }).then((value) => {\r\n                if(value['message'] === \"Login successful!\"){\r\n                    window.location.href = 'http://127.0.0.1:5501/frontend/src/views/home/html/index.html';\r\n                }\r\n            })\r\n            event.preventDefault();\r\n        });\r\n    }\r\n\r\n    async init() {\r\n        await this.sendSignUp();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/views/login/script/login_controller.js?");

/***/ })

}]);