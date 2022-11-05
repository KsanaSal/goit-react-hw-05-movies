import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieById from 'data/getMovieById';
import { BackButton } from 'components/BackButton';
import { MovieCard } from 'components/MovieCard';
import { Main } from 'components/MovieCard.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const fetchMovies = await getMovieById(id);
        setMovie(fetchMovies);
      } catch {
        console.log('first');
      }
    };

    movieDetail();
  }, [id]);
  return (
    <Main>
      <BackButton to={backLinkHref}>Go back</BackButton>
      {movie && <MovieCard movie={movie} />}
    </Main>
  );
};

export default MovieDetails;
