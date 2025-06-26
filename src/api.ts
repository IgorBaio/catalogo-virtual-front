export const API_BASE = 'https://catalogo-virtual-server.onrender.com'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  whatsappMessage: string
  image: string
  isActive: boolean
  ownerId: string
}

export interface ProductResponse {
  data: Product[]
}

export async function getProducts(query: string): Promise<ProductResponse> {
  const res = await fetch(`${API_BASE}/api/produto/query/${encodeURIComponent(query)}`)
  if (!res.ok) throw new Error(res.statusText)
  return res.json()
}
