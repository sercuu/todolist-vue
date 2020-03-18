import Vue from 'vue';
import Vuex from 'vuex';
import todolist from './user';
import user from './user'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    todolist,
    user
  }
});