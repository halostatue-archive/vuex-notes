import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { actions } from '@/vuex/actions'
import { getters } from '@/vuex/getters'
import { mutations } from '@/vuex/mutations'

const state = {
  notes: [],
  activeNote: {}
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
