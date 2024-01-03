import axios from "axios";
import { getToken } from "../utils/token";
const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export default axiosInstance;