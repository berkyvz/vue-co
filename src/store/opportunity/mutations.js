import Vue from 'vue';
import Vuex from 'vuex';

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

Vue.use(Vuex);