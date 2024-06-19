import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function App() {
    const [currentPage, setCurrentPage] = useState("Dashboard")

    const pageStyle = "cursor-pointer border-b-4 border-indigo-300"
    const pointer = "cursor-pointer"

    function handleClick(page) {
        setCurrentPage(page)
      }
      const dashboardClick = () => {
        handleClick("Dashboard")
      }
    
      const studentClick = () => {
        handleClick("Student")
      }
      const coursesClick = () => {
        handleClick("Courses")
      }

    
  return (
    <div className="flex-flex-cols">
      <img
        className="w-50 h-50"
        src="https://content.jdmagicbox.com/comp/hyderabad/m5/040pxx40.xx40.230812012841.w1m5/catalogue/best-it-academy-kothapet-hyderabad-institutes-for-it-snvryemgh2-250.jpg"
        alt="best it"
      ></img>

      <div className="flex justify-items-between gap-7 p-6 cursor-pointer">
        <nav>
          <ul className="flex flex-col font-bold text-bold p-10 gap-7 bg-gray-100">
            <li className={currentPage === "dashboard"? pageStyle : pointer} onClick={dashboardClick}> <Link to="/dashboard">
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
            </svg>Dashboard</Link></li>
            <li className={currentPage === "student"? pageStyle : pointer} onClick={studentClick}><Link to="/student">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

             Student</Link></li>
            <li className={currentPage === "courses"? pageStyle : pointer} onClick={coursesClick}><Link to="/courses">
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
            Courses</Link></li>
          </ul>
        </nav>
        
      </div>
    </div>
  );
}
