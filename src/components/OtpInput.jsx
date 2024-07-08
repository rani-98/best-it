import { useState } from "react";
import { Link } from "react-router-dom";

const OtpInput = ({ length = 4, onOtpSubmit = () => {} }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));

    const handleChange = (element, index) => {
        const value = element.value;
        if (/^[0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move focus to the next input field
            if (value !== "" && index < length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (event, index) => {
        if (event.key === "Backspace" && otp[index] === "" && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const otpValue = otp.join("");
        onOtpSubmit(otpValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            {otp.map((value, index) => (
                <input
                    key={index}
                    id={`otp-input-${index}`}
                    type="text"
                    value={value}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    maxLength={1}
                    className="border p-2 m-1 text-center w-10"
                />
            ))}
            <br />
            <Link to="/dashboard"><button className='bg-orange-500 border-2 border-black w-20 h-10 rounded-xl' >submit</button></Link>

        </form>
    );
};

export default OtpInput;
