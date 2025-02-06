// import { type NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
// if (!stripeSecretKey) {
//   throw new Error("Stripe secret key is not defined");
// }

// const stripe = new Stripe(stripeSecretKey, {
//   apiVersion: "2025-01-27.acacia", // Ensure API version is correct
// });

// export async function POST(request: NextRequest) {
//   try {
//     const { amount } = await request.json();

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: "usd",
//       automatic_payment_methods: { enabled: true },
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   } catch (err: unknown) {
//     if (err instanceof Error) {
//       return NextResponse.json(
//         { error: err.message },
//         { status: 500 }
//       );
//     }
//     return NextResponse.json(
//       { error: "An unknown error occurred" },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from "next/server"
// import Stripe from "stripe"

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-01-27.acacia",
// })

// export async function POST(request: Request) {
//   try {
//     const { amount } = await request.json()

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency: "inr",
//       automatic_payment_methods: { enabled: true },
//     })

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret })
//   } catch (err) {
//     console.error(err)
//     return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
//   }
// }

import { type NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error("Stripe secret key is not defined");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16" as Stripe.LatestApiVersion, // Use the correct type for apiVersion
});

export async function POST(request: NextRequest) {
  try {
    console.log("Incoming request to create payment intent...");
    const body = await request.json();
    console.log("Request body:", body);

    const { amount } = body;
    if (!amount || typeof amount !== "number") {
      return NextResponse.json({ error: "Invalid or missing amount" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    console.log("Payment Intent Created:", paymentIntent.id);
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Error creating payment intent:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "An unknown error occurred" },
      { status: 500 }
    );
  }
}
