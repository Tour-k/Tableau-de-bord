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
    tocken: '',
    userId: ''
  },
  mutations: {
    INIT_USERNAME(state, payload){
      state.username = payload
    }, 
    INIT_TOCKEN(state, payload){
      state.tocken = payload
    },
    INIT_USERID(state, payload){
      state.userId = payload
    }
  }, 
  actions: {
    setUsername(context, username){
      context.commit('INIT_USERNAME', username)
    },
    setTocken(context, tocken){
      context.commit('INIT_TOCKEN', tocken)
    },
    setUserId(context, userId){
      context.commit('INIT_USERID', userId)
    }
  }

})

export default store
