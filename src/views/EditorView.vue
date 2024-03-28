<template>
  <main>
    <div class="editor-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-10 offset-md-1 col-xs-12">
            <ul class="error-messages">
              <li>That title is required</li>
            </ul>

            <form @submit.prevent="createArticle">
              <fieldset>
                <fieldset class="form-group">
                  <VueInput type="text" placeholder="Article Title" v-model="title" />
                </fieldset>
                <fieldset class="form-group">
                  <!-- class form-control로 변경 (작은 사이즈)-->
                  <VueInput
                    type="text"
                    placeholder="What's this article about?"
                    v-model="description"
                  />
                </fieldset>
                <fieldset class="form-group">
                  <VueTextarea
                    class="form-control"
                    rows="8"
                    placeholder="Write your article (in markdown)"
                    v-model="body"
                  ></VueTextarea>
                </fieldset>
                <fieldset class="form-group">
                  <!-- class form-control로 변경 (작은 사이즈)-->
                  <input
                    type="text"
                    placeholder="Enter tags"
                    class="form-control form-control-lg"
                    v-model="tag"
                    @keydown.prevent.enter="(e) => appendTag(e)"
                  />
                  <div class="tag-list">
                    <span
                      v-for="tag in tagList"
                      :key="tag"
                      class="tag-default tag-pill"
                      @click="removeTag(tag)"
                    >
                      <i class="ion-close-round"></i> {{ tag }}
                    </span>
                  </div>
                </fieldset>
                <button class="btn btn-lg pull-xs-right btn-primary" type="submit">
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
import { createArticle } from '@/api/articles'
export default defineComponent({
  components: { VueInput, VueTextarea },
  data() {
    return {
      title: '',
      description: '',
      body: '',
      tag: '',
      tagList: [] as string[]
    }
  },
  methods: {
    async createArticle(e: Event) {
      try {
        const response = await createArticle({
          title: this.title,
          description: this.description,
          body: this.body,
          tagList: this.tagList
        })

        console.log(response)
      } catch (error) {
        // 에러 처리 추가
        console.log(error)
      }
    },
    appendTag(e: KeyboardEvent) {
      const taget = e.target as HTMLInputElement
      const tag = taget.value
      console.log(tag)
      this.tag = ''
      this.tagList = [...this.tagList, tag]
    },
    removeTag(tag: string) {
      this.tagList = this.tagList.filter((vtag) => vtag !== tag)
    }
  }
})
</script>
<style scoped></style>

<!-- 

1. VInput 컴포넌트 엔터치면 submit 이벤트 발동되는 거 막기
2. 유효성 체크 기능 추가

 -->
