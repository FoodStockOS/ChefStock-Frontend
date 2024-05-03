import axios from "axios";

// Create axios instance with predefined properties
const http = axios.create({
    baseURL: 'http://localhost:3000',
});

// Define country API service
export class ProductsApiService {
    getCardInfo() {
        return http.get(`/products`);
    }
}
