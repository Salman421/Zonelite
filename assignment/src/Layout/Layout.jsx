import React from 'react'
import SideBar from './Sidebar'
import DashB from './Dashboard'
import '../Layout/styledash.css'
const Layout = () => {
  return (
    <div className='container'>
      <SideBar />
      <DashB />

    </div>
  )
}

export default Layout
