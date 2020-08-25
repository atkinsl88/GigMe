import axios from 'axios'
import { getToken } from './auth.js'
<<<<<<< HEAD
=======


>>>>>>> c64cf4054c8b69eb81491f7523292cbf10baf306
const baseUrl = 'http://localhost:3000/api'
export const withHeaders = () => { 
  return {
    headers: { Authorization: `Bearer ${getToken()}` }  
  }
}

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
<<<<<<< HEAD
}
=======
}

>>>>>>> c64cf4054c8b69eb81491f7523292cbf10baf306
