<template>
    <div class="div">
        <h1>My Course</h1>

        <div class="row" v-if="listCourse.length > 0">
            <div class="col-4" v-for="item in listCourse" :key="item['id']">
                <div class="card">
                    <img :src="item['cover_image']"
                         class="card-img-top" :alt="item['name']">
                    <div class="card-body">
                        <p class="card-text">{{item['description']}}</p>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-7">
                                <router-link :to="{name: 'course-detail', params: {id: item['id']}}">
                                    <i class="fas fa-play text-green"></i>
                                    Học ngay
                                </router-link> (0/{{item['lessons_count']}})
                            </div>
                            <div class="col-5 text-right">
                                <i class="fas fa-clock"></i> {{item['created_at']}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                listCourse: []
            }
        },
        created() {
            this.getMyCourse();
        },
        methods: {
            getMyCourse: function () {
                API.myCourse((response) => {
                    this.listCourse = response;
                }, (errors) => {
                    console.log(errors);
                });
            }
        }
    }
</script>
