import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { DownloadPDFButton } from '../Components/InsuranceForm/DownloadPDFButton'
import { BuyOption } from '../Components/BuyOption/BuyOption'
import { PaymentOption } from '../Components/PaymentOption/PaymentOption'
import { PaymentInfo } from '../Components/PaymentInfo/PaymentInfo'

import Enquiry from './Enquiry'


export const Home = () => {
  return (
    <>
        <Header />
        <main className="bg-[#F1F4F8] border-b-[1px] border-gray-400">
          <section className="xs2:w-[300px] xs:w-[430px] sm:w-[540px] md:w-[930px] xl:w-[1150px] mt-[-30px] py-[50px] mx-auto">
          <BuyOption />
          </section>
            {/* <DownloadPDFButton />
            <Enquiry/>
            <Footer /> */}
            
            {/* <PaymentInfo />
            <PaymentOption /> */}
        </main>
        <Footer />
    </>
  )
}
