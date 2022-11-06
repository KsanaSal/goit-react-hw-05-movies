import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  CaptionMovie,
  Container,
  ContentMovie,
  Link,
  ListCardInform,
  PosterPath,
  Text,
  Title,
} from './MovieCard.styled';

export const MovieCard = ({ movie, to }) => {
  return (
    <>
      <Container>
        <PosterPath
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : 'https://via.placeholder.com/300x450'
          }
          alt={movie.title}
        />
        <ContentMovie>
          <CaptionMovie>{movie.title}</CaptionMovie>
          <Text>User score: {movie.vote_average}</Text>
          <Title>Overview</Title>
          <Text>{movie.overview}</Text>
          <Title>Genres</Title>
          <Text>{movie.genres.map(el => el.name).join(' ')}</Text>
        </ContentMovie>
      </Container>
      <div>
        <Text>Additional information</Text>
        <ListCardInform>
          <li>
            <Link to="cast" end state={{from: to}}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{from: to}}>Reviews</Link>
          </li>
        </ListCardInform>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }),
};
