import { useEffect, useState } from 'react'
import { getProducts, type Product } from './api'
import './App.css'

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    getProducts('BaioSystem')
      .then((res) => setProducts(res.data))
      .catch((err) => {
        console.error('failed to fetch products', err)
      })
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 mb-6">
        <h1 className="text-xl font-bold">Meu Estabelecimento</h1>
      </header>
      <main className="container mx-auto px-4">
        <h2 className="text-lg font-semibold mb-4">Produtos</h2>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li
              key={product.id}
              className="border rounded-md p-4 shadow-sm bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-2"
              />
              <h3 className="font-medium mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-2">
                {product.description}
              </p>
              <p className="text-sm font-semibold mb-2">
                R$ {product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">{product.whatsappMessage}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
