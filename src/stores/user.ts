import { defineStore } from 'pinia'

type Payload = {
  email: string
  token: string
  username: string
  bio: string
  image: string
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {
        email: '',
        token: '',
        username: '',
        bio: '',
        image: ''
      }
    }
  },
  getters: {
    loggedIn: (state) => state.user.token !== ''
  },
  actions: {
    updateUser(payload: Payload) {
      this.user = { ...payload }

      localStorage.setItem('user', JSON.stringify(this.user))
    },
    clearUser() {
      this.$reset()
      localStorage.removeItem('user')
    }
  }
})
