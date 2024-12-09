'use client'

import Image from 'next/image'; // Import the Image component from Next.js
import React, { useState } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Black Leather Bag',
      price: 100,
      quantity: 1,
      image: '/slider/1.jpg',
    },
    {
      id: '2',
      name: 'Blue Denim Jacket',
      price: 60,
      quantity: 2,
      image: '/slider/1.jpg',
    },
  ]);

  const handleQuantityChange = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center mb-6"> Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 mb-4 bg-white shadow-lg rounded-lg"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md sm:w-32 sm:h-32 md:w-40 md:h-40"
              />
              <div className="flex-1 ml-0 sm:ml-4 mt-4 sm:mt-0">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-700">Price: ${item.price}</p>
                <div className="flex items-center mt-2">
                  <label className="mr-2 text-gray-600">Quantity: </label>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value, 10))
                    }
                    className="w-16 p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <p className="mt-2 text-gray-700">Total: ${item.price * item.quantity}</p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="mt-3 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-semibold">Total: ${calculateTotal()}</h3>
            <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
