import Vue from 'vue';
import Vuex from 'vuex';
import store from './state';

Vue.use(Vuex);

const actions2 = {
    updateOpportunityLatitude({ commit }, latitude) {
        commit('setCompanyLatitude', latitude);
    },
    updateOpportunityLongitude({ commit }, longitude) {
        commit('setOpportunityLongitude', longitude);
    },
    updateOpportunityDesc1({ commit }, desc1) {
        commit('setOpportunityDesc1', desc1);
    },
    updateOpportunityDesc2({ commit }, desc2) {
        commit('setOpportunityDesc2', desc2);
    },
    updateOpportunityDesc3({ commit }, desc3) {
        commit('setOpportunityDesc3', desc3);
    },
    updateOpportunityPrice({ commit }, price) {
        commit('setOpportunityPrice', price);
    },
    updateOpportunityCity({ commit }, city) {
        commit('setOpportunityCity', city);
    },
};

export default store;