<template>
  <p>Login</p>
  <form action="" class="flex flex-col" @submit.prevent="login">
    <label for="login">
      Identifiant
      <input
        type="text"
        id="login"
        v-model="idLogin"
        placeholder="Identifiant"
      />
    </label>
    <label for="password">
      Mot de passe
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Mot de passe"
      />
    </label>
    <button @click="registration" class="w-fit" type="submit">
      Se connecter !
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      idLogin: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log(this.idLogin, this.password);
    },
  },
};
</script>

<style></style>
