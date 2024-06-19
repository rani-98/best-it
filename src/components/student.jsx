import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
export default function student() {

  const [table_Data,setTable_Data]=useState([])
  const location = useLocation();
    const data = location.state;
    useEffect(() => {
      // Check if data and data.data exist  and if data.data is an array
      if (data && Array.isArray(data)) {
        setTable_Data(data);
      }
    }, [data]);

    const deleteHandler = e =>{
      e.preventDefault();
      alert("row deleted ")
      print()
      
  }

  return (
    <div className="bg-gray-200 flex flex-col justify-items-space-between p-7">
      <div className="flex justify-content-space-between">
        <h1 className="text-2xl font-black p-7">Students</h1>
        <button className="flex justify-start place-end bg-green-400 rounded-md m-2 p-3 text-lg font-medium">
        <Link to = "/add_student">+ Add student</Link></button>
        
      </div>
      <table className="w-full h-full gap-1 p-7 border-4 border-gray">
          <tr>
            <th>student name</th>
            <th>mobile_no</th>
            <th>email</th>
            <th>location</th>
            <th>course</th>
            <th>action</th>
          </tr>
        
           <tbody>
                    {table_Data.map((item,index)=>(
          <tr key={index} className="border-2 border-black bg-blue-100">           

            <td>{item?.student_name || ''}</td>
            <td>{item?.mobile_no || ''}</td>
            <td>{item?.email || ''}</td>
            <td>{item?.location || ''}</td>
            <td>{item?.course || ''}</td>
            <td>{item?.action || ''}</td>
            
            <td className="flex justify-center gap-4">
               <button className="w-20 h-10 border-1 border-black bg-orange-200 rounded-2xl">Edit</button>
               <button className="w-20 h-10 border-1 border-black bg-red-400 rounded-2xl"onChange={deleteHandler}>
                  Delete
                </button>
            </td>
          </tr>
          ))}

            </tbody>
      </table>
    </div>
  );
}
