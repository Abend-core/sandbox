<template>
  <div>
    <p v-if="login">Bonjour {{ login }}</p>
    <p v-else>Bonjour</p>
  </div>
</template>

<script>
import { ref } from "vue";
const login = ref(sessionStorage.getItem("login"));
</script>

<style></style>
