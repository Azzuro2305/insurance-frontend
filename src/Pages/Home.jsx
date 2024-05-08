import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'

export const Home = () => {
  return (
    <>
        <main className="xs2:w-[300px] xs:w-[430px] sm:w-[540px] md:w-[930px] xl:w-[1150px] mx-auto">
            <Header />
            <Footer />
        </main>
    </>
  )
}
