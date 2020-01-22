import React from "react";
import { useParams } from "react-router-dom";
import { getRaceByKey } from "../content/model";

export const ContentPage = () => {
  const { key } = useParams();
  const { name, description } = getRaceByKey(key);

  return (
    <div className="page">
      <header>
        <div>
          <h1>{name}</h1>
        </div>
      </header>
      <div className="content">
        <div className="mainNavigation">
          <div className="pageContent">
            {description.map((item, index) => (
              <div key={index} className="raceProperty">
                <label>{item.label}</label>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <div></div>
      </footer>
    </div>
  );
};
