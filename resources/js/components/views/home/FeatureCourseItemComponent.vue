<template>
    <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <div class="thumbnail">
                <img :src="item.cover_image" alt="" class="img-thumbnail">
            </div>
            <div class="card-body">
                <h2>{{item.name}}</h2>
                <p class="card-text">{{ item.description }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
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
