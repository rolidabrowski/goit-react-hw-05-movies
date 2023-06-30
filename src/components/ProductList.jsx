import { Link } from "react-router-dom";
import { Container, CardWrapper, ProductName } from "./ProductList.styled";

export const ProductList = ({ products }) => {
  return (
    <Container>
      {products.map(({ id, name }) => (
        <CardWrapper key={id}>
          <Link to={`${id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <ProductName>{name}</ProductName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
