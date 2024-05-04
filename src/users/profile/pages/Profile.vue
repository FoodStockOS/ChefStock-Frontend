<template>
  <div class="profile-view">
    <user-profile></user-profile>
  </div>
</template>

<script>
import Profile from '../components/profile.component.vue';
import UserProfile from "@/users/profile/components/profile.component.vue";

export default {
  components: {
    UserProfile,
    Profile
  }
}
</script>
