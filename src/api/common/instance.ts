import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://api.realworld.io/api'
})

instance.interceptors.request.use()

instance.interceptors.response.use()
