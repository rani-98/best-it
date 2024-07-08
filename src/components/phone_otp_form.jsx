import React, { useState } from 'react';
import OtpInput from './OtpInput';

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneSubmit = (event) => {
        event.preventDefault();
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phoneNumber)) {
            alert("Invalid phone number");
            return;
        }
        // Call API to send OTP here
        
        setShowOtpInput(true);
    };

    const onOtpSubmit = (otp) => {
        console.log("Login successfully", otp);
        // Handle OTP submission here
    };

    return (
        <div>
            {!showOtpInput ? (
                <form onSubmit={handlePhoneSubmit}>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={handlePhoneNumber}
                        maxLength={10}
                        placeholder="Enter phone number"
                        className="border-black font-bold text-red-800"
                    /><br />
                    <button className="bg-green-500 p-2 rounded-lg mt-4" type="submit">Submit</button>
                </form>
            ) : (
                <div>
                    <p className='text-red-600'>OTP sent to {phoneNumber}</p>
                    {/* Assuming you have a custom OTP input component */}
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
                </div>
            )}
        </div>
    );
};

export default PhoneOtpForm;
