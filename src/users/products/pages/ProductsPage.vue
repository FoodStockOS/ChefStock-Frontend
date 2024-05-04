<script>
import ProductCard from '../components/products-card.component.vue';
import ProductCardList from '../components/products-list.component.vue';

import {ProductsApiService} from "@/users/products/services/products-api.service.js";

export default {
  name: 'products',
  components:{
    ProductCard,ProductCardList,
  },
  data(){
    return {
      products:[],
      errors:[],
      productsApi: new ProductsApiService(),
    };
  },
  methods:{
    handleProductDeleted(productId) {
      const index = this.products.findIndex(product => product.id === productId);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    },
    getProductCard(){
      this.productsApi.getCardInfo().then((response)=>{
        this.products=response.data;
      }).catch((error)=>{
        this.errors.push(error);
      });
    },
  },
  created() {
    this.getProductCard();
  },
};
</script>

<template>
  <div class="productspage-container">
    <div class="button-container">
      <router-link to="/createproducts">
        <pv-button class="add-button">Agregar Productos</pv-button>
      </router-link>
    </div>
    <product-card-list :products="products" @productDeleted="handleProductDeleted"></product-card-list>
  </div>
</template>

<style>
.productspage-container{
  background: #3a3a39;
}
.button-container {
  padding-top:20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.add-button {
  background-color: #808080;
  color: #ffffff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #a0a0a0;
}
</style>