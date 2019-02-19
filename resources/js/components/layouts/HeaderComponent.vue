<template>
    <div class="container">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <router-link :to="{name: 'home'}" class="navbar-brand">Demo VueJS</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'courses'}" class="nav-link">Courses</router-link>
                    </li>
                </ul>
                <form class="form-inline mt-2 mt-md-0">
                    <ul v-if="!this.$store.state.loggedIn" class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#" @click="showPopupRegister">Đăng ký</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" @click="showPopupLogin">Đăng nhập</a>
                        </li>
                    </ul>

                    <ul v-if="this.$store.state.loggedIn" class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <router-link :to="{name: 'my-course'}" class="nav-link">My Courses</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                {{this.$store.state.user['name']}}
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#"><i class="fas fa-cog"></i> Setting</a>
                                <a class="dropdown-item" href="#"><i class="fas fa-key"></i> Change password</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" @click="logout">
                                    <i class="fas fa-sign-out-alt"></i> Logout
                                </a>
                            </div>
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

        },
        methods: {
            showPopupLogin: function() {
                $('#loginModal').modal({keyboard: false, backdrop: 'static'});
            },

            showPopupRegister: function() {
                $('#registerModal').modal({keyboard: false, backdrop: 'static'});
            },

            logout: function() {
                this.$store.commit('logoutSuccess');
                window.location = '/';
            }
        }
    }
</script>
