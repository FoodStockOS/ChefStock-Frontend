<script>
import ProductCard from './products-card.component.vue'
export default {
  name: "ProductCardList",
  components:{ProductCard},
  props: {
    products: Array,
  },
  methods: {
    handleProductDeleted(productId) {
      const index = this.products.findIndex(product => product.productId === productId);
      if (index !== -1) {
        this.products.splice(index, 1);
      }
    }
  }
}
</script>

<template>
  <div class="products-list">
    <product-card
        v-for="product in products"
        :product="product"
        :key="product.productId"
        @productDeleted="handleProductDeleted"
        @update="productId => $router.push({ name: 'ProductUpdate', params: { productId } })"
    ></product-card>
  </div>
</template>

<style scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
</style>