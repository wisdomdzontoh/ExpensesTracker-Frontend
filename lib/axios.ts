import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Update as per your Django backend
  withCredentials: true,
})

export default api
