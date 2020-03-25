<template>
  <div class="auth">
    <!-- <Login /> -->
    <slot />
    <div class="auth__gradient"></div>
  </div>
</template>

<script>
// import Login from "../../views/Login";

export default {
  name: "authLayout"
  //   components: { Login }
};
</script>
