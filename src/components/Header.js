import React from "react";

const Header = (props) => {
  return (
    <div className="p-3">
      <header>
        <h1> {props.text} </h1>
      </header>
    </div>
  );
};

export default Header;
