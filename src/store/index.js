import { createStore } from 'vuex';
import createPersistedState from "vuex-persistedstate";
import { removeItemFromArr } from "@/utils/utils.js";

export default createStore({
  state: {
      param: null,
      users: [],
      favorites: []
  },
  mutations: {
    SET_PARAM(state, param){
          state.param = param;
      },
    SET_USERS(state, users){
        state.users = users;
    },
    SET_LIKE_FAVORITES(state, favorites){
        state.favorites.push(favorites)
    },
    SET_DONT_LIKE_FAVORITES(state, favorites){
        removeItemFromArr(state.favorites, favorites)
    }
  },
  actions: {
  },
  getters: {
    GET_PARAM(state){
          return state.param;
      },
    GET_USERS(state){
          return state.users
      },
    GET_FAVORITES(state){
          return state.favorites
      }
  },
  plugins: [createPersistedState()],

  
})
