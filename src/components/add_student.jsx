import React, { useState } from "react"
import ReactDOM from 'react-dom/client'
import { useNavigate } from "react-router-dom";

export default function add_student() {
    const[data,setData] = useState({})

    const {Student_name,mobile_no,email,location,course} = data;
    const navigate=useNavigate()

    const changeHandler = e =>{
        setData({...data,[e.target.name] : e.target.value})
        console.log(setData )


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data); // Log data before navigating
         navigate('/student', { state: [data]  }); // Pass data in the state object
    };
    return(
        
        <div className="p-5 bg-gray-300">
        <h1 className="text-2xl font-black p-7">add student details</h1>

        <form onSubmit={submitHandler}className="flex flex-col gap-4"> 
                    <label>Student Name : 
                    <input type="text" name="student_name" value={Student_name} onChange={changeHandler}/></label>
                    <label>Mobile No. :
                    <input type="number" name="mobile_no" value={mobile_no} onChange={changeHandler}/></label>
                    <label>Email Id  :
                    <input type="email" name="email" value={email} onChange={changeHandler}/></label>
                    <label>Location : 
                    <input type="text" name="location" value={location} onChange={changeHandler}/></label>
                    <label>course   :
                    <input type="text" name="course" value={course} onChange={changeHandler}/></label>
                    
        </form>
        <button className="bg-green-400 p-1 m-4 rounded-md">Submit</button>


        
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(add_student)}
