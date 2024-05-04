<template>
  <pv-toolbar class="c-toolbar">
    <template #start>
      <h1>ChefStock</h1>
      <router-link to="/homepage"><pv-button class="text-button" >Home</pv-button></router-link>
    </template>
    <template #center>
      <router-link to="/products"><pv-button class="text-button" >Products</pv-button></router-link>
    </template>
    <template #end>
      <router-link to="/login"><pv-button class="text-button login-button" >Log In</pv-button></router-link>
      <router-link to="/signup"><pv-button class="text-button signup-button" >Sign Up</pv-button></router-link>
      <router-link to="/profile"><pv-button class="text-button profile-button" >Profile</pv-button></router-link>

    </template>
  </pv-toolbar>
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
.c-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #e55e35;
  color: #1c1c1c;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}
.text-button {
  color: #1c1c1c;
  background: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}
.login-button {
  background-color: #708090;
  color: #FFF;
}
.profile-button {
  background-color: #708090;
  color: #FFF;
}
.signup-button {
  background-color: #778899;
  color: #FFF;
}
.text-button:hover {
  background-color: #000;
  color: #FFF;
}
.content{
  margin-bottom: 200px;
}
:root {
  background-color: #f4f0df;
}
</style>
