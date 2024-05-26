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

    updateProduct(id, productData) {
        return http.put(`/products/${id}`, productData);
    }

    deleteProduct(id) {
        return http.delete(`/products/${id}`);
    }
}
