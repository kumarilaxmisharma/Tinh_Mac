import React from 'react'
import ProductCard from '../components/sections/ProductCard'

const MacBookPro = () => {
  return (
    <>
  {/* <!-- Carousel Menu --> */}
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
        {/* <!-- Carousel wrapper --> */}
        <div class="relative h-52 overflow-hidden rounded-lg md:h-screen">
            {/* <!-- Item 1 --> */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="assets/images/macbook_pro/Macpro 14'' 16''.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            {/* <!-- Item 2 --> */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="assets/images/macbook_pro/Macpro 16''.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            {/* <!-- Item 3 --> */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="assets/images/macbook_pro/sideview.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            {/* <!-- Item 4 --> */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="assets/images/macbook_pro/Macpro.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            {/* <!-- Item 5 --> */}
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="assets/images/macbook_pro/topview.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div class="absolute z-20 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
        </div>
        {/* <!-- Slider controls --> */}
        {/* <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button> */}
    </div>

  
    {/* <!-- Gallery --> */}

        <h1 class="text-8xl font-bold text-center mt-10 text-[#004AAD]">MacBook <i className="text-white bg-[#004AAD] px-2">Pro.</i></h1>
        <h2 class="text-6xl font-medium text-center mt-8 text-gray-600">Everything In One Device</h2>

        <div class="grid grid-cols-2 gap-8 container mx-auto mt-20">
            <div>
                <img class="h-auto max-w-full rounded-4xl" src="public/images/macbook_pro/coding.jpg" alt="Coding with Macbook Pro"/>
                <h4 class="relative text-4xl font-bold text-center mt-5 text-gray-700">Coding</h4>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-4xl" src="public/images/macbook_pro/graphic_design.jpg" alt="Graphic Design with Mabook Pro"/>
                <h4 class="relative text-4xl font-bold text-center mt-5 text-gray-700">Graphic Design</h4>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-4xl" src="public/images/macbook_pro/music production.jpg" alt="Music Production with Macbook Pro"/>
                <h4 class="relative text-4xl font-bold text-center mt-5 text-gray-700">Music Production</h4>
            </div>
            <div>
                <img class="h-auto max-w-full rounded-4xl" src="public/images/macbook_pro/video_editing.jpg" alt="Video Edititng with Macbook Pro"/>
                <h4 class="relative text-4xl font-bold text-center mt-5 text-gray-700">Video Editing</h4>
            </div>
        </div>




    {/* <!-- Product Cards --> */}
    <div class="mt-20"> 
        <ProductCard />
    </div>

    </>

  )
}

export default MacBookPro