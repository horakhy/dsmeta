import React from "react";
import './header.css'
import logo from "../../images/logo.svg";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="notification icon" />
        <h1>DSMeta</h1>
        <p>Desenvolvido por <a href="https://github.com/horakhy">horakhy</a></p>
      </div>
    </header>
  );
};
