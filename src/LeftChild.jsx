import React from "react";
import "./left.css";

const LeftChild = ({ data, onItemClick }) => {
  return (
    <div className="col">
      {data.map((item) => (
        <button
          className="col-button"
          key={item.id}
          onClick={() => onItemClick(item.id)}
        >
          {item.Name}
        </button>
      ))}
    </div>
  );
};

export default LeftChild;
