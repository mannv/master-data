<template>
    <div v-if="course != null">
        <div class="row">
            <div class="col-4">
                <img :src="course['cover_image']" alt="" class="img-thumbnail img-responsive">
            </div>
            <div class="col-6">
                <h1>{{course['name']}}</h1>
                <p class="lead">{{course['description']}}</p>
            </div>
        </div>

        <h2 class="mt-3">{{lesson['name']}}</h2>

        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="getYoutubeId(lesson['youtube_video'])" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                course: null,
                lesson: null
            }
        },
        created() {
            this.loadLessonDetail();
        },
        methods: {
            loadLessonDetail: function () {
                let lessonId = this.$route.params.id;

                API.lessonDetail(lessonId, (response) => {
                    this.lesson = response;
                    this.course = response["course"];
                }, (errors) => {
                    console.log(errors);
                });
            },

            getYoutubeId: function (youtubeURL) {
                let url = new URL(youtubeURL);
                let v = url.searchParams.get("v");
                return "https://www.youtube.com/embed/"+ v +"?rel=0"
            }
        }
    }
</script>
