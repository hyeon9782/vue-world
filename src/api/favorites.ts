import { instance } from './common/instance'

const favorite = (slug: string) => {
  return instance.post(`/articles/${slug}/favorite`)
}

const unFavorite = (slug: string) => {
  return instance.delete(`/articles/${slug}/favorite`)
}

export { favorite, unFavorite }
