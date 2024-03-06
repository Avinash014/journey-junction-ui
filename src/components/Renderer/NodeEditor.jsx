import React, { useCallback, useContext } from "react";
import RendererContext from "../../context/RendererContext";

const NodeEditor = () => {
  const { setShowNodeEditor } = useContext(RendererContext);
  const handleClick = useCallback(() => {
    console.log("seting ShowEditTool false");
    setShowNodeEditor(false);
  });

  return (
    <div class="p-4">
      <div class="flex flex-col space-y-1 ">
        <button onClick={handleClick}>close</button>
      </div>
    </div>
  );
};
export default NodeEditor;
