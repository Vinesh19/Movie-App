import MoviesCard from "./moviesCard"
import { useState,useEffect }  from "react"

const ShowMovies = (props) => {
    const {searchMovie} = props;
    
    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

    const [movies, setMovies] = useState([]);
    
    const getMovies = async (URL) => {
        const response = await fetch(URL);
        const data = await response.json();
        
        setMovies(data.results);
    }

    if(searchMovie) {
        useEffect(() => {
            getMovies(SEARCH_API + searchMovie);
          }, [searchMovie]);
    }
    else {
        useEffect(() => {
            getMovies(API_URL);
          }, []);
    }
    return  <MoviesCard movies={movies} IMG_PATH={IMG_PATH}/>; 
}

export default ShowMovies;