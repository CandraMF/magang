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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");


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
          message: 'Mohon isi NIK',
          trigger: 'blur'
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
          message: 'Mohon isi Nomor HP',
          trigger: ['blur', 'change']
        } // { regex: /^[2-9]\d{2}[2-9]\d{2}\d{4}$/ },
        ],
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
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_1__.useStore)();
    return {
      store: store
    };
  },
  methods: {
    submitForm: function submitForm(formName) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
        var _this = this;

        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
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


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "mb-5 text-center"
}, "Daftar", -1
/* HOISTED */
);

var _hoisted_2 = {
  "class": "my-10 notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
};
var _hoisted_3 = {
  "class": "svg-icon svg-icon-2tx svg-icon-warning me-4"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "d-flex flex-stack flex-grow-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fw-bold"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", {
  "class": "text-gray-800 fw-bolder"
}, "Perhatian!"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fs-6 text-gray-600"
}, " Pastikan Data yang Anda Masukan Adalah Data yang Sebenar-benarnya ")])], -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "row"
};
var _hoisted_6 = {
  "class": "col-md-6"
};
var _hoisted_7 = {
  "class": "col-md-6"
};
var _hoisted_8 = {
  "class": "col-md-12"
};
var _hoisted_9 = {
  "class": "row d-flex justify-content-center"
};
var _hoisted_10 = {
  "class": "col-md-5 mt-10"
};
var _hoisted_11 = {
  "class": "w-100 text-center"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Sudah Punya Akun? ");

var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Login");

var _hoisted_14 = {
  "class": "my-5 text-center"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Daftar");

var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Atau Masuk Sebagai");

var _hoisted_17 = {
  "class": "d-flex justify-content-center"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Admin");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inline_svg = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inline-svg");

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form-item");

  var _component_VueClientRecaptcha = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VueClientRecaptcha");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_el_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form");

  var _component_el_divider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-divider");

  var _component_el_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-card");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'row d-flex justify-content-center m-0 p-0': this.$route.name != 'berandaRegister'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'col-md-6 mt-10': this.$route.name != 'berandaRegister'
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_card, {
    "class": "p-10"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inline_svg, {
        src: "/media/icons/duotune/general/gen044.svg"
      })]), _hoisted_4]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form, {
        model: $data.ruleForm,
        rules: $data.rules,
        ref: "ruleForm",
        "label-position": "top",
        "status-icon": ""
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "nik",
            label: "Nomor Induk Kependudukan"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
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
            prop: "name",
            label: "Nama Lengkap"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $data.ruleForm.name,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
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
                "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                  return $data.ruleForm.email = $event;
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
                "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                  return $data.ruleForm.nomorHP = $event;
                })
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "username",
            label: "Username"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $data.ruleForm.nik,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                  return $data.ruleForm.nik = $event;
                }),
                readonly: "",
                disabled: ""
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "password",
            label: "Password"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $data.ruleForm.password,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                  return $data.ruleForm.password = $event;
                }),
                "show-password": ""
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "confirmPassword",
            label: "Konfirmasi Password"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $data.ruleForm.confirmPassword,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                  return $data.ruleForm.confirmPassword = $event;
                }),
                "show-password": "",
                autocomplete: "off"
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueClientRecaptcha, {
            value: $data.ruleForm.captcha,
            onGetCode: $options.getCaptchaCode,
            onIsValid: $options.checkValidCaptcha,
            "class": "mb-5"
          }, null, 8
          /* PROPS */
          , ["value", "onGetCode", "onIsValid"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
            prop: "captcha"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
                modelValue: $data.ruleForm.captcha,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                  return $data.ruleForm.captcha = $event;
                }),
                placeholder: "Masukan Token di Atas"
              }, null, 8
              /* PROPS */
              , ["modelValue"])];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
            to: "login#content"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_13];
            }),
            _: 1
            /* STABLE */

          })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
            type: "button",
            loading: $data.isLoading,
            onClick: _cache[8] || (_cache[8] = function ($event) {
              return $options.submitForm('ruleForm');
            }),
            "class": "btn btn-primary w-100"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_15];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["loading"])])])])])])];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["model", "rules"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_divider, {
        "content-position": "center",
        "class": "fw-light fs-6 my-10"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_16];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
        to: "Ldap#content",
        "class": "btn btn-linkedin"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_18];
        }),
        _: 1
        /* STABLE */

      })])];
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