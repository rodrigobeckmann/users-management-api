import axios from "axios";
import { getToken } from "../utils/token";
const baseUrl = 'http://localhost:3001'

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export default axiosInstance;