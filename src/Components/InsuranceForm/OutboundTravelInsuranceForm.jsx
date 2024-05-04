import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Images from "../Images/Images";
import "react-datepicker/dist/react-datepicker.css";

export const OutboundTravelInsuranceForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(new Date());
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  console.log(currentMonth);
  const currentDay = new Date().getDate();

  const [buyOption, setBuyOption] = useState("foryourself");

  const [insuredInfo, setInsuredInfo] = useState({
    buyOption: "foryourself",
    maritalStatus: "single",
    agentOption: "selfservice",
  });

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="w-full text-left bg-[#EAECEF] text-[#4A5056] border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
      onClick={(event) => {
        event.preventDefault();
        onClick();
      }}
      ref={ref}
    >
      {value}
    </button>
  ));

  const handleDateChange = (date) => {
    setStartDate(date);
    if (date.getFullYear() === new Date().getFullYear()) {
      setMaxDate(new Date());
    } else {
      setMaxDate(new Date(date.getFullYear(), 11, 31));
    }
  };

  const filterFutureMonths = (date) => {
    const currentDate = new Date();
    return (
      date.getFullYear() < currentDate.getFullYear() ||
      (date.getFullYear() === currentDate.getFullYear() &&
        date.getMonth() <= currentDate.getMonth())
    );
  };

  return (
    <>
      <form
        action=""
        className="text-[#214C9B] bg-white text-[14px] font-semibold w-[1150px] mx-auto rounded-md shadow-lg py-12 px-8"
      >
        <h1 className="text-[16px] font-semibold">
          PASSPORT INFORMATION (In English)
        </h1>
        {/* // ------------------- 1st ------------------- */}
        <div className="grid grid-cols-3 gap-8 mt-4">
          <div className="flex flex-col">
            <label htmlFor="">Passport Number</label>
            <label htmlFor="">
              နိုင်ငံကူးလက်မှတ်အမှတ် <span className="text-red-600">*</span>
            </label>
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER YOUR PASSPORT NO"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Passport Issued Date</label>
            <label htmlFor="">
              နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နေ့{" "}
              <span className="text-red-600">*</span>
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                if (filterFutureMonths(date)) {
                  handleDateChange(date);
                }
              }}
              dateFormat="dd-MM-yyyy"
              customInput={<CustomInput />}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              minDate={new Date(currentYear - 15, currentMonth, currentDay)}
              maxDate={maxDate}
              filterDate={filterFutureMonths}
            />
            {/* <DatePicker
  selected={startDate}
  onChange={(date) => {
	if (filterFutureMonths(date)) {
	  handleDateChange(date);
	}
  }}
  dateFormat="dd-MM-yyyy"
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
  dateFormat="dd-MM-yyyy"
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
            >
              <option value="">SELECT ONE</option>
            </select>
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
              checked={insuredInfo.buyOption === "foryourself"}
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, buyOption: e.target.value })
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
              checked={insuredInfo.buyOption === "forthechild"}
              onChange={(e) =>
                setInsuredInfo({ ...insuredInfo, buyOption: e.target.value })
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
            <label htmlFor="">
              အမည်(နိုင်ငံကူးလက်မှတ်ပါအမည်){" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER INSURED NAME"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Date of Birth (as per passport)</label>
            <label htmlFor="">
              မွေးသက္ကရာဇ်(နိုင်ငံကူးလက်မှတ်ပါမွေးသက္ကရာဇ်){" "}
              <span className="text-red-600">*</span>
            </label>
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="DD-MM-YYYY"
              type="text"
            />
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
            >
              <option value="">SELECT ONE</option>
              <option value="male">MALE</option>
              <option value="female">FEMALE</option>
            </select>
          </div>

          {/* // ------------------- 3rd ------------------- */}

          <div className="flex flex-col">
            <label htmlFor="">Estimate Departure Date</label>
            <label htmlFor="">
              ထွက်ခွာမည့်နေ့(ခန့်မှန်းခြေ){" "}
              <span className="text-red-600">*</span>
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                if (filterFutureMonths(date)) {
                  handleDateChange(date);
                }
              }}
              dateFormat="dd-MM-yyyy"
              customInput={<CustomInput />}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              minDate={new Date(currentYear - 15, currentMonth, currentDay)}
              maxDate={maxDate}
              filterDate={filterFutureMonths}
            />
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
            >
              <option value="">SELECT ONE</option>
            </select>
          </div>
          {/* // ------------------- 4th ------------------- */}
          <div className="flex flex-col">
            <label htmlFor="">Policy Start Date</label>
            <label htmlFor="">
              ပေါ်လစီစတင်မည့်နေ့ <span className="text-red-600">*</span>
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                if (filterFutureMonths(date)) {
                  handleDateChange(date);
                }
              }}
              dateFormat="dd-MM-yyyy"
              customInput={<CustomInput />}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              minDate={new Date(currentYear - 15, currentMonth, currentDay)}
              maxDate={maxDate}
              filterDate={filterFutureMonths}
            />
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
            >
              <option value="">SELECT ONE</option>
            </select>
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
            >
              <option value="">SELECT ONE</option>
            </select>
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
              >
                <option className="cols-span-1" value="">
                  SELECT
                </option>
              </select>
              <input
                className="col-span-3 rounded-md p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                placeholder="ENTER PHONE NUMBER"
                type="text"
              />
            </div>
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
              >
                <option value="">SELECT</option>
              </select>
              <input
                className="col-span-3 rounded-md p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                placeholder="ENTER PHONE NUMBER"
                type="text"
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
            />
          </div>

          {/* // ------------------- 6th ------------------- */}
          <div className="flex flex-col">
            <label htmlFor="">Race</label>
            <label htmlFor="">လူမျိုး</label>
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER YOUR FATHER NAME"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Occupation</label>
            <label htmlFor="">အလုပ်အကိုင်</label>
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER YOUR FATHER NAME"
              type="text"
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
            />
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
            >
              <option value="">SELECT ONE</option>
            </select>
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
                <label htmlFor="">
                  ကလေးအမည် *<span className="text-red-600">*</span>
                </label>
                <input
                  className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                  placeholder="ENTER CHILD NAME"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Date of Birth</label>
                <label htmlFor="">
                  မွေးသက္ကရာဇ် <span className="text-red-600">*</span>
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    if (filterFutureMonths(date)) {
                      handleDateChange(date);
                    }
                  }}
                  dateFormat="dd-MM-yyyy"
                  customInput={<CustomInput />}
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  minDate={new Date(currentYear - 15, currentMonth, currentDay)}
                  maxDate={maxDate}
                  filterDate={filterFutureMonths}
                />
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
                >
                  <option value="">SELECT ONE</option>
                  <option value="male">MALE</option>
                  <option value="female">FEMALE</option>
                </select>
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
                />
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
                />
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
            <label htmlFor="">
              အမည် <span className="text-red-600">*</span>
            </label>
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER NAME"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Date of Birth</label>
            <label htmlFor="">
              မွေးသက္ကရာဇ် <span className="text-red-600">*</span>
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                if (filterFutureMonths(date)) {
                  handleDateChange(date);
                }
              }}
              dateFormat="dd-MM-yyyy"
              customInput={<CustomInput />}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              minDate={new Date(currentYear - 15, currentMonth, currentDay)}
              maxDate={maxDate}
              filterDate={filterFutureMonths}
            />
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
            />
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
              >
                <option className="cols-span-1" value="">
                  SELECT
                </option>
              </select>
              <input
                className="col-span-3 rounded-md p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
                placeholder="ENTER PHONE NUMBER"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">National Identificaiton Number</label>
            <label htmlFor="">နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ်</label>
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="ENTER NATIONAL IDENTIFICATION NUMBER"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <label htmlFor="">အီးမေးလ်လိပ်စာ</label>
            <input
              className="border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="Enter Email"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Address</label>
            <label htmlFor="">နေရပ်လိပ်စာ(Max: 250 Char)</label>
            <textarea
              className="resize-none border-2 border-gray-[#CFD4D9] rounded-md mt-2 p-2 focus:border-[1px] focus:border-[#8ABAF9] focus:outline-none focus:ring-[3px] focus:ring-[#CCDDFD]"
              placeholder="..."
              rows="5"
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
                id="selfService"
                name="agentOption"
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
			  {/* #FCF050 */}
			  <div className="flex gap-x-1 items-center p-2 border-2 border-[#DDDDDD] bg-white">
				<img className="w-[30px]" src={Images.selfService} alt="" />
				<label htmlFor="associationAgent">
					SELF-SERVICE
				</label>
			  </div>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                id="normalAgent"
                name="agentOption"
                value="normalagent"
                checked={insuredInfo.agentOption === "normalAgent"}
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    agentOption: e.target.value,
                  })
                }
                className="w-6 h-6 flex-none"
              />
			  <div className="flex gap-x-1 items-center p-2 border-2 border-[#DDDDDD] bg-white">
				<img className="w-[30px]" src={Images.normalAgent} alt="" />
				<label htmlFor="associationAgent">
					AGENT VERIFICATION
				</label>
			  </div>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                id="associationAgent"
                name="agentOption"
                value="associationagent"
                checked={insuredInfo.agentOption === "associationAgent"}
                onChange={(e) =>
                  setInsuredInfo({
                    ...insuredInfo,
                    agentOption: e.target.value,
                  })
                }
                className="w-6 h-6 flex-none"
              />
			  <div className="flex gap-x-1 items-center p-2 border-2 border-[#DDDDDD] bg-white">
				<img className="w-[30px]" src={Images.associationAgent} alt="" />
				<label htmlFor="associationAgent">
					ASSOCIATION AGENT VERIFICATION
				</label>
			  </div>
			  
            </div>
          </div>
        </div>
		<input className="bg-[#214C9B] text-white px-6 py-2 rounded-sm" type="submit" value="SUBMIT AND CONTINUE"/>
      </form>
    </>
  );
};
