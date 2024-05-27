<script>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ProductsApiService } from '@/users/products/services/products-api.service.js';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const product = ref(null);
    const productService = new ProductsApiService();

    onMounted(async () => {
      const response = await productService.getCardInfo(route.params.productId);
      product.value = response.data.find(p => p.id === route.params.productId);
      console.log(product.value);
    });

    const updateProduct = () => {
      productService.updateProduct(product.value)
          .then(() => {
            console.log('Producto actualizado');
            router.push('/products');
          })
          .catch(error => {
            console.error('Error al actualizar el producto:', error);
          });
    };

    return {
      product,
      updateProduct
    };
  }
};
</script>

<template>
  <pv-card class="form-card">
    <template #title>
      <h1>Actualizar Producto</h1>
    </template>
    <template #content>
      <div class="form-container">
        <form class="update-form" v-if="product" @submit.prevent="updateProduct">
          <div class="update-form-content">
            <div>
              <label for="name">Nombre:</label>
              <pv-input-text id="name" v-model.lazy="product.name" type="text" required ></pv-input-text>
            </div>
            <div>
              <label for="quantity">Cantidad:</label>
              <pv-input-number id="quantity" v-model.lazy="product.quantity" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" required/>
            </div>
            <div>
              <label for="category">Categoría:</label>
              <pv-input-text id="category" v-model.lazy="product.category" type="text" required ></pv-input-text>
            </div>
            <div>
              <label for="description">Descripción:</label>
              <pv-text-area id="description" v-model.lazy="product.description" required rows="5" cols="30" />
            </div>
            <div class="button-container">
              <pv-button class="submit-button" type="submit">Actualizar Producto</pv-button>
              <router-link to="/products" class="link-no-decoration">
                <pv-button class="cancel-button">Cancelar</pv-button>
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </template>
  </pv-card>
</template>

<style scoped>
.update-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
}
#description {
  width: 100%;
  height: 150px;
}
.update-form-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

.submit-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  padding: 10px 10px;
  margin-top: 10px;
  font-size: 18px;
  border:none;
}

.submit-button:hover {
  background-color: darkorange;
}
</style>