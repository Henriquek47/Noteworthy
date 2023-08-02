"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_views_home_script_home_controller_js"],{

/***/ "./src/views/home/script/home_controller.js":
/*!**************************************************!*\
  !*** ./src/views/home/script/home_controller.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomeController: () => (/* binding */ HomeController)\n/* harmony export */ });\nclass HomeController {\r\n    loadComponent(componentName, pathName, callback) {\r\n        // Defina a pasta onde estão os componentes\r\n        var componentsPath = \"../../../../src/components\";\r\n\r\n        // Carrega o arquivo de estilo do componente de forma assíncrona usando a tag <link>\r\n        var link = document.createElement(\"link\");\r\n        link.rel = \"stylesheet\";\r\n        link.href = componentsPath + \"/\" + pathName + \"/style/\" + componentName + \".css\";\r\n        document.head.appendChild(link);\r\n\r\n        $(\"#\" + componentName).load(componentsPath + \"/\" + pathName + \"/html/\" + componentName + \".html\", callback);\r\n    }\r\n\r\n    init(callback) {\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/views/home/script/home_controller.js?");

/***/ })

}]);