<script>

export default {
  name: 'ProductCard'
}

</script>

<template>
  <div class="homepage-products">
    <md-card>
      <md-card-media>
        <img src="../assets/Producto1.png" alt="" height="315" width="315">
      </md-card-media>
      <md-card-header>
        <h3>Aceite de oliva</h3>
      </md-card-header>
    </md-card>

    <md-card>
      <md-card-media>
        <img src="../assets/Producto2.png" alt="" height="315" width="315">
      </md-card-media>
      <md-card-header>
        <h3>Gaseosa Inca Kola</h3>
      </md-card-header>
    </md-card>

    <md-card>
      <md-card-media>
        <img src="../assets/Producto3.png" alt="" height="315" width="315">
      </md-card-media>
      <md-card-header>
        <h3>Tenedor</h3>
      </md-card-header>
    </md-card>
  </div>

</template>


<style>
md-card {
  color: black;
  width: 320px;
  margin: 30px;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  border: 3px solid;
  background: #ff8a48;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}
.homepage-products img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

</style>
