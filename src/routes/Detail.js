import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const [detailMovie, setDetailMovie] = useState({});
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getDetail();
  }, []);

  console.log(movie);

  return (
    <div className="movie_detail">
      <header>
        <div>
          <span class="material-symbols-outlined">
            airline_seat_recline_extra
          </span>
          <h1>ja2yun000</h1>
        </div>
        <div className="menu-icon hidden">
          <span class="material-symbols-outlined">menu</span>
        </div>
        <div>
          <Link to={`/`}>
            <span>HOME</span>
          </Link>
          <span>🎥 MY MOVIE</span>
        </div>
      </header>
      {loading ? (
        <span className="loading">loading...</span>
      ) : (
        <div>
          <div
            className="movie_background"
            style={{ backgroundImage: `url(${movie.background_image})` }}
          ></div>
          <div className="movie_image">
            <img src={movie.medium_cover_image} />
          </div>
          <div className="movie_content">
            <h2>{movie.title}</h2>
            <div className="info">
              <div className="info_rating">
                <span class="material-symbols-outlined rating">mood</span>
                <span>{movie.rating}</span>
              </div>
              <span>Released: {movie.year}</span>
              <ul className="genres">
                {movie.genres.map((item) => (
                  <li className="genre">{item}</li>
                ))}
              </ul>
            </div>
            <div className="movie_des">
              {movie.description_full.length > 300
                ? movie.description_full.slice(0, 300) + "..."
                : movie.description_full}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
