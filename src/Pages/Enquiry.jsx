import React, { useState } from 'react'
import { Header } from '../Components/Header/Header'
import { Footer } from '../Components/Footer/Footer'
import PassportSearch from '../Components/EnquirySearch/PassportSearch'
import Report from '../Components/EnquirySearch/Report'

const Enquiry = () => {
  const [ searchResult, setSearchResult ] = useState([]);
  const [ submitted, setSubmitted ] = useState(false);
  // console.log(submitted);
  console.log(searchResult);
  return (
    // <div className=' shadow-xl my-10'>
    //     <div className='p-12'>
    //         <PassportSearch/>
    //         <Report/>
    //     </div>
    // </div>
<>
<Header />
<main className="bg-[#F1F4F8] border-b-[1px] border-gray-400">
        <section className="xs2:w-[300px] xs:w-[440px] sm:w-[630px] md:w-[720px] mid:w-[960px] medium:w-[1150px] mt-[-30px] py-[50px] mx-auto">
          {/* <PassportSearch searchResult={searchResult} setSearchResult={setSearchResult} submitted={submitted} setSubmitted={setSubmitted} />
  {submitted && <Report searchResult={searchResult} />} */}
          <div className=' shadow-xl my-10'>
            <div className='xs2:p-5 md:p-12'>
              <PassportSearch searchResult={searchResult} setSearchResult={setSearchResult} submitted={submitted} setSubmitted={setSubmitted} />
              {submitted && <Report searchResult={searchResult} />}
            </div>
          </div>
        </section>
      </main>
<Footer />
</>
  )
}

export default Enquiry