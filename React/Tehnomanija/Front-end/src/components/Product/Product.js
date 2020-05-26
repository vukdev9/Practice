import React from "react";
import "./Product.css";

const Product = (props) => {
  return props.product.map((data) => {
    return data.map((productCode, index) => {
      return productCode.map((value) => {
        return (
          <div className="product" key={index}>
            {value}
          </div>
        );
      });
    });
  });
};

export default Product;
