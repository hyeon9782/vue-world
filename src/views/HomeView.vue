<template>
  <main>
    <div class="home-page">
      <div class="banner">
        <div class="container">
          <h1 class="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <div class="feed-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class="nav-link" href="">Your Feed</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="">Global Feed</a>
                </li>
              </ul>
            </div>

            <ArticlePreview v-for="article in articles" :key="article.slug" :article="article" />

            <ul class="pagination">
              <li class="page-item active">
                <a class="page-link" href="">1</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="">2</a>
              </li>
            </ul>
          </div>

          <div class="col-md-3">
            <SideBarVue />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticlePreview from '@/components/articles/ArticlePreview.vue'
import { getArticles } from '@/api/articles'
import SideBarVue from '@/components/layout/SideBar.vue'

export default defineComponent({
  components: { ArticlePreview, SideBarVue },
  data() {
    return {
      articles: []
    }
  },
  methods: {
    async fetchArticles() {
      const response = await getArticles()
      const articles = response.data.articles
      this.articles = articles
    }
  },
  mounted() {
    this.fetchArticles()
  }
})
</script>

<style scoped></style>
