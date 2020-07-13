import http from "../http-common";

class MoneyTokDataService {
    post() {
        return http.post("/login");
    }
    post() {
        return http.post("/NewUser");
    }
    get(id) {
        return http.get(`/${id}`);
    }
    get() {
        return http.get("/logout");
    }
}

export default new MoneyTokDataService();