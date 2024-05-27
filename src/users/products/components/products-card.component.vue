<script>
import {Products} from "@/users/products/models/products.entity.js";
import {ProductsApiService} from "@/users/products/services/products-api.service.js";
export default {
  name:"ProductCard",
  components: {},
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  methods: {
    deleteProduct() {
      const productService = new ProductsApiService();
      productService.deleteProduct(this.product.id)
          .then(() => {
            this.$emit('productDeleted', this.product.id);
            console.log("Producto eliminado con éxito");
          })
          .catch(error => {
            console.error("Error al eliminar el producto:", error);
          });
    },
    updateProduct() {
      this.$emit('update', this.product.id);
    }
  }
};

</script>
<template>
  <pv-card class="card">
    <template #title><h4>{{ product.name }}</h4></template>
    <template #content>
      <div class="image-container">
        <img :src="product.image" alt="Product" class="product-image"/>
      </div>
      <p><strong>Cantidad:</strong> {{ product.quantity }}</p>
      <p><strong>Categoría:</strong> {{ product.category }}</p>
      <p><strong>Descripción:</strong> {{ product.description }}</p>
      <div class="buttons-container">
        <pv-button class="update-button" @click="updateProduct">Actualizar</pv-button>
        <pv-button class="delete-button" @click="deleteProduct">Eliminar</pv-button>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.card {
  padding-top: 10px;
  max-width: 300px;
  overflow: hidden;
  background-color: #ffffff;
  color: #32383e;
  margin-bottom: 30px;
  border-radius: 10px;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
}

.product-image {
  max-width: 80%;
  border-radius: 10px;
}
.buttons-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
.buttons-container .update-button{
  background-color: #f19b08;
  padding: 5px 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.buttons-container .delete-button{
  background-color: #ef0505;
  padding: 8px 10px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>