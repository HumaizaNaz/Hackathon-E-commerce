'use client'
// app/subscription/[id]/page.tsx
import { useRouter } from "next/router";
import OrderForm from "@/app/subcription/order-form";

export default function SubscriptionPage() {
  const router = useRouter();
  const { productId } = router.query; // Get productId from router

  // Ensure the productId is available
  if (!productId) {
    return <div>Loading...</div>;
  }

  return <OrderForm productId={productId as string} />;
}
