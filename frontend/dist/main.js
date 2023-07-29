/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/nav/script/dropdown.js":
/*!***********************************************!*\
  !*** ./src/components/nav/script/dropdown.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleDropdown)\n/* harmony export */ });\nfunction toggleDropdown() {\r\n  var dropdownContent = document.getElementById(\"categorias-dropdown\");\r\n\r\n  if(dropdownContent.classList.contains(\"show\")) {\r\n    dropdownContent.classList.remove(\"show\");\r\n  } else {\r\n    dropdownContent.classList.add(\"show\");\r\n    console.log('tejadj')\r\n  }\r\n\r\n\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/components/nav/script/dropdown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_nav_script_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav/script/dropdown.js */ \"./src/components/nav/script/dropdown.js\");\n/* harmony import */ var _views_home_script_home_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/home/script/home_controller.js */ \"./src/views/home/script/home_controller.js\");\n\r\n\r\n\r\nclass Index {\r\n    constructor() {\r\n        this.home = new _views_home_script_home_controller_js__WEBPACK_IMPORTED_MODULE_1__.HomeController();\r\n    }\r\n\r\n    initSistem() {\r\n        this.home.init(() => {\r\n            const dropdownLinks = document.querySelectorAll(\".dropdown-link\");\r\n            console.log(dropdownLinks);\r\n            if (dropdownLinks.length > 0) {\r\n                dropdownLinks.forEach(link => {\r\n                    link.addEventListener(\"click\", function (event) {\r\n                        event.preventDefault(); // Evita que o link redirecione\r\n                        console.log(dropdownLinks);\r\n                        (0,_components_nav_script_dropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n                    });\r\n                });\r\n            }\r\n        });\r\n    }\r\n\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const index = new Index();\r\n    index.initSistem();\r\n});\r\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/views/home/script/home_controller.js":
/*!**************************************************!*\
  !*** ./src/views/home/script/home_controller.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeController: () => (/* binding */ HomeController)\n/* harmony export */ });\nclass HomeController {\r\n    loadComponent(componentName, pathName, callback) {\r\n        // Defina a pasta onde estão os componentes\r\n        var componentsPath = \"../../../../src/components\";\r\n\r\n        // Carrega o arquivo de estilo do componente de forma assíncrona usando a tag <link>\r\n        var link = document.createElement(\"link\");\r\n        link.rel = \"stylesheet\";\r\n        link.href = componentsPath + \"/\" + pathName + \"/style/\" + componentName + \".css\";\r\n        document.head.appendChild(link);\r\n\r\n        $(\"#\" + componentName).load(componentsPath + \"/\" + pathName + \"/html/\" + componentName + \".html\", callback);\r\n    }\r\n\r\n    init(callback) {\r\n        this.loadComponent('nav-bar', 'nav', callback);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/views/home/script/home_controller.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;