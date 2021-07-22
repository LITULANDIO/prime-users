import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";


export default createStore({
  state: {
      param: null
  },
  mutations: {
      SET_PARAM(state, param){
          state.param = param;
      }
  },
  actions: {
  },
  getters: {
      GET_PARAM(state){
          return state.param;
      }
  },
  plugins: [createPersistedState()],

  
})
