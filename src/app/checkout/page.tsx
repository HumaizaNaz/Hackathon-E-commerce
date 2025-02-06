"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { client } from "@/sanity/lib/client";
import Voucher from "./Voucher";
import OrderTracking from "./OrderTracking";
import StripePaymentForm from "./StripePaymentForm";
import { toast } from "react-hot-toast";
import { Button } from "@/app/ui/button";
import { Card, CardContent } from "@/app/ui/card";
import { Separator } from "@/app/ui/seperator";
import { FreeDeliverySection } from "@/app/components/Cart2/FreeDeliverySection";
import { Dialog, DialogContent, DialogTrigger } from "@/app/ui/dialog";

const stripePromise = loadStripe(
  process.env.STRIPE_PUBLISHABLE_KEY!
);

interface CartItem {
  productId: string;
  quantity: number;
  name: string;
  price: string;
  imageUrl: string;
  size?: string;
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [shippingPreference, setShippingPreference] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [canPlaceOrder, setCanPlaceOrder] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [orderId, setOrderId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  // const [carriers, setCarriers] = useState([]);
  const [showStripeForm, setShowStripeForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchCart();
    
  }, []);

  const fetchCart = async () => {
    try {
      const response = await fetch("/api/cart", {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch cart");
      }
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  // const fetchCarriers = async () => {
  //   try {
  //     const response = await fetch("/api/shipengine/carriers");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch carriers");
  //     }
  //     const data = await response.json();
  //     setCarriers(data);
  //   } catch (error) {
  //     console.error("Error fetching carriers:", error);
  //   }
  // };

  const handleQuantityChange = async (productId: string, change: number) => {
    const updatedCart = cartItems.map((item) =>
      item.productId === productId
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updatedCart);

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
        body: JSON.stringify({
          productId,
          quantity: updatedCart.find((item) => item.productId === productId)
            ?.quantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update item quantity");
      }
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const handleRemoveItem = async (productId: string) => {
    try {
      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
        body: JSON.stringify({ productId }),
      });
      if (!response.ok) {
        throw new Error("Failed to remove item from cart");
      }
      fetchCart();
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const handleVoucherApply = async () => {
    try {
      const voucherInput = document.getElementById(
        "voucherCode"
      ) as HTMLInputElement;
      const voucherCode = voucherInput?.value.trim();

      if (!voucherCode) {
        alert("Please enter a voucher code.");
        return;
      }

      const response = await fetch("/api/apply-voucher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ voucherCode }),
      });

      const data = await response.json();
      console.log("Voucher API Response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to apply voucher");
      }

      setDiscount(data.discount);
      setVoucherApplied(true);
      toast.success("Voucher applied successfully!");
    } catch (error) {
      console.error("Error applying voucher:", error);
      toast.error("Failed to apply voucher. Please try again.");
    }
  };

  const createOrder = async (paymentDetails: { id?: string } = {}) => {
    const orderData = {
      _type: "order",
      name,
      email,
      phone,
      address,
      city,
      items: cartItems.map((item) => ({
        _type: "orderItem",
        id: item.productId,
        name: item.name,
        price: Number.parseFloat(item.price),
        quantity: item.quantity,
        image: item.imageUrl,
      })),
      total: calculateTotal(),
      paymentMethod,
      paymentStatus: paymentMethod === "cod" ? "Pending" : "Paid",
      paymentAmount: paymentMethod === "cod" ? 0 : calculateTotal(),
      paymentId: paymentDetails.id || "",
      status: paymentMethod === "cod" ? "Pending" : "Processing",
    };

    const response = await client.create(orderData);
    return response._id;
  };

  const handleOrderSubmit = async () => {
    if (!name || !address || !email || !phone || !city || !shippingPreference) {
      toast.error("Please fill in all the fields before placing the order.");
      return;
    }

    setLoading(true);

    try {
      // Create shipping label
      const shippingResponse = await fetch("/api/shipengine/create-label", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, address, city }),
      });
      const shippingData = await shippingResponse.json();
      console.log("Shipping label created:", shippingData);

      if (paymentMethod === "stripe") {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: Math.round(calculateTotal() * 100),
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to create payment intent");
        }

        const { clientSecret } = await response.json();
        setClientSecret(clientSecret);
        setShowStripeForm(true);
      } else {
        const orderId = await createOrder();
        setOrderId(orderId);
        setOrderPlaced(true);
        await fetch("/api/cart/clear", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
          },
        });
        toast.success("Order placed successfully!");
        setTimeout(() => {
          router.push(`/order-confirmation/${orderId}`);
        }, 3000);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error(
        "An error occurred while placing your order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentSuccess = async (paymentIntentId: string) => {
    try {
      const orderId = await createOrder({ id: paymentIntentId });
      setOrderId(orderId);
      setOrderPlaced(true);
      await fetch("/api/cart/clear", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
      });
      toast.success("Payment successful and order placed!");
      setShowStripeForm(false);
      setTimeout(() => {
        router.push(`/order-confirmation/${orderId}`);
      }, 3000);
    } catch (error) {
      console.error("Error handling payment success:", error);
      toast.error(
        "An error occurred while finalizing your order. Please contact support."
      );
    }
  };

  const calculateTotal = () => {
    return (
      cartItems.reduce(
        (total, item) => total + Number.parseFloat(item.price) * item.quantity,
        0
      ) +
      50 -
      discount
    );
  };

  useEffect(() => {
    setCanPlaceOrder(
      name && address && email && phone && city && shippingPreference
        ? true
        : false
    );
  }, [name, address, email, phone, city, shippingPreference]);

  return (
    <div className="container mx-auto px-4 py-8 mt-[99px]">
      <FreeDeliverySection />

      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6 md:mb-8">
        Checkout
      </h1>

      {orderPlaced ? (
        <div className="text-center text-green-600">
          <h2 className="text-lg sm:text-xl font-semibold">
            Order Placed Successfully!
          </h2>
          <p className="mt-4">
            Thank you for your purchase. You will be redirected shortly.
          </p>
          <OrderTracking orderId={orderId} />
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Billing Information
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                  />
                  <select
                    value={shippingPreference}
                    onChange={(e) => setShippingPreference(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md"
                  >
                    <option value="">Select Shipping Preference</option>
                    {/* {carriers.map((carrier: { id: string; name: string }) => (
                      <option key={carrier.id} value={carrier.id}>
                        {carrier.name}
                      </option>
                    ))} */}
                  </select>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 my-6">
                  Order Summary
                </h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.productId}
                      className="flex justify-between items-center py-4 border-b border-gray-300"
                    >
                      <div className="flex items-center">
                        <Image
                          src={item.imageUrl || "/placeholder.svg"}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="w-16 h-16 object-cover rounded-lg mr-5"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">
                            {item.name.length > 20
                              ? `${item.name.slice(0, 20)}...`
                              : item.name}
                          </p>
                          <p className="text-sm text-gray-600">
                            Size: {item.size} | Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-5">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleQuantityChange(item.productId, -1)
                          }
                        >
                          -
                        </Button>
                        <p className="text-sm">{item.quantity}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            handleQuantityChange(item.productId, 1)
                          }
                        >
                          +
                        </Button>
                        <p className="text-xl font-semibold text-gray-900">
                          ₹{" "}
                          {(
                            Number.parseFloat(item.price) * item.quantity
                          ).toFixed(2)}
                        </p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.productId)}
                          className="hover:text-red-500 transition-colors"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-8 shadow-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-medium mb-4">Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="text-sm">
                      ₹{" "}
                      {cartItems
                        .reduce(
                          (total, item) =>
                            total +
                            Number.parseFloat(item.price) * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Delivery Charges</span>
                    <span className="text-sm">₹ 50.00</span>
                  </div>
                  {voucherApplied && (
                    <div className="flex justify-between">
                      <span className="text-sm">Discount</span>
                      <span className="text-sm text-green-600">
                        -₹ {discount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹ {calculateTotal().toFixed(2)}</span>
                  </div>

                  <Voucher
                    onVoucherApply={handleVoucherApply}
                    voucherApplied={voucherApplied}
                  />

                  <h2 className="text-xl font-medium mb-4">Payment Method</h2>
                  <div className="flex space-x-4 mb-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="cod"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="mr-2"
                      />
                      Cash on Delivery
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        value="stripe"
                        checked={paymentMethod === "stripe"}
                        onChange={() => setPaymentMethod("stripe")}
                        className="mr-2"
                      />
                      Credit Card (Stripe)
                    </label>
                  </div>

                  <Button
                    onClick={handleOrderSubmit}
                    disabled={!canPlaceOrder || loading}
                    className={`w-full ${
                      canPlaceOrder && !loading
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-400 cursor-not-allowed"
                    } text-white py-3 px-8 rounded-lg shadow-md transition-all duration-300`}
                  >
                    {loading
                      ? "Processing..."
                      : canPlaceOrder
                        ? "Place Order"
                        : "Fill all fields to place order"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <Dialog open={showStripeForm} onOpenChange={setShowStripeForm}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTrigger asChild>
            <Button className="hidden">Open Stripe Form</Button>
          </DialogTrigger>
          {clientSecret && (
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <StripePaymentForm
                amount={calculateTotal()}
                onSuccess={handlePaymentSuccess}
              />
            </Elements>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
