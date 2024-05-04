<template>
  <div class="form-container-login-signup">
    <form @submit.prevent="handleSubmit">
      <pv-input-text class="input-login-signup" v-model="username" placeholder="Username" />
      <pv-input-text class="input-login-signup" v-model="email" placeholder="Email" />
      <pv-input-text class="input-login-signup" type="password" v-model="password" placeholder="Password" />
      <pv-button class="button-login-signup" type="submit">Sign Up</pv-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('https://my-json-server.typicode.com/drkdevv1/json-server-Chefstock/users', {
        username: this.username,
        email: this.email,
        password: this.password,
      });
      if (response.data.length > 0) {
        this.$toast.add({
          severity: 'success',
          summary: 'Registro exitoso',
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: 'error',
          summary: 'Error de registro',
          life: 3000,
        });
      }
    },
  },
};
</script>

<style>

</style>
