import React, { useState, useEffect } from 'react'
import axios from "axios";

const PassportSearch = ({ searchResult, setSearchResult, submitted, setSubmitted }) => {
    
    const [error, setError] =useState({});
    const [countries, setCountries] = useState([]);
    

    const [data,setData]=useState({
        passportNum:'',
        country:'',
    });

    const inputHandler = (e) =>{
        const {name,value} = e.target;
        setData({
            ...data,
            [name] : value,
        })
    };

    const searchHandler = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        const newError = {};
        if (!data.passportNum || !data.country) {
          newError.passportNum = "This field is required.";
          newError.country = "This field is required.";
          setError(newError);
        } else {
          try {
            const response = await axios.get(`http://localhost:8080/insured-person?passportNumber=${data.passportNum}&passportIssuedCountry=${"cb742412-bdde-406c-b08e-760f4adc4de0"}`);
            setSearchResult(response.data.data);
            console.log(response.data);
          } catch (err) {
            console.error(err);
          }
        }
      };


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

    return (
        <>
            <form onSubmit={searchHandler} className='mb-4'>
                <div className='flex justify-between mb-2'>
                    <div>
                        <label htmlFor="passportNum" className='text-[#214C9B] font-semibold text-[16px] text-center'>
                            Passport Number <span className=' text-red-500 font-bold'>*</span>
                        </label>
                        <div className=''>
                            <input type="text"
                                name="passportNum"
                                value={data.passportNum}
                                onChange={inputHandler}
                                className=' border rounded-[3px] w-[510px] border-gray-300 px-3 py-[6px] my-3 outline-none  focus:ring-4 duration-300'
                                placeholder='...' />
                                {error.passportNum && (
                                    <p className='text-red-500 font-semibold text-base mb-4'>
                                        {error.passportNum}
                                    </p>
                                )}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="passportNum" className='text-[#214C9B] font-semibold text-[16px] text-center'>
                            Passport Issued Country <span className=' text-red-500 font-bold'>*</span>
                        </label>
                        <div className=' w-1/2'>
                            <select name="country"
                            onChange={inputHandler}
                            value={data.country}
                            className=' border rounded-sm border-gray-300 px-3 py-[7px] my-3 w-[510px] focus:ring-4 duration-300'>
                                <option value="">SELECT ONE</option>
                                {Array.isArray(countries) &&
                countries.map((country, index) => (
                  <option key={index} value={country.id}>
                    {country.countryName}
                  </option>
                ))}
                            </select>
                            {error.country && (
                                    <p className='text-red-500 font-semibold text-base mb-4'>
                                        {error.country}
                                    </p>
                                )}
                        </div>
                    </div>
                </div>
                <button className='bg-[#214C9B] text-white px-8 py-1 rounded-[3px] hover:bg-white hover:border-[#214C9B] border hover:text-[#214C9B] transition-all duration-300'>
                    Search
                </button>
            </form>
        </>
    )
}

export default PassportSearch