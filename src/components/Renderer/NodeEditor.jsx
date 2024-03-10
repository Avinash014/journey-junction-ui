import React, { useCallback, useContext, useEffect, useState } from "react";
import { RendererContext } from "../../context/RendererContext";
import { useNodes } from "reactflow";

const NodeEditor = () => {
  const {
    setShowNodeEditor,
    currentNodeId,
    nodes,
    setNodes,
    setCurrentNodeLabel,
    currentNodeLabel,
    storeLableChange,
    // updateNodeData
  } = useContext(RendererContext);
  const nodesAll = useNodes();
  const [currentNode, setCurrentNode] = useState(null);

  // const [value, setValue] = useState(currentNodeLabel);
  const handleClick = useCallback(() => {
    console.log("seting ShowEditTool false");
    setShowNodeEditor(false);
  });
  const handleChange = useCallback((evt) => {
    setCurrentNodeLabel(evt.target.value);
    storeLableChange(currentNodeId, evt.target.value);
    // updateNodeData(currentNodeId, evt.target.value);
  }, []);
  useEffect(() => {
    console.log(currentNodeId);
    const nodeCurr = nodesAll.find((n) => n.id == currentNodeId);
    console.log(nodeCurr);
    setCurrentNode(nodeCurr);
  }, [currentNodeId]);

  return (
    <div class="p-4">
      <div class="flex flex-col space-y-1 ">
        <div>There are currently {nodesAll.length} nodes!</div>;
        <button onClick={handleClick}>close</button>
        <div>
          <input value={currentNodeLabel} onChange={handleChange} />
        </div>
        <div>x:{currentNode?.position?.x}</div>
        <div>y:{currentNode?.position?.y}</div>
      </div>
    </div>
  );
};
export default NodeEditor;
