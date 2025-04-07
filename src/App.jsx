import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import React from 'react'
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import MacBookAir from './pages/MacBookAir';
import MacBookPro from './pages/MacBookPro';
import IMac from './pages/IMac';

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/macbook_air' element={<MacBookAir />} />
            <Route path="/macbook_pro" element={<MacBookPro />} />
            <Route path="/imac" element={<IMac />} />
          </Route>
        </Routes>
    </Router>

  )
}

export default App