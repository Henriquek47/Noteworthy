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

/***/ "./src/service/data/data.js":
/*!**********************************!*\
  !*** ./src/service/data/data.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ API)\n/* harmony export */ });\nclass API {\r\n    constructor(url) {\r\n        this.url = url;\r\n    }\r\n\r\n    async getData(pathParameters) {\r\n        try {\r\n            const response = await fetch(`${this.url}${pathParameters != null ? `/${pathParameters}` : ''}`, { headers: {\r\n                \"Content-Type\": \"application/json\"\r\n                // Você pode adicionar mais cabeçalhos aqui, se necessário\r\n            } });\r\n            console.log(response);\r\n            if (!response.ok) {\r\n                throw new Error(`HTTP error! status: ${response.status}`);\r\n            }\r\n            return await response.json();\r\n        } catch (err) {\r\n            console.error('Failed to fetch data: ', err);\r\n        }\r\n    }\r\n\r\n    async postData(body) {\r\n        try {\r\n            const response = await fetch(this.url, {\r\n                method: 'POST',\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\"\r\n                    // Você pode adicionar mais cabeçalhos aqui, se necessário\r\n                },\r\n                body: JSON.stringify(body),\r\n            })\r\n            if (!response.ok) {\r\n                throw new Error(`HTTP error! status: ${response.status}`);\r\n            }\r\n            return await response.json();\r\n        } catch (err) {\r\n            console.error('Failed to fetch data: ', err);\r\n            return null;\r\n        }\r\n    }\r\n\r\n    async deleteData(post_id) {\r\n        try {\r\n            const response = await fetch(`${this.url}/${post_id}`, {\r\n                method: 'DELETE',\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\"\r\n                    // Você pode adicionar mais cabeçalhos aqui, se necessário\r\n                },\r\n            })\r\n            if (!response.ok) {\r\n                throw new Error(`HTTP error! status: ${response.status}`);\r\n            }\r\n            return await response.json();\r\n        } catch (err) {\r\n            console.error('Failed to fetch data: ', err);\r\n            return null;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/service/data/data.js?");

/***/ }),

/***/ "./src/views/details/script/details_controller.js":
/*!********************************************************!*\
  !*** ./src/views/details/script/details_controller.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DetailsController: () => (/* binding */ DetailsController)\n/* harmony export */ });\n/* harmony import */ var _service_data_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/data/data */ \"./src/service/data/data.js\");\n\r\n\r\nclass DetailsController {\r\n\r\n    constructor() {\r\n        this.apiDetails = new _service_data_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"http://localhost/post\");\r\n    }\r\n\r\n    async loadDetails() {\r\n        const details = await this.apiDetails.getData(`${post.id}`);\r\n        createDetails(details);        \r\n    }\r\n\r\n    init(callback) {\r\n        this.loadDetails();\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/views/details/script/details_controller.js?");

/***/ })

}]);