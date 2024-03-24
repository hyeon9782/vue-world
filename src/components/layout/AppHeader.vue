<template lang="">
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>
<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  }
}
</script>
<style lang=""></style>
