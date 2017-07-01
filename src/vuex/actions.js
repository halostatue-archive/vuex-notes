import {
  ADD_NOTE, EDIT_NOTE, DELETE_NOTE, SET_ACTIVE_NOTE, TOGGLE_FAVOURITE
} from '@/vuex/constants'

export const actions = {
  addNote({ commit }) {
    commit(ADD_NOTE)
  },
  editNote({ commit }, e) {
    commit(EDIT_NOTE, e.target.value)
  },
  deleteNote({ commit }, e) {
    commit(DELETE_NOTE)
  },
  updateActiveNote({ commit }, note) {
    commit(SET_ACTIVE_NOTE, note)
  },
  toggleFavourite({ commit }) {
    commit(TOGGLE_FAVOURITE)
  }
}
