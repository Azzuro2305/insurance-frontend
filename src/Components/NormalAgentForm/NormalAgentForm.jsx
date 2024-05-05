import React from "react";

export const NormalAgentForm = () => {
  return (
    <>
      <div className="text-[#214C9B] bg-white rounded-md text-[14px] font-[500] py-4">
        <h1 className="px-4 text-[18px]">Check Agent Information</h1>
        <hr className="border-t-1 mt-3 mb-6 border-[#DFE2E6]" />
        <form className="px-4" action="">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="agentname">
              Agent Name <span className="text-red-600">*</span>
            </label>
            <input
              id="agentname"
              className="border-2 border-gray-[#E7EAEC] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              type="text"
              placeholder="ENTER AGENT NAME"
            />
          </div>

          <div className="flex flex-col gap-y-1 mt-4">
            <label htmlFor="agentpassword">
              Agent License Number <span className="text-red-600">*</span>
            </label>
            <input
              id="agentpassword"
              className="border-2 border-gray-[#E7EAEC] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              type="text"
              placeholder="ENTER AGENT LICENSE NO."
            />
          </div>

          <input
            type="submit"
            className="bg-[#214C9B] text-white px-6 py-2 rounded-md mt-8"
            value="CHECK AGENT"
          />
        </form>
      </div>
    </>
  );
};
