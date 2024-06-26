<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {ProductsApiService} from "@/users/products/services/products-api.service.js";
import {ECategory} from "@/users/products/models/ECategory.enum.js";



export default {

  setup() {

    const router = useRouter();
    const productService = new ProductsApiService();
    const product = ref({
      name: '',
      stock: 0,
      description: '',
      image: '',
      categoryId: 1
    });
    const categoryOptions = Object.entries(ECategory).map(([value, name]) => ({ value, name }));

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        product.value.image = e.target.result;
      };
      reader.readAsDataURL(file);
    };
    const submitForm = () => {
      productService.createProduct(product.value)
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
      handleFileUpload,
      categoryOptions,
      ECategory
    };
  }
};

</script>

<template>
  <pv-card class="form-card">
    <template #title>
      <h1>Crear Producto</h1>
    </template>
    <template #content>
      <div class="form-container">
        <form @submit.prevent="submitForm" class="product-form">

          <div class="form-group left-column">
            <label for="name">Nombre del producto</label>
            <pv-input-text id="name" v-model.lazy="product.name" type="text" required ></pv-input-text>


            <label for="quantity">Cantidad</label>
            <pv-input-number id="quantity" v-model.lazy="product.stock" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="100" required/>
            <!--
            <label for="category">Categoría</label>
            <pv-input-text id="category" v-model.lazy="product.category" type="text" required ></pv-input-text>
            <select id="category" v-model="product.categoryId" required>
              <option v-for="(name, value) in ECategory" :value="value">
                {{ name }}
              </option>
            </select>
            -->
            <label for="category">Categoría</label>
            <pv-dropdown id="category" v-model="product.categoryId" :options="categoryOptions" optionLabel="name" optionValue="value" placeholder="Select a Category"></pv-dropdown>


          </div>

          <div class="form-group right-column">
            <label for="description">Agregar una descripción</label>
            <pv-text-area id="description" v-model.lazy="product.description" required rows="5" cols="30" />

            <input type="file" id="image" @change="handleFileUpload" required>
            <div class="button-container">
              <pv-button type="submit" class="save-button">Guardar</pv-button>
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

<style>
.form-card{
  background-color: unset;
  border: unset;
  box-shadow:none;
  text-align:center;
}
.form-card h1{
  color: #32383e;
  font-size:2.1rem;
}
.form-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;

}
#description {
  resize: none;
}
.link-no-decoration {
  text-decoration: none;
}

.product-form {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  border-radius: 20px;
  background-color: #ffff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  background-color: #006eff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
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
  font-size: 18px;
}
.cancel-button:hover {
  background-color: #c20a0a;
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
