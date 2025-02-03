"use client"

import { useState , useEffect} from "react"
import FeedbackForm from "@/app/components/contact/FeedbackForm"
import FeedbackList from "@/app/components/contact/FeedbackList"

// export default function FeedbackManager() {

//   const [refreshKey] = useState(0)

//   return (
//     <main className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Feedback System</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         <div>
//           <h2 className="text-2xl font-bold mb-4">Submit Feedback</h2>
//           <FeedbackForm onFeedbackSubmitted={function (): void {
//                       throw new Error("Function not implemented.")
//                   } }/>
//         </div>
//         <div>
//           <FeedbackList key={refreshKey} />
//         </div>
//       </div>
//     </main>
//   )
// }




export default function FeedbackManager() {
  const [shouldRefresh, setShouldRefresh] = useState(false)

  const handleSubmitSuccess = () => {
    setShouldRefresh(true)
  }

  useEffect(() => {
    if (shouldRefresh) {
      setShouldRefresh(false)
    }
  }, [shouldRefresh])

  return (
    <div>
      <FeedbackForm onSubmitSuccess={handleSubmitSuccess} />
      <FeedbackList key={shouldRefresh ? "refresh" : "initial"} />
    </div>
  )
}

