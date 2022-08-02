(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_documentation_base_Alerts_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _core_helpers_documentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/helpers/documentation */ "./resources/ts/src/core/helpers/documentation.ts");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "CodeHighlighter",
  props: {
    lang: String,
    fieldHeight: Number
  },
  setup: function setup(props) {
    var height = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.fieldHeight);
    var init = (0,_core_helpers_documentation__WEBPACK_IMPORTED_MODULE_1__.useCopyClipboard)().init;
    var getHeightInPixesls = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return height.value + "px";
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      prismjs__WEBPACK_IMPORTED_MODULE_2___default().highlightAll();
      init();
    });
    return {
      getHeightInPixesls: getHeightInPixesls
    };
  },
  components: {}
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/helpers/breadcrumb */ "./resources/ts/src/core/helpers/breadcrumb.ts");
/* harmony import */ var _views_documentation_base_alerts_Overview_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/documentation/base/alerts/Overview.vue */ "./resources/ts/src/views/documentation/base/alerts/Overview.vue");
/* harmony import */ var _views_documentation_base_alerts_BasicExample_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/documentation/base/alerts/BasicExample.vue */ "./resources/ts/src/views/documentation/base/alerts/BasicExample.vue");
/* harmony import */ var _views_documentation_base_alerts_SolidColors_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/documentation/base/alerts/SolidColors.vue */ "./resources/ts/src/views/documentation/base/alerts/SolidColors.vue");
/* harmony import */ var _views_documentation_base_alerts_LightColors_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/documentation/base/alerts/LightColors.vue */ "./resources/ts/src/views/documentation/base/alerts/LightColors.vue");
/* harmony import */ var _views_documentation_base_alerts_BorderExamples_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/documentation/base/alerts/BorderExamples.vue */ "./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue");
/* harmony import */ var _views_documentation_base_alerts_RichContentExample_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/documentation/base/alerts/RichContentExample.vue */ "./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "badges",
  components: {
    Overview: _views_documentation_base_alerts_Overview_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    BasicExample: _views_documentation_base_alerts_BasicExample_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SolidColors: _views_documentation_base_alerts_SolidColors_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    LightColors: _views_documentation_base_alerts_LightColors_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    BorderExamples: _views_documentation_base_alerts_BorderExamples_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    RichContentExample: _views_documentation_base_alerts_RichContentExample_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  setup: function setup() {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,_core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.setCurrentPageBreadcrumbs)("Alerts", ["Base"]);
    });
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=script&lang=ts":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/highlighters/CodeHighlighter.vue */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "basic-example",
  components: {
    CodeHighlighter: _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/highlighters/CodeHighlighter.vue */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "basic-example",
  components: {
    CodeHighlighter: _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/highlighters/CodeHighlighter.vue */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "basic-example",
  components: {
    CodeHighlighter: _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=script&lang=ts":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=script&lang=ts ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _core_helpers_documentation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/helpers/documentation */ "./resources/ts/src/core/helpers/documentation.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "overview",
  components: {},
  setup: function setup() {
    return {
      appFullName: _core_helpers_documentation__WEBPACK_IMPORTED_MODULE_1__.appFullName
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=script&lang=ts":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=script&lang=ts ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/highlighters/CodeHighlighter.vue */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "basic-example",
  components: {
    CodeHighlighter: _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/highlighters/CodeHighlighter.vue */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "basic-example",
  components: {
    CodeHighlighter: _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "py-5"
};
var _hoisted_2 = {
  "class": "highlight"
};

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  "class": "highlight-copy btn",
  "data-bs-toggle": "tooltip",
  title: "",
  "data-bs-original-title": "Copy code"
}, " copy ", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "highlight-code"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n          ");

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\n        ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("pre", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("language-".concat(_ctx.lang)),
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
      height: _ctx.getHeightInPixesls
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)("language-".concat(_ctx.lang))
  }, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default"), _hoisted_6], 2
  /* CLASS */
  )], 6
  /* CLASS, STYLE */
  )])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=template&id=65516f7c&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=template&id=65516f7c&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card"
};
var _hoisted_2 = {
  "class": "card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Overview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Overview");

  var _component_BasicExample = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BasicExample");

  var _component_SolidColors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SolidColors");

  var _component_LightColors = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LightColors");

  var _component_BorderExamples = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("BorderExamples");

  var _component_RichContentExample = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("RichContentExample");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Overview), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BasicExample), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SolidColors), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LightColors), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_BorderExamples), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RichContentExample)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=template&id=2146e402&ts=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=template&id=2146e402&ts=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pt-10"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "basic-example"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#basic-example"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Basic Example ")], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Use "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" with "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert-{color}"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" classes to set the alert's style defined with "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "$theme-colors"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" mapped in "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "src/assets/sass/components/_variables.scss"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(": ")], -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "py-5"
};
var _hoisted_5 = {
  "class": "rounded border p-10 pb-0 d-flex flex-column"
};
var _hoisted_6 = {
  "class": "alert alert-primary d-flex align-items-center p-5 mb-10"
};
var _hoisted_7 = {
  "class": "svg-icon svg-icon-2hx svg-icon-primary me-4"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-1 text-primary"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "alert alert-success d-flex align-items-center p-5 mb-10"
};
var _hoisted_10 = {
  "class": "svg-icon svg-icon-2hx svg-icon-success me-4"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-1 text-success"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "alert alert-info d-flex align-items-center p-5 mb-10"
};
var _hoisted_13 = {
  "class": "svg-icon svg-icon-2hx svg-icon-info me-4"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-1 text-info"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "alert alert-warning d-flex align-items-center p-5 mb-10"
};
var _hoisted_16 = {
  "class": "svg-icon svg-icon-2hx svg-icon-warning me-4"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-1 text-warning"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "alert alert-danger d-flex align-items-center p-5 mb-10"
};
var _hoisted_19 = {
  "class": "svg-icon svg-icon-2hx svg-icon-danger me-4"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-1 text-danger"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "py-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");

  var _component_CodeHighlighter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeHighlighter");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/general/gen048.svg"
  })]), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/general/gen048.svg"
  })]), _hoisted_11]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/general/gen048.svg"
  })]), _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/general/gen048.svg"
  })]), _hoisted_17]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/general/gen048.svg"
  })]), _hoisted_20])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("prettier-ignore"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "html"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("<div class=\"alert alert-primary d-flex align-items-center p-5 mb-10\">\n          <span class=\"svg-icon svg-icon-2hx svg-icon-primary me-4\">\n            <inline-svg src=\"media/icons/duotune/general/gen048.svg\" />\n          </span>\n        <div class=\"d-flex flex-column\">\n          <h4 class=\"mb-1 text-primary\">This is an alert</h4>\n          <span\n          >The alert component can be used to highlight certain parts of\n              your page for higher content visibility.</span\n          >\n        </div>\n      </div>"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Code")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=template&id=18ee15f8&ts=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=template&id=18ee15f8&ts=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pt-10"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "border-example"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#border-example"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Border Examples ")], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Use "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" with "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".bg-light-{color}"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".border"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" classes to set the alert's style with borders. ")], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add the class "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert-dismissible"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to the parent "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" wrapper and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "data-bs-dismiss=\"alert\""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to the close button to allow dismissing alerts. Please take note of the HTML markup sample below for all required responsive classes. ")], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "py-5"
};
var _hoisted_6 = {
  "class": "rounded border p-10 pb-0 d-flex flex-column"
};
var _hoisted_7 = {
  "class": "alert alert-dismissible bg-light-primary border border-primary d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_8 = {
  "class": "svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-1"
}, "This is an alert with a basic border"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x fs-1 text-primary"
})], -1
/* HOISTED */
);

var _hoisted_11 = {
  "class": "alert alert-dismissible bg-light-danger border border-danger border-dashed d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_12 = {
  "class": "svg-icon svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-1"
}, "This is an alert with a dashed border"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x fs-1 text-danger"
})], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "alert alert-dismissible bg-light-success border border-success border-3 d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_16 = {
  "class": "svg-icon svg-icon-2hx svg-icon-success me-4 mb-5 mb-sm-0"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-1"
}, "This is an alert with a thick border"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x fs-1 text-success"
})], -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "alert alert-dismissible bg-light-info border border-info border-3 border-dashed d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_20 = {
  "class": "svg-icon svg-icon-2hx svg-icon-info me-4 mb-5 mb-sm-0"
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-1"
}, "This is an alert with a thick dashed border"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x fs-1 text-info"
})], -1
/* HOISTED */
);

var _hoisted_23 = {
  "class": "py-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");

  var _component_CodeHighlighter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeHighlighter");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/files/fil024.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/communication/com003.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/art/art005.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/general/gen007.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("prettier-ignore"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "html"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("<div\n          class=\"\n            alert alert-dismissible\n            bg-light-primary\n            border border-primary\n            d-flex\n            flex-column flex-sm-row\n            w-100\n            p-5\n            mb-10\n          \"\n      >\n          <span\n              class=\"svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0\"\n          >\n            <inline-svg src=\"media/icons/duotune/files/fil024.svg\" />\n          </span>\n\n        <!--begin::Content-->\n        <div class=\"d-flex flex-column pe-0 pe-sm-10\">\n          <h5 class=\"mb-1\">This is an alert with a basic border</h5>\n          <span\n          >The alert component can be used to highlight certain parts of\n              your page for higher content visibility.</span\n          >\n        </div>\n        <!--end::Content-->\n        <!--begin::Close-->\n        <button\n            type=\"button\"\n            class=\"\n              position-absolute position-sm-relative\n              m-2 m-sm-0\n              top-0\n              end-0\n              btn btn-icon\n              ms-sm-auto\n            \"\n            data-bs-dismiss=\"alert\"\n        >\n          <i class=\"bi bi-x fs-1 text-primary\"></i>\n        </button>\n        <!--end::Close-->\n      </div>"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Code")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=template&id=3b08975a&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=template&id=3b08975a&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pt-10"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "light-color"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#light-color"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Light Colors ")], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Use "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" with "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".bg-light-{color}"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" classes to set the alert's style with a light color. ")], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add the class "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert-dismissible"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to the parent "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" wrapper and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "data-bs-dismiss=\"alert\""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to the close button to allow dismissing alerts. Please take note of the HTML markup sample below for all required responsive classes. ")], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "py-5"
};
var _hoisted_6 = {
  "class": "rounded border p-10 pb-0 d-flex flex-column"
};
var _hoisted_7 = {
  "class": "alert alert-dismissible bg-light-primary d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_8 = {
  "class": "svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-2 fw-bold"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_10 = {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
};
var _hoisted_11 = {
  "class": "svg-icon svg-icon-2x svg-icon-primary"
};
var _hoisted_12 = {
  "class": "alert alert-dismissible bg-light-danger d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_13 = {
  "class": "svg-icon svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-2 fw-bold"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_15 = {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
};
var _hoisted_16 = {
  "class": "svg-icon svg-icon-2x svg-icon-danger"
};
var _hoisted_17 = {
  "class": "alert alert-dismissible bg-light-success d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_18 = {
  "class": "svg-icon svg-icon-2hx svg-icon-success me-4 mb-5 mb-sm-0"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-2 fw-bold"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_20 = {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
};
var _hoisted_21 = {
  "class": "svg-icon svg-icon-2x svg-icon-success"
};
var _hoisted_22 = {
  "class": "alert alert-dismissible bg-light-info d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_23 = {
  "class": "svg-icon svg-icon-2hx svg-icon-info me-4 mb-5 mb-sm-0"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-2 fw-bold"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_25 = {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
};
var _hoisted_26 = {
  "class": "svg-icon svg-icon-2x svg-icon-info"
};
var _hoisted_27 = {
  "class": "py-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");

  var _component_CodeHighlighter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeHighlighter");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/files/fil024.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/arrows/arr061.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/communication/com003.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/arrows/arr061.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/art/art005.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/arrows/arr061.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/general/gen007.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/arrows/arr061.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("prettier-ignore"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "html"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("<div class=\"alert alert-primary d-flex align-items-center p-5 mb-10\">\n          <span class=\"svg-icon svg-icon-2hx svg-icon-primary me-4\">\n            <inline-svg src=\"media/icons/duotune/general/gen048.svg\" />\n          </span>\n        <div class=\"d-flex flex-column\">\n          <h4 class=\"mb-1 text-primary\">This is an alert</h4>\n          <span\n          >The alert component can be used to highlight certain parts of\n              your page for higher content visibility.</span\n          >\n        </div>\n      </div>"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Code")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=template&id=e87d05c8&ts=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=template&id=e87d05c8&ts=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pb-10"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "overview"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#overview"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Overview ")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "py-5"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "https://getbootstrap.com/docs/5.1/components/alerts/"
}, "Bootstrap Alerts", -1
/* HOISTED */
);

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" through creative use of Bootstrap utilities and with handpicked icons. ");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.appFullName) + " customizes the ", 1
  /* TEXT */
  ), _hoisted_4, _hoisted_5]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=template&id=72545290&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=template&id=72545290&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pt-10"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "rich-content-example"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#rich-content-example"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Rich Content Example ")], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-5"
}, " Here's a sample of an alert with rich content elements inside it. Please take note of the HTML markup sample below for all required classes. ", -1
/* HOISTED */
);

var _hoisted_4 = {
  "class": "py-5"
};
var _hoisted_5 = {
  "class": "rounded border p-10 pb-0 d-flex flex-column flex-center"
};
var _hoisted_6 = {
  "class": "alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10"
};
var _hoisted_7 = {
  type: "button",
  "class": "position-absolute top-0 end-0 m-2 btn btn-icon btn-icon-danger",
  "data-bs-dismiss": "alert"
};
var _hoisted_8 = {
  "class": "svg-icon svg-icon-1"
};
var _hoisted_9 = {
  "class": "svg-icon svg-icon-5tx svg-icon-danger mb-5"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"text-center text-dark\"><h1 class=\"fw-bolder mb-5\">This is an alert</h1><div class=\"separator separator-dashed border-danger opacity-25 mb-5\"></div><div class=\"mb-9\"> The alert component can be used to highlight certain parts of your page for <strong>higher content visibility</strong>. <br>Please read our <a href=\"#\" class=\"fw-bolder me-1\">Terms and Conditions</a>for more info. </div><!--begin::Buttons--><div class=\"d-flex flex-center flex-wrap\"><a href=\"#\" class=\"btn btn-outline btn-outline-danger btn-active-danger m-2\">Cancel</a><a href=\"#\" class=\"btn btn-danger m-2\">Ok, I got it</a></div><!--end::Buttons--></div>", 1);

var _hoisted_11 = {
  "class": "py-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");

  var _component_CodeHighlighter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeHighlighter");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/arrows/arr061.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/general/gen044.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("prettier-ignore"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "html",
    "field-height": 400
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("<div\n          class=\"\n            alert alert-dismissible\n            bg-light-danger\n            d-flex\n            flex-center flex-column\n            py-10\n            px-10 px-lg-20\n            mb-10\n          \"\n      >\n        <!--begin::Close-->\n        <button\n            type=\"button\"\n            class=\"\n              position-absolute\n              top-0\n              end-0\n              m-2\n              btn btn-icon btn-icon-danger\n            \"\n            data-bs-dismiss=\"alert\"\n        >\n            <span class=\"svg-icon svg-icon-1\">\n              <inline-svg src=\"media/icons/duotune/arrows/arr061.svg\" />\n            </span>\n        </button>\n        <!--end::Close-->\n        <span class=\"svg-icon svg-icon-5tx svg-icon-danger mb-5\">\n            <inline-svg src=\"media/icons/duotune/general/gen044.svg\" />\n          </span>\n        <!--begin::Content-->\n        <div class=\"text-center text-dark\">\n          <h1 class=\"fw-bolder mb-5\">This is an alert</h1>\n          <div\n              class=\"separator separator-dashed border-danger opacity-25 mb-5\"\n          ></div>\n          <div class=\"mb-9\">\n            The alert component can be used to highlight certain parts of your\n            page for <strong>higher content visibility</strong>. <br />Please\n            read our\n            <a href=\"#\" class=\"fw-bolder me-1\">Terms and Conditions</a>for\n            more info.\n          </div>\n          <!--begin::Buttons-->\n          <div class=\"d-flex flex-center flex-wrap\">\n            <a\n                href=\"#\"\n                class=\"btn btn-outline btn-outline-danger btn-active-danger m-2\"\n            >Cancel</a\n            >\n            <a href=\"#\" class=\"btn btn-danger m-2\">Ok, I got it</a>\n          </div>\n          <!--end::Buttons-->\n        </div>\n        <!--end::Content-->\n      </div>"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Code")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=template&id=04a3efa8&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=template&id=04a3efa8&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "pt-10"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "solid-colors"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#solid-colors"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Basic Example ")], -1
/* HOISTED */
);

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Use "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" with "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".bg-{color}"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" classes to set the alert's style with a solid color. ")], -1
/* HOISTED */
);

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "py-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add the class "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert-dismissible"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to the parent "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, ".alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" wrapper and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "data-bs-dismiss=\"alert\""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to the close button to allow dismissing alerts. Please take note of the HTML markup sample below for all required responsive classes. ")], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "py-5"
};
var _hoisted_6 = {
  "class": "rounded border p-10 pb-0 d-flex flex-column"
};
var _hoisted_7 = {
  "class": "alert alert-dismissible bg-primary d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_8 = {
  "class": "svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column text-light pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-2 text-light"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_10 = {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
};
var _hoisted_11 = {
  "class": "svg-icon svg-icon-2x svg-icon-light"
};
var _hoisted_12 = {
  "class": "alert alert-dismissible bg-danger d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_13 = {
  "class": "svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column text-light pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-2 text-light"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_15 = {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
};
var _hoisted_16 = {
  "class": "svg-icon svg-icon-2x svg-icon-light"
};
var _hoisted_17 = {
  "class": "alert alert-dismissible bg-success d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_18 = {
  "class": "svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column text-light pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-2 text-light"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_20 = {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
};
var _hoisted_21 = {
  "class": "svg-icon svg-icon-2x svg-icon-light"
};
var _hoisted_22 = {
  "class": "alert alert-dismissible bg-info d-flex flex-column flex-sm-row w-100 p-5 mb-10"
};
var _hoisted_23 = {
  "class": "svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-column text-light pe-0 pe-sm-10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "mb-2 text-light"
}, "This is an alert"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "The alert component can be used to highlight certain parts of your page for higher content visibility.")], -1
/* HOISTED */
);

var _hoisted_25 = {
  type: "button",
  "class": "position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto",
  "data-bs-dismiss": "alert"
};
var _hoisted_26 = {
  "class": "svg-icon svg-icon-2x svg-icon-light"
};
var _hoisted_27 = {
  "class": "py-5"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");

  var _component_CodeHighlighter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeHighlighter");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/files/fil024.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/arrows/arr061.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/communication/com003.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/arrows/arr061.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/art/art005.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/arrows/arr061.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Alert"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/general/gen007.svg"
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Close"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
    src: "media/icons/duotune/arrows/arr061.svg"
  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Close")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Alert")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Code"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("prettier-ignore"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "html"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("<div\n          class=\"\n            alert alert-dismissible\n            bg-info\n            d-flex\n            flex-column flex-sm-row\n            w-100\n            p-5\n            mb-10\n          \"\n      >\n          <span class=\"svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0\">\n            <inline-svg src=\"media/icons/duotune/general/gen007.svg\" />\n          </span>\n        <!--begin::Content-->\n        <div class=\"d-flex flex-column text-light pe-0 pe-sm-10\">\n          <h4 class=\"mb-2 text-light\">This is an alert</h4>\n          <span\n          >The alert component can be used to highlight certain parts of\n              your page for higher content visibility.</span\n          >\n        </div>\n        <!--end::Content-->\n        <!--begin::Close-->\n        <button\n            type=\"button\"\n            class=\"\n              position-absolute position-sm-relative\n              m-2 m-sm-0\n              top-0\n              end-0\n              btn btn-icon\n              ms-sm-auto\n            \"\n            data-bs-dismiss=\"alert\"\n        >\n            <span class=\"svg-icon svg-icon-2x svg-icon-light\">\n              <inline-svg src=\"media/icons/duotune/arrows/arr061.svg\" />\n            </span>\n        </button>\n        <!--end::Close-->\n      </div>"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Code")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/ts/src/core/helpers/breadcrumb.ts":
/*!*****************************************************!*\
  !*** ./resources/ts/src/core/helpers/breadcrumb.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentPageBreadcrumbs": () => (/* binding */ setCurrentPageBreadcrumbs),
/* harmony export */   "setCurrentPageTitle": () => (/* binding */ setCurrentPageTitle)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./resources/ts/src/store/index.ts");
/* harmony import */ var _store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/enums/StoreEnums */ "./resources/ts/src/store/enums/StoreEnums.ts");


/**
 * Sets current page breadcrumbs
 * @param {string} pageTitle Current page title
 * @param {Array<string>} breadcrumbs Current page breadcrumbs
 */

var setCurrentPageBreadcrumbs = function setCurrentPageBreadcrumbs(pageTitle, breadcrumbs) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.SET_BREADCRUMB_ACTION, {
    title: pageTitle,
    pageBreadcrumbPath: breadcrumbs
  });
};
/**
 * Sets current page breadcrumbs
 * @param {string} title Current page title name
 */

var setCurrentPageTitle = function setCurrentPageTitle(title) {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Actions.SET_BREADCRUMB_ACTION, {
    title: title
  });
};

/***/ }),

/***/ "./resources/ts/src/core/helpers/documentation.ts":
/*!********************************************************!*\
  !*** ./resources/ts/src/core/helpers/documentation.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appFullName": () => (/* binding */ appFullName),
/* harmony export */   "appLogo": () => (/* binding */ appLogo),
/* harmony export */   "appName": () => (/* binding */ appName),
/* harmony export */   "appVersion": () => (/* binding */ appVersion),
/* harmony export */   "bootstrapDocLink": () => (/* binding */ bootstrapDocLink),
/* harmony export */   "dribbleLink": () => (/* binding */ dribbleLink),
/* harmony export */   "facebookLink": () => (/* binding */ facebookLink),
/* harmony export */   "githubLink": () => (/* binding */ githubLink),
/* harmony export */   "instagramLink": () => (/* binding */ instagramLink),
/* harmony export */   "previewLink": () => (/* binding */ previewLink),
/* harmony export */   "purchaseLink": () => (/* binding */ purchaseLink),
/* harmony export */   "sassComponentsPath": () => (/* binding */ sassComponentsPath),
/* harmony export */   "twitterLink": () => (/* binding */ twitterLink),
/* harmony export */   "useCopyClipboard": () => (/* binding */ useCopyClipboard),
/* harmony export */   "youtubeLink": () => (/* binding */ youtubeLink)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");


/* eslint-disable  @typescript-eslint/no-explicit-any */

/**
 * Return name of the app
 * @returns {string}
 */

var appName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_NAME;
});
/**
 * Return version of the app
 * @returns {string}
 */

var appVersion = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_VERSION;
});
/**
 * Return full name of the app
 * @returns {string}
 */

var appFullName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_FULL_NAME;
});
/**
 * Return logo of the app
 * @returns {string}
 */

var appLogo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_LOGO;
});
/**
 * Return bootstrap doc link
 * @returns {string}
 */

var bootstrapDocLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_BOOTSTRAP_DOCS_LINK;
});
/**
 * Return sass components path
 * @returns {string}
 */

var sassComponentsPath = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_SASS_COMPONENTS_PATH;
});
/**
 * Return link of the app preview
 * @returns {string}
 */

var previewLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_PREVIEW_LINK;
});
/**
 * Returns link to purchase product
 * @returns {string}
 */

var purchaseLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_PURCHESE_LINK;
});
/**
 * Returns link to youtube channel
 * @returns {string}
 */

var youtubeLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_YOUTUBE_LINK;
});
/**
 * Returns link to github
 * @returns {string}
 */

var githubLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_GITHUB_LINK;
});
/**
 * Returns link to twitter
 * @returns {string}
 */

var twitterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_TWITTER_LINK;
});
/**
 * Returns link to instagram
 * @returns {string}
 */

var instagramLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_INSTAGRAM_LINK;
});
/**
 * Returns link to facebook
 * @returns {string}
 */

var facebookLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_FACEBOOK;
});
/**
 * Returns link to dribble
 * @returns {string}
 */

var dribbleLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
  return process.env.VUE_APP_DRIBBBLE;
}); //code copy button initialization

var useCopyClipboard = function useCopyClipboard() {
  var _init = function _init(element) {
    var elements = element;

    if (typeof elements === "undefined") {
      elements = document.querySelectorAll(".highlight");
    }

    if (elements && elements.length > 0) {
      for (var i = 0; i < elements.length; ++i) {
        var highlight = elements[i];
        var copy = highlight.querySelector(".highlight-copy");

        if (copy) {
          var clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_1___default())(copy, {
            target: function target(trigger) {
              var highlight = trigger.closest(".highlight");

              if (highlight) {
                var el = highlight.querySelector(".tab-pane.active");

                if (el == null) {
                  el = highlight.querySelector(".highlight-code");
                }

                return el;
              }

              return highlight;
            }
          });
          clipboard.on("success", function (e) {
            var caption = e.trigger.innerHTML;
            e.trigger.innerHTML = "copied";
            e.clearSelection();
            setTimeout(function () {
              e.trigger.innerHTML = caption;
            }, 2000);
          });
        }
      }
    }
  };

  return {
    init: function init(element) {
      _init(element);
    }
  };
};

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_623__) {

"use strict";

// EXPORTS
__nested_webpack_require_623__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __nested_webpack_require_623__(279);
var tiny_emitter_default = /*#__PURE__*/__nested_webpack_require_623__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __nested_webpack_require_623__(370);
var listen_default = /*#__PURE__*/__nested_webpack_require_623__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __nested_webpack_require_623__(817);
var select_default = /*#__PURE__*/__nested_webpack_require_623__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */

var fakeCopyAction = function fakeCopyAction(value, options) {
  var fakeElement = createFakeElement(value);
  options.container.appendChild(fakeElement);
  var selectedText = select_default()(fakeElement);
  command('copy');
  fakeElement.remove();
  return selectedText;
};
/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */


var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    selectedText = fakeCopyAction(target, options);
  } else if (target instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(target === null || target === void 0 ? void 0 : target.type)) {
    // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    selectedText = fakeCopyAction(target.value, options);
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_15749__) {

var closest = __nested_webpack_require_15749__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_19113__) {

var is = __nested_webpack_require_19113__(879);
var delegate = __nested_webpack_require_19113__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_24495__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24495__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_24495__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_24495__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_24495__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_24495__.o(definition, key) && !__nested_webpack_require_24495__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_24495__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_24495__(686);
/******/ })()
.default;
});

/***/ }),

/***/ "./resources/ts/src/components/highlighters/CodeHighlighter.vue":
/*!**********************************************************************!*\
  !*** ./resources/ts/src/components/highlighters/CodeHighlighter.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodeHighlighter_vue_vue_type_template_id_9bc851e6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true");
/* harmony import */ var _CodeHighlighter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodeHighlighter.vue?vue&type=script&lang=ts */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_CodeHighlighter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CodeHighlighter_vue_vue_type_template_id_9bc851e6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/components/highlighters/CodeHighlighter.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/Alerts.vue":
/*!**************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/Alerts.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Alerts_vue_vue_type_template_id_65516f7c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alerts.vue?vue&type=template&id=65516f7c&ts=true */ "./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=template&id=65516f7c&ts=true");
/* harmony import */ var _Alerts_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alerts.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Alerts_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Alerts_vue_vue_type_template_id_65516f7c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/documentation/base/Alerts.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/BasicExample.vue":
/*!***************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/BasicExample.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BasicExample_vue_vue_type_template_id_2146e402_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicExample.vue?vue&type=template&id=2146e402&ts=true */ "./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=template&id=2146e402&ts=true");
/* harmony import */ var _BasicExample_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicExample.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BasicExample_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BasicExample_vue_vue_type_template_id_2146e402_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/documentation/base/alerts/BasicExample.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue":
/*!*****************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BorderExamples_vue_vue_type_template_id_18ee15f8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BorderExamples.vue?vue&type=template&id=18ee15f8&ts=true */ "./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=template&id=18ee15f8&ts=true");
/* harmony import */ var _BorderExamples_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BorderExamples.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_BorderExamples_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_BorderExamples_vue_vue_type_template_id_18ee15f8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/documentation/base/alerts/BorderExamples.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/LightColors.vue":
/*!**************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/LightColors.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LightColors_vue_vue_type_template_id_3b08975a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LightColors.vue?vue&type=template&id=3b08975a&ts=true */ "./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=template&id=3b08975a&ts=true");
/* harmony import */ var _LightColors_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LightColors.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LightColors_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LightColors_vue_vue_type_template_id_3b08975a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/documentation/base/alerts/LightColors.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/Overview.vue":
/*!***********************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/Overview.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Overview_vue_vue_type_template_id_e87d05c8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Overview.vue?vue&type=template&id=e87d05c8&ts=true */ "./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=template&id=e87d05c8&ts=true");
/* harmony import */ var _Overview_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Overview.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Overview_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Overview_vue_vue_type_template_id_e87d05c8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/documentation/base/alerts/Overview.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue":
/*!*********************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RichContentExample_vue_vue_type_template_id_72545290_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RichContentExample.vue?vue&type=template&id=72545290&ts=true */ "./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=template&id=72545290&ts=true");
/* harmony import */ var _RichContentExample_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RichContentExample.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_RichContentExample_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_RichContentExample_vue_vue_type_template_id_72545290_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/documentation/base/alerts/RichContentExample.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/SolidColors.vue":
/*!**************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/SolidColors.vue ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SolidColors_vue_vue_type_template_id_04a3efa8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SolidColors.vue?vue&type=template&id=04a3efa8&ts=true */ "./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=template&id=04a3efa8&ts=true");
/* harmony import */ var _SolidColors_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SolidColors.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SolidColors_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SolidColors_vue_vue_type_template_id_04a3efa8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/documentation/base/alerts/SolidColors.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts":
/*!**********************************************************************************************!*\
  !*** ./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeHighlighter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeHighlighter_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CodeHighlighter.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=script&lang=ts":
/*!**************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Alerts_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Alerts_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Alerts.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BasicExample_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BasicExample_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BasicExample.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=script&lang=ts":
/*!*****************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=script&lang=ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BorderExamples_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BorderExamples_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BorderExamples.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LightColors_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LightColors_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LightColors.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Overview_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Overview_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Overview.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=script&lang=ts":
/*!*********************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=script&lang=ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RichContentExample_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RichContentExample_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RichContentExample.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=script&lang=ts":
/*!**************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=script&lang=ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SolidColors_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SolidColors_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SolidColors.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeHighlighter_vue_vue_type_template_id_9bc851e6_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CodeHighlighter_vue_vue_type_template_id_9bc851e6_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/components/highlighters/CodeHighlighter.vue?vue&type=template&id=9bc851e6&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=template&id=65516f7c&ts=true":
/*!****************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=template&id=65516f7c&ts=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Alerts_vue_vue_type_template_id_65516f7c_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Alerts_vue_vue_type_template_id_65516f7c_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Alerts.vue?vue&type=template&id=65516f7c&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/Alerts.vue?vue&type=template&id=65516f7c&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=template&id=2146e402&ts=true":
/*!*****************************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=template&id=2146e402&ts=true ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BasicExample_vue_vue_type_template_id_2146e402_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BasicExample_vue_vue_type_template_id_2146e402_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BasicExample.vue?vue&type=template&id=2146e402&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BasicExample.vue?vue&type=template&id=2146e402&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=template&id=18ee15f8&ts=true":
/*!*******************************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=template&id=18ee15f8&ts=true ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BorderExamples_vue_vue_type_template_id_18ee15f8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_BorderExamples_vue_vue_type_template_id_18ee15f8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./BorderExamples.vue?vue&type=template&id=18ee15f8&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/BorderExamples.vue?vue&type=template&id=18ee15f8&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=template&id=3b08975a&ts=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=template&id=3b08975a&ts=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LightColors_vue_vue_type_template_id_3b08975a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LightColors_vue_vue_type_template_id_3b08975a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LightColors.vue?vue&type=template&id=3b08975a&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/LightColors.vue?vue&type=template&id=3b08975a&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=template&id=e87d05c8&ts=true":
/*!*************************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=template&id=e87d05c8&ts=true ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Overview_vue_vue_type_template_id_e87d05c8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Overview_vue_vue_type_template_id_e87d05c8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Overview.vue?vue&type=template&id=e87d05c8&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/Overview.vue?vue&type=template&id=e87d05c8&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=template&id=72545290&ts=true":
/*!***********************************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=template&id=72545290&ts=true ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RichContentExample_vue_vue_type_template_id_72545290_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_RichContentExample_vue_vue_type_template_id_72545290_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./RichContentExample.vue?vue&type=template&id=72545290&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/RichContentExample.vue?vue&type=template&id=72545290&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=template&id=04a3efa8&ts=true":
/*!****************************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=template&id=04a3efa8&ts=true ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SolidColors_vue_vue_type_template_id_04a3efa8_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SolidColors_vue_vue_type_template_id_04a3efa8_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SolidColors.vue?vue&type=template&id=04a3efa8&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/base/alerts/SolidColors.vue?vue&type=template&id=04a3efa8&ts=true");


/***/ })

}]);