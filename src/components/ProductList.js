// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";
import { useState } from "react";

const ProductList = () => {
  const [query, setQuery] = useState("");

  const productList = products
    .filter((product) => product.name.toLowerCase().includes(query))
    .map((product) => <ProductItem product={product} key={product.id} />);

  return (
    <>
      <SearchBar sq={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
