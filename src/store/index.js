import Vue from 'vue';
import Vuex from 'vuex';
import createApiService from '../middleware/apiService'
import createBusyService from '../middleware/busyService'
import busy from './modules/busy'
import todo from './modules/todo';
import users from './modules/users';
import login from './modules/login';

// Load vuec
Vue.use(Vuex);
const apiService = createApiService();
const busyService = createBusyService();
//Create Store 
export default new Vuex.Store({
  modules: {
    busy,
    todo,
    users,
    login
  },
  plugins:[apiService,busyService]
});