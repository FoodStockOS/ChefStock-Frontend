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
    <img alt="" src="../assets/ImagenPrincipal.jpg" height="400" width="625"/>
  </div>
  &nbsp;
  <div class="productos">
    &nbsp;
    <h3>Productos</h3>
    <home-card-component />
  </div>

</template>

<style>
.principal{
  text-align: center;
}
.productos{
  text-align: center;
  background: gray;
}
</style>