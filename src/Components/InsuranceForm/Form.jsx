import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Images from "../Images/Images";
import { AssociationAgentForm } from "../AssociationAgentForm/AssociationAgentForm";
import { NormalAgentForm } from "../NormalAgentForm/NormalAgentForm";
import Modal from "react-modal";
import axios from "axios";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export const Form = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();
  const [errors, setErrors] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  Modal.setAppElement("#root");

  const [buyOption, setBuyOption] = useState("foryourself");

  const [countries, setCountries] = useState([]);

  const [insuredInfo, setInsuredInfo] = useState({
    // insured information
    passportNumber: "",
    passportIssuedDate: "",
    passportIssuedCountry: "",
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
    agentOption: "selfservice",
  });

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

  const submitHandler = async (e) => {
    // const registerUrl = "http://localhost:8080/insured-person";
    e.preventDefault();
    const newError = {};
    if (!insuredInfo.passportNumber || !insuredInfo.passportIssuedDate || !insuredInfo.passportIssuedCountry || !insuredInfo.insuredName || !insuredInfo.insuredDOB || !insuredInfo.insuredGender || !insuredInfo.estimateDepartureDate || !insuredInfo.journeyTo || !insuredInfo.policyStartDate || !insuredInfo.coveragePlan || !insuredInfo.packages || !insuredInfo.insuredPhoneNumber || !insuredInfo.insuredAddressAbroad || !insuredInfo.destinationCountry || !insuredInfo.childName || !insuredInfo.childDOB || !insuredInfo.childGender || !insuredInfo.guardianceName || !insuredInfo.childRelationship || !insuredInfo.beneficiaryName || !insuredInfo.beneficiaryDOB || !insuredInfo.beneficiaryRelationship || !insuredInfo.beneficiaryPhoneNumber || !insuredInfo.agentLicenseNumber || !insuredInfo.agentName) {
      newError.passportNumber = "This field is required."
      newError.passportIssuedDate = "This field is required."
      newError.passportIssuedCountry = "This field is required."
      newError.insuredName = "This field is required."
      newError.insuredDOB = "This field is required."
      newError.insuredGender = "This field is required."
      newError.estimateDepartureDate = "This field is required."
      newError.journeyTo = "This field is required."
      newError.policyStartDate = "This field is required."
      newError.coveragePlan = "This field is required."
      newError.packages = "This field is required."
      newError.insuredPhoneNumber = "This field is required."
      newError.insuredAddressAbroad = "This field is required."
      newError.destinationCountry = "This field is required."
      newError.childName = "This field is required."
      newError.childDOB = "This field is required."
      newError.childGender = "This field is required."
      newError.guardianceName = "This field is required."
      newError.childRelationship = "This field is required."
      newError.beneficiaryName = "This field is required."
      newError.beneficiaryDOB = "This field is required."
      newError.beneficiaryRelationship = "This field is required."
      newError.beneficiaryPhoneNumber = "This field is required."
      newError.agentLicenseNumber = "This field is required."
      newError.agentName = "This field is required."
    }
    setErrors(newError);
    try {
      const response = await axios.post("http://localhost:8080/insured-person", insuredInfo);
      console.log(response.data);
      console.log(insuredInfo);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(countries);

  //   ------------------- API (END) -------------------
  return (
    <>
      <form
        onSubmit={submitHandler}
        action=""
        className="text-[#214C9B] bg-white text-[14px] font-[500] xs2:w-11/12 xs2:mx-auto sm:w-[510px] md:w-[690px] mid:w-[960px] medium:w-[1150px] mx-auto rounded-md shadow-lg py-12 px-8"
      >
        <h1 className="text-[16px] font-semibold underline-offset-auto underline">
          PASSPORT INFORMATION (In English)
        </h1>
        {/* // ------------------- 1st ------------------- */}
        <div className="mid:grid mid:grid-cols-3 space-y-3 mid:space-y-0 gap-8 mt-4">
          <div className="flex flex-col">
            <label htmlFor="">Passport Number</label>
            <label htmlFor="">
              နိုင်ငံကူးလက်မှတ်အမှတ် <span className="text-red-600">*</span>
            </label>
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
            {errors.passportNumber && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.passportNumber}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Passport Issued Date</label>
            <label htmlFor="">
              နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နေ့{" "}
              <span className="text-red-600">*</span>
            </label>
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
            {errors.passportIssuedDate && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.passportIssuedDate}
              </p>
            )}
            {/* <DatePicker
  selected={dates.estimateDeparture}
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
  // minDate={new Date()}
/> */}





            {/* <DatePicker
  selected={startDate}
  onChange={(date) => {
	if (filterFutureMonths(date)) {
	  handleDateChange(date);
	}
  }}
  dateFormat="yyyy-MM-dd"
  customInput={<CustomInput />}
  renderMonthDropdown={(props) => <CustomMonthDropdown {...props} />}
  showMonthDropdown
  showYearDropdown
  dropdownMode="select"
  minDate={new Date(currentYear - 15, currentMonth, currentDay)}
  maxDate={maxDate}
  filterDate={filterFutureMonths}
/> */}
            {/* <DatePicker
  selected={startDate}
  onChange={handleDateChange}
  dateFormat="yyyy-MM-dd"
  customInput={<CustomInput />}
  renderMonthDropdown={(props) => <CustomMonthDropdown {...props} />}
  showMonthDropdown
  showYearDropdown
  dropdownMode="select"
/> */}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Passport Issued Country</label>
            <label htmlFor="">
              နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နိုင်ငံ{" "}
              <span className="text-red-600">*</span>
            </label>
            <select
              className="text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              name=""
              id=""
              onChange={(e) =>
                setInsuredInfo({
                  ...insuredInfo,
                  passportIssuedCountry: e.target.value,
                })
              }
            >
              <option value="">SELECT ONE</option>
              {Array.isArray(countries) &&
                countries.map((country, index) => (
                  <option key={index} value={country.countryID}>
                    {country.countryName}
                  </option>
                ))}
            </select>
            {errors.passportIssuedCountry && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.passportIssuedCountry}
              </p>
            )}
          </div>
        </div>
        <hr className="border-t-1 my-6 border-[#CFD4D9]" />
        <h1 className="text-[16px] font-semibold underline">
          INSURED INFORMATION (In English)
        </h1>
        <div className="md:grid md:grid-cols-3 mb-3">
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
              className="xs2:w-5 md:w-6 md:h-6"
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
              className="xs2:w-9 xs:w-6 md:h-6"
            />
            <label htmlFor="forthechild" className="ml-2 w-[550px]">
              BUY FOR THE CHILD TRAVEL TOGETHER WITH THIS PASSPORT HOLDER (CHILD
              IS NOT HOLDING A VALID PASSPORT)
            </label>
          </div>
        </div>
        <div className="mid:grid mid:grid-cols-3 space-y-3 mid:space-y-0 gap-8">
          {/* // ------------------- 2nd ------------------- */}
          <div className="flex flex-col">
            <label htmlFor="">Name (as per passport)</label>
            <label htmlFor="">
              အမည်(နိုင်ငံကူးလက်မှတ်ပါအမည်){" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER INSURED NAME"
              type="text"
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, insuredName: e.target.value })
              }
            />
            {errors.insuredName && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.insuredName}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Date of Birth (as per passport)</label>
            <label htmlFor="">
              မွေးသက္ကရာဇ်(နိုင်ငံကူးလက်မှတ်ပါမွေးသက္ကရာဇ်){" "}
              <span className="text-red-600">*</span>
            </label>
            {/* <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="yyyy-MM-dd"
              type="text"
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, insuredDOB: e.target.value })
              }
            /> */}
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
            {errors.insuredDOB && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.insuredDOB}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Gender (as per passport)</label>
            <label htmlFor="">
              ကျား/မ(နိုင်ငံကူးလက်မှတ်ပါ){" "}
              <span className="text-red-600">*</span>
            </label>
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
            {errors.insuredGender && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.insuredGender}
              </p>
            )}
          </div>

          {/* // ------------------- 3rd ------------------- */}


          {/* <DatePicker
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
            /> */}

          <div className="flex flex-col">
            <label htmlFor="">Estimate Departure Date</label>
            <label htmlFor="">
              ထွက်ခွာမည့်နေ့(ခန့်မှန်းခြေ){" "}
              <span className="text-red-600">*</span>
            </label>
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
            {errors.estimateDepartureDate && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.estimateDepartureDate}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Journey From</label>
            <label htmlFor="">
              ထွက်ခွာမည့်နိုင်ငံ <span className="text-red-600">*</span>
            </label>
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
            <label htmlFor="">
              ဆိုက်ရောက်မည့်နိုင်ငံ <span className="text-red-600">*</span>
            </label>
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
            {errors.journeyTo && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.journeyTo}
              </p>
            )}
          </div>
          {/* // ------------------- 4th ------------------- */}
          <div className="flex flex-col">
            <label htmlFor="">Policy Start Date</label>
            <label htmlFor="">
              ပေါ်လစီစတင်မည့်နေ့ <span className="text-red-600">*</span>
            </label>
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
              minDate={new Date(currentYear - 15, currentMonth, currentDay)}
              maxDate={maxDate}
              filterDate={filterFutureMonths}
            />
            {errors.policyStartDate && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.policyStartDate}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Coverage Plan</label>
            <label htmlFor="">
              အာမခံသက်တမ်း <span className="text-red-600">*</span>
            </label>
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
            {errors.coveragePlan && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.coveragePlan}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Packages</label>
            <label htmlFor="">
              ပက်ကေ့ချ် <span className="text-red-600">*</span>
            </label>
            <select
              className="text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="SELECT ONE"
              name=""
              id=""
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, packages: e.target.value })
              }
            >
              <option value="">SELECT ONE</option>
              <option value="10000">USD 10,000</option>
              <option value="30000">USD 30,000</option>
              <option value="50000">USD 50,000</option>
            </select>
            {errors.packages && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.packages}
              </p>
            )}
          </div>
          {/* // ------------------- 5th ------------------- */}
          <div className="flex flex-col">
            <label htmlFor="">Insured's Contact Phone Number</label>
            <label htmlFor="">
              ဆက်သွယ်ရမည့်ဖုန်းနံပါတ် <span className="text-red-600">*</span>
            </label>

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
            {errors.insuredPhoneNumber && (
              <p className='text-red-500 font-semibold text-base pl-20 mt-2'>
                {errors.insuredPhoneNumber}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Foreign Contact Number</label>
            <label htmlFor="">ဆက်သွယ်ရမည့်နိုင်ငံခြားဖုန်းနံပါတ်</label>

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
            <label htmlFor="">ဖခင်အမည်</label>
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
            <label htmlFor="">လူမျိုး</label>
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
            <label htmlFor="">အလုပ်အကိုင်</label>
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
            <label htmlFor="">အိမ်ထောင်ရှိ/မရှိ</label>
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
            <label htmlFor="">အီးမေးလ်လိပ်စာ</label>
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
            <label htmlFor="">
              မြန်မာနိုင်ငံရှိနေရပ်လိပ်စာ (Max: 250 Char)
            </label>
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
            <label htmlFor="">
              ဆိုက်ရောက်မည့်နိုင်ငံနေရပ်လိပ်စာ (Max: 250 Char){" "}
              <span className="text-red-600">*</span>
            </label>
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
            {errors.insuredAddressAbroad && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.insuredAddressAbroad}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Destination Country</label>
            <label htmlFor="">
              ဆိုက်ရောက်မည့်နိုင်ငံ <span className="text-red-600">*</span>
            </label>
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
            {errors.destinationCountry && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.destinationCountry}
              </p>
            )}
          </div>
        </div>

        {/* Child Information */}
        {insuredInfo.buyOption === "forthechild" && (
          <div className="bg-[#DDDDDD] my-6 p-4">
            <h1 className="text-[16px] font-semibold underline">
              CHILD INFORMATION (CHILD IS NOT HOLDING A VALID PASSPORT)
            </h1>
            <div className="mid:grid mid:grid-cols-3 space-y-3 mid:space-y-0 gap-8 mt-4">
              <div className="flex flex-col">
                <label htmlFor="">Child Name</label>
                <label htmlFor="">
                  ကလေးအမည် *<span className="text-red-600">*</span>
                </label>
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
                {errors.childName && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.childName}
              </p>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Date of Birth</label>
                <label htmlFor="">
                  မွေးသက္ကရာဇ် <span className="text-red-600">*</span>
                </label>
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
                {errors.childDOB && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.childDOB}
              </p>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Gender</label>
                <label htmlFor="">
                  ကျား/မ <span className="text-red-600">*</span>
                </label>
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
                {errors.childGender && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.childGender}
              </p>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Guardiance Name</label>
                <label htmlFor="">
                  အုပ်ထိန်းသူအမည် <span className="text-red-600">*</span>
                </label>
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
                {errors.guardianceName && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.guardianceName}
              </p>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Relationship</label>
                <label htmlFor="">
                  တော်စပ်ပုံ <span className="text-red-600">*</span>
                </label>
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
                {errors.childRelationship && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.childRelationship}
              </p>
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
        <div className="mid:grid mid:grid-cols-3 space-y-3 mid:space-y-0 gap-8 mt-4">
          <div className="flex flex-col">
            <label htmlFor="">Name</label>
            <label htmlFor="">
              အမည် <span className="text-red-600">*</span>
            </label>
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
            {errors.beneficiaryName && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.beneficiaryName}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Date of Birth</label>
            <label htmlFor="">
              မွေးသက္ကရာဇ် <span className="text-red-600">*</span>
            </label>
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
            {errors.beneficiaryDOB && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.beneficiaryDOB}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Relationship</label>
            <label htmlFor="">
              တော်စပ်ပုံ <span className="text-red-600">*</span>
            </label>
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
            {errors.beneficiaryRelationship && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.beneficiaryRelationship}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Contact Phone Number</label>
            <label htmlFor="">
              ဆက်သွယ်ရမည့်ဖုန်းနံပါတ် <span className="text-red-600">*</span>
            </label>

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
            {errors.beneficiaryPhoneNumber && (
              <p className='text-red-500 font-semibold text-base pl-20 mt-2'>
                {errors.beneficiaryPhoneNumber}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">National Identificaiton Number</label>
            <label htmlFor="">နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ်</label>
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
            <label htmlFor="">အီးမေးလ်လိပ်စာ</label>
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
            <label htmlFor="">နေရပ်လိပ်စာ(Max: 250 Char)</label>
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
          <div className="md:flex space-y-2 md:space-y-0 gap-x-6 mt-2">
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                id="selfservice"
                name="agentoption"
                value="selfservice"
                checked={insuredInfo.agentOption === "selfservice"}
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    agentOption: e.target.value,
                  })
                }
                className="w-6 h-6 flex-none"
              />
              <div
                className={`flex gap-x-1 items-center p-2 border-2 ${insuredInfo.agentOption === "selfservice"
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
                checked={insuredInfo.agentOption === "normalagent"}
                onChange={(e) => {
                  setInsuredInfo({
                    ...insuredInfo,
                    agentOption: e.target.value,
                    hasAgent: true,
                  });
                  setIsModalOpen(true);
                }}
                className="w-6 h-6 flex-none"
              />
              <div
                className={`flex gap-x-1 items-center p-2 border-2 ${insuredInfo.agentOption === "normalagent"
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
                checked={insuredInfo.agentOption === "associationagent"}
                onChange={(e) => {
                  setInsuredInfo({
                    ...insuredInfo,
                    agentOption: e.target.value,
                    hasAgent: true,
                  });
                  setIsModalOpen(true);
                }}
                className="w-6 h-6 flex-none"
              />
              <div
                className={`flex gap-x-1 items-center p-2 border-2 ${insuredInfo.agentOption === "associationagent"
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

          {insuredInfo.agentOption === "normalagent" && (
            <div className="md:grid md:grid-cols-3 gap-x-8 space-y-3 md:space-y-0 mt-4">
              <div className="flex flex-col">
                <label htmlFor="">
                  Agent Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder={
                    insuredInfo.isValidated
                      ? insuredInfo.agentName
                      : "AGENT NAME"
                  }
                  type="text"
                />
                {errors.agentName && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.agentName}
              </p>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">
                  Agent License Number <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder={
                    insuredInfo.isValidated
                      ? insuredInfo.agentLicenseNumber
                      : "AGENT LICENSE NUMBER"
                  }
                  type="text"
                />
                {errors.agentLicenseNumber && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.agentLicenseNumber}
              </p>
            )}
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

          {insuredInfo.agentOption === "associationagent" && (
            <div className="md:grid md:grid-cols-3 gap-x-8 space-y-3 md:space-y-0 mt-4">
              <div className="flex flex-col">
                <label htmlFor="">
                  Agent License Number <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder={
                    insuredInfo.isValidated ? "testing" : "AGENT LICENSE NUMBER"
                  }
                  type="text"
                  // disabled
                />
                {errors.agentLicenseNumber && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.agentLicenseNumber}
              </p>
            )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder=""
                  type="text"
                  // disabled
                />
                {errors.agentName && (
              <p className='text-red-500 font-semibold text-base mt-2'>
                {errors.agentName}
              </p>
            )}
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
          className="bg-[#214C9B] text-white hover:bg-white hover:border-[#214C9B] border hover:text-[#214C9B] transition-all duration-300 px-6 py-2 rounded-sm"
          type="submit"

          value="SUBMIT AND CONTINUE"
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
          className="ml-auto  text-[#214C9B] text-[20px] font-[900] z-index-20 absolute right-6 w-10 rounded-full p-2"
          style={{ zIndex: 1 }}
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
        {isModalOpen &&
          (insuredInfo.agentOption === "associationagent" ? (
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
