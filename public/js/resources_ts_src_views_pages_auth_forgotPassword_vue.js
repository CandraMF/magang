"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_pages_auth_ForgotPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router */ "./resources/ts/src/router/index.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue3_recaptcha_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue3-recaptcha-v2 */ "./node_modules/vue3-recaptcha-v2/dist/vue3-recaptcha-v2.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'ForgotPassword',
  setup: function setup(__props, _a) {
    var expose = _a.expose;
    expose();
    var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var ruleFormRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var validCaptcha = false;
    var resetRecaptcha = (0,vue3_recaptcha_v2__WEBPACK_IMPORTED_MODULE_3__.useRecaptcha)().resetRecaptcha;
    var recaptchaWidget = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);

    var callbackVerify = function callbackVerify(response) {
      console.log(response);
    };

    var callbackExpired = function callbackExpired() {
      console.log("expired!");
    };

    var callbackFail = function callbackFail() {
      console.log("fail");
    };

    var ruleForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      user_id: '',
      password: '',
      captcha: ''
    });
    var rules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      user_id: [{
        required: true,
        message: 'Mohon isi User ID',
        trigger: ['blur', 'change']
      }],
      confirmPassword: [{
        required: true,
        message: 'Mohon isi Password',
        trigger: ['blur', 'change']
      }],
      captcha: [{
        required: true,
        message: 'Mohon Isi Captcha',
        trigger: ['blur', 'change']
      }]
    });

    var submitForm = function submitForm(payload) {
      isLoading.value = false;
      ruleFormRef.value.validate(function (valid) {
        if (valid) {
          axios__WEBPACK_IMPORTED_MODULE_2___default().get("/sanctum/csrf-cookie").then(function (response) {
            axios__WEBPACK_IMPORTED_MODULE_2___default().put("/api/resetPassword", {
              login: ruleForm.user_id,
              password: ruleForm.password
            }).then(function (response) {
              console.log(response);

              if (response.data.success) {
                _router__WEBPACK_IMPORTED_MODULE_1__["default"].push('/auth/login');
              }

              isLoading.value = false;
            })["catch"](function (error) {
              console.error(error.message);
              isLoading.value = false;
            });
          });
        } else {
          isLoading.value = false;
          return false;
        }
      });
    };

    var __returned__ = {
      isLoading: isLoading,
      ruleFormRef: ruleFormRef,
      validCaptcha: validCaptcha,
      resetRecaptcha: resetRecaptcha,
      recaptchaWidget: recaptchaWidget,
      callbackVerify: callbackVerify,
      callbackExpired: callbackExpired,
      callbackFail: callbackFail,
      ruleForm: ruleForm,
      rules: rules,
      submitForm: submitForm,
      VueRecaptcha: vue3_recaptcha_v2__WEBPACK_IMPORTED_MODULE_3__.VueRecaptcha
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=template&id=2c35abd4&ts=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=template&id=2c35abd4&ts=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "mb-5 text-center"
}, "Reset Password", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "col-md-12"
};
var _hoisted_3 = {
  "class": "d-flex justify-content-center mt-9"
};
var _hoisted_4 = {
  "class": "text-center mt-5"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Reset Password");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form-item");

  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_el_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form");

  var _component_el_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'row d-flex justify-content-center m-0 p-0': this.$route.name != 'berandaForgotPassword'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'col-md-6 mt-10': this.$route.name != 'berandaForgotPassword'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_card, {
    "class": "p-10"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form, {
        model: $setup.ruleForm,
        rules: $setup.rules,
        ref: "ruleFormRef",
        "label-position": "top",
        "status-icon": ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "user",
            label: "User ID"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $setup.ruleForm.user_id,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                  return $setup.ruleForm.user_id = $event;
                })
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "password",
            label: "Password Baru"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $setup.ruleForm.password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                  return $setup.ruleForm.password = $event;
                }),
                "show-password": "",
                autocomplete: "off"
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["VueRecaptcha"], {
            style: {
              "min-width": "100% !important"
            },
            theme: "light",
            "class": "mb-5",
            size: "normal",
            tabindex: 0,
            onWidgetId: _cache[2] || (_cache[2] = function ($event) {
              return $setup.recaptchaWidget = $event;
            }),
            onVerify: _cache[3] || (_cache[3] = function ($event) {
              return $setup.callbackVerify($event);
            }),
            onFail: _cache[4] || (_cache[4] = function ($event) {
              return $setup.callbackFail();
            }),
            onExpired: _cache[5] || (_cache[5] = function ($event) {
              return $setup.callbackExpired();
            })
          })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
            type: "button",
            loading: $setup.isLoading,
            onClick: _cache[6] || (_cache[6] = function ($event) {
              return $setup.submitForm('ruleForm');
            }),
            "class": "btn btn-primary px-10 mb-5"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_5];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["loading"])])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["model", "rules"])];
    }),
    _: 1
    /* STABLE */

  })], 2
  /* CLASS */
  )], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./resources/ts/src/views/pages/auth/ForgotPassword.vue":
/*!**************************************************************!*\
  !*** ./resources/ts/src/views/pages/auth/ForgotPassword.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_2c35abd4_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=2c35abd4&ts=true */ "./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=template&id=2c35abd4&ts=true");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&setup=true&lang=ts */ "./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ForgotPassword_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ForgotPassword_vue_vue_type_template_id_2c35abd4_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/pages/auth/ForgotPassword.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=script&setup=true&lang=ts":
/*!*************************************************************************************************!*\
  !*** ./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=script&setup=true&lang=ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForgotPassword_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForgotPassword_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForgotPassword.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=template&id=2c35abd4&ts=true":
/*!****************************************************************************************************!*\
  !*** ./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=template&id=2c35abd4&ts=true ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForgotPassword_vue_vue_type_template_id_2c35abd4_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ForgotPassword_vue_vue_type_template_id_2c35abd4_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ForgotPassword.vue?vue&type=template&id=2c35abd4&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/ForgotPassword.vue?vue&type=template&id=2c35abd4&ts=true");


/***/ })

}]);