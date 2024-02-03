import { Link } from "react-router-dom";
import style from './style.module.css'
export default function Navber({userData ,logout}){


    return<>
<div className={style.Navber}>
  <div className="container">
    <div className="d-flex justify-content-between p-2">
      <div className="text-center d-flex justify-content-around ">
        <h3 className="fw-bold pt-1 ">Cima Club</h3>
        {userData == null ?<div></div>:<ul className="pt-2 ">
          <li className="pe-2 ps-2"><Link to=''>Home</Link></li>
          <li className="pe-2 ps-2"><Link to='Movies'>Movies</Link></li>
          <li className="pe-2 ps-2"><Link to='Tv'>Tv</Link></li>
          <li className="pe-2 ps-2"><Link to='People'>People</Link></li>
        </ul>}
      </div>
      <div className=" d-flex justify-content-around ">
      <div className={`pt-2  ${style.icon}`}>
              <i className="fab fa-facebook mx-2 fa-2x "></i>
              <i className="fab fa-instagram mx-2 fa-2x"></i>
              <i className="fab fa-twitter mx-2 fa-2x"></i>
              <i className="fab fa-spotify mx-2 fa-2x"></i>
              <i className="fab fa-youtube mx-2 fa-2x"></i>
            </div>
        {userData ==null?<ul className="pt-2">
          <li className="pe-2 ps-2"><Link to='Login'>Login</Link></li>
          <li className="pe-2 ps-2"><Link to='Register'>Register</Link></li>
          
        </ul>:<ul className="pt-2">
          <li className="pe-2 ps-2"><Link to='Login' onClick={logout}>Logout</Link></li>          
        </ul>}
      </div>
    </div>
  </div>
</div>
    </>
}