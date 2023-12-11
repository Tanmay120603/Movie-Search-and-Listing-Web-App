import { Link, useNavigate } from "react-router-dom"
import './MovieCard.css'

function MovieCard({imdbID,Title,Poster,Year,Type}){
    const navigate=useNavigate()
    function handleClick(e){
        navigate(`/detail/${imdbID}`)
    }
    return(
        <div className="MovieCard-container" onClick={handleClick}>
                <div className="posterImage-container"><img src={Poster} alt="movie-poster-image" /></div>
                <h1><Link to={`/detail/${imdbID}`}>{Title}</Link></h1>
                <p>{Year}</p>
                <p>{Type}</p>
        </div>
    )
}

export default MovieCard