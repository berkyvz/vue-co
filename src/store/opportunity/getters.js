import Vue from 'vue';
import Vuex from 'vuex';
import store from './state';

Vue.use(Vuex);

const getters = {
    getOpportunuties(state) {
        return `${state.latitude} ${state.longitude} ${state.desc1} ${state.desc2} ${state.desc3} ${state.price} ${state.city}`;
    },
}

export default store;