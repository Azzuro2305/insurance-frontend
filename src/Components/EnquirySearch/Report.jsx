import React from 'react'

const Report = () => {
  return (
    <div>
        <h1 className=' text-xl text-[#214C9B] font-[630] mb-4 tracking-tight'>
          Inbound Travel Accident Insurance Purchase History
        </h1>
        <div className='xs2:overflow-x-scroll lg:overflow-hidden'>
        <table className='text-center w-full border border-gray-300'>
            <thead className=' bg-[#214C9B] text-white'>
              <tr className='xs2:text-sm md:text-lg'>
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
              <tr className='border-b text-[#214C9B]'>
                <td className='py-5 border-r'>1</td>
                <td className=' border-r'>Name</td>
                <td className=' border-r'>23</td>
                <td className=' border-r'>09-9999999</td>
                <td className=' border-r'>30</td>
                <td className=' border-r'>30</td>
                <td><button className='bg-[#214C9B] text-white px-8 py-1 rounded-[3px] hover:bg-white hover:border-[#214C9B] border hover:text-[#214C9B] transition-all duration-300'>Download</button></td>
              </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Report