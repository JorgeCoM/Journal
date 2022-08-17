<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">16</span>
            <span class="mx-1 fs-3">Agosto</span>
            <span class="mx-2 fw-light">2022, martes</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary mx-2">Subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea placeholder="¿Qué sucedio hoy?"></textarea>
    </div>
    <Fab icon="fa-save"></Fab>
    <img src="@/assets/karmaland5.jpg" alt="entry-picture" class="mx-2 img-thumbnail">
</template>

<script>
import Fab from '../components/Fab.vue';
export default {
    components: { Fab }
}
</script>

<style scoped>
textarea {
    border: none;
    font-size: 20px;
    height: 100%;
    resize: none;
}

textarea:focus {
    outline: none;
}

img {
    width: 300px;
    position: fixed;
    bottom: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0 , 0, .2);
}
</style>