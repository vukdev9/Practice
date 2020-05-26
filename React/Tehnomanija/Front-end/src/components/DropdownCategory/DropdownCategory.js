import React, { Component } from "react";
import "./DropdownCategory.css";
import axios from "axios";
import Subcategory from "../Subcategory/Subcategory";

class DropdownCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubcateries: false,
      categories: [],
      subcategories: [],
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/categories").then((res) =>
      this.setState({
        categories: res.data.map((cat) => cat),
      })
    );
  }

  mouseEnter = () => {
    this.setState({ showSubcateries: true });
    const currentCategory = this.state.categories.filter(
      (cat) => cat.code === this.props.categoryTitle
    );

    const subCategories = currentCategory.map(
      (subValue) => subValue.subCategories
    );
    this.setState({
      subcategories: subCategories
        .filter((value) => value != null)
        .map((data) => data.map((subCode) => subCode.code)),
    });
  };

  mouseLeave = () => {
    this.setState({ showSubcateries: false });
  };

  render() {
    return (
      <div
        className="dropdownCategory"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        <i className={this.props.icon}></i>
        <a href="!#">{this.props.categoryTitle}</a>
        {this.state.showSubcateries
          ? this.state.subcategories.map((subCategory, index) => {
              return <Subcategory key={index} subcategory={subCategory} />;
            })
          : null}
      </div>
    );
  }
}

export default DropdownCategory;
