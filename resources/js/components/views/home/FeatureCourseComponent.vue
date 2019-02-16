<template>
    <div class="album py-5 bg-light">
        <div class="container">

            <div class="row">

                <view-home-feature-course-item
                        v-for="item in listCourse"
                        :key="item.id"
                        :item="item"
                ></view-home-feature-course-item>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                listCourse: []
            }
        },
        created() {
            console.log('View Home List Course loaded.');
            this.loadFeatureCourse();
        },
        methods: {
            loadFeatureCourse: function () {
                API.loadFeatureCourse((response) => {
                    this.listCourse = response;
                });
            }
        }
    }
</script>
