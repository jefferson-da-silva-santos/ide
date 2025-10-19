import axios from "axios";

const api = axios.create({
  baseURL: "https://ide-api-276n.onrender.com/api/ide/v1",
  headers: {
    "Content-Type": "application/json"
  }
});

// interceptar e passar o token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;