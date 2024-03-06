import { useCallback, useContext, useState } from "react";
import { Handle, Position } from "reactflow";
import RendererContext from "../../../context/RendererContext";
import "./text-updater-node.css";

const handleStyle = { left: 10 };

function TextUpdaterNode({
  data,
  isConnectable,
  leftHandle,
  rightHandle,
  topHandle,
  bottomHandle,
}) {
  const { setShowNodeEditor } = useContext(RendererContext);
  const onChange = useCallback((evt) => {
    setInputValue(evt.target.value);
  }, []);
  const [inputValue, setInputValue] = useState(data.label);
  const handleFocus = () => {
    console.log("seting ShowEditTool true");
    setShowNodeEditor(true);
  };
  
  return (
    <div
      className="text-updater-node"
      onFocus={handleFocus}
    >
      <div>
        <input
          id="text"
          name="text"
          value={inputValue}
          onChange={onChange}
          className="nodrag"
        />
      </div>
      {topHandle && (
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
        />
      )}
      {rightHandle && (
        <Handle
          type="source"
          position={Position.Right}
          isConnectable={isConnectable}
        />
      )}
      {bottomHandle && (
        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
        />
      )}
      {leftHandle && (
        <Handle
          type="source"
          position={Position.Left}
          isConnectable={isConnectable}
        />
      )}
    </div>
  );
}
export default TextUpdaterNode;
