import { MovieList } from 'components/MovieList';
import getTrending from 'data/getTrending';
import { useState, useEffect } from 'react';
import { Main } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const trendingMovies = async () => {
      try {
        const fetchMovies = await getTrending();
        setMovies(fetchMovies.results);
      } catch {
        console.log('first');
      }
    };
    trendingMovies();
  }, []);

  return (
    <Main>
      <h1>Trending today</h1>
      {movies && <MovieList to="movies/" movies={movies} />}
    </Main>
  );
};

export default Home;
