import React from 'react'
import style from './style.module.css'
export default function Footer() {
  return (
    <div className={style.Footer}>
    <div className='container '>
      <div className="row text-center text-white">
        <div className="offset-1 col-md-3">
          <h4 >LOCATION</h4>
          <p className='lead'>2215 John Daniel DriveClark, MO 65243</p>
        </div>
        <div className="col-md-4">
          <h4>AROUND THE WEB</h4>
          <i className="fa-brands fa-facebook-f pt-2 m-2"></i>
          <i className="fa-brands fa-twitter pt-2 m-2"></i>
          <i className="fa-brands fa-linkedin-in pt-2 m-2"></i>
          <i className="fa-brands fa-dribbble pt-2 m-2"></i>
        </div>
        <div className="col-md-3">
          <h4>ABOUT FREELANCER</h4>
          <p className='lead'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
        </div>
      </div>
    </div>
    <div className={style.end}>
      <p className='p-2'>Fahmy © 2023</p>
    </div>
   </div>
  )
}
