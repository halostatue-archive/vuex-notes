<template>
  <div id="app">
    <toolbar></toolbar>
    <!-- <notes&#45;list></notes&#45;list> -->
    <!-- <editor></editor> -->
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import NotesList from '@/components/NotesList'
import Editor from '@/components/Editor'

export default {
  components: {
    Toolbar,
    NotesList,
    Editor
  }
}
</script>
