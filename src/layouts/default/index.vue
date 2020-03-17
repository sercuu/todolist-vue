<template>
  <div class="main">
    <Header />

    <slot />

    <Footer />
  </div>
</template>

<script>
import Header from "../../components/header";
import Footer from "../../components/footer";

export default {
  name: "defaultLayout",
  components: {
    Header,
    Footer
  }
};
</script>
