'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Sofa Set",
      price: 109.99,
      quantity: 1,
      image: "/slider/1.jpg",
    },
    {
      id: 2,
      name: "Relaxing Chair",
      price: 49.99,
      quantity: 1,
      image: "/slider/3.png",
    },
    {
      id: 3,
      name: "Crockery",
      price: 99.99,
      quantity: 1,
      image: "/slider/6.png",
    },
    {
      id: 4,
      name: "Cup Set",
      price: 79.99,
      quantity: 1,
      image: "/slider/4.png",
    },
    {
      id: 5,
      name: "Cups with Glass set",
      price: 89.99,
      quantity: 1,
      image: "/slider/5.png",
    },
  ]);

  // Update quantity
  const handleQuantityChange = (id: number, increment: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(item.quantity + increment, 0),
            }
          : item
      )
    );
  };

  // Add a new product with specified quantity
  const handleAddProduct = (productId: number, quantityToAdd: number) => {
    const productIndex = cartItems.findIndex(item => item.id === productId);

    if (productIndex >= 0) {
      // If product exists, update its quantity
      setCartItems(prevItems => prevItems.map(item => 
        item.id === productId ? { ...item, quantity: item.quantity + quantityToAdd } : item
      ));
    } else {
      // If product does not exist, add it as a new product
      const newProduct = {
        id: cartItems.length + 1, // Ensure unique id
        name: `New Product ${cartItems.length + 1}`,
        price: 59.99,
        quantity: quantityToAdd,
        image: "https://via.placeholder.com/150",
      };
      setCartItems(prevItems => [...prevItems, newProduct]);
    }
  };

  // Calculate subtotal
  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Freight cost
  const freight = 3.9;
  const total = calculateSubtotal() + freight;

  return (
    <div className="flex flex-col md:flex-row w-screen h-full px-14 py-7">
      {/* Cart Items */}
      <div className="w-full flex flex-col h-fit gap-4 p-4">
        <p className="text-blue-900 text-xl font-extrabold">My cart</p>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm"
          >
            <div className="flex flex-col md:flex-row gap-3 justify-between">
              {/* Product Details */}
              <div className="flex flex-row gap-6 items-center">
                <div className="w-28 h-28">
                  <Image
                    className="w-full h-full"
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-lg text-gray-800 font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-600 font-semibold">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>

              {/* Price Details */}
              <div className="self-center text-center">
                <p className="text-gray-800 font-normal text-xl">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex flex-row self-center gap-1">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="w-5 h-5 self-center rounded-full border border-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                </svg>
              </button>
              <input
                type="text"
                readOnly
                value={item.quantity}
                className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"
              />
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="w-5 h-5 self-center rounded-full border border-gray-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Purchase Summary */}
      <div className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
        <p className="text-blue-900 text-xl font-extrabold">Purchase Resume</p>
        <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
          <div className="flex flex-row justify-between">
            <p className="text-gray-600">
              Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items)
            </p>
            <p className="text-end font-bold">${calculateSubtotal().toFixed(2)}</p>
          </div>
          <hr className="bg-gray-200 h-0.5" />
          <div className="flex flex-row justify-between">
            <p className="text-gray-600">Freight</p>
            <p className="text-end font-bold">${freight.toFixed(2)}</p>
          </div>
          <hr className="bg-gray-200 h-0.5" />
          <div className="flex flex-row justify-between">
            <p className="text-gray-600">Total</p>
            <p className="text-end font-bold">${total.toFixed(2)}</p>
          </div>
          <div className="flex gap-2">
            <button className="transition-colors text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-sm w-full text-white shadow-md">
              FINISH
            </button>
            <Link href="/shop">
              <button
                onClick={() => handleAddProduct(1, 4)} // Example of adding 4 of the first product
                className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-gray-700 shadow-md"
              >
                ADD 4 PRODUCTS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
