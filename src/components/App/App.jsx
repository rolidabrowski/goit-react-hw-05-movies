import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../../components';
import { Home } from '../../pages';
import { Movies } from '../../pages';
import { MoviesDetails } from '../../pages';
import { NotFound } from '../../pages';
import { Cast } from '../../components';
import { Reviews } from '../../components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
