import React from 'react'
import { DownloadPDFButton } from '../InsuranceForm/DownloadPDFButton' 

const Report = ({ searchResult, setSearchResult }) => {
  return (
    <div>
        <h1 className=' text-xl text-[#214C9B] font-[630] mb-4 tracking-tight'>
          Inbound Travel Accident Insurance Purchase History
        </h1>
        <div className='xs2:overflow-x-scroll lg:overflow-hidden'>
        <table className='text-center w-full border border-gray-300'>
          <thead className=' bg-[#214C9B] text-white'>
            <tr className=' xs2:text-sm md:text-lg'>
              <th scope='col' className='px-2 py-3 font-normal border-r'>No.</th>
              <th scope='col' className='px-2 py-3 font-normal border-r'>Insured Name</th>
              <th scope='col' className='px-2 py-3 font-normal border-r'>Age</th>
              <th scope='col' className='px-2 py-3 font-normal border-r'>Contact No.</th>
              <th scope='col' className='px-2 py-3 font-normal border-r'>Coverage Plan (Days)</th>
              <th scope='col' className='px-2 py-3 font-normal border-r'>Premium Amount (USD)</th>
              <th scope='col'><span className='sr-only'>download</span></th>
            </tr>
          </thead>
          <tbody>
            {searchResult && searchResult.map((result, index) => (
              <tr key={index} className='border-b text-[#214C9B]'>
                <td className='py-5 border-r'>{index + 1}</td>
                <td className=' border-r'>{result.insuredName}</td>
                <td className=' border-r'>{result.insuredAge}</td>
                <td className=' border-r'>{result.insuredPhoneNumber}</td>
                <td className=' border-r'>{result.coveragePlan}</td>
                <td className=' border-r'>{result.rate}</td>
                <td>
                  <DownloadPDFButton data={result} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Report


