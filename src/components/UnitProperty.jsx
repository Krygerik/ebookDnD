import React from "react";
import { useParams } from "react-router-dom";
import "./UnitProperty.css";

export const UnitProperty = props => {
  const { unitData } = props;
  let { propertyKey } = useParams();
  const currentProperty = unitData.filter(
    raceProp => raceProp.key === propertyKey
  );

  const { value } = currentProperty[0];

  return (
    <div>
      {value.map((item, index) => (
        <div key={index} className="unitProperty">
          <label>{item.label}</label>
          {item.image ? <img src={item.image} /> : null}
          <span className="unitProperty__value">{item.value}</span>
          <span className="unitProperty__addition">{item.addition}</span>
        </div>
      ))}
    </div>
  );
};
