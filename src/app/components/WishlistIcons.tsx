// WishlistIcon.tsx

import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

interface WishlistIconProps {
  productId: string;
  productName: string;
  productPrice: string;
  productImage: string;
}

const WishlistIcon: React.FC<WishlistIconProps> = ({
  productId,
  productName,
  productPrice,
  productImage,
}) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

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

        setIsInWishlist(
          wishlist.some((item: { productId: string }) => item.productId === productId)
        );
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, [productId]);

  const handleWishlistClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      if (isInWishlist) {
        const response = await fetch("/api/wishlist", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.API_SECRET_KEY}`,
          },
          body: JSON.stringify({ productId }),
        });
        const updatedWishlist = await response.json();
        setIsInWishlist(updatedWishlist.some((item: { productId: string }) => item.productId === productId));
      } else {
        const wishlistItem = {
          productId,
          name: productName,
          price: productPrice,
          imageUrl: productImage,
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
        setIsInWishlist(updatedWishlist.some((item: { productId: string }) => item.productId === productId));
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  return (
    <button
      onClick={handleWishlistClick}
      className={`absolute top-3 right-3 p-2 rounded-full bg-white bg-opacity-80 ${
        isInWishlist ? "text-red-500" : "text-gray-500"
      } transition-colors`}
    >
      <FaHeart size={24} />
    </button>
  );
};

export default WishlistIcon;
