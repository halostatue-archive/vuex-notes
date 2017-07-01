<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggleFavourite" class="glyphicon glyphicon-star"
       :class="{starred: activeNote && activeNote.favourite}"></i>
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { ADD_NOTE, DELETE_NOTE, TOGGLE_FAVOURITE } from '@/vuex/store'


export default {
  methods: {
    ...mapMutations({
      'addNote': ADD_NOTE,
      'deleteNote': DELETE_NOTE,
      'toggleFavourite': TOGGLE_FAVOURITE
    }),
  },
  computed: {
    ...mapGetters(['activeNote'])
  }
}
</script>
