import axios from "axios"
import Cookies from "js-cookie"

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/"

const service = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
})

service.interceptors.request.use((config) => {
  const token = Cookies.get("token")
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default service
