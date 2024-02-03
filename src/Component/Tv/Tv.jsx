import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import style from "../Home/style.module.css";
import MidaItem from '../MidaItem/MidaItem';

export default function Tv() {
  let [Tv, setTv] = useState([])
  async function getTreningMovies(type , vlue){
    let {data}= await Axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=3f9a9c8b7cd88bdbcca2ae7a3413f9d0 `)
    vlue(data.results)
    }
    
useEffect(()=>{
getTreningMovies('tv',setTv)
},[])

  return <>
       <div className={`row w-100  ps-2 pb-2 ${style.home}`}>
     {Tv.length > 0 ?   Tv.map((movies,index)=> <MidaItem key={index} movies={movies}/>
        
    
    ) : <div className={style.spinner}>
        <div className="icon">
        <i className="fas fa-spinner fa-spin fa-4x text-white"></i>
        </div>
        </div>}
        </div>
  </>
}

