<template>
  <p>Registration</p>
  <form action="" class="flex flex-col" @submit.prevent="registration">
    <label for="name">
      Nom
      <input type="text" id="name" v-model="name" placeholder="Nom" />
    </label>
    <label for="firstName">
      Prénom
      <input
        type="text"
        id="firstName"
        v-model="firstName"
        placeholder="Prénom"
      />
    </label>
    <label for="email">
      Email
      <input type="email" id="email" v-model="email" placeholder="Email" />
    </label>
    <label for="login">
      Identifiant
      <input
        type="text"
        id="login"
        v-model="loginRegister"
        placeholder="Identifiant"
      />
    </label>
    <label for="birth">
      Date de naissance
      <input
        type="date"
        id="birth"
        v-model="birth"
        placeholder="Date de naissance"
      />
    </label>
    <label for="password">
      Mot de passe
      <input
        type="password"
        id="password"
        v-model="password"
        placeholder="Mot de passe"
        minlength="8"
        required
      />
    </label>
    <button @click="registration" class="w-fit" type="submit">
      Rejoindre Abend-core !
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      firstName: "",
      email: "",
      loginRegister: "",
      birth: "",
      password: "",
    };
  },
  methods: {
    registration() {
      console.log(
        this.name,
        this.firstName,
        this.email,
        this.loginRegister,
        this.birth,
        this.password
      );
    },
  },
};
</script>

<style></style>
