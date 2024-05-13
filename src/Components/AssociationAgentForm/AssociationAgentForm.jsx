import React, { useEffect, useState } from "react";
import axios from "axios";

export const AssociationAgentForm = ({ insuredInfo, setInsuredInfo }) => {
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
      console.log(response.data.data.agentName);
      setInsuredInfo({
        ...insuredInfo,
        isValidated: response.data.data.valid,
        agentName: response.data.data.agentName
      });
      AgentInfo({
        ...agentInfo,
        agentName: "",
        agentLicense: "",
        agentPassword: "",
      })
    }
    catch (err) {
      console.error(err);
    }
  };

  console.log(insuredInfo);

  console.log(agentInfo);
//   console.log(insuredInfo);
//   console.log(submitted);

//   console.log('submitted:', submitted);
// console.log('insuredInfo.isValidated:', insuredInfo.isValidated);
// console.log('insuredInfo.agentLicenseNumber:', insuredInfo.agentLicenseNumber);

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
            <label htmlFor="agentlicensenumber">
              Agent License Number <span className="text-red-600">*</span>
            </label>
            <input
              id="agentlicensenumber"
              className="border-2 border-gray-[#E7EAEC] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              type="text"
              placeholder="ENTER AGENT LICENSE NUMBER."
              onChange={(e) => {
                setInsuredInfo({
                  ...insuredInfo,
                  agentLicenseNumber: e.target.value,
                },
                setAgentInfo({
                  ...agentInfo,
                  agentLicense: e.target.value,
                })
              );
              }}
            />
            {
  submitted && insuredInfo.agentLicense && !insuredInfo.isValidated ? (
    <div className="text-red-600 mt-2">Please check again your "Agent License Number" and "Password"</div>
  ) : submitted && !insuredInfo.agentLicense && !insuredInfo.isValidated ? (
    <div className="text-red-600 mt-2">This field is required.</div>
  ) : null
}
          </div>

          <div className="flex flex-col gap-y-1 mt-4">
            <label htmlFor="agentpassword">
              Password <span className="text-red-600">*</span>
            </label>
            <input
              id="agentpassword"
              className="border-2 border-gray-[#E7EAEC] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              type="text"
              placeholder="00-0000"
              onChange={(e) => {
                setInsuredInfo({
                  ...insuredInfo,
                  agentPassword: e.target.value,
                },
                setAgentInfo({
                  ...agentInfo,
                  agentPassword: e.target.value,
                })
              );
              }}
            />
{
  submitted && insuredInfo.agentPassword && !insuredInfo.isValidated ? (
    <div className="text-red-600 mt-2">Please check again your "Agent License Number" and "Password"</div>
  ) : submitted && !insuredInfo.agentPassword && !insuredInfo.isValidated ? (
    <div className="text-red-600 mt-2">This field is required.</div>
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
