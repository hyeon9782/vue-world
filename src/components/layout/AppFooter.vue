<template>
  <footer>
    <div class="container">
      <RouterLink to="/" class="logo-font">conduit</RouterLink>
      <span class="attribution">
        An interactive learning project from
        <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
      </span>
    </div>
  </footer>
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
