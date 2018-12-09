import Vue from 'vue';
import Vuex from 'vuex';
import store from '../store';

Vue.use(Vuex);

const actions = {
    updateCompanyEmail({ commit }, email) {
        commit('setCompanyEmail', email);
    },
    updateCompanyPassword({ commit }, password) {
        commit('setCompanyPassword', password);
    },
    updateCompanyName({ commit }, name) {
        commit('setCompanyName', name);
    },
    updateCompanyCity({ commit }, city) {
        commit('setCompanyCity', city);
    },
    updateCompanyLatitude({ commit }, latitude) {
        commit('setCompanyLatitude', latitude);
    },
    updateCompanyLongitude({ commit }, longitude) {
        commit('setCompanyLongitude', longitude);
    },
    updateCompanyPhone({ commit }, phone) {
        commit('setCompanyPhone', phone);
    },

};

export default store;