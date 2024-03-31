import type { NewComment } from 'types/comment'
import { instance } from './common/instance'

const getComments = (slug: string) => {
  return instance.get(`/articles/${slug}/comments`)
}

const createComment = (slug: string, comment: NewComment) => {
  return instance.post(`/articles/${slug}/comments`, { comment })
}

const deleteComment = (slug: string, id: string) => {
  return instance.delete(`/articles/${slug}/comments/${id}`)
}

export { getComments, createComment, deleteComment }
