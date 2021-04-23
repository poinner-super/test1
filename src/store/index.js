import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    openTab: [],
    activeIndex: ''
  },
  mutations: {
    add_tabs (state, data) {
      this.state.openTab.push(data)
    },
    delete_tabs (state, route) {
      let index = 0
      for (let gohh of state.openTab) {
        if (gohh.route === route) {
          break
        }
        index++
      }
      this.state.openTab.splice(index, 1)
    },
    set_active_index (state, index) {
      this.state.activeIndex = index
    }
  }
})
