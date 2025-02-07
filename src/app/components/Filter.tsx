"use client"

import type React from "react";
import { useEffect, useState, useMemo } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import WishlistIcon from "@/app/components/WishlistIcons";

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

const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlSearchTerm = searchParams.get("search") || "";

  const [productItems, setProductItems] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>(urlSearchTerm);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
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
      `;
      const fetchData: SanityProduct[] = await client.fetch(query);

      const products = fetchData.map((prod) => ({
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
        material: prod.material || "",
        category: prod.category || "",
        subCategory: prod.subCategory || "",
        availability: prod.availability || "Out of Stock",
        tags: prod.tags || [],
      }));

      setProductItems(products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    setSearchTerm(urlSearchTerm);
  }, [urlSearchTerm]);

  const filtered = useMemo(() => {
    return productItems.filter((prod) => {
      const matchesCategory = selectedCategory ? prod.category === selectedCategory : true;
      const matchesSubcategory = selectedSubcategory ? prod.subCategory === selectedSubcategory : true;
      const matchesSearchTerm = searchTerm
        ? (prod.name && prod.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (prod.description && prod.description.toLowerCase().includes(searchTerm.toLowerCase()))
        : true;
      return matchesCategory && matchesSubcategory && matchesSearchTerm;
    });
  }, [selectedCategory, selectedSubcategory, productItems, searchTerm]);

  useEffect(() => {
    setFilteredProducts(filtered);
  }, [filtered]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    router.push(`/category?search=${encodeURIComponent(newSearchTerm)}`);
  };

  if (!productItems.length) return <div>Loading...</div>;

  const availableSubcategories = productItems
    .filter((prod) => prod.category === selectedCategory)
    .map((prod) => prod.subCategory);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Filter Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {/* Search Input */}
          <div className="relative">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <div className="relative">
              <input
                type="text"
                id="search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by name or description"
                className="w-full pl-3 pr-10 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {[...new Set(productItems.map((prod) => prod.category))].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory Dropdown */}
          <div>
            <label htmlFor="subcategory" className="block text-sm font-medium text-gray-700 mb-1">
              Filter
            </label>
            <select
              id="subcategory"
              value={selectedSubcategory}
              onChange={(e) => handleSubcategoryChange(e.target.value)}
              className="w-full px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Filters</option>
              {[...new Set(availableSubcategories)].map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Filtered Products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            <div className="relative pt-[100%]">
             
              <Image
                src={prod.image || "/placeholder.svg"}
                alt={prod.name}
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 w-full h-full"
              />
                 <WishlistIcon 
                productId={prod.id} 
                productName={prod.name} 
                productPrice={prod.price} 
                productImage={prod.image} 
              />
            </div>
            <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 truncate">{prod.name}</h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-4 line-clamp-2">{prod.description}</p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2 sm:mb-4">
                  <span className="text-sm sm:text-lg font-bold text-green-600">{prod.price}</span>
                  <span className="text-xs sm:text-sm line-through text-gray-400">{prod.oldPrice}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <Link
                    href={`/grocery/${prod.id}`}
                    className="flex-1 bg-blue-500 text-white text-center py-1 sm:py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 text-xs sm:text-sm"
                  >
                    Buy Now
                  </Link>
                  <button className="flex-1 bg-orange-300 text-white py-1 sm:py-2 rounded-md hover:bg-orange-600 transition-colors duration-300 text-xs sm:text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filter

