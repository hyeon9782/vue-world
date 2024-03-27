<template lang="">
  <button class="btn btn-outline-primary btn-sm pull-xs-right">
    <i class="ion-heart"></i> {{ favoritesCount }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    favoritesCount: Number,
    favorited: Boolean
  }
})
</script>
<style lang=""></style>
