<template>
    <NavBar></NavBar>

    <div class="d-flex">
        <div class="col-3">
            <EntryList></EntryList>
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import EntryList from '../components/EntryList.vue';
export default {
    components: { NavBar, EntryList }
}
</script>

<style>
</style>