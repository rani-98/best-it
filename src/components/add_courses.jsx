import React, { useState } from "react";
import { BrowserRouter as Route, useNavigate } from "react-router-dom";

export default function AddCourses() {
    const [data, setData] = useState({
        course_name: '',
        course_price: '',
        course_duration: ''
    });

    const { course_name, course_price, course_duration } = data;
    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data); 
        
        fetch('http://localhost:5000/add_courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            navigate('/courses', { state: { data } }); // Pass data in the state object
        })
        .catch((error) => {
            console.log('Error:', error);
        });
    };

    return (
        <div className="p-5 bg-gray-300">
            <h1 className="text-2xl font-black p-7">Create New Course Details</h1>
            <center>
                <form onSubmit={submitHandler} className="flex flex-col gap-4 m-6 text-lg font-medium">
                    <label>
                        Course Name:
                        <input type="text" name="course_name" value={course_name} onChange={changeHandler} />
                    </label>
                    <label>
                        Course Price:
                        <input type="text" name="course_price" value={course_price} onChange={changeHandler} />
                    </label>
                    <label>
                        Course Duration:
                        <input type="number" name="course_duration" value={course_duration} onChange={changeHandler} />
                    </label>
                    <input className="w-20 h-10 rounded-md bg-green-400" type="submit" name="submit" />
                </form>
            </center>
        </div>
    );
}


