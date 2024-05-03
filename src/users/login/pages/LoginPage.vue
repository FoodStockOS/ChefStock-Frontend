<template>
  <div>
    <h1>Log In</h1>
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