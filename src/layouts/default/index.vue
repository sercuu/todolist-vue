<template>
  <div class="main">
    <Navbar />

    <slot />

    <Footer />
  </div>
</template>

<script>
import Navbar from '../../components/navBar';
import Footer from '../../components/footer';

export default {
  name: 'defaultLayout',
  components: {
    Navbar,
    Footer
  }
};
</script>

<style></style>
