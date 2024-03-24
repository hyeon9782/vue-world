<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Sign in</RouterLink>
      <RouterLink to="/register">Sign up</RouterLink>
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
  components: {
    RouterLink
  }
})
</script>
<style scoped></style>
