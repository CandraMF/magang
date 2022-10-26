"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_pages_auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/Register.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/Register.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/enums/StoreEnums */ "./resources/ts/src/store/enums/StoreEnums.ts");
/* harmony import */ var vue3_recaptcha_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue3-recaptcha-v2 */ "./node_modules/vue3-recaptcha-v2/dist/vue3-recaptcha-v2.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");



 // import { regex } from "vee-validate/dist/rules";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isLoading: false,
      validCaptcha: false,
      ruleForm: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        nomorHP: '',
        nik: '',
        captcha: ""
      },
      rules: {
        name: [{
          required: true,
          message: 'Mohon isi Nama Lengkap',
          trigger: 'blur'
        }],
        nik: [{
          required: true,
          message: 'Mohon isi Nomor Induk Kependudukan',
          trigger: 'blur'
        }, {
          min: 16,
          message: 'Nomor NIK harus 16 digit',
          trigger: ['blur', 'change']
        }, {
          max: 16,
          message: 'Nomor NIK harus 16 digit',
          trigger: ['blur', 'change']
        }],
        confirmPassword: [{
          required: true,
          message: 'Mohon isi Konfirmasi Password',
          trigger: ['blur', 'change']
        }],
        password: [{
          required: true,
          message: 'Mohon isi Password',
          trigger: ['blur', 'change']
        }, {
          min: 8,
          message: 'Password Minimal 8 Karakter',
          trigger: ['blur', 'change']
        }],
        nomorHP: [{
          required: true,
          message: 'Mohon isi Nomor Ponsel',
          trigger: ['blur', 'change']
        }, {
          min: 14,
          message: 'Nomor Nomor Ponsel harus 14 digit',
          trigger: ['blur', 'change']
        }, {
          max: 14,
          message: 'Nomor Nomor Ponsel harus 14 digit',
          trigger: ['blur', 'change']
        }],
        captcha: [{
          required: true,
          message: 'Mohon isi Captcha',
          trigger: ['blur', 'change']
        }],
        email: [{
          required: true,
          message: 'Mohon isi email',
          trigger: ['blur', 'change']
        }, {
          type: 'email',
          message: 'Mohon isi format email yang benar',
          trigger: ['blur', 'change']
        }]
      }
    };
  },
  setup: function setup() {
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var resetRecaptcha = (0,vue3_recaptcha_v2__WEBPACK_IMPORTED_MODULE_2__.useRecaptcha)().resetRecaptcha;
    var recaptchaWidget = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(null);

    var callbackVerify = function callbackVerify(response) {
      console.log(response);
    };

    var callbackExpired = function callbackExpired() {
      console.log("expired!");
    };

    var callbackFail = function callbackFail() {
      console.log("fail");
    }; // Reset Recaptcha action


    var actionReset = function actionReset() {
      resetRecaptcha(recaptchaWidget.value);
    };

    function setUser(payload) {
      store.commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_USER, payload);
    }

    function setToken(payload) {
      store.commit(_store_enums_StoreEnums__WEBPACK_IMPORTED_MODULE_1__.Mutations.SET_TOKEN, payload);
    }

    return {
      store: store,
      setUser: setUser,
      setToken: setToken,
      recaptchaWidget: recaptchaWidget,
      callbackVerify: callbackVerify,
      callbackFail: callbackFail,
      callbackExpired: callbackExpired,
      actionReset: actionReset
    };
  },
  methods: {
    submitForm: function submitForm(formName) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function () {
        var _this = this;

        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__generator)(this, function (_a) {
          this.setLoading(true);
          this.$refs[formName].validate(function (valid) {
            if (valid) {
              if (_this.validCaptcha) {
                axios__WEBPACK_IMPORTED_MODULE_0___default().get('/sanctum/csrf-cookie').then(function (response) {
                  axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/register', {
                    login: _this.ruleForm.nik,
                    password: _this.ruleForm.password,
                    name: _this.ruleForm.name,
                    email: _this.ruleForm.email,
                    mobile: _this.ruleForm.nomorHP
                  }).then(function (response) {
                    console.log(response.data);

                    if (response.data.success) {
                      _this.$notify({
                        title: 'Success',
                        type: 'success',
                        message: response.data.message
                      });

                      _this.$router.push({
                        name: 'login',
                        query: {
                          redirect: '/login'
                        }
                      });
                    } else {
                      _this.$notify.error({
                        title: 'Error',
                        message: response.data.message
                      });
                    }

                    _this.setLoading(false);
                  })["catch"](function (error) {
                    console.error(error.message);

                    _this.setLoading(false);
                  });
                });
              } else {
                _this.setLoading(false);

                _this.$notify.error({
                  title: 'Error',
                  message: "Captcha tidak valid"
                });
              }
            } else {
              _this.setLoading(false);

              return false;
            }
          });
          return [2
          /*return*/
          ];
        });
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    setLoading: function setLoading(value) {
      this.isLoading = value;
    },
    getCaptchaCode: function getCaptchaCode(value) {// console.log(value);
    },
    checkValidCaptcha: function checkValidCaptcha(value) {
      if (value) {
        this.validCaptcha = true;
        console.log(this.validCaptcha);
      }
    }
  },
  components: {
    VueRecaptcha: vue3_recaptcha_v2__WEBPACK_IMPORTED_MODULE_2__.VueRecaptcha
  } // mounted() {
  //     if (localStorage.getItem('loggedIn') && ( this.$route.name != 'berandaRegister' && this.$route.name != 'berandaLogin' )) {
  //         this.$router.push({ name: 'dashboard', query: { redirect: '/dashboard' } });
  //     }
  // },

});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/Register.vue?vue&type=template&id=8bb8114a&ts=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/Register.vue?vue&type=template&id=8bb8114a&ts=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "p-5 card"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "mt-5"
}, "Registrasi Akun"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "fw-light fs-6 text-info mt-5 mb-5"
}, " Pastikan Data yang Anda Masukan Adalah Data yang Benar dan Valid")])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "card-body"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-md-6"
};
var _hoisted_6 = {
  "class": "col-md-6"
};
var _hoisted_7 = {
  "class": "col-md-12"
};
var _hoisted_8 = {
  "class": "d-flex justify-content-center mt-9"
};
var _hoisted_9 = {
  "class": "text-center mt-5"
};

var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Daftar");

var _hoisted_11 = {
  "class": "w-100 mb-5"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sudah Punya Akun? ");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Masuk");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form-item");

  var _component_vue_recaptcha = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("vue-recaptcha");

  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_el_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'row d-flex justify-content-center m-0 p-0': this.$route.name != 'berandaRegister'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'col-md-6 mt-10': this.$route.name != 'berandaRegister'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div\n                    class=\"\n                        notice\n                        d-flex\n                        bg-light-warning\n                        rounded\n                        border-warning border border-dashed\n                        p-6\n                        mb-5\n                    \">\n                        <span class=\"svg-icon svg-icon-2tx svg-icon-warning me-4\">\n                            <inline-svg src=\"/media/icons/duotune/general/gen044.svg\" />\n                        </span>\n                        <div class=\"d-flex flex-stack flex-grow-1\">\n                            <div class=\"fw-bold\">\n                                <h4 class=\"text-gray-800 fw-bolder\">Perhatian!</h4>\n                                <div class=\"fs-6 text-gray-600\">\n                                    Pastikan Data yang Anda Masukan Adalah Data yang Sebenar-benarnya\n                                </div>\n                            </div>\n                        </div>\n                    </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form, {
    model: $data.ruleForm,
    rules: $data.rules,
    ref: "ruleForm",
    "label-position": "top",
    "status-icon": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "nik",
        label: "Nomor Induk Kependudukan"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            maxlength: "16",
            "show-word-limit": "",
            modelValue: $data.ruleForm.nik,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
              return $data.ruleForm.nik = $event;
            })
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "nomorHP",
        label: "Nomor Ponsel"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $data.ruleForm.nomorHP,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $data.ruleForm.nomorHP = $event;
            }),
            maxlength: "14",
            "show-word-limit": "",
            number: ""
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "name",
        label: "Nama Lengkap"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $data.ruleForm.name,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $data.ruleForm.name = $event;
            })
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "email",
        label: "Email"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $data.ruleForm.email,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $data.ruleForm.email = $event;
            })
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <el-form-item prop=\"password\" label=\"Password\" >\n                                    <el-input v-model=\"ruleForm.password\" show-password></el-input>\n                                </el-form-item>\n                                <el-form-item prop=\"confirmPassword\" label=\"Konfirmasi Password\" >\n                                    <el-input v-model=\"ruleForm.confirmPassword\" show-password autocomplete=\"off\"></el-input>\n                                </el-form-item> ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_vue_recaptcha, {
        style: {
          "min-width": "100% !important"
        },
        theme: "light",
        "class": "mb-5",
        size: "normal",
        tabindex: 0,
        onWidgetId: _cache[4] || (_cache[4] = function ($event) {
          return $setup.recaptchaWidget = $event;
        }),
        onVerify: _cache[5] || (_cache[5] = function ($event) {
          return $setup.callbackVerify($event);
        }),
        onFail: _cache[6] || (_cache[6] = function ($event) {
          return $setup.callbackFail();
        }),
        onExpired: _cache[7] || (_cache[7] = function ($event) {
          return $setup.callbackExpired();
        })
      })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        type: "button",
        loading: $data.isLoading,
        onClick: _cache[8] || (_cache[8] = function ($event) {
          return $options.submitForm('ruleForm');
        }),
        "class": "btn btn-primary px-10 mb-5"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_10];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["loading"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "login#content"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_13];
        }),
        _: 1
        /* STABLE */

      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"col-md-12\">\n                                <div class=\"row d-flex justify-content-center\">\n                                    <div class=\"col-md-5 mt-10\"> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <VueClientRecaptcha\n                                            :value=\"ruleForm.captcha\"\n                                            @getCode=\"getCaptchaCode\"\n                                            @isValid=\"checkValidCaptcha\"\n                                            class=\"mb-5\"\n                                            chars=\"1234567890\"\n                                            :hideLines=\"true\"\n                                        /> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <el-form-item prop=\"captcha\">\n                                            <el-input v-model=\"ruleForm.captcha\" placeholder=\"Masukan Token di Atas\"></el-input>\n                                        </el-form-item> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" </div>\n                                </div>\n                            </div> ")])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["model", "rules"])])])], 2
  /* CLASS */
  )], 2
  /* CLASS */
  );
}

/***/ }),

/***/ "./resources/ts/src/views/pages/auth/Register.vue":
/*!********************************************************!*\
  !*** ./resources/ts/src/views/pages/auth/Register.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_8bb8114a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=8bb8114a&ts=true */ "./resources/ts/src/views/pages/auth/Register.vue?vue&type=template&id=8bb8114a&ts=true");
/* harmony import */ var _Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=ts */ "./resources/ts/src/views/pages/auth/Register.vue?vue&type=script&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Register_vue_vue_type_template_id_8bb8114a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/pages/auth/Register.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/pages/auth/Register.vue?vue&type=script&lang=ts":
/*!********************************************************************************!*\
  !*** ./resources/ts/src/views/pages/auth/Register.vue?vue&type=script&lang=ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=script&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/Register.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/pages/auth/Register.vue?vue&type=template&id=8bb8114a&ts=true":
/*!**********************************************************************************************!*\
  !*** ./resources/ts/src/views/pages/auth/Register.vue?vue&type=template&id=8bb8114a&ts=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_8bb8114a_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Register_vue_vue_type_template_id_8bb8114a_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Register.vue?vue&type=template&id=8bb8114a&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/pages/auth/Register.vue?vue&type=template&id=8bb8114a&ts=true");


/***/ })

}]);