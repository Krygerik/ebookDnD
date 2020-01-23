import React from "react";
import { Link } from "react-router-dom";

export const PageNavigation = props => {
  const { data, match, propertyKey } = props;

  return (
    <div className="pageNavigation">
      {data.map((raceData, index) => {
        const currentLink = location.hash.split(propertyKey).pop();
        const isActive = currentLink
          ? currentLink === "/" + raceData.key
          : index === 0;

        return (
          <Link to={`${match.url}/${raceData.key}`} key={index}>
            <div
              className={`pageNavigation__link ${
                isActive ? "pageNavigation__link--active" : ""
              }`}
            >
              {raceData.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
