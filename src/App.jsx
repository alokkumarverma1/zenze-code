import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/homepage/home'
import Learn from './pages/learn/learn'
import LaearnDetails from './pages/learn/learnDetails'
import Course from './pages/course/course'
import Profile from './pages/profile/profile'

function App() {
 
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home></Home></>
    },

    // learn details

    {
      path:"/learn",
      element:<><Learn></Learn></>
    },
    {
      path:"/learnDetails",
      element:<><LaearnDetails></LaearnDetails></>
    },

    // course area

    {
      path:"/course",
      element:<><Course></Course></>
    },

    // profile area

      {
      path:"/profile",
      element:<><Profile></Profile></>
    },
  ])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
