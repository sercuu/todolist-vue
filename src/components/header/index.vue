<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <img src="../../assets/logo.png" alt="logo" />
        </div>
        <div class="col-9">
          <Navbar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../navBar";
export default {
  nama: "header",
  components: {
    Navbar
  }
};
</script>

<style></style>
