<template>
    <div id="note-editor">
    <textarea
            :value="activeNoteText"
            @input="editNote"
            class="form-control">
    </textarea>
    </div>
</template>

<script>

  export default {
    methods: {
      editNote(e) {
        this.$store.dispatch('editNote', e)
      }
    },
    computed: {
      activeNoteText() {
        return this.$store.getters.activeNoteText
      }
    }
  }
</script>

<style>
    #note-editor {
        height: 100%;
        margin-left: 380px;
    }

    #note-editor textarea {
        height: 100%;
        border: 0;
        border-radius: 0;
    }
</style>