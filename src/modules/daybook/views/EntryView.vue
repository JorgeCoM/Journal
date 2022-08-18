<template>
  <template v-if="entry">
    <div class="entry-title d-flex justify-content-between p-2">
      <div>
        <span class="text-success fs-3 fw-bold">{{ day }}</span>
        <span class="mx-1 fs-3">{{ month }}</span>
        <span class="mx-2 fw-light">{{ yearDay }}</span>
      </div>
      <div>
        <input
          accept="image/png, image/jpeg"
          v-show="false"
          type="file"
          ref="selectImage"
          @change="onSelectedImage"
        />
        <button
          class="btn btn-danger mx-2"
          @click="onDeleteEntry"
          v-if="entry.id"
        >
          Borrar
          <i class="fa fa-trash-alt"></i>
        </button>
        <button @click="onSelectImage" class="btn btn-primary mx-2">
          Subir foto
          <i class="fa fa-upload"></i>
        </button>
      </div>
    </div>
    <hr />
    <div v-if="entry" class="d-flex flex-column px-3 h-75">
      <textarea v-model="entry.text" placeholder="¿Qué sucedio hoy?"></textarea>
    </div>
    <Fab @on:click="saveEntry" icon="fa-save"></Fab>
    <img
      v-if="entry.picture && !localImage"
      :src="entry.picture"
      alt="entry-picture"
      class="mx-2 img-thumbnail"
    />
    <img
      v-if="localImage"
      :src="localImage"
      alt="entry-picture"
      class="mx-2 img-thumbnail"
    />
  </template>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Fab from "../components/Fab.vue";
import getDate from "../helpers/getDate";
import uploadImages from "../helpers/uploadImages";
import Swal from "sweetalert2";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: { Fab },
  data() {
    return {
      entry: null,
      localImage: null,
      file: null,
    };
  },
  computed: {
    ...mapGetters("journal", ["getEntriesById"]),
    day() {
      const { day } = getDate(this.entry.date);
      return day;
    },
    month() {
      const { month } = getDate(this.entry.date);
      return month;
    },
    yearDay() {
      const { yearDay } = getDate(this.entry.date);
      return yearDay;
    },
  },
  methods: {
    ...mapActions("journal", ["updateEntries", "createEntries", "deleteEntry"]),
    loadEntry() {
      let entry;
      if (this.id === "new") {
        entry = {
          text: "",
          date: new Date().getTime(),
        };
      } else {
        entry = this.getEntriesById(this.id);
        if (!entry) return this.$router.push({ name: "no-entry" });
      }

      this.entry = entry;
    },
    async saveEntry() {
      new Swal({
        title: "Espere por favor...",
        allowOutsideClick: false,
      });

      Swal.showLoading();

      const picture = await uploadImages(this.file);

      this.entry.picture = picture;

      if (this.entry.id) {
        await this.updateEntries(this.entry);
      } else {
        const id = await this.createEntries(this.entry);

        this.$router.push({ name: "entry-view", params: { id } });
      }

      this.file = null;
      Swal.fire("Guardado", "Entrada registrada con éxito", "success");

    },
    async onDeleteEntry() {
      const result = await Swal.fire({
        title: "¿Seguro que quieres eliminar esta entrada?",
        text: "Una vez borrado, no se podra recuperar",
        showDenyButton: true,
        confirmButtonText: "Sip, estoy seguro",
      });

      if (result.isConfirmed) {
        new Swal({
          title: "Espere por favor...",
          allowOutsideClick: false,
        });
        Swal.showLoading();
        await this.deleteEntry(this.entry.id);
        this.$router.push({ name: "no-entry" });
        Swal.fire("Borrado", "", "success");
      }
    },
    onSelectedImage(e) {
      const file = e.target.files[0];
      if (!file) {
        this.localImage = null
        this.file = null
        return;
      }

      this.file = file;

      const fr = new FileReader();
      fr.onload = () => (this.localImage = fr.result);
      fr.readAsDataURL(file);
    },
    onSelectImage() {
      this.$refs.selectImage.click();
    },
  },
  created() {
    this.loadEntry();
  },
  watch: {
    id() {
      this.loadEntry();
    },
  },
};
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
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
}
</style>