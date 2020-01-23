import React from "react";
import { useParams } from "react-router-dom";
import "./RaceProperty.css";

export const RaceProperty = props => {
  const { raceData } = props;
  let { propertyKey } = useParams();
  const currentProperty = raceData.filter(
    raceProp => raceProp.key === propertyKey
  );

  const { value } = currentProperty[0];

  return (
    <div>
      {value.map((item, index) => (
        <div key={index} className="raceProperty">
          <label>{item.label}</label>
          {item.image ? <img src={item.image} /> : null}
          <span className="raceProperty__value">{item.value}</span>
          <span className="raceProperty__addition">{item.addition}</span>
        </div>
      ))}
    </div>
  );
};
