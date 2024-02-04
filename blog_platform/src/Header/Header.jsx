import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">React & Node</span>
      </div>
      <img
        className="headerImg"
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-scenery-free-photo.jpg?w=2210&quality=70"
        alt=""
      />
    </div>
  );
};

export default Header;
