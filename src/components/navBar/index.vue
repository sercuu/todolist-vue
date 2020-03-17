<template>
  <nav class="nav">
    <router-link v-for="route in router" :to="route.path" :key="route.name">{{route.name}}</router-link>
    <!-- <router-view /> -->
  </nav>
</template>

<script>
import routerModel from "../../routerModel";

export default {
  name: "navbar",
  data: function() {
    return {
      router: routerModel
    };
  }
};
</script>
