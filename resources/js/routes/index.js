window.Vue = require('vue');
import VueRouter  from "vue-router";
Vue.use(VueRouter)

const HomeComponent = () => import('../components/views/home/HomeComponent');
const CourseComponent = () => import('../components/views/course/CourseComponent');
const MyCourseComponent = () => import('../components/views/course/MyCourseComponent');
const CourseDetailComponent = () => import('../components/views/course/detail/CourseDetailComponent');
const CoursePlayComponent = () => import('../components/views/course/detail/CoursePlayComponent');

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {name: 'home', path: '/', component: HomeComponent },
        {name: 'courses', path: '/courses', component: CourseComponent },
        {name: 'course-detail', path: '/course/:id', component: CourseDetailComponent },
        {name: 'course-play', path: '/course/:alias/:id', component: CoursePlayComponent },
        {name: 'my-course', path: '/my-courses', component: MyCourseComponent }
    ]
});

export default router;