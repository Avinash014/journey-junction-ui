import React, { useState } from "react";
import RendererContext from "./RendererContext";

const RendererProvider = ({ children }) => {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <RendererContext.Provider value={{ selectedTool, setSelectedTool }}>
      {children}
    </RendererContext.Provider>
  );
};

export default RendererProvider;
