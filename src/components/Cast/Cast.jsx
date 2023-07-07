import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../../services/themoviedbAPI';

export const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesCast(movieId);
        setMovieCast(data);
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
  } else if (!movieCast) {
    return <p>Sorry, no cast for this movie.</p>;
  } else {
    return (
      <section>
        <ul>
          {movieCast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="200"
              />
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
};
export default Cast;
