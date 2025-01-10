import Image from 'next/image';
import Link from 'next/link';

// Define the type for product
interface Product {
  id: number;
  name: string;
  depart: string;
  oldPrice: string;
  price: string;
  image: string; // image should be of type string (URL of the image)
  colors: string[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer mt-6 mb-6 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <Link href={`/details/${product.id}`}>
        <div className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            layout="responsive"
            width={300}
            height={400}
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
              fontSize: `${product.depart.length > 15 ? '0.875rem' : '1rem'}`, // Adjust size based on length
            }}
          >
            {product.depart}
          </h5>
          <div className="flex justify-center gap-3">
            <p className="text-sm line-through text-gray-400">{product.oldPrice}</p>
            <p className="text-sm font-bold text-green-600">{product.price}</p>
          </div>
          <div className="flex justify-center space-x-2">
            {product.colors.map((color, index) => (
              <div
                key={index}
                className="w-5 h-5 rounded-full border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
