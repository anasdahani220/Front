import { createContext , useContext , useState , useEffect } from "react";

const moviecontext = createContext()

export const createmoviecontext = () => useContext(moviecontext)

export const Movieprovider = ({children}) => {
    const [favorites , setfavorites] = useState([])
    useEffect(() => {
        const storefavs = localStorage.getItem('favorites')
        if(storefavs) setfavorites(JSON.parse(storefavs))
    },[])
    useEffect(() => {
        localStorage.setItem(favorites , JSON.stringify(favorites))
    },[favorites])
    const addtofavorites = (movie) => {
        setfavorites(prev => [...prev , movie])
    }
    const removefromfavorites = (movieID) => {
        setfavorites(prev => prev.filter(movie => movie.id !== movieID))
    }
    const isfavorites = (movieID) => {
        return favorites.some(movie => movie.id === movieID)
    }

    const value = {favorites,
        addtofavorites,
        removefromfavorites,
        isfavorites
    }
    return <moviecontext.Provider value={value}>
        {children}
    </moviecontext.Provider>
}

