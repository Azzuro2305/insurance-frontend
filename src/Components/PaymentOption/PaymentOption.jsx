import React, { useEffect, useState } from 'react'
import { img } from '../img'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const PaymentOption = () => {
    const navigate = useNavigate();
    const [premiumInfo , setPremiumInfo] = useState([]);
    // useEffect(()=> {
    //     const getPremiumInfo = async () => {
    //         // const apiGetInfo = 'http://localhost:8080/'
    //         try {
    //             const response = await axios.get(apiGetInfo);
    //             setPremiumInfo(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    // });
    const paymentBtn = () => {
        navigate("/");
    }
    return (
        <div className=' w-[800px] mx-auto bg-gray-50 rounded-md'>
            <div className='flex justify-end'>
                <button>
                    <img src={img.cancle} alt="" className='size-8' />
                </button>
            </div>
            <div className='px-4'>
                <h1 className='text-[22px] tracking-tight text-[#214C9B] font-[630] underline underline-offset-auto'>
                    PREMIUM INFORMATION AND CHOOSE PAYMENT METHOD
                </h1>
                <div className='bg-gray-100 my-4'>
                    <div className='px-6 py-2'>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='text-lg'>Insured For</p>
                            {/* <p className='uppercase text-lg font-semibold'>buy for {premiumInfo.}</p> */}
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='text-lg'>Premium Amount</p>
                            {/* <p className='uppercase text-lg font-semibold'>{premiumInfo.} usd</p> */}
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='text-lg'>Net Premium</p>
                            {/* <p className='uppercase text-lg font-semibold'>{premiumInfo.} usd</p> */}
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='text-lg'>Age (Year)</p>
                            {/* <p className='uppercase text-lg font-semibold'>{premiumInfo.}</p> */}
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='text-lg'>Coverage Plan</p>
                            {/* <p className='uppercase text-lg font-semibold'>{premiumInfo.}</p> */}
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='text-lg'>Packages</p>
                            {/* <p className='uppercase text-lg font-semibold'>{premiumInfo.}</p> */}
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='text-lg'>Passport Number</p>
                            {/* <p className='uppercase text-lg font-semibold'>{premiumInfo.}</p> */}
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='text-lg'>Name <br />(as per passport)</p>
                            {/* <p className='uppercase text-lg font-semibold'>{premiumInfo.}</p> */}
                        </div>
                        <div className='grid grid-cols-2 mb-1'>
                            <p className='text-lg'>Estimated Arrival Date</p>
                            {/* <p className='uppercase text-lg font-semibold'>{premiumInfo.}</p> */}
                        </div>
                    </div>
                </div>

                <h2 className='text-lg tracking-tight text-[#214C9B] font-[630]'>Choose Payment Method</h2>
                <div className='border my-4'>
                    <div className='p-5 space-x-4'>
                        <button>
                            <img src={img.visa} alt="" className='w-40 h-28 border hover:border-[#214C9B]' />
                        </button>
                        <button>
                            <img src={img.masterCard} alt="" className='w-40 h-28 border hover:border-[#214C9B]' />
                        </button>
                        <button>
                            <img src={img.jcb} alt="" className='w-40 h-28 border hover:border-[#214C9B]' />
                        </button>
                        <button>
                            <img src={img.unionpay} alt="" className='w-40 h-28 border hover:border-[#214C9B]' />
                        </button>
                    </div>
                </div>
                <button className='bg-[#214C9B] mb-5 text-white font-bold mt-1 px-10 py-2 rounded-[3px] hover:bg-white hover:border-[#214C9B] border hover:text-[#214C9B] transition-all duration-200'
                onClick={paymentBtn}>
                    NEXT
                </button>
            </div>
        </div>
    )
}

export default PaymentOption