<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8 col-lg-8">
        <my-form-group :fields="form.fields"></my-form-group>
        <template v-if="comments.length">
          <comment-list :commentList="comments"></comment-list>
        </template>
      </div>
      <div v-if="discussionSortable.length > 0" class="col-12 col-md-4 col-lg-4">
        <discussion-list :list="discussionSortable"></discussion-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import MyFormGroup from '@/components/my-form.vue';
import {MyForm} from '@/data/my-form';
import CommentList from '@/components/comment-list.vue';
import DiscussionList from '@/components/discussion.vue';
import { IDiscussion, IComment } from "@/data/common"

@Component({
  components: {
    MyFormGroup,
    CommentList,
    DiscussionList
  },
})
export default class BaseLayout extends Vue {
  form = new MyForm();

  get discussion() {
    return this.comments.map((el:any) => {
      return {
        message: el.message,
        commentsNum: el.userComments.length
      };
    });
  }

  get discussionSortable(): IDiscussion[] | [] {
    if(!!this.discussion.length){
      let array:IDiscussion[] | [] = [];
      //@ts-ignore
      this.discussion.forEach((el) => {
        if(el && el.commentsNum > 10){
          //@ts-ignore
            array.push(el)
        }
      })
      //@ts-ignore
      return array.sort((a:any, b:any) => {
        if (a.commentsNum < b.commentsNum) { return 1; }
        if (a.commentsNum === b.commentsNum) { return 0; }
        if (a.commentsNum > b.commentsNum) { return -1; }
      });
    } else {
      return []
    }
  }

  get comments() {
    let storage: any = window.sessionStorage.getItem('vuex');
    if(storage){
      storage = JSON.parse(storage)
      console.log(storage.comments.comments)
    }
    return  this.$store.getters.getComments // storage? storage.comments.comments :
  }
}
</script>

<style scoped>

</style>
