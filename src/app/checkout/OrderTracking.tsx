"use client"

import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"

interface OrderTrackingProps {
  orderId: string
}

export default function OrderTracking({ orderId }: OrderTrackingProps) {
  const [orderStatus, setOrderStatus] = useState("Processing")
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchOrderStatus = async () => {
      try {
        const order = await client.fetch(
          `*[_type == "order" && _id == $orderId][0]{
            status,
            email
          }`,
          { orderId },
        )

        if (!order) {
          setError("Order not found")
          return
        }

        // Check if the order belongs to the current user
        const userEmail = localStorage.getItem("userEmail") // Assuming you store the user's email in localStorage after login
        if (order.email !== userEmail) {
          setError("You are not authorized to view this order")
          return
        }

        setOrderStatus(order.status)
      } catch (error) {
        console.error("Error fetching order status:", error)
        setError("Failed to fetch order status")
      }
    }

    fetchOrderStatus()
    const interval = setInterval(fetchOrderStatus, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [orderId])

  if (error) {
    return <div className="text-red-600">{error}</div>
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Order Status</h2>
      <p className="text-lg">
        Current status: <span className="font-bold">{orderStatus}</span>
      </p>
    </div>
  )
}

