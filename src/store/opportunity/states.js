import Vue from 'vue';
import Vuex from 'vuex';
import store from '../store';

Vue.use(Vuex);

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

export default store;