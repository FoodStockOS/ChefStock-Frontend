<template>
  <pv-toolbar class="c-toolbar">
    <template #start>
      <h1>ChefStock</h1>
    </template>
    <template #center>
      <router-link to="/products"><pv-button class="text-button" >Products</pv-button></router-link>
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
  border: none;
  padding: 0;
  font-size: 1.5rem;
  cursor: pointer;
}
.content{
  margin-bottom: 200px;
}
:root {
   background-color: #f4f0df;
}
</style>
