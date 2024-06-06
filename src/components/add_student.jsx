import React from "react"
import ReactDOM from 'react-dom/client'

export default function add_student() {
    return(
        
        <div className="p-5 bg-gray-300">
        <h1 className="text-2xl font-black p-7">add student details</h1>

        <form className="flex flex-col gap-4"> 
                    <label>First Name : 
                    <input type="text" /></label>
                    
                    <label>Mobile No. :
                    <input type="number"/></label>
                    <label>Email Id  :
                    <input type="email"/></label>
                    <label>course   :
                    <input type="name"/></label>
                    
        </form>
        <button className="bg-green-400 p-1 m-4 rounded-md">Add student Details</button>


        
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(add_student)
