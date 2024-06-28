import { useEffect, useState } from 'react';

function Dashboard() {
  const [studentCount, setStudentCount] = useState(0);
  const [courseCount, setCourseCount] = useState(0);

  useEffect(() => {
    const fetchStudentCount = async () => {
      try {
        const response = await fetch('http://localhost:5000/student_count'); // Update the endpoint if needed
        if (response.ok) {
          const data = await response.json();
          setStudentCount(data.count);
        } else {
          console.error('Failed to fetch student count');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchStudentCount();
  }, []);

  useEffect(() => {
    const fetchCourseCount = async () => {
      try {
        const response = await fetch('http://localhost:5000/course_count');
        if (response.ok) {
          const data = await response.json();
          setCourseCount(data.count);
        } else {
          console.error('Failed to fetch courses count');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchCourseCount();
  }, []);



  return (
    <div className="bg-gray-100">
      <h1 className="text-2xl font-bold p-10">Dashboard</h1>
      <div className="flex w-full h-full p-20 justify-items-center cursor-pointer gap-14">
        <button className="w-30 h-30 border-solid border-4 border-gray-300 bg-white rounded-xl hover:bg-gray-200 p-7 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          Students ({studentCount})
        </button>
        <button className="w-30 h-30 border-solid border-4 border-gray-300 bg-white rounded-xl hover:bg-gray-200 p-8 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
          Courses ({courseCount})
        </button>
      </div>
    </div>
  )}
  export default Dashboard
