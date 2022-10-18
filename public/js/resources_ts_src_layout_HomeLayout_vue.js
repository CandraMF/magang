"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_layout_HomeLayout_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_extras_ScrollTop_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layout/extras/ScrollTop.vue */ "./resources/ts/src/layout/extras/ScrollTop.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var __default__ = {
  components: {
    KTScrollTop: _layout_extras_ScrollTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      view: {
        topOfPage: true,
        width: 0,
        height: 0,
        type: 'md'
      }
    };
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
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'HomeLayout',
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var user = null;
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      user = store.getters.getUser;
    });
    var __returned__ = {
      store: store,
      user: user,
      KTScrollTop: _layout_extras_ScrollTop_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      useStore: vuex__WEBPACK_IMPORTED_MODULE_2__.useStore,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=template&id=0dfb236a&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=template&id=0dfb236a&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0dfb236a"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = {
  "class": "container-fluid px-4"
};
var _hoisted_2 = ["src"];

var _hoisted_3 = /*#__PURE__*/_withScopeId(function () {
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

var _hoisted_4 = {
  "class": "collapse navbar-collapse",
  id: "navbarSupportedContent"
};

var _hoisted_5 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": "navbar-nav me-auto ms-5 ps-3 mb-lg-0"
  }, null, -1
  /* HOISTED */
  );
});

var _hoisted_6 = {
  key: 0,
  "class": "navbar-nav ms-5 ps-3 mb-2 mb-lg-0 mb-sm-5"
};
var _hoisted_7 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Beranda");

var _hoisted_9 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Prosedur Magang");

var _hoisted_11 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Pengumuman");

var _hoisted_13 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Daftar");

var _hoisted_15 = {
  "class": "nav-item ms-lg-4 my-auto"
};

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Masuk");

var _hoisted_17 = {
  key: 1,
  "class": "navbar-nav"
};

var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "symbol symbol-50px symbol-circle"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "symbol-label fs-2 fw-bold text-success"
  }, "A")], -1
  /* HOISTED */
  );
});

var _hoisted_19 = [_hoisted_18];
var _hoisted_20 = {
  "class": ""
};

var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<footer style=\"background:#092F53;color:white !important;padding:50px 0px;\" data-v-0dfb236a><div class=\"container\" data-v-0dfb236a><div class=\"col-md-12\" data-v-0dfb236a><div class=\"row\" data-v-0dfb236a><div class=\"col-md-4\" data-v-0dfb236a><h5 class=\"pb-4\" data-v-0dfb236a>Badan Pengelola Keuangan Haji</h5><p data-v-0dfb236a>Menara Bidakara 1, lantai 5 Jalan Gatot Subroto, Kav. 71-73 Pancoran, Jakarta Seltan 12870, Indonesia.</p></div><div class=\"col-md-4\" data-v-0dfb236a><h5 class=\"pb-4\" data-v-0dfb236a>Hubungi Kami</h5><h3 data-v-0dfb236a>(021) 83793001</h3><p data-v-0dfb236a>(hunting)</p><h3 data-v-0dfb236a>+62 821 9090 6002</h3><p data-v-0dfb236a>(WA Contact Center)</p><p data-v-0dfb236a>Fax: 021 83793019 <br data-v-0dfb236a> Email : info@bpkh.go.id</p></div><div class=\"col-md-4\" data-v-0dfb236a><h5 class=\"pb-4\" data-v-0dfb236a>Media Sosial</h5><div class=\"symbol symbol-50px symbol-circle m-2\" data-v-0dfb236a><div class=\"symbol-label\" style=\"background:rgba(255, 255, 255, 0.226);\" data-v-0dfb236a><i class=\"bi bi-telephone text-white\" data-v-0dfb236a></i></div></div><div class=\"symbol symbol-50px symbol-circle m-2\" data-v-0dfb236a><div class=\"symbol-label\" style=\"background:rgba(255, 255, 255, 0.226);\" data-v-0dfb236a><i class=\"bi bi-whatsapp text-white\" data-v-0dfb236a></i></div></div><div class=\"symbol symbol-50px symbol-circle m-2\" data-v-0dfb236a><div class=\"symbol-label\" style=\"background:rgba(255, 255, 255, 0.226);\" data-v-0dfb236a><i class=\"bi bi-instagram text-white\" data-v-0dfb236a></i></div></div><div class=\"symbol symbol-50px symbol-circle m-2\" data-v-0dfb236a><div class=\"symbol-label\" style=\"background:rgba(255, 255, 255, 0.226);\" data-v-0dfb236a><i class=\"bi bi-tiktok text-white\" data-v-0dfb236a></i></div></div><div class=\"symbol symbol-50px symbol-circle m-2\" data-v-0dfb236a><div class=\"symbol-label\" style=\"background:rgba(255, 255, 255, 0.226);\" data-v-0dfb236a><i class=\"bi bi-envelope text-white\" data-v-0dfb236a></i></div></div></div></div></div></div></footer>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-view");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["navbar navbar-expand-lg", [$data.view.type != 'md' && $data.view.type != 'lg' ? 'navbarSm' : '', {
      'navOnScroll': !$data.view.topOfPage,
      'navOnTop': $data.view.topOfPage
    }]]),
    style: {
      "z-index": "999",
      "font-size": "12pt !important",
      "transition": ".2s ease-in-out"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
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
      , _hoisted_2)];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, $setup.user == null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active btn",
    to: "/beranda/divisi",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      'navLinkOnScroll': !$data.view.topOfPage
    }]),
    "aria-current": "page"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active btn",
    to: "/prosedurMagang",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      'navLinkOnScroll': !$data.view.topOfPage
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active btn",
    to: "/pengumuman",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      'navLinkOnScroll': !$data.view.topOfPage
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_12];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active btn",
    to: "/beranda/register#content",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      'navLinkOnScroll': !$data.view.topOfPage
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    "exact-active-class": "active btn",
    to: "/beranda/login#content",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["nav-link", {
      'navLinkOnScroll': !$data.view.topOfPage
    }])
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_16];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["class"])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("ul", _hoisted_17, _hoisted_19))])])], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_view)]), _hoisted_21]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["KTScrollTop"])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.active[data-v-0dfb236a] {\n        border-radius: 6px;\n        background: #092F53;\n        color: white !important;\n}\n.navOnTop[data-v-0dfb236a]{\n        background: transparent;\n        width: 100%;\n        padding: 30px 50px;\n        position: absolute;\n}\n.navOnScroll[data-v-0dfb236a] {\n        box-shadow: 0 0 10px #aaa;\n        background-color: #fff;\n        padding: 10px 20px !important;\n        position: fixed;\n        width: 100%;\n}\n.navLogoOnScroll[data-v-0dfb236a]{\n        width: 100px !important;\n}\n.navbarSm[data-v-0dfb236a] {\n        position: relative !important;\n        padding: 10px 20px !important;\n        background: white !important;\n}\n.navbarSm .navbar-brand img[data-v-0dfb236a]{\n        padding: 10px 20px !important;\n}\n.navbarSm .nav-link[data-v-0dfb236a]:hover{\n        color: black !important;\n}\n.navbarSm .nav-item .active[data-v-0dfb236a]{\n        color: white !important;\n}\n.nav-link[data-v-0dfb236a]{\n        color: rgba(0, 0, 0, 0.644) !important;\n        font-weight: 600;\n}\n.nav-link[data-v-0dfb236a]:hover{\n        color: #ffffff !important;\n}\n.nav-link[data-v-0dfb236a]:hover{\n        color: #ffffff !important;\n}\n.navOnScroll  .nav-link[data-v-0dfb236a]:hover:not(.active){\n        color: #000000 !important;\n}\n.nav-item .active[data-v-0dfb236a]{\n        color: #ffffff !important;\n}\n.navOnScroll .active[data-v-0dfb236a] {\n        color: white !important;\n}\nh5[data-v-0dfb236a] {\n        font-weight: 500;\n        font-size: 18pt;\n        color: white;\n}\nh3[data-v-0dfb236a] {\n        color: white;\n}\nfooter .col-md-4[data-v-0dfb236a] {\n        padding: 0px 40px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeLayout_vue_vue_type_style_index_0_id_0dfb236a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeLayout_vue_vue_type_style_index_0_id_0dfb236a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeLayout_vue_vue_type_style_index_0_id_0dfb236a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/ts/src/layout/HomeLayout.vue":
/*!************************************************!*\
  !*** ./resources/ts/src/layout/HomeLayout.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _HomeLayout_vue_vue_type_template_id_0dfb236a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeLayout.vue?vue&type=template&id=0dfb236a&scoped=true */ "./resources/ts/src/layout/HomeLayout.vue?vue&type=template&id=0dfb236a&scoped=true");
/* harmony import */ var _HomeLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeLayout.vue?vue&type=script&setup=true&lang=js */ "./resources/ts/src/layout/HomeLayout.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _HomeLayout_vue_vue_type_style_index_0_id_0dfb236a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css */ "./resources/ts/src/layout/HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_HomeLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_HomeLayout_vue_vue_type_template_id_0dfb236a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0dfb236a"],['__file',"resources/ts/src/layout/HomeLayout.vue"]])
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

/***/ "./resources/ts/src/layout/HomeLayout.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/ts/src/layout/HomeLayout.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeLayout.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/ts/src/layout/HomeLayout.vue?vue&type=template&id=0dfb236a&scoped=true":
/*!******************************************************************************************!*\
  !*** ./resources/ts/src/layout/HomeLayout.vue?vue&type=template&id=0dfb236a&scoped=true ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeLayout_vue_vue_type_template_id_0dfb236a_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeLayout_vue_vue_type_template_id_0dfb236a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeLayout.vue?vue&type=template&id=0dfb236a&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=template&id=0dfb236a&scoped=true");


/***/ }),

/***/ "./resources/ts/src/layout/HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css":
/*!********************************************************************************************************!*\
  !*** ./resources/ts/src/layout/HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeLayout_vue_vue_type_style_index_0_id_0dfb236a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/layout/HomeLayout.vue?vue&type=style&index=0&id=0dfb236a&scoped=true&lang=css");


/***/ })

}]);