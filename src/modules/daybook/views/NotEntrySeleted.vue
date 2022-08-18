<template>
  <div class="d-flex justify-content-center">
    <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <Fab @on:click="createNewEntry"></Fab>
</template>

<script>
import Fab from '@/modules/daybook/components/Fab.vue'
export default {
  components: {
    Fab
  },
  methods: {
    createNewEntry() {
      this.$router.push({ name: 'entry-view', params: { id: 'new' } })
    }
  }
}
</script>
<style scoped>
div {
  height: 100%;
}
</style>