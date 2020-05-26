import React from "react";
import { Spring } from "react-spring/renderprops";

const Component1 = () => {
  return (
    <Spring
      from={{ opacity: 0, marginTop: "-500px" }}
      to={{ opacity: 1, marginTop: "0" }}
      config={{ duration: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <div style={c1style}>
            <h1>Component 1</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
              config={{ duration: 10000 }}
            >
              {(props) => (
                <div style={props}>
                  <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>
              )}
            </Spring>
          </div>
        </div>
      )}
    </Spring>
  );
};
const counter = {
  textAlign: "center",
  width: "100px",
  borderRadius: "50%",
  background: "black",
  marginLeft: "auto",
  marginRight: "auto",
};

const c1style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};

export default Component1;
