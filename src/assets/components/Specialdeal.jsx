import React from 'react'

const Specialdeal = () => {
  // Data structure for special deals with images
  const deals = {
    leftColumn: [
      { title: "Special Deal", image: "public/images/Studio Display.png" },
      { title: "Special Deal", image: "public/images/Build to stand the test of time.jpg" },
      { title: "Special Deal", image: "public/images/Interaction.jpg" }
    ],
    middleColumn: [
      { title: "Special Deal", image: "public/images/connectivity_displays__er91a9b94oeq_large_2x.jpg" },
      { 
        smallDeals: [
          { title: "Special Deal", image: "public/images/Studio Display.png" },
          { title: "Special Deal", image: "public/images/Mac is build to last.jpg" }
        ]
      },
      { title: "Special Deal", image: "public/images/Everything in one .png" }
    ],
    rightColumn: [
      { title: "Special Deal", image: "public/images/mac_iphone__n2863l0ne0q6_large_2x.jpg" },
      { title: "Special Deal", image: "public/images/Kids.jpg" },
      { title: "Special Deal", image: "public/images/Performance and Battery.jpg" }
    ]
  }

  // Helper function to render a deal box with image
  const renderDealBox = (deal, aspectRatio, titleSize = "text-xl") => (
    <div className={`bg-gray-200 rounded-3xl p-6 relative overflow-hidden ${aspectRatio}`}>
      {/* Image with overlay */}
      {deal.image && (
        <div className="absolute inset-0">
          <img 
            src={deal.image || "/placeholder.svg"} 
            alt={deal.title} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder.jpg";
            }}
          />
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-opacity-30"></div>
        </div>
      )}
      
      {/* Title with z-index to appear above the image */}
      <h2 className={`${titleSize} font-bold relative z-10 text-white`}>{deal.title}</h2>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-30">
      <div className="grid grid-cols-12 gap-4">
        {/* First column */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
          {renderDealBox(deals.leftColumn[0], "aspect-[4/3]")}
          {renderDealBox(deals.leftColumn[1], "aspect-[4/5]")}
          {renderDealBox(deals.leftColumn[2], "aspect-[4/3]")}
        </div>

        {/* Middle column */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
          {/* Large top middle block */}
          {renderDealBox(deals.middleColumn[0], "aspect-[8/5]", "text-2xl")}

          {/* Two smaller blocks in middle */}
          <div className="grid grid-cols-2 gap-4">
            {renderDealBox(deals.middleColumn[1].smallDeals[0], "aspect-[4/3]")}
            {renderDealBox(deals.middleColumn[1].smallDeals[1], "aspect-[4/3]")}
          </div>

          {/* Bottom middle wide block */}
          {renderDealBox(deals.middleColumn[2], "aspect-[8/2.8]")}
        </div>

        {/* Right column */}
        <div className="col-span-12 md:col-span-3 flex flex-col gap-4">
          {renderDealBox(deals.rightColumn[0], "aspect-[4/3]")}
          {renderDealBox(deals.rightColumn[1], "aspect-[4/3]")}
          {renderDealBox(deals.rightColumn[2], "aspect-[4/5]")}
        </div>
      </div>
    </div>
  )
}

export default Specialdeal