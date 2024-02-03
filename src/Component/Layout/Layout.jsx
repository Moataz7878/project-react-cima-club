import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layout({userData ,logout}) {
  return <>
  <Navbar userData={userData} logout={logout}/>
<div className='contaniner pb-4 pt-4 mb-4 '>
<Outlet></Outlet>
</div>
  <Footer/>
  </>
}
