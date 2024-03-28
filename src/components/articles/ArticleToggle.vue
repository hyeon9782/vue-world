<template lang="">
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item" @click="fetchArticles({ type: 'feed' })">
        <span class="nav-link" :class="{ active: type === 'feed' }">Your Feed</span>
      </li>
      <li class="nav-item" @click="fetchArticles({ type: 'basic' })">
        <span class="nav-link" :class="{ active: type === 'basic' }">Global Feed</span>
      </li>
      <li class="nav-item" @click="fetchArticles({ type: 'tag' })" v-if="type === 'tag'">
        <span class="nav-link" :class="{ active: type === 'tag' }">{{ type }}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { useArticlesStore } from '@/stores/articles'
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    ...mapActions(useArticlesStore, ['fetchArticles'])
  },
  computed: {
    ...mapState(useArticlesStore, ['type'])
  }
})
</script>
<style lang=""></style>
