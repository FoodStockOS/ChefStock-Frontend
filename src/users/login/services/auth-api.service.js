import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/drkdevv1/json-server-Chefstock/users';

class AuthService {
    async login(username, password) {
        const response = await axios.post(API_URL, {
            username,
            password,
        });
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(username, password) {
        const response = await axios.post(API_URL, {
            username,
            password,
        });
        return response.data;
    }
}

export default new AuthService();
