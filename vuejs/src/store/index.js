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
    username : '', 
    token: '',
    userId: ''
  },
  mutations: {
    INIT_USERNAME(state, payload){
      state.username = payload
    }, 
    INIT_TOKEN(state, payload){
      state.token = payload
    },
    INIT_USERID(state, payload){
      state.userId = payload
    }
  }, 
  actions: {
    setUsername(context, username){
      context.commit('INIT_USERNAME', username)
    },
    setToken(context, token){
      context.commit('INIT_TOKEN', token)
    },
    setUserId(context, userId){
      context.commit('INIT_USERID', userId)
    }
  }

})

export default store
