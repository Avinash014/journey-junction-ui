import { useCallback, useContext, useEffect, useState } from "react";
import { Handle, Position } from "reactflow";
import {RendererContext} from "../../../context/RendererContext";
import "./text-updater-node.css";

const handleStyle = { left: 10 };

function TextUpdaterNode(props) {
  const {
    setShowNodeEditor,
    setCurrentNodeId,
    currentNode,
    currentNodeLabel,
    currentNodeId,
  } = useContext(RendererContext);
  const {
    id,
    data,
    isConnectable,
    leftHandle,
    rightHandle,
    topHandle,
    bottomHandle,
  } = props;
  const handleFocus = () => {
    console.log("seting ShowEditTool true");
    console.log(props);
    setShowNodeEditor(true);
    setCurrentNodeId(id);
    console.log(id);
  };
  const [value, setValue] = useState(data?.label);
  // useEffect(() => {
  //   if(id == currentNodeId)
  //   console.log(currentNode);
  // }, [currentNode]);
  useEffect(() => {
    if (id == currentNodeId) setValue(currentNodeLabel);
  }, [currentNodeLabel]);

  return (
    <div className="text-updater-node" onClick={handleFocus}>
      {/* <input id={"value-" + id} onChange={handleChange} value={value} /> */}
      <div id={"value-" + id}>{value}</div>
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
