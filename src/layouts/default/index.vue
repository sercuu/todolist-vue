<template>
  <div class="main">
    <Header />
    <!-- Children component -->
    <slot />
    <!-- Children component -->

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
