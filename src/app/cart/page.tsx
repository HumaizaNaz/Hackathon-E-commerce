"use client"

import Image from "next/image"
import { Heart, Trash2 } from "lucide-react"
import { Button } from "@/app/ui/button"
import { Card, CardContent } from "@/app/ui/card"
import { Separator } from "@/app/ui/seperator"
import Link from "next/link"
import { useEffect, useState } from "react"

interface CartItem {
  productId: string
  quantity: number
  name: string
  price: string
  imageUrl: string
  size?: string
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
    try {
      const response = await fetch("/api/cart", {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
      })
      if (!response.ok) {
        throw new Error("Failed to fetch cart")
      }
      const data = await response.json()
      setCartItems(data)
    } catch (error) {
      console.error("Error fetching cart:", error)
    }
  }

  const handleRemoveItem = async (productId: string) => {
    try {
      const response = await fetch("/api/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
        body: JSON.stringify({ productId }),
      })
      if (!response.ok) {
        throw new Error("Failed to remove item from cart")
      }
      fetchCart()
    } catch (error) {
      console.error("Error removing item from cart:", error)
    }
  }

  const handleQuantity = async (productId: string, newQuantity: number) => {
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
        body: JSON.stringify({ productId, quantity: newQuantity }),
      })
      if (!response.ok) {
        throw new Error("Failed to update item quantity")
      }
      fetchCart()
    } catch (error) {
      console.error("Error updating item quantity:", error)
    }
  }

  const handleWishList = async (item: CartItem) => {
    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
        body: JSON.stringify(item),
      })
      if (!response.ok) {
        throw new Error("Failed to add item to wishlist")
      }
      // Optionally, you can show a success message here
    } catch (error) {
      console.error("Error adding item to wishlist:", error)
    }
  }

  const subtotal = cartItems.reduce((total, item) => total + Number(item.price) * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8 mt-[99px]">
      {/* Free Delivery Banner */}
      <div className="mb-8 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Free Delivery</p>
          <p className="text-sm text-gray-600">Applies to orders of ₹ 14,000.00 or more.</p>
          <Link href={"/shipment"}>
            <Button variant="link" className="text-sm">
              View details
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <h1 className="text-2xl font-medium mb-6">My Cart</h1>
          <div className="space-y-6">
            {cartItems.map((item: CartItem) => (
              <Card key={item.productId}>
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-md">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        width={200}
                        height={200}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-md mb-4 md:mb-0"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {item.size && <p className="text-sm text-gray-600">Size: {item.size}</p>}
                          <div className="mt-2 space-y-1">
                            <div className="flex gap-4">
                              <p className="text-sm">Quantity:</p>
                              <input
                                className="bg-slate-200 rounded pl-2 text-black w-12"
                                type="number"
                                min={1}
                                value={item.quantity}
                                onChange={(e) => handleQuantity(item.productId, +e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <p className="text-sm">MRP: ₹ {(Number(item.price) * item.quantity).toFixed(2)}</p>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <Button variant="ghost" size="sm" onClick={() => handleWishList(item)}>
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleRemoveItem(item.productId)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div>
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-medium mb-4">Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">₹ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Estimated Delivery & Handling</span>
                  <span className="text-sm">Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹ {subtotal.toFixed(2)}</span>
                </div>
                <Link href={"/checkout"}>
                  <Button className="w-full">Checkout</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

