import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  loading: true,
  error: false,
  errorMsg: null
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
