<script>
export default {
  name: 'UserProfile',
  data() {
    return {
      user: {
        name: 'Juan Perez',
        email: 'juanperez@example.com',
        profilePicture: 'assets/assistant.png'
      }
    };
  }
}


</script>

<template>
  <div class="user-profile">
    <img :src="user.profilePicture" alt="Profile Picture">
    <h1>{{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
  </div>
</template>

<style scoped>

.user-profile img {
  width: 100px;
  height: auto;
  border-radius: 50%;
}
.user-profile h1 {
  font-size: 20px;
}
</style>