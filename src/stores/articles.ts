import {
  getArticles,
  getArticlesWithAuthor,
  getArticlesWithFavorited,
  getArticlesWithTag
} from '@/api/articles'
import { defineStore } from 'pinia'
import type { Article } from 'types/article'

type Payload = {
  tag: string
  favorited: string
  author: string
  type: string
}

export const useArticlesStore = defineStore('articles', {
  state: () => {
    return { articles: [] as Article[] }
  },
  getters: {},
  actions: {
    async fetchArticles(payload: Payload) {
      console.log(payload)
      const { tag, favorited, author, type } = payload

      let response

      switch (type) {
        case 'basic':
          response = await getArticles()
          break
        case 'tag':
          response = await getArticlesWithTag(tag)
          break
        case 'author':
          response = await getArticlesWithAuthor(author)
          break
        case 'favorited':
          response = await getArticlesWithFavorited(favorited)
          break
      }

      const articles = response.data.articles
      this.articles = articles
    }
  }
})
