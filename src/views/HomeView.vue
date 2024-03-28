<template>
  <main>
    <div class="home-page">
      <Banner />
      <div class="container page">
        <div class="row">
          <div class="col-md-9">
            <ArticleToggle />
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
import ArticleToggle from '@/components/articles/ArticleToggle.vue'
import Banner from '@/components/home/Banner.vue'
import SideBarVue from '@/components/layout/SideBar.vue'
import { useArticlesStore } from '@/stores/articles'
import { mapActions, mapState } from 'pinia'

export default defineComponent({
  components: { ArticlePreview, SideBarVue, Banner, ArticleToggle },
  methods: {
    ...mapActions(useArticlesStore, ['fetchArticles'])
  },
  computed: {
    ...mapState(useArticlesStore, ['articles'])
  },
  created() {
    this.fetchArticles()
  }
})
</script>

<style scoped></style>
