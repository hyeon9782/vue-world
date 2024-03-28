import { getArticles } from '@/api/articles'
import { defineStore } from 'pinia'
import type { Article } from 'types/article'

export const useArticlesStore = defineStore('articles', {
  state: () => {
    return { articles: [] as Article[] }
  },
  getters: {},
  actions: {
    async fetchArticles() {
      const response = await getArticles()
      const articles = response.data.articles
      this.articles = articles
    }
  }
})
