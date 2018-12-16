import Actions from './actions';
import Getters from './getters';
import Mutations from './mutations';

const State = {
   token: null
};

const AuthorizationModule = {
    namespaced: true,
    state: State,
    getters: Getters,
    actions: Actions,
    mutations: Mutations
};

export default AuthorizationModule;