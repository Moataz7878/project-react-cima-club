import React from 'react'
import { Navigate } from 'react-router-dom'
import Login from '../Login/Login';

export default function Routes({userData ,children ,saveUserData}) {
// console.log(userData);
  if (userData ==null) {
    return <Login saveUserData={saveUserData}/>
  }else{
   return  children
  }
 
}
