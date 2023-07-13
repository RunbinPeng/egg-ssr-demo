"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb"] = self["webpackChunkweb"] || []).push([["components_Item_vue"],{

/***/ "./components/Item.vue":
/*!*****************************!*\
  !*** ./components/Item.vue ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Item_vue_vue_type_template_id_6b294924___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item.vue?vue&type=template&id=6b294924& */ \"./components/Item.vue?vue&type=template&id=6b294924&\");\n/* harmony import */ var _Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item.vue?vue&type=script&lang=js& */ \"./components/Item.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _Item_vue_vue_type_template_id_6b294924___WEBPACK_IMPORTED_MODULE_0__.render,\n  _Item_vue_vue_type_template_id_6b294924___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/Item.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://web/./components/Item.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Item.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Item.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  data: function() {\n    return {\n      count: 0\n    }\n  },\n  asyncData({ store, route }) {\n    return store.dispatch('fetchItem', route.params.id)\n  },\n  computed: {\n    item() {\n      return this.$store.state.items[this.$route.params.id] || {}\n    }\n  },\n  methods: {\n    onCount() {\n      this.count++\n    }\n  }\n});\n\n\n//# sourceURL=webpack://web/./components/Item.vue?./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/Item.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./components/Item.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/index.js??vue-loader-options!./Item.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Item.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://web/./components/Item.vue?");

/***/ }),

/***/ "./components/Item.vue?vue&type=template&id=6b294924&":
/*!************************************************************!*\
  !*** ./components/Item.vue?vue&type=template&id=6b294924& ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_6b294924___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_6b294924___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Item_vue_vue_type_template_id_6b294924___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./Item.vue?vue&type=template&id=6b294924& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Item.vue?vue&type=template&id=6b294924&\");\n\n\n//# sourceURL=webpack://web/./components/Item.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Item.vue?vue&type=template&id=6b294924&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./components/Item.vue?vue&type=template&id=6b294924& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render),\n/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function render() {\n  var _vm = this,\n    _c = _vm._self._c\n  return _c(\"div\", [\n    _c(\"p\", [_vm._v(_vm._s(_vm.item.title))]),\n    _vm._v(\" \"),\n    _c(\"p\", [_vm._v(_vm._s(_vm.count))]),\n    _vm._v(\" \"),\n    _c(\"button\", { on: { click: _vm.onCount } }, [_vm._v(\"click me\")]),\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://web/./components/Item.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet%5B1%5D.rules%5B1%5D!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);