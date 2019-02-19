window.Vue = require('vue');
import VueRouter  from "vue-router";
Vue.use(VueRouter)

const HomeComponent = () => import('../components/views/home/HomeComponent');
const CourseComponent = () => import('../components/views/course/CourseComponent');
const MyCourseComponent = () => import('../components/views/course/MyCourseComponent');

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {name: 'home', path: '/', component: HomeComponent },
        {name: 'courses', path: '/courses', component: CourseComponent },
        {name: 'my-course', path: '/my-courses', component: MyCourseComponent }
    ]
});

export default router;