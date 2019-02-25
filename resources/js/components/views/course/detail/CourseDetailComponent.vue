<template>
    <div v-if="course != null">
        <div class="row">
            <div class="col-4">
                <img :src="course['cover_image']" alt="" class="img-thumbnail img-responsive">
            </div>
            <div class="col-6">
                <h1>{{course['name']}}</h1>
                <p class="lead">{{course['description']}}</p>

                <button v-if="!registered" @click="registerCourse" type="button" class="btn btn-primary">
                    <i class="fas fa-play"></i> Đăng ký học
                </button>
                <div v-if="showMessageSuccess" class="alert alert-success" role="alert">
                    Đăng ký khoá học thành công
                </div>
            </div>
        </div>

        <h2 class="mt-5">Danh sách bài học {{course['registered']}}</h2>
        <course-lesson-list v-for="item in course['lessons']"
                            :key="item['id']"
                            :item="item"
                            :registered="registered"
                            :alias="course['alias']">

        </course-lesson-list>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                course: null,
                registered: false,
                showMessageSuccess: false
            }
        },
        created() {
            this.loadCourseDetail();
        },
        methods: {
            loadCourseDetail: function () {
                let courseId = this.$route.params.id;

                API.courseDetail(courseId, (response) => {
                    this.course = response;
                    this.registered = response.registered;
                }, (errors) => {
                    console.log(errors);
                });
            },
            registerCourse: function () {
                let courseId = this.$route.params.id;
                API.registerCourse({course_id: courseId}, (response) => {
                    if(response.status == 1) {
                        this.registered = true;
                        this.showMessageSuccess = true;
                    }
                }, (error) => {
                    console.log(error);
                })
            }
        }
    }
</script>
