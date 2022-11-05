import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies, to }) => {
  console.log(movies);
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
