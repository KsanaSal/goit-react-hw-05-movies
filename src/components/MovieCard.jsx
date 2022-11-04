import {
  CaptionMovie,
  Container,
  ContentMovie,
  PosterPath,
  Text,
  Title,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  return (
    <Container>
      <PosterPath
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <ContentMovie>
        <CaptionMovie>{movie.title}</CaptionMovie>
        <Text>User score: {movie.vote_average}</Text>
        <Title>Overview</Title>
              <Text>{ movie.overview}</Text>
        <Title>Genres</Title>
              <Text>{ movie.genres.map(el=>el.name).join(' ')}</Text>
      </ContentMovie>
    </Container>
  );
};
