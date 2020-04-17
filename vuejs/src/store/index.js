import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
  },
  state: {
    username: 'Robert'
  },
  mutations: {
    INIT_USERNAME(state, payload){
      state.username = payload
    }
  }, 
  actions: {
    setUsername(context, username){
      context.commit('INIT_USERNAME', username)
    }
  }

})

export default store
