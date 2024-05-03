<template>
  <div>
    <h1>Sign Up</h1>
    <signup-form-component />
  </div>
</template>

<script>
import SignupFormComponent from '@/users/login/components/signup-form.component.vue';

export default {
  name: 'SignupPage',
  components: {
    'signup-form-component': SignupFormComponent,
  },
};
</script>
