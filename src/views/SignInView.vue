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

            <form>
              <fieldset class="form-group">
                <VueInput type="text" placeholder="Email" />
              </fieldset>
              <fieldset class="form-group">
                <VueInput type="password" placeholder="Password" />
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
export default defineComponent({
  components: {
    RouterLink,
    VueInput
  }
})
</script>
<style scoped></style>
