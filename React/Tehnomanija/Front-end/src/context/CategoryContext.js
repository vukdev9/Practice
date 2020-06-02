import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// const Category = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(async () => {
//     const result = await axios("http://localhost:8080/categories");
//     setCategories(result.data);
//   }, []);
// };

// export const CategoryContext = createContext(Category);

// export const CategoryProvaider = ({ children }) => {
//   return (
//     <CategoryContext.Provider value={{ categories: categories }}>
//       {children}
//     </CategoryContext.Provider>
//   );
// };
