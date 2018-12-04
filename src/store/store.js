import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    base_url: 'http://localhost:8082',
    message: 'Hello',
    username: 'berkaan',
};
const getters = {
    welcomeMessage(state) {
        return `${state.message} ${state.username}`  ;
    },
    getBaseURL(state) {
        return `${state.base_url}`;
    }
};
const mutations = {
    setUserName(state,name){
        state.username = name;
    }
};
const actions = {
    updateUserName({ commit }, name) {
        commit('setUserName', name);
    }
};

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;
