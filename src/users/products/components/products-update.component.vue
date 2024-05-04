<script>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ProductsApiService } from "@/users/products/services/products-api.service.js";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const productService = new ProductsApiService();
    const product = ref({
      id: route.params.id,
      name: '',
      quantity: '',
      category: '',
      description: ''
    });

    productService.getCardInfo(product.value.id).then(response => {
      Object.assign(product.value, response.data);
    });

    const submitForm = () => {
      productService.updateProduct(product.value.id, product.value)
          .then(response => {
            console.log('Producto actualizado:', response.data);
            router.push('/products');
          })
          .catch(error => {
            console.error('Error al actualizar el producto:', error);
          });
    };

    return {
      product,
      submitForm
    };
  }
};
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="submitForm" class="product-form">
      <div class="form-group left-column">
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="product.name" required>

        <label for="quantity">Cantidad</label>
        <input type="number" id="quantity" v-model="product.quantity" required>

        <label for="category">Categoría</label>
        <input type="text" id="category" v-model="product.category" required>
      </div>
      <div class="form-group right-column">
        <label for="description">Agregar una descripción</label>
        <textarea id="description" v-model="product.description" required></textarea>
        <div class="button-container">
          <pv-button type="submit" class="save-button">Guardar</pv-button>
          <router-link to="/products">
            <pv-button class="cancel-button">Cancelar</pv-button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<style>

</style>