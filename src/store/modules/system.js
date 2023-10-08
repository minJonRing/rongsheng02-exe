const state = {
  // 
  switchElement1: 0,
  showWordA1: false,
  switchWordA1: 0,
  // 
  showWordA2: false,
  switchWordA2: 0,
  // 
  showWordA3: false,
  switchWordA3: 0,
  // 
  switchElement4: 0,
  showWordA4: false,
  switchWordA4: 0,

  // 
  showWordA5: false,
  switchWordA5: 0,
  // 
  showWordA6: false,
  switchWordA6: 0,
}

const mutations = {
  SET_SWITCH: (state, { type, active }) => {
    if (/(show)/g.test(type)) {
      state[type] = !state[type]
    } else {
      const value = typeof active === 'number' ? active : active === '0' ? state[type] - 1 : state[type] + 1;
      state[type] = value
    }
  },
}

const actions = {
  setData({ commit }, data) {
    commit('SET_SWITCH', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
