import { NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"

export async function POST(request: Request) {
  try {
    const { name, email, address, subscriptionId } = await request.json()

    const order = await client.create({
      _type: "suborder",
      name,
      email,
      address,
      subscription: { _type: "reference", _ref: subscriptionId },
      date: new Date().toISOString(),
    })

    return NextResponse.json({ success: true, orderId: order._id })
  } catch (error) {
    console.error("Error placing order:", error)
    return NextResponse.json({ success: false, error: "Failed to place order" }, { status: 500 })
  }
}

