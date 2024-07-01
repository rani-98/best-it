import React, { useState } from 'react';

const PhoneOtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handlePhoneSubmit = (event) => {
        event.preventDefault();
        // phone validation
        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(phoneNumber)) {
            setError("Please enter a valid 10-digit phone number.");
        } else {
            setError("");
            // proceed with the OTP request
            console.log("Phone number is valid:", phoneNumber);
        }
    };

    return (
        <div>
            <form onSubmit={handlePhoneSubmit}>
                <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    maxLength={10}
                    placeholder="Enter phone number"
                    className="border-black font-bold text-red-800"
                /><br />
                {error && <p className="text-red-600">{error}</p>}
                <button className="bg-green-500 p-2 rounded-lg mt-4" type="submit">Submit</button>
            </form>
            
        </div>
    );
};

export default PhoneOtpForm;
