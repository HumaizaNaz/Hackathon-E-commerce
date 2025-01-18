// import Image from 'next/image';
// import Link from 'next/link';

// interface Product {
//   id: number;
//   name: string;
//   depart: string;
//   oldPrice: string;
//   price: string;
//   image: string; 
// }

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   return (
//     <div className="group h-auto w-full max-w-[241px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] mx-auto p-4 cursor-pointer">
    
//     <Link href={`/grocery/${product.id}`}> <div className="relative aspect-w-1 aspect-h-1 w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] overflow-hidden rounded-lg">
//         <Image
//           src={product.image}
//           alt={product.name}
//           layout="fill"
//           objectFit="cover"
//           className="group-hover:scale-105 transition-transform duration-200"
//         />
//       </div>
//       <div className="mt-4 h-auto w-full px-4 space-y-2 text-center">
//         <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">{product.name}</h3>
//         <h5 className="text-sm sm:text-base md:text-lg font-semibold text-gray-400">{product.depart}</h5>
//         <div className="flex justify-center gap-3">
//           <p className="text-sm sm:text-base font-bold text-gray-500 line-through">{product.oldPrice}</p>
//           <p className="text-sm sm:text-base font-bold text-green-900">{product.price}</p>
//         </div>
//       </div>
//       </Link> 
//     </div>
//   );
// };

// export default ProductCard;
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image'; // Import urlFor to generate image URLs

interface Product {
  id: string;
  name: string;
  description: string;
  oldPrice: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Generate the image URL using urlFor function
  const imageUrl = urlFor(product.image);

  console.log('Product Image URL:', imageUrl); // Log the image URL to verify

  return (
    <div className="group h-auto w-full max-w-[241px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] xl:max-w-[400px] mx-auto p-4 cursor-pointer">
      <Link href={`/grocery/${product.id}`}>
        <div className="relative aspect-w-1 aspect-h-1 w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[400px] overflow-hidden rounded-lg">
          {/* Check if the image URL exists */}
          {imageUrl ? (
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="h-full w-full bg-gray-300">No Image Available</div>
          )}
        </div>
        <div className="mt-4 h-auto w-full px-4 space-y-2 text-center">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black">{product.name}</h3>
          <div className="flex justify-center gap-3">
            <p className="text-sm sm:text-base font-bold text-gray-500 line-through">{product.oldPrice}</p>
            <p className="text-sm sm:text-base font-bold text-green-900">{product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
