<template>
  <header class="flex items-center p-[20px]">
    <div class="left-content flex items-center gap-[10px]">
      <RouterLink to="/">
        <img
          class="w-[50px] h-[50px]"
          src="../assets/images/abend-core-logo.png"
          alt="Main Icon"
        />
      </RouterLink>
      <RouterLink to="/">Abend-core</RouterLink>
    </div>
    <div class="right-content flex items-center flex-1 justify-end gap-[20px]">
      <img
        class="w-[20px] h-[20px]"
        src="../assets/images/à-modifier-soleil.png"
        alt="Mode Clair"
      />
      <img
        class="w-[20px] h-[20px]"
        src="../assets/images/à-modifier-lune.png"
        alt="Mode Sombre"
      />
      <RouterLink to="/connexion">Login</RouterLink>
      <RouterLink to="/inscription">Inscription</RouterLink>
      <button @click="logOut">Déconnexion</button>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    logOut() {
      sessionStorage.clear();
      this.$router.push("/");
      location.reload();
    },
  },
};
</script>

<style></style>
