import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ movies, to }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(name => (
        <li key={name.id}>
          <Link to={`${to}${name.id}`} state={{ from: location }}>
            {name.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    })
  ),
  to: PropTypes.string.isRequired,
};