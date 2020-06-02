import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product" key={product}>
      {product}
    </div>
  );
};

export default Product;
