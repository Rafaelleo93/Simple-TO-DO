import React from "react";
import PropTypes from "prop-types";

export const TodoForm = (props) => {
  function addTodo(e) {
    props.setter(e.target.value);
  }
  function addInput(e) {
    if (e.key === "Enter") {
      props.setterList((prevList) => [props.value, ...prevList]);
      props.setter("");
      e.stopPropagation();
    }
    console.log(e);
  }

  return (
    <div className="w-100 input">
      <input
        placeholder={props.text}
        style={{ witdht: "100%" }}
        value={props.value}
        onChange={addTodo}
        onKeyUp={addInput}
      ></input>
    </div>
  );
};
TodoForm.propTypes = {
  setterList: PropTypes.func,
  setter: PropTypes.func,
  value: PropTypes.string,
  text: PropTypes.string,
};
