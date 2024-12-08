// components/ProductCard.tsx
import Image from 'next/image';

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
    <div className="group h-[580px] w-[241px] pl-[40px] cursor-pointer mt-10 mb-10">
      <div className="relative aspect-w-1 aspect-h-1 w-[239px] h-[427px] overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="mt-2 h-[118px] w-[239px] px-[25px] py-[36px] space-y-2">
        <h3 className="text-xl font-bold pl-[24px] justify-center text-black">{product.name}</h3>
        <h5 className="text-xl justify-start font-bold text-gray-400">{product.depart}</h5>
        <div className=' pl-[24px] flex justify-start gap-3'>
          <p className="text-lg font-bold text-gray-500">{product.oldPrice}</p>
          <p className="text-lg font-bold text-green-900">{product.price}</p>
        </div>

        <div className="flex pl-[24px] space-x-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className="w-6 h-6 gap-3 rounded-full border"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
