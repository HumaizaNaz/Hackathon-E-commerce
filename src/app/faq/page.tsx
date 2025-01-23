'use client'
import type React from "react"
import { useState, useEffect } from "react"
import { Search, ChevronDown, ChevronUp } from "lucide-react"
import { client } from "@/sanity/lib/client"
import Link from "next/link"

interface FAQ {
  _id: string
  question: string
  answer: string
  category: string
  isTopQuestion: boolean
}

const FAQHelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [openTopFAQ, setOpenTopFAQ] = useState<string | null>(null) // State for Top FAQ
  const [openCategoryFAQs, setOpenCategoryFAQs] = useState<{
    [category: string]: string | null
  }>({}) // State for each category FAQ

  const [faqs, setFaqs] = useState<FAQ[]>([])
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    fetchFAQs()
  }, [])

  const fetchFAQs = async () => {
    const query = `
      *[_type == "faq"] {
        _id,
        question,
        answer,
        category,
        isTopQuestion
      }
    `
    try {
      const faqData = await client.fetch(query)

      // Cast the fetched data to the appropriate type
      const typedFaqData: FAQ[] = faqData as FAQ[]

      setFaqs(typedFaqData)

      // Extract unique categories from the fetched FAQs
      const uniqueCategories = [
        ...new Set(typedFaqData.map((faq) => faq.category)),
      ]
      setCategories(uniqueCategories)
    } catch (error) {
      console.error("Error fetching FAQs:", error)
    }
  }

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Function to toggle top FAQ
  const toggleTopFAQ = (faqId: string) => {
    setOpenTopFAQ(openTopFAQ === faqId ? null : faqId)
  }

  // Function to toggle category FAQ
  const toggleCategoryFAQ = (category: string, faqId: string) => {
    setOpenCategoryFAQs((prevState) => ({
      ...prevState,
      [category]: prevState[category] === faqId ? null : faqId, // Toggle the clicked FAQ
    }))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg relative">
      <h2 className="text-2xl font-bold mb-6">FAQ & Help Center</h2>
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full px-4 py-2 border rounded-md pr-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      <div className="space-y-4">
        {/* Display Top Questions First */}
        {filteredFAQs
          .filter((faq) => faq.isTopQuestion)
          .map((faq) => (
            <div key={faq._id} className="border-b pb-4">
              <button
                className="flex justify-between items-center w-full text-left font-semibold"
                onClick={() => toggleTopFAQ(faq._id)}
              >
                <span className="text-black">{faq.question} <span className="text-sm text-gray-500">[Top Question]</span></span>
                {openTopFAQ === faq._id ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
              {openTopFAQ === faq._id && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}

        {/* Display FAQs by Dynamically Fetched Categories */}
        {categories.map((category) => {
          const categoryFAQs = filteredFAQs.filter((faq) => faq.category === category)
          if (categoryFAQs.length > 0) {
            return (
              <div key={category} className="border-b pb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-semibold"
                  onClick={() => {
                    // Toggle the category to open/close all its questions dropdown
                    setOpenCategoryFAQs((prevState) => ({
                      ...prevState,
                      [category]: prevState[category] ? null : categoryFAQs[0]._id, // Open first FAQ in category (initially)
                    }))
                  }}
                >
                  <span className="text-blue-600">{category}</span>
                  {openCategoryFAQs[category] ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {openCategoryFAQs[category] && (
                  <div className="ml-4 space-y-2">
                    {categoryFAQs.map((faq) => (
                      <div key={faq._id} className="border-b pb-2">
                        <button
                          className="flex justify-between items-center w-full text-left font-semibold"
                          onClick={() => toggleCategoryFAQ(category, faq._id)}
                        >
                          <span>{faq.question}</span>
                          {openCategoryFAQs[category] === faq._id ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </button>
                        {openCategoryFAQs[category] === faq._id && (
                          <p className="mt-2 text-gray-600">{faq.answer}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          }
          return null
        })}
      </div>

      {/* Footer Section for Contact Button */}
      <footer className="mt-6 text-center">
        <h3 className="text-xl font-semibold mb-4">Need more help?</h3>
        <Link href="/contact">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
          Contact Support
        </button>
        </Link>
      </footer>
    </div>
  )
}

export default FAQHelpCenter
