import './movie.css'

const MoviesCard = (props) => {
  const { movies, IMG_PATH } = props;

  const movieRating = (rating) => {
    if (rating >= 8) {
      return "text-green-500";
    } else if (rating >= 5) {
      return "text-orange-500";
    } else {
      return "text-red-500";
    }
  }

  return movies.map((movie) => {
    const { title, poster_path, vote_average, overview, id } = movie;

    return (
      <div key={id} className="movie w-80 bg-indigo-900 relative
       rounded m-4 font-sans">
        <img src={IMG_PATH + poster_path} alt={title}></img>
        <div className="text-gray-300 flex items-center justify-between
         p-2 tracking-wider text-lg">

          <h3 className="mt-0 ">{title}</h3>
          <span className={`${movieRating(vote_average)} bg-indigo-950 py-0.5 px-2 rounded font-extrabold`}
          >{vote_average}</span>
        </div>
        <div className="overview absolute bg-white p-4 left-0 bottom-0 right-0 max-h-full 
        transform translate-y-full transition-transform duration-300 ease-in overflow-auto"
        >
          <h3>Overview</h3>
          {overview}
        </div>
      </div>
    );
  });
};

export default MoviesCard;
