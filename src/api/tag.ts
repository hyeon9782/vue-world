import { instance } from './common/instance'

export const getTags = () => {
  return instance.get('/tags')
}
