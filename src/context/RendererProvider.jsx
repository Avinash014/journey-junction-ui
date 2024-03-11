import React, { useCallback, useEffect, useState, useReducer } from "react";
import { RendererContext, RendererDispatchContext } from "./RendererContext";

const defaultEdges = [];
const defaultNodes = [];

const RendererProvider = ({ children }) => {
  // const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
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
  // useEffect(() => {
  //   storeNodeChange();
  // }, [nodes]);
  // useEffect(() => {
  //   storeEdgeChange();
  // }, [edges]);

  const storeLableChange = useCallback((id, newLabel) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => {
        if (node.id == id) {
          return { ...node, data: { ...node.data, label: newLabel } };
        } else return node;
      })
    );
  });
  const storeNodeChange = useCallback((id, changedNode) => {
    setNodes(
      nodes.map((node) => {
        if (node.id == id) {
          return changedNode;
        } else return node;
      })
    );
  });
  const storeEdgeChange = useCallback((id, changedEdge) => {
    setEdges(
      edges.map((edge) => {
        if (edge.id == id) {
          return changedEdge;
        } else return node;
      })
    );
  });

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
        storeLableChange,
        storeNodeChange,
        storeEdgeChange,
      }}
    >
      <RendererDispatchContext.Provider value={null}>
        {children}
      </RendererDispatchContext.Provider>
    </RendererContext.Provider>
  );
};

export default RendererProvider;
