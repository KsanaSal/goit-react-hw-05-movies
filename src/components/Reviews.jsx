import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getReviews from 'data/getReviews';
import { TitleReview } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const fetchMovies = await getReviews(id);
        setReviews(fetchMovies);
      } catch {
        console.log('first');
      }
    };
    movieReviews();
  }, [id]);
  
  return (
    <ul>
      {reviews && reviews.length > 0 ? (
        reviews.results.map(el => (
          <li key={el.id}>
            <TitleReview>Author: {el.author}</TitleReview>
            <p>{el.content}</p>
          </li>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};

export default Reviews;
