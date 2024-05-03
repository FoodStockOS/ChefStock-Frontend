<template>
  <form @submit.prevent="handleSubmit">
    <pv-input-text v-model="username" placeholder="Username" />
    <pv-input-text type="password" v-model="password" placeholder="Password" />
    <pv-button type="submit">Log In</pv-button>
  </form>
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
    handleSubmit() {
      axios.get('http://localhost:3000/users', {
        params: {
          username: this.username,
          password: this.password,
        },
      })
          .then((response) => {
            if (response.data.length > 0) {
              // El usuario existe y la contraseña es correcta
              console.log('Inicio de sesión exitoso');
            } else {
              // El usuario no existe o la contraseña es incorrecta
              console.log('Error de inicio de sesión');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    },
  },
};
</script>
