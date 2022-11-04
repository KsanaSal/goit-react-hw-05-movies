import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  console.log(movies);
  return (
    <ul>
      {movies.map(name => (
        <li key={name.id}>
          <Link to={`{#}`} state={{ useLocation }}>
            {name.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
