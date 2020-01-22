import React from "react";
import { Link } from "react-router-dom";
import "./MainNavigationPage.css";
import { title, navigationlinks } from "../content/mainNavigation.json";

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