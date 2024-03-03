import React, { useState } from "react";
import RendererContext from "./RendererContext";

const defaultEdges = [{ id: "ea-b", source: "a", target: "b" }];
const defaultNodes = [
  {
    id: "a",
    type: "input",
    data: { label: "Node A" },
    position: { x: 250, y: 25 },
  },

  {
    id: "b",
    data: { label: "Node B" },
    position: { x: 100, y: 125 },
  },
  {
    id: "c",
    type: "output",
    data: { label: "Node C" },
    position: { x: 250, y: 250 },
  },
];

const RendererProvider = ({ children }) => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [nodes, setNodes] = useState(defaultNodes);
  const [edges, setEdges] = useState(defaultEdges);

  return (
    <RendererContext.Provider
      value={{
        selectedTool,
        setSelectedTool,
        nodes,
        setNodes,
        edges,
        setEdges,
      }}
    >
      {children}
    </RendererContext.Provider>
  );
};

export default RendererProvider;
