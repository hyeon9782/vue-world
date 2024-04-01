<template>
  <button class="btn btn-sm btn-outline-secondary" @click="toggleFollow">
    <i class="ion-plus-round"></i>
    &nbsp;
    {{ profile?.following ? 'Un Follow ' + profile?.username : 'Follow ' + profile?.username }}
  </button>
</template>
<script lang="ts">
import { followUser, unFollowUser } from '@/api/profile'
import type { Profile } from '@/types/profile'
import { defineComponent, type PropType } from 'vue'
export default defineComponent({
  props: {
    profile: {
      type: Object as PropType<Profile>
    },
    username: {
      type: String,
      require: true
    },
    following: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    async toggleFollow() {
      try {
        let response
        if (!this.profile?.following) {
          response = await followUser(this.profile?.username)
        } else {
          response = await unFollowUser(this.profile?.username)
        }

        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>
<style lang=""></style>
