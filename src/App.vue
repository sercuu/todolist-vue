<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import DefaultLayout from './layouts/default';
import AuthLayout from './layouts/auth';
export default {
  name: 'app',
  computed: {
    ...mapGetters(['layout'])
  },
  components: {
    'auth-layout': AuthLayout,
    'default-layout': DefaultLayout
  },
  methods: {
    ...mapActions(['checkLayout'])
  },
  mounted() {
    this.checkLayout();
  }
};
</script>

<style land="sass" scoped>
@import './assets/style/app.scss';
</style>
