import { MovieList } from 'components/MovieList';
import { SearchBox } from 'components/SearchBox';
import getSearchMovies from 'data/getSearchMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    setMovies([]);
    const searchMovies = async () => {
      try {
        const fetchMovies = await getSearchMovies(query);
        console.log(fetchMovies);
        setMovies(fetchMovies.results);
      } catch {
        console.log('first');
      }
    };
    if (query) {
      searchMovies();
    }
  }, [query]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={query} onChange={updateQueryString} />
      {movies && <MovieList to="" movies={movies} />}
    </main>
  );
};

export default Movies;
