import { instance } from './common/instance'
import type { NewArticle, UpdateArticle } from 'types/article'

const getArticles = () => {
  return instance.get('/articles')
}

const getFollowArticles = () => {
  return instance.get('/articles/feed')
}

const getArticle = (slug: string) => {
  console.log('api')

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

export { getArticles, getFollowArticles, getArticle, createArticle, updateArticle, deleteArticle }
