
import { Link } from "react-router-dom"
export default function courses(){
    return(
        <div className="p-7">
        <div className="flex justify-content-space-between">

        <h1 className="text-2xl font-black p-7"> All Courses</h1>

        <button className="bg-green-400 rounded-md m-3 p-1 text-lg font-medium"><Link to="/add_courses">
        + Add new course</Link></button>
        </div>
        
        
        <table className="w-full h-full gap-1 p-7 border-4 border-gray">
            <tr className=" divide-x divide-y pt-4 bg-gray-400">
                <th >person name</th>
                <th>course name</th>
                <th>duration</th>
                <th>course fee</th>
            </tr>
            <tr className="divide-x divide-y">
                <td>rohit</td>
                <td>python</td>
                <td>6m</td>
                <td>20000</td>
            </tr>
            <tr className=" divide-x divide-y ">
                <td>geetha</td>
                <td>java</td>
                <td>6m</td>
                <td>25000</td>
            </tr>
        </table>
        
        </div>
    
    
    )
}