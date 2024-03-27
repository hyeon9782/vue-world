<template lang="">
  <RouterLink :to="`/profile/${profile?.username}`"><img :src="profile?.image" /></RouterLink>
  <div class="info">
    <RouterLink to="/profile/eric-simons" class="author">{{ profile?.username }}</RouterLink>
    <span class="date">{{ createdAt }}</span>
  </div>
</template>
<script lang="ts">
import type { Profile } from 'types/profile'
import { defineComponent, type PropType } from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
  components: {
    RouterLink
  },
  props: {
    profile: {
      type: Object as PropType<Profile>
    },
    createdAt: {
      type: String
    }
  }
})
</script>
<style lang=""></style>
