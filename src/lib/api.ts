import axios from "axios";

const api = axios.create({
  baseURL: "http://103.127.139.176:8082/api/v1",
});

export default api;
