<template>
  <div>
    <p>Bonjour {{ login }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: localStorage.getItem("login"),
    };
  },
};
</script>

<style></style>
