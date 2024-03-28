import type { LoginUser, NewUser, UpdateUser } from 'types/user'
import { instance } from './common/instance'

const signUp = (user: NewUser) => {
  return instance.post('/users', { user })
}

const signIn = (user: LoginUser) => {
  return instance.post('/users/login', { user })
}

const getUser = () => {
  return instance.get('/user')
}

const updateUser = (user: UpdateUser) => {
  return instance.put('/user', { user })
}

export { signUp, signIn, getUser, updateUser }
