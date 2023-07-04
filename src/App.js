import "./styles.css";

import React, { useState } from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import { Data } from "./Data";

const App = () => {
  const [selectedId, setSelectedId] = useState(3);

  const handleItemClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="display">
      <LeftChild data={Data} onItemClick={handleItemClick} />
      <RightChild selectedId={selectedId} />
    </div>
  );
};

export default App;
