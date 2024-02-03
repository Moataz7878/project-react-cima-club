import Axios from 'axios'
import Joi from 'joi'
import React, { useState } from 'react'
import { useNavigate, useSubmit } from 'react-router-dom'

export default function Register() {
 
    let navigate = useNavigate()
  const [Error, setError] = useState('')
  const [ErrorList, setErrorList] = useState([])
  const [isLoding, setisLoding] = useState(false)
  const [user ,setUser]=useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    age:0
  })
  function getUserData(e){
    let myUser ={...user}
    myUser[e.target.name] =e.target.value
    setUser(myUser)
  }
  async function sendRegister(){
    let {data} =await Axios.post(`https://movies-api.routemisr.com/signup `,user)
    if(data.message == 'success'){
      setisLoding(false)
      setError('')
      navigate('../Login')
    }else{
      setError(data.message)
      setisLoding(false)
    }
 
  }
  function sendFrom(e){
    e.preventDefault()
    setisLoding(true)
    let validtion =ValidationFrom()
    console.log(validtion);
    if (validtion.error) {
    setisLoding(false)
    setErrorList(validtion.error.details)

      
    }else{
    setErrorList([])

    sendRegister()
    }
     


  }
  function ValidationFrom(){
    let shema = Joi.object({
      first_name:Joi.string().min(3).max(8).required(),
      last_name:Joi.string().min(3).max(8).required(),
      age:Joi.number().min(10).max(89).required(),
      password:Joi.string().min(6).max(15).required(),
      email:Joi.string().email({minDomainSegments:2 ,tlds:{allow:['com' ,'net']}}).required(),
    })
  return  shema.validate(user ,{abortEarly:false})
  }
  return (
    <div  className='Register pt-4 w-100 '>
      {ErrorList.length ?   ErrorList.map((error,index)=>{
          if (error.context.label =='password') {
            return <div className="alert alert-danger my-2 mt-4  w-75 m-auto" >{ErrorList.length ? 'Password invaild':''}</div>
          }
          else{
            return   <div className="alert alert-danger my-2 mt-4  w-75 m-auto" >{error.message}</div>
          }
        }):''}
      {Error == ''?'':      <div className="alert alert-danger my-2  mt-4  w-75 m-auto" >{Error}</div>}
 
        <form onSubmit={sendFrom} className=' w-75 m-auto mt-4 pt-2  text-white'>
            <label className='mt-3 pb-1' htmlFor="first_name">First Name:</label>
            <input onChange={getUserData}   type="text" name='first_name' className='form-control my-input my-y' id='First_name' />
            <label className='mt-3 pb-1' htmlFor="last_name">last Name:</label>
            <input onChange={getUserData} type="text" name='last_name' className='form-control my-input my-y' id='last_name' />

            <label className='mt-3 pb-1' htmlFor="age">age:</label>
            <input onChange={getUserData} type="number" name='age' className='form-control my-input my-y' id='age' />
            <label className='mt-3 pb-1' htmlFor="email">email:</label>
            <input onChange={getUserData} type="text" name='email' className='form-control my-input my-y' id='email' />

            <label className='mt-3 pb-1' htmlFor="password">password:</label>
            <input onChange={getUserData} type="text" name='password' className='form-control my-input my-y' id='password' />
            <button className='mt-4 p-3 mb-3 mb-4'>{isLoding ==false ?'Register' :<i className="fas fa-spinner fa-spin fa-2x "></i> }</button>
        

        </form>
    </div>
  )
}
