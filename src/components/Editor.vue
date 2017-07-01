<template>
  <div id="note-editor">
    <textarea :value="activeNoteText"
              @input="editNote"
              class="form-control">
    </textarea>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { EDIT_NOTE } from '@/vuex/constants'

export default {
  methods: {
    ...mapActions(['editNote'])
  },
  computed: {
    ...mapGetters(['activeNoteText'])
  }
}
</script>
