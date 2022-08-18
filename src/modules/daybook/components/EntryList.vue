<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input
        v-model="term"
        type="text"
        class="form-control"
        placeholder="Buscar entrada"
      />
    </div>

    <div class="mt-2 d-flex flex-column">
      <button
        @click="$router.push({ name: 'entry-view', params: { id: 'new' } })"
        class="btn btn-primary mx-3"
      >
        <i class="fa fa-plus-circle"></i>
        Nueva entrada
      </button>
    </div>

    <div class="entry-scrollarea">
      <Entry
        v-for="entrys in entriesByTerm"
        :key="entrys.id"
        :entry="entrys"
      ></Entry>
    </div>
  </div>
</template>

<script>
import Entry from "./Entry.vue";
import { mapGetters } from "vuex";
export default {
  components: { Entry },
  data() {
    return {
      term: "",
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntriesByTerm"]),
    entriesByTerm() {
      return this.getEntriesByTerm(this.term);
    },
  },
};
</script>

<style scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 150px);
  overflow: scroll;
}
</style>