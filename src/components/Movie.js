import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const selectedMovie = document.querySelector(".movie");

const Movie = ({ id, medium_cover_image, url, summary, title, genres }) => {
  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <div key={id}>
          <img src={medium_cover_image} alt={title} />
          <h2>{title}</h2>
          <ul className="genres">
            {genres.map((g, index) => (
              <li className="genre" key={g}>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;
