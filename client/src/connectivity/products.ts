import axios from 'axios'
const API_URI = 'http://localhost:3000'

export async function getAllProducts() {
  const { data } = await axios.get(`${API_URI}/products`)
  if (data.error) {
    throw new Error(data.message)
  }
  return data
}
