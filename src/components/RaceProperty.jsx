import React from "react";
import { useParams } from "react-router-dom";

export const RaceProperty = props => {
  const { raceData } = props;
  let { propertyKey } = useParams();
  const propertyValue = raceData.filter(
    raceProp => raceProp.key === propertyKey
  );

  return (
    <div>
      {propertyValue[0].value.map((item, index) => (
        <div key={index} className="raceProperty">
          <label>{item.label}</label>
          {item.image ? <img src={item.image} /> : null}
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
};
