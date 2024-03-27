<template>
  <div class="sidebar">
    <p>Popular Tags</p>
    <div class="tag-list">
      <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Tag from '@/components/tags/Tag.vue'
import { getTags } from '@/api/tag'
export default defineComponent({
  components: {
    Tag
  },
  data() {
    return {
      tags: []
    }
  },
  methods: {
    async fetchTags() {
      const response = await getTags()
      const tags = response.data.tags
      this.tags = tags
    }
  },
  mounted() {
    this.fetchTags()
  }
})
</script>
<style lang=""></style>
