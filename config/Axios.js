import axios from "axios";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("");
  if (config.headers) {
    return {
      ...config,
      headers: {
        Authorization: token ? `Bearer ${token}` : null,
      },
    };
  }
});

export { api };
