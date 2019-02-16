
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import ServiceAPI from './services/ServiceAPI'
window.API = new ServiceAPI();

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

const app = new Vue({
    el: '#app'
});
