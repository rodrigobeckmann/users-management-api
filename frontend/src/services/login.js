import axios from './config'
import { setToken } from '../utils/token';

export const login = async (credentials) => {
  const response = await axios.post(`/login`, credentials)
  setToken(response.data.token)
  return response.data
}

export const getLoggedUser = async (id) => {
  const response = await axios.get(`/users/logged`)
  return response.data
}

export const verifyLogin = async (id) => {
  try {
    const response = await axios.get(`/login/verify`, {params: {id: id}})
    return response.data
  } catch {
    return false
  }
}

export const getAllUsers = async () => {
  const response = await axios.get(`/users`)
  return response.data
}