import React from "react";
import "./Product.scss";
import { productData } from "../../assets/productData";
import { ProductCard } from "../../components";

const renderProductList = () => {
  return productData.map((product) => {
    return <ProductCard product={product} />;
  });
};
function Product() {
  return (
    <section className="container product">
      <div className="cover"></div>
      <div className="label">SẢN PHẨM</div>
      <ul className="list">{renderProductList()}</ul>
    </section>
  );
}

export default Product;
