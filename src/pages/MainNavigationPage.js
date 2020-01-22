import React from "react";
import { Link } from "react-router-dom";
import "../styles/MainNavigationPage.css";
import { title, navigationlinks } from "../content/mainNavigation";

export const MainNavigationPage = () => {
  return (
    <div className="mainNavigation">
      <h1>{title}</h1>
      {navigationlinks.map(navLink => (
        <Link to={navLink.link} key={navLink.link}>
          {navLink.name}
        </Link>
      ))}
    </div>
  );
};
