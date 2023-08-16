"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_views_register_script_register_controller_js"],{

/***/ "./src/views/register/script/register_controller.js":
/*!**********************************************************!*\
  !*** ./src/views/register/script/register_controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RegisterController: () => (/* binding */ RegisterController)\n/* harmony export */ });\n/* harmony import */ var _service_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/data/data */ \"./src/service/data/data.js\");\n\r\n\r\nclass RegisterController {\r\n    constructor() {\r\n        this.apiLogin = new _service_data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost/signup\");\r\n    }\r\n\r\n    \r\n    \r\n\r\n    async sendSignUp() {\r\n        const self = this;\r\n        document.getElementById('signup-form').addEventListener('submit', async function (event) {\r\n            event.preventDefault();\r\n            const emailElement = document.getElementById('email').value;\r\n            if (!isValidEmail(emailElement)) {\r\n                alert('Por favor, insira um email válido.');\r\n                return;\r\n            }\r\n            const nomeElement = document.getElementById('nome').value;\r\n            const bairroElement = document.getElementById('bairro').value;\r\n            const ruaElement = document.getElementById('rua').value;\r\n            const estadoElement = document.getElementById('estado').value;\r\n            const numeroElement = document.getElementById('numero').value;\r\n            const senhaElement = document.getElementById('senha').value;\r\n            await self.apiLogin.postData({\r\n                'profilePicture': null,\r\n                'username': nomeElement,\r\n                'email': emailElement,\r\n                'password': senhaElement,\r\n                'address': {\r\n                    'street': ruaElement,\r\n                    'city': senhaElement,\r\n                    'state': estadoElement,\r\n                    'neighborhood': bairroElement,\r\n                    'number': numeroElement,\r\n                    'complement': '',\r\n                },\r\n            }).then((value) => {\r\n                if (value['message'] === \"User created successfully!\") {\r\n                    window.location.href = 'http://127.0.0.1:5501/frontend/src/views/home/html/index.html';\r\n                }\r\n            })\r\n            event.preventDefault();\r\n        });\r\n    }\r\n\r\n    async init() {\r\n        await this.sendSignUp();\r\n    }\r\n}\r\n\r\n\r\nfunction isValidEmail(email) {\r\n    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$/;\r\n    return re.test(email);\r\n}\n\n//# sourceURL=webpack://frontend/./src/views/register/script/register_controller.js?");

/***/ })

}]);