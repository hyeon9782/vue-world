<template>
  <main>
    <div class="settings-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Your Settings</h1>

            <ul class="error-messages">
              <li>That name is required</li>
            </ul>

            <form>
              <fieldset>
                <fieldset class="form-group">
                  <VueInput type="text" placeholder="URL of profile picture" v-model="user.image" />
                </fieldset>
                <fieldset class="form-group">
                  <VueInput type="text" placeholder="Your Name" v-model="user.username" />
                </fieldset>
                <fieldset class="form-group">
                  <VueTextarea
                    class="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                    v-model="user.bio"
                  ></VueTextarea>
                </fieldset>
                <fieldset class="form-group">
                  <VueInput type="text" placeholder="Email" v-model="user.email" />
                </fieldset>
                <fieldset class="form-group">
                  <VueInput type="password" placeholder="New Password" v-model="user.password" />
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right" @click.prevent="changeUser">
                  Update Settings
                </button>
              </fieldset>
            </form>
            <hr />
            <button class="btn btn-outline-danger">Or click here to logout.</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import VueInput from '@/components/common/VueInput.vue'
import VueTextarea from '@/components/common/VueTextarea.vue'
import { getUser, updateUser } from '@/api/user'
import type { User } from 'types/user'
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'
export default defineComponent({
  components: {
    VueInput,
    VueTextarea
  },
  data() {
    return {
      user: {} as User
    }
  },
  methods: {
    ...mapActions(useUserStore, ['updateUser']),

    async fetchUserData() {
      try {
        const response = await getUser()
        const user = response.data.user
        this.user = user
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    },
    async changeUser() {
      try {
        const response = await updateUser({
          email: this.user.email,
          username: this.user.username,
          image: this.user.image,
          bio: this.user.bio,
          password: this.user.password
        })
        const user = response.data.user
        console.log(user)
        this.updateUser(user)
        this.user = user
        alert('변경 성공!')
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {
    this.fetchUserData()
  }
})
</script>
<style scoped></style>
