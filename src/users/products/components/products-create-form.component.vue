<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const router = useRouter();
    const product = ref({
      name: '',
      quantity: '',
      category: '',
      description: '',
      image: ''
    });
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        product.value.image = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const submitForm = () => {
      axios.post('http://localhost:3000/products', product.value)
          .then(response => {
            console.log('Producto creado:', response.data);
            router.push('/products');
          })
          .catch(error => {
            console.error('Error al crear el producto:', error);
          });
    };

    return {
      product,
      submitForm,
      handleFileUpload
    };
  }
};

</script>

<template>
  <div class="form-container">
    <form @submit.prevent="submitForm" class="product-form">
      <div class="form-group left-column">
        <label for="name">Nombre del producto</label>
        <input type="text" id="name" v-model="product.name" required>

        <label for="quantity">Cantidad</label>
        <input type="number" id="quantity" v-model="product.quantity" required>

        <label for="category">Categoría</label>
        <input type="text" id="category" v-model="product.category" required>
      </div>

      <div class="form-group right-column">
        <label for="description">Agregar una descripción</label>
        <textarea id="description" v-model="product.description" required></textarea>
        <input type="file" id="image" @change="handleFileUpload" required>
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

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
}

.product-form {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  border-radius: 20px;
  background-color: #f9f9f9;
  padding: 20px;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.right-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.button-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}
input[type="text"],
input[type="number"],
textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
}

.save-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  max-width: 100px;
  padding: 10px 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}
.cancel-button {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
  max-width: 100px;
  padding: 10px 10px;
  background-color: #dd0e0e;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}
@media (max-width: 768px) {
  .product-form {
    grid-template-columns: 2fr;
  }

  .left-column, .right-column {
    grid-column: auto;
    padding: 0;
  }

  .right-column {
    margin-top: 20px;
  }
}
</style>
