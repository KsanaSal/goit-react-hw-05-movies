import { useParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getCast from 'data/getCast';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);
  console.log(cast);
  useEffect(() => {
    const movieCast = async () => {
      try {
        const fetchMovies = await getCast(id);
        console.log(fetchMovies);
        setCast(fetchMovies);
      } catch {
        console.log('first');
      }
    };
    movieCast();
  }, [id]);
  return <div>text</div>;
};

export default Cast;
