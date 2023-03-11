import { useEffect, useState } from "react";
import Movie from "../components/Movie";

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

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        movies.map((movie) => (
          <Movie
            id={movie.id}
            medium_cover_image={movie.medium_cover_image}
            url={movie.url}
            title={movie.title}
            genres={movie.genres}
            summary={movie.summary}
          ></Movie>
        ))
      )}
    </div>
  );
};

export default Home;
