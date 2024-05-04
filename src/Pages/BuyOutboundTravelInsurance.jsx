import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { OutboundTravelInsuranceForm } from '../Components/InsuranceForm/OutboundTravelInsuranceForm'

export const BuyOutboundTravelInsurance = () => {
  return (
    <>
        <main >
            <Header />
            <section className="bg-[#F1F4F8] z-[5] mt-[-30px] py-[50px]">
              <h1 className="text-[#214C9B] font-semibold text-[20px] my-4 text-center">OUTBOUND TRAVEL ACCIDENT INSURANCE (USD)</h1>
              <OutboundTravelInsuranceForm />
            </section>
        </main>
        <Footer />
    </>
  )
}
