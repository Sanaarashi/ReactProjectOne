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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_makeBusiness__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/makeBusiness */ \"./src/parts/makeBusiness.js\");\n\n'use strict';\n\nvar testBusiness = new _parts_makeBusiness__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ntestBusiness.makeBusiness();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parts/employees.js":
/*!********************************!*\
  !*** ./src/parts/employees.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Employees; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Employees =\n/*#__PURE__*/\nfunction () {\n  function Employees(names) {\n    _classCallCheck(this, Employees);\n\n    this.names = names;\n  }\n\n  _createClass(Employees, [{\n    key: \"makeNamesCorrect\",\n    value: function makeNamesCorrect() {\n      this.names = this.names.filter(function (item) {\n        return item != '';\n      }).map(function (item) {\n        return item.toLowerCase().trim();\n      });\n    }\n  }]);\n\n  return Employees;\n}();\n\n\n\n//# sourceURL=webpack:///./src/parts/employees.js?");

/***/ }),

/***/ "./src/parts/makeBusiness.js":
/*!***********************************!*\
  !*** ./src/parts/makeBusiness.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Business; });\n/* harmony import */ var _employees__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees */ \"./src/parts/employees.js\");\n/* harmony import */ var _money__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./money */ \"./src/parts/money.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Business =\n/*#__PURE__*/\nfunction () {\n  function Business() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        _ref$owner = _ref.owner,\n        owner = _ref$owner === void 0 ? 'Sam' : _ref$owner,\n        _ref$CEO = _ref.CEO,\n        CEO = _ref$CEO === void 0 ? 'Victor' : _ref$CEO,\n        money = _ref.money,\n        employees = _ref.employees;\n\n    _classCallCheck(this, Business);\n\n    this.owner = owner;\n    this.CEO = CEO;\n    this.money = money;\n    this.employees = employees;\n  }\n\n  _createClass(Business, [{\n    key: \"makeEmployees\",\n    value: function makeEmployees() {\n      var emp = new _employees__WEBPACK_IMPORTED_MODULE_0__[\"default\"](['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);\n      emp.makeNamesCorrect();\n      this.employees = emp.names;\n    }\n  }, {\n    key: \"makeMoney\",\n    value: function makeMoney() {\n      var someCash = new _money__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n        cash: [40000, 5000, 30400, 12000],\n        eu: ['SRL', 'PLO', 'J&K'],\n        rus: ['RusAuto', 'SBO']\n      });\n      someCash.getMoneyLebowski();\n      this.money = someCash.money;\n\n      var eu = someCash.eu,\n          rus = someCash.rus,\n          _someCash$eu = _slicedToArray(someCash.eu, 1),\n          untrusted = _someCash$eu[0];\n\n      this.sumSponsors = [].concat(_toConsumableArray(eu), _toConsumableArray(rus), ['unexpected sponsor']).join(' ');\n      this.untrusted = untrusted;\n    }\n  }, {\n    key: \"makeBusiness\",\n    value: function makeBusiness() {\n      this.makeEmployees();\n      this.makeMoney();\n      console.log(\"We have a business. Owner: \".concat(this.owner, \", CEO: \").concat(this.CEO, \". Our budget: \").concat(this.money, \". And our employees: \").concat(this.employees));\n      console.log(\"And we have a sponsors: \\n\".concat(this.sumSponsors));\n      console.log(\"Note. Be careful with \".concat(this.untrusted, \". It's a huge risk.\"));\n    }\n  }]);\n\n  return Business;\n}();\n\n\n\n//# sourceURL=webpack:///./src/parts/makeBusiness.js?");

/***/ }),

/***/ "./src/parts/money.js":
/*!****************************!*\
  !*** ./src/parts/money.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sponsors; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Sponsors =\n/*#__PURE__*/\nfunction () {\n  function Sponsors() {\n    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n        cash = _ref.cash,\n        eu = _ref.eu,\n        rus = _ref.rus;\n\n    _classCallCheck(this, Sponsors);\n\n    this.cash = cash;\n    this.eu = eu;\n    this.rus = rus;\n    this.money = 0;\n  }\n\n  _createClass(Sponsors, [{\n    key: \"getMoneyLebowski\",\n    value: function getMoneyLebowski() {\n      this.money = this.cash.reduce(function (a, b) {\n        return a + b;\n      });\n    }\n  }]);\n\n  return Sponsors;\n}();\n\n\n\n//# sourceURL=webpack:///./src/parts/money.js?");

/***/ })

/******/ });