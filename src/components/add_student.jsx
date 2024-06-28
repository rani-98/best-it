import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
    const [data, setData] = useState({
        student_name: '',
        mobile: '',
        email: '',
        location: '',
        course_name: '',
    });

    const { student_name, mobile, email, location, course_name } = data;
    const navigate = useNavigate();

    const changeHandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        // Validation check
        if (!student_name || !mobile || !email || !location || !course_name) {
            alert('All fields are required.');
            return;
        }

        console.log(data); // Log data before navigating

        try {
            const response = await fetch('http://localhost:5000/add_student', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                navigate('/student');
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex flex-col p-5 bg-gray-300">
            <h1 className="text-2xl font-black p-7">Add Student Details</h1>
            <form onSubmit={submitHandler} className="flex flex-col p-20 gap-4">
                <label>Student Name:
                    <input type="text" name="student_name" value={student_name} onChange={changeHandler} />
                </label>
                <label>Mobile No.:
                    <input type="number" name="mobile" value={mobile} onChange={changeHandler} />
                </label>
                <label>Email Id:
                    <input type="email" name="email" value={email} onChange={changeHandler} />
                </label>
                <label>Location:
                    <input type="text" name="location" value={location} onChange={changeHandler} />
                </label>
                <label>Course Name:
                    <input type="text" name="course_name" value={course_name} onChange={changeHandler} />
                </label>
                <input className="w-20 h-10 rounded-md bg-green-400" type="submit" name="submit" />
            </form>
        </div>
    );
}
