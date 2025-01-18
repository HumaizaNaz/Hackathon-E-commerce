import Image from 'next/image';
import Link from 'next/link';

// Define the type for product
interface Product {
  id: string;
  name: string;
  description: string;
  oldPrice: string;
  price: string;
  image: string; // image should be of type string (URL of the image)
  colors?: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer mt-6 mb-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 w-full max-w-sm">
      <Link href={`/grocery/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg h-64">
        <Image
  src={product.image || '/default-image.jpg'} // Fallback image if product.image is null
  alt={product.name}
  layout="fill"
  objectFit="cover"
  className="group-hover:scale-105 transition-transform duration-200"
/>
        </div>
        <div className="mt-4 space-y-2">
          <h3
            className="text-lg font-bold text-black truncate text-center"
            style={{
              fontSize: `${product.name.length > 20 ? '0.875rem' : '1rem'}`, // Adjust size based on length
            }}
          >
            {product.name}
          </h3>
          <h5
            className="text-md font-medium text-gray-500 truncate text-center"
            style={{
              fontSize: `${product.description.length > 15 ? '0.875rem' : '1rem'}`, // Adjust size based on length
            }}
          >
            {product.description}
          </h5>
          <div className="flex justify-center gap-3">
            <p className="text-sm line-through text-gray-400">{product.oldPrice}</p>
            <p className="text-sm font-bold text-green-600">{product.price}</p>
          </div>
          {product.colors && Array.isArray(product.colors) && product.colors.length > 0 && (
  <div className="flex justify-center space-x-2">
    <span className="font-bold text-gray-700">Colors: </span>
    {product.colors.map((color, index) => (
      <span
        key={index}
        className="inline-block w-5 h-5 rounded-full border border-gray-400"
        style={{ backgroundColor: color }}
        title={color}
      ></span>
    ))}
  </div>
)}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
