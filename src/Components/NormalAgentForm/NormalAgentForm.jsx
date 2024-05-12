import React, { useEffect, useState } from "react";
import axios from "axios";

export const NormalAgentForm = ( { insuredInfo, setInsuredInfo } ) => {
  const [ submitted, setSubmitted ] = useState(false);
  const [ agentInfo, setAgentInfo ] = useState({
    agentName: "",
    agentLicense: "",
    agentPassword: "",
    agentType: insuredInfo.agentType
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    try {
      const response = await axios.post("http://localhost:8080/agent/validate", agentInfo);
      console.log(response.data);
      setInsuredInfo({
        ...insuredInfo,
        isValidated: response.data.data.valid,
      });
    // setSubmitted(false);
    } catch (err) {
      console.error(err);
    }
  };



  console.log(insuredInfo);
  console.log(submitted);

  console.log('submitted:', submitted);
console.log('insuredInfo.agentPassword:', insuredInfo.agentLicense);
console.log('isValidated: ', insuredInfo.isValidated);

  return (
    <>
      <div className="text-[#214C9B] bg-white rounded-md text-[14px] font-[500] py-4">
        <h1 className="px-4 text-[18px]">Check Agent Information</h1>
        <hr className="border-t-1 mt-3 mb-6 border-[#DFE2E6]" />
        <form onSubmit={ submitHandler } className="px-4" action="">
        {
            insuredInfo.isValidated && (
              <div className="text-green-600 text-center mt-2">Agent is validated.</div>
            )
          }
          <div className="flex flex-col gap-y-1">
            <label htmlFor="agentname">
              Agent Name <span className="text-red-600">*</span>
            </label>
            <input
              id="agentname"
              className="border-2 border-gray-[#E7EAEC] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              type="text"
              placeholder="ENTER AGENT NAME"
              onChange={
                (e) => {
                  setInsuredInfo({
                    ...insuredInfo,
                    agentName: e.target.value
                  },
                  setAgentInfo({
                    ...agentInfo,
                    agentName: e.target.value
                  })
                );
                }
              }
            />
            {
               submitted && !insuredInfo.agentName && !insuredInfo.isValidated ? (
                <div className="text-red-600 mt-2">This field is required.</div>
              ) : submitted && insuredInfo.agentName && !insuredInfo.isValidated ? (
                <div className="text-red-600 mt-2">Please check again your "Agent License Number" and "Agent Name"</div>
              ) : null
            }
            {/* Please check again your "Agent License Number" and "Date Of Birth". */}
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
              onChange={
                (e) => {
                  setInsuredInfo({
                    ...insuredInfo,
                    agentLicense: e.target.value,
                    agentPassword: e.target.value  // jin htae htar tal
                  },
                  setAgentInfo({
                    ...agentInfo,
                    agentLicense: e.target.value
                  })
                )
                }
              }
            />
            {
               submitted && !insuredInfo.agentLicense && !insuredInfo.isValidated ? (
                <div className="text-red-600 mt-2">This field is required.</div>
              ) : submitted && insuredInfo.agentLicense && !insuredInfo.isValidated ? (
                <div className="text-red-600 mt-2">Please check again your "Agent License Number" and "Agent Name"</div>
              ) : null
            }
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
