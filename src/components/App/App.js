import { Route, Routes } from "react-router-dom";
import { About } from "../../pages/About";
import { Home } from "../../pages/Home";
import { Products } from "../../pages/Products";
import { ProductDetails } from "../../pages/ProductDetails";
import { NotFound } from "../../pages/NotFound";
import { Mission } from "../Mission";
import { Team } from "../Team";
import { Reviews } from "../Reviews";
import SharedLayout from "../Layout/SharedLayout";

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
