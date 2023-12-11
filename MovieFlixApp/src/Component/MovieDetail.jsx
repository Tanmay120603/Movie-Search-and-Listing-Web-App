import './MovieDetail.css'

function MovieDetail({Title,Poster,Released,Genre,Runtime,Language,Awards,Plot,Actors,Country,Director,imdbRating,imdbVotes,Metascore,Rated}){
    return(
        <div className='movieDetails-sectionsContainer'>
        <div className='movieDetails-leftSection'>
            <h2>{Title}</h2>
            <img src={Poster} alt="moviePoster-image" />
            <div className='movieDetail-container'>
                <p>Release Date</p>
                <p>{Released}</p>
            </div>
            <div  className='movieDetail-container'>
                <p>Genre</p>
                <p>{Genre}</p>
            </div>
            <div className='movieDetail-container'>
                <p>RunTime</p>
                <p>{Runtime}</p>
            </div>
            <div className='movieDetail-container'>
                <p>Language</p>
                <p>{Language}</p>
            </div>
            <div className='movieDetail-container'>
                <p>Awards</p>
                <p>{Awards}</p>
            </div>
        </div>
        <div className='movieDetails-rightSection'>
            <h3>Plot</h3>
            <p className='Plot-para'>{Plot}</p>
            <h3>Actors</h3>
            <p>{Actors}</p>
            <h3>Country</h3>
            <p>{Country}</p>
            <h2>More Info</h2>
            <div className='movieDetail-container'>
                <p>Director</p>
                <p>{Director}</p>
            </div>
            <div className='movieDetail-container'>
                <p>imdb Rating</p>
                <p>{imdbRating}</p>
            </div>
            <div className='movieDetail-container'>
                <p>imdb Votes</p>
                <p>{imdbVotes}</p>
            </div>
            <div className='movieDetail-container'>
                <p>Metascore</p>
                <p>{Metascore}</p>
            </div>
            <div className='movieDetail-container'>
                <p>Rated</p>
                <p>{Rated}</p>
            </div>  
        </div>
        </div>
    )
}

export default MovieDetail