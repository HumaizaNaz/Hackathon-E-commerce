import ProductCard from '../../components/productpage/Card'; 
import { products } from '../../data/pageproduct'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col items-start space-y-4 text-center">
         
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">BESTSELLER PRODUCTS</h1>
         
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