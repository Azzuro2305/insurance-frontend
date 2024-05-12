import React, { useEffect, useState, useContext } from 'react'
import { img } from '../img'
import { useNavigate } from 'react-router-dom'
import InsuredInfoContext from '../InsuranceForm/InsuredInfoContext'
import axios from 'axios';

export const PaymentOption = () => {
    const navigate = useNavigate();
    const [premiumInfo , setPremiumInfo] = useState([]);
  const { insuredInfo, setInsuredInfo } = useContext(InsuredInfoContext);

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
    // const paymentBtn = () => {
    //     navigate("/");
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/payment-info');
      };

    console.log(insuredInfo);

    return (
        <div className='xs2:w-full sm:w-[500px] lg:w-[800px] mx-auto bg-gray-50 rounded-md'>
            <div className='flex justify-end'>
                <button>
                    <img src={img.cancle} alt="" className='size-8' />
                </button>
            </div>
            <div className='px-4'>
                <h1 className='xs2:text-base sm:text-[22px] tracking-tight text-[#214C9B] font-[630] underline underline-offset-auto'>
                    PREMIUM INFORMATION AND CHOOSE PAYMENT METHOD
                </h1>
                <div className='bg-gray-100 my-4'>
                    <div className='xs2:px-3 sm:px-6 py-2'>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='xs2:text-base sm:text-lg'>Insured For</p>
                            <p className='uppercase xs2:text-base sm:text-lg font-[400]'>buy { insuredInfo.buyOption }</p>
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='xs2:text-base sm:text-lg'>Premium Amount</p>
                            <p className='uppercase xs2:text-base sm:text-lg font-[400]'>{ insuredInfo.rate } usd</p>
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='xs2:text-base sm:text-lg'>Net Premium</p>
                            <p className='uppercase xs2:text-base sm:text-lg font-[400]'>{ insuredInfo.netPremium } usd</p>
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='xs2:text-base sm:text-lg'>Age (Year)</p>
                            <p className='uppercase xs2:text-base sm:text-lg font-[400]'>
                            { 
                                insuredInfo.hasChild ? insuredInfo.childAge : insuredInfo.insuredPersonAge 
                            }
                            </p>
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='xs2:text-base sm:text-lg'>Coverage Plan</p>
                            <p className='uppercase xs2:text-base sm:text-lg font-[400]'>{insuredInfo.coveragePlan}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='xs2:text-base sm:text-lg'>Packages</p>
                            <p className='uppercase xs2:text-base sm:text-lg font-[400]'>{insuredInfo.packages}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='xs2:text-base sm:text-lg'>Passport Number</p>
                            <p className='uppercase xs2:text-base sm:text-lg font-[400]'>{insuredInfo.passportNumber}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-4'>
                            <p className='xs2:text-base sm:text-lg'>Name <br />(as per passport)</p>
                            <p className='uppercase xs2:text-base sm:text-lg font-[400]'>{insuredInfo.insuredName}</p>
                        </div>
                        <div className='grid grid-cols-2 mb-1'>
                            <p className='xs2:text-base sm:text-lg'>Estimated Departure Date</p>
                            <p className='uppercase xs2:text-base sm:text-lg font-[400]'>{insuredInfo.estimateDepartureDate}</p>
                        </div>
                    </div>
                </div>

                <h2 className='xs2:text-base sm:text-lg tracking-tight text-[#214C9B] font-[630]'>Choose Payment Method</h2>
                <div className='border my-4'>
                    <div className='p-5'>
                        <button onClick={
                            () => {
                                setInsuredInfo({
                                    ...insuredInfo,
                                    paymentMethod: "visa"
                                })
                            }
                        }>
                            <img src={img.visa} alt="" className='xs2:w-52 sm:w-40 h-28 mr-6 border hover:border-[#214C9B]' />
                        </button>
                        <button onClick={
                            () => {
                                setInsuredInfo({
                                    ...insuredInfo,
                                    paymentMethod: "masterCard"
                                })
                            }
                        }>
                            <img src={img.masterCard} alt="" className='xs2:w-52 sm:w-40 h-28 mr-6 border hover:border-[#214C9B]' />
                        </button>
                        <button onClick={
                            () => {
                                setInsuredInfo({
                                    ...insuredInfo,
                                    paymentMethod: "jcb"
                                })
                            }
                        }>
                            <img src={img.jcb} alt="" className='xs2:w-52 sm:w-40 h-28 mr-6 border hover:border-[#214C9B]' />
                        </button>
                        <button onClick={
                            () => {
                                setInsuredInfo({
                                    ...insuredInfo,
                                    paymentMethod: "paypal"
                                })
                            }
                        }>
                            <img src={img.unionpay} alt="" className='xs2:w-52 sm:w-40 h-28 border hover:border-[#214C9B]' />
                        </button>
                    </div>
                </div>
                <button className='bg-[#214C9B] mb-5 text-white font-bold mt-1 px-10 py-2 rounded-[3px] hover:bg-white hover:border-[#214C9B] border hover:text-[#214C9B] transition-all duration-200'
                onClick={ handleSubmit }>
                    NEXT
                </button>
            </div>
        </div>
    )
}

