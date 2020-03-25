<template>
  <div class="login">
    <form @submit="handleSubmit">
      <input type="text" name="mail" v-model="mail" autocomplete="off" />
      <input type="password" name="password" v-model="pass" autocomplete="off" />
      <button type="submit">Giris</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data: () => {
    return {
      mail: "",
      pass: ""
    };
  },
  computed: {
    ...mapGetters(["isAuth"])
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit(e) {
      e.preventDefault();
      const userInfo = {
        mail: this.mail,
        pass: this.pass
      };
      this.login(userInfo);
      this.$router.push("/");
    }
  }
};
</script>
