"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/app/ui/button"
import { Card, CardContent } from "@/app/ui/card"
import { Trash2 } from "lucide-react"

interface WishlistItem {
  productId: string
  name: string
  price: string
  imageUrl: string
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])

  useEffect(() => {
    fetchWishlist()
  }, [])

  const fetchWishlist = async () => {
    try {
      const response = await fetch("/api/wishlist", {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
      })
      if (!response.ok) {
        throw new Error("Failed to fetch wishlist")
      }
      const data = await response.json()
      setWishlistItems(data)
    } catch (error) {
      console.error("Error fetching wishlist:", error)
    }
  }

  const removeFromWishlist = async (productId: string) => {
    try {
      const response = await fetch("/api/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_SECRET_KEY}`,
        },
        body: JSON.stringify({ productId }),
      })
      if (!response.ok) {
        throw new Error("Failed to remove item from wishlist")
      }
      fetchWishlist()
    } catch (error) {
      console.error("Error removing from wishlist:", error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.productId}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => removeFromWishlist(item.productId)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

