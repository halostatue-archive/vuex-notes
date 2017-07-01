import {
  ADD_NOTE, EDIT_NOTE, DELETE_NOTE, SET_ACTIVE_NOTE, TOGGLE_FAVOURITE
} from '@/vuex/constants'

export const mutations = {
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
