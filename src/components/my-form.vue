<template>
<div class="form-box flex-wrap d-flex mb-3">
    <base-input
      :field="fields.think"
    ></base-input>
    <base-button
      :label="'Поделиться'"
      className="btn__fluid"
      @click="setComment()"
    ></base-button>
</div>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseInput from '@/components/form-stuff/input.vue';
import BaseButton from '@/components/form-stuff/button.vue';
import {IField, IComment} from '@/data/common';
import {Comment} from '@/data/comment';
import moment from 'moment';

@Component({
  components: {
    BaseInput,
    BaseButton,
  },
})
export default class MyFormGroup extends Vue {
  @Prop() public fields!: IField;


  public setComment(): void {
    // @ts-ignore
    if(this.fields.think.value){
      const comment = {
        name: 'Mr.Cat',
        // @ts-ignore
        message: this.fields.think.value,
        image: 'https://avatars.mds.yandex.net/get-zen_doc/901899/pub_5bf9465883ae4500aa3daf38_5bf94c729d365500aa5f5f06/scale_1200',
        date: moment().format('DD-MM-YYYY HH:mm:ss'),
      } as IComment;
      this.$store.dispatch('setComment', new Comment(comment, true));
      // @ts-ignore
      this.fields.think.value = '';
    }
  }
}
</script>

<style scoped>

</style>
