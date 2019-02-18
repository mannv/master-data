<template>
    <div class="container">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <a class="navbar-brand" href="#">Demo VueJS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Trang chủ</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/courses" class="nav-link">Khoá học</router-link>
                    </li>
                </ul>
                <form class="form-inline mt-2 mt-md-0">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" data-toggle="modal" data-target="#registerModal">Đăng ký</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-toggle="modal" data-target="#loginModal">Đăng nhập</a>
                        </li>
                    </ul>
                </form>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        created() {
            console.log('Layout Header loaded. 2');
        },
        methods: {

        }
    }
</script>
