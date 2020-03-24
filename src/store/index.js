import Vue from 'vue';
import Vuex from 'vuex';
import todo from './modules/todo';
import users from './modules/users'
import login from './modules/login'

// Load vuec
Vue.use(Vuex);

//Create Store 
export default new Vuex.Store({
  modules: {
    todo,
    users,
    login
  }
});