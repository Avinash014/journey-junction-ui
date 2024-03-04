import { useCallback, useContext, useEffect, useState } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
  Controls,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import RendererContext from "../../context/RendererContext";
import TextUpdaterNode from "../Nodes/TextUpdaterNode";

import "reactflow/dist/style.css";

// const defaultEdges = [{ id: "ea-b", source: "a", target: "b" }];
// const defaultNodes = [
//   {
//     id: "a",
//     type: "input",
//     data: { label: "Node A" },
//     position: { x: 250, y: 25 },
//   },

//   {
//     id: "b",
//     data: { label: "Node B" },
//     position: { x: 100, y: 125 },
//   },
//   {
//     id: "c",
//     type: "output",
//     data: { label: "Node C" },
//     position: { x: 250, y: 250 },
//   },
// ];

const edgeOptions = {
  animated: true,
  style: {
    stroke: "white",
  },
};

const connectionLineStyle = { stroke: "white" };

let nodeId = 0;
const nodeTypes = { textUpdater: TextUpdaterNode };
function Flow() {
  // const [nodes, setNodes] = useState(defaultNodes);
  // const [edges, setEdges] = useState(defaultEdges);
  const { selectedTool, nodes, setNodes, edges, setEdges } =
    useContext(RendererContext);
  const reactFlowInstance = useReactFlow();
  const toolSelectionHandler = useCallback((selectedTool) => {
    if (selectedTool == null) return;
    const id = `${++nodeId}`;
    const newNode = {
      id,
      position: {
        // x: Math.random() * 500,
        // y: Math.random() * 500,
        x: 0,
        y: 0,
      },
      data: {
        label: `${selectedTool} ${id}`,
      },
    };
    reactFlowInstance.addNodes(newNode);
  }, []);
  useEffect(() => toolSelectionHandler(selectedTool), [selectedTool]);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <>
      <div style={{ height: "800px", backgroundColor: "pink" }}>
        {/* <div>{selectedTool}</div> */}
        {/* <ReactFlow
          defaultNodes={defaultNodes}
          defaultEdges={defaultEdges}
          defaultEdgeOptions={edgeOptions}
          fitView
          style={{
            backgroundColor: "#D3D2E5",
          }}
          connectionLineStyle={connectionLineStyle}
        > */}
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          // nodeOrigin={nodeOrigin}
          fitView
        >
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}

export default function () {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
