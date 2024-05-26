<template>
  <div class="form-container-login-signup">
    <form @submit.prevent="handleSubmit">
      <pv-input-text class="input-login-signup" v-model="username" placeholder="Username" />
      <pv-input-text class="input-login-signup"  type="password" v-model="password" placeholder="Password" />
      <pv-button class="button-login-signup" type="submit">Log In</pv-button>
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

<style>
.form-container-login-signup {
  width: 400px;
  height: 300px;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.input-login-signup {
  width: 80%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.button-login-signup {
  width: 80%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  justify-content: center;
  background-color: #ff8a48;
  color: #fff;
  cursor: pointer;
  box-sizing: border-box;
}

.button-login-signup:hover {
  background-color: #ff5c00;
}

.button-login-signup:active {
  background-color: #ff5800;
}

</style>
