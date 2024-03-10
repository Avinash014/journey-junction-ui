import React, { useCallback, useEffect, useState } from "react";
import RendererContext from "./RendererContext";

const defaultEdges = [];
const defaultNodes = [
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
  const [showNodeEditor, setShowNodeEditor] = useState(false);
  const [selectedTool, setSelectedTool] = useState(null);
  const [nodes, setNodes] = useState(defaultNodes);
  const [edges, setEdges] = useState(defaultEdges);
  const [currentNodeId, setCurrentNodeId] = useState(null);
  const [currentNode, setCurrentNode] = useState(null);
  const [currentNodeLabel, setCurrentNodeLabel] = useState("");
  useEffect(() => {
    if (!currentNodeId) return;
    var matchNode = nodes.find((node) => node.id == currentNodeId);
    setCurrentNode(matchNode);
    setCurrentNodeLabel(matchNode?.data?.label);
  }, [currentNodeId]);

  return (
    <RendererContext.Provider
      value={{
        showNodeEditor,
        setShowNodeEditor,
        selectedTool,
        setSelectedTool,
        nodes,
        setNodes,
        edges,
        setEdges,
        currentNodeId,
        setCurrentNodeId,
        currentNode,
        currentNodeLabel,
        setCurrentNodeLabel,
      }}
    >
      {children}
    </RendererContext.Provider>
  );
};

export default RendererProvider;
