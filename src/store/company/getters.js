import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getters = {
    getCompanies(state) {
        return `${state.email} ${state.password} ${state.name} ${state.city} ${state.latitude} ${state.longitude} ${state.phone} ${state.token}`;
    },
}

export default store;