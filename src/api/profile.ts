import { instance } from './common/instance'

const getProfile = (username: string) => {
  return instance.get(`/profiles/${username}`)
}

const followUser = (username: string) => {
  return instance.post(`/profiles/${username}`)
}

const unFollowUser = (username: string) => {
  return instance.delete(`/profiles/${username}`)
}

export { getProfile, followUser, unFollowUser }
