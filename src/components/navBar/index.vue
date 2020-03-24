<template>
  <nav class="nav">
    <router-link v-for="route in router" :to="route.path" :key="route.name">{{
      route.name
    }}</router-link>
    <!-- <router-view /> -->
    <button @click="logout" type="button">logout</button>
  </nav>
</template>

<script>
import { mapActions } from 'vuex';
import routerModel from '../../routerModel';

export default {
  name: 'navbar',
  methods: {
    ...mapActions(['logOut']),
    logout() {
      this.logOut();
      this.$router.push('/login');
    }
  },
  data: function() {
    return {
      router: routerModel.routes
    };
  },
  mounted() {
    const newNavBar = routerModel.routes.filter(item => item.isShow === true);
    this.router = newNavBar;
  }
};
</script>
