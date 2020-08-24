import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

// // cheese requests 

// export const getAllEvents = () => {
//   return axios.get(`${baseUrl}/events`)
// }

export const registerUser = formData => {
  return axios.post(`${baseUrl}/register`, formData)
}