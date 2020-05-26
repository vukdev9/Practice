import React from "react";
import "./SlideMenu.css";
import SlideMenuItem from "../SlideMenuItem/SlideMenuItem";

const SlideMenu = () => {
  return (
    <nav className="navSlideMenu">
      <ul className="slideMenu">
        <SlideMenuItem title="SmartHome" icon="" />
        <SlideMenuItem title="Apple" icon="" />
        <SlideMenuItem title="Akcije i katalozi" icon="far fa-file-alt" />
        <SlideMenuItem title="Blog" icon="far fa-file-alt" />
        <SlideMenuItem title="Prodavnice" icon="fas fa-map-marker-alt" />
        <SlideMenuItem title="Kontakt" icon="fas fa-mobile-alt" />
        <SlideMenuItem title="Pravna lica" icon="" />
      </ul>
    </nav>
  );
};

export default SlideMenu;
