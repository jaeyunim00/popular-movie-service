import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import SwipApp from "../components/Swiper";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      <header>
        <span class="material-symbols-outlined">
          airline_seat_recline_extra
        </span>
        <h1>ja2yun000</h1>
      </header>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="movies">
          <div className="movies-wrap">
            {movies.slice(0, 12).map((movie) => (
              <Movie
                id={movie.id}
                medium_cover_image={movie.medium_cover_image}
                url={movie.url}
                title={movie.title}
                genres={movie.genres}
                summary={movie.summary}
              ></Movie>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
