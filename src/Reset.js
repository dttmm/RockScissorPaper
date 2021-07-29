import React from "react";
import src from "./assets/ic-reset.svg";

const Reset = ({ className = "", onClick }) => {
  return (
    <>
      <img className={className} src={src} onClick={onClick}></img>
    </>
  );
};

export default Reset;
