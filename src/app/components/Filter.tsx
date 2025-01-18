'use client'
import React, { useEffect, useState, useMemo } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

interface SanityProduct {
  _id: string;
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
    const fetchData: SanityProduct[] = await client.fetch(`
      *[_type == "product"] {
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

    return fetchData.map((prod) => ({
      id: prod._id,
      name: prod.name,
      description: prod.description,
      oldPrice: prod.oldPrice,
      price: prod.price,
      image: prod.image,
      images: prod.images || [],
      colors: prod.colors || [],
      sizeAvailability: prod.sizeAvailability || [],
      rating: prod.rating || 0,
      material: prod.material || '',
      category: prod.category || '',
      subCategory: prod.subCategory || '',
      availability: prod.availability || 'Out of Stock',
      tags: prod.tags || [],
    }));
  } catch (err) {
    console.error('Error fetching data:', err);
    return [];
  }
}

const Filter = () => {
  const [productItems, setProductItems] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getData();
      setProductItems(products);
    };
    fetchProducts();
  }, []);

  // Use useMemo to optimize filtering
  const filtered = useMemo(() => {
    return productItems
      .filter((prod) => {
        const matchesCategory = selectedCategory ? prod.category === selectedCategory : true;
        const matchesSubcategory = selectedSubcategory ? prod.subCategory === selectedSubcategory : true;
        const matchesSearchTerm = (prod.name && prod.name.toLowerCase().includes(searchTerm.toLowerCase())) || 
                                  (prod.description && prod.description.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSubcategory && matchesSearchTerm;
      });
  }, [selectedCategory, selectedSubcategory, productItems, searchTerm]);

  useEffect(() => {
    setFilteredProducts(filtered);
  }, [filtered]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(''); // Reset subcategory when category changes
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value); // Update the search term
  };

  if (!productItems.length) return <div>Loading...</div>;

  // Get available subcategories for the selected category
  const availableSubcategories = productItems
    .filter((prod) => prod.category === selectedCategory)
    .map((prod) => prod.subCategory);

  return (
    <div className="container mx-auto p-4">
     <div className="flex flex-wrap gap-4 items-center mb-8">
  {/* Search Input */}
  <div className="flex items-center border rounded-lg p-3 w-full sm:w-1/4 shadow-md hover:shadow-lg transition-all duration-300">
    <FaSearch className="text-gray-600 mr-3" />
    <input
      type="text"
      id="search"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search by name or description"
      className="border-none w-full focus:outline-none text-gray-700"
    />
  </div>

  {/* Category Dropdown */}
  <div className="flex items-center w-full sm:w-1/4">
    <label className="font-bold text-gray-700 mr-4" htmlFor="category">
      Category:
    </label>
    <select
      id="category"
      value={selectedCategory}
      onChange={(e) => handleCategoryChange(e.target.value)}
      className="border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
    >
      <option value="">Select Category</option>
      {[...new Set(productItems.map((prod) => prod.category))].map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>

  {/* Subcategory Dropdown */}
  {selectedCategory && (
    <div className="flex items-center w-full sm:w-1/4">
      <label className="font-bold text-gray-700 mr-4" htmlFor="subcategory">
        Filter
      </label>
      <select
        id="subcategory"
        value={selectedSubcategory}
        onChange={(e) => handleSubcategoryChange(e.target.value)}
        className="border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
      >
        <option value="">Select </option>
        {[...new Set(availableSubcategories)].map((subcategory) => (
          <option key={subcategory} value={subcategory}>
            {subcategory}
          </option>
        ))}
      </select>
    </div>
  )}
</div>






      {/* Filtered Products */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {filteredProducts.map((prod) => (
    <div
      key={prod.id}
      className="bg-white rounded-lg shadow-lg p-4 max-w-xs mx-auto hover:shadow-xl transition-shadow duration-300 h-full"
    >
      <Image
        src={prod.image}
        alt={prod.name}
        width={200}
        height={200}
        className="rounded-lg mb-4 object-cover w-full h-[400px]" // Ensure height is fixed
      />
      <h2 className='text-lg font-bold text-black truncate text-center' style={{
        fontSize: `${prod.name.length > 20 ? '0.875rem' : '1rem'}`, // Adjust font size based on length
      }}>
        {prod.name}
      </h2>
      <div className="flex justify-center gap-3 mb-4">
        <p className="text-sm line-through text-gray-400">{prod.oldPrice}</p>
        <p className="text-sm font-bold text-green-600">{prod.price}</p>
      </div>
      {/* Buttons */}
      <div className="flex justify-between gap-3">
      <button className="w-full py-2 bg-blue-400 text-white rounded-lg shadow-lg hover:bg-blue-600 hover:shadow-2xl transition-all duration-300">
          Buy Now
        </button>
        <button className="w-full py-2 bg-orange-400 text-white rounded-lg shadow-lg hover:bg-orange-600 hover:shadow-2xl transition-all duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>


    </div>
  );
};

export default Filter;
