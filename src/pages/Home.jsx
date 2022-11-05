import { MovieList } from 'components/MovieList';
import getTrending from 'data/getTrending';
import { useState, useEffect } from 'react';

const Home = () => {
  console.log(getTrending());
  getTrending().then(console.log);
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
    <main>
      <h1>Trending today</h1>
      {movies && <MovieList movies={movies} />}
    </main>
  );
};

export default Home;
