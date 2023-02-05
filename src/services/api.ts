import axios from "axios";

const api = axios.create({
  baseURL: "https://crud-back-end.onrender.com",
  timeout: 10000,
});

export default api;
