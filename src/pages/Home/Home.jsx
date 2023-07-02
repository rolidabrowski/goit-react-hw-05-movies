import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/themoviedbAPI';
import { MoviesList } from '../../components';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getTrendingMovies();
        setIsLoading(true);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (error) {
    return alert('Something went wrong. Try again.');
  } else if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <main>
        <h1>Trending Today</h1>
        <MoviesList movies={movies} />
      </main>
    );
  }
};

export default Home;
