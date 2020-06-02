import React, { useState } from "react";
import "./DropdownCategory.css";
import Subcategory from "../Subcategory/Subcategory";

const DropdownCategory = ({ category, categoryTitle, icon }) => {
  const [subcategories, setSubcategories] = useState([]);
  const [showSubcategories, setShowSubcategories] = useState(false);

  const mouseEnter = () => {
    setShowSubcategories(true);
    const subCategories = category.subCategories
      .filter((value) => value !== null)
      .map((subcategory) => subcategory.code);
    setSubcategories(subCategories);
  };

  const mouseLeave = () => {
    setShowSubcategories(false);
  };

  return (
    <div
      className="dropdownCategory"
      onMouseEnter={() => mouseEnter()}
      onMouseLeave={() => mouseLeave()}
    >
      <i className={icon}></i>
      <a href="!#">{categoryTitle}</a>
      {showSubcategories &&
        subcategories.map((subCategory, index) => {
          return (
            <Subcategory
              id={subCategory}
              key={index}
              category={category}
              subcategory={subCategory}
            />
          );
        })}
    </div>
  );
};

export default DropdownCategory;
