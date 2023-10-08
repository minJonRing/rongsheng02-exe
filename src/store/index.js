import { createStore } from 'vuex'
import system from './modules/system'
import getters from './getters'


const store = new createStore({
  modules: {
    system
  },
  getters
})

export default store
