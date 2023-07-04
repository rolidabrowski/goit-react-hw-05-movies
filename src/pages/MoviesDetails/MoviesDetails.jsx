import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getMoviesById } from '../../services/themoviedbAPI';
import {
  Container,
  Poster,
  InfoContainer,
  Title,
  InfoList,
  InfoItem,
  Vote,
  Overview,
  Genres,
} from './MoviesDetails.styled';

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
        console.log(data);
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

    return (
      <main>
        <Container>
          <InfoContainer>
            <Poster
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt=""
            />
            <InfoList>
              <Title>
                {title} ({parseInt(release_date)})
              </Title>
              <InfoItem>
                User Score: <Vote>{vote_average?.toFixed(1)}</Vote>
              </InfoItem>
              <InfoItem>
                Overview <Overview>{overview}</Overview>
              </InfoItem>
              <InfoItem>
                Genres
                {genres && (
                  <Genres>
                    {genres.map(genre => (
                      <li key={genre.id}>{genre.name},</li>
                    ))}
                  </Genres>
                )}
              </InfoItem>
            </InfoList>
          </InfoContainer>
          <div>
            <h4>Additional information</h4>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </Container>
      </main>
    );
  }
};

export default MoviesDetails;
