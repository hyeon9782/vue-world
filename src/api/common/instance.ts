import axios from 'axios'

const user = localStorage.getItem('user') || ''
const token = JSON.parse(user).token

export const instance = axios.create({
  baseURL: 'https://api.realworld.io/api',
  headers: {
    Authorization: `Token ${token}`
  }
})

instance.interceptors.request.use()

instance.interceptors.response.use()
