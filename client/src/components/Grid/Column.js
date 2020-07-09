import React from "react";

export const Column = ({ fluid, children }) => (
  <div className={`column${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
);