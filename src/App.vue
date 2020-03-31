<template>
  <div id="app">
    <loader v-if="busy != 0" />
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import DefaultLayout from "./layouts/default";
import AuthLayout from "./layouts/auth";
import Loader from "./components/loader";
export default {
  name: "app",
  computed: {
    ...mapGetters(["layout", "busy"])
  },
  components: {
    Loader,
    "auth-layout": AuthLayout,
    "default-layout": DefaultLayout
  },
  methods: {
    ...mapActions(["checkLayout"])
  },
  mounted() {
    this.checkLayout();
  }
};
</script>

<style land="sass" scoped>
@import "./assets/style/app.scss";
</style>
 