<template>
  <nav class="nav">
    <div>
      <router-link v-for="route in router" :to="route.path" :key="route.name">
        {{
        route.name
        }}
      </router-link>
      <!-- <router-view /> -->
    </div>
    <div class="logout">
      <button @click="logout" type="button">Logout</button>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
import routerModel from "../../routerModel";

export default {
  name: "navbar",
  methods: {
    ...mapActions(["logOut"]),
    logout() {
      this.logOut();
      this.$router.push("/login");
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
