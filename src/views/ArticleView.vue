<template>
  <main>
    <div class="article-page">
      <div class="banner">
        <div class="container">
          <h1>{{ article.title }}</h1>

          <div class="article-meta">
            <!-- <UserBox :profile="article.author" /> -->
            <a href="/profile/eric-simons"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div class="info">
              <a href="/profile/eric-simons" class="author">Eric Simons</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons <span class="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp; Favorite Post <span class="counter">(29)</span>
            </button>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-edit"></i> Edit Article
            </button>
            <button class="btn btn-sm btn-outline-danger">
              <i class="ion-trash-a"></i> Delete Article
            </button>
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
            <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div class="info">
              <a href="" class="author">Eric Simons</a>
              <span class="date">January 20th</span>
            </div>

            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-plus-round"></i>
              &nbsp; Follow Eric Simons
            </button>
            &nbsp;
            <button class="btn btn-sm btn-outline-primary">
              <i class="ion-heart"></i>
              &nbsp; Favorite Article <span class="counter">(29)</span>
            </button>
            <button class="btn btn-sm btn-outline-secondary">
              <i class="ion-edit"></i> Edit Article
            </button>
            <button class="btn btn-sm btn-outline-danger">
              <i class="ion-trash-a"></i> Delete Article
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-md-8 offset-md-2">
            <CommentForm />
            <CommentItem />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import CommentItem from '@/components/comments/CommentItem.vue'
import CommentForm from '@/components/comments/CommentForm.vue'
import UserBox from '@/components/user/UserBox.vue'
import { defineComponent } from 'vue'
import { getComments } from '@/api/comment'
import { getArticle } from '@/api/articles'
export default defineComponent({
  components: { CommentItem, CommentForm, UserBox },
  data() {
    return {
      article: {},
      comments: []
    }
  },
  methods: {
    async fetchArticle() {
      const slug = this.$route.params.slug
      const response = await getArticle(slug)
      const article = response?.data?.article
      console.log(article)

      this.article = article
    },
    async fetchComments() {
      const slug = this.$route.params.slug
      const response = await getComments(slug)
      const comments = response.data.comments
      console.log(comments)
      this.comments = comments
    }
  },
  mounted() {
    this.fetchArticle()
    this.fetchComments()
  }
})
</script>
<style scoped></style>
