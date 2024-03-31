<template>
  <div class="card">
    <div class="card-block">
      <p class="card-text">
        {{ comment.body }}
      </p>
    </div>
    <div class="card-footer">
      <RouterLink :to="`/profile/${comment.author.username}`" class="comment-author">
        <img :src="comment.author.image" class="comment-author-img" />
      </RouterLink>
      &nbsp;
      <RouterLink :to="`/profile/${comment.author.username}`" class="comment-author">{{
        comment.author.username
      }}</RouterLink>
      <span class="date-posted">{{ comment.updatedAt }}</span>
      <span
        class="mod-options"
        v-if="user.username === comment.author.username"
        @click="deleteComment"
      >
        <i class="ion-trash-a"></i>
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import type { Comment } from '@/types/comment'
import type { User } from '@/types/user'
import { RouterLink } from 'vue-router'
import { defineComponent, type PropType } from 'vue'
import { deleteComment } from '@/api/comment'
export default defineComponent({
  components: {
    RouterLink
  },
  props: {
    comment: {
      type: Object as PropType<Comment>
    },
    user: {
      type: Object as PropType<User>
    }
  },
  methods: {
    async deleteComment() {
      try {
        const slug = this.$route.params.slug
        const response = await deleteComment(slug, this.comment.id)
        console.log(response)
        // 성공 로직 수정 댓글 데이터 리패칭
        alert('삭제 성공')
      } catch (error) {
        console.log(error)
      }
    }
  }
})
</script>
<style lang=""></style>
