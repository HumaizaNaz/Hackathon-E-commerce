import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCard2Props {
  product: {
    id: string;
    name: string;
    description: string;
    oldPrice: string;
    price: string;
    tags: string[];
    image: string;
    images: string[];
    colors?: string[];
    sizeAvailability?: string[];
    rating?: number;
    material?: string;
    category?: string;
    subCategory?: string;
    availability?: string;
  };
}

const ShopCard2: React.FC<ProductCard2Props> = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <Image
        src={product.image}
        alt={product.name}
        width={400} // Specify the width
        height={400} // Specify the height
        className="w-full h-72 object-cover rounded-md"
    
      />
       <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 truncate">{product.name}</h2>
                
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-4">
                  <span className="text-sm sm:text-lg font-bold text-green-600">{product.price}</span>
                  <span className="text-xs sm:text-sm line-through text-gray-400">{product.oldPrice}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <Link
                    href={`/grocery/${product.id}`}
                    className="flex-1 bg-blue-500 text-white text-center py-1 sm:py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    Buy Now
                  </Link>
                  <button className="flex-1 bg-orange-500 text-white py-1 sm:py-2 rounded-md hover:bg-orange-600 transition-colors duration-300 text-xs sm:text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
              </div>
            </div>
    </div>
  );
};

export default ShopCard2;
