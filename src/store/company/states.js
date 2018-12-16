import Actions from './actions';
import Getters from './getters';
import Mutations from './mutations';

const State = {
   company: null
};

const CompanyModule = {
    namespaced: true,
    state: State,
    getters: Getters,
    actions: Actions,
    mutations: Mutations
};

export default CompanyModule;