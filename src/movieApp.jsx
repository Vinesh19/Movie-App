import ShowMovies from "./showMovies";
import { useState } from "react";

const MovieApp = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
      setSearchValue(e.target.value);
  }

  return (
    <div className="bg-indigo-950 font-sans">
      <form onSubmit={handleSubmit}
        className="p-2 flex justify-end bg-indigo-900">

         <input type="text" placeholder="Search"
         value={searchValue} onChange={handleChange}
         className="bg-transparent border-solid border-2 border-sky-950 text-white
         rounded-3xl p-1 m-2 pl-6 focus:outline-none focus:bg-indigo-950"
         ></input>

      </form>
    
       <main className="flex flex-wrap m-3 justify-evenly"> 
       <ShowMovies searchMovie={searchValue}/>
       </main>
    </div>
  );
};

export default MovieApp;