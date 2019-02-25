import BaseAPI from './BaseAPI'

export default class ServiceAPI extends BaseAPI {

    loadFeatureCourse(success, error) {
        this.get('/api/course', success, error);
    }

    login(params = {}, success, error) {
        this.post('/api/login', params, success, error);
    }

    courseDetail(courseId, success, error) {
        this.get('/api/course/' + courseId, success, error);
    }

    lessonDetail(lessonId, success, error) {
        this.get('/api/lesson/' + lessonId, success, error);
    }

    myCourse(success, error) {
        this.get('/api/course/my-course', success, error);
    }


    registerCourse(params = {}, success, error) {
        this.post('/api/course', params, success, error);
    }

    saveLesson(params = {}, success, error) {
        this.post('/api/lesson', params, success, error);
    }
}