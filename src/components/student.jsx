import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Student() {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:5000/student');
        if (response.ok) {
          const data = await response.json();
          setTableData(data.students);
        } else {
          const errorData = await response.json();
          setError(errorData.error);
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while fetching students.');
      }
    };

    fetchStudents();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/student/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        const updatedData = tableData.filter(student => student.id !== id);
        setTableData(updatedData);
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while deleting the student.');
    }
  };

  return (
    <div className="bg-gray-200 flex flex-col justify-items-space-between p-7">
      <div className="flex justify-content-space-between">
        <h1 className="text-2xl font-black p-7">Students</h1>
        <button className="flex justify-start place-end bg-green-400 rounded-md m-2 p-3 text-lg font-medium">
          <Link to="/add_student">+ Add student</Link>
        </button>
      </div>
      <table className="w-full h-full gap-1 p-7 border-4 border-gray">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Location</th>
            <th>Course Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index} className="border-2 border-black bg-blue-100">
              <td>{item.student_name}</td>
              <td>{item.mobile}</td>
              <td>{item.email}</td>
              <td>{item.location}</td>
              <td>{item.course_name}</td>
              <td className="flex justify-center gap-3">
                <button className="w-20 h-10 border-1 border-black bg-orange-200 rounded-2xl">Edit</button>
                <button className="w-20 h-10 border-1 border-black bg-red-400 rounded-2xl" onClick={() => deleteHandler(item.id)}>
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
