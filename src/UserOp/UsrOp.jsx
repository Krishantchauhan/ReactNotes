import React from "react";
import "./UsrOp.css";

const UsrOp = (props) => {
  return (
    <div className="test">
      <p onClick={props.click}>
        {" "}
        {props.name} is My only Life .at Age of {props.age}
      </p>
      <input type="text" onChange={props.changed}></input>
    </div>
  );
};

export default UsrOp;
