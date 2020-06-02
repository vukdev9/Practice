import React, { useState } from "react";
import "./Subcategory.css";
import Product from "../Product/Product";

const Subcategory = ({ subcategory, category }) => {
  const [product, setProduct] = useState([]);
  const [showProduct, setShowProduct] = useState(false);

  const mouseEnter = (e) => {
    setShowProduct(true);
    const hoveredCategory = category.subCategories.find(
      (subCategory) => subCategory.code === subcategory
    );

    const products = hoveredCategory.products.map((pro) => pro.code);

    setProduct(products);
  };
  const mouseLeave = () => {
    setShowProduct(false);
  };

  return (
    <div
      className="subcategories"
      key={subcategory}
      onMouseEnter={() => mouseEnter(subcategory)}
      onMouseLeave={() => mouseLeave()}
      id={subcategory}
    >
      {subcategory}
      {showProduct && <Product product={product} />}
    </div>
  );
};

export default Subcategory;
