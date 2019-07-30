import React from "react";

function MainButton(props) {
  return (
    <div className="mainBtn">
      <h2 className="btnTitle">{props.title}</h2>
      <p>{props.content}</p>
      <p className="arrow">{props.arrow}</p>
    </div>
  );
}

export default MainButton;