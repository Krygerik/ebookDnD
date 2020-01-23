import React from "react";
import { useParams } from "react-router-dom";
import { getRaceByKey } from "../content/model";
import { NavigationBar } from "./NavigationBar";

export const ContentPage = props => {
  const { key } = useParams();
  const { name, description } = getRaceByKey(key);
  const { parrentUrl } = props;

  return (
    <div className="page">
      <header>
        <div>
          <h1>{name}</h1>
          <NavigationBar backUrl={parrentUrl} />
        </div>
      </header>
      <div className="content">
        <div className="mainNavigation">
          <div className="pageContent">
            {description.map((item, index) => (
              <div key={index} className="raceProperty">
                <label>{item.label}</label>
                {item.image ? <img src={item.image} /> : null}
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
