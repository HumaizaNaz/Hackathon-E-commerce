import React, { useState, useMemo } from "react";
import { Button } from "@/app/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app//ui/select";
import ReviewCard from "@/app/components/productpage/Tabs/ReviewCard";
import { products } from "@/app/data/products";

import { reviews } from "@/app/data/reviews";

const ReviewsContent = () => {
  const [selectedProductId, setSelectedProductId] = useState<number | "all">("all");
  const [visibleReviews, setVisibleReviews] = useState(10);
  const [sortBy, setSortBy] = useState("latest");

  // Handle Product Filter
  const handleProductChange = (value: string) => {
    setSelectedProductId(value === "all" ? "all" : parseInt(value));
  };

  // Handle Sorting
  const handleSortChange = (value: string) => {
    setSortBy(value);
  };

  // Filtered Reviews
  const filteredReviews = useMemo(() => {
    return reviews.filter(
      (review) => selectedProductId === "all" || review.productId === selectedProductId
    );
  }, [selectedProductId]);

  // Sorted Reviews
  const sortedReviews = useMemo(() => {
    switch (sortBy) {
      case "latest":
        return [...filteredReviews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      case "oldest":
        return [...filteredReviews].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      default:
        return filteredReviews;
    }
  }, [filteredReviews, sortBy]);

  // Paginated Reviews
  const paginatedReviews = sortedReviews.slice(0, visibleReviews);

  return (
    <section>
      <div className="flex items-center justify-between flex-col sm:flex-row mb-5 sm:mb-6">
        <div className="flex items-center mb-4 sm:mb-0">
          <h3 className="text-xl sm:text-2xl font-bold text-black mr-2">All Reviews</h3>
          <span className="text-sm sm:text-base text-black/60">({filteredReviews.length})</span>
        </div>
        <div className="flex items-center space-x-2.5">
          {/* Product Filter */}
          <Select defaultValue="all" onValueChange={handleProductChange}>
            <SelectTrigger className="min-w-[120px] font-medium text-xs sm:text-base px-4 py-3 sm:px-5 sm:py-4 text-black bg-[#F0F0F0] border-none rounded-full h-12">
              <SelectValue placeholder="Filter by Product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Products</SelectItem>
              {products.map((product) => (
                <SelectItem key={product.id} value={product.id.toString()}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Sort Reviews */}
          <Select defaultValue="latest" onValueChange={handleSortChange}>
            <SelectTrigger className="min-w-[120px] font-medium text-xs sm:text-base px-4 py-3 sm:px-5 sm:py-4 text-black bg-[#F0F0F0] border-none rounded-full h-12">
              <SelectValue placeholder="Sort Reviews" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>

          <Button
            type="button"
            className="sm:min-w-[166px] px-4 py-3 sm:px-5 sm:py-4 rounded-full bg-black font-medium text-xs sm:text-base h-12"
          >
            Write a Review
          </Button>
        </div>
      </div>

      {/* Display Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5 sm:mb-9">
        {paginatedReviews.length > 0 ? (
          paginatedReviews.map((review) => (
            <ReviewCard key={review.id} data={review} isAction={true} isDate={true} />
          ))
        ) : (
          <p className="text-black/60 text-center col-span-full">
            No reviews available for this product.
          </p>
        )}
      </div>

      {/* Load More Button */}
      {visibleReviews < filteredReviews.length && (
        <div className="w-full px-4 sm:px-0 text-center">
          <button
            onClick={() => setVisibleReviews((prev) => prev + 10)}
            className="inline-block w-[230px] px-11 py-4 border rounded-full hover:bg-black hover:text-white text-black transition-all font-medium text-sm sm:text-base border-black/10"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
};

export default ReviewsContent;
