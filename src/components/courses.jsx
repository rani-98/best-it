import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function courses() {
  const [table_Data,setTable_Data]=useState([])
  const location = useLocation();
    const data = location.state;
    useEffect(() => {
      // Check if data and data.data exist and if data.data is an array
      if (data && Array.isArray(data)) {
        setTable_Data(data);
      }
    }, [data]);


  return (
    <>
      <h1 className="text-2xl font-black p-7"> All Courses</h1>

      <button className="flex justify-start bg-green-400 rounded-md m-3 p-1 text-lg font-medium">
        <Link to="/add_courses">+ Add new course</Link>
      </button>

      <table className="w-full h-full gap-1 p-7 border-4 border-gray">
        <tr className=" divide-x divide-y pt-4 bg-gray-400">
          <th>course_name</th>
          <th>course_duration</th>
          <th>course_price</th>
        </tr>
        <tbody>
          {table_Data.map((item,index)=>(
          <tr key={index}>
            <td>{item?.course_name || ''}</td>
            <td>{item?.course_duration || ''}</td>
            <td>{item?.course_price || ''}</td>
          </tr>
          ))}
        </tbody>

        
      </table>
    </>
  )
}
