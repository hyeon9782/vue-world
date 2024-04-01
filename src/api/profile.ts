import { instance } from './common/instance'

const getProfile = (username: string) => {
  return instance.get(`/profiles/${username}`)
}

const followUser = (username: string) => {
  return instance.post(`/profiles/${username}/follow`)
}

const unFollowUser = (username: string) => {
  return instance.delete(`/profiles/${username}/follow`)
}

export { getProfile, followUser, unFollowUser }
