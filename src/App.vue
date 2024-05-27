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
      <router-link to="/login"><pv-button class="right-button" >Log In</pv-button></router-link>
      <router-link to="/signup"><pv-button class="right-button" >Sign Up</pv-button></router-link>
      <router-link to="/profile"><pv-button class="right-button" >Profile</pv-button></router-link>

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
  background-color: #fff7f3;
  color: #f18244;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  border:none;
}
.text-button {
  color: #1c1c1c;
  background: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 10px;
  border:none;
  transition: background-color 0.3s ease;
}
.right-button {
  margin-right: 10px;
  background-color: #ff8a48;
  color: #FFF;
}
.text-button:hover {
  color:#ff8a48;
}
.right-button:hover {
  margin-right: 10px;
  background-color: #ff5800;
  color: #FFF;
}
.content{
  margin-bottom: 200px;
}
:root {
  background-color: #fff7f3;
}
</style>
