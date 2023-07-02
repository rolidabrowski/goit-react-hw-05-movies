import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMoviesById } from '../../services/themoviedbAPI';

export const MoviesDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesById(movieId);
        setIsLoading(true);
        setMovieDetails(data);
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
  } else if (!movieDetails) {
    return <p>Sorry, no information about this movie.</p>;
  } else {
    const { poster_path, title, release_date, vote_average, genres, overview } =
      movieDetails;

    console.log(movieDetails);

    return (
      <main>
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
        <div>
          <h3>
            {title} - {release_date}
          </h3>
          <ul>
            <li>User Score: {vote_average}</li>
            <li>
              Overview<span>{overview}</span>
            </li>
            <li>
              Genres
              {genres && (
                <ul>
                  {genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="cast">Read about our mission</Link>
            </li>
            <li>
              <Link to="reviews">Go through the reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </main>
    );
  }
};

export default MoviesDetails;
