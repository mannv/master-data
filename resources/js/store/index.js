window.Vue = require('vue');
import VuexPersist from 'vuex-persist'
import Vuex from 'vuex'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'learning-course',
    storage: localStorage
})
const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        user: {},
        loggedIn: false,
        locale: 'vn'
    },
    mutations: {
        loginSuccess(state, user) {
            state.user = user;
            state.loggedIn = true;
        },
        logoutSuccess(state) {
            state.user = {};
            state.loggedIn = false;
        },
        changeLocale(state, locale) {
            state.locale = locale;
        }
    }
})

export default store;