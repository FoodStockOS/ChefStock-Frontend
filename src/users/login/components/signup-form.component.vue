<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit">
      <pv-input-text v-model="username" placeholder="Username" />
      <pv-input-text v-model="email" placeholder="Email" />
      <pv-input-text type="password" v-model="password" placeholder="Password" />
      <pv-button type="submit">Sign Up</pv-button>
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
      const response = await axios.post('http://localhost:3000/users', {
        username: this.username,
        email: this.email,
        password: this.password,
      });
      console.log(response.data);
      this.$router.push('/login');
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
