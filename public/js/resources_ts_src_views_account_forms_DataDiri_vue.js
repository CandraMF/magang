(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_account_forms_DataDiri_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/account/forms/DataDiri.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/account/forms/DataDiri.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [{
          required: true,
          message: 'Please input Activity name',
          trigger: 'blur'
        }, {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur'
        }],
        region: [{
          required: true,
          message: 'Please select Activity zone',
          trigger: 'change'
        }],
        date1: [{
          type: 'date',
          required: true,
          message: 'Please pick a date',
          trigger: 'change'
        }],
        date2: [{
          type: 'date',
          required: true,
          message: 'Please pick a time',
          trigger: 'change'
        }],
        type: [{
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change'
        }],
        resource: [{
          required: true,
          message: 'Please select activity resource',
          trigger: 'change'
        }],
        desc: [{
          required: true,
          message: 'Please input activity form',
          trigger: 'blur'
        }]
      }
    };
  },
  methods: {
    submitForm: function submitForm(formName) {
      this.$refs[formName].validate(function (valid) {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm: function resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
});

/***/ }),

/***/ "./resources/ts/src/views/account/forms/DataDiri.vue":
/*!***********************************************************!*\
  !*** ./resources/ts/src/views/account/forms/DataDiri.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DataDiri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataDiri.vue?vue&type=script&lang=js */ "./resources/ts/src/views/account/forms/DataDiri.vue?vue&type=script&lang=js");
/* harmony import */ var _DataDiri_vue_vue_type_custom_index_0_blockType_el_form_ref_ruleForm_label_width_120px_class_demo_ruleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataDiri.vue?vue&type=custom&index=0&blockType=el-form&ref=ruleForm&label-width=120px&class=demo-ruleForm */ "./resources/ts/src/views/account/forms/DataDiri.vue?vue&type=custom&index=0&blockType=el-form&ref=ruleForm&label-width=120px&class=demo-ruleForm");
/* harmony import */ var _DataDiri_vue_vue_type_custom_index_0_blockType_el_form_ref_ruleForm_label_width_120px_class_demo_ruleForm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DataDiri_vue_vue_type_custom_index_0_blockType_el_form_ref_ruleForm_label_width_120px_class_demo_ruleForm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");


/* custom blocks */
;
if (typeof (_DataDiri_vue_vue_type_custom_index_0_blockType_el_form_ref_ruleForm_label_width_120px_class_demo_ruleForm__WEBPACK_IMPORTED_MODULE_1___default()) === 'function') _DataDiri_vue_vue_type_custom_index_0_blockType_el_form_ref_ruleForm_label_width_120px_class_demo_ruleForm__WEBPACK_IMPORTED_MODULE_1___default()(_DataDiri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])


;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DataDiri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"], [['__file',"resources/ts/src/views/account/forms/DataDiri.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/account/forms/DataDiri.vue?vue&type=script&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/ts/src/views/account/forms/DataDiri.vue?vue&type=script&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataDiri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DataDiri_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DataDiri.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/account/forms/DataDiri.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/ts/src/views/account/forms/DataDiri.vue?vue&type=custom&index=0&blockType=el-form&ref=ruleForm&label-width=120px&class=demo-ruleForm":
/*!********************************************************************************************************************************************************!*\
  !*** ./resources/ts/src/views/account/forms/DataDiri.vue?vue&type=custom&index=0&blockType=el-form&ref=ruleForm&label-width=120px&class=demo-ruleForm ***!
  \********************************************************************************************************************************************************/
/***/ (() => {



/***/ })

}]);