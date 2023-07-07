import { Link, useLocation } from 'react-router-dom';
import { CardWrapper, MovieTitle } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.map(({ id, title }) => (
        <CardWrapper key={id}>
          <Link
            to={`/goit-react-hw-05-movies/movies/${id}`}
            state={{ from: location }}
          >
            <MovieTitle>{title}</MovieTitle>
          </Link>
        </CardWrapper>
      ))}
    </>
  );
};

export default MoviesList;
