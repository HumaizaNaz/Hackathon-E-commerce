"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

interface OrderDetails {
  orderId: string
  name: string
  total: number
  status: string
}

export default function OrderConfirmation() {
  const { orderId } = useParams()
  const [order, setOrder] = useState<OrderDetails | null>(null)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${orderId}`)
        if (!response.ok) {
          throw new Error("Failed to fetch order")
        }
        const data = await response.json()
        setOrder(data)
      } catch (error) {
        console.error("Error fetching order:", error)
      }
    }

    if (orderId) {
      fetchOrder()
    }
  }, [orderId])

  if (!order) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
      <p className="mb-2">Thank you for your order, {order.name}!</p>
      <p className="mb-2">Order ID: {order.orderId}</p>
      <p className="mb-2">Total: ${order.total.toFixed(2)}</p>
      <p className="mb-2">Status: {order.status}</p>
    </div>
  )
}

// "use client"

// import { useEffect, useState } from "react"
// import { useParams } from "next/navigation"
// import { client } from "@/sanity/lib/client"

// interface OrderDetails {
//   orderId: string
//   name: string
//   total: number
//   status: string
//   email: string
// }

// export default function OrderConfirmation() {
//   const { orderId } = useParams()
//   const [order, setOrder] = useState<OrderDetails | null>(null)
//   const [error, setError] = useState("")

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const order = await client.fetch(
//           `*[_type == "order" && _id == $orderId][0]{
//             orderId, name, total, status, email
//           }`,
//           { orderId }
//         )

//         if (!order) {
//           setError("Order not found")
//           return
//         }

//         // User authorization check
//         const userEmail = localStorage.getItem("userEmail")
//         if (order.email !== userEmail) {
//           setError("You are not authorized to view this order")
//           return
//         }

//         setOrder(order)
//       } catch (error) {
//         console.error("Error fetching order:", error)
//         setError("Failed to fetch order")
//       }
//     }

//     if (orderId) {
//       fetchOrder()
//     }
//   }, [orderId])

//   if (error) {
//     return <div className="text-red-600">{error}</div>
//   }

//   if (!order) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
//       <p className="mb-2">Thank you for your order, {order.name}!</p>
//       <p className="mb-2">Order ID: {order.orderId}</p>
//       <p className="mb-2">Total: ${order.total.toFixed(2)}</p>
//       <p className="mb-2">Status: {order.status}</p>
//     </div>
//   )
// }
