(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_documentation_get-started_VueLaravelIntegration_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=script&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=script&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/helpers/breadcrumb */ "./resources/ts/src/core/helpers/breadcrumb.ts");
/* harmony import */ var _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/highlighters/CodeHighlighter.vue */ "./resources/ts/src/components/highlighters/CodeHighlighter.vue");
/* harmony import */ var _core_helpers_documentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/core/helpers/documentation */ "./resources/ts/src/core/helpers/documentation.ts");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "vue-laravel-integration",
  components: {
    CodeHighlighter: _components_highlighters_CodeHighlighter_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,_core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_1__.setCurrentPageBreadcrumbs)("Vue + Laravel integration", ["Getting Started"]);
    });
    var htmlCode = "<!DOCTYPE html>\n<html lang=\"{{ str_replace('_', '-', app()->getLocale()) }}\">\n<head>\n   <meta charset=\"utf-8\">\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n   <meta name=\"csrf-token\" value=\"{{ csrf_token() }}\"/>\n   <title>Laravel Vue Example</title>\n   <link href=\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Roboto:300,400,500,600,700|Material+Icons\" rel=\"stylesheet\">\n</head>\n<body style=\"--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px\">\n   <div id=\"app\" class=\"d-flex flex-column flex-root\">\n   </div>\n   <script src=\"{{ mix('js/app.js') }}\" type=\"text/javascript\"></scr" + "ipt>\n</body>\n</html>";
    return {
      htmlCode: htmlCode,
      appName: _core_helpers_documentation__WEBPACK_IMPORTED_MODULE_3__.appName
    };
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=template&id=68674d23&ts=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=template&id=68674d23&ts=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"pb-10\"><!--begin::Heading--><h1 class=\"anchor fw-bolder mb-5\" id=\"overview\"><a href=\"#overview\"></a> Overview </h1><!--end::Heading--><!--begin::Block--><div class=\"py-4\"><a href=\"https://laravel.com/\">Laravel</a> is one of the most loved web frameworks by the developers. It makes development so easier and fun. <a href=\"https://vuejs.org/\">VueJs</a> is one of the most loved JavaScript and rapidly growing Web Framework. This doc will cover steps on implement <a href=\"https://v3.vuejs.org/\">Vue 3</a> in <a href=\"https://www.typescriptlang.org/\">TypeScript</a> with <a href=\"https://laravel.com/docs/8.x/mix\">Laravel Mix</a> and <a href=\"https://v3.vuejs.org/guide/composition-api-introduction.html\">Composition API</a> from scratch. </div><!--end::Block--></div>", 1);

var _hoisted_4 = {
  "class": "pb-10"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "create_laravel_new_project"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#create_laravel_new_project"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Create Laravel new project ")], -1
/* HOISTED */
);

var _hoisted_6 = {
  "class": "py-4"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" In the beginning we need to create Laravel+Vue project (in this example, we wll creat a project named ");

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", null, "vue_laravel", -1
/* HOISTED */
);

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(") by running following command: ");

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)( /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("composer create-project --prefer-dist laravel/laravel vue_laravel"));

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Navigate to the newly created folder with following command. ");

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)( /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("cd vue_laravel"));

var _hoisted_13 = {
  "class": "pb-10"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "install_dependencies"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#install_dependencies"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Install dependencies ")], -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "py-4"
};
var _hoisted_16 = {
  "class": "py-4"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "vue_laravel/package.json", -1
/* HOISTED */
);

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_19 = {
  "class": "py-4"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Now let’s install Vue loader for webpack:: ");

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)( /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("npm install vue-loader@next @vue/compiler-sfc"));

var _hoisted_22 = {
  "class": "pb-4"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Also we need to install ts-loader as dev dependency: ");

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)( /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("npm install ts-loader --dev"));

var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" As a result you should have package.json as a shown in the code preview below. ");

var _hoisted_26 = {
  "class": "pb-4"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Install all dependencies by running following command: ");

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)( /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("npm install"));

var _hoisted_29 = {
  "class": "pb-10"
};

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "prepare_resource_files"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#prepare_resource_files"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Prepare vue files and theme resources. ")], -1
/* HOISTED */
);

var _hoisted_31 = {
  "class": "py-4"
};

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<li class=\"py-4\"> To use theme images we need to copy media folder from <code>public</code> and paste it into <code>vue_laravel/public</code>. </li><li class=\"py-4\"> Create ts folder inside <code>vue_laravel/resources/ts</code> and inside this folder create file <code>app.ts</code>. </li><li class=\"py-4\"> All other required files for vue project are placed inside <code>src</code> folder we can fully copy this folder and place it inside <code>vue_laravel/resources/ts</code>. </li>", 3);

var _hoisted_35 = {
  "class": "py-4"
};

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" The main entry point of the vue project is ");

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "main.ts", -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(", we need to import it in ");

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "app.ts", -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("s ");

var _hoisted_42 = {
  "class": "pb-10"
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "setup_typescript_config"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#setup_typscript_config"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Setup typescript config. ")], -1
/* HOISTED */
);

var _hoisted_44 = {
  "class": "py-4"
};

var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" TypeScript requires a configuration file to work properly. We can create one using "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "node_modules/.bin/tsc --init"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". (no need for the full path if you have a global TypeScript installation) that appears in the newly created "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "tsconfig.json"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" file. ")], -1
/* HOISTED */
);

var _hoisted_46 = {
  "class": "pt-10"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Copy below typescript configuration and paste it into ");

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "tsconfig.json", -1
/* HOISTED */
);

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" in laravel app. ");

var _hoisted_50 = {
  "class": "pb-10"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "configure_webpack_mix"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#configure_webpack_mix"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Configure webpack.mix.js ")], -1
/* HOISTED */
);

var _hoisted_52 = {
  "class": "py-4"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To use Vue codebase in Laravel we need to bundle app.ts, copy the following webpack.mix.js configuration example and paste into ");

var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "webpack.mix.js", -1
/* HOISTED */
);

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" in your ");

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "vue_laravel/webpack.mix.js", -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ");

var _hoisted_58 = {
  "class": "pb-10"
};

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "build_client"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#build_client"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Build client ")], -1
/* HOISTED */
);

var _hoisted_60 = {
  "class": "py-4"
};

var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" We are ready to build client assets to do it run the following command: ");

var _hoisted_62 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)( /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("npm run dev"));

var _hoisted_63 = {
  "class": "pb-10"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "prepare_app_blade_file"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#build_files"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Prepare app.blade.php ")], -1
/* HOISTED */
);

var _hoisted_65 = {
  "class": "py-4"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "pb-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Now we can add a new file inside "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "resources/views"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". Let's call it "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "app.blade.php")], -1
/* HOISTED */
);

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" And add inside ");

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "app.blade.php", -1
/* HOISTED */
);

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" file this code. ");

var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Now we can add new route into file ");

var _hoisted_71 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "routes/web.php", -1
/* HOISTED */
);

var _hoisted_72 = {
  "class": "pb-10"
};

var _hoisted_73 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "anchor fw-bolder mb-5",
  id: "run_application"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#run_application"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Run Application ")], -1
/* HOISTED */
);

var _hoisted_74 = {
  "class": "py-4"
};

var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" To run vue+laravel application in your terminal, run the following command: ");

var _hoisted_76 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)( /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("php artisan serve"));

var _hoisted_77 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Wait for the app to display that it's listening on "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "http://127.0.0.1:8000"
}, "http://127.0.0.1:8000")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and open this url in your browser. ")], -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_CodeHighlighter = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("CodeHighlighter");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_7, _hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "bash"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "bash"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.appName) + "'s 8 vue theme already contains almost all required dependencies for this integration, to get started we can just copy list of dependencies and devDependencies from package.json in Vue and place them into ", 1
  /* TEXT */
  ), _hoisted_17, _hoisted_18]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "bash"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_21];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "bash"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_24];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    "field-height": "400",
    lang: "javascript"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("{\n    \"private\": true,\n    \"scripts\": {\n        \"dev\": \"npm run development\",\n        \"development\": \"mix\",\n        \"watch\": \"mix watch\",\n        \"watch-poll\": \"mix watch -- --watch-options-poll=1000\",\n        \"hot\": \"mix watch --hot\",\n        \"prod\": \"npm run production\",\n        \"production\": \"mix --production\"\n    },\n    \"dependencies\": {\n        \"@fortawesome/fontawesome-free\": \"^5.15.2\",\n        \"@popperjs/core\": \"^2.9.1\",\n        \"@soerenmartius/vue3-clipboard\": \"^0.1.2\",\n        \"@types/object-path\": \"^0.11.0\",\n        \"@vue/compiler-sfc\": \"^3.1.5\",\n        \"@vueform/multiselect\": \"^1.2.5\",\n        \"@yaireo/tagify\": \"^3.23.1\",\n        \"animate.css\": \"^4.1.1\",\n        \"apexcharts\": \"3.23.1\",\n        \"axios\": \"^0.21.1\",\n        \"axios-mock-adapter\": \"^1.18.1\",\n        \"bootstrap\": \"5.0.1\",\n        \"bootstrap-icons\": \"^1.4.0\",\n        \"clipboard\": \"^2.0.6\",\n        \"deepmerge\": \"^4.2.2\",\n        \"dropzone\": \"^5.7.2\",\n        \"element-plus\": \"^1.0.2-beta.52\",\n        \"i18n\": \"^0.13.3\",\n        \"line-awesome\": \"^1.3.0\",\n        \"nouislider\": \"^14.6.3\",\n        \"object-path\": \"^0.11.4\",\n        \"popper.js\": \"^1.16.1\",\n        \"prism-themes\": \"^1.5.0\",\n        \"prismjs\": \"^1.23.0\",\n        \"quill\": \"^1.3.6\",\n        \"socicon\": \"^3.0.5\",\n        \"sweetalert2\": \"^9.10.12\",\n        \"vee-validate\": \"^4.2.1\",\n        \"vue\": \"^3.1.5\",\n        \"vue-axios\": \"^3.2.2\",\n        \"vue-clipboard3\": \"^1.0.1\",\n        \"vue-i18n\": \"^9.1.6\",\n        \"vue-inline-svg\": \"^3.0.0-beta.2\",\n        \"vue-loader\": \"^16.3.3\",\n        \"vue-prism-component\": \"^1.2.0\",\n        \"vue-router\": \"^4.0.3\",\n        \"vue3-apexcharts\": \"^1.2.1\",\n        \"vue3-clipboard\": \"^1.0.0\",\n        \"vue3-highlightjs\": \"^1.0.5\",\n        \"vuex\": \"^4.0.0\",\n        \"yup\": \"^0.32.8\"\n    },\n    \"devDependencies\": {\n        \"@types/prismjs\": \"^1.16.2\",\n        \"laravel-mix\": \"^6.0.6\",\n        \"node-sass\": \"^4.12.0\",\n        \"resolve-url-loader\": \"^4.0.0\",\n        \"sass\": \"^1.36.0\",\n        \"sass-loader\": \"^12.1.0\",\n        \"ts-loader\": \"^9.2.4\",\n        \"typescript\": \"^4.3.5\",\n        \"vuex-module-decorators\": \"^1.0.1\"\n    }\n}"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_26, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "bash"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_28];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_31, [_hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_35, [_hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "javascript"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("import \"./src/main\";"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_41])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_46, [_hoisted_47, _hoisted_48, _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    "field-height": 400,
    lang: "javascript"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("{\n  \"compilerOptions\": {\n    \"experimentalDecorators\": true,\n    \"emitDecoratorMetadata\": true,\n    \"noImplicitAny\": false,\n    \"target\": \"es5\",\n    \"module\": \"esnext\",\n    \"strict\": true,\n    \"jsx\": \"preserve\",\n    \"importHelpers\": true,\n    \"moduleResolution\": \"node\",\n    \"skipLibCheck\": true,\n    \"esModuleInterop\": true,\n    \"allowSyntheticDefaultImports\": true,\n    \"sourceMap\": true,\n    \"baseUrl\": \".\",\n    \"paths\": {\n      \"@/*\": [\n        \"resources/ts/src/*\"\n      ]\n    },\n    \"lib\": [\n      \"esnext\",\n      \"dom\",\n      \"dom.iterable\",\n      \"scripthost\"\n    ]\n  },\n  \"include\": [\n    \"resources/ts/src/**/*.ts\",\n    \"resources/ts/src/**/*.tsx\",\n    \"resources/ts/src/**/*.vue\"\n  ],\n  \"exclude\": [\n    \"node_modules\"\n  ]\n}"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_53, _hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "javascript"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("const mix = require('laravel-mix');\nconst path = require('path');\n\n\nmix\n.ts(\"resources/ts/app.ts\", \"public/js\")\n.vue({ version: 3 })\n.webpackConfig({\n    resolve: {\n      alias: {\n        '@': path.resolve(__dirname, 'resources/ts/src/')\n      }\n    }\n  });"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_60, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_61, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "bash"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_62];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_67, _hoisted_68, _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "html"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.htmlCode), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_70, _hoisted_71, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "javascript"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)("Route::get('/', function () {\n    return view('app');\n});"), 1
      /* TEXT */
      )];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Heading"), _hoisted_73, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Heading"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Block"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [_hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_CodeHighlighter, {
    lang: "bash"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_76];
    }),
    _: 1
    /* STABLE */

  })]), _hoisted_77])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Block")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section")])])], 2112
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

/***/ "./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue":
/*!************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VueLaravelIntegration_vue_vue_type_template_id_68674d23_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueLaravelIntegration.vue?vue&type=template&id=68674d23&ts=true */ "./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=template&id=68674d23&ts=true");
/* harmony import */ var _VueLaravelIntegration_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueLaravelIntegration.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_VueLaravelIntegration_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_VueLaravelIntegration_vue_vue_type_template_id_68674d23_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue"]])
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

/***/ "./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=script&lang=ts":
/*!************************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=script&lang=ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VueLaravelIntegration_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VueLaravelIntegration_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VueLaravelIntegration.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=script&lang=ts");
 

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

/***/ "./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=template&id=68674d23&ts=true":
/*!**************************************************************************************************************************!*\
  !*** ./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=template&id=68674d23&ts=true ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VueLaravelIntegration_vue_vue_type_template_id_68674d23_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_VueLaravelIntegration_vue_vue_type_template_id_68674d23_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./VueLaravelIntegration.vue?vue&type=template&id=68674d23&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/documentation/get-started/VueLaravelIntegration.vue?vue&type=template&id=68674d23&ts=true");


/***/ })

}]);