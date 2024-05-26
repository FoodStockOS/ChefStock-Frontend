<script>

import HomeCard from '../components/home-card.component.vue';

export default {
  name: 'Homepage',
  components: {
    'home-card-component':HomeCard
  },
};

</script>

<template>

  <div class="principal">
    <h1>ChefStock</h1>
    <img alt="" src="../assets/ImagenPrincipal.jpg" width="625"/>
  </div>
  &nbsp;
  <div class="productos">
    &nbsp;
    <h2>Productos</h2>
    <home-card-component />
  </div>

</template>

<style>
.principal img {
  max-width:100%;
  height:auto;
  border-radius: 15px;
}
.principal{
  text-align: center;
}
.productos{
  text-align: center;
}
</style>