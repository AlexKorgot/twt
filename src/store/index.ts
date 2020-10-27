import Vue from 'vue';
import Vuex from 'vuex';
import {CommentModule} from './modules/comments';
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})
export default new Vuex.Store({
  state: {
  },
  mutations: {
    REPLACE(payload){
      this.replaceState(payload)
    }
  },
  actions: {
  },
  modules: {
    comments: new CommentModule(),
  },
  plugins: [vuexLocal.plugin]
});
