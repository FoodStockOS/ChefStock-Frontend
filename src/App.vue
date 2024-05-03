<template>
  <pv-toolbar class="c-toolbar">
    <template #start>
      <h1>ChefStock</h1>
      &nbsp;
      &nbsp;
      <router-link to="/homepage"><pv-button class="text-button" >Home</pv-button></router-link>
    </template>
    <template #center>
      <router-link to="/products"><pv-button class="text-button" >Products</pv-button></router-link>
    </template>
    <template #end>
      <router-link to="/login"><pv-button class="text-button login-button" >Log In</pv-button></router-link>
      <router-link to="/signup"><pv-button class="text-button signup-button" >Sign Up</pv-button></router-link>
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
  background-color: #ADD8E6; /* Cambiado a azul claro */
  color: #1c1c1c;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}
.text-button {
  color: #1c1c1c;
  background: none;
  border: 2px solid #000; /* Agregado borde negro */
  padding: 0.5rem 1rem; /* Agregado padding para darle más espacio al texto */
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 10px; /* Agregado margen a la derecha */
  transition: background-color 0.3s ease; /* Agregado transición para el cambio de color de fondo */
}
.login-button {
  background-color: #708090; /* Botón de inicio de sesión en color gris pizarra */
  color: #FFF; /* Texto en color blanco */
}
.signup-button {
  background-color: #778899; /* Botón de registro en color gris claro */
  color: #FFF; /* Texto en color blanco */
}
.text-button:hover {
  background-color: #000; /* Cambio de color de fondo al pasar el mouse */
  color: #FFF; /* Cambio de color de texto al pasar el mouse */
}
.content{
  margin-bottom: 200px;
}
:root {
  background-color: #f4f0df;
}
</style>
