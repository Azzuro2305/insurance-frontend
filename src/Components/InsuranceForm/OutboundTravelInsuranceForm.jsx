import React, { useEffect, useState, useContext } from "react";
import DatePicker from "react-datepicker";
import Images from "../Images/Images";
import { AssociationAgentForm } from "../AssociationAgentForm/AssociationAgentForm";
import { NormalAgentForm } from "../NormalAgentForm/NormalAgentForm";
import Modal from "react-modal";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import InsuredInfoContext from './InsuredInfoContext';


export const OutboundTravelInsuranceForm = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();
  const { insuredInfo, setInsuredInfo } = useContext(InsuredInfoContext);
  const [ submitted, setSubmitted ] = useState(false);


  const [isModalOpen, setIsModalOpen] = useState(false);
  Modal.setAppElement("#root");

  const [buyOption, setBuyOption] = useState("foryourself");

  const [countries, setCountries] = useState([]);

  // const [insuredInfo, setInsuredInfo] = useState({
  //   // insured information
  //   passportNumber: "",
  //   passportIssuedDate: "",
  //   passportIssuedCountry: "",
  //   insuredName: "",
  //   insuredDOB: "",
  //   insuredGender: "",
  //   insuredPhoneCode: "", // to bind with insuredPhoneNumber
  //   insuredPhoneNumber: "",
  //   foreignContactCode: "", // to bind with foreignContactNumber
  //   foreignContactNumber: "",
  //   fatherName: "",
  //   race: "",
  //   occupation: "",
  //   maritalStatus: "single",
  //   insuredEmail: "",
  //   insuredAddress: "",
  //   insuredAddressAbroad: "",
  //   isChild: "",
  //   destinationCountry: "",

  //   // Proposal Form
  //   estimateDepartureDate: "",
  //   journeyTo: "",
  //   journeyFrom: "MYANMAR", // default value is "MYANMAR"
  //   policyStartDate: "",
  //   coveragePlan: "",
  //   packages: "",

  //   // beneficiary Information
  //   beneficiaryName: "",
  //   beneficiaryDOB: "",
  //   beneficiaryRelationship: "",
  //   beneficiaryPhoneCode: "", // pass UUID to backend
  //   beneficiaryPhoneNumber: "",
  //   beneficiaryNRC: "",
  //   beneficiaryEmail: "",
  //   beneficiaryAddress: "",

  //   // Child Information
  //   childName: "",
  //   childDOB: "",
  //   childGender: "",
  //   guardianceName: "",
  //   childRelationship: "",

  //   // Agent Information
  //   agentName: "",
  //   agentPassword: "",
  //   agentLicenseNumber: "",

  //   // Child, Agent Check
  //   hasChild: false,
  //   hasAgent: false,
  //   isValidated: false,

  //   // Additional Check only for frontend
  //   buyOption: "foryourself",
  //   agentOption: "selfservice",
  // });

  const [dates, setDates] = useState({
    passportIssuedDate: null,
    insuredDOB: null,
    estimateDepartureDate: null,
    policyStartDate: null,
    childDOB: null,
    beneficiaryDOB: null,
  });
  console.log(insuredInfo);

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="w-full text-left bg-[#EAECEF] text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      ref={ref}
    >
      {value && !isNaN(new Date(value)) ? format(new Date(value), 'yyyy-MM-dd') : 'Select a date'}
    </button>
  ));

  // const handleDateChange = (date) => {
  //   setStartDate(date);
  //   if (date.getFullYear() === new Date().getFullYear()) {
  //     setMaxDate(new Date());
  //   } else {
  //     setMaxDate(new Date(date.getFullYear(), 11, 31));
  //   }
  // };

  // console.log(countries);

  const handleDateChange = (date, key) => {
    setDates(prevDates => ({
      ...prevDates,
      [key]: date,
    }));
  };

  const filterFutureMonths = (date) => {
    const currentDate = new Date();
    return (
      date.getFullYear() < currentDate.getFullYear() ||
      (date.getFullYear() === currentDate.getFullYear() &&
        date.getMonth() <= currentDate.getMonth())
    );
  };

  //   ------------------- API (START) -------------------



  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("http://localhost:8080/country/all");
        console.log(response.data);
        setCountries(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  // const submitHandler = async (e) => {
  //   // const registerUrl = "http://localhost:8080/insured-person";
  //   e.preventDefault()
  //   try {
  //     const response = await axios.post("http://localhost:8080/insured-person", insuredInfo);
  //     console.log(response.data);
  //     console.log(insuredInfo);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


{/* <InsuredInfoContext.Provider value={setInsuredInfo}>
  <OutboundTravelInsuranceForm />
  <PaymentOption />
</InsuredInfoContext.Provider> */}
  


  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);
    try {
      const response = await axios.post("http://localhost:8080/insured-person/calculate-premium", insuredInfo);
      console.log(response.data.data.rate);
      setInsuredInfo({
        ...insuredInfo,
        rate: response.data.data.rate,
      });
      navigate('/payment-option');
      setSubmitted(false);
      
    } catch (err) {
      console.error(err);
    }
  };

  //   ------------------- API (END) -------------------
  return (
    
    <>
      <form
        onSubmit={ handleSubmit }
        action=""
        className="text-[#214C9B] bg-white text-[14px] font-[500] w-[1150px] mx-auto rounded-md shadow-lg py-12 px-8"
      >
        <h1 className="text-[16px] font-semibold">
          PASSPORT INFORMATION (In English)
        </h1>
        {/* // ------------------- 1st ------------------- */}
        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="flex flex-col">
            <label htmlFor="">Passport Number</label>
            {insuredInfo.currency === 'MMK' && (
              <label htmlFor="">
                နိုင်ငံကူးလက်မှတ်အမှတ် <span className="text-red-600">*</span>
              </label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER YOUR PASSPORT NO"
              type="text"
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  passportNumber: e.target.value,
                })
              }
            />
            {submitted && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Passport Issued Date</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နေ့{" "}
              <span className="text-red-600">*</span>
            </label>
            )}
            <DatePicker
              selected={dates.passportIssuedDate}
              onChange={(date) => {
                // if (filterFutureMonths(date)) {
                //   handleDateChange(date);
                // }
                handleDateChange(date, "passportIssuedDate");
                setInsuredInfo({
                  ...insuredInfo,
                  passportIssuedDate: format(date, "yyyy-MM-dd"),
                });
              }}
              dateFormat="yyyy-MM-dd"
              customInput={<CustomInput />}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              minDate={new Date(currentYear - 15, currentMonth, currentDay)}
              maxDate={maxDate}
              filterDate={filterFutureMonths}
            />
                        {submitted && !insuredInfo.passportIssuedDate && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Passport Issued Country</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နိုင်ငံ{" "}
              <span className="text-red-600">*</span>
            </label>
            )}
            <select
              className="text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              name=""
              id=""
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  passportIssuedCountry: e.target.value,
                  passportCountry: "MYANMAR"
                })
              }
            >
              <option value="">SELECT ONE</option>
              {Array.isArray(countries) &&
                countries.map((country, index) => (
                  <option key={index} value={country.id}>
                    {country.countryName}
                  </option>
                ))}
            </select>
            {submitted && !insuredInfo.passportIssuedCountry && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
        </div>
        <hr className="border-t-1 my-6 border-[#CFD4D9]" />
        <h1 className="text-[16px] font-semibold underline">
          INSURED INFORMATION (In English)
        </h1>
        <div className="grid grid-cols-3">
          <div className="flex mt-2">
            <input
              type="radio"
              id="foryourself"
              name="buyoption"
              value="foryourself"
              // checked={insuredInfo.buyOption === "foryourself"}
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  buyOption: e.target.value,
                  hasChild: false,
                })
              }
              className="w-6 h-6"
            />
            <label htmlFor="foryourself" className="ml-2">
              BUY FOR YOURSELF (THIS PASSPORT HOLDER)
            </label>
          </div>
          <div className="flex col-span-2 mt-2">
            <input
              type="radio"
              id="forthechild"
              name="buyoption"
              value="forthechild"
              // checked={insuredInfo.buyOption === "forthechild"}
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  buyOption: e.target.value,
                  hasChild: true,
                })
              }
              className="w-6 h-6"
            />
            <label htmlFor="forthechild" className="ml-2 w-[550px]">
              BUY FOR THE CHILD TRAVEL TOGETHER WITH THIS PASSPORT HOLDER (CHILD
              IS NOT HOLDING A VALID PASSPORT)
            </label>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {/* // ------------------- 2nd ------------------- */}
          <div className="flex flex-col">
            <label htmlFor="">Name (as per passport)</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              အမည်(နိုင်ငံကူးလက်မှတ်ပါအမည်){" "}
              <span className="text-red-600">*</span>
            </label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER INSURED NAME"
              type="text"
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, insuredName: e.target.value })
              }
            />
                        {submitted && !insuredInfo.insuredName && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Date of Birth (as per passport)</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              မွေးသက္ကရာဇ်(နိုင်ငံကူးလက်မှတ်ပါမွေးသက္ကရာဇ်){" "}
              <span className="text-red-600">*</span>
            </label>
            )}
            <DatePicker
              selected={dates.insuredDOB}
              onChange={(date) => {
                // if (filterFutureMonths(date)) {
                //   handleDateChange(date);
                // }
                handleDateChange(date, "insuredDOB");
                setInsuredInfo({
                  ...insuredInfo,
                  insuredDOB: format(date, "yyyy-MM-dd"),
                });
              }}
              dateFormat="yyyy-MM-dd"
              customInput={<CustomInput />}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              maxDate={maxDate}
              filterDate={filterFutureMonths}
            />
                        {submitted && !insuredInfo.insuredDOB && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Gender (as per passport)</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ကျား/မ(နိုင်ငံကူးလက်မှတ်ပါ){" "}
              <span className="text-red-600">*</span>
            </label>
            )}
            <select
              className="text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="SELECT ONE"
              name=""
              id=""
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  insuredGender: e.target.value,
                })
              }
            >
              <option value="">SELECT ONE</option>
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
            </select>
            {submitted && !insuredInfo.insuredGender && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>

          {/* // ------------------- 3rd ------------------- */}

          <div className="flex flex-col">
            <label htmlFor="">Estimate Departure Date</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ထွက်ခွာမည့်နေ့(ခန့်မှန်းခြေ){" "}
              <span className="text-red-600">*</span>
            </label>
            )}
            <DatePicker
  selected={dates.estimateDepartureDate}
  onChange={(date) => {
    // handleDateChange(date);

    handleDateChange(date, "estimateDepartureDate");

    setInsuredInfo({
      ...insuredInfo,
      estimateDepartureDate: format(date, "yyyy-MM-dd"),
    });
  }}
  dateFormat="yyyy-MM-dd"
  customInput={<CustomInput />}
  showMonthDropdown
  showYearDropdown
  dropdownMode="select"
  minDate={new Date()}
/>
{submitted && !insuredInfo.estimateDepartureDate && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Journey From</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ထွက်ခွာမည့်နိုင်ငံ <span className="text-red-600">*</span>
            </label>
            )}
            <input
              className="border-2 bg-[#EAECEF] border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD] text-[#4b5055] placeholder-[#4B5055]"
              placeholder="MYANMAR"
              value="MYANMAR"
              disabled
              type="text"
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, journeyFrom: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Journey To</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ဆိုက်ရောက်မည့်နိုင်ငံ <span className="text-red-600">*</span>
            </label>
            )}
            <select
              className="text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="SELECT ONE"
              name=""
              id=""
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, journeyTo: e.target.value })
              }
            >
              <option value="">SELECT ONE</option>
              {Array.isArray(countries) &&
                countries.map((country, index) => (
                  <option key={index} value={country.countryName}>
                    {country.countryName}
                  </option>
                ))}
            </select>
            {submitted && !insuredInfo.journeyTo && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>


          
          {/* // ------------------- 4th ------------------- */}
          <div className="flex flex-col">
            <label htmlFor="">Policy Start Date</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ပေါ်လစီစတင်မည့်နေ့ <span className="text-red-600">*</span>
            </label>
            )}
            <DatePicker
              selected={dates.policyStartDate}
              onChange={(date) => {
                // if (filterFutureMonths(date)) {
                //   handleDateChange(date);
                // }
                handleDateChange(date, "policyStartDate");
                setInsuredInfo({
                  ...insuredInfo,
                  policyStartDate: format(date, "yyyy-MM-dd"),
                });
              }}
              dateFormat="yyyy-MM-dd"
              customInput={<CustomInput />}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              minDate={new Date()}
              // filterDate={filterFutureMonths}
            />
                        {submitted && !insuredInfo.policyStartDate && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Coverage Plan</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              အာမခံသက်တမ်း <span className="text-red-600">*</span>
            </label>
            )}
            <select
              className="text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="SELECT ONE"
              name=""
              id=""
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, coveragePlan: e.target.value })
              }
            >
              <option value="">SELECT ONE</option>
              <option value="5">5 DAYS</option>
              <option value="10">10 DAYS</option>
              <option value="15">15 DAYS</option>
              <option value="30">30 DAYS</option>
              <option value="60">60 DAYS</option>
              <option value="90">90 DAYS</option>
              <option value="120">120 DAYS</option>
              <option value="150">150 DAYS</option>
              <option value="180">180 DAYS</option>
            </select>
            {submitted && !insuredInfo.coveragePlan && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Packages</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ပက်ကေ့ချ် <span className="text-red-600">*</span>
            </label>
            )}
            <select
              className="text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="SELECT ONE"
              name=""
              id=""
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, packages: e.target.value })
              }
            >
              {insuredInfo.currency === 'USD' ? (
            <>
              <option value="">SELECT ONE</option>
              <option value="10000">USD 10,000</option>
              <option value="30000">USD 30,000</option>
              <option value="50000">USD 50,000</option>
            </>
          ) : (
            <>
              {/* Replace with the options for 'MMK' */}
              <option value="">SELECT ONE</option>
              <option value="10000">MMK 30,000,000</option>
              <option value="30000">MMK 90,000,000</option>
              <option value="50000">MMK 150,000,000</option>
            </>
          )}
            </select>
            {submitted && !insuredInfo.coveragePlan && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          {/* // ------------------- 5th ------------------- */}
          <div className="flex flex-col">
            <label htmlFor="">Insured's Contact Phone Number</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ဆက်သွယ်ရမည့်ဖုန်းနံပါတ် <span className="text-red-600">*</span>
            </label>
            )}

            <div className="grid grid-cols-4 border-2 mt-2 border-gray-[#CFD4D9] rounded-md">
              <select
                className="text-[#4A5056] rounded-md p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                placeholder="SELECT ONE"
                name=""
                id=""
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    insuredPhoneCode: e.target.value,
                  })
                }
              >
                {/* <option className="cols-span-1" value="">
                  SELECT
                </option> */}
                {Array.isArray(countries) &&
                  countries.map((country, index) => (
                    <option key={index} value={country.countryCode}>
                      (+{country.countryCode}) {country.countryName}
                    </option>
                  ))}
              </select>
              <input
                className="col-span-3 rounded-md p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                placeholder="ENTER PHONE NUMBER"
                type="text"
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    insuredPhoneNumber:
                      "(+" +
                      insuredInfo.insuredPhoneCode +
                      ")" +
                      e.target.value,
                  })
                }
              />
            </div>
            {submitted && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Foreign Contact Number</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">ဆက်သွယ်ရမည့်နိုင်ငံခြားဖုန်းနံပါတ်</label>
            )}
            <div className="grid grid-cols-4 border-2 mt-2 border-gray-[#CFD4D9] rounded-md">
              <select
                className="text-[#4A5056] rounded-md p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                placeholder="SELECT ONE"
                name=""
                id=""
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    foreignContactCode: e.target.value,
                  })
                }
              >
                {/* <option value="">SELECT</option> */}
                {Array.isArray(countries) &&
                  countries.map((country, index) => (
                    <option key={index} value={country.countryCode}>
                      (+{country.countryCode}) {country.countryName}
                    </option>
                  ))}
              </select>
              <input
                className="col-span-3 rounded-md p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                placeholder="ENTER PHONE NUMBER"
                type="text"
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    foreignContactNumber:
                      "(+" +
                      insuredInfo.foreignContactCode +
                      ")" +
                      e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Father's Name</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">ဖခင်အမည်</label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER YOUR FATHER NAME"
              type="text"
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, fatherName: e.target.value })
              }
            />
          </div>

          {/* // ------------------- 6th ------------------- */}
          <div className="flex flex-col">
            <label htmlFor="">Race</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">လူမျိုး</label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER YOUR RACE"
              type="text"
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, race: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Occupation</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">အလုပ်အကိုင်</label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER YOUR OCCUPATION"
              type="text"
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, occupation: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Marital Status</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">အိမ်ထောင်ရှိ/မရှိ</label>
            )}
            <div className="flex items-center gap-x-4 mt-2">
              <div className="flex gap-x-2">
                <input
                  type="radio"
                  id="single"
                  name="maritalStatus"
                  value="single"
                  checked={insuredInfo.maritalStatus === "single"}
                  onChange={(e) =>
                    setInsuredInfo({
                      ...insuredInfo,
                      maritalStatus: e.target.value,
                    })
                  }
                  className="w-6 h-6"
                />
                <label htmlFor="single">SINGLE</label>
              </div>
              <div className="flex gap-x-2">
                <input
                  type="radio"
                  id="married"
                  name="maritalStatus"
                  value="married"
                  checked={insuredInfo.maritalStatus === "married"}
                  onChange={(e) =>
                    setInsuredInfo({
                      ...insuredInfo,
                      maritalStatus: e.target.value,
                    })
                  }
                  className="w-6 h-6"
                />
                <label htmlFor="married">MARRIED</label>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Insured's Email Address</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">အီးမေးလ်လိပ်စာ</label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="Enter Email Address"
              type="text"
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, insuredEmail: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Address in Myanmar</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              မြန်မာနိုင်ငံရှိနေရပ်လိပ်စာ (Max: 250 Char)
            </label>
            )}
            <textarea
              className="resize-none border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="..."
              rows="5"
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  insuredAddress: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Address Abroad</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ဆိုက်ရောက်မည့်နိုင်ငံနေရပ်လိပ်စာ (Max: 250 Char){" "}
              <span className="text-red-600">*</span>
            </label>
            )}
            <textarea
              className="resize-none border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="..."
              rows="5"
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  insuredAddressAbroad: e.target.value,
                })
              }
            />
                        {submitted && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Destination Country</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ဆိုက်ရောက်မည့်နိုင်ငံ <span className="text-red-600">*</span>
            </label>
            )}
            <select
              className="text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              name=""
              id=""
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  destinationCountry: e.target.value,
                })
              }
            >
              <option value="">SELECT ONE</option>
              {Array.isArray(countries) &&
                countries.map((country, index) => (
                  <option key={index} value={country.countryName}>
                    {country.countryName}
                  </option>
                ))}
            </select>
            {submitted && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
        </div>

        {/* Child Information */}
        {insuredInfo.buyOption === "forthechild" && (
          <div className="bg-[#DDDDDD] my-6 p-4">
            <h1 className="text-[16px] font-semibold underline">
              CHILD INFORMATION (CHILD IS NOT HOLDING A VALID PASSPORT)
            </h1>
            <div className="grid grid-cols-3 gap-8 mt-4">
              <div className="flex flex-col">
                <label htmlFor="">Child Name</label>
                {insuredInfo.currency === 'MMK' && (
                <label htmlFor="">
                  ကလေးအမည် *<span className="text-red-600">*</span>
                </label>
                )}
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder="ENTER CHILD NAME"
                  type="text"
                  onChange={(e) =>
                    setInsuredInfo({
                      ...insuredInfo,
                      childName: e.target.value,
                    })
                  }
                />
                            {submitted && insuredInfo.hasChild && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Date of Birth</label>
                {insuredInfo.currency === 'MMK' && (
                <label htmlFor="">
                  မွေးသက္ကရာဇ် <span className="text-red-600">*</span>
                </label>
                )}
                <DatePicker
                  selected={dates.childDOB}
                  onChange={(date) => {
                    // if (filterFutureMonths(date)) {
                    //   handleDateChange(date);
                    // }
                    handleDateChange(date, "childDOB");
                    setInsuredInfo({
                      ...insuredInfo,
                      childDOB: format(date, "yyyy-MM-dd"),
                    });
                  }}
                  dateFormat="yyyy-MM-dd"
                  customInput={<CustomInput />}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  maxDate={maxDate}
                  filterDate={filterFutureMonths}
                />
                                            {submitted && insuredInfo.hasChild && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Gender</label>
                {insuredInfo.currency === 'MMK' && (
                <label htmlFor="">
                  ကျား/မ <span className="text-red-600">*</span>
                </label>
                )}
                <select
                  className="text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder="SELECT ONE"
                  name=""
                  id=""
                  onChange={(e) =>
                    setInsuredInfo({
                      ...insuredInfo,
                      childGender: e.target.value,
                    })
                  }
                >
                  <option value="">SELECT ONE</option>
                  <option value="male">MALE</option>
                  <option value="female">FEMALE</option>
                </select>
                {submitted && insuredInfo.hasChild && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Guardiance Name</label>
                {insuredInfo.currency === 'MMK' && (
                <label htmlFor="">
                  အုပ်ထိန်းသူအမည် <span className="text-red-600">*</span>
                </label>
                )}
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder="ENTER GUARDIANCE NAME"
                  type="text"
                  onChange={(e) =>
                    setInsuredInfo({
                      ...insuredInfo,
                      guardianceName: e.target.value,
                    })
                  }
                />
                                            {submitted && insuredInfo.hasChild && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Relationship</label>
                {insuredInfo.currency === 'MMK' && (
                <label htmlFor="">
                  တော်စပ်ပုံ <span className="text-red-600">*</span>
                </label>
                )}
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder="ENTER RELATIONSHIP"
                  type="text"
                  onChange={(e) =>
                    setInsuredInfo({
                      ...insuredInfo,
                      childRelationship: e.target.value,
                    })
                  }
                />
                                            {submitted && insuredInfo.hasChild && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
              </div>
            </div>
          </div>
        )}

        {/* Beneficiary Information */}

        <hr className="border-t-1 my-6 border-[#CFD4D9]" />
        <h1 className="text-[16px] font-semibold underline">
          BENEFICIARY INFORMATION (In English) အကျိုးခံစားခွင့်ရှိသူနှင့်
          သက်ဆိုင်သော အချက်အလက်
        </h1>
        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              အမည် <span className="text-red-600">*</span>
            </label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER NAME"
              type="text"
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  beneficiaryName: e.target.value,
                })
              }
            />
                                        {submitted && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Date of Birth</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              မွေးသက္ကရာဇ် <span className="text-red-600">*</span>
            </label>
            )}
            <DatePicker
              selected={dates.beneficiaryDOB}
              onChange={(date) => {
                // if (filterFutureMonths(date)) {
                //   handleDateChange(date);
                // }
                handleDateChange(date, "beneficiaryDOB");
                setInsuredInfo({
                  ...insuredInfo,
                  beneficiaryDOB: format(date, "yyyy-MM-dd"),
                });
              }}
              dateFormat="yyyy-MM-dd"
              customInput={<CustomInput />}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              maxDate={maxDate}
              filterDate={filterFutureMonths}
            />
                                                    {submitted && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Relationship</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              တော်စပ်ပုံ <span className="text-red-600">*</span>
            </label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER RELATIONSHIP"
              type="text"
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  beneficiaryRelationship: e.target.value,
                })
              }
            />
                                                    {submitted && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Contact Phone Number</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">
              ဆက်သွယ်ရမည့်ဖုန်းနံပါတ် <span className="text-red-600">*</span>
            </label>
            )}

            <div className="grid grid-cols-4 border-2 mt-2 border-gray-[#CFD4D9] rounded-md">
              <select
                className="text-[#4A5056] rounded-md p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                placeholder="SELECT ONE"
                name=""
                id=""
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    beneficiaryPhoneCode: e.target.value,
                  })
                }
              >
                {/* <option className="cols-span-1" value="">
                  SELECT
                </option> */}
                {Array.isArray(countries) &&
                  countries.map((country, index) => (
                    <option key={index} value={country.countryCode}>
                      (+{country.countryCode}) {country.countryName}
                    </option>
                  ))}
              </select>
              <input
                className="col-span-3 rounded-md p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                placeholder="ENTER PHONE NUMBER"
                type="text"
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    beneficiaryPhoneNumber:
                      "(+" +
                      insuredInfo.beneficiaryPhoneCode +
                      ")" +
                      e.target.value,
                  })
                }
              />
            </div>
            {submitted && !insuredInfo.passportNumber && (
              <div className="text-red-600 mt-2">This field is required.</div>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">National Identificaiton Number</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ်</label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER NATIONAL IDENTIFICATION NUMBER"
              type="text"
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  beneficiaryNRC: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">အီးမေးလ်လိပ်စာ</label>
            )}
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="Enter Email"
              type="text"
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  beneficiaryEmail: e.target.value,
                })
              }
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Address</label>
            {insuredInfo.currency === 'MMK' && (
            <label htmlFor="">နေရပ်လိပ်စာ(Max: 250 Char)</label>
            )}
            <textarea
              className="resize-none border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="..."
              rows="5"
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  beneficiaryAddress: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="bg-[#EEEEEE] my-6 p-4">
          <h1 className="text-[16px] font-semibold underline">
            This section is only used for servicing agent of Myanma Insurance
          </h1>
          <div className="flex gap-x-6 mt-2">
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                id="selfservice"
                name="agentoption"
                value="selfservice"
                checked={insuredInfo.agentType === "selfservice"}
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    agentType: e.target.value,
                  })
                }
                className="w-6 h-6 flex-none"
              />
              <div
                className={`flex gap-x-1 items-center p-2 border-2 ${
                  insuredInfo.agentType === "selfservice"
                    ? "border-[#FCF050]"
                    : "border-[#DDDDDD]"
                } bg-white`}
              >
                <img className="w-[30px]" src={Images.selfService} alt="" />
                <label htmlFor="selfservice">SELF-SERVICE</label>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                id="normalagent"
                name="agentoption"
                value="normalagent"
                checked={insuredInfo.agentType === "normalagent"}
                onChange={(e) => {
                  setInsuredInfo({
                    ...insuredInfo,
                    agentType: e.target.value,
                    isValidated: false,
                    hasAgent: true,
                  });
                  setIsModalOpen(true);
                }}
                className="w-6 h-6 flex-none"
              />
              <div
                className={`flex gap-x-1 items-center p-2 border-2 ${
                  insuredInfo.agentOption === "normalagent"
                    ? "border-[#FCF050]"
                    : "border-[#DDDDDD]"
                } bg-white`}
              >
                <img className="w-[30px]" src={Images.normalAgent} alt="" />
                <label htmlFor="normalagent">AGENT VERIFICATION</label>
              </div>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                id="associationagent"
                name="agentoption"
                value="associationagent"
                checked={insuredInfo.agentType === "associationagent"}
                onChange={(e) => {
                  setInsuredInfo({
                    ...insuredInfo,
                    agentType: e.target.value,
                    isValidated: false,
                    hasAgent: true,
                  });
                  setIsModalOpen(true);
                }}
                className="w-6 h-6 flex-none"
              />
              <div
                className={`flex gap-x-1 items-center p-2 border-2 ${
                  insuredInfo.agentType === "associationagent"
                    ? "border-[#FCF050]"
                    : "border-[#DDDDDD]"
                } bg-white`}
              >
                <img
                  className="w-[30px]"
                  src={Images.associationAgent}
                  alt=""
                />
                <label htmlFor="associationagent">
                  ASSOCIATION AGENT VERIFICATION
                </label>
              </div>
            </div>
          </div>

          {insuredInfo.agentType === "normalagent" && (
            <div className="grid grid-cols-3 gap-x-8 mt-4">
              <div className="flex flex-col">
                <label htmlFor="">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  // placeholder={
                  //   insuredInfo.isValidated
                  //     ? insuredInfo.agentName
                  //     : "AGENT NAME"
                  // }
                  value={insuredInfo.isValidated ? insuredInfo.agentName : ""}
                  type="text"
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">
                  Agent License Number <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder={
                    insuredInfo.isValidated
                      ? insuredInfo.agentLicense
                      : "AGENT LICENSE NUMBER"
                  }
                  value={insuredInfo.isValidated ? insuredInfo.agentLicense : ""}
                  type="text"
                  disabled
                />
              </div>
              <div className="my-auto font-[500]">
                <button
                  className="underline align-middle"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          )}

          {insuredInfo.agentType === "associationagent" && (
            <div className="grid grid-cols-3 gap-x-8 mt-4">
              <div className="flex flex-col">
                <label htmlFor="">
                  Agent License Number <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  // placeholder={
                  //   insuredInfo.isValidated ? "testing" : "AGENT LICENSE NUMBER"
                  // }
                  value={insuredInfo.isValidated ? insuredInfo.agentLicenseNumber : ""}
                  type="text"
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder=""
                  type="text"
                  value={insuredInfo.isValidated ? insuredInfo.agentName : ""}
                  disabled
                />
              </div>
              <div className="my-auto font-[500]">
                <button
                  className="underline align-middle"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsModalOpen(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
        <input
          className="bg-[#214C9B] text-white px-6 py-2 rounded-sm"
          type="submit"
          value="SUBMIT AND CONTINUE"
          // onClick={ handleSubmit }
        />
        {/* <button ></button> */}
      </form>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "none",
            width: "40%",
            position: "relative",
            color: "lightsteelblue",
          },
        }}
      >
        <button
          className="ml-auto text-[#214C9B] text-[20px] font-[900] z-index-20 absolute right-6 w-10 rounded-full p-2"
          style={{ zIndex: 1 }}
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
        {isModalOpen &&
          (insuredInfo.agentType === "associationagent" ? (
            <div className="animate-fade-in">
              <AssociationAgentForm
                insuredInfo={insuredInfo}
                setInsuredInfo={setInsuredInfo}
              />
            </div>
          ) : (
            <div className="animate-fade-in">
              <NormalAgentForm
                insuredInfo={insuredInfo}
                setInsuredInfo={setInsuredInfo}
              />
            </div>
          ))}
      </Modal>
    </>
  );
};

// #727272    gray

// #FCF050    yellow
