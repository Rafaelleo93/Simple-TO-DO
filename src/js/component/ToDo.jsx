import React from "react";
import PropTypes from "prop-types";

export const ToDo = (props) => {
  const deleteTodo = (e) => {
    props.setterlist((prevList) =>
      prevList.filter((todo, index) => {
        if (index !== props.id) return true;
      })
    );
  };

  return (
    <li className="d-flex justify-content-between mb-1 text-white">
      {props.todo}
      <span className="delete" onClick={deleteTodo}>
        ❌
      </span>
    </li>
  );
};

ToDo.propTypes = {
  todo: PropTypes.string,
  setterlist: PropTypes.func,
  // list: PropTypes.string,
  id: PropTypes.number,
};
