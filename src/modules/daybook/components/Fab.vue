<template>
  <button class="btn btn-primary">
<i class="fa fa-2x" @click="$emit('on:click')" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    }
  }

}
</script>

<style scoped>
button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 70px;
    height: 70px;
    border-radius: 100%;
}
</style>