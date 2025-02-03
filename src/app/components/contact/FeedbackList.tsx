// "use client"
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// interface Feedback {
//   _id: string;
//   name: string;
//   email: string;
//   rating: number;
//   comment: string;
//   createdAt: string;
// }

// export default function FeedbackList() {
//   const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentFeedback, setCurrentFeedback] = useState<Feedback | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     fetchFeedbacks();
//   }, []);

// // Fetch function
// const fetchFeedbacks = async () => {
//   try {
//     const response = await fetch('/api/feedback');
//     if (!response.ok) {
//       throw new Error('Failed to fetch feedbacks');
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error("Error:", error.message);  // Detailed error message
//     } else {
//       console.error("Unknown error:", error);
//     }
//   }
// };

//   const handleDelete = async (id: string) => {
//     if (window.confirm("Are you sure you want to delete this feedback?")) {
//       try {
//         const response = await fetch(`/api/feedback?id=${id}`, { method: "DELETE" });
//         if (response.ok) {
//           setFeedbacks(feedbacks.filter((feedback) => feedback._id !== id));
//           router.refresh();
//         } else {
//           console.error("Failed to delete feedback");
//         }
//       } catch (error) {
//         console.error("Error deleting feedback:", error);
//       }
//     }
//   };

//   const handleEdit = (feedback: Feedback) => {
//     setIsEditing(true);
//     setCurrentFeedback(feedback);
//   };

//   const handleUpdate = async (updatedFeedback: Feedback) => {
//     try {
//       const response = await fetch("/api/feedback", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedFeedback),
//       });
//       if (response.ok) {
//         setIsEditing(false);
//         setCurrentFeedback(null);
//         fetchFeedbacks();
//       } else {
//         console.error("Failed to update feedback");
//       }
//     } catch (error) {
//       console.error("Error updating feedback:", error);
//     }
//   };

//   return (
//     <div className="space-y-4 mt-8">
//       <h2 className="text-2xl font-bold">Customer Feedback</h2>
//       {feedbacks.map((feedback) => (
//         <div key={feedback._id} className="bg-white shadow rounded-lg p-6">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-lg font-semibold">{feedback.name}</h3>
//               <p className="text-gray-600">{new Date(feedback.createdAt).toLocaleDateString()}</p>
//             </div>
//             <div className="flex items-center">
//               <span className="text-yellow-500 mr-1">★</span>
//               <span>{feedback.rating}</span>
//             </div>
//           </div>
//           <p className="mt-2">{feedback.comment}</p>
//           <button
//             onClick={() => handleEdit(feedback)}
//             className="mt-2 text-blue-600 hover:text-blue-800"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => handleDelete(feedback._id)}
//             className="mt-2 text-red-600 hover:text-red-800"
//           >
//             Delete
//           </button>
//         </div>
//       ))}

//       {/* Edit Feedback Modal */}
//       {isEditing && currentFeedback && (
//         <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg">
//             <h3 className="text-xl font-semibold">Edit Feedback</h3>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleUpdate(currentFeedback);
//               }}
//             >
//               <input
//                 type="text"
//                 value={currentFeedback.name}
//                 onChange={(e) => setCurrentFeedback({ ...currentFeedback, name: e.target.value })}
//                 className="w-full p-2 mb-2"
//                 placeholder="Name"
//               />
//               <input
//                 type="email"
//                 value={currentFeedback.email}
//                 onChange={(e) => setCurrentFeedback({ ...currentFeedback, email: e.target.value })}
//                 className="w-full p-2 mb-2"
//                 placeholder="Email"
//               />
//               <textarea
//                 value={currentFeedback.comment}
//                 onChange={(e) => setCurrentFeedback({ ...currentFeedback, comment: e.target.value })}
//                 className="w-full p-2 mb-2"
//                 placeholder="Comment"
//               />
//               <input
//                 type="number"
//                 value={currentFeedback.rating}
//                 onChange={(e) =>
//                   setCurrentFeedback({
//                     ...currentFeedback,
//                     rating: isNaN(Number(e.target.value)) ? 1 : Math.max(1, Math.min(5, Number(e.target.value))),
//                   })
//                 }
//                 className="w-full p-2 mb-2"
//                 placeholder="Rating"
//                 min={1}
//                 max={5}
//               />
//               <button type="submit" className="mt-2 bg-blue-600 text-white p-2 rounded">
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setIsEditing(false)}
//                 className="mt-2 text-red-600 hover:text-red-800"
//               >
//                 Cancel
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client"

import { useEffect, useState } from "react"
import { client } from "@/sanity/lib/client"

interface Feedback {
  _id: string
  name: string
  email: string
  rating: number
  comment: string
  createdAt: string
}

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getFeedbacks() {
      try {
        const result = await client.fetch('*[_type == "feedback"] | order(createdAt desc)')
        setFeedbacks(result)
      } catch (err) {
        console.error("Error fetching feedbacks:", err)
        setError("Failed to load feedbacks. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    getFeedbacks()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div className="text-red-500">{error}</div>

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All Feedback</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-600">No feedback submitted yet.</p>
      ) : (
        <div className="space-y-4">
          {feedbacks.map((feedback) => (
            <div key={feedback._id} className="bg-white shadow-md rounded p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-lg">{feedback.name}</p>
                  <p className="text-gray-600 text-sm">{feedback.email}</p>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-2xl ${star <= feedback.rating ? "text-yellow-400" : "text-gray-300"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-700">{feedback.comment}</p>
              <p className="text-sm text-gray-500 mt-2">{new Date(feedback.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

