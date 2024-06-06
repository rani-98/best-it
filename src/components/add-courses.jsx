import React from "react"
import ReactDOM from 'react-dom/client'

export default function add_courses() {
    return(
        <div className="p-5 bg-gray-300">
        <h1 className="text-2xl font-black p-7">Create New course details</h1>

        <form className="flex flex-col gap-4"> 
                    <label>Courses Name :  
                    <input type="text" /></label>
                    
                    <label>Course Price : 
                    <input type="text"/></label>
                    <label>Course Duration(in months) : 
                    <input type="number"/></label>
                    
                    
        </form>
        <button className="bg-green-400 p-1 m-5 rounded-md">Create Course</button>

        
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(add_courses)
