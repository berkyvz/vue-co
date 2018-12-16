/* Vendor Libs Begin */
import Vue from 'vue';
import Vuex from 'vuex';
/* Vendor Libs End */

/* State Modules Begin */
import CompanyModule from './company/states'
import OpportunityModule from "./opportunity/states";
import AuthorizationModule from './authorization/states'
/* State Modules End */

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        company: CompanyModule,
        opportunity: OpportunityModule,
        authorization: AuthorizationModule
    }
});

export default store;