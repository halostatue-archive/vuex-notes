import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const ADD_NOTE = 'ADD_NOTE'
export const EDIT_NOTE = 'EDIT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const SET_ACTIVE_NOTE = 'SET_ACTIVE_NOTE'
export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE'

const state = {
  notes: [],
  activeNote: {}
}

const mutations = {
  [ADD_NOTE](state) {
    const newNote = {
      text: 'New note',
      favourite: false
    }

    state.notes.push(newNote)
    state.activeNote = newNote
  },
  [EDIT_NOTE](state, text) {
    state.activeNote.text = text
  },
  [DELETE_NOTE](state) {
    const index = state.notes.indexOf(state.activeNote)
    if (index > -1) {
      state.notes.splice(index, 1)
      state.activeNote = state.notes[0] || {}
    }
  },
  [TOGGLE_FAVOURITE](state) {
    state.activeNote.favourite = !state.activeNote.favourite
  },
  [SET_ACTIVE_NOTE](state, note) {
    state.activeNote = note
  }
}

const getters = {
  notes(state) {
    return state.notes
  },
  activeNote(state) {
    return state.activeNote
  },
  activeNoteText(_state, getters) {
    return getters.activeNote.text
  },
  favouriteNotes(_state, getters) {
    return getters.notes.filter(note => note.favourite)
  }
}

const actions = {
  addNote({ commit }) {
    commit(ADD_NOTE)
  },
  editNote({ commit }, e) {
    commit(EDIT_NOTE, e.$el.value)
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

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
