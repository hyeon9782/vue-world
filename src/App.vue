<script lang="ts">
import AppFooter from '@/components/layout/AppFooter.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import { RouterView } from 'vue-router'
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<style scoped></style>
