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
                        <router-link :to="{name: 'home'}" class="nav-link">{{$t('nav.home')}}</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name: 'courses'}" class="nav-link">{{$t('nav.courses')}}</router-link>
                    </li>
                </ul>
                <form class="form-inline mt-2 mt-md-0">
                    <ul class="navbar-nav mr-auto">
                        <template v-if="!this.$store.state.loggedIn">
                            <li class="nav-item active">
                                <a class="nav-link" href="#" @click="showPopupRegister">{{$t('nav.register')}}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" @click="showPopupLogin">{{$t('nav.login')}}</a>
                            </li>
                        </template>

                        <template v-if="this.$store.state.loggedIn">
                            <li class="nav-item">
                                <router-link :to="{name: 'my-course'}" class="nav-link">My Courses</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="true" aria-expanded="false">
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
                        </template>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                               aria-haspopup="true" aria-expanded="false">
                                <span v-if="this.$store.state.locale == 'vn'">{{$t('language.vn')}}</span>
                                <span v-if="this.$store.state.locale == 'en'">{{$t('language.en')}}</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item" href="#" @click="changeLanguage('en')">{{$t('language.en')}}</a>
                                <a class="dropdown-item" href="#" @click="changeLanguage('vn')">{{$t('language.vn')}}</a>
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
        data() {
            return {}
        },
        created() {

        },
        methods: {
            showPopupLogin: function () {
                $('#loginModal').modal({keyboard: false, backdrop: 'static'});
            },

            showPopupRegister: function () {
                $('#registerModal').modal({keyboard: false, backdrop: 'static'});
            },

            logout: function () {
                this.$store.commit('logoutSuccess');
                window.location = '/';
            },

            changeLanguage: function(code) {
                this.$store.commit('changeLocale', code);
                this.$i18n.locale = code;
            }
        }
    }
</script>
