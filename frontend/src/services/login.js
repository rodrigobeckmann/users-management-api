import axios from './config'
import { setToken } from '../utils/token';

export const login = async (credentials) => {
  const response = await axios.post(`/login`, credentials)
  setToken(response.data.token)
  return response.data
}

export const verifyLogin = async () => {
  try {
    await axios.get(`/login/verify`)
    return true
  } catch {
    return false
  }
}

export const getAllUsers = async () => {
  const response = await axios.get(`/users`)
  return response.data
}