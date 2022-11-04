import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieById from 'data/getMovieById';
import getReviews from 'data/getReviews';
import { BackButton } from 'components/BackButton';
import { MovieCard } from 'components/MovieCard';
import { Main } from 'components/MovieCard.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  
  const [reviews, setReviews] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  console.log(movie);
  console.log(reviews);

  useEffect(() => {
    const movieDetail = async () => {
      try {
        const fetchMovies = await getMovieById(id);
        console.log(fetchMovies);
        setMovie(fetchMovies);
      } catch {
        console.log('first');
      }
    };

    const movieReviews = async () => {
      try {
        const fetchMovies = await getReviews(id);
        console.log(fetchMovies);
        setReviews(fetchMovies);
      } catch {
        console.log('first');
      }
    };
    movieDetail();
    movieReviews();
  }, [id]);
  return (
    <Main>
      <BackButton to={backLinkHref}>Go back</BackButton>
          {movie && <MovieCard movie={movie} />}
    </Main>
  );
};

export default MovieDetails;
