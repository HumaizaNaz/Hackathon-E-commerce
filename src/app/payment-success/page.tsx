"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/app/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/ui/card"

export default function PaymentSuccess() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [orderId, setOrderId] = useState<string | null>(null)

  useEffect(() => {
    const paymentIntentId = searchParams.get("payment_intent")
    const orderIdParam = searchParams.get("order_id")

    if (paymentIntentId) {
      // Fetch order details using Stripe payment intent ID
      fetchOrderDetails(paymentIntentId, "stripe")
    } else if (orderIdParam) {
      // This is for Cash on Delivery
      setOrderId(orderIdParam)
    }
  }, [searchParams])

  const fetchOrderDetails = async (id: string, type: "stripe" | "cod") => {
    try {
      const response = await fetch(`/api/orders/by-payment/${id}?type=${type}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
      })
      if (response.ok) {
        const data = await response.json()
        setOrderId(data.orderId)
      } else {
        console.error("Failed to fetch order details")
      }
    } catch (error) {
      console.error("Error fetching order details:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Order Confirmed</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Thank you for your order!</p>
          {orderId && <p className="mb-4">Your order ID is: {orderId}</p>}
          <Button onClick={() => router.push("/")}>Continue Shopping</Button>
        </CardContent>
      </Card>
    </div>
  )
}

