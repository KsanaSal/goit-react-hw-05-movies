import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getReviews from 'data/getReviews';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  console.log(reviews);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const fetchMovies = await getReviews(id);
        console.log(fetchMovies);
        setReviews(fetchMovies);
      } catch {
        console.log('first');
      }
    };
    movieReviews();
  }, [id]);

  return (
    <ul>
      {reviews &&
        reviews.results.map(el => (
          <li>
            <h1>Author: {el.author}</h1>
            <p>{el.content}</p>
          </li>
        ))}
    </ul>
  );
};

export default Reviews;
