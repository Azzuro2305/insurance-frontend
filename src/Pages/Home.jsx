import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import PaymentInfo from '../Components/PaymentInfo/PaymentInfo'
import BuyOption from '../Components/BuyOption/BuyOption'
import Enquiry from './Enquiry'

export const Home = () => {
  return (
    <>
        <main className="xs2:w-[300px] xs:w-[430px] sm:w-[540px] md:w-[740px] medium:w-[1000px] xl:w-[1150px] mx-auto">
            {/* <Header /> */}
            <Enquiry/>
            {/* <Footer /> */}
        </main>
    </>
  )
}
