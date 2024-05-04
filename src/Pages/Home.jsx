import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import Enquiry from './Enquiry'

export const Home = () => {
  return (
    <>
        <main className="w-[1150px] mx-auto">
            <Header />
            <Enquiry/>
            <Footer />
        </main>
    </>
  )
}
