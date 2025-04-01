

import { Heart } from "lucide-react"
import { useState } from "react"

export default function ProductCard() {
  const [currentPage, setCurrentPage] = useState(1)

  // Sample product data with images
  const products = [
    {
      name: "IMac",
      price: "$1,200",
      rating: 4.8,
      description:
        "Apple M-series chip. It delivers lightning-fast processing, all-day battery life, and pro-grade graphics",
      image: "public/images/IMac carousel.jpg", // Replace with your actual image paths
    },
    {
      name: "MacBook Air",
      price: "$1,200",
      rating: 4.8,
      description:
        "Apple M-series chip. It delivers lightning-fast processing, all-day battery life, and pro-grade graphics",
      image: "public/images/Macbook Air.jpeg",
    },
    {
      name: "Macbook Pro 14'' 16''",
      price: "$1,200",
      rating: 4.8,
      description:
        "Apple M-series chip. It delivers lightning-fast processing, all-day battery life, and pro-grade graphics",
      image: "public/images/Macbook Pro 14'' 16''.png",
    },
    {
      name: "MacBook Pro",
      price: "$1,200",
      rating: 4.8,
      description:
        "Apple M-series chip. It delivers lightning-fast processing, all-day battery life, and pro-grade graphics",
      image: "public/images/IMac M4 chip.png",
    },
    {
      name: "MacBook Pro",
      price: "$1,200",
      rating: 4.8,
      description:
        "Apple M-series chip. It delivers lightning-fast processing, all-day battery life, and pro-grade graphics",
      image: "public/images/Pro Display XDR.jpeg",
    },
    {
      name: "MacBook Pro",
      price: "$1,200",
      rating: 4.8,
      description:
        "Apple M-series chip. It delivers lightning-fast processing, all-day battery life, and pro-grade graphics",
      image: "public/images/Studio Display.png",
    },
  ]

  const totalPages = 6

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-bold mb-10">Popular Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-[28px] p-4 relative">
            <button className="absolute top-3 right-3 text-red-400 hover:text-red-600 transition-all 
            duration-300 z-10">
              <Heart className="h-6 w-6" />
            </button>

            {/* Product image */}
            <div className="h-40 mb-4 overflow-hidden rounded-md bg-white">
              <img
                src={product.image || "/placeholder.svg?height=160&width=240"}
                alt={product.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "/placeholder.svg?height=160&width=240"
                }}
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <h3 className="font-[24px] font-bold">{product.name}</h3>
                <div className="flex items-center">
                  <span className="text-[18px] mr-1 text-amber-400">★</span>
                  <span className="text-[18px]">{product.rating}</span>
                </div>
              </div>

              <p className="font-bold">{product.price}</p>

              <p className="text-xs text-gray-700">{product.description}</p>

              <button className="mt-2 py-2 px-3 border bg-gray-900 rounded-[28px] text-sm text-white hover:bg-gray-500 transition-colors">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10 space-x-2">
        <button
          onClick={handlePrevPage}
          className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`h-10 w-10 rounded-full flex items-center justify-center ${
              currentPage === index + 1 ? "bg-gray-800 text-white" : "hover:bg-gray-100"
            }`}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}

        <button
          onClick={handleNextPage}
          className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
        >
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

