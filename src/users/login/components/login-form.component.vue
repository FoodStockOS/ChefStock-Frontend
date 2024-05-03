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
      const response = await axios.get(`http://localhost:3000/users?username=${this.username}&password=${this.password}`, {
        username: this.username,
        password: this.password,
      });
      console.log(response.data.length);
      if (response.data.length > 0) {
        this.$router.push('/homepage');
      } else {
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
