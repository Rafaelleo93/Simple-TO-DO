import PropTypes from "prop-types";
import React from "react";

export const ItemsLeft = (props) => {
  return (
    <div className="alig-items-center justify-content-center text-white">
      <span>{props.list.length} Tareas pendientes</span>
    </div>
  );
};

ItemsLeft.PropTypes = {
  list: PropTypes.string,
};
