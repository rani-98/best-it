import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Root from './routes/root.jsx';
import Dashboard from './components/dashboard.jsx';
import Student from './components/student.jsx';
import Courses from './components/courses.jsx';
import Add_student from './components/add_student.jsx';
import Add_courses from './components/add_courses.jsx';
import Auth from './routes/auth.jsx';
import Signup from './components/signup.jsx';
import Otp from './components/otp.jsx';


const browserRouter = createBrowserRouter(
  [

    {
      path: "/",
      element: <Root /> ,
      children: [
        {
          path: "app",
          element: <App />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "student",
          element: <Student />,
        },
        {
          path: "courses", 
          element: <Courses />,
        },
        {
          path: "add_student", 
          element: <Add_student />,
        },
        {
          path: "add_courses", 
          element: <Add_courses />,
        },  
      ],
    },
    {
      path: "auth",
      element: <Auth /> ,
      children: [
        {
          path: "signup",
          element: <Signup />
        },
        {
          path: "otp",
          element: <Otp />
        }
      ]

    }
  ]

) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={browserRouter} />
  
  </React.StrictMode>,
)
