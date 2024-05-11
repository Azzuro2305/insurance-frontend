import React, { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../Images/Images";
import { img } from "../img";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="xs2:w-full mid:w-[960px] medium:w-[1150px] relative mx-auto">
        <div className="flex items-center justify-between xs2:px-2 xs2:py-1 mid:my-4 border-b border-[#214C9B] mid:border-none">
          <div className="flex gap-2 xs2:pl-3">
            <img className="xs2:size-11 mid:size-16 medium:size-[70px]" src={Images.logo} alt="" />
            <div className="flex flex-col">
              <h1 className="font-bold mid:text-2xl medium:text-[25px]">Myanma Insurance</h1>
              <h3 className="mid:text-sm medium:text-[15px]">
                myanma insurance is for the people
              </h3>
            </div>
          </div>
          <div className="flex medium:gap-10">
            <div className="mid:flex items-center gap-x-2 xs2:hidden mid:block mid:unhidden">
              <img className="w-[30px] h-[30px]" src={Images.email} alt="" />
              <div className="flex flex-col mid:pr-4 medium:pr-8 border-r-[1px] text-[14px] border-[#DDDDDD]">
                <a className="font-semibold text-[#214C9B]">
                  online-support@mminsurance.gov.mm
                </a>
                <p className="text-[#8498B8]">Drop us a mail</p>
              </div>
            </div>
            <div className="mid:flex items-center gap-x-2 xs2:hidden mid:block mid:pl-2 medium:ml-0">
              <img className="w-[30px] h-[30px]" src={Images.phone} alt="" />
              <div className="flex flex-col pr-8 border-r-[1px] text-[14px] border-[#DDDDDD]">
                <a className="font-semibold text-[#214C9B]">+959765428630,31</a>
                <p className="text-[#8498B8]">Make a call</p>
              </div>
            </div>
            <div className="block mid:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <img src={img.menu} className={`w-9 ${isOpen ? "hidden" : "block"}`} alt="" />
                <img src={img.cross} className={`w-9 ${isOpen ? "block" : "hidden"}`} alt="" />
              </button>
            </div>

            <div className="flex xs2:hidden mid:block space-x-1">
              <button className="bg-[#214C9B] border-t-[3px] w-[40px] border-[#F1F4F8] text-white p-2">
                MM
              </button>
              <button className="bg-[#214C9B] border-t-[3px] w-[40px] border-[#FCF050] text-white p-2">
                EN
              </button>
            </div>
          </div>
        </div>
        <div className=" mid:bg-[#214C9B]  text-white xs2:p-2 mid:p-3  mid:rounded-lg mid:shadow-lg border-b border-[#214C9B]">
          <nav className="flex items-center xs2:justify-between mid:space-x-8">
            <div className={`xs2:bg-[#214C9B] xs2:hidden mid:block mid:flex flex-wrap text-[13px] font-semibold mid:gap-y-4 gap-x-2`}>
              <Link className="cursor-pointer">
                HOME
              </Link>
              <div className="flex gap-2 items-baseline">
                <Link>ABOUT US</Link>
                <img className="w-2 h-2" src={Images.dropdown} alt="" />
              </div>
              <div className="flex gap-2 items-baseline">
                <Link>INSURANCE PRODUCTS</Link>
                <img className="w-2 h-2" src={Images.dropdown} alt="" />
              </div>
              <div className="flex gap-2 items-baseline">
                <Link>CUSTOMER HUB</Link>
                <img className="w-2 h-2" src={Images.dropdown} alt="" />
              </div>
              <div className="flex gap-2 items-baseline">
                <Link>NEWS & MEDIA</Link>
                <img className="w-2 h-2" src={Images.dropdown} alt="" />
              </div>
              <Link>CONTACT US</Link>
            </div>

            <div className="flex mid:flex-row-reverse flex-wrap xs2:float-left gap-x-2 text-[13px] font-semibold text-[#214C9B] xs2:items-start gap-y-1">
              <Link className="xs2:bg-[#214C9B] mid:bg-white  p-2 rounded-md xs2:text-white mid:text-[#214C9B]">
                Premium Calculator
              </Link>
              <Link className="xs2:bg-[#214C9B] mid:bg-white  p-2 rounded-md xs2:text-white mid:text-[#214C9B]">
                Print Certificates
              </Link>
              <Link className="xs2:bg-[#214C9B] mid:bg-white  p-2 rounded-md xs2:text-white mid:text-[#214C9B]">Online Biller</Link>
              <Link className="xs2:bg-[#214C9B] mid:bg-white  p-2 rounded-md xs2:text-white mid:text-[#214C9B]">Buy Online</Link>
            </div>
            <div className="flex gap-x-1 mid:hidden h-9">
              <button className="bg-[#214C9B] border-t-[3px] w-[40px] border-[#F1F4F8] text-white ">
                MM
              </button>
              <button className="bg-[#214C9B] border-t-[3px] w-[40px] border-[#FCF050] text-white">
                EN
              </button>
            </div>
          </nav>
        </div>
        <div className={` border-t-4 mt-[-10px] border-[#FCF050] bg-[#214C9B] mid:hidden text-[13px] font-semibold text-white ${isOpen ? "block" : "hidden"}`}>
          <div className="border-b p-2">
            <Link className="cursor-pointer">
              HOME
            </Link>
          </div>
          <div className="flex items-baseline border-b justify-between p-2">
            <Link>ABOUT US</Link>
            <img className="w-2 h-2" src={Images.dropdown} alt="" />
          </div>
          <div className="flex items-baseline border-b justify-between p-2">
            <Link>INSURANCE PRODUCTS</Link>
            <img className="w-2 h-2" src={Images.dropdown} alt="" />
          </div>
          <div className="flex items-baseline border-b justify-between p-2">
            <Link>CUSTOMER HUB</Link>
            <img className="w-2 h-2" src={Images.dropdown} alt="" />
          </div>
          <div className="flex items-baseline border-b justify-between p-2">
            <Link>NEWS & MEDIA</Link>
            <img className="w-2 h-2" src={Images.dropdown} alt="" />
          </div>
          <div className="border-b p-2">
            <Link>CONTACT US</Link>
          </div>
        </div>
      </section>
    </>
  );
};
