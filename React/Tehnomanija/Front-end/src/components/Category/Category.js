import React, { useState, useEffect } from "react";
import "./Category.css";
import DropdownCategory from "../DropdownCategory/DropdownCategory";
import SlideMenu from "../SlideMenu/SlideMenu";
import axios from "axios";

const Category = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function result() {
      let result = await axios("http://localhost:8080/categories");
      setCategory(result.data);
    }
    result();
  }, []);

  const mouseEnter = () => {
    setShowDropdown(true);
  };

  const mouseLeave = () => {
    setShowDropdown(false);
  };

  const icon = [
    "fas fa-tv",
    "fas fa-desktop",
    "fas fa-car",
    "fas fa-motorcycle",
    "fas fa-print",
  ];

  return (
    <div>
      <nav onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
        <i className="fas fa-align-justify"></i>
        <span>KATEGORIJE PROIZVODA</span>
        {showDropdown &&
          category.map((category, index) => {
            return (
              <DropdownCategory
                category={category}
                categoryTitle={category.code}
                key={index}
                icon={icon[index]}
                id={category.code}
              />
            );
          })}
      </nav>
      <SlideMenu />
    </div>
  );
};

export default Category;
