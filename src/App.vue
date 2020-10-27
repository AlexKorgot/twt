<template>
  <div id="app">
    <base-layout/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import BaseLayout from '@/components/base-layout.vue';

@Component({
  components: {
    BaseLayout,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<style src="@/assets/css/bootstrap-grid.min.css"></style>
<style lang="sass" src="@/assets/sass/main.sass"></style>
