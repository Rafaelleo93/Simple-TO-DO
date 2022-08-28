import React from "react";
import { ToDo } from "./ToDo.jsx";
import PropTypes from "prop-types";

export const TodoList = (props) => {
  return (
    <div className="w-100 d-flex flex-column">
      {props.list.map((todo, index) => {
        return (
          <ToDo
            todo={todo}
            key={index}
            id={index}
            setterlist={props.setterList}
            list={props.list}
          />
        );
      })}
    </div>
  );
};

TodoList.propTypes = {
  setterList: PropTypes.func,
  list: PropTypes.array,
};
