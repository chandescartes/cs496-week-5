import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
    state: {
        currentLesson: 0,
        eng_lessons: [
            { title: 'Welcome', timeLeft: '15', route: '/' },
            { title: 'Staff Notation', timeLeft: '12', route: '/lesson1' },
            { title: 'Pitch', timeLeft: '09', route: '/lesson1' },
            { title: 'Duration', timeLeft: '06', route: '/lesson1' },
            { title: 'Beat', timeLeft: '03', route: '/lesson1' },
        ],
        kor_lessons: [
            { title: '환영합니다', timeLeft: '15', route: '/' },
            { title: '음을 표시하는 법', timeLeft: '12', route: '/lesson1' },
            { title: '음의 높이', timeLeft: '09', route: '/lesson1' },
            { title: '음의 길이', timeLeft: '06', route: '/lesson1' },
            { title: '박자', timeLeft: '03', route: '/lesson1' },
        ],
    },
    getters: {
        getCurrentLesson: state => state.lessons[state.currentLesson],
    },
    mutations: {
        updateLesson (state, lesson) {
            state.currentLesson = lesson;
        },
        updateLocale (state, language) {
            this.axios.
        },
    },
    actions: {
        updateLesson ({ commit }, lesson) {
            commit('updateLesson', lesson);
        },
    },
};

export default new Vuex.Store(store);
