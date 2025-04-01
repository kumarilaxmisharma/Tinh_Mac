import React from 'react'
import Navbar from '/src/assets/components/Navbar';
import Footer from '/src/assets/components/Footer';
import Specialdeal from '/src/assets/components/Specialdeal';
import ProductCard from '/src/assets/components/ProductCard';

function App() {
  return (
  <>
    <div className="bg-gray-100">
    <Navbar />
    <Specialdeal />
    <ProductCard />
    <Footer />

    </div>
  </>
  )
}

export default App