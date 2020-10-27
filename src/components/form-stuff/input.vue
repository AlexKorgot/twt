<template>
  <div class="input__box" ref="box" :class="className">
    <textarea ref="textarea" role="textbox" contenteditable class="input__box__input" @input="onInput($event)" v-model="field.value" :placeholder="field.label"></textarea></div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
import {IField} from '@/data/common';

@Component
export default class BaseInput extends Vue {

  @Prop() field!: IField;
  @Prop() className!: string
  @Watch("field.value")
  heightWatcher(val: string) {
    if(!val){
      const box: any = this.$refs.box
      const area: any = this.$refs.textarea
      box.style.height = ""
      area.style.height = ''
    }
  }
  resize(): void {
    const box: any = this.$refs.box
    const area: any = this.$refs.textarea
    box.style.height = "auto"
    box.style.height = area.scrollHeight + 'px'
  }
  mounted() {
    this.resize()
  }
  onInput(): void {
    this.resize();
  }
}
</script>

<style scoped>

</style>
