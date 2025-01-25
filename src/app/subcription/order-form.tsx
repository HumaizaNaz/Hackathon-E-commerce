// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter for navigation
// import { client } from "@/sanity/lib/client";
// import type { Subscription } from "@/app/types/subscription";

// interface OrderFormProps {
//   productId: string;
// }

// const OrderForm: React.FC<OrderFormProps> = ({ productId }) => {
//   const [subscription, setSubscription] = useState<Subscription | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//   });
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const router = useRouter();

//   useEffect(() => {
//     if (orderPlaced) {
//       router.push("/pricing");
//     }
//   }, [orderPlaced, router]);

//   useEffect(() => {
//     const fetchSubscription = async () => {
//       try {
//         setLoading(true);
//         const query = `*[_type == "subscription" && _id == $productId][0] {
//           _id,
//           name,
//           price
//         }`;
//         const fetchedSubscription = await client.fetch(query, { productId });
//         if (fetchedSubscription) {
//           setSubscription(fetchedSubscription);
//         } else {
//           setError("Subscription not found");
//         }
//       } catch (err) {
//         setError("Error fetching subscription data");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (productId) {
//       fetchSubscription();
//     }
//   }, [productId]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       // Check if an order already exists with the same email
//       const existingOrder = await fetch("/api/check-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email: formData.email }),
//       }).then((res) => res.json());

//       if (existingOrder.exists) {
//         const userConfirmed = confirm(
//           `You already have an active subscription (${existingOrder.subscriptionName}). Please unsubscribe first.`
//         );
//         if (userConfirmed) {
//           const unsubscribeResult = await fetch("/api/unsubscribe", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ orderId: existingOrder.orderId }),
//           }).then((res) => res.json());

//           if (unsubscribeResult.success) {
//             alert("Unsubscribed successfully. You can now place a new order.");
//           } else {
//             throw new Error("Failed to unsubscribe. Please try again.");
//           }
//         }
//         return; // Stop further execution
//       }

//       // Proceed with placing the order
//       const orderResponse = await fetch("/api/place-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           address: formData.address,
//           subscriptionId: productId,
//         }),
//       });

//       const orderData = await orderResponse.json();
//       if (orderData.success) {
//         setOrderPlaced(true);
//       } else {
//         throw new Error(orderData.error || "Failed to place order.");
//       }
//     } catch (err) {
//       const errorMessage =
//         err instanceof Error ? err.message : "Something went wrong.";
//       console.error("Error placing order:", errorMessage);
//       setError(errorMessage);
//     }
//   };

//   if (loading) {
//     return <div className="text-center mt-10">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-10 text-red-500">{error}</div>;
//   }

//   if (!subscription) {
//     return <div className="text-center mt-10">Subscription not found</div>;
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h1 className="text-2xl font-bold mb-5">
//         Order Form for {subscription.name}
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label
//             htmlFor="name"
//             className="block mb-2 text-sm font-medium text-gray-900"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           />
//         </div>
//         <div>
//           <label
//             htmlFor="address"
//             className="block mb-2 text-sm font-medium text-gray-900"
//           >
//             Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             required
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//           />
//         </div>
//         <div>
//           <p className="text-lg font-semibold">
//             Price: €{subscription.price} per/month
//           </p>
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
//         >
//           Place Order
//         </button>
//       </form>
//     </div>
//   );
// };

// export default OrderForm;
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";

interface Subscription {
  _id: string;
  name: string;
  price: number;
}

interface OrderFormProps {
  productId: string;
}

const OrderForm: React.FC<OrderFormProps> = ({ productId }) => {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false); // State to track order status

  const router = useRouter();

  // Fetch subscription data
  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "subscription" && _id == $productId][0] {
          _id,
          name,
          price
        }`;
        const fetchedSubscription = await client.fetch(query, { productId });
        if (fetchedSubscription) {
          setSubscription(fetchedSubscription);
        } else {
          setError("Subscription not found");
        }
      } catch (err) {
        setError("Error fetching subscription data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchSubscription();
    }
  }, [productId]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Check if an order already exists
      const existingOrder = await fetch("/api/check-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      }).then((res) => res.json());

      if (existingOrder.exists) {
        const userConfirmed = confirm(
          `You already have an active subscription (${existingOrder.subscriptionName}). Please unsubscribe first.`
        );
        if (userConfirmed) {
          const unsubscribeResult = await fetch("/api/unsubscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ orderId: existingOrder.orderId }),
          }).then((res) => res.json());

          if (unsubscribeResult.success) {
            alert("Unsubscribed successfully. You can now place a new order.");
          } else {
            throw new Error("Failed to unsubscribe. Please try again.");
          }
        }
        return; // Stop further execution
      }

      // Place a new order
      const orderResponse = await fetch("/api/place-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          address: formData.address,
          subscriptionId: productId,
        }),
      });

      const orderData = await orderResponse.json();
      if (orderData.success) {
        setOrderPlaced(true); // Update the state to reflect order placement
      } else {
        throw new Error(orderData.error || "Failed to place order.");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong.";
      console.error("Error placing order:", errorMessage);
      setError(errorMessage);
    }
  };

  // Redirect user when orderPlaced becomes true
  useEffect(() => {
    if (orderPlaced) {
      router.push("/pricing");
    }
  }, [orderPlaced, router]);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  if (!subscription) {
    return <div className="text-center mt-10">Subscription not found</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Order Form for {subscription.name}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">Price: €{subscription.price} per/month</p>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
