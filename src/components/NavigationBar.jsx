import React from "react";
import { getMainNavigation } from "../content/model";
import { Link } from "react-router-dom";

export const NavigationBar = props => {
  const { urlPath } = getMainNavigation();
  const { backUrl } = props;

  return (
    <div className="navigationBar">
      <Link to={urlPath}>
        <button className="btn">К содержанию</button>
      </Link>
      {backUrl ? (
        <Link to={backUrl}>
          <button className="btn">Назад</button>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};
