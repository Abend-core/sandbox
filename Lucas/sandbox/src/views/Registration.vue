<template>
  <p>Inscription</p>
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
    <!-- <label for="confirmPassword">
      Confirmation Mot de passe
      <input
        type="password"
        id="confirmPassword"
        v-model="confirmPassword"
        placeholder="Mot de passe"
        minlength="8"
        required
      />
    </label> -->
    <button class="w-fit" type="submit">Rejoindre Abend-core !</button>
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
      // confirmPassword: "",
    };
  },
  methods: {
    registration() {
      const data = {
        name: this.name,
        firstName: this.firstName,
        email: this.email,
        birth: this.birth,
        password: this.password,
        // confirmPassword: this.confirmPassword,
      };
      console.log(data);
    },
  },
};
</script>

<style></style>
