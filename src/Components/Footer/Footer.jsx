import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../Images/Images'

export const Footer = () => {
  return (
    <>
        <section className="relative bottom-0 m-auto w-full">
            <div className="m-auto text-center xs2:w-[310px] xs:w-[450px] sm:w-[630px] md:w-[720px] mid:w-[960px] medium:w-[1150px]">
                <h1 className="text-[#214C9B] my-5 font-semibold xs2:text-lg sm:text-[24px]">CONTACT PHONE NUMBER</h1>
                <div className="sm:flex items-center justify-center">
                    <div className="sm:grid sm:grid-cols-2 md:grid-cols-4 mid:grid-cols-6 medium:grid-cols-8 xs2:space-y-2 sm:space-y-0 gap-2 text-[15px] font-semibold">
                        <div className="sm:col-span-1 md:col-span-2 border-[#214C9B] h-[80px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Admin Department</p>
                            <p>379088, 384865, 252372, 246902</p>
                        </div>
                        <div className="sm:col-span-1 md:col-span-2 border-[#214C9B] h-[80px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Life Insurance Department</p>
                            <p>384881, 384876, 386919</p>
                        </div>
                        <div className="sm:col-span-1 sm:col-start-1 md:col-span-2 border-[#214C9B] h-[80px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Account Department</p>
                            <p>384870, 384868</p>
                        </div>
                        <div className=" md:col-span-2 border-[#214C9B] h-[80px] border-[1px] py-4 rounded-sm">
                            <p className="text-[#214C9B]">Duty Room</p>
                            <p>379188</p>
                        </div>
                        <div className="medium:col-start-2  col-span-2 border-[#214C9B] xs:h-[80px] sm:h-[65px] md:h-[80px] border-[1px] xs:py-4 sm:py-1 rounded-sm">
                            <p className="text-[#214C9B]">Fire, Engineering and Miscellaneous Insurance Department</p>
                            <p>251764, 384874, 384867</p>
                        </div>
                        <div className="col-span-2 border-[#214C9B] xs:h-[80px] sm:h-[65px] md:h-[80px] border-[1px] xs:py-4 sm:py-1 rounded-sm">
                            <p className="text-[#214C9B]">Marine, Aviation & Travelling Insurance Department</p>
                            <p>251761</p>
                        </div>
                        <div className="md:col-start-2 mid:col-start-3 medium:col-start-auto col-span-2 border-[#214C9B] xs2:h-[80px] sm:h-[65px] md:h-[80px] border-[1px] xs2:py-4 sm:py-2 rounded-sm">
                            <p className="text-[#214C9B]">Third-Party Liability Insurance Department</p>
                            <p>384864, 384873</p>
                        </div>

                    </div>
                </div>
            </div>
            <footer className="flex items-center bg-[#214C9B] text-[14px] text-white mt-[30px] xs2:h-[110px] xs:h-[100px]">
            <div className="xs:flex items-center justify-between mx-auto xs2:w-[310px] xs:w-[450px] sm:w-[600px] md:w-[720px] mid:w-[960px] medium:w-[1150px]">
                <div className=' sm:text-xs md:text-sm xs2:mb-3'>
                    <p>© 2024 Myanma Insurance.</p>
                    <p>All Rights Reserved by Myanma Insurance</p>
                </div>
                <div className="flex gap-2">
                    <img className="xs2:size-8 md:size-16" src={ Images.logo } alt="" />
                    <div className="flex flex-col">
                        <h1 className="font-bold sm:text-lg md:text-[25px]">Myanma Insurance</h1>
                        <h3 className="sm:text-xs md:text-[15px]">myanma insurance is for the people</h3>
                    </div>
                </div>
                <div className='xs2:flex xs2:justify-end xs2:mt-[-30px] xs:mt-0'>
                    <a href="">
                        <img src={ Images.fb } alt="" />
                    </a>
                </div>
            </div>
            </footer>
        </section>

    </>
  )
}
