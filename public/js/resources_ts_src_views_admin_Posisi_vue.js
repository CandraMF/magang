"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_ts_src_views_admin_Posisi_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/Posisi.vue?vue&type=script&setup=true&lang=ts":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/Posisi.vue?vue&type=script&setup=true&lang=ts ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/core/helpers/breadcrumb */ "./resources/ts/src/core/helpers/breadcrumb.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router */ "./resources/ts/src/router/index.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  __name: 'Posisi',
  setup: function setup(__props, _a) {
    var _this = this;

    var expose = _a.expose;
    expose();
    var app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)();
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var token = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var globalProperties;
    var list = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]);
    var personId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var search = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
    var formData = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var modalTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('Tambah Posisi');
    var myModal = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var myForm = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var myTable = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var disabled = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var currentPage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(1);
    var pageSize = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(10);
    var total = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      (0,_core_helpers_breadcrumb__WEBPACK_IMPORTED_MODULE_2__.setCurrentPageBreadcrumbs)("Data Posisi", ["Posisi"]);
      token = store.getters.getToken;
      personId.value = store.getters.getUser.person_id;
      globalProperties = app.appContext.config.globalProperties;
      getData(pageSize.value, currentPage.value);
    });

    var indexMethod = function indexMethod(index) {
      return index++ + 1;
    };

    var beforeChange = function beforeChange(payload) {
      loading.value = true;
    };

    var showModal = function showModal() {
      formData.value = null;
      myModal.value.show();
    };

    var handleHide = function handleHide(payload) {
      myForm.value.reset();
      getData(pageSize.value, currentPage.value);
    };

    var handleSuccess = function handleSuccess(payload) {
      myModal.value.hide();
    };

    var handleSizeChange = function handleSizeChange(val) {
      getData(val, currentPage.value);
    };

    var handleCurrentChange = function handleCurrentChange(val) {
      getData(pageSize.value, val);
    };

    var performDelete = function performDelete(id) {
      globalProperties.$confirm('Aksi ini akan menghapus data secara permanen. Lanjut?', 'Perhatian', {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Batal',
        type: 'warning'
      }).then(function () {
        return __awaiter(_this, void 0, void 0, function () {
          var _this = this;

          return __generator(this, function (_a) {
            switch (_a.label) {
              case 0:
                return [4
                /*yield*/
                , axios__WEBPACK_IMPORTED_MODULE_1___default().get('/sanctum/csrf-cookie').then(function (response) {
                  return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                      switch (_a.label) {
                        case 0:
                          return [4
                          /*yield*/
                          , axios__WEBPACK_IMPORTED_MODULE_1___default()["delete"]('/api/position/' + id, {
                            headers: {
                              'Authorization': 'Bearer ' + token
                            }
                          }).then(function (response) {
                            if (response.data.success) {
                              globalProperties.$message({
                                type: 'success',
                                message: 'Berhasil Menghapus Data'
                              });
                              getData(pageSize.value, currentPage.value);
                            } else {
                              globalProperties.$message({
                                type: 'error',
                                message: 'Terjadi Kesalahan Mohon Ulangi Lagi Nanti'
                              });
                            }
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
      })["catch"](function () {});
    };

    var performEdit = function performEdit(payload) {
      var data = JSON.stringify(__assign({}, payload));
      _router__WEBPACK_IMPORTED_MODULE_3__["default"].push({
        name: 'admin-posisi-form',
        params: {
          data: data
        }
      });
    };

    var statusChange = function statusChange(payload) {
      return __awaiter(_this, void 0, void 0, function () {
        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              loading.value = true;
              return [4
              /*yield*/
              , axios__WEBPACK_IMPORTED_MODULE_1___default().get('/sanctum/csrf-cookie').then(function (response) {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , axios__WEBPACK_IMPORTED_MODULE_1___default().put('/api/position/changeStatus/' + payload.position_id, {}, {
                          headers: {
                            'Authorization': 'Bearer ' + token
                          }
                        }).then(function (response) {
                          if (response.data.success) {
                            globalProperties.$message({
                              type: 'success',
                              message: 'Berhasil Mengubah Data Data'
                            });
                            getData(pageSize.value, currentPage.value);
                            loading.value = false;
                          } else {
                            globalProperties.$message({
                              type: 'error',
                              message: 'Terjadi Kesalahan Mohon Ulangi Lagi Nanti'
                            });
                            loading.value = false;
                          }
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

    var getData = function getData(perPage, page) {
      return __awaiter(_this, void 0, void 0, function () {
        var _this = this;

        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              loading.value = true;
              return [4
              /*yield*/
              , axios__WEBPACK_IMPORTED_MODULE_1___default().get('/sanctum/csrf-cookie').then(function (response) {
                return __awaiter(_this, void 0, void 0, function () {
                  return __generator(this, function (_a) {
                    switch (_a.label) {
                      case 0:
                        return [4
                        /*yield*/
                        , axios__WEBPACK_IMPORTED_MODULE_1___default().get('/api/position?perPage=' + perPage + '&page=' + page, {
                          headers: {
                            'Authorization': 'Bearer ' + token
                          }
                        }).then(function (response) {
                          list.value = [];
                          total.value = response.data.position.total;
                          response.data.position.data.forEach(function (element) {
                            list.value.push(element);
                          });
                          myTable.value.doLayout();
                          loading.value = false;
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

    var __returned__ = {
      app: app,
      store: store,
      token: token,
      globalProperties: globalProperties,
      list: list,
      personId: personId,
      search: search,
      loading: loading,
      formData: formData,
      modalTitle: modalTitle,
      myModal: myModal,
      myForm: myForm,
      myTable: myTable,
      disabled: disabled,
      currentPage: currentPage,
      pageSize: pageSize,
      total: total,
      indexMethod: indexMethod,
      beforeChange: beforeChange,
      showModal: showModal,
      handleHide: handleHide,
      handleSuccess: handleSuccess,
      handleSizeChange: handleSizeChange,
      handleCurrentChange: handleCurrentChange,
      performDelete: performDelete,
      performEdit: performEdit,
      statusChange: statusChange,
      getData: getData
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/Posisi.vue?vue&type=template&id=6c9e63c2&ts=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/Posisi.vue?vue&type=template&id=6c9e63c2&ts=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Tambah Posisi");

var _hoisted_5 = {
  "class": "card-toolbar"
};
var _hoisted_6 = {
  "class": "card-body pt-2 px-6 overlay-wrapper"
};
var _hoisted_7 = {
  "class": "form-check form-switch form-check-custom form-check-solid"
};
var _hoisted_8 = ["checked", "onChange"];
var _hoisted_9 = {
  "class": "form-check-label",
  "for": "flexSwitchDisabled"
};
var _hoisted_10 = {
  key: 0,
  "class": "overlay-layer rounded bg-dark bg-opacity-0"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "spinner-border text-primary",
  role: "status"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "visually-hidden"
}, "Loading...")], -1
/* HOISTED */
);

var _hoisted_12 = [_hoisted_11];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_button = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button");

  var _component_router_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("router-link");

  var _component_el_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-input");

  var _component_el_table_column = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-table-column");

  var _component_el_button_group = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-button-group");

  var _component_el_table = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-table");

  var _component_el_pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("el-pagination");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      'overlay overlay-block rounded': $setup.loading
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_router_link, {
    to: "/admin/posisi/form"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
        loading: $setup.loading,
        type: "primary",
        icon: "el-icon-plus text-white"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_4];
        }),
        _: 1
        /* STABLE */

      }, 8
      /* PROPS */
      , ["loading"])];
    }),
    _: 1
    /* STABLE */

  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_input, {
    modelValue: $setup.search,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.search = $event;
    }),
    size: "small",
    placeholder: "Type to search"
  }, null, 8
  /* PROPS */
  , ["modelValue"])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_table, {
    ref: "myTable",
    data: $setup.list,
    style: {
      "width": "100%"
    }
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_table_column, {
        type: "index",
        index: $setup.indexMethod
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_table_column, {
        sortable: "",
        label: "Nama",
        prop: "name"
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_table_column, {
        sortable: "",
        label: "Status",
        prop: "status_id"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (scope) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <el-switch\n                                            :loading=\"loading\"\n                                            :v-model=\"scope.row.status_id\"\n                                            :active-text=\"scope.row.status_id == 'POS101'? 'Aktif' : 'Tidak Aktif'\">\n                                        </el-switch> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            "class": "form-check-input h-25px w-40px",
            type: "checkbox",
            checked: scope.row.status_id == 'POS101' ? true : false,
            value: "",
            onChange: function onChange($event) {
              return $setup.statusChange(scope.row);
            }
          }, null, 40
          /* PROPS, HYDRATE_EVENTS */
          , _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(scope.row.status_id == 'POS101' ? 'Aktif' : 'Tidak Aktif'), 1
          /* TEXT */
          )])])];
        }),
        _: 1
        /* STABLE */

      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_table_column, {
        align: "right",
        width: "250"
      }, {
        header: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [];
        }),
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function (scope) {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button_group, {
            loading: $setup.loading
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
                type: "warning",
                size: "small",
                icon: "el-icon-edit text-white",
                onClick: function onClick($event) {
                  return $setup.performEdit(scope.row);
                }
              }, null, 8
              /* PROPS */
              , ["onClick"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_button, {
                type: "danger",
                size: "small",
                icon: "el-icon-delete text-white",
                onClick: function onClick($event) {
                  return $setup.performDelete(scope.row.position_id);
                }
              }, null, 8
              /* PROPS */
              , ["onClick"])];
            }),
            _: 2
            /* DYNAMIC */

          }, 1032
          /* PROPS, DYNAMIC_SLOTS */
          , ["loading"])];
        }),
        _: 1
        /* STABLE */

      })];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["data"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_el_pagination, {
    "class": "mt-5 d-flex justify-content-end",
    currentPage: $setup.currentPage,
    "onUpdate:currentPage": _cache[1] || (_cache[1] = function ($event) {
      return $setup.currentPage = $event;
    }),
    "page-size": $setup.pageSize,
    "onUpdate:page-size": _cache[2] || (_cache[2] = function ($event) {
      return $setup.pageSize = $event;
    }),
    disabled: $setup.disabled,
    "page-sizes": [10, 50, 100],
    layout: "total, sizes, prev, pager, next, jumper",
    total: $setup.total,
    lazy: true,
    onSizeChange: $setup.handleSizeChange,
    onCurrentChange: $setup.handleCurrentChange
  }, null, 8
  /* PROPS */
  , ["currentPage", "page-size", "disabled", "total"])])]), $setup.loading ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 2
  /* CLASS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Modal ref=\"myModal\" size=\"sm\" :title=\"modalTitle\" @hide=\"handleHide\">\n            <template #body>\n                <PosisiForm ref=\"myForm\" @success=\"handleSuccess\" :data=\"formData\"/>\n            </template>\n            <template #footer>\n            </template>\n        </Modal> ")]);
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

/***/ "./resources/ts/src/views/admin/Posisi.vue":
/*!*************************************************!*\
  !*** ./resources/ts/src/views/admin/Posisi.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Posisi_vue_vue_type_template_id_6c9e63c2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Posisi.vue?vue&type=template&id=6c9e63c2&ts=true */ "./resources/ts/src/views/admin/Posisi.vue?vue&type=template&id=6c9e63c2&ts=true");
/* harmony import */ var _Posisi_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Posisi.vue?vue&type=script&setup=true&lang=ts */ "./resources/ts/src/views/admin/Posisi.vue?vue&type=script&setup=true&lang=ts");
/* harmony import */ var D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_Code_bpkh_magang4_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Posisi_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Posisi_vue_vue_type_template_id_6c9e63c2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/ts/src/views/admin/Posisi.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/ts/src/views/admin/Posisi.vue?vue&type=script&setup=true&lang=ts":
/*!************************************************************************************!*\
  !*** ./resources/ts/src/views/admin/Posisi.vue?vue&type=script&setup=true&lang=ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Posisi_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Posisi_vue_vue_type_script_setup_true_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Posisi.vue?vue&type=script&setup=true&lang=ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/Posisi.vue?vue&type=script&setup=true&lang=ts");
 

/***/ }),

/***/ "./resources/ts/src/views/admin/Posisi.vue?vue&type=template&id=6c9e63c2&ts=true":
/*!***************************************************************************************!*\
  !*** ./resources/ts/src/views/admin/Posisi.vue?vue&type=template&id=6c9e63c2&ts=true ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Posisi_vue_vue_type_template_id_6c9e63c2_ts_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_ts_loader_index_js_clonedRuleSet_6_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Posisi_vue_vue_type_template_id_6c9e63c2_ts_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/ts-loader/index.js??clonedRuleSet-6!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Posisi.vue?vue&type=template&id=6c9e63c2&ts=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/ts-loader/index.js??clonedRuleSet-6!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/ts/src/views/admin/Posisi.vue?vue&type=template&id=6c9e63c2&ts=true");


/***/ })

}]);