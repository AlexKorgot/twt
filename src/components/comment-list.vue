<template>
  <div>
    <transition-group name="list-complete" tag="div">
      <div class="comment-wrapper" v-for="(item, i) in commentList"  :key="item.timestamp" :data-index="i">
        <div class="comment-box list-complete-item">
          <div class="d-flex mb-1">
            <div class="comment-box__avatar" :title="item.name" :style="{'backgroundImage': `${ 'url(' + item.image + ')'}`}">
            </div>
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center">
                <template v-if="isUrl(item.message)">
                  <div class="comment-box__preview-box"  v-for="(image, i) in getUrl(item.message)" :key="i">
                    <a :href="image" target="blank"><img :src="image" alt=""></a>
                  </div>
                </template>
              </div>
              <div class="comment-box__message">{{replacer(item.message)}}</div>
            </div>
          </div>
          <div class="comment-box__date">{{item.date}}</div>
        </div>
        <div v-if="!!item.userComments" class="users-comment__wrapper">
          <transition-group name="list-complete" tag="div">
            <div class="comment-box list-complete-item" v-for="(item, i) in transformer(item.userComments)" :key="i">
              <div class="d-flex mb-1">
                <div class="comment-box__avatar" :title="item.name" :style="{'backgroundImage': `${ 'url(' + item.image + ')'}`}">
                </div>
                <div class="d-flex flex-column">
                  <div class="d-flex align-items-center">
                    <template v-if="isUrl(item.message)">
                      <div class="comment-box__preview-box" v-for="(image, i) in getUrl(item.message)" :key="i">
                        <a :href="image" target="blank"><img :src="image" alt=""></a>
                      </div>
                    </template>
                  </div>
                  <div class="comment-box__message">{{replacer(item.message)}}</div>
                </div>
              </div>
              <div class="comment-box__date">{{item.date}}</div>
            </div>
          </transition-group>
        </div>
        <template v-if="item.userComments.length > 3">
          <base-button
            :label="getLabel"
            className="btn__fluid"
            @click="isShow = !isShow"
          ></base-button>
        </template>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { IComment } from '@/data/common';
import BaseButton from '@/components/form-stuff/button.vue';

@Component({
  components: {
    BaseButton,
  },
})
export default class CommentList extends Vue {
  @Prop() public commentList!: IComment[];
  isShow: boolean = false;
   transformer(array: any): IComment[] {
    if (!this.isShow) {
      return array.slice(0, 3);
    } else {
      return array.slice(0, array.length);
    }
  }
  get getLabel(): string {
     return this.isShow? 'Скрыть комментарии': 'Показать все комментарии'
  }
  isUrl(text: string): boolean {
   return !!text.match(/http[^ ]+/g);
  }
  getUrl(text: string): RegExpMatchArray  | null {
    return text.match(/http[^ ]+/g);
  }

   replacer(text: string): RegExpMatchArray  | null | string {
    if (!!text.match(/http[^ ]+/g)) {
      return text.replace(/http[^ ]+/g, '');
    }
    return text;
  }
}
</script>

<style scoped>
.list-complete-item {
  transition: all .1s;
  margin-right: 10px;
  opacity: 1;
}
@media screen and (max-width: 352px){
  .list-complete-item {
    margin-right: 0;
  }
}
.list-complete-enter, .list-complete-leave-to
  {
  opacity: 0;

}
.list-complete-leave-active {
  /*position: absolute;*/
}
</style>
