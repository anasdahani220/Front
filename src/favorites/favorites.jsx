import { createmoviecontext } from '../contexts/context';
import MovieCard from "../moviecard/moviecard";
import '../css/Favorites.css'
const Favorites = () => {
    const {favorites} = createmoviecontext()
    if (favorites.length > 0){
        return <div className="movies-grid">
            {favorites
            .map((movie) => <MovieCard movie={movie} key={movie.id}/>)}
         </div>}
    else {
      return (<div className="favorites">
        <div className="favorites-empty">
            <h2>No Favorite Yet</h2>
            <p>start adding movies to your favourites</p>
        </div>
    </div>
    )
    }
    
    
    
}

export default Favorites ;