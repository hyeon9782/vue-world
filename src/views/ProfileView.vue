<template>
  <main>
    <div class="profile-page">
      <div class="user-info">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              <img :src="profile.image" class="user-img" />
              <h4>{{ profile.username }}</h4>
              <p>
                {{ profile.bio }}
              </p>
              <button
                class="btn btn-sm btn-outline-secondary action-btn"
                v-if="user.username !== profile.username"
              >
                <i class="ion-plus-round"></i>
                &nbsp; Follow {{ profile.username }}
              </button>
              <RouterLink to="/settings" class="btn btn-sm btn-outline-secondary action-btn" v-else>
                <i class="ion-gear-a"></i>
                &nbsp; Edit Profile Settings
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ArticleToggle />
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
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import ArticlePreview from '@/components/articles/ArticlePreview.vue'
import ArticleToggle from '@/components/articles/ArticleToggle.vue'
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '@/stores/user'
import { defineComponent } from 'vue'
import { useArticlesStore } from '@/stores/articles'
import { RouterLink } from 'vue-router'
import { getProfile } from '@/api/profile'
export default defineComponent({
  data() {
    return {
      profile: {}
    }
  },
  components: { ArticlePreview, ArticleToggle, RouterLink },
  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(useArticlesStore, ['articles'])
  },
  methods: {
    ...mapActions(useArticlesStore, ['fetchArticles']),
    async fetchProfile() {
      const response = await getProfile(this.$route.params.username)
      const profile = response.data.profile
      this.profile = profile
      console.log(this.profile)
    }
  },
  created() {
    this.fetchProfile()
    this.fetchArticles({ type: 'author', author: this.$route.params.username })
  }
})
</script>
<style scoped></style>
