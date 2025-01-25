// "use client"
// import React, { useState, useEffect } from "react"
// import { Montserrat } from "next/font/google"
// import { useRouter } from "next/navigation"
// import { client } from "@/sanity/lib/client"

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   weight: ["400", "500", "600"],
// })

// interface Subscription {
//   _id: string
//   name: string
//   description: string
//   price: number
//   features: string[]
//   isPopular: boolean
// }

// const SubscriptionManagement = () => {
//   const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
//   const router = useRouter()

//   useEffect(() => {
//     const fetchSubscriptions = async () => {
//       const query = `*[_type == "subscription"] | order(name asc) {  
//         _id,
//         name,
//         description,
//         price,
//         features,
//         isPopular
//       }`
//       const fetchedSubscriptions = await client.fetch(query)
//       setSubscriptions(fetchedSubscriptions)
//     }

//     fetchSubscriptions()
//   }, [])

//   const handleCardClick = (subscriptionId: string) => {
//     router.push(`/subcription/${subscriptionId}`)
//   }

//   return (
//     <div className={`${montserrat.className} bg-white pt-5`} id="pricing">
//       <div className="mx-auto pb-20 bg-white mt-4 max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-4xl text-center">
//           <h2 className="text-2xl font-semibold text-gray-800">Choose Your Plan</h2>
//         </div>
//         <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
//           Choose the subscription that works best for you.
//         </p>
//         <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
//           {subscriptions.map((subscription, index) => {
//             const isCenterCard = index === Math.floor(subscriptions.length / 2)
//             return (
//               <div
//                 key={subscription._id}
//                 className={`ring-1 ${
//                   subscription.isPopular ? "bg-[#252B42] ring-2 ring-[#1E2332]" : "ring-gray-300"
//                 } rounded-3xl p-8 xl:p-10 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer transform ${
//                   isCenterCard ? "bg-dark-navy" : "" // Apply the custom dark navy color
//                 }`}
//                 onClick={() => handleCardClick(subscription._id)}
//               >
//                 <div className="flex items-center justify-between gap-x-4">
//                   <h2
//                     id={`subcription-${subscription._id}`}
//                     className={`text-lg font-semibold text-center leading-8 ${
//                       isCenterCard ? "text-white" : subscription.isPopular ? "text-white" : "text-gray-800"
//                     }`}
//                   >
//                     {subscription.name}
//                   </h2>
//                   {subscription.isPopular && (
//                     <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
//                       Most popular
//                     </p>
//                   )}
//                 </div>
//                 <p className={`mt-4 text-sm leading-6 ${isCenterCard ? "text-gray-200" : subscription.isPopular ? "text-gray-200" : "text-gray-600"}`}>
//                   {subscription.description}
//                 </p>
//                 <p className="mt-6 flex items-baseline gap-x-1">
//                   <span className="text-4xl font-bold tracking-tight text-blue-500">
//                     € {subscription.price} per/month
//                   </span>
//                 </p>
//                 <a
//                   href={`/subcription/${subscription._id}`}
//                   aria-describedby={`subscription-${subscription._id}`}
//                   className="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
//                 >
//                   Order Now
//                 </a>
//                 <ul
//                   role="list"
//                   className={`mt-8 space-y-3 text-sm leading-6 ${isCenterCard ? "text-gray-200" : subscription.isPopular ? "text-gray-200" : "text-gray-600"} xl:mt-10`}
//                 >
//                   {subscription.features.map((feature, index) => (
//                     <li key={index} className="flex gap-x-3">
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SubscriptionManagement
"use client"

import React, { useState, useEffect } from "react"
import { Montserrat } from "next/font/google"
import { useRouter } from "next/navigation"
import { client } from "@/sanity/lib/client"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

interface Subscription {
  _id: string
  name: string
  description: string
  price: number
  features: string[]
  isPopular: boolean
}

const SubscriptionManagement = () => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const query = `*[_type == "subscription"] | order(name asc) {  
        _id,
        name,
        description,
        price,
        features,
        isPopular
      }`
      const fetchedSubscriptions = await client.fetch(query)
      setSubscriptions(fetchedSubscriptions)
    }

    fetchSubscriptions()
  }, [])

  const handleCardClick = (subscriptionId: string) => {
    router.push(`/subscription/${subscriptionId}`)
  }

  return (
    <div className={`${montserrat.className} bg-white pt-5`} id="pricing">
      <div className="mx-auto pb-20 bg-white mt-4 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Choose Your Plan</h2>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose the subscription that works best for you.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {subscriptions.map((subscription, index) => {
            const isCenterCard = index === Math.floor(subscriptions.length / 2)
            return (
              <div
                key={subscription._id}
                className={`ring-1 ${
                  subscription.isPopular ? "bg-[#252B42] ring-2 ring-[#1E2332]" : "ring-gray-300"
                } rounded-3xl p-8 xl:p-10 transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer transform ${
                  isCenterCard ? "bg-dark-navy" : ""
                }`}
                onClick={() => handleCardClick(subscription._id)}
              >
                <div className="flex items-center justify-between gap-x-4">
                  <h2
                    id={`subscription-${subscription._id}`}
                    className={`text-lg font-semibold text-center leading-8 ${
                      isCenterCard ? "text-white" : subscription.isPopular ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {subscription.name}
                  </h2>
                  {subscription.isPopular && (
                    <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                      Most popular
                    </p>
                  )}
                </div>
                <p
                  className={`mt-4 text-sm leading-6 ${isCenterCard ? "text-gray-200" : subscription.isPopular ? "text-gray-200" : "text-gray-600"}`}
                >
                  {subscription.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-blue-500">
                    € {subscription.price} per/month
                  </span>
                </p>
                <a
                  href={`/subscription/${subscription._id}`}
                  aria-describedby={`subscription-${subscription._id}`}
                  className="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6"
                >
                  Order Now
                </a>
                <ul
                  role="list"
                  className={`mt-8 space-y-3 text-sm leading-6 ${isCenterCard ? "text-gray-200" : subscription.isPopular ? "text-gray-200" : "text-gray-600"} xl:mt-10`}
                >
                  {subscription.features.map((feature, index) => (
                    <li key={index} className="flex gap-x-3">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SubscriptionManagement

