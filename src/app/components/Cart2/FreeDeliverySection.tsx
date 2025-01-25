// "use client";
import { useState } from "react"; // Make sure to import React hooks

// FreeDeliverySection component
export function FreeDeliverySection() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible((prev) => !prev);
  };

  return (
    <div className="w-full bg-gray-100 p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Free Delivery
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-4">
        Enjoy free delivery on orders over $50!
      </p>
      <button
        onClick={toggleDetails}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all"
      >
        {isDetailsVisible ? "Hide Details" : "View Details"}
      </button>

      {isDetailsVisible && (
        <div className="mt-4 p-4 bg-white rounded-md shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Free Delivery Details
          </h3>
          <p className="text-gray-600">
            We provide free delivery on all orders over $50. Your order will
            arrive within 5-7 business days. This offer is available for all
            regions.
          </p>
        </div>
      )}
    </div>
  );
}
