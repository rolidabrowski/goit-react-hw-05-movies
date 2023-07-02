import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../../components';
import { Home } from '../../pages';
import { Movies } from '../../pages';
import { MoviesDetails } from '../../pages';
import { NotFound } from '../../pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
