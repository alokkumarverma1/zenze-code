import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/homepage/home'
import Learn from './pages/learn/learn'

function App() {
 
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home></Home></>
    },
     {
      path:"/learn",
      element:<><Learn></Learn></>
    }
  ])

  return (
    <>
  <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
