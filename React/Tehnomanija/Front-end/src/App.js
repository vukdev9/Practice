import React, { Component } from "react";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Shufler from "./components/Shufler/Shufler";
import GridCard from "./components/GridCard/GridCard";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import DoubleGrid from "./components/DoubleGrid/DoubleGrid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridData: [
        {
          image:
            "https://www.gigatron.rs/img/products/medium/image5cd54752cb17c.png",
          title: "VOX LTF 500",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
        },
        {
          image:
            "https://static.tehnomanija.rs/UserFiles/category_images/362.png",
          title: "BOSCH Frost400",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
        },
        {
          image:
            "https://static.tehnomanija.rs/UserFiles/category_images/996.png",
          title: "GORENJE TP10",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
        },
        {
          image: "https://www.tehnomanija.rs/UserFiles/category_images/633.png",
          title: "LG NT9",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
        },
        {
          image:
            "https://dijaspora.shop/media/catalog/product/cache/1/thumbnail/1000x1000/9df78eab33525d08d6e5fb8d27136e95/i/m/image5c0507a39c01e.png",
          title: "GORENJE DRY5",
          body:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Category />
        <Shufler />
        <SectionTitle title="Izdvajamo iz Ponude" />
        <div className="row gridParent">
          {this.state.gridData.map((grid, index) => {
            return (
              <GridCard
                image={grid.image}
                title={grid.title}
                body={grid.body}
                key={index}
              />
            );
          })}
        </div>
        <DoubleGrid />
        <SectionTitle title="Bestseller" />
      </div>
    );
  }
}

export default App;
