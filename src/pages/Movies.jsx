import { MovieList } from 'components/MovieList';
import { SearchBox } from 'components/SearchBox';
import getSearchMovies from 'data/getSearchMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Main } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([]);
    const searchMovies = async () => {
      try {
        const fetchMovies = await getSearchMovies(query);
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
    <Main>
      <SearchBox value={query} onChange={updateQueryString} />
      {movies && <MovieList to="" movies={movies} />}
    </Main>
  );
};

export default Movies;
