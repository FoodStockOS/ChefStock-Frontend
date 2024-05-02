import http from "../../../core/services/http-common.js";

class UsersApiService {
    getEmailAndPassword(email, password) {
        return http.post(`/users/login`, {
            email: email,
            password: password,
        });
    }
    create(data) {
        return http.post(`/users`, data);
    }
    update(id, data) {
        return http.put(`/users/${id}`, data);
    }
    getById(id) {
        return http.get(`/users/${id}`);
    }
}

export default new UsersApiService();
