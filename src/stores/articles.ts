import {
  getArticles,
  getArticlesWithAuthor,
  getArticlesWithFavorited,
  getArticlesWithTag,
  getFollowArticles
} from '@/api/articles'
import { defineStore } from 'pinia'
import type { Article } from 'types/article'

type Payload = {
  tag: string
  favorited: string
  author: string
  type: Type
}

type Type = 'basic' | 'feed' | 'tag' | 'author' | 'favorited'

export const useArticlesStore = defineStore('articles', {
  state: () => {
    return { articles: [] as Article[], type: 'basic' as Type }
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
        case 'feed':
          response = await getFollowArticles()
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
      this.type = type
      this.articles = articles
    }
  }
})
