(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      course: null,
      registered: false,
      showMessageSuccess: false
    };
  },
  created: function created() {
    this.loadCourseDetail();
  },
  methods: {
    loadCourseDetail: function loadCourseDetail() {
      var _this = this;

      var courseId = this.$route.params.id;
      API.courseDetail(courseId, function (response) {
        _this.course = response;
        _this.registered = response.registered;
      }, function (errors) {
        console.log(errors);
      });
    },
    registerCourse: function registerCourse() {
      var _this2 = this;

      var courseId = this.$route.params.id;
      API.registerCourse({
        course_id: courseId
      }, function (response) {
        if (response.status == 1) {
          _this2.registered = true;
          _this2.showMessageSuccess = true;
        }
      }, function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=template&id=73e7276a&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=template&id=73e7276a& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.course != null
    ? _c(
        "div",
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-4" }, [
              _c("img", {
                staticClass: "img-thumbnail img-responsive",
                attrs: { src: _vm.course["cover_image"], alt: "" }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-6" }, [
              _c("h1", [_vm._v(_vm._s(_vm.course["name"]))]),
              _vm._v(" "),
              _c("p", { staticClass: "lead" }, [
                _vm._v(_vm._s(_vm.course["description"]))
              ]),
              _vm._v(" "),
              !_vm.registered
                ? _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.registerCourse }
                    },
                    [
                      _c("i", { staticClass: "fas fa-play" }),
                      _vm._v(" Đăng ký học\n            ")
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.showMessageSuccess
                ? _c(
                    "div",
                    {
                      staticClass: "alert alert-success",
                      attrs: { role: "alert" }
                    },
                    [
                      _vm._v(
                        "\n                Đăng ký khoá học thành công\n            "
                      )
                    ]
                  )
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c("h2", { staticClass: "mt-5" }, [
            _vm._v("Danh sách bài học " + _vm._s(_vm.course["registered"]))
          ]),
          _vm._v(" "),
          _vm._l(_vm.course["lessons"], function(item) {
            return _c("course-lesson-list", {
              key: item["id"],
              attrs: {
                item: item,
                registered: _vm.registered,
                alias: _vm.course["alias"]
              }
            })
          })
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/course/detail/CourseDetailComponent.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/views/course/detail/CourseDetailComponent.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CourseDetailComponent_vue_vue_type_template_id_73e7276a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CourseDetailComponent.vue?vue&type=template&id=73e7276a& */ "./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=template&id=73e7276a&");
/* harmony import */ var _CourseDetailComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CourseDetailComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CourseDetailComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CourseDetailComponent_vue_vue_type_template_id_73e7276a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CourseDetailComponent_vue_vue_type_template_id_73e7276a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/course/detail/CourseDetailComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetailComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetailComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetailComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=template&id=73e7276a&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=template&id=73e7276a& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetailComponent_vue_vue_type_template_id_73e7276a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CourseDetailComponent.vue?vue&type=template&id=73e7276a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/course/detail/CourseDetailComponent.vue?vue&type=template&id=73e7276a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetailComponent_vue_vue_type_template_id_73e7276a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CourseDetailComponent_vue_vue_type_template_id_73e7276a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);