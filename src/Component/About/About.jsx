import  Axios  from 'axios';
import React, { useEffect, useState } from 'react'
import style from '../Home/style.module.css'
import MidaItem from '../MidaItem/MidaItem';
export default function Movies() {
  let [Movie, setMovie] = useState([])

  async function getTreningMovies(types , vlues){
    let {data}= await Axios.get(`https://api.themoviedb.org/3/trending/${types}/day?api_key=3f9a9c8b7cd88bdbcca2ae7a3413f9d0`)
    console.log(data.results);
    vlues(data.results)
    }
    useEffect(()=>{
      getTreningMovies('movie',setMovie)
      },[])
    
  return <>
     <div className={`row w-100  ps-2 pb-2 ${style.home}`}>
        {/* <div className="col-md-4 d-flex align-items-center   ">
          <div className=" ms-4">
            <div className="bord mb-3 w-25 text-muted "></div>
            <h2 className="h4">
              Trending <br /> Movies <br /> To Watch Right Now{" "}
            </h2>
            <p className="pragravshome py-3">post Watched Movies by Days</p>
            <div className="bord mt-3 w-100 text-muted "></div>
          </div>
        </div> */}
     {Movie.length > 0 ?   Movie.map((movies,index)=> <MidaItem key={index} movies={movies}/>
        
    
    ) : <div className={style.spinner}>
        <div className="icon">
        <i className="fas fa-spinner fa-spin fa-4x text-white"></i>
        </div>
        </div>}
        </div>
  </>
}
