<template>
  <main>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign up</h1>
            <p class="text-xs-center">
              <RouterLink to="/login">Have an account?</RouterLink>
            </p>

            <ul class="error-messages">
              <li>That email is already taken</li>
            </ul>

            <form @submit="signUpUser">
              <fieldset class="form-group">
                <VueInput type="text" placeholder="Username" v-model="username" />
              </fieldset>
              <fieldset class="form-group">
                <VueInput type="text" placeholder="Email" v-model="email" />
              </fieldset>
              <fieldset class="form-group">
                <VueInput type="password" placeholder="Password" v-model="password" />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
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
import VueButton from '@/components/common/VueButton.vue'
import { signUp } from '@/api/user'
export default defineComponent({
  components: {
    RouterLink,
    VueInput,
    VueButton
  },
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signUpUser(e: Event) {
      e.preventDefault()

      try {
        const response = await signUp({
          username: this.username,
          email: this.email,
          password: this.password
        })
        console.log(response)
        this.$router.push('/login')
      } catch (error) {
        // 에러 메세지에 따라 에러 핸들링 추가
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
