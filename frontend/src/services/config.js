import axios from "axios";
import { getToken } from "../utils/token";
const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export default axiosInstance;