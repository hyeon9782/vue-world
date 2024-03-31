<template lang="">
  <button class="btn btn-outline-primary btn-sm pull-xs-right" @click="toggleFavorite">
    <i class="ion-heart"></i> {{ favoritesCount }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { favorite, unFavorite } from '@/api/favorites'
export default defineComponent({
  props: {
    favoritesCount: Number,
    favorited: Boolean,
    slug: String
  },
  methods: {
    async toggleFavorite() {
      try {
        let response
        if (this.favorited) {
          response = await unFavorite(this.slug)
        } else {
          response = await favorite(this.slug)
        }
        // articles 데이터 리패칭 기능 구현
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>
<style lang=""></style>
