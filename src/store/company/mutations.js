import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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

export default store;
