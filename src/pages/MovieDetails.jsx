import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieById from 'data/getMovieById';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const movieDetail = async () => {
      try {
        const fetchMovies = await getMovieById(id);
        console.log(fetchMovies);
        setMovie(fetchMovies.results);
      } catch {
        console.log('first');
      }
    };
    movieDetail();
  }, [id]);
  return <div>{movie}</div>;
};
