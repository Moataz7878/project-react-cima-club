import  Axios  from "axios"
import { useEffect, useState } from "react"
import style from './style.module.css'
import MidaItem from "../MidaItem/MidaItem"


export default function Home() {
    let [Movie, setMovie] = useState([])
    let [Tv, setTv] = useState([])
    let [Person, setPerson] = useState([])

    async function getTreningMovies(type , vlue){
    let {data}= await Axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=3f9a9c8b7cd88bdbcca2ae7a3413f9d0 `)
    vlue(data.results)
    }
    
useEffect(()=>{
getTreningMovies('movie',setMovie)
getTreningMovies('tv',setTv)
getTreningMovies('person',setPerson)
},[])
    
    return <>

        <div className={`row w-100  ps-2 pb-2 ${style.home}`}>
        <div className="col-md-4 d-flex align-items-center   ">
          <div className=" ms-4">
            <div className="bord mb-3 w-25 text-muted "></div>
            <h2 className="h4">
              Trending <br /> Movies <br /> To Watch Right Now{" "}
            </h2>
            <p className="pragravshome py-3">post Watched Movies by Days</p>
            <div className="bord mt-3 w-100 text-muted "></div>
          </div>
        </div>
     {Movie.length > 0 ?   Movie.slice(0,10).map((movies,index)=> <MidaItem key={index} movies={movies}/>
        
    
    ) : <div className={style.spinner}>
        <div className="icon">
        <i className="fas fa-spinner fa-spin fa-4x text-white"></i>
        </div>
        </div>}
        </div>
        
        <div className={`row w-100  ps-2 py-5 ${style.home}`}>
        <div className="col-md-4 d-flex align-items-center   ">
          <div className=" ms-4">
            <div className="bord mb-3 w-25 text-muted "></div>
            <h2 className="h4">
              Trending <br /> TV <br /> To Watch Right Now{" "}
            </h2>
            <p className="pragravshome py-3">post Watched Tv by Days</p>
            <div className="bord mt-3 w-100 text-muted "></div>
          </div>
        </div>
     {Tv.length > 0 ?   Tv.slice(0,10).map((movies,index)=> <MidaItem key={index} movies={movies}/>
        
    
    ) : <div className={style.spinner}>
        <div className="icon">
        <i className="fas fa-spinner fa-spin fa-4x text-white"></i>
        </div>
        </div>}
        </div>

        <div className={`row w-100  ps-2 py-5 ${style.home}`}>
        <div className="col-md-4 d-flex align-items-center   ">
          <div className=" ms-4">
            <div className="bord mb-3 w-25 text-muted "></div>
            <h2 className="h4">
              Trending <br /> people <br /> To Watch Right Now{" "}
            </h2>
            <p className="pragravshome py-3">post Watched people by Days</p>
            <div className="bord mt-3 w-100 text-muted "></div>
          </div>
        </div>
     {Person.length > 0 ?   Person.slice(0,10).map((movies,index)=> <MidaItem key={index} movies={movies}/>
        
    
    ) : <div className={style.spinner}>
        <div className="icon">
        <i className="fas fa-spinner fa-spin fa-4x text-white"></i>
        </div>
        </div>}
        </div>
    </>



}