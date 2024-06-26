import type { Profile } from './profile'

export type Comment = {
  id: number
  createdAt: string
  updatedAt: string
  body: string
  author: Profile
}

export type NewComment = Pick<Comment, 'body'>

export type CommentResponse = {
  message: string
  success: boolean
  data: {
    comments: Comment[]
  }
}
