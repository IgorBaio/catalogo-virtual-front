import './App.css'

interface Product {
  id: number
  name: string
  price: string
}

function App() {
  const products: Product[] = [
    { id: 1, name: 'Produto A', price: 'R$ 10,00' },
    { id: 2, name: 'Produto B', price: 'R$ 20,00' },
    { id: 3, name: 'Produto C', price: 'R$ 30,00' },
  ]

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
              <h3 className="font-medium mb-1">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.price}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
