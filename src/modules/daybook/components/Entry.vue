<template>
    <div @click="$router.push({name: 'entry-view', params: {id: 1}})" class="entry-container mb-3 pointer p-2">

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">16 </span>
            <span class="mx-1 fs-5">Agosto </span>
            <span class="mx-2 fw-light">2022, martes</span>
        </div>
        <div class="entry-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus ipsam officia facere sed totam saepe,
            tenetur in similique placeat quis sit architecto soluta molestias ut temporibus, hic non aspernatur aperiam!

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.entry-container {
    border-bottom: 1px solid #2c2c2c;
    transition: .2s ease-in;
}

.entry-container:hover {
    background-color: rgba(211, 211, 211, 0.4);
    transition: .2s ease-in;

}

</style>