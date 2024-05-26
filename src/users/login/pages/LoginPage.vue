<template>
  <div>
    <h1 class="login-signup-title">Log In</h1>
    <login-form-component />
  </div>
</template>

<script>
import LoginFormComponent from '@/users/login/components/login-form.component.vue';

export default {
  name: 'LoginPage',
  components: {
    'login-form-component': LoginFormComponent,
  },
};
</script>
<style>
.login-signup-title {
  text-align: center;
  font-size: 32px;
  color: #f18244;
}
</style>