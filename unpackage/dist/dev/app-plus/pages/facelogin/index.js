"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/face/main.js?{"page":"pages%2Ffacelogin%2Findex"} ***!
  \****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_facelogin_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/facelogin/index.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_facelogin_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_facelogin_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/facelogin/index'\n        _pages_facelogin_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_facelogin_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBa0U7QUFDbEUsUUFBUSwrRUFBRztBQUNYLFFBQVEsK0VBQUc7QUFDWCxRQUFRLCtFQUFHO0FBQ1gsZ0JBQWdCLCtFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9mYWNlbG9naW4vaW5kZXgubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZmFjZWxvZ2luL2luZGV4J1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/face/main.js?{"type":"appStyle"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/face/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Documents/HBuilderProjects/face/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!**********************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/face/pages/facelogin/index.nvue?mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_82fc5830_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=82fc5830&mpType=page */ 6);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 14).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 14).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_82fc5830_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_82fc5830_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5fd58846\",\n  false,\n  _index_nvue_vue_type_template_id_82fc5830_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/facelogin/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1FQUEyRDtBQUMvRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUVBQTJEO0FBQ3BIOztBQUVBOztBQUVBO0FBQzRLO0FBQzVLLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgyZmM1ODMwJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vaW5kZXgubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjVmZDU4ODQ2XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2ZhY2Vsb2dpbi9pbmRleC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!****************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/face/pages/facelogin/index.nvue?vue&type=template&id=82fc5830&mpType=page ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_82fc5830_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=82fc5830&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_82fc5830_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_82fc5830_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_82fc5830_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_82fc5830_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Documents/HBuilderProjects/face/pages/facelogin/index.nvue?vue&type=template&id=82fc5830&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["page-container"] },
        [
          _c(
            "view",
            { staticClass: ["test"] },
            [
              _c("button", { on: { click: _vm.faceLogin } }, [
                _vm._v("开始识别"),
              ]),
              _c("button", { on: { click: _vm.close } }, [_vm._v("结束")]),
            ],
            1
          ),
          _c("view", { staticClass: ["container-message"] }, [
            _c(
              "u-text",
              {
                staticClass: ["message"],
                appendAsTree: true,
                attrs: { append: "tree" },
              },
              [_vm._v(_vm._s(_vm.message))]
            ),
          ]),
          _c("view", { staticClass: ["live-camera-container"] }, [
            _c(
              "view",
              {
                staticClass: ["live-camera"],
                style: { width: _vm.windowWidth, height: _vm.windowHeight },
              },
              [
                _c("live-pusher", {
                  ref: "livePusher",
                  staticClass: ["livePusher"],
                  style: { width: _vm.windowWidth, height: _vm.windowHeight },
                  attrs: {
                    id: "livePusher",
                    mode: "FHD",
                    beauty: "0",
                    whiteness: "0",
                    aspect: _vm.aspect,
                    minBitrate: "1000",
                    audioQuality: "16KHz",
                    devicePosition: "front",
                    orientation: "horizontal",
                    autoFocus: true,
                    muted: true,
                    enableCamera: true,
                    enableMic: false,
                    zoom: false,
                  },
                  on: { statechange: _vm.statechange },
                }),
              ],
              1
            ),
          ]),
          _c("cover-image", {
            staticClass: ["menu-mask"],
            attrs: { src: "/static/border.png" },
          }),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!**********************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/face/pages/facelogin/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJjLENBQWdCLHFkQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Documents/HBuilderProjects/face/pages/facelogin/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _index = __webpack_require__(/*! ../../node_modules/image-tools/index.js */ 11);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _this = null;\nvar _default = {\n  data: function data() {\n    return {\n      poenCarmeInterval: null,\n      //打开相机的轮询\n      aspect: '2:3',\n      //比例\n      windowWidth: '',\n      //屏幕可用宽度\n      windowHeight: '',\n      //屏幕可用高度\n      camerastate: false,\n      //相机准备好了\n      livePusher: null,\n      //流视频对象\n      snapshotsrc: null,\n      //快照,\n      startTime: new Date(),\n      check: false,\n      socket: null,\n      toId: null,\n      open: false,\n      message: '请正对摄像头'\n    };\n  },\n  onLoad: function onLoad(e) {\n    _this = this;\n    this.initCamera();\n  },\n  onReady: function onReady() {\n    this.livePusher = uni.createLivePusherContext('livePusher', this);\n    this.startPreview(); //开启预览并设置摄像头\n    this.poenCarme();\n    // setTimeout(() => {\n    // \tthis.faceLogin();\n    // }, 1000)\n  },\n\n  methods: {\n    //轮询打开\n    poenCarme: function poenCarme() {\n      if (plus.os.name == 'Android') {\n        this.poenCarmeInterval = setInterval(function () {\n          __f__(\"log\", _this.camerastate, \" at pages/facelogin/index.nvue:65\");\n          if (!_this.camerastate) _this.startPreview();\n        }, 2500);\n      }\n    },\n    //初始化相机\n    initCamera: function initCamera() {\n      uni.getSystemInfo({\n        success: function success(res) {\n          _this.windowWidth = res.windowWidth;\n          _this.windowHeight = res.windowHeight;\n          var zcs = _this.aliquot(_this.windowWidth, _this.windowHeight);\n          _this.aspect = _this.windowWidth / zcs + ':' + _this.windowHeight / zcs;\n          __f__(\"log\", '画面比例：' + _this.aspect, \" at pages/facelogin/index.nvue:79\");\n        }\n      });\n      this.message = \"\\u8BF7\\u6B63\\u5BF9\\u6444\\u50CF\\u5934\";\n    },\n    //整除数计算\n    aliquot: function aliquot(x, y) {\n      if (x % y == 0) return y;\n      return this.aliquot(y, x % y);\n    },\n    //开始预览\n    startPreview: function startPreview() {\n      this.livePusher.startPreview({\n        success: function success(a) {\n          __f__(\"log\", a, \" at pages/facelogin/index.nvue:95\");\n        }\n      });\n    },\n    //停止预览\n    stopPreview: function stopPreview() {\n      this.livePusher.stopPreview({\n        success: function success(a) {\n          _this.camerastate = false; //标记相机未启动\n        }\n      });\n    },\n    //状态\n    statechange: function statechange(e) {\n      //状态改变\n      __f__(\"log\", e, \" at pages/facelogin/index.nvue:112\");\n      if (e.detail.code == 1007) {\n        _this.camerastate = true;\n      } else if (e.detail.code == -1301) {\n        _this.camerastate = false;\n      }\n    },\n    //返回\n    back: function back() {\n      uni.navigateBack();\n    },\n    //抓拍\n    snapshot: function snapshot() {\n      // 人脸采样\n      this.faceCheck();\n    },\n    //反转\n    flip: function flip() {\n      this.livePusher.switchCamera();\n    },\n    //设置\n    setImage: function setImage() {\n      var pages = getCurrentPages();\n      var prevPage = pages[pages.length - 2]; //上一个页面\n\n      //直接调用上一个页面的setImage()方法，把数据存到上一个页面中去\n      prevPage.$vm.setImage({\n        path: _this.snapshotsrc\n      });\n    },\n    close: function close() {\n      this.message = '请正对摄像头';\n      if (this.open) {\n        uni.closeSocket({});\n      }\n    },\n    faceLogin: function faceLogin() {\n      var _this2 = this;\n      this.message = '开始人脸识别！';\n      this.check = false;\n      this.startTime = new Date().getTime();\n      if (this.open) {\n        uni.closeSocket({});\n      }\n      this.socket = uni.connectSocket({\n        url: 'ws://ilive.esto.cn/eliga/api/user/face/login?deviceSn=L01',\n        //仅为示例，并非真实接口地址。\n        success: function success() {\n          __f__(\"log\", 'success', \" at pages/facelogin/index.nvue:163\");\n        },\n        fail: function fail() {\n          __f__(\"log\", 'fail', \" at pages/facelogin/index.nvue:166\");\n        },\n        complete: function complete() {\n          __f__(\"log\", 'complete', \" at pages/facelogin/index.nvue:169\");\n        }\n      });\n      uni.onSocketOpen(function (res) {\n        _this2.open = true;\n        __f__(\"log\", 'WebSocket连接已打开！', \" at pages/facelogin/index.nvue:174\");\n      });\n      var timer = null;\n      uni.onSocketMessage(function (res) {\n        var data = res.data;\n        __f__(\"log\", data, \" at pages/facelogin/index.nvue:179\");\n        if (data !== 'pong') {\n          var json = JSON.parse(data);\n          if (json.code === 'faceCheckResult') {\n            _this2.check = false;\n          } else if (json.code === 'checkfail') {\n            _this2.check = false;\n          } else if (json.code === 'start') {\n            _this2.message = '正在检测...';\n            timer = setInterval(function () {\n              _this2.faceCheck();\n            }, 200);\n          } else if (json.code === 'ok') {\n            clearInterval(timer);\n            __f__(\"log\", '识别成功！', \" at pages/facelogin/index.nvue:193\");\n            _this2.message = '识别成功！';\n          } else if (json.code === '500') {}\n        }\n      });\n      uni.onSocketClose(function (res) {\n        __f__(\"log\", 'WebSocket 已关闭！', \" at pages/facelogin/index.nvue:201\");\n        _this2.open = false;\n      });\n      uni.onSocketError(function (res) {\n        __f__(\"log\", 'WebSocket连接打开失败，请检查！', \" at pages/facelogin/index.nvue:205\");\n      });\n    },\n    faceCheck: function faceCheck() {\n      if (this.check) {\n        return;\n      }\n      this.check = true;\n      this.livePusher.snapshot({\n        success: function success(e) {\n          __f__(\"log\", e.message.tempImagePath, \" at pages/facelogin/index.nvue:215\");\n          uni.getImageInfo({\n            src: e.message.tempImagePath,\n            success: function success(o) {\n              __f__(\"log\", o, \" at pages/facelogin/index.nvue:219\");\n              uni.compressImage({\n                src: e.message.tempImagePath,\n                width: \"\".concat(o.width / o.height * 200, \"px\"),\n                height: \"200px\",\n                success: function success(res) {\n                  (0, _index.pathToBase64)(res.tempFilePath).then(function (base64) {\n                    uni.sendSocketMessage({\n                      data: JSON.stringify({\n                        code: 'image',\n                        image: base64\n                      })\n                    });\n                  });\n                },\n                error: function error(err) {\n                  __f__(\"log\", err, \" at pages/facelogin/index.nvue:235\");\n                },\n                complete: function complete() {\n                  __f__(\"log\", 'complete', \" at pages/facelogin/index.nvue:238\");\n                }\n              });\n            }\n          });\n        }\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZmFjZWxvZ2luL2luZGV4Lm52dWUiXSwibmFtZXMiOlsiZGF0YSIsInBvZW5DYXJtZUludGVydmFsIiwiYXNwZWN0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJjYW1lcmFzdGF0ZSIsImxpdmVQdXNoZXIiLCJzbmFwc2hvdHNyYyIsInN0YXJ0VGltZSIsImNoZWNrIiwic29ja2V0IiwidG9JZCIsIm9wZW4iLCJtZXNzYWdlIiwib25Mb2FkIiwiX3RoaXMiLCJvblJlYWR5IiwibWV0aG9kcyIsInBvZW5DYXJtZSIsImluaXRDYW1lcmEiLCJ1bmkiLCJzdWNjZXNzIiwiYWxpcXVvdCIsInN0YXJ0UHJldmlldyIsInN0b3BQcmV2aWV3Iiwic3RhdGVjaGFuZ2UiLCJiYWNrIiwic25hcHNob3QiLCJmbGlwIiwic2V0SW1hZ2UiLCJwcmV2UGFnZSIsInBhdGgiLCJjbG9zZSIsImZhY2VMb2dpbiIsInVybCIsImZhaWwiLCJjb21wbGV0ZSIsInRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImZhY2VDaGVjayIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiY29kZSIsImltYWdlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztBQXVCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFBQSxlQUNBO0VBQ0FBO0lBQ0E7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0VBQ0E7O0VBQ0FDO0lBRUE7SUFDQUM7TUFFQTtRQUNBO1VBQ0E7VUFDQTtRQUNBO01BQ0E7SUFFQTtJQUNBO0lBQ0FDO01BQ0FDO1FBQ0FDO1VBQ0FOO1VBQ0FBO1VBQ0E7VUFDQUE7VUFDQTtRQUNBO01BQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQU87TUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO1FBQ0FGO1VBQ0E7UUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBRztNQUNBO1FBQ0FIO1VBQ0FOO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQVU7TUFDQTtNQUNBO01BQ0E7UUFDQVY7TUFDQTtRQUNBQTtNQUNBO0lBQ0E7SUFHQTtJQUNBVztNQUNBTjtJQUNBO0lBRUE7SUFDQU87TUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO0lBQ0E7SUFFQTtJQUNBQztNQUNBO01BQ0E7O01BRUE7TUFDQUM7UUFDQUM7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtRQUNBWjtNQUNBO0lBQ0E7SUFDQWE7TUFBQTtNQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0FiO01BQ0E7TUFDQTtRQUNBYztRQUFBO1FBQ0FiO1VBQ0E7UUFDQTtRQUNBYztVQUNBO1FBQ0E7UUFDQUM7VUFDQTtRQUNBO01BQ0E7TUFDQWhCO1FBQ0E7UUFDQTtNQUNBO01BQ0E7TUFDQUE7UUFDQTtRQUNBO1FBQ0E7VUFDQTtVQUNBO1lBQ0E7VUFDQTtZQUNBO1VBQ0E7WUFDQTtZQUNBaUI7Y0FDQTtZQUNBO1VBQ0E7WUFDQUM7WUFDQTtZQUNBO1VBQ0EsaUNBRUE7UUFDQTtNQUNBO01BQ0FsQjtRQUNBO1FBQ0E7TUFDQTtNQUNBQTtRQUNBO01BQ0E7SUFDQTtJQUNBbUI7TUFDQTtRQUNBO01BQ0E7TUFDQTtNQUNBO1FBQ0FsQjtVQUNBO1VBQ0FEO1lBQ0FvQjtZQUNBbkI7Y0FDQTtjQUNBRDtnQkFDQW9CO2dCQUNBQztnQkFDQUM7Z0JBQ0FyQjtrQkFDQTtvQkFDQUQ7c0JBQ0FwQjt3QkFDQTJDO3dCQUNBQztzQkFDQTtvQkFDQTtrQkFDQTtnQkFDQTtnQkFDQUM7a0JBQ0E7Z0JBQ0E7Z0JBQ0FUO2tCQUNBO2dCQUNBO2NBQ0E7WUFDQTtVQUNBO1FBQ0E7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBLDJCIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJwYWdlLWNvbnRhaW5lclwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ0ZXN0XCI+XHJcblx0XHRcdDxidXR0b24gQGNsaWNrPVwiZmFjZUxvZ2luXCI+5byA5aeL6K+G5YirPC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gQGNsaWNrPVwiY2xvc2VcIj7nu5PmnZ88L2J1dHRvbj5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGFpbmVyLW1lc3NhZ2VcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJtZXNzYWdlXCI+e3ttZXNzYWdlfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImxpdmUtY2FtZXJhLWNvbnRhaW5lclwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImxpdmUtY2FtZXJhXCIgOnN0eWxlPVwieyB3aWR0aDogd2luZG93V2lkdGgsIGhlaWdodDogd2luZG93SGVpZ2h0IH1cIj5cclxuXHRcdFx0XHQ8bGl2ZS1wdXNoZXIgaWQ9XCJsaXZlUHVzaGVyXCIgcmVmPVwibGl2ZVB1c2hlclwiIGNsYXNzPVwibGl2ZVB1c2hlclwiIG1vZGU9XCJGSERcIiBiZWF1dHk9XCIwXCIgd2hpdGVuZXNzPVwiMFwiXHJcblx0XHRcdFx0XHQ6YXNwZWN0PVwiYXNwZWN0XCIgbWluLWJpdHJhdGU9XCIxMDAwXCIgYXVkaW8tcXVhbGl0eT1cIjE2S0h6XCIgZGV2aWNlLXBvc2l0aW9uPVwiZnJvbnRcIlxyXG5cdFx0XHRcdFx0b3JpZW50YXRpb249J2hvcml6b250YWwnIDphdXRvLWZvY3VzPVwidHJ1ZVwiIDptdXRlZD1cInRydWVcIiA6ZW5hYmxlLWNhbWVyYT1cInRydWVcIiA6ZW5hYmxlLW1pYz1cImZhbHNlXCJcclxuXHRcdFx0XHRcdDp6b29tPVwiZmFsc2VcIiBAc3RhdGVjaGFuZ2U9XCJzdGF0ZWNoYW5nZVwiIDpzdHlsZT1cInsgd2lkdGg6IHdpbmRvd1dpZHRoLCBoZWlnaHQ6IHdpbmRvd0hlaWdodCB9XCI+XHJcblx0XHRcdFx0PC9saXZlLXB1c2hlcj5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwibWVudS1tYXNrXCIgc3JjPVwiL3N0YXRpYy9ib3JkZXIucG5nXCI+PC9jb3Zlci1pbWFnZT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRwYXRoVG9CYXNlNjRcclxuXHR9IGZyb20gJy4uLy4uL25vZGVfbW9kdWxlcy9pbWFnZS10b29scy9pbmRleC5qcydcclxuXHRsZXQgX3RoaXMgPSBudWxsO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cG9lbkNhcm1lSW50ZXJ2YWw6IG51bGwsIC8v5omT5byA55u45py655qE6L2u6K+iXHJcblx0XHRcdFx0YXNwZWN0OiAnMjozJywgLy/mr5TkvotcclxuXHRcdFx0XHR3aW5kb3dXaWR0aDogJycsIC8v5bGP5bmV5Y+v55So5a695bqmXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OiAnJywgLy/lsY/luZXlj6/nlKjpq5jluqZcclxuXHRcdFx0XHRjYW1lcmFzdGF0ZTogZmFsc2UsIC8v55u45py65YeG5aSH5aW95LqGXHJcblx0XHRcdFx0bGl2ZVB1c2hlcjogbnVsbCwgLy/mtYHop4bpopHlr7nosaFcclxuXHRcdFx0XHRzbmFwc2hvdHNyYzogbnVsbCwgLy/lv6vnhacsXHJcblx0XHRcdFx0c3RhcnRUaW1lOiBuZXcgRGF0ZSgpLFxyXG5cdFx0XHRcdGNoZWNrOiBmYWxzZSxcclxuXHRcdFx0XHRzb2NrZXQ6IG51bGwsXHJcblx0XHRcdFx0dG9JZDogbnVsbCxcclxuXHRcdFx0XHRvcGVuOiBmYWxzZSxcclxuXHRcdFx0XHRtZXNzYWdlOifor7fmraPlr7nmkYTlg4/lpLQnLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChlKSB7XHJcblx0XHRcdF90aGlzID0gdGhpcztcclxuXHRcdFx0dGhpcy5pbml0Q2FtZXJhKCk7XHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0dGhpcy5saXZlUHVzaGVyID0gdW5pLmNyZWF0ZUxpdmVQdXNoZXJDb250ZXh0KCdsaXZlUHVzaGVyJywgdGhpcyk7XHJcblx0XHRcdHRoaXMuc3RhcnRQcmV2aWV3KCk7IC8v5byA5ZCv6aKE6KeI5bm26K6+572u5pGE5YOP5aS0XHJcblx0XHRcdHRoaXMucG9lbkNhcm1lKCk7XHJcblx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHQvLyBcdHRoaXMuZmFjZUxvZ2luKCk7XHJcblx0XHRcdC8vIH0sIDEwMDApXHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cclxuXHRcdFx0Ly/ova7or6LmiZPlvIBcclxuXHRcdFx0cG9lbkNhcm1lKCkge1xyXG5cdFx0XHRcdC8vI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0aWYgKHBsdXMub3MubmFtZSA9PSAnQW5kcm9pZCcpIHtcclxuXHRcdFx0XHRcdHRoaXMucG9lbkNhcm1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coX3RoaXMuY2FtZXJhc3RhdGUpO1xyXG5cdFx0XHRcdFx0XHRpZiAoIV90aGlzLmNhbWVyYXN0YXRlKSBfdGhpcy5zdGFydFByZXZpZXcoKTtcclxuXHRcdFx0XHRcdH0sIDI1MDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyNlbmRpZlxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+WIneWni+WMluebuOaculxyXG5cdFx0XHRpbml0Q2FtZXJhKCkge1xyXG5cdFx0XHRcdHVuaS5nZXRTeXN0ZW1JbmZvKHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdFx0XHRfdGhpcy53aW5kb3dXaWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcclxuXHRcdFx0XHRcdFx0X3RoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHRcdFx0bGV0IHpjcyA9IF90aGlzLmFsaXF1b3QoX3RoaXMud2luZG93V2lkdGgsIF90aGlzLndpbmRvd0hlaWdodCk7XHJcblx0XHRcdFx0XHRcdF90aGlzLmFzcGVjdCA9IChfdGhpcy53aW5kb3dXaWR0aCAvIHpjcykgKyAnOicgKyAoX3RoaXMud2luZG93SGVpZ2h0IC8gemNzKTtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+eUu+mdouavlOS+i++8micgKyBfdGhpcy5hc3BlY3QpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMubWVzc2FnZSA9IGDor7fmraPlr7nmkYTlg4/lpLRgO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/mlbTpmaTmlbDorqHnrpdcclxuXHRcdFx0YWxpcXVvdCh4LCB5KSB7XHJcblx0XHRcdFx0aWYgKHggJSB5ID09IDApIHJldHVybiB5O1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLmFsaXF1b3QoeSwgeCAlIHkpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/lvIDlp4vpooTop4hcclxuXHRcdFx0c3RhcnRQcmV2aWV3KCkge1xyXG5cdFx0XHRcdHRoaXMubGl2ZVB1c2hlci5zdGFydFByZXZpZXcoe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogYSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGEpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+WBnOatoumihOiniFxyXG5cdFx0XHRzdG9wUHJldmlldygpIHtcclxuXHRcdFx0XHR0aGlzLmxpdmVQdXNoZXIuc3RvcFByZXZpZXcoe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogYSA9PiB7XHJcblx0XHRcdFx0XHRcdF90aGlzLmNhbWVyYXN0YXRlID0gZmFsc2U7IC8v5qCH6K6w55u45py65pyq5ZCv5YqoXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvL+eKtuaAgVxyXG5cdFx0XHRzdGF0ZWNoYW5nZShlKSB7XHJcblx0XHRcdFx0Ly/nirbmgIHmlLnlj5hcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0XHRpZiAoZS5kZXRhaWwuY29kZSA9PSAxMDA3KSB7XHJcblx0XHRcdFx0XHRfdGhpcy5jYW1lcmFzdGF0ZSA9IHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChlLmRldGFpbC5jb2RlID09IC0xMzAxKSB7XHJcblx0XHRcdFx0XHRfdGhpcy5jYW1lcmFzdGF0ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHJcblxyXG5cdFx0XHQvL+i/lOWbnlxyXG5cdFx0XHRiYWNrKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8v5oqT5ouNXHJcblx0XHRcdHNuYXBzaG90KCkge1xyXG5cdFx0XHRcdC8vIOS6uuiEuOmHh+agt1xyXG5cdFx0XHRcdHRoaXMuZmFjZUNoZWNrKClcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdC8v5Y+N6L2sXHJcblx0XHRcdGZsaXAoKSB7XHJcblx0XHRcdFx0dGhpcy5saXZlUHVzaGVyLnN3aXRjaENhbWVyYSgpO1xyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly/orr7nva5cclxuXHRcdFx0c2V0SW1hZ2UoKSB7XHJcblx0XHRcdFx0bGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcblx0XHRcdFx0bGV0IHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXHJcblxyXG5cdFx0XHRcdC8v55u05o6l6LCD55So5LiK5LiA5Liq6aG16Z2i55qEc2V0SW1hZ2UoKeaWueazle+8jOaKiuaVsOaNruWtmOWIsOS4iuS4gOS4qumhtemdouS4reWOu1xyXG5cdFx0XHRcdHByZXZQYWdlLiR2bS5zZXRJbWFnZSh7XHJcblx0XHRcdFx0XHRwYXRoOiBfdGhpcy5zbmFwc2hvdHNyY1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZSgpIHtcclxuXHRcdFx0XHR0aGlzLm1lc3NhZ2UgPSAn6K+35q2j5a+55pGE5YOP5aS0JztcclxuXHRcdFx0XHRpZiAodGhpcy5vcGVuKSB7XHJcblx0XHRcdFx0XHR1bmkuY2xvc2VTb2NrZXQoe30pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFjZUxvZ2luKCkge1xyXG5cdFx0XHRcdHRoaXMubWVzc2FnZSA9ICflvIDlp4vkurrohLjor4bliKvvvIEnO1xyXG5cdFx0XHRcdHRoaXMuY2hlY2sgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHRcdGlmICh0aGlzLm9wZW4pIHtcclxuXHRcdFx0XHRcdHVuaS5jbG9zZVNvY2tldCh7fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuc29ja2V0ID0gdW5pLmNvbm5lY3RTb2NrZXQoe1xyXG5cdFx0XHRcdFx0dXJsOiAnd3M6Ly9pbGl2ZS5lc3RvLmNuL2VsaWdhL2FwaS91c2VyL2ZhY2UvbG9naW4/ZGV2aWNlU249TDAxJywgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7mjqXlj6PlnLDlnYDjgIJcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJyk7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2NvbXBsZXRlJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR1bmkub25Tb2NrZXRPcGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMub3BlbiA9IHRydWU7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnV2ViU29ja2V06L+e5o6l5bey5omT5byA77yBJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0bGV0IHRpbWVyID0gbnVsbDtcclxuXHRcdFx0XHR1bmkub25Tb2NrZXRNZXNzYWdlKChyZXMpID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGRhdGEgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpXHJcblx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gJ3BvbmcnKSB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRpZiAoanNvbi5jb2RlID09PSAnZmFjZUNoZWNrUmVzdWx0Jykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuY2hlY2sgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmIChqc29uLmNvZGUgPT09ICdjaGVja2ZhaWwnKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5jaGVjayA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGpzb24uY29kZSA9PT0gJ3N0YXJ0Jykge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubWVzc2FnZSA9ICfmraPlnKjmo4DmtYsuLi4nO1xyXG5cdFx0XHRcdFx0XHRcdHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5mYWNlQ2hlY2soKVxyXG5cdFx0XHRcdFx0XHRcdH0sIDIwMCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoanNvbi5jb2RlID09PSAnb2snKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+ivhuWIq+aIkOWKn++8gScpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubWVzc2FnZSA9ICfor4bliKvmiJDlip/vvIEnO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGpzb24uY29kZSA9PT0gJzUwMCcpIHtcclxuXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR1bmkub25Tb2NrZXRDbG9zZSgocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnV2ViU29ja2V0IOW3suWFs+mXre+8gScpO1xyXG5cdFx0XHRcdFx0dGhpcy5vcGVuID0gZmFsc2VcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR1bmkub25Tb2NrZXRFcnJvcihmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdXZWJTb2NrZXTov57mjqXmiZPlvIDlpLHotKXvvIzor7fmo4Dmn6XvvIEnKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWNlQ2hlY2soKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuY2hlY2spIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5jaGVjayA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5saXZlUHVzaGVyLnNuYXBzaG90KHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGUgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhlLm1lc3NhZ2UudGVtcEltYWdlUGF0aCk7XHJcblx0XHRcdFx0XHRcdHVuaS5nZXRJbWFnZUluZm8oe1xyXG5cdFx0XHRcdFx0XHRcdHNyYzogZS5tZXNzYWdlLnRlbXBJbWFnZVBhdGgsXHJcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKG8pID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG8pXHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuY29tcHJlc3NJbWFnZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYzogZS5tZXNzYWdlLnRlbXBJbWFnZVBhdGgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBgJHtvLndpZHRoL28uaGVpZ2h0KjIwMH1weGAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodDogYDIwMHB4YCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBhdGhUb0Jhc2U2NChyZXMudGVtcEZpbGVQYXRoKS50aGVuKGJhc2U2NCA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2VuZFNvY2tldE1lc3NhZ2Uoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29kZTogJ2ltYWdlJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbWFnZTogYmFzZTY0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tcGxldGU6ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnY29tcGxldGUnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0LnBhZ2UtY29udGFpbmVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0fVxyXG5cclxuXHQudGVzdCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdH1cclxuXHJcblx0LmNvbnRhaW5lci1tZXNzYWdlIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogNDBycHg7XHJcblx0XHRsZWZ0OiAyMzVycHg7XHJcblx0XHRoZWlnaHQ6IDMwcnB4O1xyXG5cdFx0d2lkdGg6IDI4MHJweDtcclxuXHRcdC5tZXNzYWdlIHtcclxuXHRcdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdFx0Y29sb3I6ICMzYzNjM2M7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5saXZlLWNhbWVyYSB7XHJcblx0XHQvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQvLyB0b3A6IC0zMHJweDtcclxuXHJcblx0XHQmLWNvbnRhaW5lciB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0dG9wOiA4MHJweDtcclxuXHRcdFx0bGVmdDogMjM1cnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDI4MHJweDtcclxuXHRcdFx0d2lkdGg6IDI4MHJweDtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQubWVudS1tYXNrIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogODBycHg7XHJcblx0XHRsZWZ0OiAyMzVycHg7XHJcblx0XHRoZWlnaHQ6IDI4MHJweDtcclxuXHRcdHdpZHRoOiAyODBycHg7XHJcblx0XHR6LWluZGV4OiA5ODtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 11 */
/*!*****************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/face/node_modules/image-tools/index.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 12);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64ToPath = base64ToPath;
exports.pathToBase64 = pathToBase64;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function getLocalFilePath(path) {
  if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
    return path;
  }
  if (path.indexOf('file://') === 0) {
    return path;
  }
  if (path.indexOf('/storage/emulated/0/') === 0) {
    return path;
  }
  if (path.indexOf('/') === 0) {
    var localFilePath = plus.io.convertAbsoluteFileSystem(path);
    if (localFilePath !== path) {
      return localFilePath;
    } else {
      path = path.substr(1);
    }
  }
  return '_www/' + path;
}
function dataUrlToBase64(str) {
  var array = str.split(',');
  return array[array.length - 1];
}
var index = 0;
function getNewFileId() {
  return Date.now() + String(index++);
}
function biggerThan(v1, v2) {
  var v1Array = v1.split('.');
  var v2Array = v2.split('.');
  var update = false;
  for (var index = 0; index < v2Array.length; index++) {
    var diff = v1Array[index] - v2Array[index];
    if (diff !== 0) {
      update = diff > 0;
      break;
    }
  }
  return update;
}
function pathToBase64(path) {
  return new Promise(function (resolve, reject) {
    if ((typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === 'object' && 'document' in window) {
      if (typeof FileReader === 'function') {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', path, true);
        xhr.responseType = 'blob';
        xhr.onload = function () {
          if (this.status === 200) {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
              resolve(e.target.result);
            };
            fileReader.onerror = reject;
            fileReader.readAsDataURL(this.response);
          }
        };
        xhr.onerror = reject;
        xhr.send();
        return;
      }
      var canvas = document.createElement('canvas');
      var c2x = canvas.getContext('2d');
      var img = new Image();
      img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        c2x.drawImage(img, 0, 0);
        resolve(canvas.toDataURL());
        canvas.height = canvas.width = 0;
      };
      img.onerror = reject;
      img.src = path;
      return;
    }
    if ((typeof plus === "undefined" ? "undefined" : (0, _typeof2.default)(plus)) === 'object') {
      plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function (entry) {
        entry.file(function (file) {
          var fileReader = new plus.io.FileReader();
          fileReader.onload = function (data) {
            resolve(data.target.result);
          };
          fileReader.onerror = function (error) {
            reject(error);
          };
          fileReader.readAsDataURL(file);
        }, function (error) {
          reject(error);
        });
      }, function (error) {
        reject(error);
      });
      return;
    }
    if ((typeof wx === "undefined" ? "undefined" : (0, _typeof2.default)(wx)) === 'object' && wx.canIUse('getFileSystemManager')) {
      wx.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function success(res) {
          resolve('data:image/png;base64,' + res.data);
        },
        fail: function fail(error) {
          reject(error);
        }
      });
      return;
    }
    reject(new Error('not support'));
  });
}
function base64ToPath(base64) {
  return new Promise(function (resolve, reject) {
    if ((typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) === 'object' && 'document' in window) {
      base64 = base64.split(',');
      var type = base64[0].match(/:(.*?);/)[1];
      var str = atob(base64[1]);
      var n = str.length;
      var array = new Uint8Array(n);
      while (n--) {
        array[n] = str.charCodeAt(n);
      }
      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], {
        type: type
      })));
    }
    var extName = base64.split(',')[0].match(/data\:\S+\/(\S+);/);
    if (extName) {
      extName = extName[1];
    } else {
      reject(new Error('base64 error'));
    }
    var fileName = getNewFileId() + '.' + extName;
    if ((typeof plus === "undefined" ? "undefined" : (0, _typeof2.default)(plus)) === 'object') {
      var basePath = '_doc';
      var dirPath = 'uniapp_temp';
      var filePath = basePath + '/' + dirPath + '/' + fileName;
      if (!biggerThan(plus.os.name === 'Android' ? '1.9.9.80627' : '1.9.9.80472', plus.runtime.innerVersion)) {
        plus.io.resolveLocalFileSystemURL(basePath, function (entry) {
          entry.getDirectory(dirPath, {
            create: true,
            exclusive: false
          }, function (entry) {
            entry.getFile(fileName, {
              create: true,
              exclusive: false
            }, function (entry) {
              entry.createWriter(function (writer) {
                writer.onwrite = function () {
                  resolve(filePath);
                };
                writer.onerror = reject;
                writer.seek(0);
                writer.writeAsBinary(dataUrlToBase64(base64));
              }, reject);
            }, reject);
          }, reject);
        }, reject);
        return;
      }
      var bitmap = new plus.nativeObj.Bitmap(fileName);
      bitmap.loadBase64Data(base64, function () {
        bitmap.save(filePath, {}, function () {
          bitmap.clear();
          resolve(filePath);
        }, function (error) {
          bitmap.clear();
          reject(error);
        });
      }, function (error) {
        bitmap.clear();
        reject(error);
      });
      return;
    }
    if ((typeof wx === "undefined" ? "undefined" : (0, _typeof2.default)(wx)) === 'object' && wx.canIUse('getFileSystemManager')) {
      var filePath = wx.env.USER_DATA_PATH + '/' + fileName;
      wx.getFileSystemManager().writeFile({
        filePath: filePath,
        data: dataUrlToBase64(base64),
        encoding: 'base64',
        success: function success() {
          resolve(filePath);
        },
        fail: function fail(error) {
          reject(error);
        }
      });
      return;
    }
    reject(new Error('not support'));
  });
}

/***/ }),
/* 12 */
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 13 */
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),
/* 14 */
/*!*******************************************************************************************************************************!*\
  !*** C:/Users/Lenovo/Documents/HBuilderProjects/face/pages/facelogin/index.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 15);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/Lenovo/Documents/HBuilderProjects/face/pages/facelogin/index.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page-container": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        16
      ],
      "top": [
        0,
        0,
        0,
        16
      ],
      "left": [
        0,
        0,
        0,
        16
      ],
      "right": [
        0,
        0,
        0,
        16
      ],
      "bottom": [
        0,
        0,
        0,
        16
      ],
      "backgroundColor": [
        "#ffffff",
        0,
        0,
        16
      ]
    }
  },
  ".test": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        17
      ],
      "left": [
        0,
        0,
        0,
        17
      ],
      "top": [
        0,
        0,
        0,
        17
      ]
    }
  },
  ".container-message": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        18
      ],
      "top": [
        "40rpx",
        0,
        0,
        18
      ],
      "left": [
        "235rpx",
        0,
        0,
        18
      ],
      "height": [
        "30rpx",
        0,
        0,
        18
      ],
      "width": [
        "280rpx",
        0,
        0,
        18
      ]
    }
  },
  ".message": {
    ".container-message ": {
      "fontSize": [
        "20rpx",
        0,
        1,
        19
      ],
      "color": [
        "#3c3c3c",
        0,
        1,
        19
      ],
      "textAlign": [
        "center",
        0,
        1,
        19
      ]
    }
  },
  ".live-camera-container": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        20
      ],
      "top": [
        "80rpx",
        0,
        0,
        20
      ],
      "left": [
        "235rpx",
        0,
        0,
        20
      ],
      "height": [
        "280rpx",
        0,
        0,
        20
      ],
      "width": [
        "280rpx",
        0,
        0,
        20
      ],
      "overflow": [
        "hidden",
        0,
        0,
        20
      ],
      "justifyContent": [
        "center",
        0,
        0,
        20
      ],
      "alignItems": [
        "center",
        0,
        0,
        20
      ]
    }
  },
  ".menu-mask": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        21
      ],
      "top": [
        "80rpx",
        0,
        0,
        21
      ],
      "left": [
        "235rpx",
        0,
        0,
        21
      ],
      "height": [
        "280rpx",
        0,
        0,
        21
      ],
      "width": [
        "280rpx",
        0,
        0,
        21
      ],
      "zIndex": [
        98,
        0,
        0,
        21
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);