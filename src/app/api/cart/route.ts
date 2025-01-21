import { NextResponse } from "next/server"

interface CartItem {
  productId: string
  quantity: number
  name: string
  price: string
  imageUrl: string
  size?: string
}

let cart: CartItem[] = [] // This can be replaced with a database in a real app.

const API_SECRET_KEY = process.env.API_SECRET_KEY

function isAuthorized(request: Request) {
  const authHeader = request.headers.get("Authorization")
  return authHeader === `Bearer ${API_SECRET_KEY}`
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  return NextResponse.json(cart)
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const item: CartItem = await request.json()

  const existingItemIndex = cart.findIndex((cartItem) => cartItem.productId === item.productId)
  if (existingItemIndex !== -1) {
    cart[existingItemIndex].quantity += item.quantity
  } else {
    cart.push(item)
  }

  return NextResponse.json(cart)
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { productId }: { productId: string } = await request.json()
  cart = cart.filter((item) => item.productId !== productId)
  return NextResponse.json(cart)
}

