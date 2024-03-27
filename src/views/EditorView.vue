<template>
  <main>
    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <ul class="error-messages">
              <li>That title is required</li>
            </ul>

            <form>
              <fieldset>
                <fieldset class="form-group">
                  <VueInput type="text" placeholder="Article Title" />
                </fieldset>
                <fieldset class="form-group">
                  <!-- class form-control로 변경 (작은 사이즈)-->
                  <VueInput type="text" placeholder="What's this article about?" />
                </fieldset>
                <fieldset class="form-group">
                  <VueTextarea
                    class="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                  ></VueTextarea>
                </fieldset>
                <fieldset class="form-group">
                  <!-- class form-control로 변경 (작은 사이즈)-->
                  <VueInput type="text" placeholder="Enter tags" />
                  <div class="tag-list">
                    <span class="tag-default tag-pill"> <i class="ion-close-round"></i> tag </span>
                  </div>
                </fieldset>
                <button class="btn btn-lg pull-xs-right btn-primary" type="button">
                  Publish Article
                </button>
              </fieldset>
            </form>
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
  components: { VueInput, VueTextarea }
})
</script>
<style scoped></style>
