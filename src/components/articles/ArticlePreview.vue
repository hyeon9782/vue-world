<template>
  <div class="article-preview">
    <div class="article-meta">
      <RouterLink to="/profile/eric-simons"
        ><img src="http://i.imgur.com/Qr71crq.jpg"
      /></RouterLink>
      <div class="info">
        <RouterLink to="/profile/eric-simons" class="author">Eric Simons</RouterLink>
        <span class="date">January 20th</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right">
        <i class="ion-heart"></i> 29
      </button>
    </div>
    <RouterLink to="/article/how-to-build-webapps-that-scale" class="preview-link">
      <h1>How to build webapps that scale{{ article.title }}</h1>
      <p>This is the description for the post.{{ article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li
          class="tag-default tag-pill tag-outline"
          v-for="(tag, index) in article.tagList"
          :key="index"
        >
          {{ tag }}
        </li>
        <li class="tag-default tag-pill tag-outline">realworld</li>
        <li class="tag-default tag-pill tag-outline">implementations</li>
      </ul>
    </RouterLink>
  </div>
</template>
<script lang="ts">
import type { Article } from 'types/article'
import { defineComponent, type PropType } from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
  components: {
    RouterLink
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
