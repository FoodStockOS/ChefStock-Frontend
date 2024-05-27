import axios from "axios";

// Create axios instance with predefined properties
const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/drkdevv1/json-server-Chefstock',
});

// Define country API service
export class ProductsApiService {
    getCardInfo() {
        return http.get(`/products`);
    }
    createProduct(product) {
        return http.post(`/products`, product);
    }
    updateProduct(product) {
        return http.put(`/products/${product.id}`, product);
    }
    deleteProduct(id) {
        return http.delete(`/products/${id}`);
    }
}
