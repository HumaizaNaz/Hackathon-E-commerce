"use client"

import React from "react"
import { FaEnvelope, FaLocationDot } from "react-icons/fa6"
import { IoCallOutline } from "react-icons/io5"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const Card = () => {
  return (
    <div className={`${montserrat.className} bg-white pt-5`} id="pricing">
      {/* Header Section */}
      <header className="text-center py-10">
        <h4 className="text-lg mb-6 font-bold text-blue-600">VISIT OUR OFFICE</h4>
        <h1 className="text-4xl font-bold max-w-3xl mx-auto">We help small businesses with big ideas</h1>
      </header>

      <div className="mx-auto pb-20 bg-white mt-4 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Call Card */}
          <div className="ring-1 ring-gray-300 rounded-3xl p-8 xl:p-10 min-h-[400px] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center">
                <IoCallOutline
                  className="text-blue-500 text-8xl font-bold cursor-pointer"
                  onClick={() => (window.location.href = "tel:03120119537")}
                />
              </div>
              <p className="mt-6 text-xl font-bold leading-6 text-black text-center">03120119537</p>
              <p className="mt-2 text-sm font-medium leading-6 text-gray-600 text-center">(012) 3899076</p>
              <p className="mt-4 text-lg font-bold leading-6 text-blue-600 text-center">Call us</p>
            </div>
            <button
              onClick={() => (window.location.href = "tel:03120119537")}
              className="mt-6 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold"
            >
              Call Now
            </button>
          </div>

          {/* Location Card */}
          <div className="ring-1 ring-gray-300 bg-[#252B42] rounded-3xl p-8 xl:p-10 min-h-[400px] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center">
                <FaLocationDot
                  className="text-blue-500 text-8xl font-bold cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://www.google.com/maps/search/?api=1&query=house+number+L123+sector+5A1+north+karachi",
                      "_blank",
                    )
                  }
                />
              </div>
              <p className="mt-6 text-xl font-bold leading-6 text-white text-center">
                House number L123 sector 5A1 north karachi
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-gray-300 text-center">Near Makkah hotel</p>
              <p className="mt-4 text-lg font-bold leading-6 text-blue-400 text-center">Meet us</p>
            </div>
            <button
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/search/?api=1&query=house+number+L123+sector+5A1+north+karachi",
                  "_blank",
                )
              }
              className="mt-6 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold"
            >
              View on Map
            </button>
          </div>

          {/* Email Card */}
          <div className="ring-1 ring-gray-300 rounded-3xl p-8 xl:p-10 min-h-[400px] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-center">
                <FaEnvelope
                  className="text-blue-500 text-8xl font-bold cursor-pointer"
                  onClick={() => (window.location.href = "mailto:georgia.young@example.com")}
                />
              </div>
              <p className="mt-6 text-xl font-bold leading-6 text-black text-center">georgia.young@example.com</p>
              <p className="mt-2 text-sm font-medium leading-6 text-gray-600 text-center">georgia.young@example.com</p>
              <p className="mt-4 text-lg font-bold leading-6 text-blue-600 text-center">Get support</p>
            </div>
            <button
              onClick={() => (window.location.href = "mailto:georgia.young@example.com")}
              className="mt-6 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-lg font-semibold"
            >
              Send Email
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center py-10 bg-gray-100">
        <p className="text-lg text-gray-600">We can&apos;t wait to meet you</p>
        <h2 className="text-3xl font-bold mt-2 text-blue-600">Let&apos;s Talk</h2>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300 mt-6 text-lg font-semibold">
          Try it now
        </button>
      </footer>
    </div>
  )
}

export default Card

