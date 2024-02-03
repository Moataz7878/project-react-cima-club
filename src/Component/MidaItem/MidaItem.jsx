import React from 'react'
import style from '../Home/style.module.css'
import avatar from './av.png'
import { Link } from 'react-router-dom'

export default function MidaItem({index ,movies}) {
  return <>

   <div key={index} className="col-md-2  mt-4">
   <Link to=  {`/MovieDetails/${movies.id}/${movies.media_type}`}>
            <div className={`item  ${style.top}`}>
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
            <span className={style.spans}>{movies.release_date?movies.release_date?.slice(0,4) :   movies.vote_average?.toFixed(2)  }
            {!movies.release_date &&  !movies.vote_average ? movies.popularity.toFixed(2) :""}
            </span>
            </div>
            </Link>
        </div>
  
  </>
}
