"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_views_payment_script_payment_controller_js"],{

/***/ "./src/models/address-model.js":
/*!*************************************!*\
  !*** ./src/models/address-model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Address)\n/* harmony export */ });\nclass Address {\r\n    constructor(data) {\r\n        this.street = data.street;\r\n      this.city = data.city;\r\n      this.state = data.state;\r\n      this.neighborhood = data.neighborhood;\r\n      this.number = data.number;\r\n      this.complement = data.complement;\r\n    }\r\n  }\n\n//# sourceURL=webpack://frontend/./src/models/address-model.js?");

/***/ }),

/***/ "./src/models/payment-model.js":
/*!*************************************!*\
  !*** ./src/models/payment-model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Payment)\n/* harmony export */ });\nclass Payment {\r\n    constructor(data) {\r\n      this.id = data.id;\r\n      this.fromUserId = data.fromUserId;\r\n      this.toUserId = data.toUserId;\r\n      this.amount = data.amount;\r\n      this.method = data.method;\r\n      this.address = data.address\r\n      this.date = new Date(data.date);\r\n    }\r\n  }\n\n//# sourceURL=webpack://frontend/./src/models/payment-model.js?");

/***/ }),

/***/ "./src/service/data/data.js":
/*!**********************************!*\
  !*** ./src/service/data/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ API)\n/* harmony export */ });\nclass API {\r\n    constructor(url) {\r\n        this.url = url;\r\n    }\r\n\r\n    async getData(pathParameters) {\r\n        try {\r\n            const response = await fetch(`${this.url}${pathParameters != null ? `/${pathParameters}` : ''}`, { headers: {\r\n                \"Content-Type\": \"application/json\"\r\n                // Você pode adicionar mais cabeçalhos aqui, se necessário\r\n            } });\r\n            if (!response.ok) {\r\n                throw new Error(`HTTP error! status: ${response.status}`);\r\n            }\r\n            return await response.json();\r\n        } catch (err) {\r\n            console.error('Failed to fetch data: ', err);\r\n        }\r\n    }\r\n\r\n    async postData(body) {\r\n        try {\r\n            const response = await fetch(this.url, {\r\n                method: 'POST',\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\"\r\n                    // Você pode adicionar mais cabeçalhos aqui, se necessário\r\n                },\r\n                body: JSON.stringify(body),\r\n            })\r\n            if (!response.ok) {\r\n                throw new Error(`HTTP error! status: ${response.status}`);\r\n            }\r\n            return await response.json();\r\n        } catch (err) {\r\n            console.error('Failed to fetch data: ', err);\r\n            return null;\r\n        }\r\n    }\r\n\r\n    async deleteData(post_id) {\r\n        try {\r\n            const response = await fetch(`${this.url}/${post_id}`, {\r\n                method: 'DELETE',\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\"\r\n                    // Você pode adicionar mais cabeçalhos aqui, se necessário\r\n                },\r\n            })\r\n            if (!response.ok) {\r\n                throw new Error(`HTTP error! status: ${response.status}`);\r\n            }\r\n            return await response.json();\r\n        } catch (err) {\r\n            console.error('Failed to fetch data: ', err);\r\n            return null;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/service/data/data.js?");

/***/ }),

/***/ "./src/views/payment/script/payment_controller.js":
/*!********************************************************!*\
  !*** ./src/views/payment/script/payment_controller.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PaymentController: () => (/* binding */ PaymentController)\n/* harmony export */ });\n/* harmony import */ var _models_address_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/address-model */ \"./src/models/address-model.js\");\n/* harmony import */ var _models_payment_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/payment-model */ \"./src/models/payment-model.js\");\n/* harmony import */ var _service_data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/data/data */ \"./src/service/data/data.js\");\n\r\n\r\n\r\n\r\nclass PaymentController {\r\n    constructor() {\r\n        this.apiPayment = new _service_data_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"http://localhost/payment\");\r\n    }\r\n\r\n    async sendAddressDetails() {\r\n        document.getElementById('address-form').addEventListener('submit', async function (event) {\r\n            // Evita que o formulário seja enviado e a página seja recarregada\r\n            event.preventDefault();\r\n            const cityElement = document.getElementById('city').value;\r\n            const neighborhoodElement = document.getElementById('neighborhood').value;\r\n            const streetElement = document.getElementById('street').value;\r\n            const numberElement = document.getElementById('number').value;\r\n            const cepElement = document.getElementById('cep').value;\r\n            const complementElement = document.getElementById('complement').value;\r\n\r\n            const address = new _models_address_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n                cityElement,\r\n                neighborhoodElement,\r\n                streetElement,\r\n                numberElement,\r\n                cepElement,\r\n                complementElement\r\n            );\r\n\r\n            return address;\r\n        });\r\n    }\r\n\r\n    loadComponent(componentName, pathName) {\r\n        // Defina a pasta onde estão os componentes\r\n        var componentsPath = \"../../../../src/components\";\r\n\r\n        // Carrega o arquivo de estilo do componente de forma assíncrona usando a tag <link>\r\n        var link = document.createElement(\"link\");\r\n        link.rel = \"stylesheet\";\r\n        link.href = componentsPath + \"/\" + pathName + \"/style/\" + componentName + \".css\";\r\n        document.head.appendChild(link);\r\n\r\n        $(\"#\" + componentName).load(componentsPath + \"/\" + pathName + \"/html/\" + componentName + \".html\");\r\n    }\r\n\r\n    init() {\r\n        this.sendAddressDetails();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/views/payment/script/payment_controller.js?");

/***/ })

}]);