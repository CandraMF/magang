"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_layout_AuthLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=script&lang=ts":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=script&lang=ts ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_ts_components_ScrollTopComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/ts/components/_ScrollTopComponent */ "./resources/ts/src/assets/ts/components/_ScrollTopComponent.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "KTScrollTop",
  components: {},
  setup: function setup() {
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      _assets_ts_components_ScrollTopComponent__WEBPACK_IMPORTED_MODULE_1__.ScrollTopComponent.reinitialization();
    });
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=template&id=bf103284&ts=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=template&id=bf103284&ts=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  id: "kt_scrolltop",
  ref: "kt_scrolltop",
  "class": "scrolltop",
  style: {
    "height": "50px",
    "width": "50px"
  },
  "data-kt-scrolltop": "true"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <inline-svg src=\"/media/icons/duotune/arrows/arr066.svg\" /> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "fas fa-chevron-up text-white fs-2x"
})], -1
/* HOISTED */
);

var _hoisted_3 = [_hoisted_2];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" begin::Scrolltop "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, _hoisted_3, 512
  /* NEED_PATCH */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" end::Scrolltop ")], 2112
  /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_extras_ScrollTop_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layout/extras/ScrollTop.vue */ "./resources/ts/src/layout/extras/ScrollTop.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    KTScrollTop: _layout_extras_ScrollTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      effect: "",
      view: {
        topOfPage: true,
        width: 0,
        height: 0,
        type: 'md'
      }
    };
  },
  watch: {
    $route: function $route(to, from) {
      if (to.path == '/login') {
        this.effect = 'out-in-translate-fade';
      } else {
        this.effect = 'in-out-translate-fade';
      } // if(this.$router.history.current["path"] === "/login") {
      //     this.effect = 'out-in-translate-fade'
      // } else {
      //     this.effect = 'in-out-translate-fade'
      // }

    }
  },
  beforeMount: function beforeMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleResize: function handleResize() {
      this.view.width = window.innerWidth;
      this.view.height = window.innerHeight;

      if (this.view.width < 768) {
        this.view.type = 'xs';
      } else if (this.view.width >= 768 && this.view.width <= 992) {
        this.view.type = 'sm';
      } else if (this.view.width > 992 && this.view.width <= 1200) {
        this.view.type = 'md';
      } else {
        this.view.type = 'lg';
      }
    },
    handleScroll: function handleScroll() {
      if (this.view.type != 'md' && this.view.type != 'lg') {
        if (window.pageYOffset > 0) {
          if (this.view.topOfPage) this.view.topOfPage = false;
        } else {
          if (!this.view.topOfPage) this.view.topOfPage = true;
        }
      } else {
        if (window.pageYOffset > 300) {
          if (this.view.topOfPage) this.view.topOfPage = false;
        } else {
          if (!this.view.topOfPage) this.view.topOfPage = true;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=template&id=578dafd4&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=template&id=578dafd4&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-578dafd4"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "min-vh-100",
  style: {
    "background-size": "cover",
    "background-repeat": "no-repeat",
    "background-image": "url('/image/bg_landing10.png')",
    "background-attachment": "fixed"
  }
};
var _hoisted_2 = {
  "class": "container-fluid px-4"
};
var _hoisted_3 = ["src"];

var _hoisted_4 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "navbar-toggler",
    style: {
      "border": "none",
      "outline": "none"
    },
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
    "class": "text-dark fas fa-bars fs-2x"
  })], -1
  /* HOISTED */
  );
});

var _hoisted_5 = {
  "class": "collapse navbar-collapse",
  id: "navbarSupportedContent"
};

var _hoisted_6 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "navbar-nav me-auto ms-5 ps-3 mb-lg-0"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_7 = {
  key: 0,
  "class": "navbar-nav ms-5 ps-3 mb-2 mb-lg-0 mb-sm-5"
};
var _hoisted_8 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Beranda");

var _hoisted_10 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Prosedur Magang");

var _hoisted_12 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Pengumuman");

var _hoisted_14 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Daftar");

var _hoisted_16 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Masuk");

var _hoisted_18 = {
  key: 1,
  "class": "navbar-nav"
};

var _hoisted_19 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "symbol symbol-50px symbol-circle"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "symbol-label fs-2 fw-bold text-success"
  }, "A")], -1
  /* HOISTED */
  );
});

var _hoisted_20 = [_hoisted_19];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["navbar navbar-expand-lg", [$data.view.type != 'md' && $data.view.type != 'lg' ? 'navbarSm' : '', {
      'navOnScroll': !$data.view.topOfPage,
      'navOnTop': $data.view.topOfPage
    }]]),
    style: {
      "z-index": "999",
      "font-size": "12pt !important",
      "transition": ".2s ease-in-out"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "class": "navbar-brand",
    to: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <img v-if=\"view.topOfPage\" :src=\"'/image/logo-bpkh-s-white.png'\" alt=\"\" style=\"width: 100px\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: '/image/logo-bpkh-s.png',
        alt: "",
        style: {
          "width": "130px"
        },
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
          'navLogoOnScroll': !$data.view.topOfPage
        })
      }, null, 10
      /* CLASS, PROPS */
      , _hoisted_3)];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, _ctx.user == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active btn",
    to: "/beranda/divisi",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      'navLinkOnScroll': !$data.view.topOfPage
    }]),
    "aria-current": "page"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active btn",
    to: "/prosedurMagang",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      'navLinkOnScroll': !$data.view.topOfPage
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_11];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active btn",
    to: "/pengumuman",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      'navLinkOnScroll': !$data.view.topOfPage
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_13];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active btn",
    to: "/auth/register",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      'navLinkOnScroll': !$data.view.topOfPage
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_15];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "btn",
    style: {
      "border-radius": "6px",
      "background": "#DC8100",
      "color": "white !important"
    },
    to: "/auth/login",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link btn", {
      'navLinkOnScroll': !$data.view.topOfPage
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_17];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_18, _hoisted_20))])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"mb-10\" :class=\"{ 'auth-layout' : !(view.type == 'sm' || view.type == 'xs') }\">\n            <router-view v-slot=\"{ Component }\">\n                <transition :name=\"this.effect\" mode=\"out-in\">\n                    <component :is=\"Component\" />\n                </transition>\n            </router-view>\n        </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["mb-10", {
      'auth-layout': !($data.view.type == 'sm' || $data.view.type == 'xs')
    }])
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)], 2
  /* CLASS */
  )]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.auth-layout[data-v-578dafd4] {\n        margin-top: 75px\n}\n.active[data-v-578dafd4] {\n        border-radius: 6px;\n        background: #092F53;\n        color: white !important;\n}\n.navOnTop[data-v-578dafd4]{\n        background: transparent;\n        width: 100%;\n        padding: 30px 50px;\n        position: absolute;\n}\n.navOnScroll[data-v-578dafd4] {\n        box-shadow: 0 0 10px #aaa;\n        background-color: #fff;\n        padding: 10px 20px !important;\n        position: fixed;\n        width: 100%;\n}\n.navLogoOnScroll[data-v-578dafd4]{\n        width: 100px !important;\n}\n.navbarSm[data-v-578dafd4] {\n        position: relative !important;\n        padding: 10px 20px !important;\n        background: white !important;\n}\n.navbarSm .navbar-brand img[data-v-578dafd4]{\n        padding: 10px 20px !important;\n}\n.navbarSm .nav-link[data-v-578dafd4]:hover{\n        color: black !important;\n}\n.navbarSm .nav-item .active[data-v-578dafd4]{\n        color: white !important;\n}\n.nav-link[data-v-578dafd4]{\n        color: rgba(0, 0, 0, 0.644) !important;\n        font-weight: 600;\n}\n.nav-link[data-v-578dafd4]:hover{\n        color: #DC8100 !important;\n}\n.navOnScroll  .nav-link[data-v-578dafd4]:hover:not(.active){\n        color: #000000 !important;\n}\n.nav-item .active[data-v-578dafd4]{\n        color: #ffffff !important;\n}\n.navOnScroll .active[data-v-578dafd4] {\n        color: white !important;\n}\nh5[data-v-578dafd4] {\n        font-weight: 500;\n        font-size: 18pt;\n        color: white;\n}\nh3[data-v-578dafd4] {\n        color: white;\n}\nfooter .col-md-4[data-v-578dafd4] {\n        padding: 0px 40px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_style_index_0_id_578dafd4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_style_index_0_id_578dafd4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_style_index_0_id_578dafd4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/ts/src/layout/AuthLayout.vue":
/*!************************************************!*\
  !*** ./resources/ts/src/layout/AuthLayout.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AuthLayout_vue_vue_type_template_id_578dafd4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=template&id=578dafd4&scoped=true */ "./resources/ts/src/layout/AuthLayout.vue?vue&type=template&id=578dafd4&scoped=true");
/* harmony import */ var _AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=script&lang=js */ "./resources/ts/src/layout/AuthLayout.vue?vue&type=script&lang=js");
/* harmony import */ var _AuthLayout_vue_vue_type_style_index_0_id_578dafd4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css */ "./resources/ts/src/layout/AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_AuthLayout_vue_vue_type_template_id_578dafd4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-578dafd4"],['__file',"resources/ts/src/layout/AuthLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/layout/extras/ScrollTop.vue":
/*!******************************************************!*\
  !*** ./resources/ts/src/layout/extras/ScrollTop.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScrollTop_vue_vue_type_template_id_bf103284_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollTop.vue?vue&type=template&id=bf103284&ts=true */ "./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=template&id=bf103284&ts=true");
/* harmony import */ var _ScrollTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollTop.vue?vue&type=script&lang=ts */ "./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ScrollTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ScrollTop_vue_vue_type_template_id_bf103284_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/layout/extras/ScrollTop.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=script&lang=ts":
/*!******************************************************************************!*\
  !*** ./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=script&lang=ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScrollTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScrollTop_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScrollTop.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=template&id=bf103284&ts=true":
/*!********************************************************************************************!*\
  !*** ./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=template&id=bf103284&ts=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScrollTop_vue_vue_type_template_id_bf103284_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ScrollTop_vue_vue_type_template_id_bf103284_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ScrollTop.vue?vue&type=template&id=bf103284&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/extras/ScrollTop.vue?vue&type=template&id=bf103284&ts=true");


/***/ }),

/***/ "./resources/ts/src/layout/AuthLayout.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/ts/src/layout/AuthLayout.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/src/layout/AuthLayout.vue?vue&type=template&id=578dafd4&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/ts/src/layout/AuthLayout.vue?vue&type=template&id=578dafd4&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_template_id_578dafd4_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_template_id_578dafd4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthLayout.vue?vue&type=template&id=578dafd4&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=template&id=578dafd4&scoped=true");


/***/ }),

/***/ "./resources/ts/src/layout/AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/ts/src/layout/AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_AuthLayout_vue_vue_type_style_index_0_id_578dafd4_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/AuthLayout.vue?vue&type=style&index=0&id=578dafd4&scoped=true&lang=css");


/***/ })

}]);