/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__calculating_module_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_styles_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_styles_css__);



(function(){

    function createButton(operation, sign){
        let button = document.createElement("button");
        button.classList.add(operation);
        button.innerHTML = sign;
        button.addEventListener("click", clickCallback);
        return button;
    }

    function clickCallback(event) {
        let operation = event.target.className;
        let firstValue  = +document.querySelector(".first-value").value;
        let secondValue = +document.querySelector(".second-value").value;
        Object(__WEBPACK_IMPORTED_MODULE_0__calculating_module_js__["a" /* default */])(firstValue, secondValue, operation);
    }

    let body = document.body;
    let container = document.createElement("div");
    container.classList.add("container")

    let firstInput = document.createElement("input");
    firstInput.classList.add("first-value");
    firstInput.placeholder = "Value";
    container.appendChild(firstInput);

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    buttons.appendChild(createButton("plus", "+"));
    buttons.appendChild(createButton("minus", "-"));
    buttons.appendChild(createButton("multiply", "*"));
    buttons.appendChild(createButton("divide", "÷"));

    container.appendChild(buttons);

    let secondInput = document.createElement("input");
    secondInput.classList.add("second-value");
    secondInput.placeholder = "Value";

    container.appendChild(secondInput);

    body.appendChild(container);
})()


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__output_module_js__ = __webpack_require__(2);


function getSum(a, b) {
    return Math.round((a + b) * 100) / 100;
}
function getDiff(a, b) {
    return Math.round((a - b) * 100) / 100;
}
function getMult(a, b) {
    return Math.round(a * b * 100) / 100;
}
function getDiv(a, b) {
    return Math.round(a / b * 100) / 100;
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, operation) {
    let result;
    switch (operation) {
        case "plus":
        result = getSum(a, b);
        break;
        case "minus":
        result = getDiff(a, b);
        break;
        case "multiply":
        result = getMult(a, b);
        break;
        case "divide":
        result = getDiv(a, b);
        break;
        default:
        result = "Something went wrong";
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__output_module_js__["a" /* default */])(result);
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(result) {

    let output = document.querySelector(".output");
    if(output !== null){
        output.remove();
    }
    output = document.createElement("div");
    output.classList.add("output");
    output.innerHTML = result;
    document.querySelector(".container").append(output);

});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);