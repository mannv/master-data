<template>
    <div v-if="course != null">
        <div class="row">
            <div class="col-4">
                <img :src="course['cover_image']" alt="" class="img-thumbnail img-responsive">
            </div>
            <div class="col-6">
                <h1>{{course['name']}}</h1>
                <p class="lead">{{course['description']}}</p>

                <button type="button" class="btn btn-primary">
                    <i class="fas fa-play"></i> Đăng ký học
                </button>
            </div>
        </div>

        <h2 class="mt-5">Danh sách bài học</h2>
        <course-lesson-list v-for="item in course['lessons']" :key="item['id']" :item="item" :alias="course['alias']"></course-lesson-list>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                course: null
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
                }, (errors) => {
                    console.log(errors);
                });
            }
        }
    }
</script>
