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
                  <VueInput type="text" placeholder="URL of profile picture" />
                </fieldset>
                <fieldset class="form-group">
                  <VueInput type="text" placeholder="Your Name" />
                </fieldset>
                <fieldset class="form-group">
                  <VueTextarea
                    class="form-control form-control-lg"
                    rows="8"
                    placeholder="Short bio about you"
                  ></VueTextarea>
                </fieldset>
                <fieldset class="form-group">
                  <VueInput type="text" placeholder="Email" />
                </fieldset>
                <fieldset class="form-group">
                  <VueInput type="password" placeholder="New Password" />
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
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
export default defineComponent({
  components: {
    VueInput,
    VueTextarea
  }
})
</script>
<style scoped></style>
