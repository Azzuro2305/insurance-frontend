import React from 'react'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import { DownloadPDFButton } from '../Components/InsuranceForm/DownloadPDFButton'

export const Home = () => {
  return (
    <>
        <main className="w-[1150px] mx-auto">
            <Header />

            <DownloadPDFButton />
            
        </main>
        <Footer />
    </>
  )
}
