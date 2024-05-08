import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../Images/Images'


export const Header = () => {
  return (
    <>
        <section>
            <div className="flex items-center justify-between my-4">
                <div className="flex gap-2">
                    <img className="xs2:size-12 md:w-[70px] " src={ Images.logo } alt="" />
                    <div className="flex flex-col">
                        <h1 className="font-bold xs2:text-lg md:text-[25px]">Myanma Insurance</h1>
                        <h3 className="xs2:text-xs md:text-[15px]">myanma insurance is for the people</h3>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="flex items-center gap-x-2 xs2:invisible mid:visible">
                        <img className="w-[30px] h-[30px]" src={ Images.email } alt="" />
                        <div className="flex flex-col pr-8 border-r-[1px] text-[14px] border-[#DDDDDD]">
                            <a className="font-semibold text-[#214C9B]">MMINSURANCE@mptmail.com.mm</a>
                            <p className="text-[#8498B8]">Drop us a mail</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-2 xs2:invisible mid:visible">
                        <img className="w-[30px] h-[30px]" src={ Images.phone } alt="" />
                        <div className="flex flex-col pr-8 border-r-[1px] text-[14px] border-[#DDDDDD]">
                            <a className="font-semibold text-[#214C9B]">(95-1) 379696</a>
                            <p className="text-[#8498B8]">Make a call</p>
                        </div>
                    </div>
                    <div className="flex gap-x-1">
                            <button className="bg-[#214C9B] border-t-[3px] w-[40px] border-[#F1F4F8] text-white p-2">MM</button>
                            <button className="bg-[#214C9B] border-t-[3px] w-[40px] border-[#FCF050] text-white p-2">EN</button>
                    </div>
                </div>
            </div>

            <div className="bg-[#214C9B] font-semibold text-white p-5 rounded-lg shadow-lg">
                <nav>
                    <div className="flex text-[13px] gap-6">
                        <Link>HOME</Link>
                        <Link>ABOUT US</Link>
                        <Link>INSURANCE PRODUCTS</Link>
                        <Link>CUSTOMER HUB</Link>
                        <Link>NEWS</Link>
                        <Link>CONTACT US</Link>
                    </div>

                    <div>
            
                    </div>
                </nav>
            </div>

        </section>
    </>
  )
}
