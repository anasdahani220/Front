import '../css/MovieCard.css'
import { createmoviecontext } from '../contexts/context'
function Moviecard({movie})  {
    const {addtofavorites , removefromfavorites , isfavorites}  = createmoviecontext()
    const favorite = isfavorites(movie.id)
    const Onfavoriteclick = (e) => {
        e.preventDefault()
        console.log("Favorite button clicked!");
        if(favorite) removefromfavorites(movie.id)
        else addtofavorites(movie)
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={Onfavoriteclick}>♥</button>
                </div>
            </div>
            <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default Moviecard ;