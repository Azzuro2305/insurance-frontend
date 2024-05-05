import React, { useState } from 'react'
import { img } from '../img'

const AssociationAgent = () => {
    const [error, setError] = useState({});
    const [agentData, setAgentData] = useState({
        agentLicenseNum : '',
        password : '',
    });

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setAgentData({
           ...agentData,
            [name] : value,
        })
    };

    const checkHandler = async (e) => {
        e.preventDefault();

        const newError = {};
        if(!agentData.agentLicenseNum || !agentData.password){
            newError.agentLicenseNum = "This field is required."
            newError.password = "This field is required."
        }
        setError(newError);
    };
    return (
        <div>
            <form 
                className='bg-white w-[500px] mx-auto rounded'
                onSubmit={checkHandler}>
                <div>
                    <div className='flex justify-between border-b p-2 px-4'>
                        <h2 className='text-[#214C9B] font-[650] text-xl'>Check Agent Information</h2>
                        <img className='size-8' src={img.cancle} alt="" />
                    </div>
                    <div className='p-2 px-4 py-5'>
                        <div className='mb-2'>
                            <label className='text-[#214C9B] font-semibold text-base'>
                                Agent License Number<span className='text-red-600 font-bold'>*</span>
                            </label>
                            <div>
                                <input type="text"
                                    name="agentLicenseNum"
                                    value={agentData.agentLicenseNum}
                                    onChange={inputHandler}
                                    className=' border rounded-[3px] w-full border-gray-300 px-3 py-[6px] my-3 outline-none  focus:ring-4 duration-300'
                                    placeholder='ENTER AGENT LICENSE NO.' />
                                {error.agentLicenseNum && (
                                    <p className='text-red-500 font-semibold text-[15px] mb-5'>
                                        {error.agentLicenseNum}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className='mb-2'>
                            <label className='text-[#214C9B] font-semibold text-base'>
                                Password <span className='text-red-600 font-bold'>*</span>
                            </label>
                            <div>
                                <input type="text"
                                    name="password"
                                    value={agentData.password}
                                    onChange={inputHandler}
                                    placeholder='00-0000'
                                    className=' border rounded-[3px] w-full border-gray-300 px-3 py-[6px] my-3 outline-none  focus:ring-4 duration-300' />
                                {error.password && (
                                    <p className='text-red-500 font-semibold text-[15px] mb-5'>
                                        {error.password}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button className='bg-[#214C9B] text-white mt-1 px-6 py-2 rounded-[3px] hover:bg-white hover:border-[#214C9B] border hover:text-[#214C9B] transition-all duration-300'>
                            CHECK AGENT
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AssociationAgent