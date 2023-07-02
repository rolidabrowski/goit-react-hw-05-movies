import { Link } from 'react-router-dom';
import { CardWrapper, MovieTitle } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`movies/${movie.id}`}>
            <MovieTitle>{movie.title}</MovieTitle>
          </Link>
        </CardWrapper>
      ))}
    </>
  );
};

export default MoviesList;
