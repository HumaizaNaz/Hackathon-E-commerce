// "use client"

// import { useState } from "react"
// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
// import { Button } from "@/components/ui/button"

// interface StripePaymentFormProps {
//   onPaymentSuccess: (paymentIntentId: string) => void
// }

// export default function StripePaymentForm({ onPaymentSuccess }: StripePaymentFormProps) {
//   const stripe = useStripe()
//   const elements = useElements()
//   const [isProcessing, setIsProcessing] = useState(false)

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault()

//     if (!stripe || !elements) {
//       return
//     }

//     setIsProcessing(true)

//     const { error, paymentIntent } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: `${window.location.origin}/payment-success`,
//       },
//       redirect: "if_required",
//     })

//     if (error) {
//       console.error(error)
//       // Show error to your customer
//     } else if (paymentIntent && paymentIntent.status === "succeeded") {
//       onPaymentSuccess(paymentIntent.id)
//     }

//     setIsProcessing(false)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <Button type="submit" disabled={!stripe || isProcessing} className="w-full mt-4">
//         {isProcessing ? "Processing..." : "Pay now"}
//       </Button>
//     </form>
//   )
// }
"use client"

import { useState } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { Button } from "@/app/ui/button"


interface StripePaymentFormProps {

  amount: number;

  onSuccess: (paymentIntentId: string) => Promise<void>;}
export default function StripePaymentForm({ amount }: StripePaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (!stripe || !elements) {
      setLoading(false)
      return
    }

    const { error: submitError } = await elements.submit()
    if (submitError) {
      setErrorMessage(submitError.message)
      setLoading(false)
      return
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
      redirect: "if_required",
    })

    if (error) {
      setErrorMessage(error.message)
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      // Handle success, e.g., update state or context
      console.log('Payment succeeded:', paymentIntent.id)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <PaymentElement />
      {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
      <Button type="submit" disabled={loading} className="w-full mt-4">
        {loading ? "Processing..." : `Pay $${amount.toFixed(2)}`}
      </Button>
    </form>
  )
}

