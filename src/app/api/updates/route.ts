import { NextResponse } from "next/server"

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder()

      const sendUpdate = (type: "cart" | "wishlist", count: number) => {
        const data = JSON.stringify({ type, count })
        controller.enqueue(encoder.encode(`data: ${data}\n\n`))
      }

      // Simulate updates (replace this with your actual update logic)
      const interval = setInterval(() => {
        sendUpdate("cart", Math.floor(Math.random() * 10))
        sendUpdate("wishlist", Math.floor(Math.random() * 5))
      }, 5000)

      return () => {
        clearInterval(interval)
      }
    },
  })

  return new NextResponse(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  })
}

