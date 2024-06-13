import { Link } from "react-router-dom";
export default function student() {
  return (
    <div className="bg-gray-200 flex flex-col justify-items-space-between p-7">
      <div className="flex justify-content-space-between">
        <h1 className="text-2xl font-black p-7">Students</h1>
        <button className="flex justify-start place-end bg-green-400 rounded-md m-2 p-3 text-lg font-medium">
        <Link to = "/add_student">+ Add student</Link></button>
        
      </div>
      <table className="w-full h-full gap-1 p-7 border-4 border-gray">
        <thead>
          <tr className="border-2 border-black bg-blue-100">
            <th>student name</th>
            <th>student qualification</th>
            <th>fee</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="divide-x divide-y">
            <td>rohit</td>
            <td>b.tech</td>
            <td>20000</td>
             <td className="flex justify-center gap-4">
               <button className="w-20 h-10 border-1 border-black bg-orange-200 rounded-2xl">Edit</button>
               <button className="w-20 h-10 border-1 border-black bg-red-400 rounded-2xl">
                  Delete
                </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}
