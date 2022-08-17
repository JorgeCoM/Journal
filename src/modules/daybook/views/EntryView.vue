<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fw-light">{{ yearDay }}</span>
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
        <div v-if="entry" class="d-flex flex-column px-3 h-75">
            <textarea v-model="entry.text" placeholder="¿Qué sucedio hoy?"></textarea>
        </div>
        <Fab icon="fa-save"></Fab>
        <img src="@/assets/karmaland5.jpg" alt="entry-picture" class="mx-2 img-thumbnail">
    </template>

</template>

<script>
import { mapGetters } from 'vuex'
import Fab from '../components/Fab.vue';
import getDate from '../helpers/getDate'
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: { Fab },
    data() {
        return {
            entry: null
        }
    },
    computed: {
        ...mapGetters('journal', ['getEntriesById']),
        day() {
            const { day } = getDate(this.entry.date)
            return day
        },
        month() {
            const { month } = getDate(this.entry.date)
            return month
        },
        yearDay() {
            const { yearDay } = getDate(this.entry.date)
            return yearDay
        }
    },
    methods: {
        loadEntry() {
            const entry = this.getEntriesById(this.id)
            if (!entry) return this.$router.push({ name: 'no-entry' })

            this.entry = entry
        }
    },
    created() {
        this.loadEntry()
    },
    watch: {
        id() {
            this.loadEntry()
        }
    }

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
    box-shadow: 0px 5px 10px rgba(0, 0, 0, .2);
}
</style>