import React from "react";
import { getRaceByKey } from "../content/race";
import { useParams } from "react-router-dom";

export const RacePage = () => {
  const { key } = useParams();
  const { name, description } = getRaceByKey(key);

  return (
    <div className="mainNavigation">
      <h1>{name}</h1>
      <div className="pageContent">
        {description.map((item, index) => (
          <div key={index} className="raceProperty">
            <label>{item.label}</label>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
