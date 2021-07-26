import { createStore } from 'vuex'

export default createStore({
  state: {
    isDartTheme: JSON.parse(localStorage.getItem('isDartTheme')) || false,
    locales: JSON.parse(localStorage.getItem('locales')) || process.env.VUE_APP_I18N_LOCALE
  },
  mutations: {
    changeTheme(state, payload) {
      state.isDartTheme = payload
      localStorage.setItem('isDartTheme', JSON.stringify(state.isDartTheme))
    },
    changeLocale(state, payload) {
      state.locales = payload
      localStorage.setItem('locales', JSON.stringify(state.locales))   
    }
  }
})
