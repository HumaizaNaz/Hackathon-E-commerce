'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from '@/app/components/Card'; // Ensure correct path
import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';

import { client } from '@/sanity/lib/client';
import Link from 'next/link';

// Product interface for TypeScript
interface Product {
  id: string;
  name: string;
  description: string;
  oldPrice: string;
  price: string;
  image: string;
  images: string[];
  colors: string[];
  sizeAvailability: string[];
  rating: number;
  material: string;
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
      image: product.image || "",
      images: product.images || [],
      colors: product.colors || [],
      sizeAvailability: product.sizeAvailability || [],
      rating: product.rating || 0,
      material: product.material || ""
    })) || [];
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

// Importing Montserrat font
const monterrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export default function Home() {
  const [productItems, setProductItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getData();

      // Shuffle the products randomly
      const shuffledProducts = products.sort(() => Math.random() - 0.5);

      // Limit the number of products to 20
      const limitedProducts = shuffledProducts.slice(0, 20);

      setProductItems(limitedProducts);
    };

    fetchData();
  }, []);

  return (
    <div className={`${monterrat.className} min-h-screen bg-white`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <h4 className="text-xl sm:text-2xl text-gray-500">Exclusive Collection</h4>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">TRENDING STYLES & ACCESSORIES</h1>
          <p className="text-sm sm:text-base text-gray-500">
            Discover the perfect blend of style, comfort, and elegance. Shop our best-selling outfits and accessories that elevate your wardrobe.
          </p>
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

        <Link href="/category" className="px-6 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300">
          For More Products
        </Link>
      </main>
    </div>
  );
}
