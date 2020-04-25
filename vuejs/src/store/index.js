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
    email: '',
    token: '',
    userId: '',
    listeWidgets: [
      { id: 0, serviceName: "Météo", serviceIcon: "mdi-weather-sunny", widgets: [
          {id: 0, name: "Actuelle", icon: "mdi-white-balance-sunny", params: [{name: 'City', label: 'Entrer le nom de la ville dont vous souhaitez recevoir la météo !',  defaultValue: 'Paris'}] },
          {id: 1, name: "Prévisionnelle 3h", icon: "mdi-clock", params: [{name: 'City', label: 'Entrer le nom de la ville dont vous souhaitez recevoir la météo !', defaultValue: 'Paris'}] },
          {id: 2, name: "Prévisionnelle jour", icon: "mdi-calendar-today", params: [{name: 'City', label: 'Entrer le nom de la ville dont vous souhaitez recevoir la météo !', defaultValue: 'Paris'}] },
      ]},
      { id: 1, serviceName: "Instagram", serviceIcon: "mdi-instagram", widgets: [
        {id: 0, name: "Principales métrics", icon: "mdi-chart-bar", params: [{name: 'Account', label: 'Entrer le nom du compte public instagram' , defaultValue: 'Paris'}] },
    ]},
      { id: 2, serviceName: "Horloge", serviceIcon: "mdi-clock", widgets: [
        {id: 0, name: "Heure par fuseau", icon: "mdi-web", params: [{name: 'fuseau', label: 'Entrer votre fuseau horaire' ,  defaultValue: 'Paris'}]},
    ]}
    ]
  },
  mutations: {
    INIT_USERNAME(state, payload){
      state.username = payload
    }, 
    INIT_TOKEN(state, payload){
      state.token = payload
    },
    INIT_EMAIL(state, payload){
      state.email = payload
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
    setEmail(context, email){
      context.commit('INIT_EMAIL', email)
    },
    setUserId(context, userId){
      context.commit('INIT_USERID', userId)
    }
  }

})

export default store
