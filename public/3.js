(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      course: null,
      lesson: null,
      lessonId: 0
    };
  },
  created: function created() {
    this.lessonId = this.$route.params.id;
    this.loadLessonDetail();
  },
  methods: {
    loadLessonDetail: function loadLessonDetail() {
      var _this = this;

      API.lessonDetail(this.lessonId, function (response) {
        _this.lesson = response;
        _this.course = response["course"];

        if (_this.lesson.lesson_save.learn == 0) {
          _this.saveLesson();
        }
      }, function (errors) {
        console.log(errors);
      });
    },
    getYoutubeId: function getYoutubeId(youtubeURL) {
      var url = new URL(youtubeURL);
      var v = url.searchParams.get("v");
      return "https://www.youtube.com/embed/" + v + "?rel=0";
    },
    saveLesson: function saveLesson() {
      API.saveLesson({
        lesson_id: this.lessonId
      }, function (response) {
        console.log(response);
      }, function (errors) {
        console.log(errors);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=template&id=94594ff0&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=template&id=94594ff0& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    ? _c("div", [
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
            ])
          ])
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "mt-3" }, [_vm._v(_vm._s(_vm.lesson["name"]))]),
        _vm._v(" "),
        _c("div", { staticClass: "embed-responsive embed-responsive-16by9" }, [
          _c("iframe", {
            staticClass: "embed-responsive-item",
            attrs: {
              src: _vm.getYoutubeId(_vm.lesson["youtube_video"]),
              allowfullscreen: ""
            }
          })
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/course/detail/CoursePlayComponent.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/views/course/detail/CoursePlayComponent.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CoursePlayComponent_vue_vue_type_template_id_94594ff0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CoursePlayComponent.vue?vue&type=template&id=94594ff0& */ "./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=template&id=94594ff0&");
/* harmony import */ var _CoursePlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CoursePlayComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CoursePlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CoursePlayComponent_vue_vue_type_template_id_94594ff0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CoursePlayComponent_vue_vue_type_template_id_94594ff0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/course/detail/CoursePlayComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursePlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CoursePlayComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursePlayComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=template&id=94594ff0&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=template&id=94594ff0& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursePlayComponent_vue_vue_type_template_id_94594ff0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CoursePlayComponent.vue?vue&type=template&id=94594ff0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/course/detail/CoursePlayComponent.vue?vue&type=template&id=94594ff0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursePlayComponent_vue_vue_type_template_id_94594ff0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CoursePlayComponent_vue_vue_type_template_id_94594ff0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);