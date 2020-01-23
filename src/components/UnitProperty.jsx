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

  if (value.type === "table") {
    const { header, body } = value.tableData;

    return (
      <div>
        <table className="table">
          <thead className="table__head">
            {header.map((row, indexRow) => (
              <tr key={indexRow}>
                {row.map((col, indexCol) => {
                  if (typeof col === "object") {
                    return (
                      <th key={indexCol} {...col.attr}>
                        {col.value}
                      </th>
                    );
                  } else {
                    return <th key={indexCol}>{col}</th>;
                  }
                })}
              </tr>
            ))}
          </thead>
          <tbody className="table__body">
            {body.map((row, indexRow) => (
              <tr key={indexRow}>
                {row.map((col, indexCol) => (
                  <td key={indexCol}>{col}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="unitProperty">
          <span className="unitProperty__addition">{value.addition}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {value.data.map((item, index) => (
          <div key={index} className="unitProperty">
            <label>{item.label}</label>
            {item.image ? <img src={item.image} /> : null}
            <span className="unitProperty__value">{item.value}</span>
            <span className="unitProperty__addition">{item.addition}</span>
          </div>
        ))}
      </div>
    );
  }
};
