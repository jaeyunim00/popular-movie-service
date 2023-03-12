import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const selectedMovie = document.querySelector(".movie");

const Movie = ({ id, medium_cover_image, url, summary, title, genres }) => {
  return (
    <div className="movie">
      <div key={id}>
        <img src={medium_cover_image} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        {/* <p>{summary.length > 320 ? summary.slice(0, 320) + "..." : summary}</p>
        <ul>
          {genres.map((g, index) => (
            <li key={g}>{g}</li>
          ))}
        </ul> */}
      </div>
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
