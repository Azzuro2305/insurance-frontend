import { React, useState, useEffect } from "react";
import { Router } from "./Components/Router/Router";
import InsuredInfoContext from "./Components/InsuranceForm/InsuredInfoContext";


function App() {
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
  
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  };


  const [insuredInfo, setInsuredInfo] = useState({
    // insured information
    passportNumber: "",
    passportIssuedDate: "",
    passportIssuedCountry: "",
    passportCountry: "",
    insuredName: "",
    insuredDOB: "",
    insuredGender: "",
    insuredPhoneCode: "", // to bind with insuredPhoneNumber
    insuredPhoneNumber: "",
    foreignContactCode: "", // to bind with foreignContactNumber
    foreignContactNumber: "",
    fatherName: "",
    race: "",
    occupation: "",
    maritalStatus: "single",
    insuredEmail: "",
    insuredAddress: "",
    insuredAddressAbroad: "",
    isChild: "",
    destinationCountry: "",

    // Proposal Form
    estimateDepartureDate: "",
    journeyTo: "",
    journeyFrom: "MYANMAR", // default value is "MYANMAR"
    policyStartDate: "",
    coveragePlan: "",
    packages: "",

    // beneficiary Information
    beneficiaryName: "",
    beneficiaryDOB: "",
    beneficiaryRelationship: "",
    beneficiaryPhoneCode: "", // pass UUID to backend
    beneficiaryPhoneNumber: "",
    beneficiaryNRC: "",
    beneficiaryEmail: "",
    beneficiaryAddress: "",

    // Child Information
    childName: "",
    childDOB: "",
    childGender: "",
    guardianceName: "",
    childRelationship: "",

    // Agent Information
    agentName: "",
    agentPassword: "",
    agentLicenseNumber: "",

    // Child, Agent Check
    hasChild: false,
    hasAgent: false,
    isValidated: false,

    // Additional Check only for frontend
    buyOption: "foryourself",
    agentType: "selfservice",

    // Payment Information
    paymentMethod: "",
    insuredPersonAge: "", 
    childAge: "",
    rate: 0,
    netPremium: 0,
    currency: "USD",
    totalAmount: 0,
    netAmount: 0,
    serviceCharges: 3,
  });

  useEffect(() => {
    if (insuredInfo) {
      let updatedInsuredInfo = { ...insuredInfo };
  
      if (insuredInfo.rate && insuredInfo.serviceCharges) {
        updatedInsuredInfo.netPremium = insuredInfo.rate + insuredInfo.serviceCharges;
      }

      if (insuredInfo.rate && insuredInfo.serviceCharges) {
        updatedInsuredInfo.netPremium = insuredInfo.rate + insuredInfo.serviceCharges;
      }
  
      if (insuredInfo.insuredDOB) {
        updatedInsuredInfo.insuredPersonAge = calculateAge(insuredInfo.insuredDOB);
      }
  
      if (insuredInfo.childDOB) {
        updatedInsuredInfo.childAge = calculateAge(insuredInfo.childDOB);
      }
  
      setInsuredInfo(updatedInsuredInfo);
    }
  }, [insuredInfo.rate, insuredInfo.serviceCharges, insuredInfo.insuredDOB, insuredInfo.childDOB]);

  

  return (
    <>
    <InsuredInfoContext.Provider value={{ insuredInfo, setInsuredInfo }}>
      <Router />
    </InsuredInfoContext.Provider>
    </>
  );
}

export default App;
