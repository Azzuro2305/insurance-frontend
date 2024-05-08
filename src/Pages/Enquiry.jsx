import React from 'react'
import PassportSearch from '../Components/EnquirySearch/PassportSearch'
import Report from '../Components/EnquirySearch/Report'

const Enquiry = () => {
  return (
    <div className=' shadow-xl my-10'>
        <div className='p-12'>
            <PassportSearch/>
            <Report/>
        </div>
    </div>
  )
}

export default Enquiry