
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
window.Vue = require('vue');

import ServiceAPI from './services/ServiceAPI'
import VueRouter  from "vue-router";
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)
window.API = new ServiceAPI();


const store = new Vuex.Store({
    state: {
        user: {},
        name: ""
    },
    mutations: {
        login (state, user) {
            state.user = user;
        },
        saveName (state) {
            state.name = "Vai hang";
        }
    }
})

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('layout-header', require('./components/layouts/HeaderComponent').default);
Vue.component('layout-footer', require('./components/layouts/FooterComponent').default);

Vue.component('view-home-feature-course', require('./components/views/home/FeatureCourseComponent').default);
Vue.component('view-home-feature-course-item', require('./components/views/home/FeatureCourseItemComponent').default);
Vue.component('modal-register', require('./components/layouts/modals/RegisterComponent').default);
Vue.component('modal-login', require('./components/layouts/modals/LoginComponent').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const HomeComponent = require('./components/views/home/HomeComponent');
// const CourseComponent = require('./components/views/course/CourseComponent');

const HomeComponent = () => import('./components/views/home/HomeComponent');
const CourseComponent = () => import('./components/views/course/CourseComponent');

// const Foo = { template: '<div>Home</div>' }
// const Bar = { template: '<div>Course</div>' }

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {name: 'home', path: '/', component: HomeComponent },
        {name: 'courses', path: '/courses', component: CourseComponent }
    ]
});

const app = new Vue({
    router,
    store,
    template: `
    <div id="app">
        <layout-header></layout-header>
    
        <main role="main">
            <router-view></router-view>
        </main>
    
        <layout-footer></layout-footer>
        <modal-register></modal-register>
        <modal-login></modal-login>
    </div>
`
}).$mount('#app')
