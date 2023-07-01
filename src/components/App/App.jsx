import { Route, Routes } from 'react-router-dom';
import { About } from '../../pages';
import { Home } from '../../pages';
import { Products } from '../../pages';
import { ProductDetails } from '../../pages';
import { NotFound } from '../../pages';
import { Mission } from '../../components';
import { Team } from '../../components';
import { Reviews } from '../../components';
import { SharedLayout } from '../../components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
