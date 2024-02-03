import Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams ,useNavigate} from 'react-router-dom'
import avatar from './av.png'
import style from './style.module.css'
import { link } from 'joi'


export default function MovieDetails() {
  let navigate = useNavigate()

  const [itemDetails, setitemDetails] = useState([])
  const [similar, setSimilar] = useState([]);
  let paramsurl=useParams()
  async function getapi(){
    let {data} =await Axios.get(`https://api.themoviedb.org/3/${paramsurl.media_type}/${paramsurl.id}?api_key=3f9a9c8b7cd88bdbcca2ae7a3413f9d0`)
    setitemDetails(data)
  } 
  //images end
  async function getSimilar() {
   if (paramsurl.media_type == 'person') {
    return;
   }else{
    let { data } = await Axios.get(`https://api.themoviedb.org/3/${paramsurl.media_type}/${paramsurl.id}/similar?api_key=6405b6ccfd5dc803fa746c73bc6b9b1c`);
    setSimilar(data.results);
   }
  }

  useEffect(() => {
  getapi()
  getSimilar()
  }, [])
  
  return <>
  <div className="row w-100 mt-5 py-3">
    <div className="col-md-4 ">
  <div className="image ms-2 ps-5">
  {itemDetails.poster_path ? (
            <img
              className="w-100  rounded-5"
              src={`https://image.tmdb.org/t/p/w500${itemDetails.poster_path}`}
            />
          ) : (
            ""
          )}
           {itemDetails.profile_path ? (
            <img
              className="w-100 rounded-5"
              src={`https://image.tmdb.org/t/p/w500${itemDetails.profile_path}`}
            />
          ) : (
            ""
          )}
             {!itemDetails.poster_path && !itemDetails.profile_path ? (
            <img className="w-100 rounded-5" src={avatar} alt="" />
          ) : (
            ""
          )}
  </div>
    </div>
    <div className="col-md-8 ">
      <div className="items ps-3 pt-3">
      <h2  className="p-1 my-1 ">{itemDetails.title }{ itemDetails.name}</h2>
      <p className=" lead mt-2">Vote : {itemDetails.vote_average?itemDetails.vote_average :"6.985"}</p>
          <p className=" lead ">Vote Count : {itemDetails.vote_count?itemDetails.vote_count :"1750"}</p>
          <p className=" lead">popularity : {itemDetails.popularity?itemDetails.popularity :"2113.854"} </p>
          <p className="mb-2 lead">release_date : {itemDetails.release_date} {itemDetails.first_air_date} {itemDetails.birthday}</p>
          <p className="pragravshome lead">{itemDetails.overview} {itemDetails.biography} </p>
      </div>
    </div>
  </div>
  <div className="row w-100 mt-5 py-2 px-4">
    { similar.splice(0,10).map((movies ,index)=> <div key={index} className="col-md-2  mt-4">
   <Link to={`/MovieChild/${movies.id}/${paramsurl.media_type}`}>
            <div  className={`item  ${style.top}`}>
            {movies.poster_path ? 
              <img className="w-100 " src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} />
             : ""
            }

{movies.profile_path ? 
              <img className="w-100 " src={`https://image.tmdb.org/t/p/w500${movies.profile_path}`} />
             : ""
            }

{!movies.poster_path && !movies.profile_path ? (
              <img className=" rounded-3 w-100" src={avatar} alt="" />
            ) : (
              ""
            )}
            <h6  className="p-1 my-1 ">{movies.title }{ movies.name}</h6>
            <span className={style.spansss}>{movies.release_date?movies.release_date?.slice(0,4) :   movies.vote_average?.toFixed(2)  }
            {!movies.release_date &&  !movies.vote_average ? movies.popularity.toFixed(2) :""}
            </span>
            </div>
            </Link>
        </div>
  
    
    )}
  </div>
  
  </>
}
