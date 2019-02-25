<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-10">
                    <h4 v-if="item['is_free'] == 1 || registered == 1">
                        <router-link :to="{name: 'course-play', params: {alias: alias,id: item.id}}" class="nav-link">{{item['name']}}</router-link>
                    </h4>
                    <h4 v-if="item['is_free'] == 0 &&  registered == 0">{{item['name']}}</h4>
                </div>
                <div class="col-1 text-center">
                    <span>{{item['duration']}}</span>
                </div>
                <div class="col-1 text-center">
                    <i v-if="item['is_free'] == 1 || registered == 1"
                       v-bind:class="{'fa-play-circle text-primary': (item.lesson_save.finish == 0 && item.lesson_save.learn == 0), 'fa-clock text-warning': (item.lesson_save.finish == 0 && item.lesson_save.learn == 1), 'fa-check-circle text-success': (item.lesson_save.finish == 1)}"
                       class="fas fa-lg"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item', 'alias', 'registered']
    }
</script>
