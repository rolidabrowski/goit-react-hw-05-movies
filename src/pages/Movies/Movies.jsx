import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/themoviedbAPI';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from '../../components';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
  });

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  let { query } = params;

  useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesByQuery(query);
        setIsLoading(true);
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [query]);

  useEffect(() => {
    const filtered = movies?.filter(movie =>
      movie?.title?.toLowerCase().includes(query?.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, query]);

  const handleSearchChange = e => {
    const inputValue = e.target.value;
    query = inputValue;
    setSearchParams({ query: query });
  };

  return (
    <>
      <Searchbar value={query} onChange={handleSearchChange} />
      {isLoading && <p>Loading...</p>}
      {error && <p>Oops, something went wrong: {error.message}</p>}
      {!error && !isLoading && <MoviesList movies={filteredMovies} />}
    </>
  );
};

export default Movies;
