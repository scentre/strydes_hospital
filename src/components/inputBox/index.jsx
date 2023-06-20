import React from "react";

import "./inputBox.scss";
const InputBox = ({ label, size }) => {
  return (
    <div className="input-wrapper px-5">
      {!size && <label for="first">{label}</label>}
      <input type="text" className={size && "p-10"} />
    </div>
  );
};

export default InputBox;
