<template>
  <div class="flex flex-col h-screen bg-[#FDFDFD]">
    <Header />
    <div class="flex-1">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Home from "../views/Home.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Home,
  },
};
</script>

<style></style>
