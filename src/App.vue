<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import DefaultLayout from "./layouts/default";

export default {
  name: "app",

  data() {
    return {
      layout: DefaultLayout
    };
  }
};
</script>

<style land="sass" scoped>
@import "./assets/style/app.scss";
</style>
