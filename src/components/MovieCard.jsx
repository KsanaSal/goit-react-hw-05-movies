import {
  Container,
  ContentMovie,
  PosterPath,
  TitleMovie,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  return (
    <Container>
      <PosterPath
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <ContentMovie>
        <TitleMovie>{movie.title}</TitleMovie>
        {/* <span>User score: {movie.vote_average}</span> */}
        <h2>Overview</h2>
        <p></p>
        <h3>Genres</h3>
        <span></span>
      </ContentMovie>
    </Container>
  );
};
