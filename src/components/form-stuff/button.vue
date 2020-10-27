<template>
<div class="btn__box">
  <div @click="$emit('click')" class="btn" :class="className">{{label}}</div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IButton} from '@/data/common';

@Component
export default class BaseButton extends Vue {
  @Prop() label!: IButton;
  @Prop() className!: string;
}
</script>

<style scoped>

</style>
