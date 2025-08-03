import { useEffect, useState } from "react";
import Moviecard from "../moviecard/moviecard";
import { getpopularmovies , searchmovies} from '../api/api.js'
import '../css/Home.css'
function Home() {
    const [searchquery , setsearchquery] = useState('')
    const [movies , setmovies] = useState([])
    const [error , seterror] = useState('')
    const [loading , setloading] = useState(true)
    const searchmovie = async (e) => {
        e.preventDefault()
        if (!searchquery.trim()) return
        if (loading) return
        setloading(true)
        try {
         const searchresults  = await searchmovies(searchquery)
         setmovies(searchresults)
         seterror(null)
        } catch(err) {
           console.log(err)
           seterror('failed to search for a movie')
        } finally {
           setloading(false)
        }
        setsearchquery("")
    }
    
    useEffect(() => {
      const loadpopularmovies = async () =>{
        try{
         const loadmovies = await getpopularmovies()
         setmovies(loadmovies)
        } catch(err) {
          console.log(err)
          seterror('can t find movies ...')
        } finally {
           setloading(false)
        }
      }
      loadpopularmovies()
    },[])

    const getmovies = () => {
      return movies.map((movie) => <Moviecard movie={movie} key={movie.id}/>
    )}
    return (
      <div className="home">
        <form className="search-form" onSubmit={searchmovie}>
           <input type="text"
           placeholder="search for a movie..." 
           className="search-input" 
           value={searchquery}  
           onChange={e => setsearchquery(e.target.value)} />
           <button type="submit" className="search-button">Chercher</button>

        </form>
        
        {error && <div className="message-error">{error}</div>}
        {loading ? <div className="loading">Loading...</div> : <div className="movies-grid">
           {getmovies()}
        </div>}
        
      </div>
      
    );
}


export default Home ;