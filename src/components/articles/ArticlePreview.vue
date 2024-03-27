<template>
  <div class="article-preview">
    <div class="article-meta">
      <UserBox :profile="article.author" :createdAt="article.createdAt" />
      <FavoriteButton :favorited="article.favorited" :favoritesCount="article.favoritesCount" />
    </div>
    <RouterLink to="/article/how-to-build-webapps-that-scale" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li
          class="tag-default tag-pill tag-outline"
          v-for="(tag, index) in article.tagList"
          :key="index"
        >
          {{ tag }}
        </li>
      </ul>
    </RouterLink>
  </div>
</template>
<script lang="ts">
import type { Article } from 'types/article'
import { defineComponent, type PropType } from 'vue'
import { RouterLink } from 'vue-router'
import UserBox from '@/components/user/UserBox.vue'
import FavoriteButton from '@/components/favorites/FavoriteButton.vue'
export default defineComponent({
  components: {
    RouterLink,
    UserBox,
    FavoriteButton
  },
  props: {
    article: {
      type: Object as PropType<Article>,
      required: true
    }
  }
})
</script>
<style lang=""></style>
