import React from "react";
import { AiOutlineSetting } from "react-icons/ai";


function DataInputForm() {
  return (
    <div className="bg-white w-[1170px] mx-auto p-8 rounded-lg shadow-gray-400">
      <form className="">
        {/* PASSPORT INFORMATION */}
        <div className="py-[20px] border-b-[1px] border-gray-500 ">
          <h2 className="underline text-[18px] font-bold text-blue-800">
            PASSPORT INFORMATION
          </h2>
          <div className="flex gap-[32px] mt-4">
            <div className="w-1/3  ">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Passport Number<span className="text-red-600 ml-2">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400 rounded required"
                placeholder="ENTER YOUR PASSPORT NO."
              />
            </div>
            <div className="w-1/3">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Passport Issued Date<span className="text-red-600 ml-2">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400 rounded required"
                placeholder="DD-MM-YYYY"
              />
            </div>
            <div className="w-1/3 ">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Passport Issued Country
                <span className="text-red-600 ml-2">*</span>
              </label>
              <select
                type="text"
                className="text-gray p-2 w-full border-[1px] border-gray-400 rounded required"
              >
                <option className="text-gray">SELECT ONE</option>
              </select>
            </div>
          </div>
        </div>

        {/* INSURED INFORMATION */}
        <div className="py-[20px] border-b-[1px] border-gray-500 ">
          <h2 className="underline text-[18px] font-bold text-blue-800">
            INSURED INFORMATION
          </h2>
          <div className="grid grid-cols-2 gap-[32px] mt-5 ">
            <div className="flex">
              <input
                id="default-radio-1"
                type="radio"
                value=""
                className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
              />
              <label
                for="default-radio-1"
                className="ml-3 font-bold text-blue-800 text-[16px] "
              >
                BUY FOR YOURSELF(THIS PASSPORT HOLDER)
              </label>
            </div>
            <div className="flex ">
              <input
                checked
                id="default-radio-2"
                type="radio"
                value=""
                className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
              />
              <label
                for="default-radio-2"
                className="ml-3 font-bold text-blue-800 text-[16px] "
              >
                BUY FOR THE CHILD TRAVEL TOGETHER WITH THIS PASSPORT HOLDER
                <br />
                (CHILD IS NOT HOLDING A VALID PASSPORT)
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3   gap-[32px] mt-4">
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Name (as per passport)
                <span className="text-red-600 ml-2">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded required"
                placeholder="ENTER INSURED NAME"
                required
              />
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Date of Birth(as per passport)
                <span className="text-red-600 ml-2">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400 rounded required"
                placeholder="DD-MM-YYYY"
                required
              />
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Gender (as per passport)
                <span className="text-red-600 ml-2">*</span>
              </label>
              <select
                type="text"
                className="text-gray p-2 w-full border-[1px] border-gray-400 rounded required"
                required
              >
                <option className="text-gray">SELECT ONE</option>
              </select>
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Estimated Arrival Date
                <span className="text-red-600 ml-2">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400 rounded required"
                placeholder="DD-MM-YYYY"
                required
              />
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Journey From
                <span className="text-red-600 ml-2">*</span>
              </label>
              <select
                type="text"
                className="text-gray p-2 w-full border-[1px] border-gray-400 rounded required"
                required
              >
                <option className="text-gray">SELECT ONE</option>
              </select>
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Journey To
                <span className="text-red-600 ml-2">*</span>
              </label>
                <input type="text" aria-label="disabled input" class="mb-5 bg-gray-100 border-[1px] border-gray-400  text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed" disabled placeholder="MYANMAR" required></input>
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Coverage Plan
                <span className="text-red-600 ml-2">*</span>
              </label>
              <select
                type="text"
                className="text-gray p-2 w-full border-[1px] border-gray-400 rounded required"
                required
              >
                <option className="text-gray">SELECT ONE</option>
              </select>
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Contact Phone Number
                <span className="text-red-600 ml-2">*</span>
              </label>
              <div className="flex w-full test-[15px] border-[1px] border-gray-400 rounded required" required>
                
              <select
                type="text"
                className="w-[100px] text-gray p-2 bg-none "
              >
                <option className="text-gray">(+93) A</option>
              </select>
              <input type="text" className="w-full " placeholder="ENTER PHONE NUMBER"/>
              </div>

            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Insured's Email
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                placeholder="Insured's Email Address"
              />
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
              Address in Myanmar (Max: 250 Char)
              </label>
              <textarea
                type="text"
                className="w-full h-[110px] p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                placeholder="..."
              />
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
              Resident Address (Max: 250 Char)

                <span className="text-red-600 ml-2">*</span>
              </label>
              <textarea
                type="text"
                className="w-full h-[110px] p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded required"
                required
                placeholder="..."
              />
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Resident Country
                <span className="text-red-600 ml-2">*</span>
              </label>
              <select
                type="text"
                className="text-gray p-2 w-full border-[1px] border-gray-400 rounded required"
                required
              >
                <option className="text-gray">SELECT ONE</option>
              </select>
            </div>
          </div>
        </div>

        {/* BENEFICIARY INFORMATION */}
        <div className="py-[20px] ">
          <h2 className="underline text-[18px] font-bold text-blue-800">
            BENEFICIARY INFORMATION(In English)
          </h2>
          <div className="grid grid-cols-3   gap-[32px] mt-4">
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Name
                <span className="text-red-600 ml-2">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded "
                required
                placeholder="ENTER NAME"
              />
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Date of Birth
                <span className="text-red-600 ml-2">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400 rounded required"
                required
                placeholder="DD-MM-YYYY"
              />
            </div>
            
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                National Identification Number
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400 rounded "
                placeholder="ENTER NATIONAL IDENTIFICATION NUMBER"
              />
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Relationship
                <span className="text-red-600 ml-2">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400 rounded required"
                required
                placeholder="ENTER RELATIONSHIP"
              />
            </div>
            
           
            
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Contact Phone Number
                <span className="text-red-600 ml-2">*</span>
              </label>
              <div className="flex w-full test-[15px] border-[1px] border-gray-400 rounded required" required>
                
              <select
                type="text"
                className="text-gray p-2 bg-none "
              >
                <option className="text-gray">(+93) A</option>
              </select>
              <input type="text" className="w-full " placeholder="ENTER PHONE NUMBER"/>
              </div>

            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Email
              </label>
              <input
                type="text"
                className="w-full p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded"
                placeholder="ENTER EMAIL"
              />
            </div>
            
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
              Resident Address (Max: 250 Char)

                <span className="text-red-600 ml-2">*</span>
              </label>
              <textarea
                type="text"
                className="w-full h-[110px] p-2 text-gray border-[1px] border-gray-400  focus:ring-blue-500 focus:border-blue-500  rounded required"
                required
                placeholder="..."
              />
            </div>
            <div className="">
              <label className="block font-bold text-blue-800 text-[16px] mb-[8px]">
                Resident Country
                <span className="text-red-600 ml-2">*</span>
              </label>
              <select
                type="text"
                className="text-gray p-2 w-full border-[1px] border-gray-400 rounded required"
                required
              >
                <option className="text-gray">SELECT ONE</option>
              </select>
            </div>
          </div>
        </div>

        {/* SERVIICE AGENT SECTION */}
        <div className="bg-[#eee]">
          <h5 className="underline text-[18px] font-bold text-blue-800">This section is only used for servicing agent of Myanmar Insurance</h5>
          <div className="flex gap-2 items-center">
              <input
                id="default-radio-1"
                type="radio" 
                value=""
                className="w-4 h-4 mt-1 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 "
              />
              <div className="flex bg-white items-center gap-2 text-[16px] p-2">
              <AiOutlineSetting className="text-blue-800 size-[30px]" />

                <span className="text-blue-800 font-bold">SELF-SERVICE</span>
              </div>
              </div>
        </div>

        <button className="text-[15px] text-white text-center px-[24px] py-[8px] bg-blue-800 rounded bold">
          SUBMIT AND CONTINUE
        </button>
      </form>
    </div>
  );
}

export default DataInputForm;
