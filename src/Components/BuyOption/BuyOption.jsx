import React, { useContext } from 'react'
import { img } from '../img'
import { Link } from 'react-router-dom'
import InsuredInfoContext from '../InsuranceForm/InsuredInfoContext'

export const BuyOption = () => {
    const { insuredInfo, setInsuredInfo } = useContext(InsuredInfoContext);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     navigate('/payment-info', { state: { insuredInfo: insuredInfo } });
    //   };

    console.log(insuredInfo);
    return (
        <div className='my-8'>
            <h1 className='md:text-[22px] text-xl font-[640] text-[#214C9B]'>OUTBOUND TRAVEL ACCIDENT INSURANCE</h1>
            <div className='sm:flex my-4 sm:gap-7'>
                <Link to="/buy-online-outbound-travel-accident-insurance">
                    <div onClick={ () => setInsuredInfo({...insuredInfo, currency: 'MMK'}) } className='bg-[#214C9B] w-72 xs:w-[400px] sm:w-64 md:w-80 lg:w-[360px] duration-300 mb-3 sm:mb-0'>
                        <div className='py-7 text-center'>
                            <img src={img.mmk} alt=""
                                className='size-14 mx-auto' />
                            <p className='text-lg my-4 text-[#F1E430] font-bold'>မြန်မာကျပ်ငွေဖြင့် ပေးသွင်းရန်</p>
                        </div>
                    </div>
                </Link>

                <Link to="/buy-online-outbound-travel-accident-insurance">
                    <div onClick={ () => setInsuredInfo({...insuredInfo, currency: 'USD'}) } className='bg-[#214C9B] w-72 xs:w-[400px] sm:w-64 md:w-80 lg:w-[360px] duration-300'>
                        <div className='py-6 text-center'>
                            <img src={img.usd} alt=""
                                className=' mx-auto size-16' />
                            <p className='text-lg my-3 pb-2 text-[#F1E430] font-bold'>USD ဖြင့် ပေးသွင်းရန်</p>
                        </div>
                    </div>
                </Link>
            </div>
            <Link to="/enquiry" className='bg-[#214C9B] text-white mt-1 px-6 py-2 rounded-[3px] hover:bg-white hover:border-[#214C9B] border hover:text-[#214C9B] transition-all duration-300'>
                Enquiry and Print Certificate
            </Link>
        </div>
    )
}
