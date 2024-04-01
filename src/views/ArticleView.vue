<template>
  <main>
    <div class="article-page">
      <div class="banner">
        <div class="container">
          <h1>{{ article.title }}</h1>

          <div class="article-meta">
            <UserBox :profile="article.author" :createdAt="article.createdAt" />
            <template v-if="article.author.username !== user.username">
              <FollowButton />
              &nbsp;&nbsp;
              <FavoriteButtonVue />
            </template>
            <template v-else>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="ion-edit"></i> Edit Article
              </button>
              <button class="btn btn-sm btn-outline-danger" @click="removeArticle">
                <i class="ion-trash-a"></i> Delete Article
              </button>
            </template>
          </div>
        </div>
      </div>

      <div class="container page">
        <div class="row article-content">
          <div class="col-md-12">
            <p>
              {{ article.body }}
            </p>
            <ul class="tag-list">
              <li
                class="tag-default tag-pill tag-outline"
                v-for="(tag, index) in article.tagList"
                :key="index"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="article-actions">
          <div class="article-meta">
            <UserBox :profile="article.author" :createdAt="article.createdAt" />

            <template v-if="article.author.username !== user.username">
              <template v-if="article.author.username">
                <FollowButton
                  :profile="article.author"
                  :username="article.author.username"
                  :following="article.author.following"
              /></template>

              &nbsp;&nbsp;
              <FavoriteButtonVue />
            </template>
            <template v-else>
              <button class="btn btn-sm btn-outline-secondary">
                <i class="ion-edit"></i> Edit Article
              </button>
              <button class="btn btn-sm btn-outline-danger">
                <i class="ion-trash-a"></i> Delete Article
              </button>
            </template>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-md-8 offset-md-2">
            <CommentForm :user="user" />

            <CommentItem
              v-for="comment in comments"
              :key="comment.id"
              :comment="comment"
              :user="user"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import CommentItem from '@/components/comments/CommentItem.vue'
import CommentForm from '@/components/comments/CommentForm.vue'
import FollowButton from '@/components/user/FollowButton.vue'
import UserBox from '@/components/user/UserBox.vue'
import { defineComponent } from 'vue'
import { getComments } from '@/api/comment'
import { getArticle } from '@/api/articles'
import FavoriteButtonVue from '@/components/user/FavoriteButton.vue'
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/user'
import { deleteArticle } from '@/api/articles'
import type { Article } from '@/types/article'
export default defineComponent({
  components: { CommentItem, CommentForm, UserBox, FollowButton, FavoriteButtonVue },
  data() {
    return {
      article: {} as Article,
      comments: []
    }
  },
  methods: {
    async fetchArticle() {
      try {
        const slug = this.$route.params.slug
        const response = await getArticle(slug)
        const article = response?.data?.article

        this.article = article
        console.log(article)
        console.log(article.author)
        console.log(article.author.username)
      } catch (error) {
        // Error 처리 추가
        console.log(error)
      }
    },
    async fetchComments() {
      try {
        const slug = this.$route.params.slug
        const response = await getComments(slug)
        const comments = response.data.comments

        this.comments = comments
      } catch (error) {
        // Error 처리 추가
        console.log(error)
      }
    },
    async removeArticle() {
      try {
        const slug = this.$route.params.slug
        const response = await deleteArticle(slug)
        console.log(response)
        this.$router.push('/')
      } catch (error) {
        // Error 처리 추가
        console.log(error)
      }
    }
  },
  computed: {
    ...mapState(useUserStore, ['user'])
  },
  created() {
    this.fetchArticle()
    this.fetchComments()
  }
})
</script>
<style scoped></style>
