import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Courses() {
  const [tableData, setTableData] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    // Check if data and data.data exist and if data is an array
    if (data && Array.isArray(data)) {
      setTableData(data);
    }
  }, [data]);


  const deleteHandler = (index) => {
    const newData = [...tableData];
    newData.splice(index, 1);
    setTableData(newData);
    alert("Row deleted");
  };

  fetch('http://127.0.0.1:5000/add_courses', {
    method: '',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.log('Error:', error);
});

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/add_courses/${courseName}`);
      if (response.ok) {
        const data = await response.json();
        setSearchedData(data);
      } else {
        alert("Course not found");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-200 p-5">
      <h1 className="text-2xl font-black pb-5">All Courses</h1>
      <button className="flex justify-start bg-green-400 rounded-md m-3 p-1 text-lg font-medium">
        <Link to="/add_courses">+ Add new course</Link>
      </button>
      <form onSubmit={handleSearch} className="mb-4">
        <label className="block mb-2 text-lg font-medium">Search by Course Name:</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="p-2 border rounded-md w-50 m-3"
        />
        <button type="submit" className=" bg-blue-500 text-white p-2 rounded-md">Search</button>
      </form>
      <table className="w-full gap-1 border-4 border-gray-300">
        <thead>
          <tr className="bg-gray-400 divide-x divide-y">
            <th>Course Name</th>
            <th>Course Price</th>
            <th>Course Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {(searchedData.length > 0 ? searchedData : tableData).map((item, index) => (
            <tr key={index} className="border-2 border-black bg-blue-100">
              <td>{item.course_name || ''}</td>
              <td>{item.course_price || ''}</td>
              <td>{item.course_duration || ''}</td>
              <td className="flex justify-center gap-4">
                <button className="w-20 h-10 border-1 border-black bg-orange-200 rounded-2xl">Edit</button>
                <button
                  className="w-20 h-10 border-1 border-black bg-red-400 rounded-2xl"
                  onClick={() => deleteHandler(index)}
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
