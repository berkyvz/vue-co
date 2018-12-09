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

export default store;