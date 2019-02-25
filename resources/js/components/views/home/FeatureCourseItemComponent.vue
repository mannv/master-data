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
                    <router-link :to="{name: 'course-detail', params: {id: item.id}}">{{item.name}}</router-link>
                </h2>
                <p class="card-text">{{ item.description }}</p>
            </div>
            <div class="card-footer text-center">
                <router-link :to="{name: 'course-detail', params: {id: item['id']}}">
                    <i class="fas fa-play text-green"></i> {{$t('label.learn')}}
                </router-link>
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
