<template>
  <form class="card comment-form">
    <div class="card-block">
      <textarea
        class="form-control"
        placeholder="Write a comment..."
        rows="3"
        v-model="body"
      ></textarea>
    </div>
    <div class="card-footer">
      <img :src="user.image" class="comment-author-img" />
      <button class="btn btn-sm btn-primary" @click.prevent="createComment">Post Comment</button>
    </div>
  </form>
</template>
<script lang="ts">
import { createComment } from '@/api/comment'
import type { User } from '@/types/user'
import { defineComponent, type PropType } from 'vue'
export default defineComponent({
  props: {
    user: {
      type: Object as PropType<User>,
      require: true
    }
  },
  data() {
    return {
      body: ''
    }
  },
  methods: {
    async createComment() {
      try {
        const slug = this.$route.params.slug
        console.log(slug)

        const response = await createComment(slug, { body: this.body })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>
<style lang=""></style>
