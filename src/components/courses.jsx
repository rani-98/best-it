import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:5000/courses');
        if (response.ok) {
          const data = await response.json();
          setTableData(data.courses);
        } else {
          const errorData = await response.json();
          setError(errorData.error);
        }
      } catch (error) {
        console.error('Error:', error);
        setError('An error occurred while fetching courses.');
      }
    };

    fetchCourses();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/courses/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        const updatedData = tableData.filter(course => course.id !== id);
        setTableData(updatedData);
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while deleting the course.');
    }
  };

  return (
    <div className="bg-gray-200 p-5">
      <h1 className="text-2xl font-black pb-5">All Courses</h1>
      <button className="flex justify-start bg-green-400 rounded-md m-3 p-1 text-lg font-medium">
        <Link to="/add_courses">+ Add new course</Link>
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <table className="w-full gap-1 border-4 border-gray-300">
        <thead>
          <tr className="bg-gray-400">
            <th>Course Name</th>
            <th>Course Price</th>
            <th>Course Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item) => (
            <tr key={item.id} className="border-2 border-black bg-blue-100 ">
              <td >{item.course_name || ''}</td>
              <td>{item.course_price || ''}</td>
              <td >{item.course_duration || ''}</td>
              <td className=" flex gap-3">
                <button className="w-20 h-10 border-1 border-black bg-orange-200 rounded-2xl">Edit</button>
                <button
                  className="w-20 h-10 border-1 border-black bg-red-400 rounded-2xl"
                  onClick={() => deleteHandler(item.id)}
                >
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

export default Courses;
