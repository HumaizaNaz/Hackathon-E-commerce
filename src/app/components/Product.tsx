import ProductCard from '../components/Card'; // Ensure correct path
import { products } from '../data/products'; // Ensure correct path

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <h4 className="text-xl sm:text-2xl text-gray-500">Featured Products</h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">BESTSELLER PRODUCTS</h1>
          <p className="text-sm sm:text-base text-gray-500">
            Problems trying to resolve the conflict between...
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
