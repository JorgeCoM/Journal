<template>
    <div @click="$router.push({name: 'entry-view', params: {id: entry.id}})" class="entry-container mb-3 pointer p-2">

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold"> {{day}} </span>
            <span class="mx-1 fs-5">{{month}} </span>
            <span class="mx-2 fw-light">{{yearDay}}</span>
        </div>
        <div class="entry-description">
                {{shortText}}

        </div>
    </div>
</template>

<script>
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']

export default {

    props: {
        entry: {
            type: Object,
            required: true
        }
    },
    computed: {
        shortText(){
            return  this.entry.text.length > 200
            ? this.entry.text.substring(0, 200) + '...'
            : this.entry.text
        },
        day(){
            const date = new Date(this.entry.date)
            return date.getDate()
        },
        month(){
            const date = new Date(this.entry.date)
           return months[date.getMonth()]
        },
        yearDay(){
            const date = new Date(this.entry.date)
            return `${date.getFullYear()}, ${days[date.getDay()]}`
        }
    }

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