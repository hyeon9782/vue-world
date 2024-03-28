import { instance } from './common/instance'
import type { NewArticle, UpdateArticle } from 'types/article'

const getArticles = (offset = 0, limit = 10) => {
  return instance.get(`/articles?limit=${limit}&offset=${offset ? offset * limit : 0}`)
}

const getArticlesWithTag = (tag: string, offset = 0, limit = 10) => {
  return instance.get(`/articles?tag=${tag}&limit=${limit}&offset=${offset ? offset * limit : 0}`)
}

const getArticlesWithAuthor = (username: string, offset = 0, limit = 10) => {
  return instance.get(
    `/articles?author=${username}&limit=${limit}&offset=${offset ? offset * limit : 0}`
  )
}

const getArticlesWithFavorited = (username: string, offset = 0, limit = 10) => {
  return instance.get(
    `/articles?favorited=${username}&limit=${limit}&offset=${offset ? offset * limit : 0}`
  )
}

const getFollowArticles = (offset = 0, limit = 10) => {
  return instance.get(`/articles/feed?limit=${limit}&offset=${offset ? offset * limit : 0}`)
}

const getArticle = (slug: string) => {
  return instance.get(`/articles/${slug}`)
}

const createArticle = (article: NewArticle) => {
  return instance.post('/articles', article)
}

const updateArticle = (slug: string, article: UpdateArticle) => {
  return instance.put(`/articles/${slug}`, article)
}

const deleteArticle = (slug: string) => {
  return instance.delete(`/articles/${slug}`)
}

export {
  getArticles,
  getArticlesWithTag,
  getArticlesWithAuthor,
  getArticlesWithFavorited,
  getFollowArticles,
  getArticle,
  createArticle,
  updateArticle,
  deleteArticle
}
