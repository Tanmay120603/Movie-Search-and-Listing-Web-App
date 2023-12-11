import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetail from "../Component/MovieDetail"
import { RotatingLines } from "react-loader-spinner"
import NotFoundPage from "./NotFoundPage"

function MovieDetailPage(){
    const {imdbID}=useParams()
    const Url="https://www.omdbapi.com/?apikey=b8c459a5&i="
    const [individualMovieData,setIndividualMovieData]=useState(null)
    const [isLoading,setIsLoading]=useState(false)
    const [isError,setIsError]=useState(false)

    useEffect(()=>{
        const controller=new AbortController()
        setIsLoading(true)
        async function fetchSingleMovieData(){
        try{
            const response = await fetch(`${Url}${imdbID}`,{signal:controller.signal})
            if(!response.ok){
                throw new Error("Something went wrong")
            }
            const data = await response.json()
            setIndividualMovieData(data)
            setIsError(false)
            setIsLoading(false)
        }catch(error){
            if(!(error.name==="AbortError")){
                setIsError(true)
                setIsLoading(false)
            }
        }
    }
        fetchSingleMovieData()
        return function(){
            controller.abort()
        }
    },[])

    if(isLoading){
        return(
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

    return (
        <div>
            {individualMovieData && <MovieDetail {...individualMovieData}></MovieDetail>}
        </div>
    )
}

export default MovieDetailPage