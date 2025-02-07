import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

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
  const [isInWishlist, setIsInWishlist] = useState(false);

  // Check if the product is already in the wishlist
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch("/api/wishlist", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
          },
        });
        const wishlist = await response.json();

        // Check if this product is in the wishlist
        const isProductInWishlist = wishlist.some(
          (item: { productId: string }) => item.productId === product.id
        );
        setIsInWishlist(isProductInWishlist);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, [product.id]);

  // Handle adding/removing product to/from wishlist
  const handleWishlistClick = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the event from bubbling up to the Link component
    try {
      if (isInWishlist) {
        // Remove from wishlist
        const response = await fetch("/api/wishlist", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
          },
          body: JSON.stringify({ productId: product.id }),
        });
        const updatedWishlist = await response.json();
        setIsInWishlist(
          updatedWishlist.some((item: { productId: string }) => item.productId === product.id)
        );
      } else {
        // Add to wishlist
        const wishlistItem = {
          productId: product.id,
          name: product.name,
          price: product.price,
          imageUrl: product.image,
        };

        const response = await fetch("/api/wishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
          },
          body: JSON.stringify(wishlistItem),
        });

        const updatedWishlist = await response.json();
        setIsInWishlist(
          updatedWishlist.some((item: { productId: string }) => item.productId === product.id)
        );
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    <div className="border p-4 rounded-lg shadow-md relative">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-72 object-cover rounded-md"
      />
      
      {/* Heart icon */}
      <button
        onClick={handleWishlistClick}
        className={`absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-80 ${
          isInWishlist ? "text-red-500" : "text-gray-500"
        } transition-colors`}
      >
        <FaHeart size={24} />
      </button>

      <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between">
        <div>
          <h2 className="text-sm sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2 truncate">
            {product.name}
          </h2>
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