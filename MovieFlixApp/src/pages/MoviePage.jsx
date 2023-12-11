import { Link, useSearchParams } from "react-router-dom"
import SearchMovie from "../Component/SearchMovie"
import { useEffect, useState } from "react"
import MovieCard from "../Component/MovieCard"
import {RotatingLines} from 'react-loader-spinner'
import NotFoundPage from "./NotFoundPage"

function MoviePage(){

    const [moviesData,setMoviesData]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)
    const [searchParam]=useSearchParams()
    const searched=searchParam.get("searchedMovie")

    useEffect(()=>{
    const controller=new AbortController()
    setIsLoading(true)
    async function fetchMoviesData(){
    try{
    const url="https://www.omdbapi.com/?apikey=b8c459a5&s="
    const response = await fetch(`${url}${searched || "Marvel"}`,{signal:controller.signal})
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json()
    setMoviesData(data['Search'])
    setIsLoading(false)
    }catch(message){
        if(!(message.name==="AbortError")){
        setIsError(true)
        setIsLoading(false)
    }
    }
}
     fetchMoviesData()
     return function (){
        controller.abort()
     }
    },[searched])

    if(isLoading){
        return (
        <div style={{width:"90vw",height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
      </div>
    )
    }

    if(isError){
        return <NotFoundPage></NotFoundPage>
    }

    return(
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem"}}>
        <SearchMovie></SearchMovie>   
        <div className="movieCards-container">
            {moviesData.map(individualMovieData=><MovieCard key={individualMovieData.imdbID} {...individualMovieData}></MovieCard>)}        
        </div>
        </div>
    )
}

export default MoviePage