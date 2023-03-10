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

/***/ "../../../Module \u0000#2/To Do List Repository/To-Do-List/src/index.js":
/*!*************************************************************************!*\
  !*** ../../../Module  #2/To Do List Repository/To-Do-List/src/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toDoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoList.js */ \"../../../Module \\u0000#2/To Do List Repository/To-Do-List/src/toDoList.js\");\n/* harmony import */ var _removeCheckbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeCheckbox.js */ \"../../../Module \\u0000#2/To Do List Repository/To-Do-List/src/removeCheckbox.js\");\n\r\n\r\n\r\nconst toDoList = new _toDoList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst removeCheckboxObject = new _removeCheckbox_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](toDoList);\r\n\r\ndocument.addEventListener('keyup', (event) => {\r\n  const inputField = document.getElementById('input-field');\r\n  if (event.code === 'Enter' && document.activeElement === inputField) {\r\n    toDoList.addTask(inputField.value);\r\n    toDoList.populateList();\r\n    inputField.value = '';\r\n  }\r\n});\r\n\r\nconst clearButton = document.getElementById('clear-button');\r\nclearButton.addEventListener('click', () => {\r\n  removeCheckboxObject.removeCompletedTasks();\r\n});\n\n//# sourceURL=webpack://to-do-list/../../../Module_%00#2/To_Do_List_Repository/To-Do-List/src/index.js?");

/***/ }),

/***/ "../../../Module \u0000#2/To Do List Repository/To-Do-List/src/removeCheckbox.js":
/*!**********************************************************************************!*\
  !*** ../../../Module  #2/To Do List Repository/To-Do-List/src/removeCheckbox.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ removeCheckbox)\n/* harmony export */ });\nclass removeCheckbox {\r\n  constructor(toDoList) {\r\n    this.toDoList = toDoList;\r\n  }\r\n\r\n  removeCompletedTasks() {\r\n    const listItems = document.querySelectorAll('li');\r\n    const completedTasks = [];\r\n    for (let i = 0; i < listItems.length; i += 1) {\r\n      const checkbox = listItems[i].querySelector('.checkbox');\r\n      if (checkbox.checked) {\r\n        completedTasks.push(i);\r\n        listItems[i].remove();\r\n      }\r\n    }\r\n    this.toDoList.tasks = (\r\n      this.toDoList.tasks.filter((task, index) => !completedTasks.includes(index))\r\n    );\r\n    for (let i = 0; i < this.toDoList.tasks.length; i += 1) {\r\n      this.toDoList.tasks[i].index = i + 1;\r\n    }\r\n    localStorage.setItem('tasks', JSON.stringify(this.toDoList.tasks));\r\n    this.toDoList.populateList();\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/../../../Module_%00#2/To_Do_List_Repository/To-Do-List/src/removeCheckbox.js?");

/***/ }),

/***/ "../../../Module \u0000#2/To Do List Repository/To-Do-List/src/toDoList.js":
/*!****************************************************************************!*\
  !*** ../../../Module  #2/To Do List Repository/To-Do-List/src/toDoList.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDoList)\n/* harmony export */ });\nclass ToDoList {\r\n  constructor() {\r\n    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];\r\n    this.listContainer = document.getElementById('list-container');\r\n    this.list = this.listContainer.querySelector('ul') || document.createElement('ul');\r\n    this.listContainer.appendChild(this.list);\r\n    this.populateList();\r\n  }\r\n\r\n  addTask(description) {\r\n    const task = {\r\n      description,\r\n      completed: false,\r\n      index: this.tasks.length + 1,\r\n    };\r\n    this.tasks.push(task);\r\n    localStorage.setItem('tasks', JSON.stringify(this.tasks));\r\n    this.populateList();\r\n  }\r\n\r\n  removeTask(index) {\r\n    this.tasks.splice(index, 1);\r\n    for (let i = index; i < this.tasks.length; i += 1) {\r\n      this.tasks[i].index = i + 1;\r\n    }\r\n    localStorage.setItem('tasks', JSON.stringify(this.tasks));\r\n    this.populateList();\r\n  }\r\n\r\n  editTask(index, newDescription) {\r\n    if (index < this.tasks.length) {\r\n      this.tasks[index].description = newDescription;\r\n      localStorage.setItem('tasks', JSON.stringify(this.tasks));\r\n      this.populateList();\r\n    }\r\n  }\r\n\r\n  populateList() {\r\n    this.list.innerHTML = '';\r\n    for (let i = 1; i <= this.tasks.length; i += 1) {\r\n      const task = this.tasks[i - 1];\r\n      const listItem = document.createElement('li');\r\n      listItem.innerHTML = `<input type=\"checkbox\" class=\"checkbox\"></input><p class=\"description\">${task.description}</p><i class=\"fa-regular fa-trash-can\"></i>`;\r\n      listItem.addEventListener('click', (event) => {\r\n        if (event.target.className === 'description') {\r\n          const inputField = document.createElement('input');\r\n          inputField.value = task.description;\r\n          inputField.addEventListener('keyup', (event) => {\r\n            if (event.code === 'Enter') {\r\n              this.editTask(i - 1, inputField.value);\r\n              listItem.innerHTML = `<input type=\"checkbox\" class=\"checkbox\"></input><p class=\"description\">${task.description}</p><i class=\"fa-regular fa-trash-can\"></i>`;\r\n            }\r\n          });\r\n          listItem.innerHTML = '';\r\n          listItem.appendChild(inputField);\r\n          inputField.focus();\r\n        }\r\n      });\r\n      listItem.querySelector('.fa-trash-can').addEventListener('click', () => {\r\n        this.removeTask(i - 1);\r\n      });\r\n      this.list.addEventListener('change', (event) => {\r\n        if (event.target.className === 'checkbox') {\r\n          task.completed = event.target.checked;\r\n        }\r\n      });\r\n      this.list.appendChild(listItem);\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://to-do-list/../../../Module_%00#2/To_Do_List_Repository/To-Do-List/src/toDoList.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../Module \u0000#2/To Do List Repository/To-Do-List/src/index.js");
/******/ 	
/******/ })()
;