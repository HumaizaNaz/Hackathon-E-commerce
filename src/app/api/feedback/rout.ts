import { NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"

interface Feedback {
  name: string
  email: string
  rating: number
  comment: string
}

export async function POST(request: Request) {
  try {
    const { feedback } = (await request.json()) as { feedback: Feedback }

    if (!feedback) {
      return NextResponse.json({ message: "Invalid request data." }, { status: 400 })
    }

    const newFeedback = {
      ...feedback,
      _type: "feedback",
      createdAt: new Date().toISOString(),
    }

    // Save feedback to Sanity
    const createdFeedback = await client.create(newFeedback)

    return NextResponse.json({ message: "Feedback submitted successfully!", createdFeedback }, { status: 200 })
  } catch (error) {
    console.error("Error submitting feedback:", error)
    return NextResponse.json({ message: "Failed to submit feedback.", error: String(error) }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Fetch all feedbacks from Sanity
    const feedbacks = await client.fetch('*[_type == "feedback"] | order(createdAt desc)')
    return NextResponse.json({ feedbacks }, { status: 200 })
  } catch (error) {
    console.error("Error fetching feedback:", error)
    return NextResponse.json({ message: "Failed to fetch feedback.", error: String(error) }, { status: 500 })
  }
}

