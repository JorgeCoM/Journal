<template>
  <NavBar></NavBar>

  <div v-if="isLoading" class="row justify-content-md-center">
    <div class="col-3 bg-info text-center mt-5">
      <p>Espere por favor...</p>
      <i class="mt2 fa fa-spin fa-sync"></i>
    </div>
  </div>

  <div v-else class="d-flex">
    <div class="col-3">
      <EntryList></EntryList>
    </div>
    <div class="col">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import EntryList from "../components/EntryList.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: { NavBar, EntryList },
  created() {
    this.loadEntries();
  },
  computed: {
    ...mapState("journal", ["isLoading"]),
  },
  methods: {
    ...mapActions("journal", ["loadEntries"]),
  },
};
</script>

<style>
</style>