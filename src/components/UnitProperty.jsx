import React from "react";
import { useParams } from "react-router-dom";
import { Table } from "./Table";
import "./UnitProperty.css";

export const UnitProperty = props => {
  const { unitData } = props;
  let { propertyKey } = useParams();
  const currentProperty = unitData.filter(
    raceProp => raceProp.key === propertyKey
  );

  const {value} = currentProperty[0]

  return (
    <div>
      {value.map((item, index) => (
        <div key={index} className="unitProperty">
          <label>{item.label}</label>
          {item.image ? <img src={item.image} /> : null}
          {item.type === 'table'
            ? (<Table tableKey={item.value} />)
            : (<span className="unitProperty__value">{
              item.value.map((propText, i) => (
                <p key={i}>{propText}</p>
              ))
              }</span>)
          }
          {item.addition 
            ? (<span className="unitProperty__addition">{item.addition}</span>)
            : null
          }
        </div>
      ))}
    </div>
  );
};
