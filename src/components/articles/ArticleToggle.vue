<template lang="">
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <template v-if="path === 'home'">
        <li class="nav-item" @click="fetchArticles({ type: 'feed' })">
          <span class="nav-link" :class="{ active: type === 'feed' }">Your Feed</span>
        </li>
        <li class="nav-item" @click="fetchArticles({ type: 'basic' })">
          <span class="nav-link" :class="{ active: type === 'basic' }">Global Feed</span>
        </li>
        <li class="nav-item" @click="fetchArticles({ type: 'tag' })" v-if="type === 'tag'">
          <span class="nav-link" :class="{ active: type === 'tag' }">{{ type }}</span>
        </li>
      </template>
      <template v-else>
        <li class="nav-item" @click="fetchArticles({ type: 'author', author: user.username })">
          <span class="nav-link" :class="{ active: type === 'author' }">My Articles</span>
        </li>
        <li
          class="nav-item"
          @click="fetchArticles({ type: 'favorited', favorited: user.username })"
        >
          <span class="nav-link" :class="{ active: type === 'favorited' }">Favorited Articles</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script lang="ts">
import { mapActions, mapState } from 'pinia'
import { useArticlesStore } from '@/stores/articles'
import { defineComponent } from 'vue'
import { useUserStore } from '@/stores/user'
export default defineComponent({
  data() {
    return {
      path: ''
    }
  },
  methods: {
    ...mapActions(useArticlesStore, ['fetchArticles']),
    parseRoute() {
      const path = this.$route.path
      if (path === '/') {
        this.path = 'home'
      } else if (path.startsWith('/profile')) {
        this.path = 'profile'
      }
    }
  },
  computed: {
    ...mapState(useArticlesStore, ['type']),
    ...mapState(useUserStore, ['user'])
  }
})
</script>
<style lang=""></style>
