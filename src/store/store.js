/*import Vue from 'vue';
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
*/

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    coid: '', // bunu yazmaya gerek var mı şu an bilmiyorum. ileride kontrol et. kendime not
    email : '',
    password : '',
    name : '',
    city : '',
    latitude : '',
    longitude : '',
    phone : '',
    token : '', // bunu yazmaya gerek var mı şu an bilmiyorum. ileride kontrol et. kendime not
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

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
});

export default store;