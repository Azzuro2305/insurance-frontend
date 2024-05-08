import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../../Pages/Home';
import { BuyOutboundTravelInsurance } from '../../Pages/BuyOutboundTravelInsurance';
import { PDFFormat } from '../PDFFormat/PDFFormat';
// import { About } from '../../Pages/About';
// import { Insurance } from '../../Pages/Insurance';
// import { Customer } from '../../Pages/Customer';
// import { News } from '../../Pages/News';
// import { Contact } from '../../Pages/Contact';

export const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy-online-outbound-travel-accident-insurance" element={<BuyOutboundTravelInsurance />} />
            <Route path="/pdf" element={<PDFFormat />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} /> */}
            
            </Routes>
        </BrowserRouter>
    </>
  )
}
