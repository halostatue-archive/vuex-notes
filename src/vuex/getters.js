export const getters = {
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
