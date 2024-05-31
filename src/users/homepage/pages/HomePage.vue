<script>

import HomeCard from '../components/home-card.component.vue';

export default {
  name: 'Homepage',
  components: {
    'home-card-component':HomeCard,
  },
};

</script>

<template>

  <div class="principal">
    <h1>ChefStock</h1>
    <img alt="" src="../assets/ImagenPrincipal.jpg" width="625"/>
  </div>
  <div class="inicio">
    <div>
    <h2>Únete a nosotros</h2>
    <img alt="" src="../assets/ImagenLogin.jpg" width="525"/>
    </div>
    &nbsp;
    <div>
    <router-link to="/signup"><pv-button class="home2-button" >Crear una cuenta</pv-button></router-link>
    <router-link to="/login"><pv-button class="home2-button" >Iniciar sesión</pv-button></router-link>
    </div>
  </div>
  <div class="productos">
    <h2>Organiza tus productos</h2>
    <home-card-component />
    <router-link to="/products"><pv-button class="home-button" >Ver los productos</pv-button></router-link>
  </div>

</template>

<style>
.principal img {
  max-width:100%;
  height:auto;
  border-radius: 15px;
}
.inicio img {
  max-width:100%;
  height:auto;
  border-radius: 15px;
}
.principal{
  text-align: center;
  padding-bottom: 40px;
}
.inicio{
  text-align: center;
  background-color: #ff8a48;
  align-content: center;
  padding-top: 20px;
  padding-bottom: 40px;
}
.productos{
  padding-top: 20px;
  text-align: center;
}
.home-button {
  background-color: #ff8a48;
  color: #000000;
  border: 2px solid;
  vertical-align: bottom;
  font-weight: bold;
  font-size: 17px;
}
.home2-button {
  background-color: #fdf5f1;
  color: #000000;
  border: 2px solid;
  vertical-align: bottom;
  margin-right: 25px;
  font-weight: bold;
  font-size: 17px;
}
.home-button:hover {
  background-color: #ff5800;
  color: #000000;
}
.home2-button:hover {
  background-color: #bdb7b3;
  color: #000000;
}
</style>