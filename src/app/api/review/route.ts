import { NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"

interface Review {
  name: string
  rating: number
  comment: string
}

export async function POST(request: Request) {
  try {
    const { productId, review } = (await request.json()) as {
      productId: string
      review: Review
    }

    if (!productId || !review) {
      return NextResponse.json({ message: "Invalid request data." }, { status: 400 })
    }

    const newReview = {
      ...review,
      date: new Date().toISOString(),
    }

    const updatedProduct = await client
      .patch(productId)
      .setIfMissing({ reviews: [] })
      .append("reviews", [newReview])
      .commit({ token: process.env.SANITY_WRITE_TOKEN })

    return NextResponse.json({ message: "Review submitted successfully!", updatedProduct }, { status: 200 })
  } catch (error) {
    console.error("Error submitting review:", error)
    return NextResponse.json({ message: "Failed to submit review." }, { status: 500 })
  }
}

