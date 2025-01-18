// import ProductCard from '../../components/productpage/Card'; 
// import { productItems } from '../../data/pageproduct'; 

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header Section */}
//         <div className="flex flex-col items-center space-y-4 text-center"> {/* Changed items-start to items-center */}
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl my-20 font-bold">BESTSELLER PRODUCTS</h1>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
//           {productItems.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import ProductCard from '../../components/productpage/Card';
import { client } from '@/sanity/lib/client';

// Product interface for TypeScript
interface Product {
  id: string;
  name: string;
  description: string;
  oldPrice: string;
  price: string;
  image: string;
}

// Data fetching from Sanity
async function getData(): Promise<Product[]> {
  try {
    const fetchData = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        description,
        category,
        price,
        oldPrice,
        availability,
        "image" : image.asset->url,
        "images": images[]{asset->{url}},
        colors,
        sizeAvailability,
        rating,
        material
      }
    `);

    // Map the _id field to id
    return fetchData.map((product: any) => ({
      id: product._id,
      name: product.name,
      description: product.description,
      oldPrice: product.oldPrice,
      price: product.price,
      image: product.image || "", // Ensure image URL is passed properly
      images: product.images || [],// Ensure image URL is fetched properly
      colors: product.colors || [], // Colors available
      sizeAvailability: product.sizeAvailability || [], // Available sizes
      rating: product.rating || 0, // Product rating
      material: product.material || "" // Material
    })) || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export default function Home() {
  const [productItems, setProductItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();
      setProductItems(products);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl my-20 font-bold">BESTSELLER PRODUCTS</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {productItems.length > 0 ? (
            productItems.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </main>
    </div>
  );
}
