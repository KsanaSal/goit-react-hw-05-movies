import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getCast from 'data/getCast';
import { CardCast, ListName, ProfilePath } from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    const movieCast = async () => {
      try {
        const fetchMovies = await getCast(id);
        setCast(fetchMovies);
      } catch {
        console.log('first');
      }
    };
    movieCast();
  }, [id]);

  return (
    <div>
      {cast &&
        cast.cast.map(el => (
          <CardCast key={el.id}>
            <ProfilePath
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                  : 'https://via.placeholder.com/120x180'
              }
              alt={el.name}
            />
            <ListName>
              <li>{el.name}</li>
            </ListName>
            <span>Character: {el.character}</span>
          </CardCast>
        ))}
    </div>
  );
};

export default Cast;
