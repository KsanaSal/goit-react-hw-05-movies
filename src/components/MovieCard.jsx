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

export const MovieCard = ({ movie }) => {
  return (
    <>
      <Container>
        <PosterPath
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
            <Link to="cast" end>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
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
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({ name: PropTypes.string.isRequired })
    ),
  }),
};
