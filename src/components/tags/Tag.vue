<template>
  <div class="tag-pill tag-default" @click="fetchArticles({ type: 'tag', tag })">{{ tag }}</div>
</template>
<script lang="ts">
import { mapActions } from 'pinia'
import { useArticlesStore } from '@/stores/articles'
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    tag: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions(useArticlesStore, ['fetchArticles'])
  }
})
</script>
<style lang=""></style>
