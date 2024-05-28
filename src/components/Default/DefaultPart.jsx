import React from "react";
import HeaderPart from "../Header/HeaderPart";
const DefaultPart = ({ children }) => {
  return (
    <div>
      <HeaderPart />
      {children}
    </div>
  );
};
export default DefaultPart;
