import axios from "axios";

// Create axios instance with predefined properties
const http = axios.create({
    baseURL: 'https://localhost:44371',
});

// Define country API service
export class ProductsApiService {
    getCardInfo() {
        return http.get(`/api/v1/products`);
    }
    getProductById(id) {
        return http.get(`/api/v1/products/${id}`);
    }
    createProduct(product) {
        return http.post(`/api/v1/products`, product);
    }
    updateProduct(product) {
        return http.put(`/api/v1/products/${product.productId}`, product);
    }
    deleteProduct(id) {
        return http.delete(`/api/v1/products/${id}`);
    }
}