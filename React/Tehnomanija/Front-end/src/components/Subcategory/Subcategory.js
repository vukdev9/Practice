import React, { Component } from "react";
import "./Subcategory.css";
import axios from "axios";
import Product from "../Product/Product";

class Subcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      subcategories: [],
      product: [],
      showProduct: false,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/categories").then((res) =>
      this.setState({
        categories: res.data.map((cat) => cat),
      })
    );
  }

  mouseEnter = (e) => {
    this.setState({ showProduct: true });
    const currentCategory = this.state.categories.map(
      (cat) => cat.subCategories
    );
    const allSubCategories = currentCategory.filter((value) => value !== null);
    const hoverCategory = allSubCategories.map((subCategory) =>
      subCategory.filter((subCategory) => subCategory.code === e.target.id)
    );
    const products = hoverCategory.map((subValue) =>
      subValue.map((products) =>
        products.products.map((productCode) => productCode.code)
      )
    );
    this.setState({ product: products });
  };
  mouseLeave = () => {
    this.setState({ showProduct: false });
  };

  render() {
    return this.props.subcategory.map((data, index) => {
      return (
        <div
          className="subcategories"
          key={index}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          id={data}
        >
          {data}
          {this.state.showProduct && (
            <Product product={this.state.product} key={index} />
          )}
        </div>
      );
    });
  }
}

export default Subcategory;
