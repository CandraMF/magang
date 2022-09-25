"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_admin_UserFormLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=script&setup=true&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=script&setup=true&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _forms_UserForm_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/UserForm.vue */ "./resources/ts/src/views/admin/forms/UserForm.vue");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.mjs");
/* harmony import */ var _core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/helpers/breadcrumb */ "./resources/ts/src/core/helpers/breadcrumb.ts");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'UserFormLayout',
  props: {
    data: {}
  },
  setup: function setup(__props, _a) {
    var expose = _a.expose;
    expose();
    var props = __props;
    var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_3__.useStore)();
    var router = (0,vue_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    var token = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var globalProperties;
    var personId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var formData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var modalTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Tambah User');
    var myModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var myForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,_core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_2__.setCurrentPageBreadcrumbs)(modalTitle.value, ["User", "Form"]);
      token = store.getters.getToken;
      personId.value = store.getters.getUser.person_id;
      globalProperties = app.appContext.config.globalProperties;
      console.log(props.data);
    });

    var handleSuccess = function handleSuccess(payload) {
      router.push({
        name: 'admin-user',
        query: {
          redirect: '/admin/user'
        }
      });
    };

    var handleFinishInit = function handleFinishInit(payload) {
      loading.value = false;
      var data = JSON.parse(props.data);

      if (props.data) {
        modalTitle.value = "Edit User";
        myForm.value.initData(data);
      } else {
        modalTitle.value = "Tambah User";
      }

      (0,_core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_2__.setCurrentPageBreadcrumbs)(modalTitle.value, ["User", "Form"]);
    };

    var __returned__ = {
      props: props,
      app: app,
      store: store,
      router: router,
      token: token,
      globalProperties: globalProperties,
      personId: personId,
      loading: loading,
      formData: formData,
      modalTitle: modalTitle,
      myModal: myModal,
      myForm: myForm,
      handleSuccess: handleSuccess,
      handleFinishInit: handleFinishInit,
      UserForm: _forms_UserForm_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=script&setup=true&lang=ts":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=script&setup=true&lang=ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'UserForm',
  emits: ['success', 'finishInit'],
  setup: function setup(__props, _a) {
    var _this = this;

    var expose = _a.expose,
        emit = _a.emit;
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_2__.useStore)();
    var token = store.getters.getToken;
    var ruleFormRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var roles = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([]);
    var isLoading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var ruleForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      id: null,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      nomorHP: "",
      nik: "",
      captcha: "",
      role_id: ""
    });
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      ruleForm.password = "12345678";
      ruleForm.confirmPassword = "12345678";
      getStatus();
    });
    var rules = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
      name: [{
        required: true,
        message: "Mohon isi Nama Lengkap",
        trigger: "blur"
      }],
      nik: [{
        required: true,
        message: "Mohon isi NIK",
        trigger: "blur"
      }],
      confirmPassword: [{
        required: true,
        message: "Mohon isi Konfirmasi Password",
        trigger: ["blur", "change"]
      }],
      password: [{
        required: true,
        message: "Mohon isi Password",
        trigger: ["blur", "change"]
      }, {
        min: 8,
        message: "Password Minimal 8 Karakter",
        trigger: ["blur", "change"]
      }],
      nomorHP: [{
        required: true,
        message: "Mohon isi Nomor HP",
        trigger: ["blur", "change"]
      } // { regex: /^[2-9]\d{2}[2-9]\d{2}\d{4}$/ },
      ],
      email: [{
        required: true,
        message: "Mohon isi email",
        trigger: ["blur", "change"]
      }, {
        type: "email",
        message: "Mohon isi format email yang benar",
        trigger: ["blur", "change"]
      }],
      role_id: [{
        required: true,
        message: "Mohon pilih role",
        trigger: ["blur", "change"]
      }]
    });

    var submitForm = function submitForm() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
          isLoading.value = false;
          ruleFormRef.value.validate(function (valid) {
            if (valid) {
              if (ruleForm.id) {
                axios__WEBPACK_IMPORTED_MODULE_1___default().get("/sanctum/csrf-cookie").then(function (response) {
                  axios__WEBPACK_IMPORTED_MODULE_1___default().put("/api/user/" + ruleForm.id, {
                    login: ruleForm.nik,
                    name: ruleForm.name,
                    email: ruleForm.email,
                    mobile: ruleForm.nomorHP,
                    role_id: ruleForm.role_id
                  }, {
                    headers: {
                      'Authorization': 'Bearer ' + token
                    }
                  }).then(function (response) {
                    if (response.data.success) {
                      emit('success', response.data.message);
                    }

                    isLoading.value = false;
                  })["catch"](function (error) {
                    console.error(error.message);
                    isLoading.value = false;
                  });
                });
              } else {
                axios__WEBPACK_IMPORTED_MODULE_1___default().get("/sanctum/csrf-cookie").then(function (response) {
                  axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/user", {
                    login: ruleForm.nik,
                    password: ruleForm.password,
                    name: ruleForm.name,
                    email: ruleForm.email,
                    mobile: ruleForm.nomorHP,
                    role_id: ruleForm.role_id
                  }, {
                    headers: {
                      'Authorization': 'Bearer ' + token
                    }
                  }).then(function (response) {
                    if (response.data.success) {
                      emit('success', response.data.message);
                    }

                    isLoading.value = false;
                  })["catch"](function (error) {
                    console.error(error.message);
                    isLoading.value = false;
                  });
                });
              }
            } else {
              isLoading.value = false;
              return false;
            }
          });
          return [2
          /*return*/
          ];
        });
      });
    };

    var getStatus = function getStatus() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, function () {
        var _this = this;

        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4
              /*yield*/
              , axios__WEBPACK_IMPORTED_MODULE_1___default().get('/sanctum/csrf-cookie').then(function (response) {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, function () {
                  return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__generator)(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/status/getByType/Hak Akses User', {
                          headers: {
                            'Authorization': 'Bearer ' + token
                          }
                        }).then(function (response) {
                          response.data.forEach(function (element) {
                            roles.push({
                              'value': element.status_id,
                              'label': element.name
                            });
                          });
                          emit('finishInit', response.data.message);
                        })];

                      case 1:
                        _a.sent();

                        return [2
                        /*return*/
                        ];
                    }
                  });
                });
              })];

            case 1:
              _a.sent();

              return [2
              /*return*/
              ];
          }
        });
      });
    };

    function resetForm() {
      var _a;

      (_a = ruleFormRef.value) === null || _a === void 0 ? void 0 : _a.resetFields();
    }

    function _reset() {
      var _a;

      ruleForm.id = null;
      (_a = ruleFormRef.value) === null || _a === void 0 ? void 0 : _a.resetFields();
    }

    function _initData(data) {
      ruleForm.id = data.user_id;
      ruleForm.nik = data.login;
      ruleForm.password = data.password;
      ruleForm.name = data.name;
      ruleForm.email = data.email;
      ruleForm.nomorHP = data.mobile;
      ruleForm.role_id = data.role_id;
    }

    expose({
      reset: _reset,
      initData: _initData
    });
    var __returned__ = {
      store: store,
      token: token,
      ruleFormRef: ruleFormRef,
      roles: roles,
      isLoading: isLoading,
      ruleForm: ruleForm,
      emit: emit,
      rules: rules,
      submitForm: submitForm,
      getStatus: getStatus,
      resetForm: resetForm,
      _reset: _reset,
      _initData: _initData
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=template&id=24527cad&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=template&id=24527cad&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card outline-dashed outline mt-5 card-custom mb-5 shadow-none"
};
var _hoisted_2 = {
  "class": "card-header"
};
var _hoisted_3 = {
  "class": "card-title"
};
var _hoisted_4 = {
  "class": "card-body pt-2 px-6 overlay-wrapper"
};
var _hoisted_5 = {
  key: 0,
  "class": "overlay-layer rounded bg-dark bg-opacity-0"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner-border text-primary",
  role: "status"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "visually-hidden"
}, "Loading...")], -1
/* HOISTED */
);

var _hoisted_7 = [_hoisted_6];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'overlay overlay-block rounded': $setup.loading
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/admin/user"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        loading: $setup.loading,
        type: "primary",
        icon: "el-icon-back text-white",
        circle: ""
      }, null, 8
      /* PROPS */
      , ["loading"])];
    }),
    _: 1
    /* STABLE */

  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["UserForm"], {
    ref: "myForm",
    onFinishInit: $setup.handleFinishInit,
    onSuccess: $setup.handleSuccess,
    data: $setup.formData
  }, null, 8
  /* PROPS */
  , ["data"])])]), $setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=template&id=504bcb83&ts=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=template&id=504bcb83&ts=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-md-6"
};
var _hoisted_3 = {
  "class": "col-md-6"
};
var _hoisted_4 = {
  "class": "col-md-12"
};
var _hoisted_5 = {
  "class": "d-flex justify-content-end"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Reset");

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Simpan");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_form_item = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form-item");

  var _component_el_option = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-option");

  var _component_el_select = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-select");

  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_el_form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-form");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form, {
    model: $setup.ruleForm,
    rules: $setup.rules,
    ref: "ruleFormRef",
    "label-position": "top",
    "status-icon": ""
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
        hidden: "",
        modelValue: $setup.ruleForm.id,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.ruleForm.id = $event;
        })
      }, null, 8
      /* PROPS */
      , ["modelValue"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "nik",
        label: "Nomor Induk Kependudukan"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.ruleForm.nik,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
              return $setup.ruleForm.nik = $event;
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
            modelValue: $setup.ruleForm.name,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
              return $setup.ruleForm.name = $event;
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
            modelValue: $setup.ruleForm.email,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
              return $setup.ruleForm.email = $event;
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
            modelValue: $setup.ruleForm.nomorHP,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
              return $setup.ruleForm.nomorHP = $event;
            })
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "username",
        label: "Username"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.ruleForm.nik,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
              return $setup.ruleForm.nik = $event;
            }),
            readonly: ""
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      }), !$setup.ruleForm.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_form_item, {
        key: 0,
        prop: "password",
        label: "Password"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.ruleForm.password,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
              return $setup.ruleForm.password = $event;
            }),
            "show-password": "true"
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$setup.ruleForm.id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_form_item, {
        key: 1,
        prop: "confirmPassword",
        label: "Konfirmasi Password"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
            modelValue: $setup.ruleForm.confirmPassword,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
              return $setup.ruleForm.confirmPassword = $event;
            }),
            "show-password": "true",
            autocomplete: "off"
          }, null, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        prop: "role_id",
        label: "Hak Akses"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_select, {
            modelValue: $setup.ruleForm.role_id,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
              return $setup.ruleForm.role_id = $event;
            }),
            placeholder: "Select",
            "class": "w-100"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.roles, function (item) {
                return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_el_option, {
                  key: item.value,
                  label: item.label,
                  value: item.value
                }, null, 8
                /* PROPS */
                , ["label", "value"]);
              }), 128
              /* KEYED_FRAGMENT */
              ))];
            }),
            _: 1
            /* STABLE */

          }, 8
          /* PROPS */
          , ["modelValue"])];
        }),
        _: 1
        /* STABLE */

      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_form_item, {
        "class": "m-0"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
            onClick: _cache[9] || (_cache[9] = function ($event) {
              return $setup.resetForm();
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_6];
            }),
            _: 1
            /* STABLE */

          }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
            type: "primary",
            onClick: _cache[10] || (_cache[10] = function ($event) {
              return $setup.submitForm();
            })
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [_hoisted_7];
            }),
            _: 1
            /* STABLE */

          })];
        }),
        _: 1
        /* STABLE */

      })])])])];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["model", "rules"])]);
}

/***/ }),

/***/ "./resources/ts/src/core/helpers/breadcrumb.ts":
/*!*****************************************************!*\
  !*** ./resources/ts/src/core/helpers/breadcrumb.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/ts/src/views/admin/UserFormLayout.vue":
/*!*********************************************************!*\
  !*** ./resources/ts/src/views/admin/UserFormLayout.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserFormLayout_vue_vue_type_template_id_24527cad_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserFormLayout.vue?vue&type=template&id=24527cad&ts=true */ "./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=template&id=24527cad&ts=true");
/* harmony import */ var _UserFormLayout_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserFormLayout.vue?vue&type=script&setup=true&lang=ts */ "./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UserFormLayout_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserFormLayout_vue_vue_type_template_id_24527cad_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/admin/UserFormLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/admin/forms/UserForm.vue":
/*!*********************************************************!*\
  !*** ./resources/ts/src/views/admin/forms/UserForm.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserForm_vue_vue_type_template_id_504bcb83_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm.vue?vue&type=template&id=504bcb83&ts=true */ "./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=template&id=504bcb83&ts=true");
/* harmony import */ var _UserForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm.vue?vue&type=script&setup=true&lang=ts */ "./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_UserForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_UserForm_vue_vue_type_template_id_504bcb83_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/admin/forms/UserForm.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************!*\
  !*** ./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserFormLayout_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserFormLayout_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserFormLayout.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=script&setup=true&lang=ts":
/*!********************************************************************************************!*\
  !*** ./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=script&setup=true&lang=ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserForm_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserForm.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=template&id=24527cad&ts=true":
/*!***********************************************************************************************!*\
  !*** ./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=template&id=24527cad&ts=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserFormLayout_vue_vue_type_template_id_24527cad_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserFormLayout_vue_vue_type_template_id_24527cad_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserFormLayout.vue?vue&type=template&id=24527cad&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/UserFormLayout.vue?vue&type=template&id=24527cad&ts=true");


/***/ }),

/***/ "./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=template&id=504bcb83&ts=true":
/*!***********************************************************************************************!*\
  !*** ./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=template&id=504bcb83&ts=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserForm_vue_vue_type_template_id_504bcb83_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_UserForm_vue_vue_type_template_id_504bcb83_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./UserForm.vue?vue&type=template&id=504bcb83&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/forms/UserForm.vue?vue&type=template&id=504bcb83&ts=true");


/***/ })

}]);