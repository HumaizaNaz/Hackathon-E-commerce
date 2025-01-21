/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const Checkout = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [shippingPreference, setShippingPreference] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [canPlaceOrder, setCanPlaceOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCart);
  }, []);

  const handleQuantityChange = (index: number, action: 'increase' | 'decrease') => {
    const updatedCart = [...cartItems];
    if (action === 'increase') {
      updatedCart[index].quantity += 1;
    } else if (action === 'decrease' && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    setCartItems(updatedCart);
  };

  const handleOrderSubmit = () => {
    if (!name || !address || !email || !phone || !shippingPreference) {
      alert('Please fill in all the fields before placing the order.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.removeItem('cart');
      setOrderPlaced(true);
      setLoading(false);
      setTimeout(() => {
        router.push('/');
      }, 1000);
    }, 2000);
  };

  const checkFormValidity = useCallback(() => {
    if (name && address && email && phone && shippingPreference) {
      setCanPlaceOrder(true);
    } else {
      setCanPlaceOrder(false);
    }
  }, [name, address, email, phone, shippingPreference]); // Wrapping with useCallback

  useEffect(() => {
    checkFormValidity();
  }, [checkFormValidity]); // Now only depends on the memoized checkFormValidity function

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">Checkout</h1>

      {orderPlaced ? (
        <div className="text-center text-green-600">
          <h2 className="text-lg sm:text-xl font-semibold">Order Placed Successfully!</h2>
          <p className="mt-4">Thank you for your purchase. You will be redirected to the homepage shortly.</p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Billing Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="my-4">
              <label htmlFor="name" className="block text-sm font-semibold">Full Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onBlur={checkFormValidity}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>

            <div className="my-4">
              <label htmlFor="email" className="block text-sm font-semibold">Email Address:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={checkFormValidity}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>
          </div>

          <div className="my-4">
            <label htmlFor="address" className="block text-sm font-semibold">Shipping Address:</label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onBlur={checkFormValidity}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="my-4">
              <label htmlFor="phone" className="block text-sm font-semibold">Phone Number:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                onBlur={checkFormValidity}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              />
            </div>

            <div className="my-4">
              <label htmlFor="shippingPreference" className="block text-sm font-semibold">Shipping Preference:</label>
              <select
                id="shippingPreference"
                value={shippingPreference}
                onChange={(e) => setShippingPreference(e.target.value)}
                onBlur={checkFormValidity}
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
              >
                <option value="">Select Shipping Method</option>
                <option value="standard">Standard Shipping (5-7 days)</option>
                <option value="express">Express Shipping (2-3 days)</option>
                <option value="overnight">Overnight Shipping</option>
              </select>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Summary</h2>

          <div className="space-y-4 mb-8">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-300">
                <div className="flex items-center">
                  <Image src={item.imageUrl || "/watches12.jpg"} alt={item.name} width={200} height={200} className="w-16 h-16 object-cover rounded-md mr-4" />
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">Size: {item.size} | Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleQuantityChange(index, 'decrease')}
                    className="p-2 text-2xl"
                  >
                    -
                  </button>
                  <p className="text-xl font-semibold text-gray-900">${item.price * item.quantity}</p>
                  <button
                    onClick={() => handleQuantityChange(index, 'increase')}
                    className="p-2 text-2xl"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mb-6">
            <p className="text-lg font-semibold text-gray-700">Total:</p>
            <p className="text-2xl font-bold text-gray-900">
              ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50}
            </p>
          </div>

          <button
            onClick={handleOrderSubmit}
            disabled={!canPlaceOrder || loading}
            className={`w-full ${canPlaceOrder && !loading ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-gray-400'} text-white py-3 px-8 rounded-lg shadow-md hover:${canPlaceOrder && !loading ? 'bg-indigo-700' : 'cursor-not-allowed'} transition-all duration-300`}
          >
            {loading ? 'Placing Order...' : canPlaceOrder ? 'Place Order' : 'Fill all fields to place order'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
