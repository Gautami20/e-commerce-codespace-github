import React from "react";
import { Data } from "./Data.js";
import "./right.css";

const RightChild = ({ selectedId }) => {
  const selectedItem = Data.find((item) => item.id === selectedId);

  return (
    <div className="card">
      <h2>{selectedItem.Name}</h2>
      <p>Price: {selectedItem.Price}</p>
    </div>
  );
};

export default RightChild;
