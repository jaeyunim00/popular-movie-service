import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <div className="movie_content">
            <span>ja2yun000</span>
            <h2>{movie.title}</h2>
            <div className="info">
              <span>{movie.rating}</span>
              <span>{movie.year}</span>
              <ul>
                {movie.genres.map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
            <div>{movie.description_full}</div>
          </div>
          <div className="movie_image">
            <img src={movie.medium_cover_image} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
