import React from "react";
import { Link } from "react-router-dom";
import { getLinks } from "../content/race.js";

export const RaceNavigationPage = () => {
  const { title, links } = getLinks();

  return (
    <div className="mainNavigation">
      <h1>{title}</h1>
      {links.map((raceLink, index) => (
        <Link to={`/race/${raceLink.key}`} key={index}>
          {raceLink.name}
        </Link>
      ))}
    </div>
  );
};
