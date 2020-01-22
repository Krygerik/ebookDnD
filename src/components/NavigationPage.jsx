import React from "react";
import { Link } from "react-router-dom";
import "./NavigationPage.css";

export const NavigationPage = props => {
  const { title, links, isKeyNavigation, urlPath } = props.page;

  return (
    <div className="page">
      <header>
        <div>
          <h1>{title}</h1>
        </div>
      </header>
      <div className="content">
        <div className="navigationBook">
          {isKeyNavigation
            ? links.map(navLink => (
                <Link to={urlPath + "/" + navLink.key} key={navLink.key}>
                  {navLink.name}
                </Link>
              ))
            : links.map(navLink => (
                <Link to={navLink.link} key={navLink.link}>
                  {navLink.name}
                </Link>
              ))}
        </div>
      </div>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};
