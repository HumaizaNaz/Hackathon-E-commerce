/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import ShopCard2 from '@/app/components/shop/Card';
import Pagination from '@/app/components/shop/Pagination';
import { client } from '@/sanity/lib/client';
import Filters from '@/app/components/shop/Filters';

interface Product {
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
}

async function getData(): Promise<Product[]> {
  try {
    const fetchData = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        description,
        category,
        subCategory,
        price,
        oldPrice,
        availability,
        "image": image.asset->url,
        "images": images[].asset->url,
        colors,
        sizeAvailability,
        rating,
        material,
        tags
      }
    `);

    return fetchData.map((product: any) => ({
      id: product._id,
      name: product.name,
      description: product.description,
      oldPrice: product.oldPrice,
      price: product.price,
      image: product.image,
      images: product.images || [],
      colors: product.colors || [],
      sizeAvailability: product.sizeAvailability || [],
      rating: product.rating || 0,
      material: product.material || '',
      category: product.category || '',
      subCategory: product.subCategory || '',
      availability: product.availability || 'Out of Stock',
      tags: product.tags || [],
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

const ProductList: React.FC = () => {
  const [productItems, setProductItems] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [subCategoryFilter, setSubCategoryFilter] = useState<string>('');
  const [colorFilter, setColorFilter] = useState<string>('');
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getData();
        setProductItems(products);
      } catch (error) {
        console.error('Error fetching product items:', error);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = productItems.filter((product) => {
    return (
      (categoryFilter === '' || product.category === categoryFilter) &&
      (subCategoryFilter === '' || product.subCategory === subCategoryFilter) &&
      (colorFilter === '' || product.colors?.includes(colorFilter))
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-center my-20">BESTSELLER PRODUCTS</h1>
        <Filters 
          categories={[...new Set(productItems.map((p) => p.category || ''))].filter(Boolean)}
          subCategories={[...new Set(productItems.map((p) => p.subCategory || ''))].filter(Boolean)}
          colors={[...new Set(productItems.flatMap((p) => p.colors ?? []))].filter(Boolean)}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          subCategoryFilter={subCategoryFilter}
          setSubCategoryFilter={setSubCategoryFilter}
          colorFilter={colorFilter}
          setColorFilter={setColorFilter} filteredProductsLength={0} productItemsLength={0}        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentItems.map((product) => (
            <ShopCard2 key={product.id} product={product} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
};

export default ProductList;
