import { Link, useLocation } from 'react-router-dom';
import { CardWrapper, MovieTitle } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link
            to={`/goit-react-hw-05-movies/movies/${movie.id}`}
            state={{ from: location }}
          >
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        </CardWrapper>
      ))}
    </>
  );
};

export default MoviesList;
