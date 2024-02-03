import Axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate, useSubmit } from 'react-router-dom'

export default function Login({saveUserData}) {
  let navigate = useNavigate()
  const [Error, setError] = useState('')
  const [ErrorList, setErrorList] = useState([])
  const [isLoding, setisLoding] = useState(false)
  const [user ,setUser]=useState({
    email:"",
    password:"",
  })
  function getUserData(e){
    let myUser ={...user}
    myUser[e.target.name] =e.target.value
    setUser(myUser)
  }
  async function sendLogin(){
    let {data} =await Axios.post(`https://movies-api.routemisr.com/signin `,user)
    if(data.message == 'success'){
      setisLoding(false)
      setError('')
      localStorage.setItem('userToken' ,data.token)
      navigate('/')
      saveUserData()
      console.log('Done');
      // console.log(saveUserData ,'login');
    }else{
      setError(data.message)
      setisLoding(false)
    }
 
  }
  function sendFrom(e){
    e.preventDefault()
    setisLoding(true)
    let validtion =ValidationFrom()
    if (validtion.error) {
    setisLoding(false)
    setErrorList(validtion.error.details)

      
    }else{
    setErrorList([])

    sendLogin()
    }
     


  }
  function ValidationFrom(){
    let shema = Joi.object({
      password:Joi.string().min(6).max(15).required(),
      email:Joi.string().email({minDomainSegments:2 ,tlds:{allow:['com' ,'net']}}).required(),
    })
  return  shema.validate(user ,{abortEarly:false})
  }
  return (
    <div  className='login  w-100 mb-4  '>
            {ErrorList.length ?   ErrorList.map((error,index)=>{
          if (error.context.label =='password') {
            return <div key={index} className="alert alert-danger my-2   w-75 m-auto" >{ErrorList.length ? 'Password invaild':''}</div>
          }
          else{
            return   <div key={index} className="alert alert-danger my-2   w-75 m-auto" >{error.message}</div>
          }
        }):''}
      {Error == ''?'':      <div className="alert alert-danger my-2   w-75 m-auto" >{Error}</div>}
 
      <form onSubmit={sendFrom} className=' w-75 m-auto mt-4 pt-2 mb-4 pb-4  text-white'>
          <label className='mt-3 pb-1 ' htmlFor="email">email:</label>
          <input onChange={getUserData} type="text" name='email' className='form-control my-input my-y' id='email' />

          <label className='mt-3 pb-1' htmlFor="password">password:</label>
          <input onChange={getUserData} type="text" name='password' className='form-control my-input my-y mb-2' id='password' />
          <button className='mt-4 p-3 mb-3 mb-4'>{isLoding ==false ?'Login' :<i className="fas fa-spinner fa-spin fa-2x "></i> }</button>
      </form>
  </div>
  )
}
