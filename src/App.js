import {  useEffect, useState } from "react";
import React from 'react'

import Home from "./Component/Home/Home";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import { jwtDecode } from "jwt-decode";
import Movies from "./Component/About/About";
import Routes from "./Component/Routes/Routes";
import Tv from "./Component/Tv/Tv";
import People from "./Component/People/People";
import MovieDetails from "./Component/MovieDatails/MovieDetails";
import MovieChild from "./Component/Moviechild/MovieChild";
import { Offline } from "react-detect-offline";





export  function App() {
  const [userData, setuserData] = useState(null)
  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
    return  saveUserData()
    }
  }, [])
  function logout(){
    localStorage.removeItem("userToken");
    setuserData(null)
    return <Navigate to='/Login'/>
  }
  
  function saveUserData(){
    let token = localStorage.getItem('userToken')
    let incodeing =jwtDecode(token)
    setuserData(incodeing)
  }
  let routes =createBrowserRouter([
    {
      path:'/',element:<Layout userData={userData} logout={logout}/>,children:[
        {index:true,element:<Routes userData={userData} saveUserData={saveUserData}><Home/></Routes>},
        {path:'Home',element:<Routes userData={userData} saveUserData={saveUserData}><Home/></Routes> },
        {path:'Movies',element:<Routes userData={userData} saveUserData={saveUserData}><Movies/></Routes>},
        {path:'MovieDetails/:id/:media_type',element:<Routes userData={userData} saveUserData={saveUserData}><MovieDetails/></Routes>},
        {path:'MovieChild/:id/:media_type',element:<Routes userData={userData} saveUserData={saveUserData}><MovieChild/></Routes>},
        {path:'Tv',element:<Routes userData={userData} saveUserData={saveUserData}><Tv/></Routes>},
        {path:'People',element:<Routes userData={userData} saveUserData={saveUserData}><People/></Routes>},
        {path:'Register',element:<Register/>},
        {path:'Login',element:<Login saveUserData={saveUserData}/>},
      ]
    }
  ])
  return<>
     <Offline> <div className="offilne">You are offline</div> </Offline>
     <RouterProvider router={routes} />
  </> 
}
