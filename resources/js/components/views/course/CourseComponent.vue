<template>
    <div class="album py-5 bg-light">
        <h2>{{$t('label.course_list')}}</h2>
        <div class="row">
            <view-home-feature-course-item
                    v-for="item in listCourse"
                    :key="item.id"
                    :item="item"
            ></view-home-feature-course-item>
        </div>
        <hr>
        <div class="text-center">
            <div v-html="pagination"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                listCourse: [],
                pagination: "",
                pageIndex: 1
            }
        },
        created() {
            console.log('View Home List Course loaded.');
            this.loadCourse();
        },
        methods: {
            loadCourse: function () {
                API.loadCourse(this.pageIndex, (response) => {
                    this.listCourse = response.items;
                    this.pagination = response.pagination;
                });
            }
        }
    }
</script>
