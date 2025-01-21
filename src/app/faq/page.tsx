"use client"

import type React from "react"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How do I place an order?",
    answer:
      "To place an order, simply browse our products, add items to your cart, and proceed to checkout. Follow the prompts to enter your shipping and payment information.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location and chosen shipping method. Standard shipping typically takes 3-5 business days, while express shipping can take 1-2 business days.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Please contact our customer service for specific return instructions.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Shipping costs and delivery times may vary. Please check our shipping information page for more details.",
  },
]

const FAQHelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">FAQ & Help Center</h1>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="space-y-4">
        {filteredFAQs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-md">
            <button
              className="flex justify-between items-center w-full px-4 py-2 text-left focus:outline-none"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              <span className="font-medium">{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform ${expandedIndex === index ? "transform rotate-180" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {expandedIndex === index && (
              <div className="px-4 py-2 bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
        <p className="mb-4">
          If you couldn&apos;t find the answer you were looking for, please don&apos;t hesitate to contact our support team.
        </p>
        <a
          href="/contact"
          className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Contact Support
        </a>
      </div>
    </div>
  )
}

export default FAQHelpCenter

