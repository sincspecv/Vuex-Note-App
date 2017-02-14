import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: [],
    activeNote: {}
  },
  mutations: {
    ADD_NOTE (state) {
      const newNote = {
        text: 'New note',
        favorite: false
      }
      // only mutators can mutate the state
      state.notes.push(newNote)
      state.activeNote = newNote
    },
    EDIT_NOTE (state, text) {
      state.activeNote.text = text
    },
    DELETE_NOTE (state) {
      // state.notes.$remove(state.activeNote)
      let notes = state.notes
      notes.splice(notes.indexOf(state.activeNote), 1)
      state.activeNote = state.notes[0]
    },
    TOGGLE_FAVORITE (state) {
      state.activeNote.favorite = !state.activeNote.favorite
    },
    SET_ACTIVE_NOTE (state, note) {
      state.activeNote = note
    }
  },
  actions: {
    addNote({ commit }) {
      commit('ADD_NOTE')
    },
    editNote({ commit }, e) {
      commit('EDIT_NOTE', e.target.value)
    },
    deleteNote({ commit }) {
      commit('DELETE_NOTE')
    },
    updateActiveNote({ commit }, note) {
      commit('SET_ACTIVE_NOTE', note)
    },
    toggleFavorite({ commit }) {
      commit('TOGGLE_FAVORITE')
    }
  },
  getters: {
    activeNote: state => state.activeNote,
    notes: state => state.notes,
    activeNoteText: state => state.activeNote.text
  }
})
