import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2>Tehnomanija</h2>
      <input placeholder="Search..."></input>
      <button>
        <i className="fas fa-search"></i>
      </button>
      <div>
        <div>
          <div>
            <i className="fab fa-gratipay"></i>
            <span>OMILJENO</span>
          </div>
          <div>
            <i className="fas fa-user-circle"></i>
            <span>PRIJAVA</span>
          </div>
          <div>
            <i className="fas fa-cart-arrow-down"></i>
            <span>KORPA</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
