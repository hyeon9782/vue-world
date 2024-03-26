<template>
  <header>
    <nav class="navbar navbar-light">
      <div class="container">
        <RouterLink to="/" class="navbar-brand">conduit</RouterLink>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/login" class="nav-link">Sign in</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/register" class="nav-link">Sign up</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/editor">
              <i class="ion-compose"></i>&nbsp;New Article
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/profile/eric-simons">
              <img src="" class="user-pic" />
              Eric Simons
            </RouterLink>
          </li>
        </ul>
      </div>
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
