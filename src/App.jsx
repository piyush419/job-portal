
import { React } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import LandingPage from './pages/LandingPage'
import ProtectedRoute from './components/ProtectedRoute'
import Onboarding from './pages/Onboarding'
import JobListing from './pages/JobListing'
import PostJob from './pages/PostJob'
 const router  = createBrowserRouter([
  {
    element : <AppLayout/>,
    children :[
      {
        path :"/",
        element : <LandingPage/>
      },
      {
        path: "onboarding",
        element : <Onboarding/>
      },
      {
        path : "joblisting",
        element : <ProtectedRoute>
          <JobListing/>
        </ProtectedRoute>
      },
      {
        path : "jobposting",
        element : <ProtectedRoute>
          <PostJob/>
        </ProtectedRoute>
      },
      {
        path : "my-job",
        element : <ProtectedRoute>
          <h1>hey</h1>
        </ProtectedRoute>
      }

    ] 
  }
 ])


function App() {
  
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}


export default App
