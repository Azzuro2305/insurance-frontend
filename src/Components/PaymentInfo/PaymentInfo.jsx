import React, { useState } from 'react'

const PaymentInfo = () => {
    const [paymentData, setPaymentData] = useState([]);
    const [passportData, setPassportData] = useState([]);
    const [insuredData, setInsuredData] = useState([]);
    const [beneficiaryData, setBeneficiaryData] = useState([]);

    return (
        <div className='bg-white rounded-md shadow-md my-8'>
            <div className='xs2:p-3 md:p-12'>
                <h2 className='xs2:text-xl md:text-2xl text-[#214C9B] font-semibold tracking-tighter mb-7'>PLEASE CHECK PAYMENT AND INSURED PERSON INFORMATION</h2>

                {/* payment information table */}
                <div className='mb-5'>
                    <p className='text-base text-[#214C9B] font-bold underline'>PAYMENT INFORMATION</p>
                    <table className='bg-[#ffef00b3] w-full my-3 '>
                        <tbody className='xs2:text-sm md:text-base '>
                            <tr className='border-b border-white'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Payment Channel</td>
                                <td className='xs2:px-2 md:px-4 uppercase'>Visa</td>
                            </tr>
                            <tr className='border-b border-white'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Premium Amount</td>
                                {/* <td className='xs2:px-2 md:px-4'>{paymentData.}</td> */}
                            </tr>
                            <tr className='border-b border-white'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Service Charge ( Visa )</td>
                                {/* <td className='xs2:px-2 md:px-4'>{paymentData.}</td> */}
                            </tr>
                            <tr className='border-b border-white'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Total Amount (Including Service Charges)</td>
                                {/* <td className='xs2:px-2 md:px-4'>{paymentData.}</td> */}
                            </tr>
                            <tr className='border-b border-white'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Net Amount (Including Service Charges)</td>
                                {/* <td className='xs2:px-2 md:px-4'>{paymentData.}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* passport information */}
                <div className='mb-5'>
                    <p className='text-base text-[#214C9B] font-bold underline'>INSURED PERSON'S PASSPORT INFORMATION</p>
                    <table className='w-full my-3'>
                        <tbody className='xs2:text-sm md:text-base align-text-top'>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Passport Number <br />နိုင်ငံကူးလက်မှတ်အမှတ်</td>
                                {/* <td className='xs2:px-2 md:px-4'>{passportData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Passport Issued Date <br />နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နေ့</td>
                                {/* <td className='xs2:px-2 md:px-4'>{passportData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Passport Issued Country <br />နိုင်ငံကူးလက်မှတ်ထုတ်ပေးသည့်နိုင်ငံ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{passportData.}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* insured person information */}
                <div className='mb-5'>
                    <p className='text-base text-[#214C9B] font-bold underline'>INSURED PERSON INFORMATION</p>
                    <table className='w-full my-3'>
                        <tbody className='xs2:text-sm md:text-base align-text-top'>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Insured For</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>Buy For {insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Name (as per passport)<br />အမည်(နိုင်ငံကူးလက်မှတ်ပါအမည်)</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Date of Birth (as per passport)<br />မွေးသက္ကရာဇ်(နိုင်ငံကူးလက်မှတ်ပါမွေးသက္ကရာဇ်)</td>
                                {/* <td className='xs2:px-2 md:px-4'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Gender (as per passport)<br />ကျား/မ(နိုင်ငံကူးလက်မှတ်ပါ)</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Estimate Departure Date<br />ထွက်ခွာမည့်နေ့(ခန့်မှန်းခြေ)</td>
                                {/* <td className='xs2:px-2 md:px-4'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Child Name<br />ကလေးအမည်</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Date of Birth (Child)<br />မွေးသက္ကရာဇ်</td>
                                {/* <td className='xs2:px-2 md:px-4'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Gender (Child)<br />ကျား/မ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Guardiance Name (Child)<br />အုပ်ထိန်းသူအမည်</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Relationship (Child)<br />တော်စပ်ပုံ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Journey From<br />ထွက်ခွာမည့်နိုင်ငံ</td>
                                <td className='xs2:px-2 md:px-4 uppercase'>Myanmar</td>
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Journey To<br />ဆိုက်ရောက်မည့်နိုင်ငံ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Coverage Plan<br />အာမခံသက်တမ်း</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Packages<br />ပက်ကေ့ချ်</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Policy Start Date<br />ပေါ်လစီစတင်မည့်နေ့</td>
                                {/* <td className='xs2:px-2 md:px-4'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Contact Phone Number<br />ဆက်သွယ်ရမည့်ဖုန်းနံပါတ်</td>
                                {/* <td className='xs2:px-2 md:px-4'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Foreign Contact Number<br />ဆက်သွယ်ရမည့်နိုင်ငံခြားဖုန်းနံပါတ်</td>
                                {/* <td className='xs2:px-2 md:px-4'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Father's Name<br />ဖခင်အမည်</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Race<br />လူမျိုး</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Occupation<br />အလုပ်အကိုင်</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Marital Status<br />အိမ်ထောင်ရှိ/မရှိ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Insured's Email Address<br />အီးမေးလ်လိပ်စာ</td>
                                {/* <td className='xs2:px-2 md:px-4'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Address Abroad<br />ဆိုက်ရောက်မည့်နိုင်ငံနေရပ်လိပ်စာ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Destination Country<br />ဆိုက်ရောက်မည့်နိုင်ငံ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Address in Myanmar<br />မြန်မာနိုင်ငံရှိနေရပ်လိပ်စာ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{insuredData.}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* beneficiary information */}
                <div className='mb-5'>
                    <p className='text-base text-[#214C9B] font-bold underline'>BENEFICIARY INFORMATION / အကျိုးခံစားခွင့်ရှိသူနှင့် သက်ဆိုင်သော အချက်အလက်</p>
                    <table className='w-full my-3'>
                        <tbody className='xs2:text-sm md:text-base align-text-top'>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Name <br />အမည်</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{beneficiaryData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Date of Birth<br />မွေးသက္ကရာဇ်</td>
                                {/* <td className='xs2:px-2 md:px-4'>{beneficiaryData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Relationship<br />တော်စပ်ပုံ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{beneficiaryData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>National Identification Number<br />နိုင်ငံသားစိစစ်ရေးကတ်ပြားအမှတ်</td>
                                {/* <td className='xs2:px-2 md:px-4'>{beneficiaryData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Contact Phone Number<br />ဆက်သွယ်ရမည့်ဖုန်းနံပါတ်</td>
                                {/* <td className='xs2:px-2 md:px-4'>{beneficiaryData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Email<br />အီးမေးလ်လိပ်စာ</td>
                                {/* <td className='xs2:px-2 md:px-4'>{beneficiaryData.}</td> */}
                            </tr>
                            <tr className='border-b'>
                                <td className='w-[350px] p-2 font-semibold xs2:px-2 md:px-4'>Address<br />နေရပ်လိပ်စာ</td>
                                {/* <td className='xs2:px-2 md:px-4 uppercase'>{beneficiaryData.}</td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>

                <button className='bg-[#214C9B] text-white px-6 py-1 rounded-[3px] hover:bg-white hover:border-[#214C9B] border hover:text-[#214C9B] transition-all duration-300'>
                    CONFIRM
                </button>
            </div>
        </div>
    )
}

export default PaymentInfo