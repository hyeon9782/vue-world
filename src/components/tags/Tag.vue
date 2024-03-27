<template>
  <div class="tag-pill tag-default">{{ tag }}</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    tag: String
  }
})
</script>
<style lang=""></style>
