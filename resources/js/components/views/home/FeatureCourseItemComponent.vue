<template>
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <div class="thumbnail">
                <router-link :to="{name: 'course-detail', params: {id: item.id}}" class="nav-link">
                    <img :src="item['cover_image']" alt="" class="img-thumbnail">
                </router-link>
            </div>
            <div class="card-body">
                <h2>
                    <router-link :to="{name: 'course-detail', params: {id: item.id}}" class="nav-link">{{item.name}}</router-link>
                </h2>
                <p class="card-text">{{ item.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        abc
                    </div>
                    <small class="text-muted">9 mins</small>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        created() {
            //
        }
    }
</script>
