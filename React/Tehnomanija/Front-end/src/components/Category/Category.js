import React, { Component } from "react";
import "./Category.css";
import axios from "axios";
import DropdownCategory from "../DropdownCategory/DropdownCategory";
import SlideMenu from "../SlideMenu/SlideMenu";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      categories: [],
      subcategories: [],
      product: [],
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/categories").then((res) =>
      this.setState({
        categories: res.data.map((categories) => categories),
      })
    );
  }

  mouseEnter() {
    this.setState({ showDropdown: true });
  }

  mouseLeave() {
    this.setState({ showDropdown: false });
  }

  render() {
    const icon = [
      "fas fa-tv",
      "fas fa-desktop",
      "fas fa-car",
      "fas fa-motorcycle",
      "fas fa-print",
    ];
    return (
      <div>
        <nav onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
          <i className="fas fa-align-justify"></i>
          <span>KATEGORIJE PROIZVODA</span>
          {this.state.showDropdown
            ? this.state.categories.map((category, index) => {
                return (
                  <DropdownCategory
                    categoryTitle={category.code}
                    key={index}
                    icon={icon[index]}
                    id={category.code}
                  />
                );
              })
            : null}
        </nav>
        <SlideMenu />
      </div>
    );
  }
}

export default Category;
