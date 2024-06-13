import React from "react"
import ReactDOM from 'react-dom/client'
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function add_courses() {
    const [data,setData] = useState({});

    const {course_name,course_price,course_duration} = data;
    const navigate=useNavigate()

    const changeHandler = e =>{
        setData({...data,[e.target.name] : e.target.value})
        console.log(setData )
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data); // Log data before navigating
        navigate('/courses', { state: [data]  }); // Pass data in the state object
    };

    


    return(
        <div className="p-5 bg-gray-300">
        <h1 className="text-2xl font-black p-7">Create New course details</h1>
        <center>
            <form onSubmit={submitHandler} className="flex flex-col gap-4 m-6 text-lg font-medium"> 
                 
                    <label>course name : 
                    <input type="text" name="course_name" value={course_name} onChange={changeHandler}/></label>
                    
                    <label>course price : 
                    <input type="text" name="course_price" value={course_price} onChange={changeHandler}/></label>
                
                    <label>course duration :
                    <input type="number" name="course_duration" value={course_duration} onChange={changeHandler}/></label>
                    
                    <input className="w-20 h-10 rounded-md bg-green-400" type="submit" name="submit"></input>                    
            </form>
        </center>  
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(add_courses)
