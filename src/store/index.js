import Vue from 'vue';
import Vuex from 'vuex';
import todolist from './modules/todolist';
import users from './modules/user'

// Load vuec
Vue.use(Vuex);

//Create Store 
export default new Vuex.Store({
  modules: {
    todolist,
    users
  }
});