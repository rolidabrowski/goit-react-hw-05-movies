import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../services/themoviedbAPI';

export const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesReviews(movieId);
        setMovieReviews(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [movieId]);

  if (error) {
    return alert('Something went wrong. Try again.');
  } else if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <section>
        {movieReviews.length === 0 && <p>Sorry, no reviews for this movie.</p>}
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
};

export default Reviews;
