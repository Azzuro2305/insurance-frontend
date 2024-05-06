import React from 'react'
import { img } from '../img'
import { useNavigate } from 'react-router-dom'

const BuyOption = () => {
    const navigate = useNavigate();

    const mmkBtn = () => {
        navigate('/');
    }

    const usdBtn = () => {
        navigate('/');
    }

    const enquiryBtn = ()=>{
        navigate("/enquiry");
    }
    return (
        <div className='my-8'>
            <h1 className='text-[22px] font-[640] text-[#214C9B]'>OUTBOUND TRAVEL ACCIDENT INSURANCE</h1>
            <div className='flex my-4 gap-7'>
                <button onClick={mmkBtn}>
                    <div className='bg-[#214C9B] w-[360px]'>
                        <div className='py-7 text-center'>
                            <img src={img.mmk} alt=""
                                className='size-14 mx-auto' />
                            <p className='text-lg my-4 text-[#F1E430] font-bold'>မြန်မာကျပ်ငွေဖြင့် ပေးသွင်းရန်</p>
                        </div>
                    </div>
                </button>

                <button onClick={usdBtn}>
                    <div className='bg-[#214C9B] w-[360px]'>
                        <div className='py-6 text-center'>
                            <img src={img.usd} alt=""
                                className=' mx-auto size-16' />
                            <p className='text-lg my-3 pb-2 text-[#F1E430] font-bold'>USD ဖြင့် ပေးသွင်းရန်</p>
                        </div>
                    </div>
                </button>
            </div>
            <button className='bg-[#214C9B] text-white mt-1 px-6 py-2 rounded-[3px] hover:bg-white hover:border-[#214C9B] border hover:text-[#214C9B] transition-all duration-300' onClick={enquiryBtn}>
                Enquiry and Print Certificate
            </button>
        </div>
    )
}

export default BuyOption