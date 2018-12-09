/*
const getters = {
    welcomeMessage(state) {
        return `${state.message} ${state.username}`  ;
    },
    getBaseURL(state) {
        return `${state.base_url}`;
    }
*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    coid: '', // bunu yazmaya gerek var mı şu an bilmiyorum. ileride kontrol et. kendime not
    email: '',
    password: '',
    name: '',
    city: '',
    latitude: '',
    longitude: '',
    phone: '',
    token: '', // bunu yazmaya gerek var mı şu an bilmiyorum. ileride kontrol et. kendime not
};
const getters = {

};
const mutations = {
    setCompanyEmail(state, email) {
        state.email = email;
    },
    setCompanyPassword(state, password) {
        state.password = password;
    },
    setCompanyName(state, name) {
        state.name = name;
    },
    setCompanyCity(state, city) {
        state.city = city;
    },
    setCompanyLatitude(state, latitude) {
        state.latitude = latitude;
    },
    setCompanyLongitude(state, longitude) {
        state.longitude = longitude;
    },
    setCompanyPhone(state, phone) {
        state.phone = phone;
    },

};
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

const state2 = {
    oid: '', // bunu yazmaya gerek var mı şu an bilmiyorum. ileride kontrol et. kendime not  
    latitude: '',
    longitude: '',
    count: '',
    desc1: '',
    desc2: '',
    desc3: '',
    price: '',
    city: '',
};
const getters2 = {

};

const mutations2 = {
    setOpportunityLatitude(state2, latitude) {
        state2.latitude = latitude;
    },
    setOpportunityLongitude(state2, longitude) {
        state2.longitude = longitude;
    },
    setOpportunityCount(state2, count) {
        state2.count = count;
    },
    setOpportunityDesc1(state2, desc1) {
        state2.desc1 = desc1;
    },
    setOpportunityDesc2(state2, desc2) {
        state2.desc2 = desc2;
    },
    setOpportunityDesc3(state2, desc3) {
        state2.desc3 = desc3;
    },
    setOpportunityPrice(state2, price) {
        state2.price = price;
    },
    setOpportunityCity(state2, city) {
        state2.city = city;
    },

};
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


const store = new Vuex.Store({
    modules: {
        company: {
            state,
            getters,
            mutations,
            actions,
        },
        opportunity: {
            state2,
            getters2,
            mutations2,
            actions2,
        }
    }
});

export default store;