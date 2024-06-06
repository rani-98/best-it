import { Link } from "react-router-dom";
export default function student() {
  return (
    <div className="flex flex-col justify-items-space-between p-7">
      <div className="flex justify-content-space-between">
        <h1 className="text-2xl font-black p-7">Students</h1>
        <button className="bg-green-400 rounded-md m-3 p-1 text-lg font-medium"><Link to="/add_student">
          ++ Add student</Link></button>
        
      </div>

      <table className="w-full h-full gap-1 border-4 border-gray">
        <thead>
          <tr className=" divide-x divide-y pt-4 bg-gray-400">
            <th>student name</th>
            <th>student qualification</th>
            <th>fee</th>
          </tr>
        </thead>
        <tbody>
          <tr className="divide-x divide-y">
            <td>rohit</td>
            <td>b.tech</td>
            <td>20000</td>
          </tr>
          <tr className="divide-x divide-y">
            <td>rohit</td>
            <td>b.tech</td>
            <td>20000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
