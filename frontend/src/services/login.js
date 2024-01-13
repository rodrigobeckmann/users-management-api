import axios from './config'
import { setToken } from '../utils/token';
import { getToken } from '../utils/token';

export const login = async (credentials) => {
  const response = await axios.post(`/login`, credentials)
  setToken(response.data.token)
  return response.data
}

export const getLoggedUser = async () => {
  const response = await axios.get(`/users/logged`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    }
  },)
  return response.data
}

export const getUserById = async (id) => {
  const response = await axios.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    }
  })
  return response.data
}

export const verifyLogin = async (id) => {
  try {
    const response = await axios.get(`/login/verify`, { params: { id: id } })
    return response.data
  } catch {
    return false
  }
}

export const updateUser = async (id, user) => {
  try {
    const response = await axios.patch(`/users/${id}`, user, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      }
    })
    return response.data
  } catch {
    return false
  }
}

export const updateUserPicture = async (id, userPicture) => {
  try {
    const response = await axios.post(`/users/${id}/upload`, userPicture, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      }
    })
    return response.data
  } catch {
    return false
  }

}

export const getAllUsers = async () => {
  const response = await axios.get(`/users`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    }
  })
  return response.data
}