<template>
  <main>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign in</h1>
            <p class="text-xs-center">
              <RouterLink to="/register">Need an account?</RouterLink>
            </p>

            <ul class="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form @submit="signInUser">
              <fieldset class="form-group">
                <VueInput type="text" placeholder="Email" v-model="email" />
              </fieldset>
              <fieldset class="form-group">
                <VueInput type="password" placeholder="Password" v-model="password" />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import VueInput from '@/components/common/VueInput.vue'
import { signIn } from '@/api/user'
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'
export default defineComponent({
  components: {
    RouterLink,
    VueInput
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(useUserStore, ['updateUser']),
    async signInUser(e: Event) {
      e.preventDefault()
      try {
        const response = await signIn({
          email: this.email,
          password: this.password
        })
        console.log(response)
        this.updateUser(response.data.user)
        this.$router.push('/')
      } catch (error) {
        // 에러 핸들링 부분 추가
        console.log(error)
      }
    }
  }
})
</script>
<style scoped></style>

<!-- 

1. API 에러처리
2. Form 유효성 검증

-->
