import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const AppLayout = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 bg-blue-800 w-screen h-screen -z-[1]"></div>
      <Header/>
    <Outlet/>
    </div>
  )
}

export default AppLayout