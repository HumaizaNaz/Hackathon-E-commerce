// import { NextResponse } from "next/server"

// interface WishlistItem {
//   productId: string
//   name: string
//   price: string
//   imageUrl: string
// }

// let wishlist: WishlistItem[] = [] // This can be replaced with a database in a real app.

// const API_SECRET_KEY = process.env.API_SECRET_KEY

// function isAuthorized(request: Request) {
//   const authHeader = request.headers.get("Authorization")
//   return authHeader === `Bearer ${API_SECRET_KEY}`
// }

// export async function GET(request: Request) {
//   if (!isAuthorized(request)) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
//   }
//   return NextResponse.json(wishlist)
// }

// export async function POST(request: Request) {
//   if (!isAuthorized(request)) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
//   }

//   const item: WishlistItem = await request.json()

//   // Check if product is already in the wishlist
//   const existingItemIndex = wishlist.findIndex((i) => i.productId === item.productId)
//   if (existingItemIndex === -1) {
//     wishlist.push(item) // Add new item to wishlist
//   }

//   return NextResponse.json(wishlist)
// }

// export async function DELETE(request: Request) {
//   if (!isAuthorized(request)) {
//     return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
//   }

//   const { productId }: { productId: string } = await request.json()
//   wishlist = wishlist.filter((item) => item.productId !== productId)
//   return NextResponse.json(wishlist)
// }

import { NextResponse } from "next/server"

interface WishlistItem {
  productId: string
  name: string
  price: string
  imageUrl: string
}

let wishlist: WishlistItem[] = [] // Ideally, use a database

const API_SECRET_KEY = process.env.API_SECRET_KEY

function isAuthorized(request: Request) {
  const authHeader = request.headers.get("Authorization")
  return authHeader === `Bearer ${API_SECRET_KEY}`
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  return NextResponse.json(wishlist)
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const item: WishlistItem = await request.json()

    if (!item.productId || !item.name || !item.price || !item.imageUrl) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 })
    }

    const exists = wishlist.some((i) => i.productId === item.productId)
    if (!exists) {
      wishlist.push(item)
    }

    return NextResponse.json(wishlist)
  } catch {
    return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 })
  }
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { productId } = await request.json()

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 })
    }

    wishlist = wishlist.filter((item) => item.productId !== productId)
    return NextResponse.json(wishlist)
  } catch {
    return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 })
  }
}
