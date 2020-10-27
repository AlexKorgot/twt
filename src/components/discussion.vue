<template>
  <div class="discussion-box">
    <div class="discussion-box__title">Самые часто обсуждаемые вопросы</div>
     <div class="discussion-box__list" v-for="(item, i) in list" :key="i">
       <div class="discussion-box__item d-flex align-items-center">
         <div class="discussion-box__item__sum">{{item.commentsNum}}</div>
         <div class="discussion-box__item__message">{{item.message}}</div>
       </div>
     </div>
  </div>

</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { IDiscussion } from '@/data/common';
@Component
export default class DiscussionList extends Vue {
@Prop() public list!: IDiscussion[];
}
</script>

<style scoped>

</style>
