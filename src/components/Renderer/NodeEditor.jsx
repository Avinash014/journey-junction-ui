import React, { useCallback, useContext, useState } from "react";
import RendererContext from "../../context/RendererContext";

const NodeEditor = () => {
  const {
    setShowNodeEditor,
    currentNodeId,
    nodes,
    setNodes,
    setCurrentNodeLabel,
    currentNodeLabel,
    // updateNodeData
  } = useContext(RendererContext);
  // const [value, setValue] = useState(currentNodeLabel);
  const handleClick = useCallback(() => {
    console.log("seting ShowEditTool false");
    setShowNodeEditor(false);
  });
  const handleChange = useCallback((evt) => {
    setCurrentNodeLabel(evt.target.value);
    // updateNodeData(currentNodeId, evt.target.value);
  }, []);

  return (
    <div class="p-4">
      <div class="flex flex-col space-y-1 ">
        <button onClick={handleClick}>close</button>
        <div>
          <input value={currentNodeLabel} onChange={handleChange} />
        </div>
      </div>
    </div>
  );
};
export default NodeEditor;
