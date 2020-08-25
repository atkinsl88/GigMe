import axios from 'axios'
import { getToken } from './auth.js'
const baseUrl = 'http://localhost:3000/api'

export const withHeaders = () => { 
  return {
    headers: { Authorization: `Bearer ${getToken()}` }  
  }
}

// // cheese requests 
// export const getAllEvents = () => {
//   return axios.get(`${baseUrl}/events`)
// }

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}

export const loginUser = formData => {
  return axios.post(`${baseUrl}/login`, formData)
}

export const createComment = (formData, id) => {
  return axios.post(`${baseUrl}/events/${id}/comments`, formData, withHeaders())
}

export const createLike = (likes, id) => {
  return axios.post(`${baseUrl}/events/${id}/like`, likes, withHeaders())
}

