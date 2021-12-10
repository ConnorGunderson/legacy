module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/next-seo.config.js":
/*!***********************************!*\
  !*** ./config/next-seo.config.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: 'website',\n  url: 'https://connorgunderson.vercel.app',\n  canonical: \"https://connorgunderson.vercel.app\",\n  title: 'Connor Gunderson',\n  description: \"Connor Gunderson's professional portfolio\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvbmV4dC1zZW8uY29uZmlnLmpzP2M0OGUiXSwibmFtZXMiOlsidHlwZSIsInVybCIsImNhbm9uaWNhbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQWU7QUFDYkEsTUFBSSxFQUFFLFNBRE87QUFFYkMsS0FBRyxFQUFFLG9DQUZRO0FBR2JDLFdBQVMsRUFBRSxvQ0FIRTtBQUliQyxPQUFLLEVBQUUsa0JBSk07QUFLYkMsYUFBVyxFQUFFO0FBTEEsQ0FBZiIsImZpbGUiOiIuL2NvbmZpZy9uZXh0LXNlby5jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIHR5cGU6ICd3ZWJzaXRlJyxcbiAgdXJsOiAnaHR0cHM6Ly9jb25ub3JndW5kZXJzb24udmVyY2VsLmFwcCcsXG4gIGNhbm9uaWNhbDogXCJodHRwczovL2Nvbm5vcmd1bmRlcnNvbi52ZXJjZWwuYXBwXCIsXG4gIHRpdGxlOiAnQ29ubm9yIEd1bmRlcnNvbicsXG4gIGRlc2NyaXB0aW9uOiBcIkNvbm5vciBHdW5kZXJzb24ncyBwcm9mZXNzaW9uYWwgcG9ydGZvbGlvXCIsXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/next-seo.config.js\n");

/***/ }),

/***/ "./lib/email.tsx":
/*!***********************!*\
  !*** ./lib/email.tsx ***!
  \***********************/
/*! exports provided: EmailProvider, useEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EmailProvider\", function() { return EmailProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useEmail\", function() { return useEmail; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emailjs-com */ \"emailjs-com\");\n/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/gundy/Documents/projects/MI-449/MI-449-css-spacing-and-layout/lib/email.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst initialState = {\n  senderName: '',\n  senderEmail: '',\n  subject: '',\n  message: ''\n};\n\nconst reducer = (state, action) => {\n  switch (action.type) {\n    case 'NAME':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        senderName: action.payload\n      });\n\n    case 'EMAIL':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        senderEmail: action.payload\n      });\n\n    case 'SUBJECT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        subject: action.payload\n      });\n\n    case 'MESSAGE':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        message: action.payload\n      });\n\n    case 'RESET':\n      return initialState;\n  }\n};\n\nconst EmailContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])(null);\nconst EmailProvider = ({\n  children\n}) => {\n  const email = useEmailProvider();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(EmailContext.Provider, {\n    value: email,\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, undefined);\n};\nconst useEmail = () => {\n  return Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(EmailContext);\n};\n\nconst useEmailProvider = () => {\n  const {\n    0: state,\n    1: dispatch\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useReducer\"])(reducer, initialState);\n  const {\n    0: success,\n    1: setSuccess\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n\n  const sendEmail = async e => {\n    e.preventDefault();\n    emailjs_com__WEBPACK_IMPORTED_MODULE_2___default.a.send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, _objectSpread({}, state), process.env.NEXT_PUBLIC_EMAIL_USER_ID).then(() => {\n      setSuccess(true);\n    });\n    dispatch({\n      type: 'RESET'\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (success) {\n      setTimeout(() => setSuccess(false), 10000);\n    }\n  }, [success]);\n  const {\n    senderName,\n    senderEmail,\n    subject,\n    message\n  } = state;\n  return {\n    senderName,\n    senderEmail,\n    subject,\n    message,\n    dispatch,\n    sendEmail,\n    success,\n    setSuccess\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZW1haWwudHN4PzcyNDEiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwic2VuZGVyTmFtZSIsInNlbmRlckVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsIkVtYWlsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJFbWFpbFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJlbWFpbCIsInVzZUVtYWlsUHJvdmlkZXIiLCJ1c2VFbWFpbCIsInVzZUNvbnRleHQiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInVzZVN0YXRlIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZW1haWxqcyIsInNlbmQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRU1BSUxfU0VSVklDRV9JRCIsIk5FWFRfUFVCTElDX1RFTVBMQVRFX0lEIiwiTkVYVF9QVUJMSUNfRU1BSUxfVVNFUl9JRCIsInRoZW4iLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsWUFBWSxHQUFHO0FBQ25CQyxZQUFVLEVBQUUsRUFETztBQUVuQkMsYUFBVyxFQUFFLEVBRk07QUFHbkJDLFNBQU8sRUFBRSxFQUhVO0FBSW5CQyxTQUFPLEVBQUU7QUFKVSxDQUFyQjs7QUFPQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssTUFBTDtBQUNFLDZDQUFZRixLQUFaO0FBQW1CTCxrQkFBVSxFQUFFTSxNQUFNLENBQUNFO0FBQXRDOztBQUNGLFNBQUssT0FBTDtBQUNFLDZDQUFZSCxLQUFaO0FBQW1CSixtQkFBVyxFQUFFSyxNQUFNLENBQUNFO0FBQXZDOztBQUNGLFNBQUssU0FBTDtBQUNFLDZDQUFZSCxLQUFaO0FBQW1CSCxlQUFPLEVBQUVJLE1BQU0sQ0FBQ0U7QUFBbkM7O0FBQ0YsU0FBSyxTQUFMO0FBQ0UsNkNBQVlILEtBQVo7QUFBbUJGLGVBQU8sRUFBRUcsTUFBTSxDQUFDRTtBQUFuQzs7QUFDRixTQUFLLE9BQUw7QUFDRSxhQUFPVCxZQUFQO0FBVko7QUFZRCxDQWJEOztBQWVBLE1BQU1VLFlBQVksZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUFsQztBQUVPLE1BQU1DLGFBQWEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUM3QyxRQUFNQyxLQUFLLEdBQUdDLGdCQUFnQixFQUE5QjtBQUNBLHNCQUNFLHFFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQXVCLFNBQUssRUFBRUQsS0FBOUI7QUFBQSxjQUFzQ0Q7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBR0QsQ0FMTTtBQU9BLE1BQU1HLFFBQVEsR0FBRyxNQUFNO0FBQzVCLFNBQU9DLHdEQUFVLENBQUNQLFlBQUQsQ0FBakI7QUFDRCxDQUZNOztBQUlQLE1BQU1LLGdCQUFnQixHQUFHLE1BQU07QUFDN0IsUUFBTTtBQUFBLE9BQUNULEtBQUQ7QUFBQSxPQUFRWTtBQUFSLE1BQW9CQyx3REFBVSxDQUFDZCxPQUFELEVBQVVMLFlBQVYsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ29CLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEtBQUQsQ0FBdEM7O0FBRUEsUUFBTUMsU0FBUyxHQUFHLE1BQU9DLENBQVAsSUFBOEI7QUFDOUNBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxzREFBTyxDQUNKQyxJQURILENBRUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyw0QkFGaEIsRUFHSUYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLHVCQUhoQixvQkFJU3pCLEtBSlQsR0FLSXNCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyx5QkFMaEIsRUFPR0MsSUFQSCxDQU9RLE1BQU07QUFDVlosZ0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRCxLQVRIO0FBVUFILFlBQVEsQ0FBQztBQUFFVixVQUFJLEVBQUU7QUFBUixLQUFELENBQVI7QUFDRCxHQWJEOztBQWVBMEIseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSWQsT0FBSixFQUFhO0FBQ1hlLGdCQUFVLENBQUMsTUFBTWQsVUFBVSxDQUFDLEtBQUQsQ0FBakIsRUFBMEIsS0FBMUIsQ0FBVjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNELE9BQUQsQ0FKTSxDQUFUO0FBTUEsUUFBTTtBQUFFbkIsY0FBRjtBQUFjQyxlQUFkO0FBQTJCQyxXQUEzQjtBQUFvQ0M7QUFBcEMsTUFBZ0RFLEtBQXREO0FBS0EsU0FBTztBQUNMTCxjQURLO0FBRUxDLGVBRks7QUFHTEMsV0FISztBQUlMQyxXQUpLO0FBS0xjLFlBTEs7QUFNTEssYUFOSztBQU9MSCxXQVBLO0FBUUxDO0FBUkssR0FBUDtBQVVELENBeENEIiwiZmlsZSI6Ii4vbGliL2VtYWlsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVtYWlsanMgZnJvbSAnZW1haWxqcy1jb20nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNlbmRlck5hbWU6ICcnLFxuICBzZW5kZXJFbWFpbDogJycsXG4gIHN1YmplY3Q6ICcnLFxuICBtZXNzYWdlOiAnJyxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnTkFNRSc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VuZGVyTmFtZTogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdFTUFJTCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2VuZGVyRW1haWw6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSAnU1VCSkVDVCc6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc3ViamVjdDogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlICdNRVNTQUdFJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBtZXNzYWdlOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgJ1JFU0VUJzpcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gIH1cbn07XG5cbmNvbnN0IEVtYWlsQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmV4cG9ydCBjb25zdCBFbWFpbFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBlbWFpbCA9IHVzZUVtYWlsUHJvdmlkZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8RW1haWxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtlbWFpbH0+e2NoaWxkcmVufTwvRW1haWxDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IHVzZUVtYWlsID0gKCkgPT4ge1xuICByZXR1cm4gdXNlQ29udGV4dChFbWFpbENvbnRleHQpO1xufTtcblxuY29uc3QgdXNlRW1haWxQcm92aWRlciA9ICgpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzZW5kRW1haWwgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGVtYWlsanNcbiAgICAgIC5zZW5kKFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTF9TRVJWSUNFX0lELFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19URU1QTEFURV9JRCxcbiAgICAgICAgeyAuLi5zdGF0ZSB9LFxuICAgICAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19FTUFJTF9VU0VSX0lEXG4gICAgICApXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICB9KTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6ICdSRVNFVCcgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRTdWNjZXNzKGZhbHNlKSwgMTAwMDApXG4gICAgfVxuICB9LCBbc3VjY2Vzc10pXG4gIFxuICBjb25zdCB7IHNlbmRlck5hbWUsIHNlbmRlckVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlIH0gPSBzdGF0ZTtcblxuXG5cblxuICByZXR1cm4ge1xuICAgIHNlbmRlck5hbWUsXG4gICAgc2VuZGVyRW1haWwsXG4gICAgc3ViamVjdCxcbiAgICBtZXNzYWdlLFxuICAgIGRpc3BhdGNoLFxuICAgIHNlbmRFbWFpbCxcbiAgICBzdWNjZXNzLFxuICAgIHNldFN1Y2Nlc3NcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/email.tsx\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ \"next-seo\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/tailwind.css */ \"./styles/tailwind.css\");\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_next_seo_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/next-seo.config */ \"./config/next-seo.config.js\");\n/* harmony import */ var _lib_email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/email */ \"./lib/email.tsx\");\n\nvar _jsxFileName = \"/home/gundy/Documents/projects/MI-449/MI-449-css-spacing-and-layout/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_lib_email__WEBPACK_IMPORTED_MODULE_5__[\"EmailProvider\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_1__[\"NextSeo\"], {\n      openGraph: _config_next_seo_config__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJTRU9Db25maWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UscUVBQUMsd0RBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFTLGVBQVMsRUFBRUMsK0RBQVNBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7O0FBRWNGLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbyc7XG5cbmltcG9ydCAnQC9zdHlsZXMvdGFpbHdpbmQuY3NzJztcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IFNFT0NvbmZpZyBmcm9tICdAL2NvbmZpZy9uZXh0LXNlby5jb25maWcnO1xuaW1wb3J0IHsgRW1haWxQcm92aWRlciB9IGZyb20gJ0AvbGliL2VtYWlsJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPEVtYWlsUHJvdmlkZXI+XG4gICAgICA8TmV4dFNlbyBvcGVuR3JhcGg9e1NFT0NvbmZpZ30gLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0VtYWlsUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy9nbG9iYWxzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/globals.css\n");

/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3N0eWxlcy90YWlsd2luZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/tailwind.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "emailjs-com":
/*!******************************!*\
  !*** external "emailjs-com" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"emailjs-com\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlbWFpbGpzLWNvbVwiPzViYjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZW1haWxqcy1jb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbWFpbGpzLWNvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///emailjs-com\n");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-seo\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlb1wiPzJjYmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1zZW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-seo\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });