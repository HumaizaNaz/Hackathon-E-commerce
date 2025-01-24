import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Sanity client

// Define the type for the plan
interface SubscriptionData {
  plan: string;
  userId: string; // Or any identifier for the user
}

export async function POST(request: Request) {
  try {
    const { plan, userId }: SubscriptionData = await request.json();

    // Assuming we are saving this in a "subscriptions" document in Sanity
    const response = await client.create({
      _type: "subscription",
      userId: userId,
      plan: plan, // Store the selected plan here
    });

    return NextResponse.json({ success: true, data: response });
  } catch (error) {
    console.error("Error storing subscription data", error);
    return NextResponse.json({ success: false, error: "Failed to update subscription" });
  }
}
