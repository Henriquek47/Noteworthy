/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/nav/script/dropdown.js":
/*!***********************************************!*\
  !*** ./src/components/nav/script/dropdown.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toggleDropdown),\n/* harmony export */   toggleDropdownMenu: () => (/* binding */ toggleDropdownMenu)\n/* harmony export */ });\nfunction toggleDropdown() {\r\n  const dropdownLinks = document.querySelectorAll(\".dropdown-link\");\r\n  if (dropdownLinks.length > 0) {\r\n    dropdownLinks.forEach(link => {\r\n      link.addEventListener(\"click\", function (event) {\r\n        event.preventDefault(); // Evita que o link redirecione\r\n        var dropdownContent = document.getElementById(\"categorias-dropdown\");\r\n\r\n        if (dropdownContent.classList.contains(\"show\")) {\r\n          dropdownContent.classList.remove(\"show\");\r\n        } else {\r\n          dropdownContent.classList.add(\"show\");\r\n        }\r\n      });\r\n    });\r\n  }\r\n}\r\n\r\nfunction toggleDropdownMenu() {\r\n  const dropdownMenu = document.querySelectorAll(\".menu\");\r\n  const icon = document.querySelector(\".search-box img\");\r\n  const searchBox = document.querySelector(\".search-box input\");\r\n  if (dropdownMenu.length > 0) {\r\n    dropdownMenu.forEach(link => {\r\n      link.addEventListener(\"click\", function (event) {\r\n        event.preventDefault(); // Evita que o link redirecione\r\n        var dropdownContent = document.getElementById(\"menu-list\");\r\n\r\n        if (dropdownContent.classList.contains(\"show\")) {\r\n          dropdownContent.classList.remove(\"show\");\r\n        } else {\r\n            if (!searchBox.classList.contains(\"expanded\")) {\r\n              dropdownContent.classList.add(\"show\");\r\n            }\r\n        }\r\n        icon.addEventListener('click', function (event) {\r\n          dropdownContent.classList.remove(\"show\");\r\n          event.stopPropagation(); // Previne a propagação do evento\r\n        });\r\n      });\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/components/nav/script/dropdown.js?");

/***/ }),

/***/ "./src/components/nav/script/expanded-search.js":
/*!******************************************************!*\
  !*** ./src/components/nav/script/expanded-search.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ expandedSearch)\n/* harmony export */ });\nfunction expandedSearch() {\r\n    const searchBox = document.querySelectorAll(\".search-box\");\r\n    if (searchBox.length > 0) {\r\n        searchBox.forEach(link => {\r\n            link.addEventListener(\"click\", function (event) {\r\n                event.preventDefault(); // Evita que o link redirecione\r\n                const searchBox = document.querySelector(\".search-box input\");\r\n                const icon = document.querySelector(\".search-box img\");\r\n                const optionsList = document.querySelector(\".options-list\");\r\n\r\n                // Função para expandir ou contrair a caixa de pesquisa\r\n                icon.addEventListener('click', function (event) {\r\n\r\n                    if (searchBox.classList.contains(\"expanded\")) {\r\n                        event.stopPropagation();\r\n                        return;\r\n                    }\r\n                    console.log('teste');\r\n                    optionsList.classList.add(\"hidden\");\r\n                    searchBox.classList.add(\"expanded\");\r\n                    event.stopPropagation(); // Previne a propagação do evento\r\n                });\r\n\r\n\r\n                searchBox.addEventListener('click', function (event) {\r\n                    event.stopPropagation(); // Previne a propagação do evento\r\n                });\r\n\r\n                document.addEventListener('click', function () {\r\n                    searchBox.classList.remove(\"expanded\");\r\n                    searchBox.addEventListener('transitionend', function () {\r\n                        if (!searchBox.classList.contains(\"expanded\")) {\r\n                            optionsList.classList.remove(\"hidden\");\r\n                        }\r\n                    }, { once: true }); // O manipulador de eventos será removido automaticamente depois de ser chamado uma vez\r\n                });\r\n            });\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://frontend/./src/components/nav/script/expanded-search.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_nav_script_dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav/script/dropdown.js */ \"./src/components/nav/script/dropdown.js\");\n/* harmony import */ var _components_nav_script_expanded_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav/script/expanded-search.js */ \"./src/components/nav/script/expanded-search.js\");\n\r\n\r\n\r\nclass Index {\r\n    constructor() {\r\n        this.loadNavBar('nav-bar', 'nav')\r\n        this.loadControllerForCurrentPage();\r\n    }\r\n\r\n\r\n    authVerify(pageName) {\r\n        const isLoggin = true;\r\n        console.log(pageName !== 'categories' && pageName !== 'home' && isLoggin === false  )\r\n        if (pageName !== 'categories' && pageName !== 'home' && isLoggin === false) {\r\n            window.location.href = '/frontend/src/views/home/html/home.html';\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    async loadControllerForCurrentPage() {\r\n        // Pegue o nome do controlador do atributo data-controller no elemento body\r\n        let controllerName = document.body.dataset.controller;\r\n\r\n        if(controllerName){\r\n            const check = this.authVerify(controllerName);\r\n            if(check){\r\n                await this.loadController(controllerName);\r\n            }\r\n        } else {\r\n            console.error(`Não foi possível encontrar o nome do controlador na página atual.`);\r\n        }\r\n    }\r\n\r\n\r\n    async loadController(pageName) {\r\n        // Nota: Estamos retornando a promessa aqui\r\n        try {\r\n            const module = await __webpack_require__(\"./src/views lazy recursive ^\\\\.\\\\/.*\\\\/script\\\\/.*_controller\\\\.js$\")(`./${pageName}/script/${pageName}_controller.js`);\r\n            // Cria uma nova instância do controlador\r\n            this[`${pageName}Controller`] = new module[`${pageName.charAt(0).toUpperCase() + pageName.slice(1)}Controller`]();\r\n            return this[`${pageName}Controller`].init();\r\n        } catch (err) {\r\n            console.error(`Erro ao carregar o controlador ${pageName}: `, err);\r\n        }\r\n    }\r\n\r\n\r\n    async loadNavBar(componentName, pathName) {\r\n        const componentsPath = \"../../../components\";\r\n    \r\n        this.loadStylesheet(componentsPath, pathName, componentName);\r\n        await this.loadHTML(componentsPath, pathName, componentName);\r\n        \r\n        (0,_components_nav_script_dropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n        (0,_components_nav_script_dropdown_js__WEBPACK_IMPORTED_MODULE_0__.toggleDropdownMenu)();\r\n        (0,_components_nav_script_expanded_search_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n    \r\n    loadStylesheet(componentsPath, pathName, componentName) {\r\n        var link = document.createElement(\"link\");\r\n        link.rel = \"stylesheet\";\r\n        link.href = `${componentsPath}/${pathName}/style/${componentName}.css`;\r\n        document.head.appendChild(link);\r\n    }\r\n    \r\n    async loadHTML(componentsPath, pathName, componentName) {\r\n        try {\r\n            const response = await fetch(`${componentsPath}/${pathName}/html/${componentName}.html`);\r\n            if (response.status !== 200) {\r\n                throw new Error(`${response.status}: ${response.statusText}`);\r\n            }\r\n            const html = await response.text();\r\n            document.getElementById(componentName).innerHTML = html;\r\n        } catch (err) {\r\n            console.error(`Erro ao carregar HTML do componente ${componentName}: `, err);\r\n        }\r\n    }\r\n    \r\n\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    new Index();\r\n});\r\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/views lazy recursive ^\\.\\/.*\\/script\\/.*_controller\\.js$":
/*!******************************************************************************!*\
  !*** ./src/views/ lazy ^\.\/.*\/script\/.*_controller\.js$ namespace object ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var map = {\n\t\"./details/script/details_controller.js\": [\n\t\t\"./src/views/details/script/details_controller.js\",\n\t\t\"src_views_details_script_details_controller_js\"\n\t],\n\t\"./favorite/script/favorite_controller.js\": [\n\t\t\"./src/views/favorite/script/favorite_controller.js\",\n\t\t\"src_views_favorite_script_favorite_controller_js\"\n\t],\n\t\"./home/script/home_controller.js\": [\n\t\t\"./src/views/home/script/home_controller.js\",\n\t\t\"src_views_home_script_home_controller_js\"\n\t],\n\t\"./payment/script/payment_controller.js\": [\n\t\t\"./src/views/payment/script/payment_controller.js\",\n\t\t\"src_views_payment_script_payment_controller_js\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn __webpack_require__.e(ids[1]).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/views lazy recursive ^\\\\.\\\\/.*\\\\/script\\\\/.*_controller\\\\.js$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://frontend/./src/views/_lazy_^\\.\\/.*\\/script\\/.*_controller\\.js$_namespace_object?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "frontend:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
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