<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <pv-input-text v-model="username" placeholder="Username" />
      <pv-input-text type="password" v-model="password" placeholder="Password" />
      <pv-button type="submit">Log In</pv-button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('https://my-json-server.typicode.com/drkdevv1/json-server-Chefstock/users', {
        username: this.username,
        password: this.password,
      });
      if (response.data.length > 0) {
        this.$toast.add({
          severity: 'success',
          summary: 'Se ha iniciado sesión correctamente',
          life: 3000,
        });
      } else {
        this.$toast.add({
          severity: 'error',
          summary: 'Error de inicio de sesión',
          life: 3000,
        });
      }
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  padding: 20px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 10px;
}
</style>
