<template>
  <form @submit.prevent="handleSubmit">
    <pv-input-text v-model="username" placeholder="Username" />
    <pv-input-text v-model="email" placeholder="Email" />
    <pv-input-text type="password" v-model="password" placeholder="Password" />
    <pv-button type="submit">Sign Up</pv-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    };
  },
  methods: {
    handleSubmit() {
      // Lógica para manejar el registro
    },
  },
};
</script>
