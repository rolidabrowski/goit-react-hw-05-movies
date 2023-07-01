import { ProductList } from '../../components/ProductList/ProductList';
import { getProducts } from '../../services/fakeAPI';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default Products;